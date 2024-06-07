import React, { useState } from "react";
import { Box, Typography, Dialog, DialogContent, Grid } from "@mui/material";

// Importing images from the assets directory
import smat2Image from "../../assets/smat2.png";
import undr1Image from "../../assets/undr2.png";
import Test from "../../pages/test";

const AppDesigner = () => {
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
      <Typography variant="h4" gutterBottom>
        Concepteur Développeur d'Application
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4} textAlign="center">
          <Typography variant="h6">Smat-steps</Typography>
          <Box mt={1} className="box-image-projet">
            <img
              className="image-projet"
              src={smat2Image}
              alt="Application smat-setps"
              onClick={() => handleClickOpen(<Test />)}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} textAlign="center">
          <Typography variant="h6">YoungBoss</Typography>
          <Box mt={1} className="box-image-projet">
            <img
              className="image-projet"
              src={undr1Image}
              alt="Undr 1"
              onClick={() => handleClickOpen(<Test />)}
            />
          </Box>
        </Grid>
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <DialogContent>{dialogContent}</DialogContent>
      </Dialog>
    </Box>
  );
};

export default AppDesigner;
