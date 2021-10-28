import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AddGroomers from './components/AddGroomers';
import DeleteGroomers from './components/DeleteGroomers';
import ListGroomers from './components/ListGroomers';
import UpdateGroomers from './components/UpdateGroomers';
import ViewGroomers from './components/ViewGroomers'


function App() {
  return (
    <div>
      <Router>
        <Header/>
      <div className="container">
              <Switch>
                  <Route path="/" exact component={ListGroomers}></Route>
                  <Route path="/groomers" component={ListGroomers}></Route>
                  <Route path="/add-groomer" component={AddGroomers}></Route>
                  <Route path="/update-groomer/:id" component={UpdateGroomers}></Route> 
                  <Route path="/delete-groomer/:id" component={DeleteGroomers}></Route> 
                  <Route path="/view-groomer/:id" component={ViewGroomers}></Route> 
                  
              </Switch>
            </div>

      <Footer/>
      

    </Router>
  </div>
  );
}

export default App;
