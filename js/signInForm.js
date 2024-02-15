import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"
import{auth} from './firebaseSDK.js'

const signInForm = document.querySelector('#login-form')

signInForm.addEventListener('submit', async (e)=>{
    e.preventDefault()
    const email = signInForm['login-email'].value
    const password = signInForm['login-password'].value

    try {
        const credentials = await signInWithEmailAndPassword(auth,email,password)
        console.log(credentials)
    } catch (error) {
        console.log(error)
    }
})