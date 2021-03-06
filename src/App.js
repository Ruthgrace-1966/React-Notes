import React from "react"
import "./App.css";
import Home from "./components/Home/Home.component";
import StudentList from "./components/StudentList/StudentList.component";
import Form from "./components/Form/Form.component";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/studentList" component={StudentList} />
          <Route exact path="/form" component={Form} />

        </Switch>
      </div>
    </Router>
  );
}


export default App;
