import React from "react";
import { Box, Container, Typography } from "@mui/material";
import laptopImage from "../../assets/laptop.png";

const Bio = () => {
  return (
    <Container>
      <Box display="grid" gap={2} className="slide-in">
        <Box>
          <img
            width={"400px"}
            height={"400px"}
            src={laptopImage}
            alt="Bitmoji représentant David Konaté sortant d'un pc portable"
            style={{ float: "right", marginRight: "10px" }}
          />
          <Typography paragraph>
            Concepteur développeur d'applications passionné par la technologie
            et la création. Je suis un père de famille de 36 ans, originaire de
            Paris et désormais établi dans la région nantaise. Mon parcours
            académique riche, comprenant un bac STG, un BTS MUC, une formation
            en développement web et mobile de niveau bac +2, et un bac +3 en
            conception et développement d'applications, me confère une maîtrise
            complète des différentes étapes de la création d'applications, de la
            conception à la mise en production.
          </Typography>
          <Typography paragraph>
            Au-delà de mes compétences techniques, je suis doté d'un esprit
            curieux et créatif, nourri par une passion pour la science-fiction,
            la musique et l'histoire, notamment celle allant de l'Antiquité à la
            fin de la Renaissance. J'apprécie également les jeux vidéo et
            pratique le sport, avec une appétence particulière pour le basket et
            le snowboard.
          </Typography>
          <Typography paragraph>
            La résolution de problèmes m'attire tout particulièrement, rappelant
            l'aspect ludique des jeux vidéo que j'affectionne.
          </Typography>
          <Typography paragraph>
            Mon métier de concepteur développeur d'applications me permet
            d'allier mes passions pour la technologie, la création et la
            résolution de problèmes. Toujours en quête de nouveaux défis, je
            suis à l'écoute du marché pour des missions freelance ou des
            contrats, cherchant à mettre à profit mes compétences et mon
            expertise. N'hésitez pas à me contacter si vous souhaitez en savoir
            davantage sur mon parcours ou sur mes projets. Je suis ouvert à
            toute opportunité qui pourrait se présenter sur mon chemin
            professionnel.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Bio;
