import { Button } from "bootstrap";
import { useDispatch } from "react-redux";
import { loggedOut } from "../Slice/loginSlice";

function Success(){
    const dispatch=useDispatch();
    const handleClick = (e) =>{


    }
    return(
        <>
        <h1>Welcome</h1>
        <button onClick={()=>dispatch(loggedOut())}>loggedOut</button>
        </>
    );
}

export default Success;