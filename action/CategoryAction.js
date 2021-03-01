import axiosInstance from "../Helper"
import {  CATEGORY_FETCH,FETCH_SUCCESS} from "./constant"

export const CategoryList = ()=>{
    return async dispatch=>{
        dispatch({type:CATEGORY_FETCH})
        const res = await axiosInstance.get('get/category')
        

        
        if(res.status === 200){

            const {categories} = res.data;

            console.log(categories)

            dispatch({
                type:FETCH_SUCCESS,
                payload:{
                    categories:categories
                }
            })
        }
        else{ 
            console.log('Something Error')
        }

    }
}

