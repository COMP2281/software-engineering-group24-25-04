import {createSlice} from "@reduxjs/toolkit";

const userStore = createSlice({
    name: 'user',
    initialState: {
        userInfo: localStorage.getItem('userInfo') || {},
        loginStatus: localStorage.getItem('loginStatus') || false,
        userRole: localStorage.getItem('userRole') || 'user'
    },
    reducers: {
        setUserInfo: (state, action) => {
            state.userInfo = action.payload
            localStorage.setItem('userInfo', JSON.stringify(action.payload))
        },
        setLoginStatus: (state, action) => {
            state.loginStatus = action.payload
            localStorage.setItem('loginStatus', action.payload)
        },
        setUserRole: (state, action) => {
            state.userRole = action.payload
            localStorage.setItem('userRole', action.payload)
        },
        logout: (state) => {
            state.userInfo = {}
            state.loginStatus = 'false'
            state.userRole = 'user'
            localStorage.removeItem('userInfo')
            localStorage.removeItem('loginStatus')
            localStorage.removeItem('userRole')
        }
    }
})

const {setUserInfo, setUserRole, setLoginStatus, logout} = userStore.actions

const userReducer = userStore.reducer

export { setUserInfo, setUserRole, setLoginStatus, logout }

export default userReducer
