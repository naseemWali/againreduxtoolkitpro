 import { useEffect } from "react";
 import {addproduct}  from "../Slice/ProductSlice";
 import { useDispatch,useSelector} from "react-redux";

const Home = () => {
 const dispatch=useDispatch();
 const selector=useSelector((state)=> state.todo.product);
 console.log('data through selector',selector);
 

 const getdata=async () => {
 const response=await fetch('https://randomuser.me/api/');
 const answer=await response.json();
 dispatch(addproduct(answer.results))

 }
 useEffect(() => {
    
    getdata();
   }, []);


  return (
    <div>
    <h1>i am home</h1>
    </div>
  )

}
export default Home;
