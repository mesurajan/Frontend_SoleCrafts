import { useEffect, useState } from "react";
import { getProducts, createProduct, updateProduct, deleteProduct } from "../../api/products";
import ProductForm from "../../component/Admin/ProductForm";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(null);

  const load = async () => setProducts(await getProducts());

  useEffect(() => { load(); }, []);

  return (
    <div className="p-4 md:p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Admin Products</h1>

      <ProductForm
        editing={editing}
        onSubmit={async (fd)=>{
          editing ? await updateProduct(editing._id, fd) : await createProduct(fd);
          setEditing(null);
          load();
        }}
        onCancel={()=>setEditing(null)}
      />

      <div className="grid md:grid-cols-2 gap-4 mt-6">
        {products.map(p=>(
          <div key={p._id} className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">{p.title}</h3>
            <p>₹{p.finalPrice || p.price}</p>
            <div className="flex gap-2 mt-2">
              <button onClick={()=>setEditing(p)} className="btn-edit">Edit</button>
              <button onClick={()=>deleteProduct(p._id).then(load)} className="btn-delete">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
