import InputRegister from '../../layout/inputRegister/inputRegister';
import { Button } from "@mui/material";
import logoCorpSolutions from "../../assets/logos/corp-solutions.png";
import { Link, useNavigate } from 'react-router-dom';
import "./register.css"
import {useForm} from "react-hook-form"

const Register = () => {

  const {handleSubmit, register} = useForm()

  const onSubmitFunction = (data: any) =>{
      console.log(data)

  }

    return (
        <div className='ContainerForm'>
            <form onSubmit={handleSubmit(onSubmitFunction)} className='FormRegister'>
                <img src={logoCorpSolutions} alt="Logo da Corp Solutions" height={70} className='RegisterImg' />
                <InputRegister
                    label={'Nome completo'}
                    type={'text'}
                    register={register}
                    name={'name'}
                    
                />
                <InputRegister
                    label={'E-mail'}
                    type={'email'}
                    register={register}
                    name={'email'}
                />

                <InputRegister
                    label={''}
                    type={'date'}
                    register={register}
                    name={'birthday'}
                    
                />
                <InputRegister
                    label={'Senha'}
                    type={'password'}
                    register={register}
                    name={'password'}
                    
                />
                
                <InputRegister
                    label={'Confirme sua senha'}
                    type={'password'}
                    register={register}
                    name={'checkedPassword'}
                    
                />
                <div className='ConatinerLinkBtn'>
                    <Button variant="contained" className="limit-input" type="submit">Cadastrar</Button>
                    <p>Voltar pra <Link className='RegisterLink' to={"/"}><span>Home</span></Link></p>
                </div>
            </form>
        </div>
    );
};

export default Register;
