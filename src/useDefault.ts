import { useState } from "react";

// const [value, setValue] = useDefault(defaultValue, initialValue);
// value: T
// setValue: (newValue: T | undefined | null) => void
const useDefault = <T>(defaultValue: T, initialValue: T | (() => T)) => {
    const [value, setValue] = useState<T | undefined | null>(initialValue);

    if (value === undefined || value === null) {
        return [defaultValue, setValue] as const;
    }

    return [value, setValue] as const;
};

export default useDefault;