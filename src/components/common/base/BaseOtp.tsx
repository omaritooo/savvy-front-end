import { useState, useRef, useEffect } from "react";

const correctOTP = "123456";

export const BaseOtp = ({ numberOfDigits }: { numberOfDigits: number }) => {
  const [otp, setOtp] = useState(new Array(numberOfDigits).fill(""));
  const [otpError, setOtpError] = useState<string | null>(null);
  const otpBoxReference = useRef<any[]>([]);

  const handleChange = (value: string | number, index: number) => {
    const newArr = [...otp];
    newArr[index] = value;
    setOtp(newArr);

    if (value && index < numberOfDigits - 1) {
      otpBoxReference.current[index + 1].focus();
    }
  };

  const handleBackspaceAndEnter = (e: any, index: number) => {
    if (otpBoxReference.current) {
      if (e.key === "Backspace" && !e.target.value && index > 0) {
        otpBoxReference["current"][
          (index - 1) as keyof (typeof otpBoxReference)["current"]
        ].focus();
      }
      if (e.key === "Enter" && e.target.value && index < numberOfDigits - 1) {
        otpBoxReference.current[
          (index + 1) as keyof (typeof otpBoxReference)["current"]
        ].focus();
      }
    }
  };

  useEffect(() => {
    if (otp.join("") !== "" && otp.join("") !== correctOTP) {
      setOtpError("❌ Wrong OTP Please Check Again");
    } else {
      setOtpError(null);
    }
  }, [otp]);

  return (
    <article className="w-1/2">
      <div className="flex items-center gap-2">
        {otpBoxReference.current
          ? otp.map((digit, index) => (
              <input
                className="block w-10 h-auto p-2 text-centerbg-[#F7FBFF] border-[0px] ring-1 ring-[#D4D7E3] placeholder:text-[#8897AD] drop-shadow-sm border-[#D4D7E3]  rounded-md appearance-none focus:border-2 focus:outline-none"
                key={index}
                maxLength={1}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyUp={(e) => handleBackspaceAndEnter(e, index)}
                ref={(reference) =>
                  (otpBoxReference.current[index] = reference)
                }
                value={digit}
              />
            ))
          : null}
      </div>

      <p className={`text-lg text-white mt-4 ${otpError ? "error-show" : ""}`}>
        {otpError}
      </p>
    </article>
  );
};
