import React from 'react'
import PageHeader from '../../components/PageHeader/index';
import TeatcherItem from '../../components/TeatcherItem/index'

import './styles.css';
import '../../components/PageHeader/styles.css';

function TeatcherList(){
  return(
    <div id="page-teatcher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teatchers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject"/>
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day"/>
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time"/>
          </div>
        </form>
      </PageHeader>

      <main>
        <TeatcherItem/>
      </main>
    </div>
  )
}

export default TeatcherList;