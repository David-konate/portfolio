import React, { useState, useEffect } from "react";
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
  const [dialogTitle, setDialogTitle] = useState("");

  const qualifications = [
    {
      src: bacStg,
      title: "BAC STG",
      text: "Le BAC STG m'a fourni une solide culture économique, juridique et sociale, essentielle pour comprendre le monde des affaires et des organisations. J'ai également acquis une maîtrise des outils informatiques essentiels et développé des compétences en communication et en travail en équipe, compétences indispensables pour évoluer dans un environnement professionnel collaboratif. Au-delà de ces bases générales, le BAS STG m'a permis d'approfondir mes connaissances en analyse économique et financière, en gestion commerciale et marketing, ainsi qu'en droit des affaires et des contrats. Ces compétences spécifiques me permettent d'appréhender les enjeux stratégiques des entreprises et de contribuer à la prise de décisions éclairées.",
    },
    {
      src: btsMuc,
      title: "BTS MUC",
      text: "Le BTS Management des Unités Commerciales (MUC) a complété ma formation en me dotant de compétences opérationnelles en gestion commerciale et marketing. J'ai ainsi appris à mettre en place des stratégies commerciales efficaces, à maîtriser les techniques de vente et de négociation, et à développer des relations client de qualité. De plus, le BTS MUC m'a permis d'acquérir la capacité à piloter des projets et à manager une équipe. Ces compétences sont indispensables pour mener à bien des projets complexes et pour accompagner efficacement les collaborateurs dans leurs missions.",
    },
    {
      src: devWeb,
      title: "Développeur Web",
      text: "Ma formation en développement web et mobile m'a permis de maîtriser les langages de programmation essentiels, tels que HTML, CSS, JavaScript, PHP et Python. Je suis capable de concevoir et de développer des applications web et mobiles performantes et responsives, en intégrant des bases de données et en mettant en place des back-end robustes. Mes compétences spécifiques incluent le développement front-end et back-end, le responsive design et l'ergonomie web, l'intégration de bases de données et d'API, ainsi que la gestion de projet et l'application de méthodes agiles.",
    },

    {
      src: devApp,
      title: "Concepteur Dév d'Application",
      text: "Mon titre de Concepteur Développeur d'Applications atteste de mon expertise dans la conception et le développement d'applications web et mobiles. Je possède une solide maîtrise des architectures logicielles et des principes de conception, me permettant de piloter des projets complexes et de manager des équipes de développement avec efficacité. Mes compétences spécifiques incluent la conception d'architectures logicielles, le développement d'interfaces utilisateur et d'expériences utilisateur engageantes, la gestion de projet et l'application de méthodes agiles, ainsi que l'expertise en technologies spécifiques telles que le Cloud et DevOps.",
    },
  ];

  useEffect(() => {
    // Ajoutez la classe 'zoom-in' à chaque image après le rendu
    const images = document.querySelectorAll(".interest-image");
    images.forEach((image) => {
      image.classList.add("zoom-in");
    });
  }, []); // Assurez-vous de ne lancer cet effet qu'une seule fois après le premier rendu

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
                className="interest-image zoom-in" // Utilisez la même classe que dans le composant Interest
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

export default Qualification;
