// index.js

export const IMAGE_PATH = process.env.REACT_APP_BASE_URL + "/storage/uploads/";
export const IMAGE_API = process.env.REACT_APP_BASE_URL + "/storage/images/";

export const BASE_URL = process.env.REACT_APP_BASE_URL;

export const BASE_URL_API = process.env.REACT_APP_BASE_URL_API;

export const links = [
  {
    label: "_home",
    path: "/",
  },
  {
    label: "_qui_suis_je",
    path: "/about-me",
  },
  {
    label: "Mon métier",
    path: "/my-work",
  },
];

// Transformation
export const firstLetterUppercase = (value) => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

// Fonction pour convertir un nombre en chiffres romains
export const convertToRoman = (num) => {
  // Tableaux des chiffres romains et de leurs équivalents décimaux
  const romanNumerals = ["I", "II", "III"];
  const values = [1, 2, 3];

  let result = ""; // Initialisation de la chaîne résultante

  // Parcours des chiffres romains en commençant par les valeurs les plus grandes
  for (let i = values.length - 1; i >= 0; i--) {
    // Tant que le nombre est supérieur ou égal à la valeur actuelle
    while (num >= values[i]) {
      // Ajout du chiffre romain correspondant à la chaîne résultante
      result += romanNumerals[i];
      // Soustraction de la valeur décimale correspondante au nombre
      num -= values[i];
    }
  }

  return result; // Retourne la représentation en chiffres romains du nombre
};

// Fonction pour afficher le chemin complet d'une image
export const displayImage = (image) =>
  // Si une image est fournie, retourne le chemin complet de l'image, sinon retourne le chemin d'une image par défaut
  image ? IMAGE_PATH + "/" + image : IMAGE_PATH + "notImage.png";

// Fonction pour afficher le chemin complet d'une image provenant d'une API
export const displayImageApi = (image) =>
  // Si une image est fournie, retourne le chemin complet de l'image provenant de l'API, sinon retourne le chemin d'une image par défaut
  image ? IMAGE_API + "/" + image : IMAGE_PATH + "/notImage.png";

// Fonction pour nettoyer une chaîne HTML en retirant les balises et les espaces inutiles
export const cleanHtmlText = (htmlString) => {
  // Remplace toutes les balises HTML par un espace, puis supprime les espaces inutiles et retourne la chaîne nettoyée
  const cleanText = htmlString
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return cleanText;
};

export const getViolationField = (error, setError) => {
  if ("errors" in error?.response?.data) {
    const errors = error?.response?.data?.errors;
    if (errors.length) {
      for (const field in errors) {
        if (errors.hasOwnProperty(field)) {
          const messages = errors[field];
          for (const message of messages) {
            setError(field, {
              type: "manual",
              message: message,
            });
          }
        }
      }
    }
  }
};
