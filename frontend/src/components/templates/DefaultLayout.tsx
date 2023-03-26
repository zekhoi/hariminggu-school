import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/Navbar";
import Head from "next/head";
import React from "react";

type DefaultLayoutProps = {
  title: string;
  dynamic?: boolean;
  children: React.ReactNode;
};

export default function DefaultLayout({
  title,
  dynamic = false,
  children,
}: DefaultLayoutProps) {
  const fullTitle = `hariminggu.com: ${title}`;
  return (
    <>
      <Head>
        <title>{fullTitle}</title>
      </Head>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar type={dynamic ? "dynamic" : "static"} />
        <main className="flex-1 bg-grayed">{children}</main>
        <Footer />
      </div>
    </>
  );
}
