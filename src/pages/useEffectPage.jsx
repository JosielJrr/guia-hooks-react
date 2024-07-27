import { useState, useEffect } from "react";

const UseEffectPage = () => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState();

    useEffect(() => {
        console.log(name)
    }, [name])

    return (
        <>
            <h2>Bem vindo ao UseEffectPage!</h2>
            <input
                placeholder="Nome"
                value={name}
                onChange={(event) => setName(event.target.value)} />
            <br />
            <input
                placeholder="Senha"
                value={password}
                onChange={(event) => setPassword(event.target.value)} />
        </>
    )
}

export { UseEffectPage };