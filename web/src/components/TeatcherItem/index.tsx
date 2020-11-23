import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeatcherItem(){
  return(
    <article className="teatcher-item">
          <header>
            <img src="https://avatars3.githubusercontent.com/u/22310158?s=400&u=71a6029079a5bcfa06210e79c1bc1774962c721e&v=4" alt="Elciney Junior"/>
            <div>
              <strong>Elciney Junior</strong>
              <span>Quimica</span>
            </div>
          </header>

          <p>
            Entusiasta das melhores tecnologias de química avançada.
            <br/> <br/>
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
            Mais de 200.000 pessoas já passaram por uma das minhas explosões.
          </p>

          <footer>
            <p>
              Preço/Hora
              <strong>R$ 80,00</strong>
            </p>

            <button type="button">
              <img src={whatsappIcon} alt="whatsapp"/>
              <p>Entrar em contato</p>
            </button>
          </footer>
        </article>
  );
}

export default TeatcherItem;