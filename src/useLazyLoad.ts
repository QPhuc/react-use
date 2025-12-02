import { lazy } from "react";

// const Component = useLazyLoad("./MyComponent", "MyComponent");
// Component: React.LazyExoticComponent<React.ComponentType<any>>
// Dynamically imports a component from the specified path.
// If nameExport is provided, it imports that specific export from the module.
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
