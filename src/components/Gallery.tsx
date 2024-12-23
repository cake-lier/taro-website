import { Box } from "@mui/material";
import Carousel from "react-material-ui-carousel";

export default function Gallery() {
  return (
    <Carousel animation="slide" height="50vh" sx={{ marginBottom: "10px" }}>
      {["ref_sheet.png", "japan.png", "pride.jpg"].map((p, i) => (
        <Box key={i} component="img" sx={{ height: 1, width: 1, objectFit: "contain" }} src={`/img/${p}`} />
      ))}
    </Carousel>
  );
}
