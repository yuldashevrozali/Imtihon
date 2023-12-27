import { useEffect, useState } from 'react';
import './index.css';
import Slider from '@mui/material/Slider';
import { Link } from '@mui/material';

export default function Products(props) {
  const { still } = props;
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCompany, setSelectedCompany] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [sortOption, setSortOption] = useState('all');
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    fetch('https://strapi-store-server.onrender.com/api/products')
      .then(res => res.json())
      .then(json => {
        setData(json.data);
        setFilteredData(json.data);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }, []);

  const handleProductClick = (product) => {
    alert(product.attributes.title);
    setDisplay(true);
  };

  const handleSearch = (event) => {
    event.preventDefault();

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

    if (sortOption === 'a-z') {
      updatedData.sort((a, b) => a.attributes.title.localeCompare(b.attributes.title));
    } else if (sortOption === 'z-a') {
      updatedData.sort((a, b) => b.attributes.title.localeCompare(a.attributes.title));
    } else if (sortOption === 'high') {
      updatedData.sort((a, b) => parseFloat(b.attributes.price) - parseFloat(a.attributes.price));
    } else if (sortOption === 'low') {
      updatedData.sort((a, b) => parseFloat(a.attributes.price) - parseFloat(b.attributes.price));
    }

    setFilteredData(updatedData);

    if (!searchInput) {
      setFilteredData(data);
    }
  };

  const handleReset = () => {
    setSearchInput('');
    setSelectedCategory('all');
    setSelectedCompany('all');
    setSelectedPrice(0);
    setSortOption('all');
    setFilteredData(data);
  };

  return (
    <div style={display ? { display: 'none' } : { display: 'block' }}>
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
                  {/* ...Option tags */}
                </select>
              </div>
              <div className="select">
                <label htmlFor="select">Select company</label><br />
                <select style={still ? { background: '#272935', color: 'white' } : { background: '#F0F6FF' }} id='select' value={selectedCompany} onChange={(e) => setSelectedCompany(e.target.value)}>
                  {/* ...Option tags */}
                </select><br />
              </div>
              <div className="select">
                <label htmlFor="select">Sort by</label><br />
                <select style={still ? { background: '#272935', color: 'white' } : { background: '#F0F6FF' }} value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                  <option value="all">All</option>
                  <option value="a-z">A-Z</option>
                  <option value="z-a">Z-A</option>
                  <option value="high">Price - High to Low</option>
                  <option value="low">Price - Low to High</option>
                </select><br />
              </div>
            </div>
            <div className="form-bottom">
            <Slider defaultValue={0} max={100000} aria-label="Default" valueLabelDisplay="auto" value={selectedPrice} onChange={(e, value) => setSelectedPrice(value)} />
              
              <button style={still ? { background: '#FFB86B' } : { background: '#057AFE', color: 'white' }} type="submit">Search</button>
              <input style={still ? { background: '#FFB86B' } : { background: '#BF48AC', color: 'white' }} type="button" value="Reset" onClick={handleReset} />
            </div>
            <div style={{ marginLeft: '-1000px' }}><p>Max : $1,000.00</p></div>
          </form>
        </div>
        <div className="products">
          {/* Display filtered data */}
          {filteredData.map((e, index) => (
            <div key={index} style={still ? { background: '#272935', color: 'white' } : { background: 'white' }} onClick={() => handleProductClick(e)} className="product">
              {/* Display product details */}
              <img src={e.attributes.image} alt="" />
              <h1>{e.attributes.title}</h1>
              <li key={index}>{e.attributes.company}</li>
              <p>${e.attributes.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='blok' style={display ? { display: 'block' } : { display: 'none' }}></div>
    </div>
  );
}
