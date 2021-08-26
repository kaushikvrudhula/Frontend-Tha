const changeName = (nametext) => {
    return {
        type: "CHNG_NAME",
        text: nametext,
    };
};

const changeEmail = (emailtext) =>
{
    return {
        type:"CHNG_EMAIL",
        text: emailtext,
    };
};

export {changeName ,changeEmail};