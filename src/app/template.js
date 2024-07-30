'use client';

import React from "react";
import { LayoutProvider } from "@/context/LayoutContext";
import { UserProvider } from "@/context/UserContext";
import { ThemeProvider } from "@mui/styles";
import { CssBaseline } from "@mui/material";
import App from "@/components/UI/App";
import themes from "@/themes";
import NoSSR from "react-no-ssr";

export default function Template({ children }) {
  // return (
  //   <div>ababk {children}</div>
  // );
  return (
    <LayoutProvider>
      <UserProvider>
        <ThemeProvider theme={themes.default}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </UserProvider>
    </LayoutProvider>
  );
}