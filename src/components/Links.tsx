import { Instagram, Reddit, SportsEsports, Twitter } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";

export default function Links() {
  return (
    <Stack alignItems="start">
      {[
        {
          text: "/instagram",
          icon: <Instagram />,
          link: "https://www.instagram.com/cake_lier",
        },
        {
          text: "/twitter",
          icon: <Twitter />,
          link: "https://www.twitter.com/cake_lier",
        },
        {
          text: "/steam",
          icon: <SportsEsports />,
          link: "https://steamcommunity.com/profiles/76561198121033610",
        },
        {
          text: "/reddit",
          icon: <Reddit />,
          link: "https://www.reddit.com/user/cake_lier",
        },
      ].map((e, i) => (
        <Button
          key={i}
          disableRipple
          sx={{ textTransform: "none" }}
          variant="text"
          startIcon={e.icon}
          href={e.link}
          target="_blank"
        >
          {e.text}
        </Button>
      ))}
    </Stack>
  );
}
