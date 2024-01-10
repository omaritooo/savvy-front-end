import { ReactNode } from "react";

export const FormContainer = ({ children }: { children: ReactNode }) => (
  <form className="bg-transparent max-w-[380px] h-fit flex flex-col gap-y-2 xl:gap-y-4">
    {children}
    <button
      className="w-full bg-[#162D3A] py-2 rounded-lg text-white"
      type="button"
    >
      Sign in
    </button>
  </form>
);
