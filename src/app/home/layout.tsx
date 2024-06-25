import type { Metadata } from 'next'
import Aside from "@/components/Aside";
import React from "react";
import Header from "@/components/Header";
import Providers from "@/app/providers";
import {Button} from "@nextui-org/button";
import { FaMagic } from "react-icons/fa";
import Chatbot from "@/components/chatbot";
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
        <html lang="en" className='dark'>
            <body >
                <Providers>
                    <Header/>
                    <div className="flex h-screen">
                        <Aside />
                        {children}
                        <Chatbot />
                    </div>
                </Providers>
            </body>
        </html>

    )
}



