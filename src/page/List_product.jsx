// import logo from './logo.svg';
import '../App.css';
import {useState,useEffect}from"react";
import {Link}from "react-router-dom";


function List_product() {
  var [lData,setData]=useState([]);
  async function data_get(){
    var resp=await fetch("http://localhost:8000/api/list-p");
    var data=await resp.json();
    setData(data);
  }
  useEffect(()=>{
    data_get();
  },[]
  );
  return (
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
        <td>{row.name}</td>
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
        <td><Link className="btn btn-primary" to={'update-product/'+row.id}>Edit</Link></td>
      </tr>
      )}
    </tbody>
  </table>
    </div>
  );
}

export default List_product;
