import { useEffect, useState } from "react";

// const isMobile = useDetectMobile();
// isMobile: boolean
// Returns true if the device is mobile (width <= 768px), false otherwise.
export default function useDetectMobile() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return isMobile;
}