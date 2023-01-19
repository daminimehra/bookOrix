import axios from 'axios';
import React,{Component} from 'react';
import {Link,Navigate} from 'react-router-dom';
import DataTable from 'react-data-table-component';
import { baseAdmin,token } from '../../../config/config';
import { baseImageUrl } from '../../../config/config';
import ClipLoader from "react-spinners/ClipLoader";
import EditCategory from './Editcategory'
class Showsubcategory extends Component{
    constructor(props) {
        super(props);
        this.state = {
            categories:[],
            readyToRedirect: false,
            loading:true,
            css:{
                "display": "block",
                "margin": "0 auto",
                "border-color": "red",
            }
        };

     }
    componentDidMount()
	{
        
        this.setState({loading:true})
        let baseAdminURL = baseAdmin
        axios.post(baseAdminURL+"/category/all",{},{headers:{ 'content-type': 'application/x-www-form-urlencoded'
        ,'authorization':token }})
        .then(response=>response.data)
		.then((data) => {
            this.setState({loading:false})

			if(data.data.length>0){
				this.setState({categories:data.data})
			}	
			else{ 
                console.log("Error in Error") 
			}
		})
        .catch((err)=>{
            this.setState({loading:false})
            
        })
		
	}
    deleteCat = (id)=>{
        let x = window.confirm("Do you want to continue");
        if(x==true){
            this.setState({loading:true})
            let baseAdminURL = baseAdmin
            axios.post(baseAdminURL+"/category/update",{},{headers:{ 'content-type': 'application/x-www-form-urlencoded'
            ,'authorization':token }})
            .then(response=>response.data)
            .then((data) => {
                this.setState({loading:false})

                if(data.data.length>0){
                    this.setState({categories:data.data})
                }	
                else{ 
                    console.log("Error in Error") 
                }
            })
            .catch((err)=>{
                this.setState({loading:false})
                
            })
        }
    }   
    render()
	{
        if (this.state.readyToRedirect) return <Navigate to="/" />
        if(this.state.loading){
            return <>
            <ClipLoader loading={this.state.loading} css={this.state.css} size={150} />
            </>            
        }else{
            return(
                <>
                    <Link to="/admin/addcategory" className="btn btn-primary pull-right">
                            Add Category
                    </Link>
                        
                    {/* <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                ...
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Understood</button>
                            </div>
                            </div>
                        </div>
                    </div> */}
        
                    <table className="table">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Category Name</th>
                                <th>Image</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                    <tbody>
                    { this.state.categories.map((catname, index)=> (
                        <tr  key={index+1}>
                            <td>{index+1}</td>
                            <td>{catname.name}</td>
                            <td><img src={`${baseImageUrl}/${catname.image}`} alt="Image"
                             style={{width:"50px"}}/>
                            </td>
                            
                            {/* <td><button className="btn btn-outline-danger"
                            onClick={()=>this.deleteCat(catname._id)}
                            >Trash</button></td> */}
                            <td><Link to={"/admin/editCat/"+catname._id} className="btn btn-outline-primary btn-danger">Edit</Link></td>
                                              
                        </tr>
        
                        ))
                    }     
                    </tbody>
        
                </table>
                </>
                )   
        }
        

    }
}
export default Showsubcategory;