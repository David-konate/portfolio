import React from "react";
import { Box, Container, Typography } from "@mui/material";
import laptopImage from "../../assets/laptop.png";

const Bio = () => {
  // Set the image path correctly, relative to the component's location
  const imagePath = "../"; // Adjust if needed

  return (
    <Container>
      <Box display="grid" gap={2}>
        <Typography>
          <img
            width={"400px"}
            height={"400px"}
            src={laptopImage}
            alt="Bitmoji représentant David Konaté sortant d'un pc portable"
            style={{ float: "right", marginRight: "10px" }}
          />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mauris
          magna. Nulla facilisi. Integer non libero nec nisl suscipit accumsan.
          Vestibulum vel odio euismod, tincidunt nisl ut, hendrerit justo.
          Pellentesque at ante eget magna pulvinar vulputate. Morbi quis nunc eu
          mi tincidunt semper. Vivamus id lectus vitae eros viverra tempor. Nam
          rhoncus justo id risus ullamcorper, eget tincidunt sem blandit.
          Integer lacinia tempus sollicitudin. Aliquam erat volutpat. Nullam
          varius eleifend leo, at vestibulum purus fringilla nec. Nam vehicula
          ex et lacinia convallis. Sed ut risus dui. Nulla facilisi. Duis
          efficitur turpis quis accumsan hendrerit. Ut eleifend condimentum
          sapien, eget eleifend turpis. Sed vitae semper lorem, non eleifend
          nunc. Duis nec varius ligula. Mauris euismod est a turpis ultricies
          feugiat. Aliquam erat volutpat. Vestibulum dapibus augue non magna
          facilisis, ut interdum velit rhoncus. Sed sed ullamcorper ipsum, a
          vehicula dolor. Maecenas eu posuere lorem. Nullam ac lacus id eros
          finibus cursus. Integer sed felis at libero consequat rhoncus. Quisque
          id fermentum turpis. Vivamus ullamcorper, odio sed rhoncus tincidunt,
          lorem magna fermentum dolor, et ultrices odio nulla id metus. Vivamus
          eu orci nec leo euismod ultricies in eget ligula. Suspendisse
          convallis vehicula eleifend.
        </Typography>
      </Box>
    </Container>
  );
};

export default Bio;
