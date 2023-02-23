import { useState } from 'react'
import Button from "./components/Button";
import Modal from "./components/Modal";
import { Link } from 'react-router-dom'


export default function App() {

  const [ modal, setModal ] = useState(false);

  return (
    <div>

      <Link to='registration_form'
      style={{textDecoration:'none'}}>

      <Button 
      color='yellow' 
      onClick= {() => setModal(true)}
      >
        Open modal window
        </Button>

      </Link>

      <Modal modal={modal} setModal={setModal}/>

    </div>
  );
}
