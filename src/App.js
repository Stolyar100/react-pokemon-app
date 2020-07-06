import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Layout from './Layout';
import Search from './navigation/Search'
import List from './pokemon/List'
import Card from './pokemon/Card';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Search />
          <Switch>
            <Route exact path="/" component={List}/>
            <Route path="/pokemon/:id" component={Card}/>
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
