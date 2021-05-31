import * as React from 'react';
import { render } from 'react-dom';
import Header from '../src/components/Header'
import Content from '../src/components/Content'
import Footer from '../src/components/Footer'


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