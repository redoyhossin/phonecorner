import { useEffect } from "react";
import { useState } from "react";

const Tokenhooks = email => {

    const [tokens, setTokens] = useState('')

    useEffect(() => {
        if (email) {
            fetch(`https://assignment-12-server-nine.vercel.app/jwttoken?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.accessToken) {
                        localStorage.setItem('accessToken', data.accessToken)
                        setTokens(data.accessToken)
                    }
                })
        }

    }, [email])
    return [tokens]

}

export default Tokenhooks;