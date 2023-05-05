import React,{useEffect} from 'react'
import { addVacancy } from '../../actions/jobs'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Vacancy.css'

const AddVacancy = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {vacancies,message} = useSelector((state)=>state.jobs)
    const alert = useAlert()

    useEffect(()=>{
        if(message){
          alert.success(message)
          dispatch({ type: "clearMessage" })
        }
      },[dispatch,message])

    const handleSubmit = (e) =>{
        e.preventDefault()
        const data = new FormData(e.target)
        const title = data.get('title')
        const company = data.get('company')
        const salary = data.get('salary')
        const date = data.get('date')
        const desc = data.get('desc')

        console.log(title,company,salary,date,desc)
        dispatch(addVacancy(title,company,salary,date,desc,vacancies))
    }

  return (
    <div>
        <div className='header'>
              <FontAwesomeIcon id='back' icon={faArrowLeft} onClick={()=>navigate('/')}/>
        </div>
        <div className='container'>
        <form onSubmit={handleSubmit}>
                <h2>Add Job</h2>

                <div className='entry'>
                  <label htmlFor="title">Job Title</label>
                  <input id='title' type="text" name='title' required/>
                </div>
                
                <div className='entry'>
                  <label htmlFor="company">Company Name</label>
                  <input id='company' type="text" name='company' required/>
                </div>
                
                <div className='temp'>
                  <div className='entry'>
                    <label htmlFor="salary">Salary</label>
                    <input id='salary' type="text" name='salary' required/>
                  </div>
                  
                  <div className='entry'>
                    <label htmlFor="date">Joining Date</label>
                    <input id='date' type="date" name='date' required/>
                  </div>
                </div>
                
                <div className='entry'>
                  <label htmlFor="desc">Description</label>
                  <textarea rows="5" cols="40" id='desc' type="text" name='desc' required/>
                </div>
                
                <button type='submit'>Submit</button>

            </form>
        </div>
    </div>
  )
}

export default AddVacancy