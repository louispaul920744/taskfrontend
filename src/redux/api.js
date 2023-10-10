import axios from "axios";
const API=axios.create({
    baseURL: 'http://localhost:5000'

     
  });
  export const createuser = (formData) => API.post("/user/adduser",formData);
export const getallusers = (tourData) => API.post("/user/getall", tourData);

export const getoneuser = (id) => API.get(`/user/getoneuser/${id}`);
export const deleteuser = (id) => API.delete(`/user/delete/${id}`);
export const updateTour = (updatedTourData, id) =>
  API.post(`/user/update/${id}`, updatedTourData);