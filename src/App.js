import React, { useState, useRef } from "react";

const User = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [password, setPassword] = useState('')


  const dateRef = useRef(null)
  const cvcRef = useRef(null);

  const handleInput = (e) =>{
    const val = e.target.value;
    setCardNumber(val);
    if(val.length === 16){
      cvcRef.current.focus()
    }
  }

  const handleInputPassword = (e) =>{
    const value = e.target.value;
    setPassword(value);
    if(value.length === 3){
      dateRef.current.focus()
    }
  }


  return(
    <div className="w-50 mx-auto">
        <div className="border p-3 mt-5">
          <div className="d-flex justify-content-center flex-column">
            <input type="text" className="form-control" placeholder="Card Number..." onChange={handleInput} value={cardNumber} />
            <input ref={cvcRef} type="text" className="form-control mt-2" placeholder="Password..." onChange={handleInputPassword} value={password}/>
            <input ref={dateRef} type="text" className="form-control mt-2" placeholder="Month/Year" />
          </div>
        </div>
    </div>
  )
}


function App() {

  
  return (   
    <>
      <User />
    </>
  );
}

export default App;
