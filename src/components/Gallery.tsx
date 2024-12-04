import { Box } from "@mui/material";
import Carousel from "react-material-ui-carousel";

export default function Gallery() {
  return (
    <Carousel animation="slide" height="50vh" sx={{ marginBottom: "10px" }}>
      {["IMG_2477.PNG", "IMG_7956.PNG"].map((p, i) => (
        <Box key={i} component="img" sx={{ height: 1, width: 1, objectFit: "contain" }} src={`/img/${p}`} />
      ))}
    </Carousel>
  );
}
