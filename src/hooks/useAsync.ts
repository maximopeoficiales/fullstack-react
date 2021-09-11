import { useEffect, useState } from "react";

export const useAsync = <T>(fn: any, deps: any[]) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | undefined>();
    const [res, setRes] = useState<T | undefined>();
    useEffect(() => {
        setLoading(true);
        // let cancel = false;
        fn().then((res: any) => {
            console.log(res);

            setLoading(false);
            setRes(res)
        }, (error: any) => {
            setLoading(false);
            setError(error);
        })
        // return () => {
        //     cancel = true;
        // }
    }, deps)
    return { loading, error, res };
}