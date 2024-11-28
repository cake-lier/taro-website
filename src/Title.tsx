import { AppBar, Button, Toolbar, Typography } from "@mui/material";

export default function Title() {
  return (
    <AppBar position="relative" color="transparent" sx={{ boxShadow: "none" }}>
      <Toolbar sx={{ padding: "0 !important" }}>
          <Button disableRipple variant="text" sx={{ textTransform: "none", padding: "0", marginTop: "10px" }} href="/">
            <Typography variant="h5">
              Taro, the fluffy good boy
            </Typography>
          </Button>
      </Toolbar>
    </AppBar>
  )
}