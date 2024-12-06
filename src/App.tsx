import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

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
  return (
    <ThemeProvider theme={darkTheme} defaultMode="dark">
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
