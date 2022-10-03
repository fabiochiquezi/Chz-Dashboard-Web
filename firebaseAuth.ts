// **** If want use Firebase Auth throw Rest
export {}

// ------- Config
// const apiKey = 'AIzaSyA7X2i8Dl0hi_bSdxx2ZbOfxrp6WSKvFls'
// export const authLocal = 'http://localhost:9099'

// // Auth url rest
// export const getUrlRestAuth = (method: any, test?:boolean) => {
//     const defaultFireRest = 'identitytoolkit.googleapis.com/v1/accounts:'
//     const uriProduction = 'https://'
//     const isProcessDev = process.env.NODE_ENV === 'development'

//     const authUrls: any = {
//         signUp: `${defaultFireRest}signUp?key=${apiKey}`,
//         signInWithPassword: `${defaultFireRest}signInWithPassword?key=${apiKey}`,
//         update: `${defaultFireRest}update?key=${apiKey}`
//     }

//     if (test || isProcessDev) return `${authLocal}/${authUrls[method]}`
//     return `${uriProduction}${authUrls[method]}`
// }

// ------- Example
// With Rest
// import { getUrlRestAuth } from '../../../firebaseAuth'
// import axios from 'axios'
// type payloadType = {
//     name: string, email: string, password: string, returnSecureToken: boolean
// }

// type userCreateType = {
//     data: {
//         kind: string,
//         registered: true,
//         localId: string,
//         email: string,
//         idToken: string,
//         refreshToken: string,
//         expiresIn: string
//     }
// }

// export const appRegister = async (
//     name: string,
//     email: string,
//     password: string,
//     local?: boolean,
//     returnSecureToken: boolean = true
// ) => {
//     const payload = { name, email, password, returnSecureToken }
//     const urlCreate = getUrlRestAuth('signUp', local)
//     const urlUpdate = getUrlRestAuth('update', local)
//     console.log(urlCreate)
//     const request = await axios.post<payloadType, userCreateType>(urlCreate, payload)
//     const userData = request.data

//     const payloadProfile = {
//         idToken: userData.idToken,
//         displayName: payload.name,
//         photoUrl: '',
//         returnSecureToken: true
//     }

//     const updateProfile = await axios.post(urlUpdate, payloadProfile)
//     const profileData = updateProfile.data
//     return { ...userData, ...profileData }
// }

// ------- Test
// import { authLocal } from '../../../../firebaseAuth'
// import { appRegisterProgm } from '../appRegister'

// describe('test appRegister:', () => {
//     it.only('ok', async () => {
//         const name = 'zxc'
//         const email = 'zxc19@zxc.com'
//         const password = 'zxczxc'

//         try {
//             await appRegisterProgm(name, email, password, authLocal)
//         } catch (e) {
//             const errorMessage = e.response.data.error.message
//             console.log(errorMessage)
//         }
//     })
// })

// // const errorMessage = e.response.data.error.message
// // const errors = e.response.data.error.errors
// // const code = e.response.data.error.code
