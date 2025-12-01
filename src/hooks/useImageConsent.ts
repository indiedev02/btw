"use client";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const COOKIE_NAME = "blogImagesConsent";

export function useImageConsent() {
  const [consent, setConsent] = useState<string | undefined>(undefined);

  useEffect(() => {
    const val = Cookies.get(COOKIE_NAME);
    setConsent(val);
    // Listen for cookie changes
    const interval = setInterval(() => {
      const newVal = Cookies.get(COOKIE_NAME);
      if (newVal !== consent) {
        setConsent(newVal);
      }
    }, 500);
    return () => clearInterval(interval);
  }, [consent]);

  return consent === "true";
}
