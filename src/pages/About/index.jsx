import './index.css'

export default function About(props) {
  const { still, still2 } = props;
  return (
    <>
      <div className='About' style={still}>
        <h1>We love <span style={still2}>comfy</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae quam blanditiis vitae, dolor non eveniet ipsum voluptatibus, quia optio aut! Perferendis ipsa cumque ipsam nostrum reprehenderit ad illo sed officiis ea tempore! Similique eos minima sit porro, ratione aspernatur!</p>
      </div>
    </>

  )
}
