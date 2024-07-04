export const checkValidData = (name,email,password)=>{

    const isnameValid = /^[A-Za-z]+$/.test(name);
    const isemailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const ispasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!isnameValid) return "Name should contian only alphabets"
    if(!isemailValid) return "Email id not valid";
    if(!ispasswordValid) return "Password not valid";

    return null;
};