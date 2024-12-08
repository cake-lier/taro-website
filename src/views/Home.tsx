import { Container, Grid2 as Grid, Typography } from "@mui/material";
import Title from "../components/Title";
import Links from "../components/Links";
import Separator from "../components/Separator";
import Gallery from "../components/Gallery";
import "./Home.css";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

export default function Home({ adjectiveIndex }: { adjectiveIndex: number }) {
  const { t } = useTranslation();

  return (
    <Container className="crt" maxWidth="md">
      <Title adjectiveIndex={adjectiveIndex} />
      <Separator />
      <Gallery />
      <Grid container>
        <Grid size={{ xs: 5 }}>
          <Links />
        </Grid>
        <Grid size={{ xs: 7 }}>
          <Typography variant="body1">{t("home.body")}</Typography>
        </Grid>
      </Grid>
      <Separator />
      <Footer />
    </Container>
  );
}
