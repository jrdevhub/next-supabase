export const setCookie = (
    name: string,
    value: string,
    days: number,
    domain?: string,
) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    const encodedValue = encodeURIComponent(value);
    const isSecure = window.location.protocol === "https:";

    let cookieString = `${name}=${encodedValue};expires=${expires.toUTCString()};path=/;SameSite=Lax`;

    if (isSecure) {
        cookieString += `;Secure`;
    }

    if (domain) {
        cookieString += `;domain=${domain}`;
    }

    document.cookie = cookieString;
};

export const getCookie = (name: string): string | undefined => {
    const cookieNamePrefix = `${name}=`;
    const allCookies = document.cookie.split(";");
    for (let i = 0; i < allCookies.length; i++) {
        const cookie = allCookies[i].trim();
        if (cookie.indexOf(cookieNamePrefix) === 0) {
            return decodeURIComponent(
                cookie.substring(cookieNamePrefix.length),
            );
        }
    }
    return undefined;
};
