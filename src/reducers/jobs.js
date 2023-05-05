import {createReducer} from "@reduxjs/toolkit"

const initialState = {
    vacancies:[
        {
            'id':1,
            'role':'Frontend Developer',
            'company':'Company 1',
            'salary':'20k - 30k /m',
            'joining':'01/10/22',
            'desc':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            'id':2,
            'role':'Backend Developer',
            'company':'Company 2',
            'salary':'20k - 30k /m',
            'joining':'01/10/22',
            'desc':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            'id':3,
            'role':'Tester',
            'company':'Company 3',
            'salary':'20k - 30k /m',
            'joining':'01/10/22',
            'desc':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            'id':4,
            'role':'UI/UX Designer',
            'company':'Company 4',
            'salary':'20k - 30k /m',
            'joining':'01/10/22',
            'desc':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            'id':5,
            'role':'DevOps',
            'company':'Company 5',
            'salary':'20k - 30k /m',
            'joining':'01/10/22',
            'desc':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            'id':6,
            'role':'ML Engineer',
            'company':'Company 6',
            'salary':'20k - 30k /m',
            'joining':'01/10/22',
            'desc':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
    ],
}
export const jobsReducer = createReducer(initialState,{
    
    // dispatch types or cases for reducer
    AllVacanciesRequest: (state,action)=>{
        state.loading = true;
    },
    AllVacanciesSuccess: (state,action)=>{
        state.loading = false;
        state.vacancies = initialState.vacancies;
    },

    SingleVacancyRequest: (state,action)=>{
        state.loading = true;
    },
    SingleVacancySuccess: (state,action)=>{
        state.loading = false;
        state.vacancy = action.payload;
    },

    AddVacancyRequest: (state,action)=>{
        state.loading = true;
    },
    AddVacancySuccess: (state,action)=>{
        state.loading = false;
        state.vacancies = action.payload1;
        state.message = action.payload2;
    },

    EditVacancyRequest: (state,action)=>{
        state.loading = true;
    },
    EditVacancySuccess: (state,action)=>{
        state.loading = false;
        state.vacancies = action.payload1;
        state.message = action.payload2;
    },

    DeleteVacancyRequest: (state,action)=>{
        state.loading = true;
    },
    DeleteVacancySuccess: (state,action)=>{
        state.loading = false;
        state.vacancies = action.payload1;
        state.message = action.payload2;
    },
    clearMessage: (state,action)=>{
        state.message = null;
    },
})