import { z } from "zod";

const formSchema = z.object({
  first_name: z
    .string({
      required_error: "Please enter your first name",
      invalid_type_error: "Name must be a string",
    })
    .trim()
    .min(3, { message: "Name must be more than 3 characters" })
    .max(20, { message: "Name must not exceed 20 characters" }),
  username: z
    .string({
      required_error: "Please enter your username",
      invalid_type_error: "Username must be a string",
    })
    .trim()
    .min(3, { message: "Name must be more than 3 characters" })
    .max(20, { message: "Name must not exceed 20 characters" }),
  last_name: z
    .string({
      required_error: "Please enter your last name",
      invalid_type_error: "Name must be a string",
    })
    .trim()
    .min(3, { message: "Name must be more than 3 characters" })
    .max(20, { message: "Name must not exceed 20 characters" }),
  email: z
    .string({
      required_error: "Please enter your email",
    })
    .trim()
    .email({ message: "Please enter a valid email" }),
  password: z.string().min(4),
  confirmPassword: z.string().min(4),
});

type formSchemaType = z.infer<typeof formSchema>;

type flattenedError = z.inferFlattenedErrors<typeof formSchema>;

export { formSchema, type formSchemaType, type flattenedError };
