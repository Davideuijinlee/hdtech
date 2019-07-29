import React, {Fragment} from 'react';
import './app.scss';
import NavHeader from './navbar';
import About from './about';
import Services from './services';
import Contact from './contact';

function App() {
  return (
    <Fragment>
      <NavHeader />
      <div className="heroImg">
      </div>
      <About/>
      <Services/>
      <Contact/>
    </Fragment>

  );
}

export default App;
