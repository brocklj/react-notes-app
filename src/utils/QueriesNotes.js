import Axios from 'axios';

const { API_URL } = process.env;
const axios = Axios.create({ baseURL: API_URL });

export async function getNotes(id = null) {
  return await axios.get(`/notes/${id}`);
}

export async function postNotes(data) {
  return await axios.post(`/notes`, data);
}

export async function putNotes(id, data) {
  return await axios.put(`/notes/${id}`, data);
}

export async function delteNotes(id) {
  return await axios.delete(`/notes/${id}`);
}
