import { z } from 'zod';

export const signupSchema = z
  .object({
    fullName: z
      .string()
      .min(3, { message: 'Full name must be at least 3 characters long' }),
    email: z
      .string()
      .email({ message: 'Invalid email address' })
      .refine((val) => val.endsWith('@gmail.com'), {
        message: 'Email must be a Gmail address (ending with @gmail.com)',
      }),
    mobile: z.string().regex(/^\d{1,10}$/, {
      message: 'Mobile number must be up to 10 digits',
    }),

    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters long' })
      .regex(/[A-Z]/, {
        message: 'Password must contain at least one uppercase letter',
      })
      .regex(/[0-9]/, { message: 'Password must contain at least one number' })
      .regex(/[^A-Za-z0-9]/, {
        message: 'Password must contain at least one special character',
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type SignupData = z.infer<typeof signupSchema>;

export const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' })
    .regex(/[A-Z]/, {
      message: 'Password must contain at least one uppercase letter',
    })
    .regex(/[0-9]/, { message: 'Password must contain at least one number' })
    .regex(/[^A-Za-z0-9]/, {
      message: 'Password must contain at least one special character',
    }),
});

export type LoginData = z.infer<typeof loginSchema>;
