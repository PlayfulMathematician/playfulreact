import type { ReactNode } from "react";
import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
type PageLayoutProps = {
  title: string;
  children?: ReactNode;
};

export default function PageLayout({ title, children }: PageLayoutProps) {

  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("utm_source") === "chatgpt") {
      navigate("/404", { replace: true });
    }
  }, [navigate]);
  return (
    <>
      <Navbar />
      <main>
        <h1>{title}</h1>
        {children}
      </main>
      <Footer />
    </>
  );
}

