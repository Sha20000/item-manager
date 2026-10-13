import { useEffect, useState } from 'react';
import API from './api';

const empty = { name: '', description: '',category:'Other',quantity:0,price:0 };

export default function App() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(empty);
  const [editingId, setEditingId] = useState(null);

  const load = async () => {
    const res = await API.get('/');
    setItems(res.data);
  };

  useEffect(() => { load(); }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      // TODO 4a: call PUT /:id with form data, then reset editing state

      await API.put(`/${editingId}`, form);
      setEditingId(null);

    } else {
      await API.post('/', form);
    }
    setForm(empty);
    load();
  };

  const startEdit = (item) => {
    setEditingId(item._id);
    setForm({ 
      name: item.name, 
      description: item.description || '',
      category: item.category || 'Other',
      quantity: item.quantity ?? 0,
      price: item.price ?? 0
    
    
    
    });
  };

  const handleDelete = async (id) => {
    // TODO 4b: call DELETE /:id, then reload the list
    await API.delete(`/${id}`);
    load();
  };

  return (
    <div>
      <h1>Item Manager</h1>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />

        {/* TODO 5 (extension): add input(s) for the new field(s) */}
        <select name="category" value={form.category} onChange={handleChange}>
          <option value="Electronics">Electronics</option>
          <option value="Books">Books</option>
          <option value="Clothing">Clothing</option>
          <option value="Other">Other</option>
        </select>
        <input type="number" name="quantity" placeholder="Quantity" value={form.quantity} onChange={handleChange}  />
        <input type="number" name="price" placeholder="Price" value={form.price} onChange={handleChange}  />
        <button type="submit">{editingId ? 'Update Item' : 'Add Item'}</button>
      </form>

      {items.map((item) => (
        <div className="item" key={item._id}>
          <strong>{item.name}</strong>
          <p>{item.description}</p>
          {/* TODO 5 (extension): display the new field(s) */}
          <p>Category : {item.category} |Qty: {item.quantity} |Price: Rs. {item.price}</p>
          <div className="actions">
            <button onClick={() => startEdit(item)}>Edit</button>
            <button onClick={() => handleDelete(item._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
