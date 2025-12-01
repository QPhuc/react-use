import { useEffect } from "react";

export default function useClickOutSide(ref: React.RefObject<HTMLDivElement>, callback: () => void) {
    useEffect(() => {
        function handleClickOutSide(this: Document, ev: MouseEvent) {
            if (!ref.current || ref.current.contains(ev.target as Node)) return;
            callback();
        }
        document.addEventListener("click", handleClickOutSide);
        return () => {
            document.removeEventListener("click", handleClickOutSide);
        };
    }, []);

    return { ref };
}
