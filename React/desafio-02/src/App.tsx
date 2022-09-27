import { ThemeProvider } from "styled-components";
import { Router } from "./routes/index.routes";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme/theme";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
