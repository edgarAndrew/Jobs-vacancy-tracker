import React,{useEffect, useState} from 'react'
import './AllVacancies.css'
import { useDispatch, useSelector } from 'react-redux'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { removeVacancy } from '../../actions/jobs';
import { useAlert } from 'react-alert';

const AllVacancies = () => {

    const {vacancies,loading,message} = useSelector((state)=>state.jobs)
    const [showOptions, setShowOptions] = useState(false);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const alert = useAlert()

    useEffect(()=>{
      if(message){
        alert.success(message)
        dispatch({ type: "clearMessage" })
      }
    },[dispatch,message])

  const handleOptionsClick = () => {
    setShowOptions(!showOptions);
  }

  const handleEditClick = (id) => {
    // TODO: implement edit functionality
    navigate(`/edit-vacancy/${id}`)
  }

  const handleDeleteClick = (id) => {
    // TODO: implement delete functionality
    dispatch(removeVacancy(id,vacancies))
  }

  if(loading || !vacancies)
    return <div>Loading</div>
  else
    return (
    <div className='container'>
        <div className='navbar'>
            <button onClick={()=>navigate('/add-vacancy')}>Add Job</button>
        </div>
        <div className='jobs'>
            {
                vacancies.map((ele,index)=>
                    <div className="job" key={index}>
                        <div className="card-header">
                            <h2>{ele.role}</h2>
                            <div className="options" onClick={handleOptionsClick}>
                                <FontAwesomeIcon icon={faEllipsisV} />
                                {showOptions && (
                                    <div className="options-menu">
                                        <button onClick={()=>handleEditClick(ele.id)}>Edit</button>
                                        <button onClick={()=>handleDeleteClick(ele.id)}>Delete</button>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="card-body">
                            <h4>{ele.company}</h4>
                            <h4>{ele.salary}</h4>
                            <h4>{ele.joining}</h4>
                            <p>{ele.desc}</p>
                        </div>
                  </div>
                )
            }
        </div>
    </div>
  )
}

export default AllVacancies