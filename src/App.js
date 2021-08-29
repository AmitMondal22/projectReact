// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import LogIn from"./page/LogIn";
import SignUp from"./page/SignUp";
import AdminRout from"./page/AdminRout";
import NotFound from './NotFound';

function App() {
  
  return (
    <div>
        <BrowserRouter>
                  <Switch>
                  
                    <Route exact path='/signin' component={LogIn}  />
                    <Route exact path='/signup' component={SignUp}  />
                    
                    {/* <Route path="/404" component={NotFound} /> */}

                    
                    <Route path='/' component={AdminRout}  />
                    <Route path='*' exact={true} component={NotFound} />

                    
                    

                    </Switch>
        </BrowserRouter>
    </div>
  );
}



export default App;
