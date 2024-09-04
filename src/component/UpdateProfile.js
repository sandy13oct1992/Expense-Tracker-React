import { useState } from "react"


const UpdateProfile = () =>{
    const [name, setName] =useState('');
    const [photoURL, setPhotoURL] = useState('');

    const nameChangeHandler = (e) => {
     setName(e.target.value);
    }

    const urlChangeHandler = (e) => {
    setPhotoURL(e.target.value);
    }

  const handleUpdation = () => {
    const dataObj = {
        name : name,
        photoURL: photoURL,
        id:Date.time(),
    }
    // const response = axios.
  }
    return(
        <div>
            <h1>Contact Details</h1>
            <label>Full Name:</label>
            <input type='text' value={name} onChange={nameChangeHandler} />
            <label>Profile Photo URL</label>
            <input type='text'value={photoURL} onChange={urlChangeHandler}/>
            <button>Update</button>
            <button>Cancel</button>
        </div>
    )
}
export default UpdateProfile;