import { useCallback, useEffect, useRef } from "react";

// const isMounted = useMountedState();
// if (isMounted()) { ... }
export default function useMountedState(): () => boolean {
    const mountedRef = useRef<boolean>(false);
    const get = useCallback(() => mountedRef.current, []);

    useEffect(() => {
        mountedRef.current = true;

        return () => {
            mountedRef.current = false;
        };
    }, []);

    return get;
}
