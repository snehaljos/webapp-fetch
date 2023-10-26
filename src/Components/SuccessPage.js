
import { useDispatch } from "react-redux";
import { loggedOut } from "../Slice/loginSlice";
import photo from "../asset/profile.jpg"
import "./SuccessPage.css";

function Success(){
    const dispatch=useDispatch();
    const handleClick = (e) =>{


    }
    return(
        <div className="Profile">
       <div className="Main">
        <img   className="Img"  src={photo} alt="SJ"/>
        <div>Snehal Jose-SSE</div>
       </div>
       <div>

       </div>
        <button onClick={()=>dispatch(loggedOut())}>loggedOut</button>
        </div>
    );
}

export default Success;