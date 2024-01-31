import { useEffect, useState } from "react";
import Button from "../../components/button"
import './index.css'
export default function Home(props) {
  const { still, still2, still3 } = props;

  const [homeData, setHomeData] = useState([]);

  useEffect(() => {
    fetch('https://strapi-store-server.onrender.com/api/products?featured=true')
      .then(res => res.json())
      .then(json => setHomeData(json.data))
  }, []);
  return (
    <>
      <div style={still2} className="block">
        <div className="block-left">
          <h1>We are changing the way people shop</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.</p>
          {/* <Button still={still ? { background: '#FF7AC6' } : { background: '#057AFF', color: 'white' }} text='Our Products' /> */}
          <button className="bg-green-500">Products</button>
        </div>
        <div style={still3} className="block-right">
          <div className="img">
            <img src="https://react-vite-comfy-store-v2.netlify.app/assets/hero1-deae5a1f.webp" alt="rasm yetib kelmadi" />
          </div>
          <div className="img">
            <img src="https://react-vite-comfy-store-v2.netlify.app/assets/hero2-2271e3ad.webp" alt="rasm yetib kelmadi" />

          </div>
          <div className="img">
            <img src="https://react-vite-comfy-store-v2.netlify.app/assets/hero3-a83f0357.webp" alt="rasm yetib kelmadi" />
          </div>
          <div className="img">
            <img src="https://react-vite-comfy-store-v2.netlify.app/assets/hero4-4b9de90e.webp" alt="rasm yetib kelmadi" />
          </div>
        </div>
      </div>

      <div className="featured">
        <h1>featured products</h1>
        <div style={still ? { background: 'black' } : { background: 'gray' }} className="hr"></div>
        

      </div>
      <div className="feature">
          {homeData.map((e, index) => (
            <>
              <div key={index} style={still ? { background: '#272935', color: 'white' } : { background: 'white' }} className="product">
                <img src={e.attributes.image} alt="" />
                <h1>{e.attributes.title}</h1>
                <li key={index}>{e.attributes.company}</li>
                <p>${e.attributes.price}</p>
              </div>
            </>

          ))}
        </div>
    </>

  )
}
