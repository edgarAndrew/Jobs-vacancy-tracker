import React,{useEffect} from 'react'
import { addVacancy } from '../../actions/jobs'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAlert } from 'react-alert'

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
            <button onClick={()=>navigate('/')}>back</button>
        </div>
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Add Job</h2>

                <label htmlFor="title">Job Title</label>
                <input id='title' type="text" name='title' required/>
                
                <label htmlFor="company">Company Name</label>
                <input id='company' type="text" name='company' required/>
                
                <label htmlFor="salary">Salary</label>
                <input id='salary' type="text" name='salary' required/>

                <label htmlFor="date">Joining Date</label>
                <input id='date' type="date" name='date' required/>
                
                <label htmlFor="desc">Description</label>
                <input id='desc' type="text" name='desc' required/>

                <button type='submit'>Submit</button>

            </form>
        </div>
    </div>
  )
}

export default AddVacancy