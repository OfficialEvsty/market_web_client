import {generateCodeChallenge, generateCodeVerifier} from "../../libs/pcke/pcke.js";
import "/src/styles/layout.css"

export const LoginButton = () => {
    // code grant + pkce, redirect to sso authority server
    const onLoginClick = async () => {
        const redirectUrl = window.location.href;

        // generating code challenge and code verifier
        const codeVerifier = generateCodeVerifier();
        const codeChallenge = await generateCodeChallenge(codeVerifier);
        sessionStorage.setItem("code_verifier", codeVerifier);

        const authorizeUrl = new URL(`https://${import.meta.env.VITE_SSO_DOMAIN}/authorize`)
        authorizeUrl.searchParams.append('response_type', 'code')
        authorizeUrl.searchParams.append('client_id', import.meta.env.VITE_CLIENT_ID);
        authorizeUrl.searchParams.append('redirect_url', redirectUrl + '/' + import.meta.env.VITE_AUTHORIZE_CALLBACK);
        authorizeUrl.searchParams.append('scope', 'openid profile email');
        authorizeUrl.searchParams.append('state', import.meta.env.VITE_STATE_STRING_AUTHORIZE);
        authorizeUrl.searchParams.append('code_challenge', codeChallenge);
        authorizeUrl.searchParams.append('code_challenge_method', import.meta.env.VITE_HASH_METHOD);

        window.location.href = authorizeUrl.toString();
    }

    return <button className='header-btn' onClick={onLoginClick}>
        <img src='/assets/svg/User.svg' alt='user'/>
        Войти</button>
}
