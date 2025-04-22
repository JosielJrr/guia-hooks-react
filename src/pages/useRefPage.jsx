import { useRef, useState } from "react";

const UseRefPage = () => {

    // Declara os estados `name` e `password`
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
                onChange={(event) => setMessage(event.target.value)} // Atualiza o estado `message` com o valor digitado no input
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


// import { useRef } from "react";

// const UseRefPage = () => {

//     // Cria uma referência que mantém seu valor entre renderizações
//     const contagemRef = useRef(0);

//     const Incrementar = () => {
//         // Atualiza o valor armazenado na referência
//         contagemRef.current += 1;

//         // Mostra o valor atual no console (mas não atualiza a interface)
//         console.log(`Contagem atual: ${contagemRef.current}`);
//     };

//     return (
//         <div>
//             <button onClick={Incrementar}>Incrementar</button>
//             <p>Verifique o console para ver o valor atualizado.</p>
//         </div>
//     );
// }

// export { UseRefPage };
