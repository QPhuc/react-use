import { useState } from "react";

// const { state, toggle } = useToggle(initialState);
// state: boolean
// toggle: () => void
export default function useToggle(initialState: boolean = false) {
    const [state, setState] = useState(initialState);
    const toggle = () => {
        setState((state) => !state);
    };

    return { state, toggle};
}