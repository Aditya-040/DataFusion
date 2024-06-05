import type { Metadata } from 'next'
import Aside from "@/components/Aside";
import React from "react";
import Header from "@/components/Header";

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
        <html lang="en">
            <body>
            <Header/>
            <div className="flex h-screen">

                    <Aside />
                    {children}
                </div>
            </body>
        </html>
    )
}
