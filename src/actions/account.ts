"use server";

import { z } from "zod";
import {redirect} from "next/navigation";
import {cookies} from "next/headers";
import axiosInterceptorInstance from "@/axiosInterceptorInstance";

type LoginResponse = {
    token: string;
}
const login = async (email: string, password: string) => {
    try {
        const response = await axiosInterceptorInstance.post( '/api/login', {email,password})
        return response
    } catch (e) {
        if (e.message) {
            return { message: e.message }
        }
        return { status: 500 }
    }
}

export const  signInApp = async (email: string, password: string) => {
    const parsedCredentials = z
        .object({ email: z.string().email(), password: z.string() })
        .safeParse({ email, password });
    if (!parsedCredentials.success) {
        return { message: 'Invalisd credentials' , token: null};
    }
    const credentials = parsedCredentials.data;
    let response = await login(credentials.email, credentials.password);
    if (response.status === 200) {
        const json: LoginResponse = await response.data
        return { message: 'success', token: json.token };
    }
    return { message: 'Invalid credentials', token: null };

}

export async function createUser(
    prevState: {
        message: string;
    },
    formData: FormData,
) {
    const schema = z.object({
        email: z.string().email({ message: "Invalid email"}),
        password: z.string().min(8, { message: "Password must be at least 8 characters long"})
    });
    const parse = schema.safeParse({
        email: formData.get("email"),
        password: formData.get("password")
    });

    if (!parse.success) {
        return { message: parse.error.errors[0].message };
    }

    const data = parse.data;
    try {
        const response = await fetch(process.env.NEXT_PUBLIC_BACKEND + '/register', {
            method: 'POST',
            body: JSON.stringify(
                {
                    email: data.email,
                    username: data.email,
                    password: data.password
                }
            ),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const json = await response.json()
        if (json.error) {
            return { message: json.error }
        }
    } catch (e) {
        console.log(e)
        return { message: 'failed to create user try with another email'}
    }
    redirect("/login");
}

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {

    const response = await signInApp(formData.get("email") as string, formData.get("password") as string)
    if (response.token !== null) {
        cookies().set('token', response.token)
        redirect("/home/dashboard");
    }
    return { message: response.message };
}
