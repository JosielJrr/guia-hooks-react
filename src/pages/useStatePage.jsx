import { useState } from "react";

const UseStatePage = () => {

    // Declara o estado `count` com valor inicial 0
    const [count, setCount] = useState(0);

    const incrementar = () => {
        // Atualiza o estado `count` incrementando +1 do valor atual
        setCount(prev => prev + 1);
    }

    const decrementar = () => {
        // Atualiza o estado `count` decrementando -1 do valor atual
        setCount(prev => prev - 1);
    }

    return (
        <>
            <h2>Aprenda o useState</h2>
            {/* Exibe o valor atual de `count` */}
            <h3>{count}</h3>
            <button onClick={incrementar}>Adicionar +1</button> <br />
            <button onClick={decrementar}>Remover -1</button>
        </>
    );
}

export { UseStatePage };
