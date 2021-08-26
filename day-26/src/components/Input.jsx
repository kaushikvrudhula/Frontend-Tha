import {useDispatch } from "react-redux";
import {changeName , changeEmail} from "../actions/Actions";
const Input = () =>{
    const dispatch = useDispatch();
    return (
        <div className="form__group field">
        <div className="input-wrapper">
            <input name="name" type="text" className="form__field" id="name" placeholder="Enter name here" onChange={(e)=>{
                dispatch(changeName(e.target.value));
            }}></input>
            <input type="text" id="email" name="email" className="form__field" placeholder="Enter email here" onChange={(e)=>{
                dispatch(changeEmail(e.target.value));
            }}></input>
               
        </div>
        </div>
    );
};

export default Input;