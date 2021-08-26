const nameReducer = (state = "", action) =>
{
    if(action.type === "CHNG_NAME")
    {
        return action.text;
    }
    return state;
};

export default nameReducer;