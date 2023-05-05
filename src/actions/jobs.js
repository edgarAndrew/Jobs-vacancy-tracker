import { v4 as uuidv4 } from 'uuid';

export const addVacancy = (role,company,salary,joining,desc,vacancies)=>async(dispatch)=>{
    dispatch({
        type:"AddVacancyRequest"
    })
    const temp = {
        'id':uuidv4(),
        role,
        company,
        salary,
        joining,
        desc
    }
    let arr = [...vacancies]
    console.log(arr)
    arr.push(temp)
        
    dispatch({
        type:"AddVacancySuccess",
        payload1:arr,
        payload2:'Job Added'
    }) 
}
export const editVacancy = (id,role,company,salary,joining,desc,vacancies)=>async(dispatch)=>{
    dispatch({
        type:"EditVacancyRequest"
    })
    const temp = {
        id,
        role,
        company,
        salary,
        joining,
        desc
    }

    let arr = [...vacancies]
    let key = null

    vacancies.map((ele,index)=>{
        if(ele.id == id)
            key = index
    })
    arr[key] = temp
    console.log(arr)
        
    dispatch({
        type:"EditVacancySuccess",
        payload1:arr,
        payload2:'Job Edit'
    }) 
}
export const removeVacancy = (id,vacancies)=>async(dispatch)=>{
    dispatch({
        type:"DeleteVacancyRequest"
    })

    let arr = [...vacancies]
    let key = null

    vacancies.map((ele,index)=>{
        if(ele.id == id)
            key = index
    })
    arr.splice(key,1)
    console.log(arr)
        
    dispatch({
        type:"DeleteVacancySuccess",
        payload1:arr,
        payload2:'Job Removed'
    }) 
}
export const getVacancy = (id,vacancies)=>async(dispatch)=>{
    dispatch({
        type:"SingleVacancyRequest"
    })
    let vacancy = null
    let arr = [...vacancies]
    arr.forEach((ele)=>{
        if(ele.id == id)
            vacancy = ele
    })
        
    dispatch({
        type:"SingleVacancySuccess",
        payload:vacancy
    }) 
}