import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";

// Importez vos images ici
import sqlImg from "../../assets/sql.avif"; // Assurez-vous que les chemins des images sont corrects
import mongodbImg from "../../assets/mongoDB.jpg";
import cloudinaryImg from "../../assets/cloudinary.png"; // Ajoutez le chemin vers l'image de Cloudinary

const BaseDonnees = () => {
  const [open, setOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState("");
  const [dialogTitle, setDialogTitle] = useState(""); // State to hold the dialog title

  const databases = [
    // Variable name changed to "basesDeDonnees" (databases in French)
    {
      src: sqlImg,
      title: "SQL/MySQL", // Title in French
      text: "SQL (Structured Query Language) est un langage normalisé de gestion et de manipulation de bases de données. MySQL est un système de gestion de bases de données relationnelles open-source qui utilise SQL.", // Description in French
    },
    {
      src: mongodbImg,
      title: "MongoDB", // Title in French
      text: "MongoDB est un programme de base de données orientée document, multi-plateforme et open-source.", // Description in French
    },
    {
      src: cloudinaryImg,
      title: "Cloudinary", // Title in French
      text: "Cloudinary est un service cloud pour la gestion et la diffusion d'images et de vidéos. Il fournit des API puissantes pour la manipulation et l'optimisation des médias.", // Description in French
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
    <div className="interest-list">
      <Grid container spacing={3}>
        {databases.map((database, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            key={index}
            className="interest-image-container" // Utilisez la même classe que dans le composant Interest
          >
            <Grid container direction="column" alignItems="center">
              <Typography variant="h6" gutterBottom>
                {database.title}
              </Typography>
              <img
                src={database.src}
                alt={database.title}
                onClick={() => handleClickOpen(database.title, database.text)}
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
          <DialogContentText p={2} className="dialog-text">
            {dialogContent}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BaseDonnees;
