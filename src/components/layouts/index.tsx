import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import { Container } from "./Layout.styles";

export default function Layout() {
  return (
    <Container>
      <div className="app">
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{ duration: 2500 }}
        />
        <Header />
        <div className="app-content">
          <Outlet />
        </div>
        <Footer />
      </div>
    </Container>
  );
}
