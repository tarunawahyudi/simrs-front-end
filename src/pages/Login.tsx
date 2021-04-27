import React, {SyntheticEvent, useState} from "react";
import { Redirect } from "react-router-dom";

const Login = ()=> {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: {'content-type' : 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        });

        setRedirect(true)
    }

    if (redirect) {
        return <Redirect to="/"/>;
    }
    

    return (
        <div>
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Silahkan Login</h1>
                <input type="email" className="form-control mb-2" placeholder="Alamat Email" required
                    onChange={e => setEmail(e.target.value)}
                />
                <input type="password" className="form-control" placeholder="Password" required
                    onChange={e => setPassword(e.target.value)}
                />
                <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button> 
            </form>
        </div>
    );
};

export default Login;