import React from 'react';
import Container from './ui/container';
import Link from 'next/link';
import MainNav from './main-nav';
import getCategories from '@/actions/get-categories';
import NavbarActions from './navbar-actions';
import { UserButton, SignInButton } from '@clerk/nextjs';
import { auth } from "@clerk/nextjs/server";
import { Button } from '@headlessui/react';

export const revalidate = 0;

const Navbar = async () => {
  const { userId } = auth(); // get the userId
  const categories = await getCategories();

  return (
    <div className='border-b'>
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href='/' className='ml-4 flex lg:ml-0 gap-x-2'>
            <p className='font-bold text-xl'>HEKSTORE</p>
          </Link>
          <MainNav  data={categories} />
          <NavbarActions />
         
            {userId ? (
              <div className="h-16 w-16 justify-center flex items-center">
                <UserButton
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "h-10 w-10 border", // Adjust the size here
                    },
                  }}
                />
              </div>
            ) : (
              <div className='hidden lg:flex bg-black rounded-3xl ml-1 h-11 w-20 border  justify-center text-white '>
              <SignInButton>
                sign-in
              </SignInButton>
            </div>
            )}
          
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
