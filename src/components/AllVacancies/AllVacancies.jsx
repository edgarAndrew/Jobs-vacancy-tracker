import React,{useEffect, useState} from 'react'
import './AllVacancies.css'
import { useDispatch, useSelector } from 'react-redux'
import { faEllipsisV,faEdit,faTrashAlt,faBuilding } from '@fortawesome/free-solid-svg-icons';
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

  const handleOptionsClick = (e) => {
    e.stopPropagation();
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

  const handleCardClick = (event) => {
    if (!event.target.classList.contains('options')) {
      console.log('/some-route');
    }
  };

  if(loading || !vacancies)
    return <div>Loading</div>
  else
    return (
    <div>
        <div className='navbar'>
            <button onClick={()=>navigate('/add-vacancy')}>Add Job</button>
        </div>
        <div className='jobs'>
            {
                vacancies.map((ele,index)=>
                    <div className="job" key={index} onClick={handleCardClick}>
                        <div className="card-header">
                            <h2>{ele.role}</h2>
                            <div className="options" onClick={handleOptionsClick}>
                                <FontAwesomeIcon icon={faEllipsisV} />
                                {showOptions && (
                                  <div className="options-menu">
                                    <button className="option" onClick={()=>handleEditClick(ele.id)}>
                                      <FontAwesomeIcon icon={faEdit} />
                                      <span>Edit</span>
                                    </button>
                                    <button className="option" onClick={()=>handleDeleteClick(ele.id)}>
                                      <FontAwesomeIcon icon={faTrashAlt} />
                                      <span>Delete</span>
                                    </button>
                                </div>
                                )}
                            </div>
                        </div>
                        <div className="card-body">
                          <div className='company'>
                            <div id='icon'>
                              <FontAwesomeIcon icon={faBuilding} />
                            </div>
                            <span>{ele.company}</span>
                          </div>
                          
                            <div className='details'>
                              <span>Salary: {ele.salary}</span>
                              <span>Joining Date:{ele.joining}</span>
                            </div>
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