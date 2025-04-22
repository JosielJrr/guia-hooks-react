import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

const Homepage = () => {

    // Acessa o valor do contexto usando useContext
    const user = useContext(UserContext);

    return (
        <>
            <h1>Olá, {user.userName}</h1> {/* Exibe o nome do usuário do contexto */}
            <Link to='/useState'>Vá para a UseStatePage</Link> <br />
            <Link to='/useEffect'>Vá para a UseEffectPage</Link> <br />
            <Link to='/useCallBack'>Vá para a UseCallBackPage</Link> <br />
            <Link to='/useMemo'>Vá para a UseMemoPage</Link> <br />
            <Link to='/useRef'>Vá para a UseRefPage</Link>
        </>
    );
}

export { Homepage };
