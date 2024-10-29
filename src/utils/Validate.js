export const checkValidateData = (email, password, name) => {
    
    
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email) ;
    
    
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(password) ;



    

    if(!isEmailValid) return "Email is not valid." ;
    if(!isPasswordValid) return "Password is not valid. password must contain a capital letter , a number, a special character and atleast contain 8 character";
    

    return null;
}