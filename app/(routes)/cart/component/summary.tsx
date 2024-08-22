'use client';

import React from 'react';
import { useRouter } from "next/navigation";
import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import toast from "react-hot-toast";

interface SummaryProps {
  userId:string | null | undefined;
}

const Summary: React.FC<SummaryProps> = ({ userId }) => {
  const items = useCart((state) => state.items);
  const router = useRouter();

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const onCheckout = async () => {
    if (!userId) {
      // Redirect to sign-in page if the user is not authenticated
      router.push('/sign-in');
      toast.error("Please sign in to proceed to checkout.");
      return;
    }

    // If the user is authenticated, proceed to the checkout page
    router.push('/checkout');
  }

  return (
    <div className="
      mt-16 
      rounded-lg 
      bg-gray-50 
      px-4 py-6 
      sm:p-6 
      lg:col-span-5
      lg:mt-0
      lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">
        Order Summary
      </h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">
            Order total
          </div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button disabled={items.length === 0} onClick={onCheckout} className="w-full mt-6">
        Checkout
      </Button>
    </div>
  );
}

export default Summary;
