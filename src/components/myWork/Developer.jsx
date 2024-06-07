import React, { useState } from "react";
import { Box, Typography, Dialog, DialogContent, Grid } from "@mui/material";

// Importation des images depuis le répertoire des assets
import ballnconnectImage from "../../assets/ballnconnect1.jpg";
import portfolioImage from "../../assets/portfolio2.png";
import labonnecplaceImage from "../../assets/labonneplace2.png";
import Test from "../../pages/test";

const Developer = () => {
  const [open, setOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState(null);

  const handleClickOpen = (content) => {
    setDialogContent(content);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setDialogContent(null);
  };

  return (
    <Box>
      <Typography variant="h2" gutterBottom>
        Technologies
      </Typography>
      <Box>
        <Typography ml={5} mb={2} variant="h4" className="title-h4">
          Développeur
        </Typography>
      </Box>
      <Box mt={4} p={2}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4} textAlign="center">
            <Typography variant="h6" className="title-h6">
              Ball'N'Connect
            </Typography>
            <Box mt={1} className="box-image-projet">
              <img
                className="image-projet"
                src={ballnconnectImage}
                alt="Ball'N'Connect"
                onClick={() => handleClickOpen(<Test />)}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} textAlign="center">
            <Typography variant="h6" className="title-h6">
              Portfolio
            </Typography>
            <Box mt={1} className="box-image-projet">
              <img
                className="image-projet"
                src={portfolioImage}
                alt="Portfolio"
                onClick={() => handleClickOpen(<Test />)}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} textAlign="center">
            <Typography variant="h6" className="title-h6">
              La Bonne Place
            </Typography>
            <Box mt={1} className="box-image-projet">
              <img
                className="image-projet"
                src={labonnecplaceImage}
                alt="La Bonne Place"
                onClick={() => handleClickOpen(<Test />)}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogContent>{dialogContent}</DialogContent>
      </Dialog>
    </Box>
  );
};

export default Developer;
