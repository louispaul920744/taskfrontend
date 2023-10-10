import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import Navbar from "./Navbar";
function Addpage() {
  const navigate = useNavigate();
  const handleSubmit = async(values) => {
      // Dispatch the action with form data
      
await axios.post('http://localhost:5000/page/addpage',values).then(res=>console.log(res)).catch(err=>console.log(err));
   navigate('/');
//  const data=JSON.stringify(values);
      //dispatch(createuser({data,navigate,toast})); // Replace with your action and payload
    };
  return (
    <><div className="div"><Navbar /></div>
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center"    >
      <div className="w-50 bg-white rounded p-3">
      <h1>Add Page form</h1>
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

export default Addpage