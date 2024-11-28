import { Instagram, Reddit, SportsEsports, Twitter } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";

export default function Links() {
  return (
    <Stack alignItems="start">
      <Button disableRipple sx={{ textTransform: "none" }} variant="text" startIcon={<Instagram />} href="https://www.instagram.com/cake_lier" target="_blank">
        /instagram
      </Button>
      <Button disableRipple sx={{ textTransform: "none" }} variant="text" startIcon={<Twitter />} href="https://www.twitter.com/cake_lier" target="_blank">
        /twitter
      </Button>
      <Button disableRipple sx={{ textTransform: "none" }} variant="text" startIcon={<SportsEsports />} href="https://steamcommunity.com/profiles/76561198121033610" target="_blank">
        /steam
      </Button>
      <Button disableRipple sx={{ textTransform: "none" }} variant="text" startIcon={<Reddit />} href="https://www.reddit.com/user/cake_lier" target="_blank">
        /reddit
      </Button>
    </Stack>
  )
}