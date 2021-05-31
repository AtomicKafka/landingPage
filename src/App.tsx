import * as React from 'react';
import { render } from 'react-dom';
import Header from '../src/components/Header'
import Content from '../src/components/Content'
import Footer from '../src/components/Footer'


function App() {
  return(
    <div>
      <Header />
      <h1>Contents</h1>
      <Content />

      <h1>Footer</h1>
      <Footer />
    </div>
  )
}

export default App;