import { useEffect } from "react";
import { useState } from "react"

const Adminhooks = email => {
    const [isAdmin, setisAdmin] = useState(false);
    const [adminlodar,setAdminloder]=useState(true)
    useEffect(() => {
        if (email) {
            fetch(`https://assignment-12-server-nine.vercel.app/allusers/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setisAdmin(data.isAdmin)
                    setAdminloder(false)
                })
        }
    }, [email])
    return [isAdmin,adminlodar]
}

export default Adminhooks;