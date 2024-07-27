import { createContext } from "react";

// Cria um contexto com um valor padrão (um objeto vazio)
export const UserContext = createContext({});

// Cria um provedor de contexto que irá envolver os componentes que precisam acessar o contexto
const UserContextProvider = ({ children }) => {
    // O valor fornecido ao contexto é um objeto com a propriedade userName
    return (
        <UserContext.Provider value={{ userName: 'Josiel' }}>
            {children} {/* Renderiza os componentes filhos que terão acesso ao contexto */}
        </UserContext.Provider>
    );
}

export { UserContextProvider };
