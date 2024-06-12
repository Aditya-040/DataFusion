import type { Metadata } from 'next'
import Aside from "@/components/Aside";
import React from "react";
import Header from "@/components/Header";
import ReactDOM from "react-dom/client";
import {NextUIProvider} from "@nextui-org/react";

export const metadata: Metadata = {
    title: 'Data fusion',
    description: 'Data fusion',
}
export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <NextUIProvider>
        <html lang="en">
            <body className="dark text-foreground bg-background">
            <Header/>
            <div className="flex h-screen">

                    <Aside />
                    {children}
                </div>
            </body>
        </html>
        </NextUIProvider>

    )
}



