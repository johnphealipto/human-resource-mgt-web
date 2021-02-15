import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userDeleteReducer, userDetailsByIdReducer, userDetailsReducer, userListReducer, userLoginReducer, userRegisterReducer, userUpdatePasswordReducer, userUpdateProfileReducer, userUpdateReducer } from './reducers/userReducers'
import { profileDetailsReducer, createProfileReducer, profileEmployeeIDDetailsReducer, profileUpdateReducer, createProfileEmpIdReducer } from './reducers/profileReducers'
import { createNextOfKinEmpIdReducer, createNextOfKinReducer, nextOfKinDetailsEmployeeReducer, nextOfKinDetailsReducer, updateNextOfKinReducer } from './reducers/nextOfKinReducer'
import { createEducationEmpIdReducer, createEducationReducer, educationDetailsEmployeeReducer, educationDetailsReducer, updateEducationReducer } from './reducers/educationReducers'


const reducer = combineReducers({
    userLogin: userLoginReducer,
    userDetails: userDetailsReducer,
    userDetailsById: userDetailsByIdReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userUpdatePassword: userUpdatePasswordReducer,
    userList: userListReducer,
    userRegister: userRegisterReducer,
    userUpdate: userUpdateReducer,
    userDelete: userDeleteReducer,
    profileDetails: profileDetailsReducer,
    profileUpdate: profileUpdateReducer,
    profileCreate: createProfileReducer,
    nextOfKinDetails: nextOfKinDetailsReducer,
    nextOfKinUpdate: updateNextOfKinReducer,
    nextOfKinCreate: createNextOfKinReducer,
    educationDetails: educationDetailsReducer,
    educationUpdate: updateEducationReducer,
    educationCreate: createEducationReducer,
    profileDetailsEmpId: profileEmployeeIDDetailsReducer,
    nextOfKinDetailsEmpId: nextOfKinDetailsEmployeeReducer,
    educationDetailsEmpId: educationDetailsEmployeeReducer,
    educationCreateEmpId: createEducationEmpIdReducer,
    nextOfKinCreateEmpId: createNextOfKinEmpIdReducer,
    profileCreateEmpId: createProfileEmpIdReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
? JSON.parse(localStorage.getItem('userInfo'))
: null

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
    reducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store