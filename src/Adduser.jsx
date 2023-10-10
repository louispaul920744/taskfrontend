import axios from "axios";
import Navbar from "./Navbar"
//import { useDispatch } from 'react-redux';
//mport {useNavigate} from 'react-router-dom';

import { Formik, Form, Field, ErrorMessage } from 'formik';
//import { toast } from "react-toastify";
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
//import { createuser } from "./features/userslice";
const SignupSchema = Yup.object().shape({
    firstname: Yup.string().required('First Name is required'),
    lastname: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });
  
function Adduser() {
   // const dispatch = useDispatch();
   const navigate = useNavigate();
    const handleSubmit = async(values) => {
        // Dispatch the action with form data
        
await axios.post('http://localhost:5000/user/adduser',values).then(res=>console.log(res)).catch(err=>console.log(err));
     navigate('/');
//  const data=JSON.stringify(values);
        //dispatch(createuser({data,navigate,toast})); // Replace with your action and payload
      };
  return (
    <><div className="div"><Navbar /></div>
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center"    >
      <div className="w-50 bg-white rounded p-3">
      <h1>Add user form</h1>
        <Formik
      initialValues={{
        firstname: '',
        lastname: '',
        email: '',
        password: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        handleSubmit(values)
      }}
    >
      <Form>
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field type="text" name="firstname" />
          <ErrorMessage name="firstname" component="div" />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field type="text" name="lastname" />
          <ErrorMessage name="lastname" component="div" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik></div>
      
    </div></>
  )
}

export default Adduser