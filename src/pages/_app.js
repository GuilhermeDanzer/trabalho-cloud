import GlobalStyle from "../styles/global";
import { Layout } from "../layout/Layout";
import { ThemeProvider } from "styled-components";
import theme from "../styles/themes";
export default function App({ Component, pageProps }) {
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
        <GlobalStyle />
      </Layout>
    </ThemeProvider>
  );
}
