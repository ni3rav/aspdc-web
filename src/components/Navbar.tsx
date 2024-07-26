import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

type Props = {};

const Navbar = (props: any) => {
  return (
    <div className="h-16 w-screen flex flex-wrap items-center justify-between py-2 ">
      <div className="flex flex-wrap items-center justify-between">ASPDC</div>

      <div>
        <NavigationMenu>
          <NavigationMenuList className="flex flex-wrap gap-2">
            <NavigationMenuItem className="bg-[#0a0a0a]">
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Events
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem className="bg-[#0a0a0a]">
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Leaderboard
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className="bg-[#0a0a0a]">
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                LogIn
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
