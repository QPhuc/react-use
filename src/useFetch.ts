import { useEffect, useState } from "react";

// const { data, loading, error } = useFetch(url);
// data: T | null
// loading: boolean
// error: Error | null
export default function useFetch<T>(url: string) { 
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    
    useEffect(() => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            }).finally(() => {
                setLoading(false);
            });
    }, [url]);
    
    return { data, loading, error };
}