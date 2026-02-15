import { useEffect, useState } from "react";

/*  DEFINE DEFAULT MODEL STATE */
const emptyProduct = {
  title: "",
  brand: "",
  category: "",
  gender: "",
  price: "",
  discount: "",
  description: "",

  stock: [{ size: "", quantity: "" }],
  colors: [""],
  features: [""],
  paymentMethods: [""],

  material: "",
  soleMaterial: "",
  fitType: "",
  weight: "",
  origin: "",
  deliveryInfo: "",
  returnPolicy: "",

  image: null,
};

export default function ProductForm({ onSubmit, editing, onCancel }) {
  const [product, setProduct] = useState(emptyProduct);

  /* ✅ when editing changes */
  useEffect(() => {
    if (editing) {
      setProduct({
        ...editing,
        stock: editing.stock?.length ? editing.stock : [{ size: "", quantity: "" }],
        colors: editing.colors?.length ? editing.colors : [""],
        features: editing.features?.length ? editing.features : [""],
        paymentMethods: editing.paymentMethods?.length ? editing.paymentMethods : [""],
      });
    } else {
      setProduct(emptyProduct);
    }
  }, [editing]);

  const updateField = (e) =>
    setProduct({ ...product, [e.target.name]: e.target.value });

  const updateArray = (key, index, value) => {
    const arr = [...product[key]];
    arr[index] = value;
    setProduct({ ...product, [key]: arr });
  };

  const updateStock = (i, key, value) => {
    const stock = [...product.stock];
    stock[i][key] = value;
    setProduct({ ...product, stock });
  };

  const addRow = (key, value) =>
    setProduct({ ...product, [key]: [...product[key], value] });

  const submit = (e) => {
    e.preventDefault();

    const fd = new FormData();

    fd.append("title", product.title);
    fd.append("brand", product.brand);
    fd.append("category", product.category);
    fd.append("gender", product.gender);
    fd.append("price", product.price);
    fd.append("discount", product.discount);
    fd.append("description", product.description);

    fd.append("stock", JSON.stringify(product.stock));
    fd.append("colors", JSON.stringify(product.colors));
    fd.append("features", JSON.stringify(product.features));
    fd.append("paymentMethods", JSON.stringify(product.paymentMethods));

    fd.append("material", product.material);
    fd.append("soleMaterial", product.soleMaterial);
    fd.append("fitType", product.fitType);
    fd.append("weight", product.weight);
    fd.append("origin", product.origin);
    fd.append("deliveryInfo", product.deliveryInfo);
    fd.append("returnPolicy", product.returnPolicy);

    if (product.image) fd.append("image", product.image);

    onSubmit(fd);
  };

  return (
    <form onSubmit={submit} className="bg-white p-4 md:p-6 rounded-xl shadow space-y-6">
      {/* BASIC INFO */}
      <div className="grid md:grid-cols-2 gap-4">
        <input className="input" name="title" value={product.title} onChange={updateField} placeholder="Title" />
        <input className="input" name="brand" value={product.brand} onChange={updateField} placeholder="Brand" />
        <input className="input" name="category" value={product.category} onChange={updateField} placeholder="Category ID" />

        <select className="input" name="gender" value={product.gender} onChange={updateField}>
          <option>Men</option>
          <option>Women</option>
          <option>Unisex</option>
        </select>

        <input className="input" name="price" value={product.price} onChange={updateField} placeholder="Price" />
        <input className="input" name="discount" value={product.discount} onChange={updateField} placeholder="Discount %" />
      </div>

      {/* STOCK */}
      <div>
        <h3 className="font-semibold mb-2">Stock</h3>
        {product.stock.map((s, i) => (
          <div key={i} className="flex gap-2 mb-2">
            <input className="input" value={s.size} placeholder="Size" onChange={(e) => updateStock(i, "size", e.target.value)} />
            <input className="input" value={s.quantity} placeholder="Qty" onChange={(e) => updateStock(i, "quantity", e.target.value)} />
          </div>
        ))}
        <button type="button" onClick={() => addRow("stock", { size: "", quantity: "" })} className="btn-secondary">
          + Add Size
        </button>
      </div>

      {/* ARRAYS */}
      {["colors", "features", "paymentMethods"].map((key) => (
        <div key={key}>
          <h3 className="font-semibold capitalize">{key}</h3>
          {product[key].map((v, i) => (
            <input
              key={i}
              className="input mb-2"
              value={v}
              onChange={(e) => updateArray(key, i, e.target.value)}
            />
          ))}
          <button type="button" onClick={() => addRow(key, "")} className="btn-secondary">
            + Add
          </button>
        </div>
      ))}

      {/* META */}
      <div className="grid md:grid-cols-2 gap-4">
        <input className="input" name="material" value={product.material} onChange={updateField} placeholder="Material" />
        <input className="input" name="soleMaterial" value={product.soleMaterial} onChange={updateField} placeholder="Sole Material" />
        <input className="input" name="fitType" value={product.fitType} onChange={updateField} placeholder="Fit Type" />
        <input className="input" name="weight" value={product.weight} onChange={updateField} placeholder="Weight" />
        <input className="input" name="origin" value={product.origin} onChange={updateField} placeholder="Origin" />
        <input className="input" name="deliveryInfo" value={product.deliveryInfo} onChange={updateField} placeholder="Delivery Info" />
        <input className="input" name="returnPolicy" value={product.returnPolicy} onChange={updateField} placeholder="Return Policy" />
      </div>

      <textarea
        className="input"
        value={product.description}
        onChange={(e) => setProduct({ ...product, description: e.target.value })}
        placeholder="Description"
      />

      <input type="file" onChange={(e) => setProduct({ ...product, image: e.target.files[0] })} />

      <div className="flex gap-3">
        <button className="btn-primary">{editing ? "Update" : "Create"}</button>
        {editing && (
          <button type="button" onClick={onCancel} className="btn-secondary">
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
