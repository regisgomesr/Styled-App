import React, { Component } from 'react'

import { Title, TitleSmall } from './styles'

class App extends Component {
  render() {
    return (
      <div>
        <Title fontsize={20}>
          Hello Rio das Pedras!
          <span>Texto Menor</span>
        </Title>

        <TitleSmall>Segunda-feira 09/03/2020</TitleSmall>
      </div>
    );
  }
  
}

export default App;
