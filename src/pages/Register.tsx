import React, {SyntheticEvent, useState} from 'react';
import { Redirect } from 'react-router';

const Register = () => {

    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent)=> {
        e.preventDefault();
        
        await fetch('http://localhost:8000/api/register', {
            method: 'POST',
            headers: {'content-type' : 'application/json'},
            body: JSON.stringify({
                nama,
                email,
                password
            })
        });

        setRedirect(true);
    }

    if (redirect) {
        return <Redirect to="/login"/>;
    }

    return (
        <div>
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Silahkan Daftar</h1>
                <input type="text" className="form-control mb-2" placeholder="Nama Lengkap" required
                    onChange={e => setNama(e.target.value)}
                />
                <input type="email" className="form-control mb-2" placeholder="Alamat Email" required
                    onChange={e => setEmail(e.target.value)}
                />
                <input type="password" className="form-control" placeholder="Password" required
                    onChange={e => setPassword(e.target.value)}
                />
                <button className="w-100 btn btn-lg btn-primary" type="submit">Daftar</button> 
            </form>
        </div>
    );
}

export default Register;