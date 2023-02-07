/* import ReactDOM from 'react-dom'
import './Modal.css'

export default function Modal(props) {
  return ReactDOM.createPortal((
    <div className="modal-backdrop">
        <div className="modal">
            {props.children}
            <button onClick={props.handleClose}>close</button>
            <p> </p>
        </div>      
    </div>  
  ), document.body)
}
*/