import React, { useState, useEffect } from "react";
import Snake from "./Snake";
import Food from "./Food";
import { Box, Button, Divider, Typography, Grid } from "@mui/material";

const getRandomCoordinates = () => {
  let min = 1;
  let max = 29;
  let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 10;
  let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 10;
  return [x, y];
};

const Game = () => {
  const [snakeDots, setSnakeDots] = useState([
    [0, 0],
    [10, 0],
  ]);
  const initialSnake = [
    [0, 0],
    [10, 0],
  ];
  const [pressedKey, setPressedKey] = useState("");

  const [food, setFood] = useState(getRandomCoordinates());
  const [gameOver, setGameOver] = useState(false);
  const [direction, setDirection] = useState("RIGHT");
  const [speed, setSpeed] = useState(250);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (gameStarted) {
        switch (e.keyCode) {
          case 38:
            setDirection((prevDirection) =>
              prevDirection !== "DOWN" ? "UP" : prevDirection
            );
            setPressedKey("UP");
            break;
          case 40:
            setDirection((prevDirection) =>
              prevDirection !== "UP" ? "DOWN" : prevDirection
            );
            setPressedKey("DOWN");
            break;
          case 37:
            setDirection((prevDirection) =>
              prevDirection !== "RIGHT" ? "LEFT" : prevDirection
            );
            setPressedKey("LEFT");
            break;
          case 39:
            setDirection((prevDirection) =>
              prevDirection !== "LEFT" ? "RIGHT" : prevDirection
            );
            setPressedKey("RIGHT");
            break;
          default:
            break;
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [gameStarted]);

  useEffect(() => {
    if (gameStarted) {
      const moveSnake = () => {
        setSnakeDots((prevSnakeDots) => {
          let dots = [...prevSnakeDots];
          let head = [...dots[dots.length - 1]];

          switch (direction) {
            case "RIGHT":
              head = [head[0] + 10, head[1]];
              break;
            case "LEFT":
              head = [head[0] - 10, head[1]];
              break;
            case "DOWN":
              head = [head[0], head[1] + 10];
              break;
            case "UP":
              head = [head[0], head[1] - 10];
              break;
            default:
              break;
          }

          dots.push(head);
          dots.shift();
          return dots;
        });
      };

      const checkIfOutOfBorders = () => {
        let head = snakeDots[snakeDots.length - 1];
        if (head[0] >= 230 || head[1] >= 230 || head[0] < 0 || head[1] < 0) {
          onGameOver();
        }
      };

      const checkIfCollapsed = () => {
        let snake = [...snakeDots];
        let head = snake[snake.length - 1];
        snake.pop();
        snake.forEach((dot) => {
          if (head[0] === dot[0] && head[1] === dot[1]) {
            onGameOver();
          }
        });
      };

      const checkIfEat = () => {
        let head = snakeDots[snakeDots.length - 1];
        if (head[0] === food[0] && head[1] === food[1]) {
          setFood(getRandomCoordinates());
          enlargeSnake();
          increaseSpeed();
        }
      };

      const enlargeSnake = () => {
        setSnakeDots((prevSnakeDots) => {
          let newSnake = [...prevSnakeDots];
          newSnake.unshift([]);
          return newSnake;
        });
      };

      const increaseSpeed = () => {
        setSpeed((prevSpeed) => (prevSpeed > 20 ? prevSpeed - 20 : prevSpeed));
      };

      const onGameOver = () => {
        setGameOver(true);
        setFood(getRandomCoordinates());
        setDirection("RIGHT");
        setSpeed(250);
        setGameStarted(false);
      };

      const interval = setInterval(() => {
        moveSnake();
        checkIfOutOfBorders();
        checkIfCollapsed();
        checkIfEat();
      }, speed);

      return () => clearInterval(interval);
    }
  }, [gameStarted, snakeDots, direction, food, speed]);

  const startGame = () => {
    setSnakeDots(initialSnake);
    setFood(getRandomCoordinates());
    setDirection("RIGHT");
    setSpeed(250);
    setGameOver(false);
    setGameStarted(true);
  };

  const handleDirectionChange = (newDirection) => {
    if (
      (newDirection === "UP" && direction !== "DOWN") ||
      (newDirection === "DOWN" && direction !== "UP") ||
      (newDirection === "LEFT" && direction !== "RIGHT") ||
      (newDirection === "RIGHT" && direction !== "LEFT")
    ) {
      setDirection(newDirection);
      setPressedKey(newDirection);
    }
  };

  return (
    <Box p={3} className="game-area">
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <Box
            className="plateau"
            sx={{
              position: "relative",
              width: "230px",
              height: "230px",
              border: "2px solid #000",
              margin: "0 auto",
              backgroundColor: "#FFF",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Box mt={5} textAlign="center">
              <Button
                className="button-new-game"
                variant="contained"
                onClick={startGame}
                disabled={gameStarted}
                sx={{
                  display: gameStarted ? "none" : "block",
                  background:
                    "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                  border: 0,
                  borderRadius: 3,
                  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
                  color: "white",
                  height: 48,
                  padding: "0 30px",
                  fontFamily: "Pixel, Arial, sans-serif",
                  textTransform: "uppercase",
                  fontSize: "1rem",
                  letterSpacing: "1px",
                  "&:hover": {
                    background:
                      "linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)",
                  },
                }}
              >
                Nouvelle partie
              </Button>

              {gameOver && (
                <Box
                  className="game-over"
                  sx={{
                    zIndex: "10",
                    position: "absolute",
                    top: "90%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    padding: "20px",
                    borderRadius: "5px",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <Typography className="title-go" variant="h4">
                    Game Over
                  </Typography>
                  <Divider className="divider-go" sx={{ mt: 2 }} />
                  <Typography className="score-go" mt={4} variant="subtitle1">
                    Points {snakeDots.length}
                  </Typography>
                </Box>
              )}
            </Box>
            {gameStarted && (
              <>
                <Snake snakeDots={snakeDots} />
                <Food dot={food} />
              </>
            )}
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            className="pad"
            sx={{
              zIndex: "1",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <Box mt={4}>
              <Button
                variant="contained"
                onClick={() => handleDirectionChange("UP")}
                sx={{
                  marginBottom: "10px",
                  backgroundColor:
                    pressedKey === "UP"
                      ? "white"
                      : "var(--theme-primary-color-back)",
                  color: "var(--theme-secondary-color)",
                  filter: pressedKey === "UP" ? "brightness(70%)" : "none",
                  boxShadow: pressedKey === "UP" ? "0px 0px 8px white" : "none",
                  transition: "background-color 0.3s ease",
                }}
                style={{
                  background:
                    pressedKey === "UP"
                      ? "var(--game-over-background)"
                      : "var(--theme-primary-color-back)",
                }}
              >
                ↑
              </Button>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="contained"
                  onClick={() => handleDirectionChange("LEFT")}
                  sx={{
                    marginRight: "10px",
                    backgroundColor:
                      pressedKey === "LEFT"
                        ? "white"
                        : "var(--theme-primary-color-back)",
                    color: "var(--theme-secondary-color)",
                    filter: pressedKey === "LEFT" ? "brightness(70%)" : "none",
                    boxShadow:
                      pressedKey === "LEFT" ? "0px 0px 8px white" : "none",
                    transition: "background-color 0.3s ease",
                  }}
                  style={{
                    background:
                      pressedKey === "LEFT"
                        ? "var(--game-over-background)"
                        : "var(--theme-primary-color-back)",
                  }}
                >
                  ←
                </Button>
                <Button
                  variant="contained"
                  onClick={() => handleDirectionChange("DOWN")}
                  sx={{
                    backgroundColor:
                      pressedKey === "DOWN"
                        ? "white"
                        : "var(--theme-primary-color-back)",
                    color: "var(--theme-secondary-color)",
                    filter: pressedKey === "DOWN" ? "brightness(70%)" : "none",
                    boxShadow:
                      pressedKey === "DOWN" ? "0px 0px 8px white" : "none",
                    transition: "background-color 0.3s ease",
                  }}
                  style={{
                    background:
                      pressedKey === "DOWN"
                        ? "var(--game-over-background)"
                        : "var(--theme-primary-color-back)",
                  }}
                >
                  ↓
                </Button>
                <Button
                  variant="contained"
                  onClick={() => handleDirectionChange("RIGHT")}
                  sx={{
                    marginLeft: "10px",
                    backgroundColor:
                      pressedKey === "RIGHT"
                        ? "white"
                        : "var(--theme-primary-color-back)",
                    color: "var(--theme-secondary-color)",
                    filter: pressedKey === "RIGHT" ? "brightness(70%)" : "none",
                    boxShadow:
                      pressedKey === "RIGHT" ? "0px 0px 8px white" : "none",
                    transition: "background-color 0.3s ease",
                  }}
                  style={{
                    background:
                      pressedKey === "RIGHT"
                        ? "var(--game-over-background)"
                        : "var(--theme-primary-color-back)",
                  }}
                >
                  →
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Game;
