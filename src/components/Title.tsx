import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Title() {
  const { t } = useTranslation();
  const [adjectiveIndex, setAdjectiveIndex] = useState(0);

  useEffect(() => {
    const index = Math.floor(Math.random() * 4);
    setAdjectiveIndex(index < 4 ? index : 0);
  }, []);

  return (
    <AppBar position="relative" color="transparent" sx={{ boxShadow: "none" }}>
      <Toolbar sx={{ padding: "0 !important" }}>
        <Button disableRipple variant="text" sx={{ textTransform: "none", padding: "0", marginTop: "10px" }} href="/">
          <Typography variant="h5">
            {t("header.title", { adjective: t(`header.adjectives.${adjectiveIndex.toString()}`) })}
          </Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
}
