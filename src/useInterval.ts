import { useEffect } from "react";

// useInterval(() => { console.log("Hello"); }, 1000);
export default function useInterval(callback: () => void, delay: number | null): void {
    useEffect(() => {
        if (delay !== null) {
            const id = setInterval(callback, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}