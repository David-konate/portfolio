// Importez useState et useEffect
import React, { useState, useEffect } from "react";
import dev from "../../assets/dev.png";
import ff from "../../assets/ff.webp";
import histoire from "../../assets/histoire.jpg";
import innovation from "../../assets/innovation.jpg";
import musique from "../../assets/musique.webp";
import scienceFiction from "../../assets/science-fic.jpg";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";

const Interest = () => {
  const [open, setOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState("");
  const [dialogTitle, setDialogTitle] = useState("");

  const images = [
    { src: dev, title: "Programmation", text: "..." },
    { src: scienceFiction, title: "Science Fiction", text: "..." },
    { src: ff, title: "Jeux vidéo", text: "..." },
    { src: histoire, title: "Culture et histoire", text: "..." },
    { src: innovation, title: "Technologie et innovation", text: "..." },
    { src: musique, title: "Musique", text: "..." },
  ];

  useEffect(() => {
    // Ajoutez la classe 'zoom-in' à chaque image après le rendu
    const images = document.querySelectorAll(".interest-image");
    images.forEach((image) => {
      image.classList.add("zoom-in");
    });
  }, []); // Assurez-vous de ne lancer cet effet qu'une seule fois après le premier rendu

  const handleClickOpen = (title, text) => {
    setDialogTitle(title);
    setDialogContent(text);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="interest-list">
      <Grid container spacing={3}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Grid container direction="column" spacing={3}>
              <Grid item className="interest-image-container">
                <Typography mb={1} variant="h6" className="interest-title">
                  {image.title}
                </Typography>
                <img
                  className="interest-image"
                  src={image.src}
                  alt={`Intérêt ${index + 1}`}
                  onClick={() => handleClickOpen(image.title, image.text)}
                  style={{ cursor: "pointer" }}
                />
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog-title"
        className="interest-dialog"
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
    </div>
  );
};

export default Interest;
