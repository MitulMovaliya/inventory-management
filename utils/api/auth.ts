import { LoginRequest, SignupRequest } from "@/types";

export async function registerUser(formData: SignupRequest) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    console.log(errorData);
    throw new Error(
      errorData.error || "Failed to register user",
      errorData.details ?? errorData.details
    );
  }

  return response.json();
}

export async function loginUser(formData: LoginRequest) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    console.log(errorData);
    throw new Error(
      errorData.error || "Failed to login user",
      errorData.details ?? errorData.details
    );
  }

  return response.json();
}
