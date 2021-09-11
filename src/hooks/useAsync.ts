import { useEffect, useState } from "react";

export const useAsync = <T>(funtion: any) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>();
    const [res, setRes] = useState<T>();
    const [refresh, setRefresh] = useState(false);

    const refreshData = () => {
        setRefresh(!refresh);
        setLoading(true);
    };
    useEffect(() => {
        (async () => {
            try {
                let data = await funtion();
                setLoading(false);
                setRes(data);
            } catch (error: any) {
                setError("Error en el Servidor 500");
            }
        })();
    }, [refresh]);
    return { loading, res, error, refreshData }
}