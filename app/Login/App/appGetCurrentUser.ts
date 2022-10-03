import { auth } from '../../../firebase'

export const appGetCurrentUser = () => auth.currentUser
