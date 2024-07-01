import * as React from 'react';
import * as D from './styles';
import logoPrefeitura from '../../images/logo_prefeitura.png';
import logoJD from '../../images/logo-jdRosa.png';


const ButtonAppBar = () => {


  return (
    <D.Header>
      <img src={logoJD} width={170} alt='logo_JD'/>
      <D.Title>Estatísticas</D.Title>
      <img src={logoPrefeitura} width={178} alt='logo_prefeitura'/>
    </D.Header>
     
  );
}

export default ButtonAppBar;