'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import the useRouter hook
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/button";
import { toast } from "react-hot-toast";
import useCart from "@/hooks/use-cart";
import axios from "axios";
import { useAuth } from "@clerk/nextjs"; // Import useAuth from Clerk

const CheckoutFormSchema = z.object({
  phone: z.string().min(10, "Phone number is required"),
  address: z.string().min(5, "Address is required"),
});

type CheckoutFormValues = z.infer<typeof CheckoutFormSchema>;

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);
  const { userId, isLoaded } = useAuth(); // Get userId and isLoaded from useAuth
  const router = useRouter();
  const items = useCart((state) => state.items);
  const productIds = items.map((item) => item.id);
  const removeAll = useCart((state) => state.removeAll);

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(CheckoutFormSchema),
    defaultValues: {
      phone: "",
      address: "",
    },
  });

  const onSubmit = async (data: CheckoutFormValues) => {
    setLoading(true);
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
        ...data,
        productIds, // Include product IDs in the request payload
      });

      if (response.status === 200) {
        toast.success("Order placed successfully!");
        form.reset();
        removeAll();
        router.push("/cart"); // Redirect to the cart page after success
      } else {
        toast.error("Failed to place the order.");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isLoaded) return; // Wait for auth status to load
    if (!userId) {
      router.push('/sign-in'); // Redirect to sign-in page if not authenticated
    }
  }, [isLoaded, userId, router]);

  if (!isLoaded || !userId) {
    return <div>Loading...</div>; // Show a loading state while redirecting
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your phone number" disabled={loading} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your address" disabled={loading} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={loading} className="w-full" type="submit">
            {loading ? "Placing Order..." : "Place Order"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
