"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();

  return (
    <header className="font-medium bg-slate-800 text-white p-4 flex justify-between">
      <Link href={"/"} className="font-bold pt-1.5">
        Portfolio App
      </Link>
      <NavigationMenu>
        <NavigationMenuList className="align-middle">
          <NavigationMenuItem>
            <Link href="/translation" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Translation
              </NavigationMenuLink>
            </Link>
            {session ? (
                <NavigationMenuLink onClick={() => signOut({redirect: false})} className={`${navigationMenuTriggerStyle()} cursor-pointer`}>
                  Log Out
                </NavigationMenuLink>
            ) : (
              <Link href="/log_in" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Log In
                </NavigationMenuLink>
              </Link>
            )}
            <Link href="/sign_up" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Sign Up
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Header;
