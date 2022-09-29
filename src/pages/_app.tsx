import type { AppProps } from 'next/app';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import GlobalStyle from '../components/globalstyles';
import 'ol/ol.css';
import 'ol/dist/ol';

const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
