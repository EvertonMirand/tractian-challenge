"use client";

import { Header } from "@/components/header/Header";
import { store } from "@/store/store";
import { GlobalStyle } from "@/styles/global";
import { Provider } from "react-redux";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <GlobalStyle />
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
