import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import your components and containers
import Home from './containers/Home';
import Login from './containers/Auth/Login';
import Register from './containers/Auth/Register';
import Dashboard from './containers/Dashboard';
import CreateLoan from './containers/Loan/CreateLoan';
import EditLoan from './containers/Loan/EditLoan';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/loan/create" component={CreateLoan} />
          <Route path="/loan/edit/:id" component={EditLoan} />
          {/* Add more routes as needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
