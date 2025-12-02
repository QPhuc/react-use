import { useCallback, useState } from 'react';

// const [state, setState] = useSetState({ count: 0, text: '' });
// setState({ count: 1 });
// setState(prevState => ({ count: prevState.count + 1 }));
// setState({ text: 'hello' });
const useSetState = <T extends object>(
    initialState: T = {} as T
): [T, (patch: Partial<T> | ((prevState: T) => Partial<T>)) => void] => {
    const [state, set] = useState<T>(initialState);
    const setState = useCallback((patch: Partial<T> | ((prevState: T) => Partial<T>)) => {
        set((prevState) =>
            Object.assign({}, prevState, patch instanceof Function ? patch(prevState) : patch)
        );
    }, []);

    return [state, setState];
};

export default useSetState;