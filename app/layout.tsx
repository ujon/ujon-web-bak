import type {Metadata} from "next";
import {ReactNode} from "react";
import "@/styles/index.css"
import Header from "@/components/Header";


export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({children}: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="en">
        <body>
        <Header/>
        <main className="flex flex-col mx-auto max-w-screen-xl">
            {children}
        </main>
        </body>
        </html>
    );
}
