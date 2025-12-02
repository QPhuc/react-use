import { useEffect, type DependencyList } from "react";
import useAsyncFn from "./useAsyncFn";
import type { FunctionReturningPromise } from "./misc/types";

// const state = useAsync(asyncFunction, deps);
// state: { loading, error, value }
// loading: boolean
// error: Error | undefined
// value: T | undefined
export default function useAsync<T extends FunctionReturningPromise>(
    fn: T,
    deps: DependencyList = []
) {
    const [state, callback] = useAsyncFn(fn, deps, {
        loading: true,
    });

    useEffect(() => {
        callback();
    }, [callback]);

    return state;
}