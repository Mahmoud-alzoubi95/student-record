import React ,{useState} from "react";
import "./Table.css"
import data from "./mockdata.json"


const Table = () =>{

    const [contacts,setContacts]=useState(data)
    const [addFormdata,setaddFormdata]=useState({
        name:'',
        dateOfBarth:'',
        nationality:'',
        GPA1:'',
        GPA2:'',
    })


const handleAddFormChange = (event) => {
        event.preventDefault();
    
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
    
        const newFormData = { ...addFormdata };
        newFormData[fieldName] = fieldValue;
    
        setaddFormdata(newFormData);
      };

      const handleFormSubmit = (event) =>{
          event.preventDefault();

          const newValue={
            name:addFormdata.name,
            dateOfBarth:addFormdata.dateOfBarth,
            nationality:addFormdata.nationality,
            GPA1:addFormdata.GPA1,
            GPA2:addFormdata.GPA2,
          }

          const newContacts = [...contacts,newValue]
          setContacts(newContacts);
      }
    return(
        <div className="Tablecontainer"> 
            <h> Add New Student</h>
            <form onSubmit={handleFormSubmit}>
                <input type="text" name="name" required="required" placeholder="First and last name" onChange={handleAddFormChange}/>
                <input type="text" name="dateOfBarth" required="required" placeholder="day/month/year" onChange={handleAddFormChange}/>
                <input type="text" name="nationality" required="required" placeholder="Nationality" onChange={handleAddFormChange}/>
                <input type="number" name="GPA1" required="required" placeholder="GPA last year" onChange={handleAddFormChange}/>
                <input type="number" name="GPA2" required="required" placeholder="GPA this year" onChange={handleAddFormChange}/>
                <button type="submit">Submit Adding</button>
            </form>

            <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>date of birth</th>
                <th>nationality</th>
                <th>GPA last year</th>
                <th>GPA this year</th>
            </tr>
        </thead>
        <tbody>
            {contacts.map((contact)=>
            <tr>
                <th>{contact.name}</th>
                <th>{contact.dateOfBarth}</th>
                <th>{contact.nationality}</th>
                <th>{contact.GPA1}</th>
                <th>{contact.GPA2}</th>
            </tr>
            )}
        </tbody>
    </table>
        </div>
    )
}




export default Table