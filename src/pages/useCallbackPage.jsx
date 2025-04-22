import { useState, useCallback } from "react";

const UseCallBackPage = () => {

    // Declara os estados `name` e `password`
    const [name, setName] = useState('');
    const [password, setPassword] = useState();

    // Memoriza a função `onChangeName` para evitar sua recriação desnecessária
    const onChangeName = useCallback((event) => {
        setName(event.target.value);
    }, []); // Dependências vazias significam que a função não será recriada

    return (
        <>
            <h2>Bem vindo ao UseCallBackPage!</h2>
            {/* Input para o nome */}
            <input
                placeholder="Nome"
                value={name}
                onChange={onChangeName} />
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

export { UseCallBackPage };
