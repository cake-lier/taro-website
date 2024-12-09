import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Title({ adjectiveIndex }: { adjectiveIndex: number }) {
  const { t } = useTranslation();

  return (
    <AppBar position="relative" color="transparent" sx={{ boxShadow: "none" }}>
      <Toolbar sx={{ padding: "0 !important" }}>
        <Button disableRipple variant="text" sx={{ textTransform: "none", padding: "0", marginTop: "10px" }} href="/">
          <Typography variant="h5" sx={{ padding: "6px 8px" }}>
            {t("header.title", { adjective: t(`header.adjectives.${adjectiveIndex.toString()}`) })}
          </Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
}
