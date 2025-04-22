import { useState, useEffect } from "react";

const UseEffectPage = () => {

    // Declara os estados `name` e `password`
    const [name, setName] = useState("");
    const [password, setPassword] = useState();

    // Executado após a primeira renderização ou quando `name` mudar
    useEffect(() => {
        console.log(name); // Exibe o valor atual do `name` no console
    }, [name]); // Reexecuta sempre que `name` for alterado

    return (
        <>
            <h2>Aprenda o useEffect</h2>
            {/* Input para o nome */}
            <input
                placeholder="Nome"
                value={name}
                // Atualiza o estado `name` com o valor digitado no input
                onChange={(event) => setName(event.target.value)} />
            <br />
            {/* Input para a senha */}
            <input
                placeholder="Senha"
                value={password}
                // Atualiza o estado `password` com o valor digitado no input
                onChange={(event) => setPassword(event.target.value)} />
        </>
    );
}

export { UseEffectPage };
