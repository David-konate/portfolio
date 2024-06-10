import React from "react";
import { Box, Typography } from "@mui/material";
import Languages from "../technos/Languages";
import Frameworks from "../technos/Framworks";
import Fronts from "../technos/Fronts";
import BaseDonnees from "../technos/BaseDonnees";

const Technologies = () => {
  return (
    <Box>
      <Typography variant="h2" gutterBottom>
        Technologies
      </Typography>
      {/* Ajoutez ici vos sous-sections ou composants pour Technologies */}
      <Box>
        <Typography ml={5} mb={2} variant="h4">
          Langages
        </Typography>
        <Languages />
      </Box>
      <Box mt={4}>
        <Typography ml={5} mb={2} variant="h4">
          Framworks
        </Typography>
        <Frameworks />
      </Box>
      <Box mt={4}>
        <Typography ml={5} mb={2} variant="h4">
          Technos Front
        </Typography>
        <Fronts />
      </Box>
      <Box mt={4}>
        <Typography ml={5} mb={2} variant="h4">
          Base de données
        </Typography>
        <BaseDonnees />
      </Box>
    </Box>
  );
};

export default Technologies;
