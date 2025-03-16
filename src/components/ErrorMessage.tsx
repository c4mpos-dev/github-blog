import { useEffect, useState } from "react";
import { useUser } from "../hooks/useUser";

export function ErrorMessage() {
    const { error } = useUser();
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        if (error) {
            setFadeOut(false);
            const fadeTimer = setTimeout(() => setFadeOut(true), 2500);
            const removeTimer = setTimeout(() => setFadeOut(false), 3000);

            return () => {
                clearTimeout(fadeTimer);
                clearTimeout(removeTimer);
            };
        }
    }, [error]);

    return error ? (
        <div
            className={`absolute top-20 w-[27rem] px-4 py-2.5 text-base-title rounded-xl bg-red-500 shadow-lg shadow-black transition-opacity duration-500 ${
                fadeOut ? "opacity-0" : "opacity-100"
            }`}
        >
            <h1>{error}</h1>
        </div>
    ) : null;
}