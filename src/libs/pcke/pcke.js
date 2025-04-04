
// generating a code_challenge and code_verifier
export const generateCodeVerifier = () => {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array)
        .map(b => b.toString(16).padStart(2, '0'))
        .join('')
        .slice(0, 64);
};

export const generateCodeChallenge = async (verifier) => {
    // coding in utf-8
    const encoder = new TextEncoder();
    const data = encoder.encode(verifier);
    // hash sha-256
    const digest = await crypto.subtle.digest('SHA-256', data);

    //convert base64 and url-safe
    const base64 = btoa(String.fromCharCode(...new Uint8Array(digest)));
    return base64
        .replace(/\+/g, '-')
        .replace(/\//g, '-')
        .replace(/=+$/, '')
}
