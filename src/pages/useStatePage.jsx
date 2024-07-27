import { useState } from "react";

const UseStatePage = () => {

    // Declaração do estado `count` com valor inicial 0
    const [count, setCount] = useState(0);

    // Função para incrementar o valor de `count`
    const incrementar = () => {
        // Atualiza o estado `count` incrementando o valor atual
        setCount(prev => prev + 1);
    }

    // Função para decrementar o valor de `count`
    const decrementar = () => {
        // Atualiza o estado `count` decrementando o valor atual
        setCount(prev => prev - 1);
    }

    return (
        <>
            <h2>Bem vindo ao UseStatePage!</h2>
            {/* Exibe o valor atual de `count` */}
            <h3>{count}</h3>
            {/* Botão para adicionar +1 ao valor de `count` */}
            <button onClick={incrementar}>Adicionar +1</button> <br />
            {/* Botão para remover -1 do valor de `count` */}
            <button onClick={decrementar}>Remover -1</button>
        </>
    );
}

export { UseStatePage };
