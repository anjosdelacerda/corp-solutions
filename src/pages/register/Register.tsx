import InputRegister from '../../layout/inputRegister/inputRegister';
import { Button } from "@mui/material";
import logoCorpSolutions from "../../assets/logos/corp-solutions.png";
import { Link, useNavigate } from 'react-router-dom';
import "./register.css"
import {useForm} from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';

const Register = () => {

  const formSchema = yup.object().shape({
    name: yup.string().required("nome é obrigatório"),
    email: yup.string().email("e-mail inválido").required("e-mail obrigatório"),
    birthday: yup.date().required("data de nascimento é obrigatória"),
    password: yup
    .string()
    .required("Senha é obrigatória")
    .min(6, "A senha deve ter pelo menos 8 caracteres"),
    checkedPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'As senhas precisam ser iguais')
    .required('Confirmação de senha é obrigatória')
  })

  const {handleSubmit, register, formState: {errors} } = useForm({
    resolver: yupResolver(formSchema)
  })

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
                {errors.name && errors.name.message}
                <InputRegister
                    label={'E-mail'}
                    type={'email'}
                    register={register}
                    name={'email'}
                />
                {errors.email && errors.email.message}

                <InputRegister
                    label={''}
                    type={'date'}
                    register={register}
                    name={'birthday'}
                />
                {errors.birthday && errors.birthday.message}
                <InputRegister
                    label={'Senha'}
                    type={'password'}
                    register={register}
                    name={'password'}
                />
                {errors.password && errors.password.message}
                
                <InputRegister
                    label={'Confirme sua senha'}
                    type={'password'}
                    register={register}
                    name={'checkedPassword'}
                />
                {errors.checkedPassword && errors.checkedPassword.message}
                <div className='ConatinerLinkBtn'>
                    <Button variant="contained" className="limit-input" type="submit">Cadastrar</Button>
                    <p>Voltar pra <Link className='RegisterLink' to={"/"}><span>Home</span></Link></p>
                </div>
            </form>
        </div>
    );
};

export default Register;
