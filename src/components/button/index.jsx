import './index.css'

export default function Button(props) {
  const {text,still, buttonclick} = props;
  return (
    <div>
      {/* <button type='submit' onClick={buttonclick} className='btn-neutral' ></button> */}
      <button className="btn bg-green-500">{text}</button>
    </div>
  )
}
