import './Popup.css';
function Popup(props){

    return (props.trigger) ?(
        <div className="outerPopup">
        <div className="innerPopup">
        <h1>ff</h1>
        <button onClick={() =>props.setTrigger(false)}>close</button>
        </div>
        </div>
    ): "" ;

}

export default Popup;