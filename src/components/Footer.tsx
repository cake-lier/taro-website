import { Copyright, Favorite } from "@mui/icons-material";
import { Button, Grid2 as Grid, Typography } from "@mui/material";
import { Trans, useTranslation } from "react-i18next";

export default function Footer() {
  const { i18n } = useTranslation();
  const format = new Intl.DateTimeFormat(i18n.language, { year: "numeric" });

  return (
    <Grid container justifyContent="end" sx={{ marginBottom: "10px" }}>
      <Grid container alignItems="center">
        <Trans i18nKey="footer.copyright">
          <Typography variant="body2">Made with</Typography>
          <Favorite sx={{ margin: "0 4px", fontSize: "1.25rem" }} htmlColor="#FF0000" />
          <Typography variant="body2">by</Typography>
          <Button
            sx={{ padding: 0, margin: "0 0 0 4px", textTransform: "none" }}
            disableRipple
            variant="text"
            href="https://github.com/cake-lier"
            target="_blank"
          >
            cake-lier
          </Button>
        </Trans>
      </Grid>
      <Grid container alignItems="center">
        <Copyright sx={{ margin: "0 4px", fontSize: "1.25rem" }} />
        <Typography variant="body2">
          {format.format(new Date("2024-11-27"))} - {format.format(Date.now())}
        </Typography>
      </Grid>
    </Grid>
  );
}
