import React, {Fragment} from 'react';
import './app.scss';
import NavHeader from './navbar';
import About from './about';
import Services from './services';

function App() {
  return (
    <Fragment>
      <NavHeader />
      <div className="heroImg">
      </div>
      <About/>
      <Services/>
    </Fragment>

  );
}

export default App;
