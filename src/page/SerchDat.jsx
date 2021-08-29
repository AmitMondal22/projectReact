// import logo from './logo.svg';
import '../App.css';
import {useState}from"react";

function SerchDat() {
    let [prodict_serch,setSerch]=useState("");

  var [lData,setData]=useState("");
    

  return (
    <div>
        <form action="" method="post">
        <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search" method="post">
            <div className="input-group">
                <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                                aria-label="Search" aria-describedby="basic-addon2" value={prodict_serch} onChange={(ev)=>{
                                    setSerch(ev.target.value);
                                  }} 
                                  onKeyUp={async()=>{
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
                    {/* <button className="btn btn-primary" type="button" onClick=>
                            <i className="fas fa-search fa-sm"></i>
                        </button> */}
                    </div>
                </div>
        </form>
        </form>
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
      <td></td>
    </tr>
    )}
  </tbody>
</table>
</div>:''   
    }
        



  
    </div>
  );
}

export default SerchDat;
