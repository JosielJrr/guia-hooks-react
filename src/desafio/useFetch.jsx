import { useState, useEffect } from "react";


const UseFetch = ({ url }) => {
    const [urlResult, setUrlResult] = useState('');

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setUrlResult(data))
            .catch(console.error);
    }, [url])
    return urlResult;
}

export { UseFetch };