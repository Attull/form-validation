import './App.css';
import { useState } from 'react';

function App() {

  const initialValues = { username: "", number: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({})


  const handleChange = (e) =>{
    let  {name, value} = e.target

    console.log("name",name)
    setFormValues({...formValues, [name] : value})    
    console.log(formValues)
  }

  const validate = (e) =>{
    e.preventDefault()
    const error = {}

    if(formValues.username == ""){
        error.username = "Please provide name"
    } else if(formValues.username.length <3){
      error.username = "Please provide complete name"
    } 

    
    if(formValues.number >10){
      error.number = "Provide valid number"
    } else if(formValues.number == ""){
      error.number = "provide number"
    }

    setFormErrors(error)
    
  }
  return (
    <div className="App">
          <h1>Forms</h1>
          <form onSubmit={(e) => validate(e)}>
              <div className='inp'>
                  <lable>Name</lable>
                  <input 
                    type="text"
                    placeholder='Enter your name'
                    name="username"
                    value={formValues.username}
                    onChange={(e) => handleChange(e)}
                    />
                    <p>{formErrors.username}</p>
              </div>
              <div className='inp'>
                  <lable>Phone number</lable>
                  <input 
                    type="text"
                    name="number"
                    placeholder='Enter your number'
                    value={formValues.number}
                    onChange={handleChange}
                    />
                    <p>{formErrors.number}</p>
              </div>
              <div className='inp'>
                  <lable>Passsword</lable>
                  <input 
                    type="password"
                    name="password"
                    placeholder='Enter your password'
                    value={formValues.password}
                    onChange={handleChange}
                    />
              </div>
              <button type="btn">Submit</button>
          </form>
    </div>
  );
}

export default App;
