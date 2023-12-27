import './index.css'

export default function Button(props) {
  const {text,still, buttonclick} = props;
  return (
    <div>
      <button type='submit' onClick={buttonclick} style={still} >{text}</button>
    </div>
  )
}
