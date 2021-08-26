const emailReducer = (state ="",action)=>{
    if(action.type === "CHNG_EMAIL")
    {
        return action.text;
    }
    return state;
};

export default emailReducer;