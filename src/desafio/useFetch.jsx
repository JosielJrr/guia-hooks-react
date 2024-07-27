import { useState, useEffect } from "react";

// Define um componente funcional chamado UseFetch que recebe uma propriedade `url`.
const UseFetch = ({ url }) => {
    // Declara um estado chamado `urlResult` e uma função para atualizá-lo, `setUrlResult`.
    // O estado inicial é uma string vazia.
    const [urlResult, setUrlResult] = useState('');

    // O hook useEffect é utilizado para realizar efeitos colaterais em componentes funcionais.
    useEffect(() => {
        // Realiza uma requisição para a URL fornecida.
        fetch(url)
            .then((response) => response.json()) // Converte a resposta para JSON.
            .then((data) => setUrlResult(data))  // Atualiza o estado `urlResult` com os dados recebidos.
            .catch(console.error); // Captura e loga qualquer erro ocorrido durante o fetch.
    }, [url]); // O array de dependências contém `url`. O efeito é executado sempre que `url` muda.

    // O componente retorna o estado `urlResult`, que contém os dados obtidos pela requisição.
    return urlResult;
}

export { UseFetch };
