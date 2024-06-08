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
import scssImg from "../../assets/sccs.webp"; // Assurez-vous que les chemins des images sont corrects
import bootstrapImg from "../../assets/bootstrap.webp";
import materialUiImg from "../../assets/material.png";

const Fronts = () => {
  const [open, setOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState("");
  const [dialogTitle, setDialogTitle] = useState(""); // State to hold the dialog title

  const fronts = [
    {
      src: scssImg,
      title: "SCSS",
      text: "SCSS (Sass Cascading Style Sheets) est un langage de préprocesseur qui étend les fonctionnalités de CSS en y ajoutant des fonctionnalités supplémentaires comme les variables, les mixins, les fonctions et les structures de contrôle. Il permet de créer des styles CSS plus organisés, maintenables et réutilisables.",
    },
    {
      src: bootstrapImg,
      title: "Bootstrap",
      text: "Bootstrap est un framework CSS open-source populaire qui fournit un ensemble de composants HTML et CSS préconçus pour créer des interfaces utilisateur réactives et adaptées aux mobiles. Il simplifie le développement web en proposant des styles pré-définis pour les éléments courants comme les boutons, les formulaires, les tableaux et la navigation.",
    },
    {
      src: materialUiImg,
      title: "Material-UI",
      text: "Material-UI est un framework d'interface utilisateur React basé sur les principes du Material Design de Google. Il offre une large gamme de composants réutilisables et personnalisables pour créer des interfaces utilisateur modernes et élégantes. Il est particulièrement adapté aux applications web complexes et aux systèmes de conception à grande échelle.",
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
        {fronts.map((front, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            key={index}
            className="interest-image-container" // Utilisez la même classe que dans le composant Interest
          >
            <Grid container direction="column" alignItems="center">
              <Typography variant="h6" gutterBottom>
                {front.title}
              </Typography>
              <img
                src={front.src}
                alt={front.title}
                onClick={() => handleClickOpen(front.title, front.text)}
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

export default Fronts;
