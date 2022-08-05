import axios from "axios";

const baseURL = "http://localhost:3001/persons"

const getAll = () =>
{
    const request = axios.get(baseURL)
    return request.then(res => res.data)
}

const create = (newObject) =>
{
    const request = axios.post(baseURL,newObject)
    return request.then(res => res.data)
}

const remove = (id) =>
{
    axios.delete(`${baseURL}/${id}`)
}

const personService = {getAll,create,remove}

export default personService