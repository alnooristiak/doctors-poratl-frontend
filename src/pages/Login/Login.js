import React from 'react';

const Login = () => {
    return (
        <div className='flex justify-center'>
            <form>
                <input type="name" placeholder="Type here" class="input input-bordered input-success w-full max-w-xs" />
                <br />
                <br />

                <input type="email" placeholder="Type here" class="input input-bordered input-success w-full max-w-xs" />
                <br />
                <br />

                <input type="submit" placeholder="Type here" class="input input-bordered input-success w-full max-w-xs" />
            </form>
        </div>
    );
};

export default Login;