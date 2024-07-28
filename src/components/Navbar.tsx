import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Image from "next/image";

type Props = {};

const Navbar = (props: any) => {
  return (
    <div className="h-16 w-full flex flex-wrap items-center justify-between py-2 bg-zinc-950">
      <div className="w-28 h-full flex items-center justify-center">
        <Link href="/">
          <Image src="/logo.png" alt="aspdc logo" width={100} height={100} />
        </Link>
      </div>
      <div>
        <NavigationMenu>
          <NavigationMenuList className="flex flex-wrap gap-2">
            <NavigationMenuItem>
              <Link href="/events" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Events
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/leaderboard" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Leaderboard
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <NavigationMenu className="mr-5">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Log In
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
