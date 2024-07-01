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
            if (direction !== "DOWN") setDirection("UP");
            break;
          case 40:
            if (direction !== "UP") setDirection("DOWN");
            break;
          case 37:
            if (direction !== "RIGHT") setDirection("LEFT");
            break;
          case 39:
            if (direction !== "LEFT") setDirection("RIGHT");
            break;
          default:
            break;
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [gameStarted, direction]);

  useEffect(() => {
    if (gameStarted) {
      const moveSnake = () => {
        let dots = [...snakeDots];
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
        setSnakeDots(dots);
      };

      const checkIfOutOfBorders = () => {
        let head = snakeDots[snakeDots.length - 1];
        if (head[0] >= 300 || head[1] >= 300 || head[0] < 0 || head[1] < 0) {
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
        let newSnake = [...snakeDots];
        newSnake.unshift([]);
        setSnakeDots(newSnake);
      };

      const increaseSpeed = () => {
        if (speed > 20) {
          setSpeed(speed - 20);
        }
      };

      const onGameOver = () => {
        setGameOver(true);
        // Ne réinitialise pas le snakeDots ici
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
    // Réinitialisation des états
    setSnakeDots(initialSnake);
    setFood(getRandomCoordinates());
    setDirection("RIGHT");
    setSpeed(250);
    setGameOver(false);
    setGameStarted(true);
  };

  const handleDirectionChange = (newDirection) => {
    setDirection(newDirection);
  };

  return (
    <Box p={3} className="game-area">
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <Box
            className="plateau"
            sx={{
              position: "relative",
              width: "100%",
              height: "300px",
              border: "2px solid #000",
              margin: "0 auto",
              backgroundColor: "#FFF",
            }}
          >
            {gameStarted && (
              <>
                <Snake snakeDots={snakeDots} />
                <Food dot={food} />
              </>
            )}
            {!gameStarted && (
              <Box mt={5} textAlign="center">
                {gameOver && (
                  <Box
                    className="game-over"
                    sx={{
                      position: "absolute",
                      top: "75%",
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
                      Longueur : {snakeDots.length}
                    </Typography>
                  </Box>
                )}
                <Button
                  sx={{ backgroundColor: "#FEA55F" }}
                  variant="contained"
                  onClick={startGame}
                  disabled={gameStarted}
                >
                  Commencer une partie
                </Button>
              </Box>
            )}
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box
            className="pad"
            sx={{
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
                  backgroundColor: "var(--theme-primary-color-back)",
                  color: "var(--theme-secondary-color)",
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
                    backgroundColor: "var(--theme-primary-color-back)",
                    color: "var(--theme-secondary-color)",
                  }}
                >
                  ←
                </Button>
                <Button
                  variant="contained"
                  onClick={() => handleDirectionChange("DOWN")}
                  sx={{
                    backgroundColor: "var(--theme-primary-color-back)",
                    color: "var(--theme-secondary-color)",
                  }}
                >
                  ↓
                </Button>
                <Button
                  variant="contained"
                  onClick={() => handleDirectionChange("RIGHT")}
                  sx={{
                    marginLeft: "10px",
                    backgroundColor: "var(--theme-primary-color-back)",
                    color: "var(--theme-secondary-color)",
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
