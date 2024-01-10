import { useState } from "react";
import { BaseInput } from "../../common/base/BaseInput";
import { FormContainer } from "./FormContainer";
import { AnimatePresence, motion } from "framer-motion";

export const AuthLogin = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [forgetPassword, setForgetPassword] = useState(false);

  const formValidation = (e: HTMLInputElement | HTMLTextAreaElement) => {
    const { name, value } = e;
    setForm((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  return (
    <AnimatePresence>
      <motion.div
        animate={{ x: 0, opacity: 1 }}
        className="flex flex-1 justify-center w-[50vw]  min-w-1/2"
        exit={{ x: -300, opacity: 0 }}
        initial={{ x: 300, opacity: 0 }}
        transition={{ type: "spring" }}
      >
        <div className="flex flex-col justify-center h-full gap-y-1 xl:gap-y-5 2xl:gap-y-12">
          <h1 className="text-xl text-left lg:text-3xl">Welcome Back 👋</h1>
          <p className="text-md lg:text-lg text-left max-w-[400px] leading-7 font-light">
            Today is a new day. It&apos;s your day. You shape it. Sign in to
            start managing your projects.
          </p>
          <FormContainer>
            {!forgetPassword ? (
              <>
                <BaseInput
                  id="email"
                  label="Email"
                  name="email"
                  placeholder="Enter your email.."
                  type="text"
                  value={form.email}
                  valueGetter={formValidation}
                />
                <BaseInput
                  id="password"
                  label="Password"
                  name="password"
                  placeholder="Enter your password"
                  type="password"
                  value={form.password}
                  valueGetter={formValidation}
                />
              </>
            ) : (
              <BaseInput
                id="email"
                label="Email"
                name="email"
                placeholder="Enter your email.."
                type="text"
                value={form.email}
                valueGetter={formValidation}
              />
            )}
            <button
              className="self-end bg-transparent w-fit h-fit"
              onClick={() => setForgetPassword((prev) => !prev)}
              type="button"
            >
              <span className="mt-3 text-base text-right text-blue-400 xl:mt-6">
                {forgetPassword ? "Forget your password?" : "Back to login"}
              </span>
            </button>
          </FormContainer>
          <div className="flex flex-col gap-y-6 max-w-[380px]">
            <div className="flex items-center w-full gap-x-4">
              <div className="h-[1px] bg-gray-400 flex-1" />
              <span>Or</span>
              <div className="h-[1px] bg-gray-400 flex-1" />
            </div>
            <div className="flex flex-col gap-y-4">
              <ButtonFacebook />
              <ButtonGoogle />
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

const ButtonFacebook = () => (
  <button
    className="bg-[#F3F9FA]  text-center flex justify-center lg:justify-start md:px-20 lg:px-12 xl:px-20 rounded-xl py-2 xl:py-2 drop-shadow-sm"
    type="button"
  >
    <span className="flex items-center text-center gap-x-2">
      <img height="28" src="/Vector.svg" width="28" />
      Sign in with Facebook
    </span>
  </button>
);

const ButtonGoogle = () => (
  <button
    className="bg-[#F3F9FA]  text-center flex justify-center lg:justify-start md:px-20 lg:px-12 xl:px-20 rounded-xl py-2 xl:py-2 drop-shadow-sm"
    type="button"
  >
    <span className="flex items-center gap-x-2 text-centter">
      <img height="28" src="/Google.svg" width="28" />
      Sign in with Google
    </span>
  </button>
);
