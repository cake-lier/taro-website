import { Button, Container, CssBaseline, Grid2 as Grid, Typography } from "@mui/material";
import Title from "./Title";
import Links from "./Links";
import { Copyright, Favorite } from "@mui/icons-material";
import Separator from "./Separator";
import Gallery from "./Gallery";
import "./style.css";

export default function Home() {
  return (
    <Container className="crt" maxWidth="md">
      <CssBaseline />
      <Title />
      <Separator />
      <Gallery />
      <Grid container>
        <Grid size={{ xs: 5 }}>
          <Links />
        </Grid>
        <Grid size={{ xs: 7 }}>
          <Typography variant="body1">
            Hewwo, my name is Taro. I&apos;m a small orange and red Pembroke Welsh Corgi from Italy. I love playing videogames, chocolate, and programming. I dislike cold, getting bored, and salads. 100% certified good boy :3
          </Typography>
        </Grid>
      </Grid>
      <Separator />
      <Grid container justifyContent="end" sx={{ marginBottom: "10px" }}>
        <Grid container size="auto">
          <Typography sx={{ margin: "0 2px" }} display="flex" alignItems="center" variant="body2">
            Made with
          </Typography>
        </Grid>
        <Grid container size="auto" alignItems="center">
          <Favorite htmlColor="#FF0000"/>
        </Grid>
        <Grid container size="auto">
          <Typography sx={{ margin: "0 2px" }} display="flex" alignItems="center" variant="body2">
            by
          </Typography>
        </Grid>
        <Grid container size="auto">
          <Typography display="flex" alignItems="center" variant="body2">
            <Button sx={{ textTransform: "none", margin: "0 2px", padding: "0 2px" }} disableRipple variant="text" href="https://github.com/cake-lier" target="_blank">cake-lier</Button>
          </Typography>
        </Grid>
        <Grid container size="auto" alignItems="center">
          <Copyright />
        </Grid>
        <Grid container size="auto">
          <Typography sx={{ margin: "0 2px" }} display="flex" alignItems="center" variant="body2">
            2024 - {new Date().getFullYear()}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}