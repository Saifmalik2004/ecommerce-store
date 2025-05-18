// frontend-app/components/Navbar.tsx
import React from "react";
import Container from "./ui/container";
import Link from "next/link";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";
import { UserButton, SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import MobileMenuToggle from "./MobileMenuToggle";
import Image from "next/image";

export const revalidate = 0;

const Navbar = async () => {
  const { userId } = auth();
  const categories = await getCategories();

  console.log("Navbar Server Props:", { userId, categories });

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2 items-center">
              <Image
                src="/logo.png"
                alt="ks-store Logo"
                width={40}
                height={40}
                className="object-contain"
                priority // Optimize LCP for above-the-fold image
              />
              <span className="font-bold text-xl hidden sm:block">ks-store</span>
            </Link>
          </div>
          <div className="hidden md:flex flex-1 justify-center">
            <MainNav data={categories} />
          </div>
          <div className="flex items-center gap-x-4">
            <NavbarActions />
            {userId ? (
              <div className="h-10 w-10 flex items-center justify-center">
                <UserButton
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "h-10 w-10 border",
                    },
                  }}
                />
              </div>
            ) : (
              <div className="hidden lg:flex bg-black rounded-3xl h-11 w-20 border justify-center items-center text-white">
                <SignInButton>sign-in</SignInButton>
              </div>
            )}
          </div>
          <div className="md:hidden flex items-center">
            <MobileMenuToggle />
          </div>
        </div>
        <div id="mobile-menu" className="hidden md:hidden bg-white border-t">
          <MainNav data={categories} />
          {!userId && (
            <div className="px-4 py-2">
              <SignInButton>
                <button className="bg-black text-white rounded-3xl h-11 w-full border text-center">
                  Sign In
                </button>
              </SignInButton>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Navbar;