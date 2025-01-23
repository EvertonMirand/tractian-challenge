"use client";

import { Header } from "@/components/header/Header";
import { StyledComponentsRegistry } from "@/register/StyledComponentsRegistry";
import { store } from "@/store/store";
import { GlobalStyle } from "@/styles/global";
import { theme } from "@/styles/theme";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>

          <Provider store={store}>
            <GlobalStyle />
            <Header />
            {children}
          </Provider>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
