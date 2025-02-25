import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers";

const poppins = Poppins({
  variable: "--poppins-sans",
  subsets: ["latin"],
  weight: "400"
});


export const metadata: Metadata = {
  title: "Profowl",
  description: "Profowl is a soccer scouting players that is based in Ghana west africa we give you data about players from the grassroots to premier league level.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
