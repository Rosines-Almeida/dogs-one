import React from 'react'

export const UseFetch = () => {
    const [data, setData ] = React.useState(null)
    const [error, setError ] = React.useState(null)
    const [loading, setLoading ] = React.useState(false)

    const request = React.useCallback(async(url, options) => {
            let response;
            let json;
            try{ 
                setError(null)
                setLoading(true)
                response = await fetch(url, options);
                console.log('respo', response)
                debugger
                json = await response.json();
                if(response.ok === false) throw new Error(`erro na requisição ${json.message}`)
            }catch(err){
                debugger
                json = null
                setError(err.message)
            }finally{
                setData(json)
                setLoading(false)
                return { response, json }

            }
        },
        [],
    )
    return ({
        data,
        loading,
        error,
        request
    }
       
    )
}

/*hook para fazer fetch com useCallback 
que ira setar 0retornar 
-erro
-loading
-data
-request
*/