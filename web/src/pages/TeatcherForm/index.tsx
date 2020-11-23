import React from 'react';

import warningIcon from '../../assets/images/icons/warning.svg'
import PageHeader from '../../components/PageHeader/index';

import '../../components/PageHeader/styles.css'


function TeatcherForm(){
  return(
    <div id="teatcher-form">
        <PageHeader title="Que incrível que você quer dar aulas."/>
        
        <main>
          <form action="" className="teatcher">
            <fieldset>
              <div id="teatcher-info">
                <legend>Seus dados</legend>

                <div className="input-block">
                  <label htmlFor="teatcherName">Nome Completo</label>
                  <input 
                    id="teatcherName"/>
                </div>

                <div className="input-block">
                  <label htmlFor="teatcherPhoto">Link da sua foto <span>Começa com //http</span></label>
                  <input 
                    id="teatcherPhoto"/>
                </div>

                <div className="input-block">
                  <label htmlFor="teatcherWhatsapp">Whatsapp <span>Somente números</span></label>
                  <input 
                    id="teatcherWhatsapp"/>
                </div>

                <div className="input-block">
                  <label htmlFor="teatcherBiograph">Biografia <span>Máximo de 500 caracteres</span></label>
                  <textarea
                    id="teatcherBiograph"
                    maxLength={500}/>
                </div>
              </div>
              
              <br/>

              <div id="class-info">
                <legend>Sobre a aula</legend>

                <div className="input-block">
                  <label htmlFor="chooseClass">Matéria</label>
                  <input 
                    id="chooseClass"/>
                </div>

                <div className="input-block">
                  <label htmlFor="valorHoraAula"> Custo da sua hora por aula<span>(em R$)</span></label>
                  <input 
                    id="valorHoraAula"/>
                </div>
              </div>

              <br/>

              <div id="schedule-info">
                <legend>Horários disponíveis</legend>

                <div className="input-block">
                  <label htmlFor="weekDay">Dia da Semana</label>
                  <input 
                    id="weekDay"/>
                </div>

                <div className="input-block">
                  <label htmlFor="firstHour">Das</label>
                  <input 
                    id="firstHour"/>
                </div>

                <div className="input-block">
                  <label htmlFor="lastHour">Até</label>
                  <input 
                    id="lastHour"/>
                </div>
              </div>

              <footer>
                <span id="importante">
                  <img src={warningIcon} alt="Preencha todos o campos"/> Importante! Preencha todos os campos
                </span>

                <button id="saveTeatcher">Salvar Cadastro</button>
              </footer>
            </fieldset>
          </form>
        </main>
    </div>
  )
}

export default TeatcherForm;