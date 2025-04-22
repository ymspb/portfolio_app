import { z } from "zod";

const formSchema = z.object({
    email: z.string().email({message: "invalid email"}).min(1, {message: "email is required"}),
    password: z.string().min(1, {message: "password is required"})
});

export default formSchema;
