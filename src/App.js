import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
// import PageOne from './PageOne'
// import PageTwo from './PageTwo'
import Landing from './Components/Home/Landing'
import Store from './Store/Store'
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <h1>Movies</h1>
        <Landing />
      </Provider>
      {/* <Link to='/page1'>PageOne</Link> */}
      {/* <Link to='/page2'>PageTwo</Link> */}
      <Switch>
        {/* <Route exact path='/page1' component={PageOne} /> */}
        {/* <Route exact path='/page2' render={() => <PageTwo name='Props' />} /> */}
      </Switch>
    </div>
  );
}

export default App;
