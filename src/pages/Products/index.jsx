
import { useEffect, useState } from 'react';
import './index.css';
import Slider from '@mui/material/Slider';

export default function Products(props) {
  const { still } = props;
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCompany, setSelectedCompany] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState(0);

  useEffect(() => {
    fetch('https://strapi-store-server.onrender.com/api/products')
      .then(res => res.json())
      .then(json => {
        setData(json.data);
        setFilteredData(json.data); // Initially, display all data
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }, []);

  const handleProductClick = (e) => {
    alert(e.attributes.category);
  };

  const handleSearch = (event) => {

  
    let updatedData = data.filter((product) =>
      product.attributes.title.toLowerCase().includes(searchInput.toLowerCase())
    );
  
    if (selectedCategory !== 'all') {
      updatedData = updatedData.filter(
        (product) => product.attributes.category === selectedCategory
      );
    }
  
    if (selectedCompany !== 'all') {
      updatedData = updatedData.filter(
        (product) => product.attributes.company === selectedCompany
      );
    }
  
    updatedData = updatedData.filter(
      (product) => parseFloat(product.attributes.price) <= selectedPrice
    );
  
    // Update the filtered data state
    setFilteredData(updatedData);
  
    // Set filtered data to all data if search input is empty
    if (!searchInput) {
      setFilteredData(data);
    }
    event.preventDefault();
  };
  
  

  return (
    <div style={still ? { background: '#272935', color: 'white' } : { background: 'white' }} className='product-block'>
      <div className='products-block' style={still ? { background: '#272935', color: 'white' } : { background: 'white' }}>
        <form style={still ? { background: '#181920' } : { background: '#F0F6FF' }} onSubmit={handleSearch}>
          <div className="form-top">
            <div className="input">
              <label htmlFor="search">Search product</label><br />
              <input style={still ? { background: '#272935', color: 'white' } : { background: '#F0F6FF' }} type="text" id='text' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
            </div>
            <div className="select">
              <label htmlFor="select">Select category</label><br />
              <select style={still ? { background: '#272935', color: 'white' } : { background: '#F0F6FF' }} id='select' value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                <option value="all">all</option>
                <option value="Tables">Tables</option>
                <option value="Chairs">Chairs</option>
                <option value="Kids">Kids</option>
                <option value="Sofas">Sofas</option>
                <option value="Beds">Beds</option>
              </select>
            </div>
            <div className="select">
              <label htmlFor="select">Select company</label><br />
              <select style={still ? { background: '#272935', color: 'white' } : { background: '#F0F6FF' }} id='select' value={selectedCompany} onChange={(e) => setSelectedCompany(e.target.value)}>
                <option value="all">all</option>
                <option value="Modenza">Modenza</option>
                <option value="Luxora">Luxora</option>
                <option value="Artifex">Artifex</option>
                <option value="Comfora">Comfora</option>
                <option value="Homestead">Homestead</option>
              </select>
            </div>
            <div className="slider">
              <label htmlFor="slider">Select price</label>
              <Slider defaultValue={0} max={100000} aria-label="Default" valueLabelDisplay="auto" value={selectedPrice} onChange={(e, value) => setSelectedPrice(value)} />
              <div><p>Max : $1,000.00</p></div>
            </div>
          </div>
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="products">
        {filteredData.map((e, index) => (
          <div key={index} style={still ? { background: '#272935', color: 'white' } : { background: 'white' }} onClick={() => handleProductClick(e)} className="product">
            {/* Your product display elements */}
            <img src={e.attributes.image} alt="" />
            <h1>{e.attributes.title}</h1>
            <li key={index}>{e.attributes.company}</li>
            <p>${e.attributes.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}