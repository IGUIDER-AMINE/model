import dynamic from "next/dynamic";
import React, { ReactNode } from "react";
const Header = dynamic(() => import("./Header"));
const Footer = dynamic(() => import("./Footer"));

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <section>
      <main className="h-[100vh] text-standardGray font-bodyFont bg-gradient-to-r font-medium text-standardcolor justify-between overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-stanscrollbar-thumb-standardGray/20 scrollbar-thumb-standardGray/60 bg-standardBlack flex flex-col">
        <Header />
        <div className="space-y-24 pb-24">{children}</div>
        <Footer />
      </main>
    </section>
  );
};

export default Layout;
