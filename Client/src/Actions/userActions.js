import axios from "axios";

export const RegisterUser =(user)=> async dispatch =>{

dispatch({type:'USER_REGISTER_REQUEST'})

try{

    const res= await axios.post('/api/users/register',user)
    dispatch({type:'USER_REGISTER_SUCCESS'})
}
catch(error){

    dispatch({type:'USER_REGISTER_FAIL',payload:error})

}



}