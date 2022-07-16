import axios from 'axios';

const API = axios.create({baseURL:"http://43.204.110.174:5000"})

export const getBill = (id) => API.get(`/bill/${id}`)
export const getBills = (page) => API.get(`/bill?page=${Number(page)}`)
export const postBill = (bill) => API.post('/bill',bill)
export const updateBill = (id,bill) => API.put(`/bill/${id}/edit`,bill)
export const deleteBill = (id) => API.delete(`/bill/delete/${id}`)
