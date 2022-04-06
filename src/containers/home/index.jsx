import React from 'react';
import Menu from '../../components/menuSamanta/index';


import './home.css'


/*Imagens*/
import banner1 from '../../img/Banner1.png'
import trabalho from '../../img/Trabalho.png'
import Linkedin from '../../img/linkedin.png'
import brqLogo from '../../img/logo.png'

/*Pessoas*/
import Samanta from '../../img/Samanta.png'
import Makoto from '../../img/Makoto.png'
import Fusca from '../../img/Fusca.png'
import Milena from '../../img/Milena.png'
import Gustavo from '../../img/Gustavo.png'
import Henrique from '../../img/Henrique.png'
import Eduardo from '../../img/Eduardo.png'

import Libras from '../../components/acessibilidade'

import ChatBot from '../bot'


const HomeClient = () => {
  return (
    <div className="container">

      <Menu />
      <Libras/>
      <ChatBot/>

      <div className="banner1" id="home">
        <img src={banner1} />
      </div>

      <div className="quemSomos" id="quemSomos">
        <img src={trabalho} />

        <div className="text">
          <h1>Quem Somos?</h1>

          <p> Há 29 anos no mercado, a BRQ Digital Solutions se consolidou como uma das maiores empresas de transformação digital do    país.   Com uma plataforma de serviços end-to-end, oferecemos as mais eficientes e inovadoras soluções, tecnologias e   metodologias,   promovendo uma jornada de transformação para grandes marcas, de diferentes segmentos, no Brasil e no exterior.

            Nossos 3 mil funcionários atuam no modelo de trabalho Anywhere Office e a empresa é destaque como um dos melhores lugares     para        trabalhar pelo GPTW e Glassdoor.
          </p>
        </div>
      </div>

      <div className="containerServices" id="servicos">

        <div className="servicos">
          <h1>Serviços Disponíveis</h1>
          <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Culpa Vitae Distinctio Deleniti Labore Ducimus</p>

          <div className="atendimentos">

            <div className="atendimento">
              <h1>
                Atendimento ao Cliente
              </h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, aliquam est! rere eos Lorem ipsum dolor</p>
            </div>

            <div className="atendimento">
              <h1>
                Atendimento ao Cliente
              </h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, aliquam est! rere eos Lorem ipsum dolor</p>
            </div>

            <div className="atendimento">
              <h1>
                Atendimento ao Cliente
              </h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, aliquam est! rere eos Lorem ipsum dolor</p>
            </div>

          </div>

        </div>

      </div>

      <div className="integrantes" id="integrantes">

        <h1>Integrantes</h1>

        <div className="containerIntegrantes1">

          <div className="containerIntegrantes">
            <img className="samanta" src={Samanta} alt="" />
            <p>Samanta Melissa do Nascimento</p>
            <img className="linkedin" src={Linkedin} />
          </div>

          <div className="containerIntegrantes">
            <img className="samanta" src={Makoto} alt="" />
            <p>Marcelo Makoto</p>
            <img className="linkedin" src={Linkedin} />
          </div>

          <div className="containerIntegrantes">
            <img className="samanta" src={Fusca} alt="" />
            <p>Matheus Fuscaldi</p>
            <img className="linkedin" src={Linkedin} />
          </div>

          <div className="containerIntegrantes">
            <img className="samanta" src={Milena} alt="" />
            <p>Milena Akamine</p>
            <img className="linkedin" src={Linkedin} />
          </div>

        </div>

        <div className="containerIntegrantes2">

          <div className="containerIntegrantes">
            <img className="samanta" src={Gustavo} alt="" />
            <p>Gustavo Acacio Ferreira</p>
            <img className="linkedin" src={Linkedin} />
          </div>
          
          <div className="containerIntegrantes">
            <img className="samanta" src={Henrique} alt="" />
            <p>Henrique Oliveira</p>
            <img className="linkedin" src={Linkedin} />
          </div>

          <div className="containerIntegrantes">
            <img className="samanta" src={Eduardo} alt="" />
            <p>Eduardo Almeida</p>
            <img className="linkedin" src={Linkedin} />
          </div>

        </div>

      </div>

      <div className="containerRodape">
        <img className="BRQLogo" src={brqLogo}/>
      </div>

    </div>
  )
}

export default HomeClient;