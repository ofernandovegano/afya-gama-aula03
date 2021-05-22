import React, { FormEvent, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { toast } from 'react-toastify';

import api from '../../service/api';

interface IUserRegister{
  cpf: string;
  nome: string;
  login: string;
  senha: string;  
}

const FormSignUp: React.FC = () => {
  
const history = useHistory()  

  const [formDataContent, setFormDataContent] = useState<IUserRegister>({} as IUserRegister);
  const [isLoad, setIsLoad] = useState<boolean>(false);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsLoad(true)
      
      api.post('usuarios', formDataContent).then(
        response => {
          toast.success('cadastro realizado com sucesso!', {
            
          })

          setTimeout(() => {
            history.push('/login')
          }, 2000)
        }
      ).catch( e => toast.error('Algo deu errado!'))
      .finally(() => setIsLoad(false))

    }, [formDataContent]
  );
  return (
    <div>
      {/* { isLoad && (<p>Carregando</p>)} */}
      { isLoad ? (
        <p>Carregando</p>
      ) : (
          
        <form onSubmit={ handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Insira seu nome" 
            onChange={ e => setFormDataContent({...formDataContent, nome: e.target.value}) }
          />
          <input 
            type="text" 
            name="username"
            placeholder="Insira seu nome de usuário" 
            onChange={ e => setFormDataContent({...formDataContent, login: e.target.value}) }
          />

          <input 
            type="text" 
            name="username"
            placeholder="Informe seu cpf" 
            onChange={ e => setFormDataContent({...formDataContent, cpf: e.target.value}) }
          />

          <input 
            type="password"
            name="password"
            placeholder="Insira sua senha"
            onChange={ e => setFormDataContent({...formDataContent, senha: e.target.value}) }
          />
          
          <input
            type="submit"
            value="Criar Conta" />
        </form>
      )}   
    </div>
  )
}

export default FormSignUp;