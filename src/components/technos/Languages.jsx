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
      text: "Le HTML est le langage standardisé de création de pages web. Il permet de structurer le contenu d'une page en utilisant des balises (éléments) qui définissent différents types de contenu, comme les paragraphes, les titres, les images, les liens hypertexte, les formulaires, etc. Le navigateur web interprète ces balises et affiche la page web en conséquence. En résumé, le HTML fournit la structure de base et le contenu d'une page web.",
    },
    {
      src: cssImg,
      title: "CSS",
      text: "Les feuilles de style en cascade (CSS) sont utilisées pour styliser les pages web. Elles séparent la présentation du contenu, ce qui signifie que vous pouvez modifier l'apparence d'une page web sans en modifier le contenu HTML sous-jacent. Les styles CSS peuvent être intégrés directement dans les balises HTML, ajoutés en ligne à des éléments HTML spécifiques, ou stockés dans des fichiers CSS externes liés aux pages web. Le CSS contrôle l'apparence visuelle d'une page web, y compris la mise en page, les couleurs, les polices et bien plus encore.",
    },
    {
      src: jsImg,
      title: "JavaScript ",
      text: "JavaScript est un langage de programmation de script côté client couramment utilisé pour créer des interactions et des animations dynamiques sur les pages web. Contrairement au HTML et au CSS, qui sont statiques, JavaScript permet d'ajouter des fonctionnalités qui ne seraient pas possibles autrement. Cela inclut la validation de formulaires, les effets spéciaux, les interactions avec l'utilisateur et le contenu qui se met à jour sans rechargement complet de la page. JavaScript rend les pages web plus interactives et dynamiques pour les utilisateurs.",
    },
    {
      src: phpImg,
      title: "PHP ",
      text: "PHP est un langage de script côté serveur largement utilisé pour le développement web. Il s'exécute sur le serveur avant que le contenu ne soit envoyé au navigateur web. PHP permet de générer du contenu HTML dynamique en fonction des besoins de l'utilisateur. Par exemple, il peut accéder et modifier des bases de données, gérer des sessions utilisateur et créer des applications web interactives. En résumé, PHP crée le contenu dynamique des pages web en fonction des interactions de l'utilisateur et d'autres facteurs.",
    },
    {
      src: javaImg,
      title: "Java",
      text: "Java est un langage de programmation polyvalent orienté objet, conçu pour être indépendant de la plateforme d'exécution (fonctionne sur différents systèmes d'exploitation sans recompilation). Il est utilisé pour développer une variété d'applications, y compris les applications web d'entreprise (avec des frameworks web Java), les applications mobiles natives (avec Android Studio), les applications de bureau et les systèmes embarqués. Le code Java est généralement compilé en bytecode, qui est ensuite exécuté par une machine virtuelle Java (JVM) présente sur la plupart des systèmes d'exploitation. Java est un langage puissant et polyvalent qui peut être utilisé pour créer une large gamme d'applications.",
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
          <DialogContentText p={2} className="dialog-text">
            {dialogContent}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Languages;
