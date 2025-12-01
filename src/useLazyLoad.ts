import { lazy } from "react";

// const Component = useLazyLoad("./MyComponent", "MyComponent");
export default function useLazyLoad(path: string, nameExport: string) {
    return lazy(() => {
        const promise = import(path);
        if (nameExport === null) {
            return promise;
        } else {
            return promise.then((module) => ({
                default: module[nameExport],
            }));
        }
    });
}
