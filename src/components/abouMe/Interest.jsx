import React, { useState, useEffect } from "react";
import dev from "../../assets/dev.png";
import ff from "../../assets/ff.webp";
import histoire from "../../assets/histoire.jpg";
import innovation from "../../assets/innovation.jpg";
import sport from "../../assets/sport.jpg";
import scienceFiction from "../../assets/science-fic.jpg";
import {
  Box,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";

const Interest = () => {
  const [open, setOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState([]);
  const [dialogTitle, setDialogTitle] = useState("");

  const images = [
    {
      src: dev,
      title: "Développement",
      text: `Fort de mes compétences en langages de programmation tels que Java, PHP, JavaScript,
       HTML et CSS, je suis un développeur full-stack accompli, capable de créer des applications web
        et mobiles complètes. Mon expertise en back-end avec PHP et en front-end avec React ou JavaScript me permet de maîtriser l'ensemble du processus de développement.\n\nPassionné par les innovations dans le rendu 3D et le développement d'applications immersives, j'explore constamment de nouvelles technologies pour créer des expériences utilisateur interactives et engageantes. Mon enthousiasme pour les jeux vidéo alimente mon intérêt pour les possibilités offertes par les technologies 3D dans le domaine du divertissement.`,
    },

    {
      src: scienceFiction,
      title: "Science Fiction",
      text: `Passionné par la science-fiction depuis mon plus jeune âge, je suis fasciné par les univers imaginaires et les concepts futuristes qu'elle explore. Des récits épiques de Star Wars aux réflexions philosophiques de Matrix, en passant par les intrigues captivantes de Game of Thrones, les œuvres de science-fiction nourrissent mon imagination et me poussent à repousser les limites du possible.\n\nCette passion se traduit dans mon métier de développeur, où je m'inspire des thèmes de la science-fiction pour créer des solutions innovantes et des expériences utilisateurs immersives. Les voyages dans le temps, l'intelligence artificielle et l'exploration spatiale sont autant de sujets qui me stimulent et me motivent à explorer de nouvelles technologies et à concevoir des produits qui pourraient un jour transformer notre monde.`,
    },
    {
      src: ff,
      title: "Jeux vidéo",
      text: `Avide de jeux vidéo depuis toujours, je suis fasciné par les univers immersifs et les défis qu'ils proposent. Que ce soit l'adrénaline des sports virtuels, l'exploration des mondes ouverts des jeux d'action-aventure ou l'élaboration de stratégies complexes dans les jeux de stratégie, les jeux vidéo nourrissent mon esprit et aiguisent mes réflexes.\n\nCette passion se traduit dans mon métier de développeur, où je m'inspire des principes du jeu vidéo pour créer des applications engageantes et intuitives. La conception d'interfaces conviviales, la gestion de données complexes et la création d'expériences immersives sont autant de domaines où mon intérêt pour les jeux vidéo me permet d'apporter une vision unique et innovante.`,
    },
    {
      src: histoire,
      title: "Culture/Histoire",
      text: `Fasciné par les civilisations anciennes, je plonge dans l'histoire depuis mon plus jeune âge. De l'Antiquité à la fin de la Renaissance, j'explore les vestiges du passé à travers les visites de musées comme le Louvre, la découverte de châteaux historiques et l'étude des mythologies égyptiennes, romaines, grecques et nordiques.\n\nCette passion pour l'histoire nourrit mon approche du métier de développeur. Les leçons tirées du passé sur la créativité humaine, la résolution de problèmes et l'adaptation aux changements m'inspirent à construire des applications qui respectent l'héritage culturel et les valeurs humaines. L'histoire me rappelle que l'innovation ne se fait jamais dans le vide, mais toujours en dialogue avec le passé.`,
    },
    {
      src: innovation,
      title: "Techno/Innovation",
      text: `Amoureux de la musique depuis mon enfance, j'explore les rythmes et les mélodies du monde entier. Du rap US et français des années 2000 au reggae et au dancehall, en passant par le jazz, le blues et les instruments tels que le violon, le saxophone et le piano, la musique nourrit mon âme et enrichit ma vie.\n\nCette passion pour la musique se retrouve dans mon métier de développeur, où je m'inspire des émotions et des rythmes pour créer des expériences utilisateur immersives. L'intégration de musiques adaptées aux ambiances et la conception d'interfaces qui répondent aux émotions des utilisateurs sont autant de domaines où mon amour pour la musique me permet d'apporter une touche unique et vibrante aux applications que je développe.`,
    },
    {
      src: sport,
      title: "Sport",
      text: `Sportif accompli, je m'adonne au basket et au snowboard avec passion. Sur les terrains de basket ou sur les pistes enneigées, je retrouve les valeurs qui me tiennent à cœur : le dépassement de soi, l'esprit d'équipe et le respect des règles. Je soutiens également des équipes comme le PSG et les Toronto Raptors, admirant leur talent et leur détermination.\n\nCette passion pour le sport se traduit dans mon métier de développeur, où je m'inspire des valeurs sportives pour créer des applications qui encouragent l'activité physique et le bien-être. La rigueur, la collaboration et la persévérance sont des principes que je transmets à mes projets, tout en m'inspirant des performances des athlètes que j'admire, comme Kevin Durant.`,
    },
  ];

  useEffect(() => {
    const images = document.querySelectorAll(".interest-image");
    images.forEach((image) => {
      image.classList.add("zoom-in");
    });
  }, []);

  const handleClickOpen = (title, text) => {
    setDialogTitle(title);
    setDialogContent(
      text.split("\n").map((str, index) => <p key={index}>{str}</p>)
    );
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="interest-list">
      <Grid container spacing={3}>
        {images.map((image, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            key={index}
            className="interest-image-container"
          >
            <Grid container direction="column" alignItems="center">
              <Typography mb={1} variant="h6">
                {image.title}
              </Typography>
              <img
                className="interest-image"
                src={image.src}
                alt={`Intérêt ${index + 1}`}
                onClick={() => handleClickOpen(image.title, image.text)}
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
        <DialogTitle id="dialog-title" variant="h4" className="dialog-title">
          {dialogTitle}
        </DialogTitle>
        <Box>
          <DialogContent className="dialog-content">
            <DialogContentText p={1} className="dialog-text">
              {dialogContent}
            </DialogContentText>
          </DialogContent>
        </Box>
      </Dialog>
    </div>
  );
};

export default Interest;
