import React, { useState } from 'react';
import Todo from './components/Todo';
import Header from './components/Header';
import Auth from './components/Auth';
import AuthContext from './auth-context';
import './App.css';


const App = props => {
  const [page, setPage] = useState('auth');
  const [authStatus, setAuthStatus] = useState(false);

  const login = () => {
    setAuthStatus(true);
  };

  const switchPage = pageName => {
    setPage(pageName);
  }
    return (
      <div className="App">
      <AuthContext.Provider value={{ status: authStatus, login: login }}>
        <Header
          onLoadTodos={switchPage.bind(this, 'todos')}
          onLoadAuth={switchPage.bind(this, 'auth')}
        />
        <hr/>
        {page ==='auth'? <Auth />: <Todo />}
        </AuthContext.Provider>
      </div>
    );
}

export default App;
