import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#e64a19",
    },
    divider: "#852508",
    background: {
      default: "#212121",
      paper: "#212121",
    },
  },
  typography: {
    fontFamily: ["Terminal", "sans-serif"].join(", "),
  },
});

function App() {
  const { t } = useTranslation();
  const [adjectiveIndex, setAdjectiveIndex] = useState(0);

  useEffect(() => {
    const index = Math.floor(Math.random() * 4);
    setAdjectiveIndex(index < 4 ? index : 0);
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>{t("header.title", { adjective: t(`header.adjectives.${adjectiveIndex.toString()}`) })}</title>
      </Helmet>
      <ThemeProvider theme={darkTheme} defaultMode="dark">
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route index element={<Home adjectiveIndex={adjectiveIndex} />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
