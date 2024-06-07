import React, { useState, useEffect } from "react";
import Snake from "./Snake";
import Food from "./Food";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";

// Fonction pour obtenir des coordonnées aléatoires pour la nourriture
const getRandomCoordinates = () => {
  let min = 1;
  let max = 49;
  let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  return [x, y];
};

const Game = () => {
  // État du serpent et de la nourriture
  const [snakeDots, setSnakeDots] = useState([
    [0, 0],
    [2, 0],
  ]);
  const [food, setFood] = useState(getRandomCoordinates());
  const [gameOver, setGameOver] = useState(false);
  // Direction du serpent et vitesse
  const [direction, setDirection] = useState("RIGHT");
  const [speed, setSpeed] = useState(200); // Augmenter la valeur de speed pour ralentir le serpent
  const [gameStarted, setGameStarted] = useState(false);

  // Effet pour écouter les touches du clavier
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (gameStarted) {
        switch (e.keyCode) {
          case 38:
            setDirection("UP");
            break;
          case 40:
            setDirection("DOWN");
            break;
          case 37:
            setDirection("LEFT");
            break;
          case 39:
            setDirection("RIGHT");
            break;
          default:
            break;
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [gameStarted]);

  // Effet pour gérer le mouvement du serpent et les règles du jeu
  useEffect(() => {
    if (gameStarted) {
      const moveSnake = () => {
        let dots = [...snakeDots];
        let head = dots[dots.length - 1];

        // Déplacer la tête du serpent en fonction de la direction
        switch (direction) {
          case "RIGHT":
            head = [head[0] + 2, head[1]];
            break;
          case "LEFT":
            head = [head[0] - 2, head[1]];
            break;
          case "DOWN":
            head = [head[0], head[1] + 2];
            break;
          case "UP":
            head = [head[0], head[1] - 2];
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
        if (head[0] >= 60 || head[1] >= 60 || head[0] < 0 || head[1] < 0) {
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
        let foodCoord = food;
        if (head[0] === foodCoord[0] && head[1] === foodCoord[1]) {
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
        // alert(`Game Over. Snake length is ${snakeDots.length}`);
        setGameOver(true);
        setSnakeDots([
          [0, 0],
          [2, 0],
        ]);
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
    setGameStarted(true);
  };

  const handleDirectionChange = (newDirection) => {
    setDirection(newDirection);
  };

  return (
    <Box p={3} className="game-area">
      <Box className="plateau">
        {/* Contenu du jeu */}
        {gameStarted ? (
          <>
            <Snake snakeDots={snakeDots} />
            <Food dot={food} />
          </>
        ) : (
          <Box mt={5}>
            {" "}
            <Button
              sx={{ backgroundColor: "#FEA55F" }}
              variant="contained"
              onClick={startGame}
            >
              Commencer une partie
            </Button>
            {gameOver && (
              <Box
                className="game-over"
                sx={{
                  position: "absolute",
                  top: "50%",
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
                {/* <Divider className="divider-go" sx={{ mt: 2 }} />
                <Typography className="score-go" mt={4} variant="subtitle1">
                  Longueur : {snakeDots.length}
                </Typography> */}
              </Box>
            )}
          </Box>
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "20px",
        }}
      >
        {/* Votre typographie */}

        {/* Boutons de contrôle */}
        <Box mt={4}>
          <Button
            variant="contained"
            onClick={() => handleDirectionChange("UP")}
            sx={{
              marginBottom: "10px",
              backgroundColor: "var(--theme-primary-color-back)",
              color: "var( --theme-secondary-color)",
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
                color: "var( --theme-secondary-color)",
              }}
            >
              ←
            </Button>
            <Button
              variant="contained"
              onClick={() => handleDirectionChange("DOWN")}
              sx={{
                backgroundColor: "var(--theme-primary-color-back)",
                color: "var( --theme-secondary-color)",
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
                color: "var( --theme-secondary-color)",
              }}
            >
              →
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Game;
