import { AuthForm } from "../components/modules/auth/AuthForm";

export const AuthView = () => (
  <main className="container flex flex-col-reverse items-center justify-center w-screen py-4 bg-white lg:justify-between gap-x-10 lg:h-screen lg:flex-row lg:py-8 gap-y-4">
    <AuthForm />
    <div className="max-h-[20vh] h-[20vh] lg:h-full w-full sm:w-1/2 overflow-hidden lg:max-h-[90vh] drop-shadow-md lg:w-fit rounded-md">
      <img className="object-cover w-full h-full" src="Art.png" />
    </div>
  </main>
);
