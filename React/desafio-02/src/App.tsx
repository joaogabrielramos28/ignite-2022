import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme/theme";

function App() {
  return <ThemeProvider theme={defaultTheme}></ThemeProvider>;
}

export default App;
