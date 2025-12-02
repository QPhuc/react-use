import { useEffect, useRef } from "react";

// const previousValue = usePrevious(currentValue);
// previousValue: T | undefined
// Returns the value from the previous render
// or undefined if there is no previous value.
export default function usePrevious<T>(value: T): T | undefined {
    const ref = useRef<T | undefined>(undefined);
    useEffect(() => {
        ref.current = value;
    }, [value]);
    
    return ref.current;
}