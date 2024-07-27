import { useRef, useState } from "react";

const UseRefPage = () => {

    const [message, setMessage] = useState('');

    const inputRef = useRef();

    return (
        <>
            <h2>Bem vindo ao UseRefPage!</h2>
            <input
                ref={inputRef}
                placeholder="Envie sua mensagem..."
                value={message}
                onChange={(event) => setMessage(event.target.value)} />

            <button onClick={() => {
                // console.log(inputRef.current.value)
                inputRef.current.focus()
                setMessage('')
            }}>Enviar</button >
        </>
    )
}

export { UseRefPage };