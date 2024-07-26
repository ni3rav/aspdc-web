import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

type Props = {};

const Navbar = (props: any) => {
  return (
    <div className="h-16 w-screen flex items-center justify-between py-2 bg-red-400">
        <div>ASPDC</div>
      <div>
        <NavigationMenu>
          <NavigationMenuList className="flex flex-wrap gap-2">
            <NavigationMenuItem className="bg-[#0a0a0a]">
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Documentation
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem className="bg-[#0a0a0a]">
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Documentation
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div>Hello</div>
    </div>
  );
};

export default Navbar;
