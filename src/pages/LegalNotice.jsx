import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";

const LegalNotice = () => {
  return (
    <Box className="legal-notice">
      <Typography variant="h2">Mentions légales</Typography>
      <List>
        <ListItem>
          <ListItemText primary="Identité du responsable du site" />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Nom: David Konaté"
            secondary="4 avenue Richelieu 44100 Nantes"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Numéro de téléphone: 0763418790"
            secondary="Adresse e-mail: da.konate@gmail.com"
          />
        </ListItem>
        {/* Add sections for Propriété intellectuelle, Liens hypertextes, Limitation de responsabilité, etc. using similar structure */}
      </List>
    </Box>
  );
};

export default LegalNotice;
