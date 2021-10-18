import React ,{useState, setState} from "react";
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

      const [show,setShow]=useState(false)

    return(
        <div className="Tablecontainer"> 
            {/* <h> Add New Student</h> */}
            <button onClick={()=>setShow(!show)}>Add new student</button>
            {show?
            <form onSubmit={handleFormSubmit}>
                <input type="text" name="name" required="required" placeholder="First and last name" onChange={handleAddFormChange}/>
                <input type="text" name="dateOfBarth" required="required" placeholder="day/month/year" onChange={handleAddFormChange}/>
                <input type="text" name="nationality" required="required" placeholder="Nationality" onChange={handleAddFormChange}/>
                <input type="number" name="GPA1" required="required" placeholder="GPA last year" onChange={handleAddFormChange}/>
                <input type="number" name="GPA2" required="required" placeholder="GPA this year" onChange={handleAddFormChange}/>
                <button type="submit">Submit Adding</button>
            </form>:null}
            <TableOfData studentdata={contacts} datachange={handleFormSubmit} />
            <Report studentdata={contacts} datachange={handleFormSubmit}/>
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


const Report = ({datachange,studentdata})=>{
    // console.log(studentdata)
   let sum1=0
   let sum2=0
   let avg1=0
   let avg2=0
   let numStudent=0
   let jordainian=0
   let other=0
   const [show,setShow]=useState(false)
    return(
        <div>
            {studentdata.map((value , c)=>{
                sum1=sum1+parseInt(value.GPA1)
                sum2=sum2+parseInt(value.GPA2)
                console.log(sum1,sum2)
                numStudent=c+1
                avg1=sum1/numStudent
                avg2=sum2/numStudent
                if(value.nationality.toLowerCase() == "jordainian"){
                    jordainian=jordainian+1
                }else{other=other+1}
            })}
            <button onClick={()=>setShow(!show)}>Summery</button>
          {show ? <div> 
                <h3>Report of the records:</h3>
                <p>Student Number is: {numStudent}</p>
                <p>The average of GPA last year is: {avg1}</p>
                <p>The average of GPA this year is: {avg2}</p>
                <p>Jordainian nationality students: {jordainian}</p>
                <p>Other nationality students: {other}</p>
            </div>:null}
    </div>
    )
}

export default Table