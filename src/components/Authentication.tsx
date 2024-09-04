"use client"
import { useState } from "react"
import Logo from "./Logo"
import Back from "./Back"
import Link from "next/link"
import { auth } from "@/database/config"
import { authenticate } from "@/interface";
import { useRouter } from "next/navigation";
import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const Authentication = () => {
    const router = useRouter();
    const [newAccount, setIsNewAccount] = useState<boolean>(false);
    const [userData, setUserData] = useState<authenticate>({username:'', email:'', password:''});
    const [authError, setAuthError] = useState<string>('')

    const provider = new GoogleAuthProvider();

    const handleInput = ({target}:React.ChangeEvent<HTMLInputElement>) => {
        setAuthError('')
        let newData = {[target.name]:target.value}
        setUserData({...userData, ...newData})
    }

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, userData.email, userData.password)
        .then((userCredential) => {
            setAuthError("")
            // dispatch(updateNotification({text:"User Successfully Signed In!", imageUrl: 'show'}))
            // setTimeout(() => {
            //     dispatch(closeNotification())
            // }, 2000);
            console.log("User Signed In Successfully")
            setUserData({email:"", password:"", username: ""})
            router.push('/')
        })
        .catch((error) => setAuthError("Error occurred, try again..."))
    }

    const handleCreateAccount = () => {
        createUserWithEmailAndPassword(auth, userData.email, userData.password)
        .then((userCredential) => {
            if(auth.currentUser){
                updateProfile(auth.currentUser, {
                    displayName: userData.username
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    console.log(error);
                    setAuthError("Error occurred, try again...")
                });
            }
            setUserData({email:"", password:"", username: ""})
            // createData(auth.currentUser?.uid || '')
            setAuthError("")
            // dispatch(updateNotification({text:"User Successfully Signed In!", imageUrl: 'show'}))
            // setTimeout(() => {
            //     dispatch(closeNotification())
            // }, 2000);
            router.push('/')
        })
        .catch((error) => setAuthError("Error occurred, try again..."))
    }

    const handleSubmit = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const { email, username, password } = userData
        if (!email || !password){
            setAuthError("All Fields are required.")
        }
        else if(password.length < 8){
            setAuthError("Password cannot be less than 8(eight) characters.")
        }
        else if(newAccount && email && password && username){
            // CREATE ACCOUNT
            handleCreateAccount();
        } 
        else if (!newAccount && email && password){
            // LOGIN 
            handleSignIn();
        } else if (newAccount && !username){
            setAuthError("Username is required.")
        }
        else ( setAuthError("Error Occured, Please try again...") )
    }

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            // The signed-in user info.
            const user = result.user;
            // createData(auth.currentUser?.uid || '')
            // dispatch(updateNotification({text:"User Successfully Signed In!", imageUrl: 'show'}))
            // setTimeout(() => {
            //     dispatch(closeNotification())
            // }, 2000);
            router.push('/')
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }

    const switchAuthType = () => {
        setAuthError('');
        setIsNewAccount(!newAccount);
    }

  return (
    <div className="col-span-2 font-secondary authenticate h-svh relative flex items-center justify-center">
        <div className="back-authenticate w-max absolute top-5 right-5">
            <Back cancel={true}/>
        </div>
        <section className="p-4 flex flex-col gap-4">
            <div>
                <Logo style="text-center"/>
                <h3 className="text-center capitalize text-xl mt-2 font-semibold font-primary">{ newAccount ? 'Create Account' : 'Welcome Back'}</h3>
            </div>

            <form className="flex flex-col gap-4">
                {newAccount && 
                <div className="border-b  py-1 flex gap-2 items-center">
                    <svg className="size-4" fill="#1D3557" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#1D3557"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12,1a11,11,0,0,0,0,22,1,1,0,0,0,0-2,9,9,0,1,1,9-9v2.857a1.857,1.857,0,0,1-3.714,0V7.714a1,1,0,1,0-2,0v.179A5.234,5.234,0,0,0,12,6.714a5.286,5.286,0,1,0,3.465,9.245A3.847,3.847,0,0,0,23,14.857V12A11.013,11.013,0,0,0,12,1Zm0,14.286A3.286,3.286,0,1,1,15.286,12,3.29,3.29,0,0,1,12,15.286Z"></path></g></svg>
                    <input onChange={handleInput} type="text" id="username" name="username" placeholder="Username" className="md:min-w-[300px] placeholder:text-sm text-sm bg-transparent"/>
                </div>
                }
                <div className="border-b  py-1 flex gap-2 items-center">
                    <svg className="size-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 19H6.2C5.0799 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2C3 7.0799 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H17.8C18.9201 5 19.4802 5 19.908 5.21799C20.2843 5.40973 20.5903 5.71569 20.782 6.09202C21 6.51984 21 7.0799 21 8.2V10M20.6067 8.26229L15.5499 11.6335C14.2669 12.4888 13.6254 12.9165 12.932 13.0827C12.3192 13.2295 11.6804 13.2295 11.0677 13.0827C10.3743 12.9165 9.73279 12.4888 8.44975 11.6335L3.14746 8.09863M14 21L16.025 20.595C16.2015 20.5597 16.2898 20.542 16.3721 20.5097C16.4452 20.4811 16.5147 20.4439 16.579 20.399C16.6516 20.3484 16.7152 20.2848 16.8426 20.1574L21 16C21.5523 15.4477 21.5523 14.5523 21 14C20.4477 13.4477 19.5523 13.4477 19 14L14.8426 18.1574C14.7152 18.2848 14.6516 18.3484 14.601 18.421C14.5561 18.4853 14.5189 18.5548 14.4903 18.6279C14.458 18.7102 14.4403 18.7985 14.405 18.975L14 21Z" stroke="#1D3557" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                    <input onChange={handleInput} type="email" id="email" name="email" placeholder="Email" className="md:min-w-[300px] placeholder:text-sm text-sm bg-transparent"/>
                </div>
                <div className="border-b  py-1 flex gap-2 items-center">
                    <svg className="size-4" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 11H10V10H11V11Z" fill="#1D3557"></path> <path d="M8 11H9V10H8V11Z" fill="#1D3557"></path> <path d="M13 11H12V10H13V11Z" fill="#1D3557"></path> <path fillRule="evenodd" clipRule="evenodd" d="M3 6V3.5C3 1.567 4.567 0 6.5 0C8.433 0 10 1.567 10 3.5V6H11.5C12.3284 6 13 6.67157 13 7.5V8.05001C14.1411 8.28164 15 9.29052 15 10.5C15 11.7095 14.1411 12.7184 13 12.95V13.5C13 14.3284 12.3284 15 11.5 15H1.5C0.671573 15 0 14.3284 0 13.5V7.5C0 6.67157 0.671573 6 1.5 6H3ZM4 3.5C4 2.11929 5.11929 1 6.5 1C7.88071 1 9 2.11929 9 3.5V6H4V3.5ZM8.5 9C7.67157 9 7 9.67157 7 10.5C7 11.3284 7.67157 12 8.5 12H12.5C13.3284 12 14 11.3284 14 10.5C14 9.67157 13.3284 9 12.5 9H8.5Z" fill="#1D3557"></path> </g></svg>
                    <input onChange={handleInput} type="password" id="password" name="password" placeholder="Password" className="md:min-w-[300px] placeholder:text-sm text-sm bg-transparent"/>
                </div>
                <p className="text-sm text-red-500">{authError}</p>
            </form>

            <section>
                <div className="flex justify-center">
                    <button onClick={handleSubmit} className="bg-accent rounded-md text-white py-1.5 w-1/2 border-none uppercase font-primary font-semibold hover:scale-95 transition-all">{newAccount ? 'Create' : 'Login'}</button>
                </div>
                <div className="flex gap-3 items-center justify-center my-2 text-xs ">
                    <span className="flex-1 h-[1px] bg-gray-200"></span> OR <span className="flex-1 h-[1px] bg-gray-200"></span>
                </div>
                <div className="flex justify-center">
                        <div onClick={handleGoogleSignIn} className="bg-dark cursor-pointer text-light border flex items-center gap-2 py-2 w-3/4 justify-center px-4 rounded-md hover:scale-95 transition-all text-sm">
                            <svg className="size-4" viewBox="-0.5 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Color-" transform="translate(-401.000000, -860.000000)"> <g id="Google" transform="translate(401.000000, 860.000000)"> <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path> <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path> <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path> <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path> </g> </g> </g> </g></svg>
                            <p>Continue with Google</p>
                        </div>
                </div>
                <p className="text-right mt-2 text-sm">
                    { newAccount ? 'Already have an account? ' : "Don't have an account? "} 
                    <span onClick={switchAuthType} className="text-accent underline cursor-pointer hover:text-primary transition-colors">
                        {newAccount ? 'Login' : 'Create Account'}
                    </span>
                </p>
            </section>
        </section>
    </div>
  )
}

export default Authentication