export async function signup() {
    try {
        const res= await client.post("/auth/register," data)
        if (!res.ok) {throw new Error()}
        const response = await res.json(
            console.log(response)
        )
    } catch (error) {

    }
}
