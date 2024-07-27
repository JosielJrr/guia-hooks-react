import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

const Homepage = () => {

    const user = useContext(UserContext);

    return (
        <>
            <h1>Olá, {user.userName}</h1>
            <Link to='/useState'>Vá para a UseStatePage</Link> <br />
            <Link to='/useEffect'>Vá para a UseEffectPage</Link> <br />
            <Link to='/useCallBack'>Vá para a UseCallBackPage</Link> <br />
            <Link to='/useMemo'>Vá para a UseMemoPage</Link> <br />
            <Link to='/useRef'>Vá para a UseRefPage</Link>
        </>
    )
}

export { Homepage };