import { Box } from "@mui/material";
import Carousel from "react-material-ui-carousel";

export default function Gallery() {
  return (
    <Carousel animation="slide" height="50vh" sx={{ marginBottom: "10px" }}>
      <Box
        component="img"
        sx={{ height: 1, width: 1, objectFit: "contain" }}
        src="/IMG_2477.PNG"
      />
      <Box
        component="img"
        sx={{ width: 1, height: 1, objectFit: "contain" }}
        src="/IMG_7956.PNG"
      />
    </Carousel>
  )
}