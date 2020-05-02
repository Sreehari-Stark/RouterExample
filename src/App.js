import React from 'react';
import {BrowserRouter as Router,
Route,
Link} from 'react-router-dom';

import HomeComponent from './HomeComponent';
import AboutComponent from './AboutComponent';
import TeamComponent from './TeamComponent';
import HeaderComponent from './HeaderComponent';

function App() {
  return (
    <Router>
      <div>
          <HeaderComponent></HeaderComponent>
          <Route exact path='/Home' component={HomeComponent}></Route>
          <Route exact path='/About' component={AboutComponent}></Route>
          <Route exact path='/Team' component={TeamComponent}></Route>
        </div>
        
    </Router>
  );
}

export default App;
