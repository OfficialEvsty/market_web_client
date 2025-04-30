import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";


const Redirect = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const [isTokenReceived, setIsTokenReceived] = useState(false);

    const state = searchParams.get("state");
    const authCode = searchParams.get("code");

    useEffect(() => {
        const fetchTokens
    })
    return (
        <>
            <h1>Вы успешно авторизировались</h1>
        </>
    )
}

export default Redirect;