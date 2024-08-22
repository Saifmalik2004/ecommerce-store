import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex mt-12">
      <SignUp />
    </div>
  );
}