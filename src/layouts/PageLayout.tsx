import type { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
type PageLayoutProps = {
  title: string;
  children?: ReactNode;
};

export default function PageLayout({ title, children }: PageLayoutProps) {
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

