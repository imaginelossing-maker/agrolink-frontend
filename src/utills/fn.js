
import client from "./api";

const baseURL = 'https://agrolink-backend-otue.onrender.com';

export async function register(data) {
    try {
        const res = await fetch(`${baseURL}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        const response = await res.json();
        console.log(response);
        return response;

    } catch (error) {
        console.log(error.statusText);
    }
}

export async function login(data) {
    try {
        const res = await fetch(`${baseURL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        const response = await res.json();
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
    }
}
