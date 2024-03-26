import {useState} from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({firstName: "", lastName: "", email: "", country: "India", address: "", city: "", state: "", Pin: "", comments: false, candidates: false, offers: false, Notifications: ""})
  console.log(formData)
  function changeHandler(event){
    const {name,type,value,checked} = event.target;
    setFormData((prevData)=>{
      return{
        ...prevData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }
  function submitHandler(event){
    event.preventDefault();
    console.log(formData)
  }
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <label htmlFor='fname'>First Name</label>
        <br/>
        <input onChange={changeHandler} name='firstName' value={formData.firstName} type='text' placeholder='Sumit' id='fname'/>
        <br/><br/>
        <label htmlFor='lname'>Last Name</label>
        <br/>
        <input onChange={changeHandler} name='lastName' value={formData.lastName} type='text' placeholder='Tiwari' id='lname'/>
        <br/><br/>
        <label htmlFor='address'>Email address</label>
        <br/>
        <input onChange={changeHandler} name='email' value={formData.email} type='email' placeholder='sumit@gmail.com' id='address'/>
        <br/><br/>
        <label htmlFor='cnt'>Country</label>
        <br/>
        <select onChange={changeHandler} name='country' value={formData.country} id='cnt'>
          <option>India</option>
          <option>United State</option>
          <option>United Kingdom</option>
          <option>Germany</option>
        </select>
        <br/><br/>
        <label htmlFor='street'>street address</label>
        <br/>
        <input onChange={changeHandler} name='address' value={formData.address} type='text' placeholder='C.E.L Jhandapur' id='street'/>
        <br/><br/>
        <label htmlFor='city'>City</label>
        <br/>
        <input onChange={changeHandler} name='city' value={formData.city} type='text' placeholder='Ghaziabad' id='city'/>
        <br/><br/>
        <label htmlFor='ste'>State</label>
        <br/>
        <input onChange={changeHandler} name='state' value={formData.state} type='text' placeholder='Uttar Pradesh' id='ste'/>
        <br/><br/>
        <label htmlFor='cde'>Postal Code</label>
        <br/>
        <input onChange={changeHandler} name='Pin' value={formData.Pin} type='text' placeholder='201010' id='cde'/>
        <br/><br/>
        <label>By Email</label>
        <br/>
        <input onChange={changeHandler} name='comments' checked={formData.comments} type='checkbox' id='Cmt'/>
        <label htmlFor='Cmt'>Comments</label>
        <br/><br/>
        <input onChange={changeHandler} name='candidates' checked={formData.candidates} type='checkbox' id='Cnd'/>
        <label htmlFor='Cnd'>Candidates</label>
        <br/><br/>
        <input onChange={changeHandler} name='offers' checked={formData.offers} type='checkbox' id='offr'/>
        <label htmlFor='offr'>Offers</label>
        <br/><br/>
        <h1>Push Notifications</h1>
        <br/>
        <p>Thes are delivered via SMS to your mobile phone</p>
        <br/><br/>
        <input onChange={changeHandler} type='radio' value="Everything" name='Notifications' id='Everything'/>
        <label htmlFor='Everything'>Everything</label>
        <br/>
        <input onChange={changeHandler} type='radio' value="same as email" name='Notifications' id='same as email'/>
        <label htmlFor='same as email'>same as email</label>
        <br/>
        <input onChange={changeHandler} type='radio' value="No push notifications" name='Notifications' id='No push notifications'/>
        <label htmlFor='No push notifications'>No push notifications</label>
        <br/><br/>
        <button>Save</button>
        <br/><br/>
      </form>
    </div>
  );
}

export default App;
