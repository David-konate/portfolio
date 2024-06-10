import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import Smat from "../cda/Smat";
import YoungBoss from "../cda/YounBoss";
import smat2Image from "../../assets/smat2.png";
import undr1Image from "../../assets/undr2.png";

const AppDesigner = () => {
  // État pour gérer l'ouverture et la sélection du projet
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Liste des projets avec leurs titres, images et composants associés
  const projects = [
    {
      title: "Smat",
      image: smat2Image,
      component: Smat,
    },
    {
      title: "Young Boss",
      image: undr1Image,
      component: YoungBoss,
    },
    // Ajoutez d'autres projets si nécessaire
  ];

  // Fonction pour gérer l'ouverture du projet sélectionné
  const handleClickOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  // Fonction pour fermer le dialogue
  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  return (
    <Box className="interest-list">
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            key={index}
            className="interest-image-container"
          >
            <Grid container direction="column" alignItems="center">
              <Typography mb={1} variant="h6">
                {project.title}
              </Typography>
              <img
                className="interest-image"
                src={project.image}
                alt={`Projet ${index + 1}`}
                onClick={() => handleClickOpen(project)}
                style={{ cursor: "pointer" }}
              />
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
        {selectedProject && (
          <>
            <DialogTitle
              id="dialog-title"
              variant="h4"
              className="dialog-title"
            >
              {selectedProject.title}
            </DialogTitle>
            <Box>
              <DialogContent className="dialog-content">
                <selectedProject.component />
              </DialogContent>
            </Box>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default AppDesigner;
