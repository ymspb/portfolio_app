import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const Header = () => {
  return (
    <header className="font-medium bg-slate-800 text-white p-4 flex justify-between">
      <Link href={"/"} className="font-bold pt-1.5">Portfolio App</Link>
      <NavigationMenu>
        <NavigationMenuList className="align-middle">
          <NavigationMenuItem>
            <Link href="/translation" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Translation
              </NavigationMenuLink>
            </Link>
            <Link href="/login" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Log In
              </NavigationMenuLink>
            </Link>
            <Link href="/sign_in" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Sign In
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Header;
