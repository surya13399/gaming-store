import React, { useState, useEffect } from "react";
import { useDispatch , useSelector } from 'react-redux'
import { addPizza } from "../actions/pizzaActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from '../components/Success'
export default function Addpizza() {
  const [name, setname] = useState("");
  const [PCprice, setPCprice] = useState();
  const [PS5price, setPS5price] = useState();
  const [Xboxprice, setXboxprice] = useState();
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");
  
  const dispatch = useDispatch()

  const addpizzastate = useSelector(state=>state.addPizzaReducer)
  const {success , error , loading} = addpizzastate
  function formHandler(e){

    e.preventDefault();

    const pizza ={
        name ,
        image,
        description,
        category,
        prices:{
            PC : PCprice,
            PS5 : PS5price,
            Xbox : Xboxprice
        }
    }

    console.log(pizza);
    dispatch(addPizza(pizza));

  }

  return (
    <div>
      <div className='text-left shadow-lg p-3 mb-5 bg-white rounded'>
        <h1>Add Pizza</h1>

        {loading && (<Loading/>)}
        {error && (<Error error='Something went wrong'/>)}
        {success && (<Success success='New Pizza added successfully'/>)}

        <form onSubmit={formHandler}>
          <input
            className="form-control"
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="PC varient price"
            value={PCprice}
            onChange={(e) => {
              setPCprice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="PS5 varient price"
            value={PS5price}
            onChange={(e) => {
              setPS5price(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Xbox varient price"
            value={Xboxprice}
            onChange={(e) => {
              setXboxprice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="category"
            value={category}
            onChange={(e) => {
              setcategory(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="description"
            value={description}
            onChange={(e) => {
              setdescription(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="image url"
            value={image}
            onChange={(e) => {
              setimage(e.target.value);
            }}
          />
          <button className='btn mt-3' type='submit'>Add Pizza</button>
        </form>
      </div>
    </div>
  );
}
