import React, {Fragment} from 'react';
import './app.scss';
import NavHeader from './navbar';
import About from './about';

function App() {
  return (
    <Fragment>
      <NavHeader />
      <div className="heroImg">
      </div>
      <About/>
    </Fragment>

  );
}

export default App;
