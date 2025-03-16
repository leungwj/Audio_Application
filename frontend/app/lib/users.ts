"use server";

import { getSession } from "./session";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getAllUsers() {
    const session_token = await getSession();

    if (!session_token) {
        redirect('/login');
    }

    try {
        const response = await fetch(`${process.env.API_SERVER}/users`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${session_token.value}`
            }
        });

        const response_data = await response.json();
        
        if (!response.ok) {
            console.log(response_data.detail);
            return { error: response_data.detail };
        }

        const users = response_data.objs.map((obj: any) => JSON.parse(obj));

        return { users: users };

    } catch (error) {
        console.error("Error getting users:", error);
        return { error: "Error getting users. Please try again."} ;
    }
}

export async function getUserById(id: string) {
    const session_token = await getSession();

    if (!session_token) {
        redirect('/login');
    }

    try {
        const response = await fetch(`${process.env.API_SERVER}/users/${id}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${session_token.value}`
            }
        });

        const response_data = await response.json();
        
        if (!response.ok) {
            console.log(response_data.detail);
            return { error: response_data.detail };
        }

        const user = JSON.parse(response_data.obj);

        return { user: user };

    } catch (error) {
        console.error("Error getting user:", error);
        return { error: "Error getting user. Please try again."} ;
    }
}

export async function createUser(  prevState: string | undefined, formData: FormData) {
    const session_token = await getSession();

    if (!session_token) {
        redirect('/login');
    }

    try {
        // Step 1: get the username, full_name, email, and password from the form data
        const credentials = new URLSearchParams({ 
            username: formData.get('username') as string, 
            full_name: formData.get('full_name') as string, 
            email: formData.get('email') as string, 
            password: formData.get('password') as string 
        }).toString();

        // Step 2: Submit form data to backend server
        const response = await fetch(`${process.env.API_SERVER}/users/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: credentials
        });

        const response_data = await response.json();
        
        if (!response.ok) {
            if (response.status == 422){
                return "Validation Error: Please check for incorrect or blank fields.";
            }
            return response_data.detail;
        }
        
    } catch (error) {
        console.error("Error signing up:", error);
        return "Error signing up. Please try again.";
    }

    revalidatePath('/dashboard/users')
    redirect('/dashboard/users');
}

export async function updateUser(  id: string, prevState: string | undefined, formData: FormData) {
    const session_token = await getSession();

    if (!session_token) {
        redirect('/login');
    }

    try {
        // Step 1: get the username, full_name, email, and password from the form data
        const credentials = new URLSearchParams({ 
            username: formData.get('username') as string, 
            full_name: formData.get('full_name') as string, 
            email: formData.get('email') as string
        }).toString();

        // Step 2: Submit form data to backend server
        const response = await fetch(`${process.env.API_SERVER}/users/${id}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${session_token.value}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: credentials
        });

        const response_data = await response.json();
        
        if (!response.ok) {
            if (response.status == 422){
                return "Validation Error: Please check for incorrect or blank fields.";
            }
            return response_data.detail;
        }

    } catch (error) {
        console.error("Error updating user:", error);
        return "Error updating user. Please try again.";
    }

    revalidatePath('/dashboard/users')
    redirect('/dashboard/users');
}

export async function deleteUser( id: string ) {
    const session_token = await getSession();

    if (!session_token) {
        redirect('/login');
    }

    try {
        const response = await fetch(`${process.env.API_SERVER}/users/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${session_token.value}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });

        const response_data = await response.json();
        
        if (!response.ok) {
            return response_data.detail;
        }

    } catch (error) {
        console.error("Error deleting user:", error);
    }

    revalidatePath('/dashboard/users')
}