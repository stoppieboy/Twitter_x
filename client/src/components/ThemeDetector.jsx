import { useState, useEffect } from "react";

const logo = {
    dark: "/images/big_icon_outline_light.svg",
    light: "/images/big_icon_outline_dark.svg"
}

const useThemeDetector = () => {
    const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [dark, setDark] = useState(getCurrentTheme())

    const mqListener = (e => {
        setDark(e.matches);
    });

    useEffect(() => {
        const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
        darkThemeMq.addEventListener("change",mqListener);
        return () => darkThemeMq.removeEventListener("change",mqListener);
    }, [])
    return dark
}

export {useThemeDetector, logo};