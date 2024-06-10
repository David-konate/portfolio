import React, { useState } from "react";
import portfolioImage from "../../assets/portfolio2.png";
import bonnePlaceImage from "../../assets/labonneplace2.png";
import ballnConnectImage from "../../assets/ballnconnect3.jpg";
import PortfolioProject from "../dev/PorfolioProject";
import BonnePlaceProject from "../dev/BonnePlaceProject";
import BallnConnectProject from "../dev/BallnConnectProject";
import {
  Box,
  Grid,
  Typography,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const Developer = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Portfolio",
      image: portfolioImage,
      component: PortfolioProject,
    },
    {
      title: "La Bonne Place",
      image: bonnePlaceImage,
      component: BonnePlaceProject,
    },
    {
      title: "BallnConnect",
      image: ballnConnectImage,
      component: BallnConnectProject,
    },
  ];

  const handleClickOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

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

export default Developer;
