import * as api from '../api/index.js';


export const signin = (formData, history) => async (dispatch) => {
    try {
      const { data } = await api.signIn(formData);
  
      dispatch({ type: 'AUTH', data });
  
      history('/')
    } catch (error) {
      alert("Login failed,Password and Email does not match")
      console.log(error);
    }
  };
  
  export const signup = (formData, history) => async (dispatch) => {
    try {
      const { data } = await api.signUp(formData);
      console.log("error is here"+data);
      dispatch({ type: 'AUTH', data });
  
      history('/')
    } catch (error) {
      console.log(error);
    } 
  };


