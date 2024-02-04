import { useState } from "react";
import { AuthLogin } from "./AuthLogin";
import { AuthRegister } from "./AuthRegister";

export const AuthForm = () => {
  const [userState, setUserState] = useState(true);
  return (
    <form className="flex flex-col bg-transparent lg:w-fit h-fit gap-y-2 xl:gap-y-4">
      {userState ? <AuthLogin /> : <AuthRegister />}

      <span className="text-lg text-center">
        {userState ? "Don't you have an account?" : "Already have an account?"}{" "}
        <button
          className="text-blue-500"
          onClick={() => setUserState((userState) => !userState)}
          type="button"
        >
          Sign {userState ? "Up" : "In"}
        </button>
      </span>
    </form>
  );
};
