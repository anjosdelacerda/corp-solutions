const GetLoginUser = (paramsType1: string,params1: string,paramsType2: string,params2: string , callback:any) => {
    fetch(`http://localhost:3000/usuarios?${paramsType1}=${encodeURIComponent(params1)}&${paramsType2}=${encodeURIComponent(params2)}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Erro ao recuperar usuário');
    }
    return response.json();
  })
  .then((data) => {
    if (data.length === 0) {
      throw new Error('Usuário ou senha inválido');
    }else if(params1 && params2){
      const user = data[0];
      callback(user)
    }else{
      console.log("Nenhum usuário informado")
    }
  })
  .catch((error) => {
    console.error(error.message);
  });
}
export default GetLoginUser