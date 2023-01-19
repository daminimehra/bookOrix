import axios from 'axios';
import {useState} from 'react';
// import baseAdminURL from '../../../constants'
import DataTable from 'react-data-table-component';
function Showcategory(props){
    const [data, setData] = useState([]);
     
    const loadCategory = ()=>{
        let baseAdminURL = "http://localhost:3008/api"
        axios.post(baseAdminURL+"/category/all",{},{headers:{ 'content-type': 'application/x-www-form-urlencoded' }})
        .then(({data})=>{
            alert();
            setData(data.data)
            console.log("Welcome2",data.data)
        })
        .catch(({err})=>{
            console.log("Error in Error",err)
        })
    }
   
    return(
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Menu Description</th>
                        <th>Price</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>
            <tbody>
            { data.map((catname, index)=> (


            <tr  key={index+1}>
                <td>{index+1}</td>
                <td>{catname.name}</td>
                <td>{catname.categoryId}</td>
                <td>{catname.image}</td>
                
                {/* <td><button className="btn btn-outline-danger"
                onClick={()=>this.deleteUser(menu._id)}
                >Trash</button></td>
                <td><Link to={"/EditMenu/"+menu._id} ><button className="btn btn-outline-primary">Edit</button></Link></td>
                 */}
                
            </tr>

                ))}
            </tbody>

        </table>
        </>
    )
}
export default Showcategory;