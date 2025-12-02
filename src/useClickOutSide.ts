import { useEffect } from "react";

// useClickOutSide(ref, () => { console.log("Clicked outside!"); });
// Calls the callback when a click is detected outside the referenced element
// ref: React.RefObject<HTMLDivElement>
// callback: () => void
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
