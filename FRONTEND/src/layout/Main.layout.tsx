import React from "react";
import { Footer, Navbar } from "../components";

type Props = {
  children: React.ReactNode;
  title?: string;
};

export const MainLayout = ({ children, title }: Props) => {
  return (
    <main className="d-flex flex-column w-100 min-vh-100">
      <Navbar />
      <div className="d-flex flex-grow-1 flex-column justify-content-center align-items-center container-sm">
        {title && <h1 className="text-center mb-5">{title}</h1>}
        {children}
      </div>
      <Footer />
    </main>
  );
};
