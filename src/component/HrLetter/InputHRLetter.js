import React, { Component } from 'react'
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";
import Home from '../home';
import { withRouter } from 'react-router-dom';
import $ from 'jquery'
import moment from 'moment';

export class InputHRLetter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            salute:'Mr.',
            employeeName: '',
            employeeId: '',
            joiningDate: '',
            date: '',
            CIN: '',
            designation: '',
            withWaterMark:false,
            withHeader:false,
            gender : {
                gender1:'He',
                gender2:'him',
                gender3:'his'
            },

            // valiadation state variables
            showEmployeeName: '',
            showEmployeeId: '',
            showJoiningDate: '',
            showDate: '',
            showCIN: '',
            showDesignation: '',
            validDate:''
        }
    }
   
    
    componentDidMount() {

        let editClick=localStorage.getItem("editClick");
            if(editClick)
            {
                this.setState({
               
                salute: this.props.empData.salute,
                employeeName: this.props.empData.employeeName,
                employeeId:this.props.empData.employeeId,
                designation: this.props.empData.designation,
                joiningDate: this.props.empData.joiningDate
            })
           
        } 

        var that = this;
        $(document).ready( ()=> {
            $('#generate').click( (e) =>{
               
           
               
                const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
              ];
        
        
              const nth = (d)=> {
                if (d > 3 && d < 21) return 'th';
                switch (d % 10) {
                  case 1:  return "st";
                  case 2:  return "nd";
                  case 3:  return "rd";
                  default: return "th";
                }
              }
                  
                let today = new Date();
                let currentdate = today.getDate()+nth(today.getDate()) + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
                this.setState({
                    date:  today
                })

                var d = new Date();
                 
                if (this.state.salute === "Ms." || this.state.salute === "Mrs.") {
                    this.setState({
                        ...this.state,
                        gender : {
                            gender1:'She',
                            gender2:'her',
                            gender3:'her' 
                        }
                    })
                 }

               
                 let joiningDate = (document.getElementById("joiningDate").value).trim();
                 let designation = (document.getElementById("designation").value).trim();
                 let employeeId = (document.getElementById("employeeId").value).trim();
                 let employeeName = (document.getElementById("employeeName").value).trim();
                 let selectedDate =new Date(joiningDate)
                 let now = new Date()
                 
            
 
                
                 if (joiningDate === "") {
                     this.setState({ showJoiningDate: true })
                 }
                 if (designation === "") {
                     this.setState({ showDesignation: true })
                 }
                 if (employeeId === "") {
                     this.setState({ showEmployeeId: true })
                 }
                 if (employeeName === "") {
                     this.setState({ showEmployeeName: true })
                 }

             
                   
                 if ( joiningDate != "" && designation != "" && employeeId != "" && employeeName !== "") {
                    
                  
                     return true;
                 }
                 else {
                     return false;
                 }
            });
        });
    }

    
    hideEmployeeName = () => {
        this.setState({
            showEmployeeName: false
        })
    }
    hideEmployeeId = () => {
        this.setState({
            showEmployeeId: false
        })
    }
    hideJoiningDate = () => {
        this.setState({
            showJoiningDate: false
        })
    }
    hideCIN = () => {
        this.setState({
            showCIN: false
        })
    }
    hideDesignation = () => {
        this.setState({
            showDesignation: false
        })
    }
    hideInvaliddate=()=>{
        this.setState({
            validDate: false
        })

    }

     onCheckHandler=(event)=>{
       
         
        if(event.target.value=='false'){
            this.setState({
                withWaterMark:true
            })
          
        }
        else{
            
            this.setState({
                withWaterMark: false
            })
       

        }
     }

     onChangeHeader=(event)=>{

     

      
      if(event.target.value=='false'){
          this.setState({
              withHeader:true
          })
        
      }
      else{
         
          this.setState({
              withHeader: false
          })
        

      }


     }


    pass = (event) => {
        event.preventDefault();
      
        

        this.props.clicked(this.state)
       this.props.history.push('/hrLetter')

    }

    
//
    render() {
        
        return (
            <div>
                <Home buttonShow={false}  />
                <div >
                    <div className="container-fluid mt-5">
                        <div className="row">
                            <div className="col-auto container mt-5 pb-5">
                                <div style={{ width: '500px' }} className="card m-auto shadow-lg mt-5">
                                    <div class="card-header" style={{ borderRadius: '0px !important', background: 'white' }} >
                                        <h3 className="text-center black-text font-bold ">HR Letter</h3>
                                    </div>
                                    <div className="card-body ">
                                        <form onSubmit={this.pass}>

                                            <div className="row">

                                            <div className="col-md-3" style={{ paddingTop: '25px' }}>
                                                    <select class="browser-default custom-select" autocomplete="off"   value={this.state.salute} name="salute" title="salutation" id="salutation" required onChange={(event) => {
                                                        this.setState({
                                                            salute: event.target.value
                                                        })
                                                    }}>
                                                        <option value="Mr.">Mr.</option>
                                                        <option value="Ms.">Ms.</option>
                                                        <option value="Mrs.">Mrs.</option>
                                                    </select>
                                                    
                                                </div>
                                                <div className="col-9">
                                                    <MDBInput autocomplete="off"  onKeyPress={this.hideEmployeeName} 
                                                    value={this.state.employeeName} label="Employee Name" className="w-100" name="employeeName" title="Employee Name" id="employeeName" onChange={(event) => {
                                                        this.setState({
                                                            employeeName: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                            </div>
                                            <div className="row" style={{padding:0}}>
                                               <div className="col-3 p-0" >
                                               
                                               </div>
                                               <div className="col-9 p-0" style={{width:0}}>
                                               {this.state.showEmployeeName ? <div id="errordiv" className="container-fluid">Please fill out Name field * </div> : null}
                                               </div>
                                           </div>

                                            <div className="row">
                                                <div className="col-6">
                                                    <MDBInput autocomplete="off"  onKeyPress={this.hideEmployeeId}  value={this.state.employeeId} label="Employee Id" name="employeeId" id="employeeId" title="Employee Id" onChange={(event) => {
                                                        this.setState({
                                                            employeeId: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                                <div className="col-6">
                                                    <MDBInput autocomplete="off"  onKeyPress={this.hideDesignation} 
                                                    value={this.state.designation} label="Designation" name="designation" id="designation" title="Designation" onChange={(event) => {
                                                        this.setState({
                                                            designation: event.target.value
                                                        })
                                                    }} />
                                                    </div>
                                            </div>
                                            <div className="row" style={{padding:0}}>
                                               <div className="col-6 p-0" >
                                               {this.state.showEmployeeId ? <div id="errordiv" className="container-fluid">Please fill out ID field * </div> : null}
                                           
                                               </div>
                                               <div className="col-6 p-0" style={{width:0}}>
                                               {this.state.showDesignation ? <div id="errordiv" className="container-fluid">Please fill Designation field * </div> : null}
                                               </div>
                                           </div>

                                            <div className="row">
                                                <div className="col-12">
                                                    <MDBInput autocomplete="off"  type="date" value={this.state.joiningDate} onKeyPress={()=>{this.hideJoiningDate();this.hideInvaliddate()}}  onClick={()=>{this.hideJoiningDate();this.hideInvaliddate()}} label="Joining Date" title="Joining Date" name="Joining Date" id="joiningDate" onChange={(event) => {
                                                        this.setState({
                                                            joiningDate: event.target.value
                                                        });this.hideJoiningDate();this.hideInvaliddate();
                                                    }} />
                                                </div>
                                               
                                            </div>
                                            <div className="row" style={{padding:0}}>
                                                   <div className="col-12 p-0">
                                                   {this.state.showJoiningDate ? <div id="errordiv" className="container-fluid">Please fill out JoiningDate field * </div> : null}
                                               
                                                   </div>
                                                  
                                            </div>


                                         
                                    
                                            <div className=" input-group w-50 container-fluid">
                                                <MDBBtn outline type="submit" id="generate" outline className=" form-control-plaintext  justify-content-center text-center" color="primary">Generate</MDBBtn>

                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

               


   



            </div>
        )
    }
}

export default withRouter(InputHRLetter)