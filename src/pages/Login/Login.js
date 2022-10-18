import React, { useState } from 'react';
import { useSignInWithGoogle, useSignInWithEmailAndPassword  } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // react form handle erroe 
    const { register, formState: { errors }, handleSubmit } = useForm();

    // for google sign in 
    const [signInWithGoogle, guser, gLoading, gerror] = useSignInWithGoogle(auth);
    
    // for email and password 
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);


    // showing user inforamtion in console 
    if (guser){
        console.log(user);
    }

    if (loading || gLoading){
        return <button class="btn loading">loading</button> 
    }

    // get email and password 
    const onSubmit = (data) => {
        console.log(data)
        signInWithEmailAndPassword(email, password)
    };
    

    return (
        <div>
            <div className='flex justify-center p-16'>
                <div>
                    <h3 className='py-5 text-green-600 font-bold'>Login</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            placeholder='Enter your Email'
                            class="input input-bordered input-success w-full max-w-xs"
                            type="email"
                            {...register("mail", {
                                pattern: {
                                  value: /[A-Za-z]{3}/,
                                  message: 'error message' // JS only: <p>error message</p> TS only support string
                                }
                              })}
                            aria-invalid={errors.mail ? "true" : "false"}
                        />
                        {errors.mail && <p className='text-red-600' role="alert">{errors.mail?.message}</p>}
                        <br /><br />

                        <input
                            placeholder='Enter your password'
                            type='password'
                            class="input input-bordered input-success w-full max-w-xs"
                            // {...register("password", { required: true })}
                            // aria-invalid={errors.password ? "true" : "false"}
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "password is required"
                                },
                                minLength: {
                                    value: 6,
                                    message: "Password must be 6 carecter lenghter"
                                }
                            })}
                        />
                        {/* {errors.password?.type === 'required' && <p className='text-red-600' role="alert">First name is required</p>} */}


                        <br />   <br />    
                        <input className='btn bg-green-600 font-bold text-white' type="submit" value="signin" />
                    </form>
                
        
                    <span className='text-green-600'>New to Doctors Portal? </span> <Link className='text-green-400' to="/register">Create new account</Link>
                    <div>-------- OR --------</div>
                    <button 
                    onClick={(event) => signInWithGoogle(event.preventDefault())}
                    className='btn text-white bg-green-600'
                    >Sign in With Goole</button>
            </div>
            </div>
        </div>
    );
};

export default Login;