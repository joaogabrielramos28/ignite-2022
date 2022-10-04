import { ThemeProvider } from "styled-components";
import { CartProvider } from "./contexts/CartContext/CartContext";
import { Router } from "./routes/index.routes";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme/theme";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
        <Router />
      </CartProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
