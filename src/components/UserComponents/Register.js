import {useState} from 'react';
import {auth} from '../../firebase';
import {Redirect} from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDisplayname] = useState("");
    const [redirect, setRedirect] = useState(false);

    const createUserWithEmailAndPasswordHandler = () => {
        auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            auth.signInWithEmailAndPassword(email,password)
            .then(loggedUser => {
            loggedUser.user.updateProfile({
                displayName: displayName,
            })
            .catch(error => {
                console.log(error);
            })
            setRedirect(true);
        })
        })
        .catch(error => {console.log(error);})
    }

    if (redirect)
        return <Redirect to='/'/>
    
    return (
        <div className="boxes-container">
            <div className="form">
                <label htmlFor="displayName">Nazwa użytkownika</label>
                <div>
                    <input
                        id="displayName"
                        name="username"
                        className="input2"
                        value={displayName}
                        placeholder="Nazwa użytkownika"
                        onChange={e => setDisplayname(e.target.value)}
                    />
                </div>
                <label htmlFor="email">Email</label>
                <div>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        className="input2"
                        value={email}
                        placeholder="Email"
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <label htmlFor="password">Haslo</label>
                <div>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        className="input2"
                        value={password}
                        placeholder="Hasło"
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <button
                    onClick={createUserWithEmailAndPasswordHandler}
                >Utwórz konto
                </button>
            </div>
        </div>
    )


}
export default Register;