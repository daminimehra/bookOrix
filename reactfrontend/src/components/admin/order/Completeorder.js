import axios from 'axios';
import React,{Component} from 'react';
import {Link,Navigate} from 'react-router-dom';
import DataTable from 'react-data-table-component';
import { baseAdmin,token } from '../../../config/config';
import { baseImageUrl } from '../../../config/config';
import BeatLoader from "react-spinners/BeatLoader";
import qs from 'qs';
class Completeorder extends Component{
    constructor(props) {
        super(props);
        this.state = {
            orders:[],
            readyToRedirect: false,
            loading:true,
            css:{
                "display": "block",
                "margin": "0 auto",
                "border-color": "blue",
                "margin-left":"600px"
            }
        };

     }
    componentDidMount()
	{
        console.log("In MOUNT")
        this.setState({loading:true})
        let baseAdminURL = baseAdmin
        axios.post(baseAdminURL+"/order/all",qs.stringify({orderStatus:3}),{headers:{ 'content-type': 'application/x-www-form-urlencoded'
        ,'authorization':token }})
        .then(response=>response.data)
		.then((data) => {
            this.setState({loading:false})
            console.log("order Data",data.data)
			if(data.data.length>0){
				this.setState({orders:data.data})
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
                    this.setState({orders:data.data})
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
    changerstatus = (e)=>{
        let status = e.target.value
    }
    render()
	{
        if (this.state.readyToRedirect) return <Navigate to="/" />
        if(this.state.loading){
            return <>
            <BeatLoader loading={this.state.loading} css={this.state.css} size={15} />
            </>            
        }else{
            return(
                <>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Book Detail</th>
                                <th>Seller Detail</th>
                                <th>Address</th> 
                                <th>Status</th> 
                                <th>User Detail</th> 
                                <th>Total Amount</th> 
                                <th>Change Status</th> 
                            </tr>
                        </thead>
                    <tbody>
                    { this.state.orders.map((order, index)=> (
                        <tr  key={index+1}>
                            <td>{index+1}</td>
                            <td>{order.bookId.name}
                                <img src={`${baseImageUrl}/${order.bookId.image}`} alt="Image"
                             style={{width:"30px"}}/>
                             </td>
                            <td>{order.sellerId.name}</td>
                            <td>{order.address}</td>
                            <td>
                                {
                                    order.orderStatus==1?"Placed": order.state==2?"Confirmed":"Shipped"
                                }
                            </td>
                            <td>{order?.userId?.name}<br/>{order?.userId?.email}</td>
                            
                            <td>{order.amountTotal}</td>
                            
                            <td>
                                {/* <select onChange={this.changerstatus}>
                                    <option value="1">Placed</option>
                                    <option value="2">Confirmed</option>
                                    <option value="3">Shipped</option>
                                </select> */}
                            </td>
                            
                            {/* <td><Link to={"/admin/editCat/"+order._id} className="btn btn-outline-primary btn-danger">Edit</Link></td> */}
                                              
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
export default Completeorder;