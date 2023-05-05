import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getVacancy,editVacancy } from '../../actions/jobs'
import { useAlert } from 'react-alert'

const EditVacancy = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const alert = useAlert()
  const navigate = useNavigate()
  const {vacancies,vacancy,loading,message} = useSelector((state)=>state.jobs)

  useEffect(()=>{
    if(message){
      alert.success(message)
      dispatch({ type: "clearMessage" })
    }
  },[dispatch,message])
  
  useEffect(()=>{
    while(loading);
    dispatch(getVacancy(id,vacancies))
  },[])

  const handleSubmit = (e) =>{
    e.preventDefault()
    const data = new FormData(e.target)
    const title = data.get('title')
    const company = data.get('company')
    const salary = data.get('salary')
    const date = data.get('date')
    const desc = data.get('desc')

    dispatch(editVacancy(id,title,company,salary,date,desc,vacancies))
  }
  
  if(!vacancy)
    return <div>Loading</div>
  else
    return (
    <div>
        <div className='header'>
            <button onClick={()=>navigate('/')}>back</button>
        </div>
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Edit Job</h2>

                <label htmlFor="title">Job Title</label>
                <input id='title' type="text" defaultValue={vacancy.role} name='title' required/>
                
                <label htmlFor="company">Company Name</label>
                <input id='company' type="text" name='company' defaultValue={vacancy.company} required/>
                
                <label htmlFor="salary">Salary</label>
                <input id='salary' type="text" name='salary' defaultValue={vacancy.salary} required/>

                <label htmlFor="date">Joining Date</label>
                <input id='date' type="date" name='date' defaultValue={vacancy.joining} required/>
                
                <label htmlFor="desc">Description</label>
                <input id='desc' type="text" name='desc' defaultValue={vacancy.desc} required/>

                <button type='submit'>Submit</button>

            </form>
        </div>
    </div>
  )
}

export default EditVacancy