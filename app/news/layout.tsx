import Hero  from "@/app/_components/Hero";
import Sheet from "@/app/_components/Sheet";
import { title } from "process";

export const metadata = {
    title: "ニュース",
}
type Props = {
    children: React.ReactNode;
};

export default function NewsLayout({children}:Props) {
    return (
        <>
         <Hero title="News" sub="ニュース" />
         <Sheet>{children}</Sheet>
        </>
    );
}