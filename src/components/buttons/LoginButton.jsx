import {generateCodeChallenge, generateCodeVerifier} from "../../libs/pcke/pcke.js";
import "/src/styles/layout.css"

export const LoginButton = () => {
    // code grant + pkce, redirect to sso authority server
    const onLoginClick = async () => {
        let redirectUrl = window.location.href;
        //redirectUrl = "https://umaiden.ru/";
        // generating code challenge and code verifier
        const codeVerifier = generateCodeVerifier();
        const codeChallenge = await generateCodeChallenge(codeVerifier);
        sessionStorage.setItem("code_verifier", codeVerifier);

        const requestOptions = {
            method: 'POST',
            credentials: "include",
            headers: {
                'Content-Type': 'x-www-form-urlencoded',
                'Host': import.meta.env.VITE_SSO_DOMAIN
            },
            body: JSON.stringify({
                response_type: 'code',
                client_id: import.meta.env.VITE_CLIENT_ID,
                redirect_uri: redirectUrl + import.meta.env.VITE_AUTHORIZE_CALLBACK,
                scope: "openid profile",
                state: 'stateless',
                code_challenge: codeChallenge,
                code_challenge_method: import.meta.env.VITE_HASH_METHOD
            })
        }

        fetch(`https://${import.meta.env.VITE_SSO_DOMAIN}/authorize`, requestOptions)
            .then(async (response) => {
                if (!response.ok) {
                    console.log("Login failed.");
                }
                const data = await response.json()
                console.log(data)
                if (data.authRequired != null) {
                    window.location.href = data.authRequired.loginUrl
                }
            });
    }

    return <button className='header-btn' onClick={onLoginClick}>
        <img src='/assets/svg/User.svg' alt='user'/>
        Войти</button>
}
