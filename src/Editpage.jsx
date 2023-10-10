import axios from "axios";
import { Formik, Form, Field } from 'formik';
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { editpage } from "./features/pageslice";
import Navbar from "./Navbar";

export default function Editpage() {
  const navigate=useNavigate();
const userdata=useSelector(state=>state.useredit.data)
console.log(userdata);
const {id}=useParams()

const dispatch=useDispatch();
useEffect(()=>{
  getData();

})
const getData =async () => {
  try
  {
    const data=await axios.get(` http://localhost:5000/page/getonepage/${id}`)
  
    dispatch(editpage(data.data))
}
  catch(err)
  {
    console.log(err);
  }
      
}
  const handleSubmit = async(values) => {
    // Dispatch the action with form data
    
await axios.post(`http://localhost:5000/page/update/${id}`,values).then(res=>console.log(res)).catch(err=>console.log(err));
 navigate('/');
//  const data=JSON.stringify(values);
    //dispatch(createuser({data,navigate,toast})); // Replace with your action and payload
  };
  return (
    <><div className="div"><Navbar /></div>
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center"    >
      <div className="w-50 bg-white rounded p-3">
      <h1>Edit Page form</h1>
      <Formik
      initialValues={{ title: '', slug: '', content: '' }}
      onSubmit={(values) => {
        // Handle form submission here, e.g., send data to the server
        handleSubmit(values)
      }}
    >
      <Form>
        <div>
          <label htmlFor="title">Title</label>
          <Field type="text" id="title" name="title" />
        </div>
        <div>
          <label htmlFor="slug">Slug</label>
          <Field type="text" id="slug" name="slug" />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <Field as="textarea" id="content" name="content" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </Formik></div>
      
    </div></>
  )
}
