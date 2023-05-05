import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import AllVacancies from './components/AllVacancies/AllVacancies';
import AddVacancy from './components/Vacancy/AddVacancy';
import EditVacancy from './components/Vacancy/EditVacancy';
import NotFound from './components/NotFound/NotFound'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllVacancies/>}/>
        <Route path="/add-vacancy" element={<AddVacancy/>}/>
        <Route path="/edit-vacancy/:id" element={<EditVacancy/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    
    </Router>
    )
}

export default App