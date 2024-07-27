import { useState, useMemo } from "react";

const UseMemoPage = () => {
    // Declaração dos estados `name` e `password`
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    // Memoriza o componente PasswordValidator para evitar re-renderizações desnecessárias
    const passwordValidator = useMemo(() => {
        return <PasswordValidator password={password} />;
    }, [password]); // O componente PasswordValidator só será recriado quando `password` mudar

    return (
        <>
            <h1>Aprenda o UseMemo</h1>
            {/* Input para o nome */}
            <input
                placeholder="Nome"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <br />
            {/* Input para a senha */}
            <input
                placeholder="Senha"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <br />
            {/* Renderiza o componente PasswordValidator memorizado */}
            {passwordValidator}
            {/* <PasswordValidator password={password}/> */}
        </>
    );
}

const PasswordValidator = ({ password }) => {
    console.log(password); // Exibe o valor da senha no console para depuração
    // Valida a senha e exibe mensagens de acordo com a validade
    if (!password.length) return <span>A senha deve ser preenchida</span>;
    if (password.length < 5) return <span>A senha deve conter mais que 5 caracteres</span>;
    return <span>Senha aprovada</span>;
}

export { UseMemoPage };
