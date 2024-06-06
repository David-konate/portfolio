import React, { useState } from "react";
import dev from "../../assets/dev.png"; // Ensure paths are correct
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
  const [dialogTitle, setDialogTitle] = useState(""); // State to hold the dialog title

  const images = [
    {
      src: dev,
      title: "Programmation",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      src: scienceFiction,
      title: "Science Fiction",
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      src: ff,
      title: "Jeux vidéo",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      src: histoire,
      title: "Culture et histoire",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      src: innovation,
      title: "Technologie et innovation",
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      src: musique,
      title: "Musique",
      text: "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
    },
  ];

  const handleClickOpen = (title, text) => {
    // Pass both title and text to the handler
    setDialogTitle(title); // Set the dialog title
    setDialogContent(text);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="interest-list">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Grid container direction="column" spacing={3}>
            {images
              .slice(0, Math.ceil(images.length / 2))
              .map((image, index) => (
                <Grid item key={index} className="interest-image-container">
                  <Typography mb={1} variant="h6" className="interest-title">
                    {image.title}
                  </Typography>
                  <img
                    className="interest-image"
                    src={image.src}
                    alt={`Intérêt ${index + 1}`}
                    onClick={() => handleClickOpen(image.title, image.text)} // Pass title and text to the handler
                    style={{ cursor: "pointer" }}
                  />
                </Grid>
              ))}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container direction="column" spacing={3}>
            {images.slice(Math.ceil(images.length / 2)).map((image, index) => (
              <Grid item key={index} className="interest-image-container">
                <Typography mb={1} variant="h6" className="interest-title">
                  {image.title}
                </Typography>
                <img
                  className="interest-image"
                  src={image.src}
                  alt={`Intérêt ${index + 1}`}
                  onClick={() => handleClickOpen(image.title, image.text)} // Pass title and text to the handler
                  style={{ cursor: "pointer" }}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog-title"
        className="interest-dialog"
      >
        <DialogTitle id="dialog-title" className="dialog-title">
          {dialogTitle} {/* Render the dialog title */}
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
