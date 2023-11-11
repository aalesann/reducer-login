export const login = async (username, password) => {
    const response = await fetch('http://localhost:5500/api/auth/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    return data;
}