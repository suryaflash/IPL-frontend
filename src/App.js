import React from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import admin_signin from './components/admin/admin_signin';
import admin_dashboard from './components/admin/admin_dashboard';
import addTeam from './components/add/addTeam';
import addPlayer from './components/add/addPlayer';
import addManager from './components/add/addManager';
import viewTeams from './components/view/viewTeams';
import viewPlayers from './components/view/viewPlayers';
import viewManagers from './components/view/viewManagers';
import showTeam from './components/show/showTeam';
import showPlayer from './components/show/showPlayer';
import showManager from './components/show/showManager';
import editTeam from './components/edit/editTeam';
import editManager from './components/edit/editManager';
import editPlayer from './components/edit/editPlayer';
import signUp from './components/user/user_signup';
import signIn from './components/user/user_signin';
import newnew from './components/user/new';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={admin_signin} exact />
      <Route path="/admin_dashboard" component={admin_dashboard} exact />
      <Route path="/admin/add_team" component={addTeam} exact />
      <Route path="/admin/add_player" component={addPlayer} exact />
      <Route path="/admin/add_manager" component={addManager} exact />
      <Route path="/admin/view_teams" component={viewTeams} exact />
      <Route path="/admin/view_players" component={viewPlayers} exact />
      <Route path="/admin/view_managers" component={viewManagers} exact />
      <Route path="/teams/:id/show" component={showTeam} exact />
      <Route path="/players/:id/show" component={showPlayer} exact />
      <Route path="/managers/:id/show" component={showManager} exact />
      <Route path="/teams/:id/edit" component={editTeam} exact />
      <Route path="/players/:id/edit" component={editPlayer} exact />
      <Route path="/managers/:id/edit" component={editManager} exact />
      <Route path="/user/signup" component={signUp} exact/>
      <Route path="/user/signin" component={signIn} exact/>
      <Route path="/user/new" component={newnew} exact/>
    </BrowserRouter>
  );
}

export default App;
