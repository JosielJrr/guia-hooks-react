import { useState, useEffect } from "react";

// Componente funcional que recebe a propriedade `url`
const UseFetch = ({ url }) => {

    // Declara o estado `urlResult` com valor inicial como string vazia
    const [urlResult, setUrlResult] = useState('');

    useEffect(() => {
        // Faz uma requisição para a URL recebida
        fetch(url)
            .then((response) => response.json()) // Converte a resposta para JSON
            .then((data) => setUrlResult(data))  // Atualiza o estado com os dados recebidos
            .catch(console.error);              // Exibe o erro no console, se houver
    }, [url]); // Executa o efeito sempre que a `url` mudar

    // Retorna os dados obtidos pela requisição
    return urlResult;
}

export { UseFetch };
