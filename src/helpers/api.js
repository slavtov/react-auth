export const http = async (method, path, data = null) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/${path}`, {
        method,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        body: data && JSON.stringify(data)
    })

    if (response.status === 204)
        return null

    const res = await response.json()

    if (response.status === 403 && res.message === 'Invalid Access Token') {
        const refresh = await http('GET', 'auth/refresh')
        localStorage.setItem('token', refresh.access_token)

        return await http(method, path, data)
    }

    if (!response.ok)
        throw res

    return res
}
