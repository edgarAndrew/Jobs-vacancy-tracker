import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getVacancy,editVacancy } from '../../actions/jobs'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Vacancy.css'

const Vacancy = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {vacancies,vacancy,loading} = useSelector((state)=>state.jobs)

  useEffect(()=>{
    dispatch(getVacancy(id,vacancies))
  },[])

  const handleClick = () =>{
    navigate('/');
    dispatch({ type: "clearVacancy" });
  }
  
  if(loading || !vacancy)
    return <div>Loading</div>
  else
    return (
    <div>
        <div className='header'>
              <FontAwesomeIcon id='back' icon={faArrowLeft} onClick={handleClick}/>
        </div>
        <div className='container'>
            <form>
                <h2>Job Details</h2>

                <div className='entry'>
                  <label htmlFor="title">Job Title</label>
                  <input id='title' type="text" value={vacancy.role} name='title' required/>
                </div>
                
                <div className='entry'>
                  <label htmlFor="company">Company Name</label>
                  <input id='company' type="text" name='company' value={vacancy.company} required/>
                </div>
                
                <div className='temp'>
                  <div className='entry'>
                    <label htmlFor="salary">Salary</label>
                    <input id='salary' type="text" name='salary' value={vacancy.salary} required/>
                  </div>
                  
                  <div className='entry'>
                    <label htmlFor="date">Joining Date</label>
                    <input id='date' type="date" name='date' value={vacancy.joining} required/>
                  </div>
                </div>
                
                <div className='entry'>
                  <label htmlFor="desc">Description</label>
                  <textarea rows="5" cols="40" id='desc' type="text" name='desc' value={vacancy.desc} required/>
                </div>

            </form>
        </div>
    </div>
  )
}

export default Vacancy