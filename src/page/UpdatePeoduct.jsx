import '../App.css';
import {useState,useEffect}from 'react';

function UpdatePeoduct(props) {
  let [prodict_name,SetName]=useState('');
  let [product_price,SetPrice]=useState('');
  let [product_about,Setabout]=useState('');



  async function get_data(){

		var fd=new FormData();
		fd.append("p_id",props.match.params.id)
		var resp=await fetch("http://localhost:8000/api/updateproduct",{
			method:'POST',
			body:fd
		});
		var data=await resp.json();

		console.log(data);
		SetName(data.id);
    SetName(data.productName);
    SetPrice(data.price);
    Setabout(data.decription);
		

	}

	useEffect(()=>{
		get_data();
	},[]);







  return (
    <div>
      
      <p>Product Name</p>
      <p><input type="text" value={prodict_name} className="form-control" onChange={(ev)=>{
        SetName(ev.target.value);
      }} /></p>
      <p>Price</p>
      <p><input type="number" value={product_price} className="form-control" onChange={(ev)=>{
        SetPrice(ev.target.value);
      }} /></p>
      <p>Description</p>
      <p><textarea className="form-control" value={product_about} onChange={(ev)=>{
        Setabout(ev.target.value);
      }}></textarea></p>
      <input type="submit" value="save" className="btn btn-primary btn-block" onClick={async()=>{
        var ar=new FormData();
        ar.append("id",props.match.params.id);
        ar.append("product_name",prodict_name);
        ar.append("price",product_price);
        ar.append("decription",product_about);
        var seReData=await fetch("http://localhost:8000/api/updaetaip",{
          method:'POST',
          body:ar,
        });
        var data=await seReData.json();
        console.log(data);
        props.history.push('/');
      }} />
    </div>
  );
}

export default UpdatePeoduct;
