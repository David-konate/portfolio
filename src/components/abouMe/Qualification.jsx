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
import bacStg from "../../assets/baccalaureat.jpg";
import btsMuc from "../../assets/BTS.jpg";
import devWeb from "../../assets/dev.png";
import devApp from "../../assets/conception.jpg";

const Qualification = () => {
  const [open, setOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState("");
  const [dialogTitle, setDialogTitle] = useState(""); // State to hold the dialog title

  const qualifications = [
    { src: bacStg, title: "BAC STG", text: "Description pour BAC STG." },
    { src: btsMuc, title: "BTS MUC", text: "Description pour BTS MUC." },
    {
      src: devWeb,
      title: "Développeur Web",
      text: "Description pour Développeur Web.",
    },
    {
      src: devApp,
      title: "Concepteur Dév d'Application",
      text: "Description pour Concepteur Développeur d'Application.",
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
        {qualifications.map((qualification, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            key={index}
            className="interest-image-container" // Utilisez la même classe que dans le composant Interest
          >
            <Grid container direction="column" alignItems="center">
              <Typography variant="h6" gutterBottom>
                {qualification.title}
              </Typography>
              <img
                src={qualification.src}
                alt={qualification.title}
                onClick={() =>
                  handleClickOpen(qualification.title, qualification.text)
                }
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

export default Qualification;
