
import { Toaster } from "sonner"
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { dark } from "@clerk/themes";

export const metadata = {
  title: "Acadiora",
  description: "",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "700"],
});
export default function RootLayout({
  children
}) {
  return (
    <ClerkProvider appearance={{
      baseTheme: dark,
    }}>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${inter.className}`}
        > <div className="grid-background"></div>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />

            <footer className=" bg-muted/80">
              <div className="container mx-auto px-4 text-center text-gray-600 py-10">
                <p> Made with 💗 by  Manisha</p>
              </div>
            </footer>
          </ThemeProvider>

        </body>
      </html>
    </ClerkProvider>
  );
}
