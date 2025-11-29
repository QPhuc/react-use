import { useEffect, type DependencyList } from "react";
import useAsyncFn from "./useAsyncFn";
import type { FunctionReturningPromise } from "./misc/types";


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
