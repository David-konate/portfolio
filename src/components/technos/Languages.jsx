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
import htmlImg from "../../assets/html.jpg"; // Assurez-vous que les chemins des images sont corrects
import cssImg from "../../assets/css.jpg";
import jsImg from "../../assets/JS.png";
import phpImg from "../../assets/php.png";
import javaImg from "../../assets/java.png";

const Languages = () => {
  const [open, setOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState("");
  const [dialogTitle, setDialogTitle] = useState(""); // State to hold the dialog title

  const languages = [
    {
      src: htmlImg,
      title: "HTML",
      text: "HyperText Markup Language (HTML) is the standard language for creating web pages.",
    },
    {
      src: cssImg,
      title: "CSS",
      text: "Cascading Style Sheets (CSS) is used for designing the layout and style of web pages.",
    },
    {
      src: jsImg,
      title: "JavaScript",
      text: "JavaScript is a programming language that allows you to implement complex features on web pages.",
    },
    {
      src: phpImg,
      title: "PHP",
      text: "PHP is a server-side scripting language designed for web development.",
    },
    {
      src: javaImg,
      title: "Java",
      text: "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
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
        {languages.map((language, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            key={index}
            className="interest-image-container" // Utilisez la même classe que dans le composant Interest
          >
            <Grid container direction="column" alignItems="center">
              <Typography variant="h6" gutterBottom>
                {language.title}
              </Typography>
              <img
                src={language.src}
                alt={language.title}
                onClick={() => handleClickOpen(language.title, language.text)}
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

export default Languages;
