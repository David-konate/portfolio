import { Typography, Box } from "@mui/material";
import React from "react";

const TermsOfUse = () => {
  return (
    <Box className="legal-notice">
      <Typography variant="h2">
        Conditions Générales d'Utilisation (CGU)
      </Typography>

      <div>
        <Typography variant="h6">Préambule</Typography>
        <Typography variant="body2">
          Les présentes conditions générales d'utilisation (ci-après les "CGU")
          définissent les conditions d'accès et d'utilisation du site web
          https://www.david-konate.fr .
        </Typography>
      </div>

      <div>
        <Typography variant="h6">Article 1 - Objet</Typography>
        <Typography variant="body2">
          Le Site propose à l'utilisateur (ci-après l'"Utilisateur") de visiter
          un site vitrine et de jouer à un jeu de Snake. L'Utilisateur ne peut
          effectuer aucune autre action sur le Site.
        </Typography>
      </div>

      <div>
        <Typography variant="h6">Article 2 - Accès au Site</Typography>
        <Typography variant="body2">
          L'accès au Site est gratuit. Tous les coûts afférents à l'accès au
          Site, que ce soit les frais matériels, logiciels ou d'accès à
          internet, sont exclusivement à la charge de l'Utilisateur.
        </Typography>
      </div>

      <div>
        <Typography variant="h6">
          Article 3 - Propriété intellectuelle
        </Typography>
        <Typography variant="body2">
          Le Site et chacun des éléments qui le composent, notamment mais non
          exclusivement, les textes, images, vidéos, photographies, marques,
          logos, sont la propriété exclusive de l'Éditeur du Site. Toute
          reproduction, représentation, modification, publication, adaptation de
          tout ou partie des éléments du Site, quel que soit le moyen ou le
          procédé utilisé, est interdite, sauf autorisation écrite préalable de
          l'Éditeur.
        </Typography>
      </div>

      <div>
        <Typography variant="h6">Article 4 - Responsabilité</Typography>
        <Typography variant="body2">
          L'Éditeur du Site ne pourra être tenu responsable des dommages directs
          et indirects causés au matériel de l'Utilisateur, lors de l'accès au
          Site. L'Éditeur ne pourra également être tenu responsable des dommages
          indirects (tels par exemple qu'une perte de marché ou perte d'une
          chance) consécutifs à l'utilisation du Site.
        </Typography>
      </div>

      <div>
        <Typography variant="h6">Article 5 - Données personnelles</Typography>
        <Typography variant="body2">
          L'Utilisateur est informé que lors de ses visites sur le Site, des
          cookies peuvent s'installer automatiquement sur son logiciel de
          navigation. Les cookies sont de petits fichiers temporaires déposés
          sur le disque dur de l'Utilisateur. Les cookies ne contiennent pas
          d'information personnelle et ne peuvent pas être utilisés pour
          identifier quelqu'un. L'Utilisateur peut désactiver ces cookies par
          l'intermédiaire des paramètres figurant au sein de son logiciel de
          navigation.
        </Typography>
      </div>

      <div>
        <Typography variant="h6">
          Article 6 - Droit applicable et juridiction compétente
        </Typography>
        <Typography variant="body2">
          Tout litige en relation avec l'utilisation du Site est soumis au droit
          français. Il est fait attribution exclusive de juridiction aux
          tribunaux compétents de Paris.
        </Typography>
      </div>

      <div>
        <Typography variant="h6">Article 7 - Modification des CGU</Typography>
        <Typography variant="body2">
          L'Éditeur du Site se réserve le droit de modifier à tout moment les
          présentes conditions générales d'utilisation. L'Utilisateur est invité
          à les consulter régulièrement afin de prendre connaissance des
          modifications éventuelles.
        </Typography>
      </div>

      {/* Ajouter d'autres articles si nécessaire */}
    </Box>
  );
};

export default TermsOfUse;
