// frontend-app/app/(routes)/contact/page.tsx
import Container from "@/components/ui/container";
import { auth } from "@clerk/nextjs/server";
import ContactForm from "./components/contact-form";

export const revalidate = 0;

export default async function ContactPage() {
  const { userId } = auth();

  console.log("ContactPage Server Props:", { userId });

  return (
    <Container>
      <div className="py-10 space-y-8">
        <h1 className="text-3xl font-bold text-center">Contact Us</h1>
        <p className="text-center text-neutral-500 max-w-2xl mx-auto">
          {"Have questions or feedback? Fill out the form below, and we'll get back to you as soon as possible."}
        </p>
        <ContactForm userId={userId} />
      </div>
    </Container>
  );
}