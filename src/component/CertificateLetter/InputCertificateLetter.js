import React, { Component } from 'react'
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";
import Home from '../home';
import { withRouter } from 'react-router-dom';
import $ from 'jquery'
import { MDBFormInline } from 'mdbreact';
export class InputCertificateLetter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employeeName: '',
            companyLocation: '',
            certificateType: '',
            date: '',
            checkedPUC:'',
            checkedSSC:'',
            CheckedDegree:'',
            withWaterMark:false,
            withHeader:false,

            //validation variable

            showEmployeeName: '',
            showCompanyLocation: '',
            showCertificateType: '',
            showOthers:false,
            showOthers:false,
        }
    }

    componentDidMount() {




        if ($('#puc').is(":checked")){

             console.log("Checked puc")
            this.setState({
                checkedPUC:'PUC'
            })

        }


        let that = this;
        $(document).ready(function () {
            $('#generate').click(function (e) {
                debugger;


                const monthNames = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"
                ];


                const nth = (d) => {
                    if (d > 3 && d < 21) return 'th';
                    switch (d % 10) {
                        case 1: return "st";
                        case 2: return "nd";
                        case 3: return "rd";
                        default: return "th";
                    }
                }
                let today = new Date();
                let currentdate = today.getDate() + nth(today.getDate()) + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
                that.setState({
                    date: currentdate
                })


                // let companyLocation = (document.getElementById("companyLocation").value).trim();
                let employeeName = (document.getElementById("employeeName").value).trim();
               
               
                // if (companyLocation === "") {
                //     that.setState({ showCompanyLocation: true })
                // }

              

                if (employeeName === "") {
                    that.setState({ showEmployeeName: true })
                }


                /*   if (companyLocation != "" && employeeName !== "") {
                    console.log("True return")
                    return true;
                }
                else {
                    return false;
                } */
                if (employeeName !== "") {
                    console.log("True return")
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
    hideCompanyLocation = () => {
        this.setState({
            showCompanyLocation: false
        })
    }

    hideCertificateType = () => {
        this.setState({
            showCertificateType: false
        })
    }


    pass = (event) => {
        event.preventDefault();
        console.log("data========", this.state)

        this.props.clicked(this.state)
        this.props.history.push('/certificateLetter')

    }

     CheckValue = () => {

         if(document.getElementById("puc").checked===true){
            
            this.setState({
                checkedPUC:'PUC'
            })

         }

         if(document.getElementById("ssc").checked===true){
            
            this.setState({
                checkedSSC:'SSLC'
            })

         }
         if(document.getElementById("degree").checked===true){

            this.setState({
                checkedDegree:'Degree'
            })

         }
      


        if(document.getElementById("checkOthers").checked===true){
              
              this.setState({
                  showOthers:true
              })

        }
        else{
            this.setState({
                showOthers:false
            })
        }
       


        /* if(x === "on") {
            setValue(!value)
            console.log("check box value ", value  ,"And",!value);
            props.showWatermark(value);
        } */

    }

  
    onCheckHandler=(event)=>{
        debugger;

         console.log("Checkbox value ==",event.target.value)
       if(event.target.value=='false'){
           this.setState({
               withWaterMark:true
           })
           console.log("if  ==",this.state.withWaterMark)
       }
       else{
           debugger;
           this.setState({
               withWaterMark: false
           })
           console.log("else  ==",this.state.withWaterMark)

       }
    }

    onChangeHeader=(event)=>{

        debugger;

        console.log("Checkbox value ==",event.target.value)
      if(event.target.value=='false'){
          this.setState({
              withHeader:true
          })
          console.log("if  ==",this.state.withHeader)
      }
      else{
          debugger;
          this.setState({
              withHeader: false
          })
          console.log("else  ==",this.state.withHeader)

      }


     }

     setValue=(data)=>{
        console.log("data is ",data)
    this.setState({
        employeeName: data.employeeName,
        certificateType:data.certificateType,
       
    })

}
//



    render() {
        if(this.props.getData!==''){
            this.setValue(this.props.getData)
        }
        return (
            <div>
                <Home buttonShow={false} />
                <div >
                    <div className="container-fluid mt-5">
                        <div className="row">
                            <div className="col-auto container mt-5 pb-5">
                                <div style={{ width: '500px' }} className="card m-auto shadow-lg mt-5">
                                    <div class="card-header" style={{ borderRadius: '0px !important', background: 'white' }} >
                                        <h3 className="text-center black-text font-bold ">Certificate Letter</h3>
                                    </div>
                                    <div className="card-body ">
                                        <form onSubmit={this.pass}>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <MDBInput autocomplete="off" value={this.state.employeeName} onKeyPress={this.hideEmployeeName} label="Employee Name" className="w-100" name="employeeName" title="Employee Name" id="employeeName" onChange={(event) => {
                                                        this.setState({
                                                            employeeName: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                                {/* <div class="col-md-6">
                                                    <MDBInput autocomplete="off" onKeyPress={this.hideCompanyLocation} label="Company Location" className="w-100" name="companyLocation" title="Company Location" id="companyLocation" onChange={(event) => {
                                                        this.setState({
                                                            companyLocation: event.target.value
                                                        })
                                                    }} />
                                                </div> */}
                                            </div>
                                            <div className="row" style={{ padding: 0 }}>
                                                <div className="col-6 p-0" >
                                                    {this.state.showEmployeeName ? <div id="errordiv" className="container-fluid">Please fill out employee Name field * </div> : null}
                                                </div>
                                                <div className="col-6 p-0" style={{ width: 0 }}>
                                                    {this.state.showCompanyLocation ? <div id="errordiv" className="container-fluid">Please fill out company Location field * </div> : null}
                                                </div>
                                            </div>
                                            {/*   <div className="row">
                                                <div class="col-md-6" style={{ paddingTop: '10px',paddingBottom:'25px' }}>
                                                    <select onClick={this.hideCertificateType} class="browser-default custom-select" autocomplete="off" label="Certificate Type" name="certificateType" title="Certificate Type" id="certificateType" onChange={(event) => {
                                                        this.setState({
                                                            certificateType: event.target.value
                                                        }); this.hideCertificateType()
                                                    }}>
                                                        <option selected >Select an Option</option>
                                                        <option value="Primary">Primary Certificate</option>
                                                        <option value="Secondary">Secondary Certificate</option>
                                                    </select>
                                                </div>
                                            </div> */}

<div className="row">
                                                <div className="col-3">
                                                <div className="custom-control custom-checkbox custom-control-inline col-6">
  <input type="checkbox" value={this.state.checkedSSC} className="custom-control-input" onChange={(event) => {
                                                       this.CheckValue(event)
                                                    }} id="puc" />
  <label style={{whiteSpace: 'nowrap'}} className="custom-control-label" htmlFor="puc">SSLC</label>
</div>

                                                </div>
                                                <div className="col-3">
                                                <div className="custom-control custom-checkbox custom-control-inline col-6">
  <input type="checkbox" value={this.state.checkedPUC} className="custom-control-input" id="ssc"  onChange={(event) => {
                                                          this.CheckValue(event)
                                                    }} />
  <label style={{whiteSpace: 'nowrap'}} className="custom-control-label" htmlFor="ssc">PUC</label>
</div>

                                                    </div>

                                                    <div className="col-3">
                                                <div className="custom-control custom-checkbox custom-control-inline col-6">
  <input type="checkbox" value={this.state.checkedDegree} className="custom-control-input" id="degree"  onChange={(event) => {
                                                          this.CheckValue(event)
                                                    }} />
  <label style={{whiteSpace: 'nowrap'}} className="custom-control-label" htmlFor="degree">Degree</label>
</div>

                                                    </div>
                                                    <div className="col-3">
                                                <div className="custom-control custom-checkbox custom-control-inline col-6">
  <input type="checkbox" className="custom-control-input" id="checkOthers" onClick={this.CheckValue}  onChange={this.dataValue} />
  <label style={{whiteSpace: 'nowrap'}} className="custom-control-label" htmlFor="checkOthers">Others</label>
</div>

                                                    </div>
                                            </div>
                                             <hr></hr>


                                          
                                           
                                               {/*  <div>
                                                    <div className="form-check form-check-inline col-md-1 ">
                                                        <input className="form-check-input" type="checkbox" id="puc" Value="PUC"  onChange={(event) => {
                                                     this.setState({
                                                        checkedPUC: event.target.value
                                                     })
                                                 }} /> 
                                                        <label className="form-check-label" htmlFor="inlineCheckbox1">PUC</label>
                                                    </div>
                                                    <div className="form-check form-check-inline col-md-1 offset-md-1">
                                                        <input className="form-check-input" type="checkbox" id="ssc" Value="SSC"  onChange={(event) => {
                                                     this.setState({
                                                        checkedSSC: event.target.value
                                                     })
                                                 }} /> 
                                                        <label className="form-check-label" htmlFor="inlineCheckbox2">SSC</label>
                                                    </div>
                                                    <div className="form-check form-check-inline  col-md-1 offset-md-1">
                                                        <input className="form-check-input" type="checkbox" id="degree" Value="Degree" onChange={(event) => {
                                                     this.setState({
                                                        checkedDegree: event.target.value
                                                     })
                                                 }} /> 
                                                        <label className="form-check-label" htmlFor="inlineCheckbox1">Degree</label>
                                                    </div>
                                                    <div className="form-check form-check-inline  col-md-1 offset-md-1">
                                                        <input className="form-check-input" type="checkbox" onClick={this.CheckValue}  onChange={this.dataValue} id="checkOthers"   />
                                                        <label className="form-check-label" htmlFor="checkOthers">other</label>
                                                    </div>
                                                </div>
                                               <div>

                                               </div> */}


                                               <div class="row">
                                              
                                               {this.state.showOthers?
                                                 <div class="col-md-12">
                                                 <MDBInput autocomplete="off" value={this.state.certificateType} onKeyPress={this.hideEmployeeName} label="OtherCertificate" className="w-100" name="otherCertificate" title="otherCertificate" id="otherCertificate" onChange={(event) => {
                                                     this.setState({
                                                        certificateType: event.target.value
                                                     })
                                                 }} />
                                             </div>:null}
                                             
                                             
                                      
                                                </div>

                                               {/*  <div className="row">
                                                <div className="col-6">
                                                <div className="custom-control custom-checkbox custom-control-inline col-6">
  <input type="checkbox" value={this.state.withHeader} className="custom-control-input" onChange={(event) => {
                                                       this.onChangeHeader(event)
                                                    }} id="withLetterHead" />
  <label style={{whiteSpace: 'nowrap'}} className="custom-control-label" htmlFor="withLetterHead">With Letter Head</label>
</div>

                                                </div>
                                                <div className="col-6">
                                                <div className="custom-control custom-checkbox custom-control-inline col-6">
  <input type="checkbox" value={this.state.withWaterMark} className="custom-control-input" id="withWatermark"  onChange={(event) => {
                                                        this.onCheckHandler(event)
                                                    }} />
  <label style={{whiteSpace: 'nowrap'}} className="custom-control-label" htmlFor="withWatermark">With WaterMark</label>
</div>

                                                    </div>
                                            </div>
 */}
                                                <div className=" input-group w-50 container-fluid">
                                                    <MDBBtn outline style={{marginTop: '20px'}} id="generate" type="submit" className=" form-control-plaintext  justify-content-center text-center" color="primary">Generate</MDBBtn>
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
        export default withRouter(InputCertificateLetter)
