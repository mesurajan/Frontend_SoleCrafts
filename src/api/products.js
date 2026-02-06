const BASE = import.meta.env.VITE_BACKEND_URL;

// GET
export const getProducts = () =>
  fetch(`${BASE}/api/products/`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  }).then((r) => r.json());

// CREATE
export const createProduct = (fd) =>
  fetch(`${BASE}/api/products`, {
    method: "POST",
    body: fd,
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  }).then((r) => r.json());

// UPDATE
export const updateProduct = (id, fd) =>
  fetch(`${BASE}/api/products/${id}`, {
    method: "PUT",
    body: fd,
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  }).then((r) => r.json());

// DELETE
export const deleteProduct = (id) =>
  fetch(`${BASE}/api/products/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
