import React from 'react';
import './css/style.css';
import { render } from 'react-dom';
import StorePicker from './components/StorePicker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NotFound from './components/NotFound';
import App from './components/App'

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ StorePicker }/>
        <Route path="/store/:storeId" component = { App }/>
        <Route component = { NotFound }/>

      </Switch>
    </Router>
  )
}
render(<Root/>,document.querySelector("#main") );
