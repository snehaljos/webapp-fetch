
import { useDispatch, useSelector } from "react-redux";
import { loggedOut, userObj } from "../Slice/loginSlice";
import photo from "../asset/profile.jpg"
import "./SuccessPage.css";
import { useNavigate } from "react-router-dom";

function Success(){
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const userVo=useSelector(userObj);
    const handleClick = (e) =>{
        e.preventDefault();
        dispatch(loggedOut());
        navigate("/Login");
    }
    return(
        <div className="Profile">
       <div className="Main">
        <img   className="Img"  src={photo} alt="SJ"/>
        <div>Username-role</div>
       </div>
       
    <div className="Details">
        <div className="Section1">
            {userVo.email}
        </div>
        <div className="Section2">
            Section2
        </div>

    </div>
       
        <button onClick={handleClick}>loggedOut</button>
        </div>
    );
}

export default Success;