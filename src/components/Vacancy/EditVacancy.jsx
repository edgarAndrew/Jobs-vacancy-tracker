import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getVacancy,editVacancy } from '../../actions/jobs'
import { useAlert } from 'react-alert'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Vacancy.css'

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
              <FontAwesomeIcon id='back' icon={faArrowLeft} onClick={()=>navigate('/')}/>
        </div>
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <h2>Edit Job</h2>

                <div className='entry'>
                  <label htmlFor="title">Job Title</label>
                  <input id='title' type="text" defaultValue={vacancy.role} name='title' required/>
                </div>
                
                <div className='entry'>
                  <label htmlFor="company">Company Name</label>
                  <input id='company' type="text" name='company' defaultValue={vacancy.company} required/>
                </div>
                
                <div className='temp'>
                  <div className='entry'>
                    <label htmlFor="salary">Salary</label>
                    <input id='salary' type="text" name='salary' defaultValue={vacancy.salary} required/>
                  </div>
                  
                  <div className='entry'>
                    <label htmlFor="date">Joining Date</label>
                    <input id='date' type="date" name='date' defaultValue={vacancy.joining} required/>
                  </div>
                </div>
                
                <div className='entry'>
                  <label htmlFor="desc">Description</label>
                  <textarea rows="5" cols="40" id='desc' type="text" name='desc' defaultValue={vacancy.desc} required/>
                </div>
                
                <button type='submit'>Submit</button>

            </form>
        </div>
    </div>
  )
}

export default EditVacancy