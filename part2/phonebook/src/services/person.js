import axios from "axios";

const baseURL = "/api/persons";

const getAll = () => {
  const request = axios.get(baseURL);
  return request.then((res) => res.data);
};

const create = (newObject) => {
  const request = axios.post(baseURL, newObject);
  return request.then((res) => res.data);
};

const remove = (id) => {
  return axios.delete(`${baseURL}/${id}`);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseURL}/${id}`, newObject);
  return request.then((response) => response.data);
};

const personService = { getAll, create, remove, update };

export default personService;
