import * as z from "zod"

// Regular expression for password validation
const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/;
export const SignupValidation =z.object({
    name:z.string().min(2,{message:'Too short , atleast 2 characters'}),
    username:z.string().min(3,{message:'Too short , atleast 3 characters'}),
    email:z.string().email({message:'Invalid email'}),
    password:z.string().min(8,{message:"Too short passowrd must be atleast 8 characters long"}).regex(passwordRegex, {
        message: "Password must contain at least one number, one lowercase letter, one uppercase letter, and one special character",
      }),
})