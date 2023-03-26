import React from "react";
import Head from "next/head";
import Logo from "@/components/atoms/Logo";

export default function LoadingScreen() {
  return (
    <>
      <Head>
        <title>Loading...</title>
      </Head>
      <div className="min-h-screen w-full px-4 justify-center items-center">
        <div className="loading">
          <h1 className="py-4 text-4xl font-bold text-center text-gray-700">
            <Logo />
          </h1>
          <div className="space-y-2 balls">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
            <div className="four"></div>
            <div className="five"></div>
          </div>
        </div>
      </div>
    </>
  );
}
