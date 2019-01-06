import {firebase, googleAuthProvider} from '../firebase/firebase'

export const startLogin = () => {
    return () => { 
        return firebase.auth().signInWithPopup(googleAuthProvider) // This example calls google authentication inside a popup
    }
}

export const login = (uid) => ({
    type: 'LOGIN',
    uid
})

export const startLogout = () => {
    return() => {
        return firebase.auth().signOut()
    }
}

export const logout = () => ({
    type: 'LOGOUT'
})