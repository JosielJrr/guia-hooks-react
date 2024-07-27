import { useState, useCallback } from "react";

const UseCallBackPage = () => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState();

    // A função não será recarregada com as mudanças de estado.
    const onChangeName = useCallback((event) => {
        setName(event.target.value)
    }, [])

    return (
        <>
            <h2>Bem vindo ao UseCallBackPage!</h2>
            <input
                placeholder="Nome"
                value={name}
                onChange={onChangeName} />
            <br />
            <input
                placeholder="Senha"
                value={password}
                onChange={(event) => setPassword(event.target.value)} />
        </>
    )
}

export { UseCallBackPage };