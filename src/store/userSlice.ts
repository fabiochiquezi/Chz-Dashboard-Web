import { UserType } from './../../shared/types/User/index'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type setUserType = {
    name: string,
    email: string,
    uid: string,
    photoURL: string
}

const initialState: UserType = {
    userAuth: {
        displayName: '',
        email: '',
        uid: '',
        photoURL: ''
    },
    userFirestore: {
        phoneNumber: '',
        sex: '',
        birthDay: '',
        address: {
            state: '',
            district: '',
            street: '',
            number: ''
        }
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<setUserType>) => {
            state.userAuth.displayName = action.payload.name
            state.userAuth.email = action.payload.email
            state.userAuth.uid = action.payload.uid
            state.userAuth.photoURL = action.payload.photoURL
        },
        updatePhotoAct: (state, action: PayloadAction<string>) => {
            state.userAuth.photoURL = action.payload
        }
    }
})

export const { setUser, updatePhotoAct } = userSlice.actions
export default userSlice.reducer
