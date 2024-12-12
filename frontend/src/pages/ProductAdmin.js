
import "../assets/styles/productCard.css";
import {useState} from "react";
const ProductAdmin = () => {

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category: '',
        price: '',
        stock: '',
        images: '',
        material: '',
        dimensions: { width: '', height: '', depth: '' }
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
       
      };

    return(
        <form onSubmit={handleSubmit}>
        <div>
          <label>Ürün Adı:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Açıklama:</label>
          <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
        </div>
        <div>
          <label>Kategori:</label>
          <input type="text" name="category" value={formData.category} onChange={handleChange} required />
        </div>
        <div>
          <label>Fiyat:</label>
          <input type="number" name="price" value={formData.price} onChange={handleChange} required />
        </div>
        <div>
          <label>Stok:</label>
          <input type="number" name="stock" value={formData.stock} onChange={handleChange} />
        </div>
        <div>
          <label>Görseller (URL):</label>
          <input type="text" name="images" value={formData.images} onChange={handleChange} />
        </div>
        <div>
          <label>Malzeme:</label>
          <input type="text" name="material" value={formData.material} onChange={handleChange} />
        </div>
        <div>
          <label>Boyutlar (Genişlik, Yükseklik, Derinlik):</label>
          <input type="number" name="dimensions.width" value={formData.dimensions.width} onChange={handleChange} placeholder="Genişlik" />
          <input type="number" name="dimensions.height" value={formData.dimensions.height} onChange={handleChange} placeholder="Yükseklik" />
          <input type="number" name="dimensions.depth" value={formData.dimensions.depth} onChange={handleChange} placeholder="Derinlik" />
        </div>
        <button type="submit">Ürün Ekle</button>
      </form>
    );
}

export default ProductAdmin;