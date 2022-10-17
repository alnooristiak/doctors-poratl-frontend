import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    // // loginGoogleHendeler function 
    // // const loginGoogleHendeler = event => {
    // //     // event.preve
    // // }
    if (user){
        console.log(user);
    }

    return (
        <div>
            <div className='flex justify-center p-16'>
                <form>
                <h3 className='py-5 text-green-600 font-bold'>Login</h3>
                    <input type="name" placeholder="Type here" className="input input-bordered w-96 input-success w-full max-w-xs" />
                    <br />
                    <br />

                    <input type="email" placeholder="Type here" className="input w-96 input-bordered input-success w-full max-w-xs" />
                    <br />
                    <br />

                    <input type="submit" placeholder="Type here" className="input w-24 bg-green-700 input-bordered input-success w-full max-w-xs" />
                
            
            {/* <div className='items-center  text-center'> */}
                <span>New to Doctors Portal?</span> <Link className='text-green-600' to="/createaccount">Create new account</Link>
                <div>-------- OR --------</div>
                <button 
                onClick={(event) => signInWithGoogle(event.preventDefault())}
                className='btn text-white bg-green-600'
                >Sign in With Goole</button>
            {/* </div> */}
            </form>
            </div>
        </div>
    );
};

export default Login;