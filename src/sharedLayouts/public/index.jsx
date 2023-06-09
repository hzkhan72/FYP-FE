import React, { useState } from "react";
import { Header, Footer } from "../../components";

function PublicSharedLayout({ children }) {
  return (
    <section>
      <Header />
      {children}
    </section>
  );
}

export default PublicSharedLayout;
