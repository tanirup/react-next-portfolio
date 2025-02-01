import React from "react";
import Hero from "../_components/Hero";
import Sheet from "@/app/_components/Sheet";
import { title } from "process";

export const metadata = {
  title: "メンバー",
};

type Props = {
    children: React.ReactNode;
};

export default function RootLayout({ children}: Props) {
    return (
    <>
      <Hero title="Production" sub="制作作品"/>
      <Sheet>{children}</Sheet>;
    </>
    );
}