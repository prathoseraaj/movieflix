import { useState } from "react"

const useFetch = <T>(fetchFunction:()=> Promise<T>, autofetch = true) =>{
    const [data, setData] = useState<T | null > (null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null> (null);

    const fetchData = async () => {
        
        try{

        }
        catch(err){
            setError(err instanceof Error ? err : new Error('An error occured'))
        }

    }
}