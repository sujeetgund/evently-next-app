import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="min-h-screen w-full flex-center bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center">
      <SignUp />
    </main>
  );
}
