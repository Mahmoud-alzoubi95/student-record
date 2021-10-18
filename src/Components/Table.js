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
            {/* <h> Add New Student</h> */}
            <form onSubmit={handleFormSubmit}>
                <input type="text" name="name" required="required" placeholder="First and last name" onChange={handleAddFormChange}/>
                <input type="text" name="dateOfBarth" required="required" placeholder="day/month/year" onChange={handleAddFormChange}/>
                <input type="text" name="nationality" required="required" placeholder="Nationality" onChange={handleAddFormChange}/>
                <input type="number" name="GPA1" required="required" placeholder="GPA last year" onChange={handleAddFormChange}/>
                <input type="number" name="GPA2" required="required" placeholder="GPA this year" onChange={handleAddFormChange}/>
                <button type="submit">Submit Adding</button>
            </form>
            <TableOfData studentdata={contacts} datachange={handleFormSubmit} />
        </div>
    )
}


const TableOfData =({datachange,studentdata})=>{
    // console.log(studentdata)
    const[searchValue, setsearchValue]=useState("");
    
    return(
        <div>
        <input type="text" placeholder="search by name" onChange={(event=>{setsearchValue(event.target.value)})}/>
        {/* {console.log(searchValue)} */}
        <thead>
            <tr>
                <th>Name</th>
                <th>date of birth</th>
                <th>nationality</th>
                <th>GPA last year</th>
                <th>GPA this year</th>
            </tr>
        </thead>
        {
            
            studentdata.filter((contact)=>{
                if(searchValue==""){
                    // console.log(studentdata)
                    return contact
                }else if(contact.name.toLowerCase().includes(searchValue.toLowerCase())){
                    return contact
                }
            }).map((contact)=>{
                return(
                    <table>

                        <tbody>
                            {/* {studentdata.map((contact)=> */}
                            <tr>
                                <th onChange={datachange}>{contact.name}</th>
                                <th onChange={datachange}>{contact.dateOfBarth}</th>
                                <th onChange={datachange}>{contact.nationality}</th>
                                <th onChange={datachange}>{contact.GPA1}</th>
                                <th onChange={datachange}>{contact.GPA2}</th>
                            </tr>
                            {/* )} */}
                        </tbody>
                    </table>
                );
            })
        }
        
    </div>
    )
}



export default Table