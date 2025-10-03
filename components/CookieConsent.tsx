"use client";

import { useEffect } from "react";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import * as CookieConsent from "vanilla-cookieconsent";

export default function CookieConsentBanner() {
    useEffect(() => {
        CookieConsent.run({
            cookie: {
                name: "_" + window.location.hostname,
            },

            guiOptions: {
                consentModal: {
                    layout: "cloud",
                    position: "bottom center",
                    equalWeightButtons: false,
                    flipButtons: false,
                },
                preferencesModal: {
                    layout: "box",
                    position: "left",
                    equalWeightButtons: false,
                    flipButtons: true,
                },
            },
            categories: {
                necessary: {
                    enabled: true,
                    readOnly: true,
                },
                analytics: {
                    autoClear: {
                        cookies: [
                            {
                                name: /^(_ga|_gid)/,
                            },
                        ],
                    },
                    services: {
                        ga: {
                            label: `
                    <a
                        href="https://analytics.google.com"
                        rel="noreferrer"
                        target="_blank">
                        Google Analytics 4
                    </a>
                `,
                        },
                    },
                },
                ads: {
                    services: {
                        ga: {
                            label: `
                    <a
                        href="https://ads.google.com"
                        rel="noreferrer"
                        target="_blank">
                        Google AdSense
                    </a>
                `,
                        },
                        fb: {
                            label: `
                    <a
                        href="https://www.facebook.com/business/tools/meta-pixel"
                        rel="noreferrer"
                        target="_blank">
                        Facebook Pixel
                    </a>
                `,
                        },
                        tiktok: {
                            label: `
                    <a
                        href="https://ads.tiktok.com"
                        rel="noreferrer"
                        target="_blank">
                        TikTok Pixel
                    </a>
                `,
                        },
                        sklik: {
                            label: `
                    <a
                        href="https://sklik.cz"
                        rel="noreferrer"
                        target="_blank">
                        Sklik
                    </a>
                `,
                        },
                    },
                },
            },

            language: {
                default: "en",
                autoDetect: "browser",
                translations: {
                    en: {
                        consentModal: {
                            title: "🍪 Cookie!",
                            description:
                                "Our website uses tracking cookies to understand how you interact with it. The tracking will be enabled only if you accept explicitly.",
                            acceptAllBtn: "Accept all",
                            //acceptNecessaryBtn: 'Reject all',
                            showPreferencesBtn: "Manage preferences",
                            closeIconLabel: "Close",
                            /*footer: `
                        <a href="#link">Privacy Policy</a>
                    `*/
                        },
                        preferencesModal: {
                            title:
                                "Cookie preferences <small>" +
                                window.location.hostname +
                                "</small>",
                            acceptAllBtn: "Accept all",
                            acceptNecessaryBtn: "Reject all",
                            savePreferencesBtn: "Save preferences",
                            closeIconLabel: "Close",
                            sections: [
                                {
                                    description:
                                        'I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="' +
                                        window.location.origin +
                                        '/ochrana-osobnich-udaju" class="cc__link">privacy policy</a>.',
                                },
                                {
                                    title: 'Strictly necessary cookies <span class="pm__badge">Always enabled</span>',
                                    description:
                                        "These cookies are necessary for the proper functioning of the website and are also the only ones allowed.",
                                    linkedCategory: "necessary",
                                    cookieTable: {
                                        headers: {
                                            name: "Name",
                                            domain: "Service",
                                            description: "Description",
                                            expiration: "Expiration",
                                        },
                                        body: [
                                            {
                                                name:
                                                    "_" +
                                                    window.location.hostname,
                                                domain: "Cookie Consent",
                                                description:
                                                    "Stores information about the consent given for cookie categories",
                                                expiration: "182 dní",
                                            },
                                        ],
                                    },
                                },
                                {
                                    title: 'Performance and Analytics cookies <span class="pm__badge">2 Services</span>',
                                    description:
                                        "These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you.",
                                    linkedCategory: "analytics",
                                    cookieTable: {
                                        headers: {
                                            name: "Name",
                                            domain: "Service",
                                            description: "Description",
                                            expiration: "Expiration",
                                        },
                                        body: [
                                            {
                                                name: "_ga",
                                                domain: "Google Analytics",
                                                description:
                                                    'Cookie set by <a href="https://analytics.google.com">Google Analytics</a>.',
                                                expiration:
                                                    "Expires after 12 days",
                                            },
                                            {
                                                name: "_gid",
                                                domain: "Google Analytics",
                                                description:
                                                    'Cookie set by <a href="https://analytics.google.com">Google Analytics</a>',
                                                expiration: "Session",
                                            },
                                        ],
                                    },
                                },

                                {
                                    title: 'Advertisement and Targeting cookies <span class="pm__badge">4 Services</span>',
                                    description:
                                        "Targeting and advertising cookies are specifically designed to gather information from you on your device to display advertisements to you based on relevant topics that interest you.",
                                    linkedCategory: "ads",
                                    cookieTable: {
                                        headers: {
                                            name: "Name",
                                            domain: "Service",
                                            description: "Description",
                                            expiration: "Expiration",
                                        },
                                        body: [
                                            {
                                                name: "__gsas",
                                                domain: "Google AdSense",
                                                description:
                                                    'Cookie set by <a href="https://analytics.google.com">Google AdSense</a>',
                                                expiration: "3 months",
                                            },
                                            {
                                                name: "_fbp",
                                                domain: "Facebook Pixel",
                                                description:
                                                    'Cookie set by <a href="https://www.facebook.com/business/tools/meta-pixel">Facebook Pixel</a>',
                                                expiration: "3 months",
                                            },
                                            {
                                                name: "_ttp",
                                                domain: "TikTok Pixel",
                                                description:
                                                    'Cookie set by <a href="https://ads.tiktok.com/">TikTok Pixel</a>',
                                                expiration: "13 months",
                                            },
                                            {
                                                name: "_sid",
                                                domain: "Sklik",
                                                description:
                                                    'Cookie set by <a href="https://www.sklik.cz/">Sklik</a>',
                                                expiration: "1 month",
                                            },
                                        ],
                                    },
                                },
                                {
                                    title: "Consent details",
                                    description: `
                                <p><strong>Consent ID:</strong> <span id="consent-id">-</span></p>
                                <p><strong>Consent date:</strong> <span id="consent-timestamp">-</span></p>
                                <p><strong>Last update:</strong> <span id="last-consent-timestamp">-</span></p>
                            `,
                                },
                                {
                                    title: "More information",
                                    description:
                                        "For any queries in relation to my policy on cookies and your choices, please write an email to the address indicated in the privacy policy.",
                                },
                            ],
                        },
                    },
                },
            },
        });

        const updateConsentDetails = (modal: HTMLElement) => {
            const { consentId, consentTimestamp, lastConsentTimestamp } =
                CookieConsent.getCookie();

            const id = modal.querySelector("#consent-id") as HTMLElement | null;
            const timestamp = modal.querySelector(
                "#consent-timestamp",
            ) as HTMLElement | null;
            const lastTimestamp = modal.querySelector(
                "#last-consent-timestamp",
            ) as HTMLElement | null;

            if (id) id.innerText = consentId;
            if (timestamp)
                timestamp.innerText = new Date(
                    consentTimestamp,
                ).toLocaleString();
            if (lastTimestamp)
                lastTimestamp.innerText = new Date(
                    lastConsentTimestamp,
                ).toLocaleString();
        };

        const handleModalReady = (
            event: CustomEvent<{ modalName: string; modal: HTMLElement }>,
        ) => {
            const { modalName, modal } = event.detail;

            if (modalName !== "preferencesModal") return;

            if (CookieConsent.validConsent()) {
                updateConsentDetails(modal);
                window.addEventListener("cc:onChange", () =>
                    updateConsentDetails(modal),
                );
            } else {
                window.addEventListener("cc:onConsent", () =>
                    updateConsentDetails(modal),
                );
            }
        };

        window.addEventListener(
            "cc:onModalReady",
            handleModalReady as EventListener,
        );

        return () => {
            window.removeEventListener(
                "cc:onModalReady",
                handleModalReady as EventListener,
            );
        };
    }, []);

    return null;
}
