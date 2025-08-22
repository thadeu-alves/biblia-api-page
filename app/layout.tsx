import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Bible Api",
    description: "Created by Thadeu Alves",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="bg-[var(--primary)] text-[var(--light)]">
                {children}
            </body>
        </html>
    );
}
