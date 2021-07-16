import React, { useState, useEffect } from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import ErrorContext from "../src/utils/error-context";
import ErrorSnackBar from "../src/components/ErrorSnackBar";

const App = (props: AppProps) => {
  const { Component, pageProps } = props;
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Chirper</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <ErrorContext.Provider value={{ setErrorMessage }}>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
          <ErrorSnackBar message={errorMessage} setErrorMessage={setErrorMessage} />
        </ErrorContext.Provider>
      </ThemeProvider>
    </>
  );
};

export default App;
