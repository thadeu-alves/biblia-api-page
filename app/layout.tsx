import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
    title: "Bible Api",
    description: "Created by Thadeu Alves",
};

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <div
                    className={` ${inter} bg-[var(--dark)] text-[var(--light)] flex flex-col min-h-screen
                        `}
                >
                    <Header />
                    <main className="flex-1 p-8">
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
