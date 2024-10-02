import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "../../components/ui/navigation-menu";
import Link from "next/link";
import {MobileNav} from "../../components/ui/mobile-nav";
import {navbar} from "../../config/nav";
import {ModeToggle} from "../../components/mode-toggle";

export default function Layout({
                                 children,
                               }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto max-w-screen-md px-4">
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
            <ModeToggle/>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
      {children}
    </div>
  );
}
