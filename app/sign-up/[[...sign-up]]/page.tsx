import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* <SignUp afterSignInUrl="/learn" afterSignUpUrl="/learn" /> */}
      <SignUp afterSignInUrl="/" />
    </div>
  );
}
