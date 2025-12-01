'use client';
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const COOKIE_NAME = 'blogImagesConsent';

export default function CustomCookieBanner() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const val = Cookies.get(COOKIE_NAME);
        if (val !== 'true' && val !== 'false') setShow(true);
    }, []);

    if (!show) return null;

    const accept = () => {
        Cookies.set(COOKIE_NAME, 'true', { expires: 365 });
        setShow(false);
    };
    const decline = () => {
        Cookies.set(COOKIE_NAME, 'false', { expires: 365 });
        setShow(false);
    };

    return (
        <div className="fixed bottom-4 right-4 max-w-xs bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 z-50">
            <p className="text-gray-900 dark:text-gray-100 text-sm mb-3">
                We use cookies to enhance your experience on this site. Do you accept?
            </p>
            <div className="flex justify-end gap-2">
                <button
                    onClick={decline}
                    className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700"
                >
                    Decline
                </button>
                <button
                    onClick={accept}
                    className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700"
                >
                    Accept
                </button>
            </div>
        </div>
    );
}
