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
      text: "SCSS is a preprocessor scripting language that is interpreted or compiled into CSS.",
    },
    {
      src: bootstrapImg,
      title: "Bootstrap",
      text: "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.",
    },
    {
      src: materialUiImg,
      title: "Material-UI",
      text: "Material-UI is a popular React UI framework that follows Google's Material Design guidelines.",
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
          <DialogContentText className="dialog-text">
            {dialogContent}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Fronts;
