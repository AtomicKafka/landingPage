import * as React from 'react';
import { render } from 'react-dom';
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'


function App() {
  return(
    <div>
      <div className="headerContainer">
        <Header />
      </div>
      <div className="mainContentDiv">
        <Content />
      </div>
      <Footer />
    </div>
  )
}

export default App;