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
    {
      src: sqlImg,
      title: "SQL/MySQL",
      text: "SQL (Structured Query Language) is a standard language for managing and manipulating databases. MySQL is an open-source relational database management system that uses SQL.",
    },
    {
      src: mongodbImg,
      title: "MongoDB",
      text: "MongoDB is a source-available cross-platform document-oriented database program.",
    },
    {
      src: cloudinaryImg,
      title: "Cloudinary",
      text: "Cloudinary is a cloud-based service for managing and delivering images and videos, providing powerful APIs for media manipulation and optimization.",
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
          <DialogContentText className="dialog-text">
            {dialogContent}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BaseDonnees;
