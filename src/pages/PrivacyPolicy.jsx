import { Typography, Box } from "@mui/material";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <Box className="legal-notice">
      <Typography variant="h2">Politique de Confidentialité</Typography>

      <div>
        <Typography variant="h6">Préambule</Typography>
        <Typography variant="body2">
          La présente politique de confidentialité (ci-après la "Politique")
          explique comment nous collectons, utilisons et divulguons les données
          personnelles des utilisateurs (ci-après les "Utilisateurs") de notre
          site web https://www.david-konate.fr (ci-après le "Site"). Nous nous
          engageons à protéger la vie privée de nos Utilisateurs et à respecter
          les lois applicables en matière de protection des données, notamment
          le Règlement général sur la protection des données (RGPD).
        </Typography>
      </div>

      <div>
        <Typography variant="h6">
          Article 1 - Collecte des données personnelles
        </Typography>
        <Typography variant="body2">
          Nous ne collectons aucune donnée personnelle des Utilisateurs de notre
          Site. Aucune information permettant d'identifier un Utilisateur,
          directement ou indirectement, n'est recueillie lors de la visite de
          notre Site.
        </Typography>
      </div>

      <div>
        <Typography variant="h6">
          Article 2 - Utilisation des données personnelles
        </Typography>
        <Typography variant="body2">
          Étant donné que nous ne collectons aucune donnée personnelle, nous
          n'utilisons ni ne traitons aucune information personnelle des
          Utilisateurs.
        </Typography>
      </div>

      <div>
        <Typography variant="h6">
          Article 3 - Divulgation des données personnelles
        </Typography>
        <Typography variant="body2">
          Nous ne partageons, ne vendons, ne louons ni ne divulguons aucune
          donnée personnelle des Utilisateurs à des tiers, car nous ne
          collectons aucune donnée personnelle.
        </Typography>
      </div>

      <div>
        <Typography variant="h6">Article 4 - Cookies</Typography>
        <Typography variant="body2">
          Notre Site n'utilise pas de cookies ni d'autres technologies de suivi
          pour collecter des informations sur les Utilisateurs.
        </Typography>
      </div>

      <div>
        <Typography variant="h6">Article 5 - Sécurité</Typography>
        <Typography variant="body2">
          Bien que nous ne collectons aucune donnée personnelle, nous prenons
          des mesures techniques et organisationnelles appropriées pour assurer
          la sécurité et la protection de notre Site contre tout accès non
          autorisé, utilisation abusive ou altération.
        </Typography>
      </div>

      <div>
        <Typography variant="h6">Article 6 - Droit applicable</Typography>
        <Typography variant="body2">
          La présente Politique est régie par le droit français. Tout litige
          relatif à l'interprétation ou à l'exécution de cette Politique sera de
          la compétence exclusive des tribunaux de Paris.
        </Typography>
      </div>
    </Box>
  );
};

export default PrivacyPolicy;
