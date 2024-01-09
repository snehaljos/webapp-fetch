import './Popup.css';
import { userObj } from '../Slice/loginSlice';
import { useSelector } from 'react-redux';
import axios from 'axios';
function Popup(props){
    const userVo=useSelector(userObj);
    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.put("http://localhost:4000/employees?name="+userVo.name,
        {
            name:event.target.value,
            email:"ss"
        }).then(
            response =>{
                console.log(response);
            }
        ).catch(error =>{
            console.log(error); 
        })
    }
    return (props.trigger) ?(
        <div className="outerPopup">
        <div className="innerPopup">
        <h1>ff</h1>
        <form onSubmit={handleSubmit}>
        <input type="text" defaultValue={userVo.name}  />
        <button type="Submit">Submit</button>
        </form>
        <button onClick={() =>props.setTrigger(false)}>close</button>
        </div>
        </div>
    ): "" ;

}

export default Popup;