import axios from "axios";
import Navbar from "./Navbar"
import {getuser} from './features/userslice'
//import {useNavigate}from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
function User() {
  const userdata=useSelector(state=>state.user.users)
  console.log(userdata);
    //const navigate=useNavigate();
    const dispatch=useDispatch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {getData()},[]);
    const deletedata = async(id) => {
      // Dispatch the action with form data
      
await axios.delete(`http://localhost:5000/user/delete/${id}`).then(res=>console.log(res)).catch(err=>console.log(err));
   getData()
//  const data=JSON.stringify(values);
      //dispatch(createuser({data,navigate,toast})); // Replace with your action and payload
    };
  const getData =async () => {
    try
    {
const response=await axios.get(' http://localhost:5000/user/getall')
    dispatch(getuser(response.data))
}
    catch(err)
    {
      console.log(err);
    }
        
}
  return (
    <><div className="div">
          <Navbar />
      </div>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-2">
          <button className="btn btn-success btn-sm"><Link to={'/adduser'}>Add +</Link></button>
<table className="table">
  <thead>
    <tr>
      <th>first Name</th>
      <th>Last name</th>
      <th>Email</th>
      <th>Action</th>
    </tr>
  </thead>
<tbody>
{  userdata.data.map(user=>{
  // eslint-disable-next-line react/jsx-key
  return(<tr>
    <td>{user.firstname}</td>
    <td>{user.lastname}</td>
    <td>{user.email}</td>
    <td><button className="btn btn-danger btn-sm" onClick={deletedata(user.id)}>delete</button><Link to={'/edituser/'+user.id}><button className="btn btn-sucess btn-sm">edit</button></Link></td>
  </tr>)
})}
</tbody>
</table>
        </div>
        </div></>
  )
}

export default User