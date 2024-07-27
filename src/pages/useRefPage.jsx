import { useRef, useState } from "react";

const UseRefPage = () => {

    // Declaração do estado `message`
    const [message, setMessage] = useState('');

    // Cria uma referência para o elemento input
    const inputRef = useRef();

    return (
        <>
            <h2>Bem vindo ao UseRefPage!</h2>
            <input
                ref={inputRef} // Atribui a referência ao input
                placeholder="Envie sua mensagem..."
                value={message} // O valor do input é controlado pelo estado `message`
                onChange={(event) => setMessage(event.target.value)} // Atualiza o estado `message` quando o input muda
            />

            <button onClick={() => {
                // Foca o input quando o botão é clicado
                inputRef.current.focus();
                // Limpa o valor do estado `message` (e portanto o valor do input)
                setMessage('');
            }}>Enviar</button>
        </>
    );
}

export { UseRefPage };
