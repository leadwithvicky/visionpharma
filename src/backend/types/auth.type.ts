export interface registerUser_I {
  email: string;
  password: string;
  fullName?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  mobile?: string;
  dob?: string;
  photo?: string;
  address?: string;
  gender?: string;
  status?: number;
}

export interface tokenUserSign_I {
  id: string;
  email: string;
  role: string;
  [key: string]: unknown; // Add index signature
}
