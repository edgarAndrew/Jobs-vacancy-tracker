import {configureStore} from "@reduxjs/toolkit"
import {jobsReducer} from './reducers/jobs'

const store = configureStore({
    reducer:{
        jobs:jobsReducer
    }
})

export default store;