//Step 3 : setup frontend
//import rect, axios
import react ,{useState} from 'react';
import axios from 'axios';

//basic data
function App(){
    //store current values , and update values
    const[formdata,setFormdata] = useState({
        name: '',
        age: '',
        marks:''
    });

    // update values trigger function
    const changedata = (e) => {
        setFormdata({...formdata, [e.target.name]:e.target.value});
    };

    //submit trigger
    const submitdata = async(e) => {
        e.preventDefault();    //stop bowser from refereshing page
        await
        axios.post('http://localhost:5000/student',formdata);   //send formdata to backend post endpoint
        alert("Data Submitted !!");
    };

    //make html
    return(
        <div style={{padding:20}}>
            <h2>Enter Your Details Below</h2>
            <form onSubmit={submitdata}>
                Enter your Name : <input name="name" placeholder='enter name here...' onChange={changedata}/><br/>
                Enter your Age : <input name="age" placeholder='enter age here...'  type="number" onChange={changedata}/><br/>
                Enter your Marks : <input name="marks" placeholder='enter marks here...' type="number" onChange={changedata}/><br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
  
} //closing the App function
export default App;
