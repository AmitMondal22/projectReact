// import logo from './logo.svg';
import '../App.css';
import { useHistory } from "react-router-dom";

function SignUp() {
  const history = useHistory();

    const Login = () => {
        history.push("/signin");
    }
  return (
    <div>
    <div className="container">

{/* Outer Row */}
<div className="row justify-content-center">

   <div className="col-xl-6 col-lg-12 col-md-9">

       <div className="card o-hidden border-0 shadow-lg my-5">
           <div className="card-body p-0">
                {/* Nested Row within Card Body */} 
               <div className="row">
                   
                   <div className="col-lg-12">
                       <div className="p-5">
                           <div className="text-center">
                               <h1 className="h4 text-gray-900 mb-4">Create new Account</h1>
                           </div>
                           <form className="user">
                           <div className="form-group">
                                   <input type="text" className="form-control form-control-user"
                                       id="exampleInputEmail" aria-describedby="emailHelp"
                                       placeholder="Enter your name" />
                            </div>
                               <div className="form-group">
                                   <input type="email" className="form-control form-control-user"
                                       id="exampleInputEmail" aria-describedby="emailHelp"
                                       placeholder="Enter Email Address..." />
                               </div>
                               <div className="form-group">
                                   <input type="password" className="form-control form-control-user"
                                       id="exampleInputPassword" placeholder="Create new Password" />
                               </div>
                               <input type="submit" value="Sign up" className="btn btn-primary btn-user btn-block" />
                               <hr/>
                             
                           </form>
                           
                           <div className="text-center">
                               <button className="btn btn-link" onClick={Login}>sign in</button>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>

   </div>

</div>

</div>
   </div>
 
  );
}

export default SignUp;
