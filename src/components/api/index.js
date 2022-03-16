import axios from "axios";

const api = axios.create({
    baseURL: "https://us-central1-books-crud-f2c20.cloudfunctions.net/"
  });
  
  export default api