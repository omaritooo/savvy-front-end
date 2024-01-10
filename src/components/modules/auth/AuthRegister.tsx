import { useState } from "react";
import { BaseInput } from "../../common/base/BaseInput";
import { FormContainer } from "./FormContainer";
import { AnimatePresence, motion } from "framer-motion";

export const AuthRegister = () => {
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    passwordConfirm: "",
  });

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
        <div className="flex flex-col justify-center h-full mx-auto mb-6 gap-y-1 xl:gap-y-5 2xl:gap-y-12">
          <h1 className="text-xl text-left lg:text-3xl">Hello there! 👋</h1>
          <p className="text-md lg:text-lg text-left max-w-[400px] leading-7 font-light">
            Today is a new day. It&apos;s your day. You shape it. Sign up to
            start managing your projects.
          </p>
          <FormContainer>
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
              id="username"
              label="Username"
              name="username"
              placeholder="Enter your username"
              type="text"
              value={form.username}
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
            <BaseInput
              id="password"
              label="Confirm password"
              name="passwordConfirm"
              placeholder="Confirm your password"
              type="password"
              value={form.passwordConfirm}
              valueGetter={formValidation}
            />
          </FormContainer>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
