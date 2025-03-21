import { useState } from "react"

const useFetch = <T>(fetchFunction:()=> Promise<T>, autofetch = true) =>{
    const [data, setData] = useState<T | null > (null);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<Error | null> (null);

    const fetchData = async () => {
        
        try{

        }
        catch(error){
            
        }

    }
}