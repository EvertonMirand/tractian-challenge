"use client";

import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import React, { useState } from "react";

export function StyledComponentsRegistry({ children }: { children: React.ReactNode }) {
  // Initialize a new ServerStyleSheet instance for each render
  const [sheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = sheet.getStyleElement();
    // Seal the sheet after extracting styles to prevent further use
    sheet.seal();
    return <>{styles}</>;
  });

  // Wrap the children with StyleSheetManager
  return <StyleSheetManager sheet={sheet.instance}>{children}</StyleSheetManager>;
}
