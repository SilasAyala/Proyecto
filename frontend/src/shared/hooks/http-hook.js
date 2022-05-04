import {useState,
        useCallback,
        useRef,
        useEffect } from "react"

export const useHttpClient = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const activeHttpRequest = useRef([]); //almacenamos constante para sobrevivir rederzaciones

    //metodo para generar solicitud al backend
    const sendRequest = 
        useCallback(async (url, method = 'GET', body=null, headers={}) => {
            setIsLoading(true);

            const httpAbortCtrl = new AbortController();
            activeHttpRequest.current.push(httpAbortCtrl);
            
            try{
                const response = 
                    await fetch(url, 
                        {method, body, headers, signal: httpAbortCtrl.signal});
                const responseData = await response.json();
                
                //detenemos la solicitud en funcion del signal.
                activeHttpRequest.current = activeHttpRequest.current.filter(
                    reqCtrl => reqCtrl !== httpAbortCtrl
                );

                if(!response.ok){
                    throw new Error(responseData.message);
                }
                setIsLoading(false);
                return responseData;
            }catch(err){
                setIsLoading(false);
                setError(err.message);
                throw err;
            }
        }, [])

    const cleanError = () => {
        setError(null);
    }

    //procesamos solicitud de abortar de parte del usuario.
    useEffect(() => {
        return () => {
            activeHttpRequest.current.forEach(abortReq => abortReq.abort());
        }
    }, [])

    return{isLoading, error, sendRequest, cleanError}
}