import { useState } from 'react';
import InputLogin from '../../layout/inputLogin/InputLogin';
import { Button } from "@mui/material";
import logoCorpSolutions from "../../assets/logos/corp-solutions.png";
import { Link, useNavigate } from 'react-router-dom';
import GetLoginUser from "../../utils/getLoginUser/GetLoginUser"
import "./login.css"

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(false)

    const handleEmailChange = (value: string) => {
        setEmail(value);
    };

    const handlePasswordChange = (value: string) => {
        setPassword(value);
    };

    const loginHandler = async (e: any) => {
        e.preventDefault();
        await GetLoginUser("email", email, "senha", password, handleLoginCallback);
        setUser(true)
    }

    const handleLoginCallback = (user: any) => {
        sessionStorage.setItem("usuarioLogado", user.id)
        const email = user.email;
        const parts = email.split("@");
        const domain = parts[1];
        if (domain == "corpsolution.com") {
            navigate("/talentpool")
            return
        }
        navigate("/")
    };
    return (
        <div className='ContainerForm'>
            <form onSubmit={loginHandler} className='FormLogin'>
                <img src={logoCorpSolutions} alt="Logo da Corp Solutions" height={70} className='FormImg' />
                <InputLogin
                    label={'E-mail'}
                    type={'email'}
                    value={email}
                    onChange={handleEmailChange}
                />
                <InputLogin
                    label={'Password'}
                    type={'password'}
                    value={password}
                    onChange={handlePasswordChange}
                />
                {user == false || email == '' && password == '' ? <span></span> : <span>Usuário ou senha inválido*</span>}
                <div className='ConatinerLinkBtn'>
                    <Button variant="contained" className="limit-input" type="submit" disabled={email && password ? false : true}>Entrar</Button>
                    <p>Voltar pra <Link className='FormLink' to={"/"}><span>Home</span></Link></p>
                </div>
            </form>
        </div>
    );
};

export default Login;
