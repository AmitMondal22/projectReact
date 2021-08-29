import '../App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import List_product from"./List_product";
import InsertProduct from"./InsertProduct";
import SerchDat from"./SerchDat";
import UpdatePeoduct from"./UpdatePeoduct";
import NotFound from '../NotFound';
import {useState}from"react";



function AdminRout() {
    let [prodict_serch,setSerch]=useState("");

  var [lData,setData]=useState([]);
  return (
    <>
    <BrowserRouter>
    {/* Page Wrapper */}
    <div id="wrapper">

        {/* Sidebar */}
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* Sidebar - Brand */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">Amit</div>
            </a>

            {/* Divider */}
            <hr className="sidebar-divider my-0"/>


            {/* Nav Item - Charts */}
            <li className="nav-item">
                <Link className="nav-link" to="/add-product">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Insert Product</span></Link>
            </li>

            {/* Nav Item - Tables */}
            <li className="nav-item">
                <Link className="nav-link" to="/">
                    <i className="fas fa-fw fa-table"></i>
                    <span>List Product</span></Link>
            </li>

            {/* Divider */}
            <hr className="sidebar-divider d-none d-md-block"/>

            {/* Sidebar Toggler (Sidebar) */}
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

        </ul>
        {/* End of Sidebar */}

        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">

            {/* Main Content */}
            <div id="content">

                {/* Topbar */}
                <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                
        <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search" method="post">
            <div className="input-group">
                <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                                aria-label="Search" aria-describedby="basic-addon2" value={prodict_serch} onChange={(ev)=>{
                                    setSerch(ev.target.value);
                                  }} onKeyUp={async()=>{
                                    var ar=new FormData();
                                    ar.append("serchh",prodict_serch);
                                    var seReData=await fetch("http://localhost:8000/api/serch",{
                                        method:'POST',
                                        body:ar,
                                    });
                                    var data=await seReData.json();
                                    setData(data);
                                }} />
                    <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                            <i className="fas fa-search fa-sm"></i>
                        </button>
                    </div>
                </div>
        </form>
                    {/* Sidebar Toggle (Topbar) */}
                    <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                        <i className="fa fa-bars"></i>
                    </button>

                    {/* Topbar Search */}
                    

                    {/* Topbar Navbar */}
                    <ul className="navbar-nav ml-auto">
                       
                    </ul>

                </nav>
                {/* End of Topbar */}

                {/* Begin Page Content */}
                <div className="container-fluid">

                    {/* Page Heading */}
                
                  


                    {/* <button onClick={handleClick} type="button">sign up</button> */}

                    {lData.length>0?
    <div>
    <table className="table table-hover">
  <thead>
      
    <tr>
      <th>Name</th>
      <th>Price</th>
      <th>Description</th>
      <th>Add User</th>
      <th>Update</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
   {lData.map(row=> 
    <tr>
      <td>{row.productName}</td>
      <td>{row.price}</td>
      <td>{row.decription}</td>
      <td></td>
      <td></td>
      <td><button className="btn btn-danger" onClick={async ()=>{
                            if (window.confirm('confarm delete user data')) {
                                var d_data=new FormData();
                                d_data.append('p_id',row.id);
                                var sid=await fetch("http://localhost:8000/api/remove",{
                                    method:'POST',
                                    body:d_data
                                });
                                var data=await sid.json();
                                setData(data);
                            }
                        }}>Remove</button></td>
    </tr>
    )}
  </tbody>
</table>
</div>:
                  <Switch>
                    <Route exact path='/' component={List_product}  />
                    <Route exact path='/add-product' component={InsertProduct}  />
                    <Route exact path='/update-product/:id' component={UpdatePeoduct}/>
                    <Route exact path='/serch' component={SerchDat} />

                    <Route path='*'>
                        <NotFound />
                    </Route>
                  </Switch>

   }
                  
                </div>
                {/* /.container-fluid */}

            </div>
           

        </div>
        {/* End of Content Wrapper */}

    </div>
    {/* End of Page Wrapper */}

    {/* Scroll to Top Button*/}
    <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
    </a>

    {/* Logout Modal*/}
    <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                <div className="modal-footer">
                    <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <a className="btn btn-primary" href="login.html">Logout</a>
                </div>
            </div>
        </div>
    </div>
    
    </BrowserRouter>
    </>
  );
}

export default AdminRout;
