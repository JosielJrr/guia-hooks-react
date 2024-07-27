import { useState } from "react";

const UseStatePage = () => {

    const [count, setCount] = useState(0);

    const incrementar = () => {
        setCount(prev => prev + 1);
    }

    const decrementar = () => {
        setCount(prev => prev - 1);
    }

    return (
        <>
            <h2>Bem vindo ao UseStatePage!</h2>
            <h3>{count}</h3>
            <button onClick={incrementar}>Adicionar +1</button> <br />
            <button onClick={decrementar}>Remover -1</button>
        </>
    )
}

export { UseStatePage };