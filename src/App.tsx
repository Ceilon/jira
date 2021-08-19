import React from 'react';
import './App.css';
import {ScriptListScreen} from 'screens/project-list'
import {UseArrayDemo} from 'screens/useArray/useArrayDemo'
import {LoginDemo} from 'unauthenticated-app/login'
import {AuthObj} from "./context/auth-context";
import {AuthenticatedApp} from "./authenticated-app";
import {UnauthenticatedApp} from "./unauthenticated-app";

function App() {
    const {user} = AuthObj();
  return (
    <div className="App">
        {user?<AuthenticatedApp/>:<UnauthenticatedApp/>}
    </div>
  );
}

export default App;
