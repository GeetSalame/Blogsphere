import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../components/styles/auth.css';

export const Auth = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log(auth?.currentUser);

    const signUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("User Created!!");
        } catch (err) {
            alert(err);
            console.error(err);
        }
    };

    const signIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert("Signed In!!");
            setTimeout(navigate("/"), 2000);
        } catch (err) {
            alert(err);
            console.error(err);
        }
    };
    
    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            alert("Logged In!!");
            setTimeout(navigate("/"), 2000);
        } catch (err) {
            alert(err);
            console.error(err);
        }
    };

    auth.onAuthStateChanged((firebaseUser) => {
        let userMail = "";
        if (firebaseUser) {
            userMail = firebaseUser.email;
        }
        console.log("Current User : ", userMail)
    });
    return (
        <div id="auth">
            <div id="authContainer">
                <div id="authSwitch">
                    <a href="#signinSec" className="btn" style={{ textDecoration: "none", fontSize: "small" }}>Sign In</a>
                    <a href="#signupSec" className="btn" style={{ textDecoration: "none", fontSize: "small" }}>Sign Up</a>
                </div>
                <div id="authBody" className="authBodyClass">
                    <div id="signinSec">
                        <h1>Sign In</h1>
                        <input placeholder="Enter Email.." onChange={(e) => setEmail(e.target.value)} className="inp" />
                        <input
                            className="inp"
                            type="password"
                            placeholder="Enter Password.."
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <a href="#signupSec" className="switchLink">Create an Account</a>
                        <button onClick={signIn} className="btn"> Sign In</button>
                    </div>
                    <div id="signupSec">
                        <h1>Sign Up</h1>
                        <input placeholder="Enter Email.." onChange={(e) => setEmail(e.target.value)} className="inp" />
                        <input
                            className="inp"
                            type="password"
                            placeholder="Enter Password.."
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <a href="#signinSec" className="switchLink">Existing User?</a>
                        <button onClick={signUp} className="btn"> Sign Up</button>
                    </div>
                </div>
                <button onClick={signInWithGoogle} className="btn" id="googleBtn"><img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="" /> Google</button>
            </div>
        </div>
    );
};