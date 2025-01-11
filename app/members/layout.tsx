import React from "react";
import Hero from "../_components/Hero";
import Sheet from "@/app/_components/Sheet";

type Props = {
    children: React.ReactNode;
};

export default function RootLayout({ children}: Props) {
    return (
    <>
      <Hero title="Members" sub="メンバー"/>
      <Sheet>{children}</Sheet>;
    </>
    );
}