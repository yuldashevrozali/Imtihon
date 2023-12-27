import { useEffect, useState } from 'react';
import Button from '../../components/button';
import './index.css'
import Slider from '@mui/material/Slider';

export default function Products(props) {
  const { still } = props;
  const [data, setData] = useState([]);

  function handleproduct(e) {
    alert(e.attributes.category)
  }

  function handleclick(){
    alert('hello')
  }

  useEffect(() => {
    fetch('https://strapi-store-server.onrender.com/api/products')
      .then(res => res.json())
      .then(json => {
        setData(json.data);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }, []);

  console.log(26, data);

  return (

    <div style={still ? {background: '#272935', color: 'white'} : { background: 'white' } }  className='product-block' >
      <div className='products-block' style={still ? {background: '#272935', color: 'white'} : { background: 'white' } } >
        <form style={still ? {background: '#181920'} : { background: '#F0F6FF' }}>
          <div className="form-top">
            <div className="input">
              <label htmlFor="search">Search product</label><br />
              <input value style={still ? { background: '#272935', color: 'white' } : { background: '#F0F6FF' }} type="text" id='text' />
            </div>
            <div className="select">
              <label htmlFor="select">Select category</label><br />
              <select style={still ? { background: '#272935', color: 'white' } : { background: '#F0F6FF' }} id='select'>
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
              <select style={still ? { background: '#272935', color: 'white' } : { background: '#F0F6FF' }} id='select'>
                <option value="all">all</option>
                <option value="Modenza">Modenza</option>
                <option value="Luxora">Luxora</option>
                <option value="Artifex">Artifex</option>
                <option value="Comfora">Comfora</option>
                <option value="Homestead">Homestead</option>
              </select>
            </div>
            <div className="select">
              <label htmlFor="select">Sort by</label><br />
              <select style={still ? { background: '#272935', color: 'white' } : { background: '#F0F6FF' }} id='select'>
                <option value="a-z">a-z</option>
                <option value="z-a">z-a</option>
                <option value="high">high</option>
                <option value="low">low</option>
              </select>
            </div>
          </div>
          <div className="form-bottom">
            <div className="slider">
              <label htmlFor="slider">Select price</label>
              <Slider defaultValue={0} max={1000} aria-label="Default" valueLabelDisplay="auto" />
              <div><p>Max : $1,000.00</p></div>
            </div>
            <div className="form-checkbox">
              <label htmlFor="checkbox">free shipping</label><br />
              <input type="checkbox" id="checkbox" />
            </div>

            <div className="button">
              <Button buttonclick = {handleclick} still={still ? { background: '#FF7AC6', width: '200px', hover: '#000DFF' } : { background: '#057AFF', color: 'white', width: '250px', hover: '#000DFF' }} text='Search' />
              <Button still={still ? { background: '#FFB86B', width: '200px' } : { background: '#C149AD', color: 'white', width: '250px' }} text='Reset' />
            </div>

          </div>
        </form>
      </div>
      <h4 style={still ? {background: '#272935', color: 'white'} : { background: 'white' }} >22 products</h4>
      <div style={still ? { background: 'black' } : { background: 'gray'}} className="hr"></div>

      <div style={still ? { background: '#272935', color: 'white' } : { background: 'white' }} className="products">

        {data.map((e, index) => (
          <>
            <div key={index} style={still ? { background: '#272935', color: 'white' } : { background: 'white' }} onClick={handleproduct} className="product">
              <img src={e.attributes.image} alt="" />
              <h1>{e.attributes.title}</h1>
              <li key={index}>{e.attributes.company}</li>
              <p>${e.attributes.price}</p>
            </div>
          </>

        ))}
      </div>
    </div >

  )
}
