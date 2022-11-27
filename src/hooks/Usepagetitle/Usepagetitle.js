import { useEffect } from "react"

const Usepagetitle = title => {
    useEffect(() => {
        document.title = `${title}-phone corner`;
    }, [title])
};
export default Usepagetitle;