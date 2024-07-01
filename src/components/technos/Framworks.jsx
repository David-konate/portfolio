import React, { useState } from "react";
import {
  Container,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";

// Importez vos images ici
import angularImg from "../../assets/angular.png"; // Assurez-vous que les chemins des images sont corrects
import vueImg from "../../assets/vue.jpg";
import reactImg from "../../assets/react.jpg";
import laravelImg from "../../assets/laravel.png";
import symfonyImg from "../../assets/symfony.jpg";
import nodeImg from "../../assets/node.webp";
import nextjsImg from "../../assets/next.jpg";

const Frameworks = () => {
  const [open, setOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState("");
  const [dialogTitle, setDialogTitle] = useState(""); // State to hold the dialog title

  const frameworks = [
    {
      src: angularImg,
      title: "Angular",
      text: "Angular est un framework JavaScript complet pour la création d'applications web monopages et mobiles. Il offre une structure claire et des outils intégrés pour gérer les dépendances, le routage, les formulaires et les tests. Il est adapté aux projets web d'envergure nécessitant une architecture solide.",
    },
    {
      src: vueImg,
      title: "Vue.js",
      text: "Vue.js est un framework JavaScript progressif pour la création d'interfaces utilisateur web interactives. Léger et flexible, il est facile à apprendre et à intégrer. Il se concentre sur la gestion de l'interface utilisateur et peut être associé à des bibliothèques tierces pour la gestion d'état et le routage. Il est populaire pour les projets de petite et moyenne envergure.",
    },
    {
      src: reactImg,
      title: "React",
      text: "React est une bibliothèque JavaScript pour la création d'interfaces utilisateur web composables. Léger et flexible, il se concentre sur la gestion de l'état et la réutilisation des composants. Il ne fournit pas de structure d'application complète et s'appuie sur des bibliothèques tierces pour le routage, la gestion d'état et d'autres fonctionnalités. Il est populaire pour les interfaces utilisateur complexes et les applications web à page unique (SPA).",
    },
    {
      src: nextjsImg,
      title: "Next.js",
      text: "Next.js est un framework React minimaliste pour le rendu côté serveur et le rendu statique des applications web. Il simplifie le développement d'applications web modernes en combinant React avec des fonctionnalités avancées comme le rendu côté serveur, le pré-rendu statique, et la gestion automatique de l'optimisation des performances. Next.js est particulièrement adapté aux applications nécessitant un SEO efficace et une meilleure performance.",
    },
    {
      src: laravelImg,
      title: "Laravel",
      text: "Laravel est un framework PHP pour le développement web rapide. Il fournit une structure MVC et des outils intégrés pour simplifier les tâches courantes comme l'authentification, la gestion de base de données et le routage. Il est connu pour sa rapidité de développement et sa communauté active.",
    },
    {
      src: symfonyImg,
      title: "Symfony",
      text: "Symfony est un ensemble de composants PHP et un framework MVC complet pour la création d'applications web et de microservices. Plus modulaire que Laravel, il offre une flexibilité accrue pour la construction d'applications complexes. Il est populaire pour les projets d'entreprise et les applications nécessitant une architecture solide.",
    },
    {
      src: nodeImg,
      title: "Node.js",
      text: "Node.js est un environnement d'exécution JavaScript permettant d'exécuter du code JavaScript en dehors du navigateur web. Il ouvre la voie à des applications web en temps réel, des serveurs web et d'autres types d'applications non-navigateur. Il est souvent utilisé avec des frameworks JavaScript côté serveur comme Express.js pour construire des applications web performantes.",
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
    <Container className="interest-list">
      <Grid container spacing={3}>
        {frameworks.map((framework, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            key={index}
            className="interest-image-container" // Utilisez la même classe que dans le composant Interest
          >
            <Grid container direction="column" alignItems="center">
              <Typography variant="h6" gutterBottom>
                {framework.title}
              </Typography>
              <img
                src={framework.src}
                alt={framework.title}
                onClick={() => handleClickOpen(framework.title, framework.text)}
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
    </Container>
  );
};

export default Frameworks;
