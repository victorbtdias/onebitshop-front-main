import { StatusBar } from "expo-status-bar";
import Routes from "./src/routes";
import { ThemeProvider } from "styled-components/native";
import { myTheme } from "./src/styles";
import ErrorBoundary from "./src/components/Error";

export default function App() {
  return (
    <ErrorBoundary>
      <StatusBar style="auto" />
      <ThemeProvider theme={myTheme}>
        <Routes />
      </ThemeProvider>
    </ErrorBoundary>
  );
}
