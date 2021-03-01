import { cartConstants, LOGIN_REQUEST,LOGIN_SUCCESS,SIGN_OUT_REQUEST,SIGN_OUT_SUCCESS } from "./constant"
import axios from '../Helper/index'


export const login =  (user)=>{
    return async (dispatch)=>{
        dispatch({
            type:LOGIN_REQUEST,
        })
        const res = await axios.post('/Login',{
            ...user
        })
        if(res.status === 200){
            
            const {token,user} = res.data;
            console.log(user)
            localStorage.setItem('token',token);
            localStorage.setItem('user',JSON.stringify(user))
            dispatch({
                type:LOGIN_SUCCESS,
                payload:{
                    token,user
                }
            })
        }
        
        }
    

        
    }



export const isLoggedIn = ()=>{
    return async dispatch=>{
        const token = localStorage.getItem('token')
        if(token){
            const user = JSON.parse(localStorage.getItem('user'))
            dispatch({
                type:LOGIN_SUCCESS,
                payload:{
                    token,user
                }
            })
        }
        
    }
}

export const signOut = ()=>{
    return async dispatch=>{

        dispatch({type:SIGN_OUT_REQUEST});

        localStorage.removeItem('token')
        localStorage.removeItem('user')
        dispatch({type:SIGN_OUT_SUCCESS});
        dispatch({type:cartConstants.RESET_CART})

        // dispatch({type:SIGN_OUT_REQUEST})
        // const res = await axios.post('/signOut')

        // if(res.status === 200){
        //     localStorage.clear();
        //     dispatch({
        //         type:SIGN_OUT_SUCCESS,
        //         payload:{
        //             message:res.data.message
        //         }
        //     })
        // }
        // else{
        //     dispatch({
        //         type:SIGN_OUT_ERROR,
        //         payload:{
        //             error:res.data.error
        //         }
        //     })
        // }

    }
}