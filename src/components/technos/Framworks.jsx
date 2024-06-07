import React, { useState } from "react";
import {
  Container,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";

// Importez vos images ici
import angularImg from "../../assets/angular.png"; // Assurez-vous que les chemins des images sont corrects
import vueImg from "../../assets/vue.jpg";
import reactImg from "../../assets/react.jpg";
import reactNativeImg from "../../assets/react.jpg";
import laravelImg from "../../assets/laravel.png";
import symfonyImg from "../../assets/symfony.jpg";
import nodeImg from "../../assets/node.webp";

const Frameworks = () => {
  const [open, setOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState("");
  const [dialogTitle, setDialogTitle] = useState(""); // State to hold the dialog title

  const frameworks = [
    {
      src: angularImg,
      title: "Angular",
      text: "Angular is a platform for building mobile and desktop web applications.",
    },
    {
      src: vueImg,
      title: "Vue.js",
      text: "Vue.js is a progressive JavaScript framework for building user interfaces.",
    },
    {
      src: reactImg,
      title: "React",
      text: "React is a JavaScript library for building user interfaces.",
    },

    {
      src: laravelImg,
      title: "Laravel",
      text: "Laravel is a PHP framework for web artisans.",
    },
    {
      src: symfonyImg,
      title: "Symfony",
      text: "Symfony is a PHP framework for web projects and microservices.",
    },
    {
      src: nodeImg,
      title: "Node.js",
      text: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
    },
  ];

  const handleClickOpen = (title, text) => {
    setDialogTitle(title); // Set the dialog title
    setDialogContent(text);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container className="interest-list">
      <Grid container spacing={3}>
        {frameworks.map((framework, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            key={index}
            className="interest-image-container" // Utilisez la même classe que dans le composant Interest
          >
            <Grid container direction="column" alignItems="center">
              <Typography variant="h6" gutterBottom>
                {framework.title}
              </Typography>
              <img
                src={framework.src}
                alt={framework.title}
                onClick={() => handleClickOpen(framework.title, framework.text)}
                style={{ cursor: "pointer" }}
                className="interest-image" // Utilisez la même classe que dans le composant Interest
              />
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog-title"
        className="interest-dialog" // Utilisez la même classe que dans le composant Interest
      >
        <DialogTitle id="dialog-title" className="dialog-title">
          {dialogTitle}
        </DialogTitle>
        <DialogContent className="dialog-content">
          <DialogContentText className="dialog-text">
            {dialogContent}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default Frameworks;
