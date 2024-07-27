import { useState, useEffect } from "react";

const UseEffectPage = () => {

    // Declaração dos estados `name` e `password`
    const [name, setName] = useState(''); // Estado para armazenar o valor do nome
    const [password, setPassword] = useState(); // Estado para armazenar o valor da senha

    // Hook useEffect que será executado após a renderização do componente
    useEffect(() => {
        // Esta função será chamada sempre que o valor do `name` mudar
        console.log(name); // Exibe o valor atual do `name` no console
    }, [name]); // O hook depende do `name`, então será chamado sempre que `name` mudar

    return (
        <>
            <h2>Bem vindo ao UseEffectPage!</h2>
            {/* Input para o nome */}
            <input
                placeholder="Nome"
                value={name}
                onChange={(event) => setName(event.target.value)} />
            <br />
            {/* Input para a senha */}
            <input
                placeholder="Senha"
                value={password}
                onChange={(event) => setPassword(event.target.value)} />
        </>
    );
}

export { UseEffectPage };
