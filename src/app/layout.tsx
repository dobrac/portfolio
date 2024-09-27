import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import {baseUrl} from "./sitemap";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "../components/ui/navigation-menu";
import Link from "next/link";
import {MobileNav} from "../components/ui/mobile-nav";
import {navbar} from "../config/nav";
import {SpeedInsights} from "@vercel/speed-insights/next"
import {Toaster} from "../components/ui/sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Jakub Dobry | Portfolio',
    template: '%s | Jakub Dobry',
  },
  description: 'Jakub Dobry\'s portfolio.',
  openGraph: {
    title: 'Jakub Dobry | Portfolio',
    description: 'Jakub Dobry\'s portfolio.',
    url: baseUrl,
    siteName: 'Jakub Dobry',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${baseUrl}/images/profile_picture.jpeg`,
        width: 1000,
        height: 1000,
        alt: 'Jakub Dobry Selfie',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased font-[family-name:var(--font-geist-sans)] mx-auto max-w-screen-md px-4`}
    >
    <nav
      className="my-3 flex md:justify-center sticky top-0 bg-background py-1 z-40">
      <MobileNav/>
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList>
          {navbar.map((item) => (
            <NavigationMenuItem key={item.href}>
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
    {children}
    <Toaster/>
    <SpeedInsights/>
    </body>
    </html>
  );
}
