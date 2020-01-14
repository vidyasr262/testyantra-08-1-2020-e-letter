import React, { Component } from 'react'
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";
import Home from '../home';
import { withRouter } from 'react-router-dom';
import $ from 'jquery'
import moment from 'moment';


export class InputIntershipLetter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            salute: 'Mr.',
            internName: '',
            internType: '',
            internId: '',
            companyLocation: '',
            startDate: '',
            endDate: '',
            date: '',
            withWaterMark: false,
            withHeader: false,
            gender: { gender1:'He',
            gender2:'his',
            gender3:'him'
        },
            showinternName: '',
            showinternType: '',
            showinternId: '',
            showcompanyLocation: '',
            showstartDate: '',
            showendDate: '',
            showinvalidDate: ''
        }
    }

    componentDidMount() {

        let editClick = localStorage.getItem("editClick");
        if (editClick) {
            this.setState({



                salute: this.props.empData.salute,
                internName: this.props.empData.internName,
                internType: this.props.empData.internType,
                internId: this.props.empData.internId,
                companyLocation: this.props.empData.companyLocation,
                startDate: this.props.empData.startDate,
                endDate: this.props.empData.endDate,
                companyLocation: this.props.empData.companyLocation

            })

        }
        let that = this;
        $(document).ready(function () {
            $('#generate').click(function (e) {

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

                if (that.state.salute === "Ms." || that.state.salute === "Mrs.") {
                    that.setState({
                        ...that.state,
                        gender : {
                            gender1:'She',
                            gender2:'her',
                            gender3:'her' 
                        }
                    })
                 }
                let internName = (document.getElementById("internName").value).trim();
                let internType = (document.getElementById("internType").value).trim();
                let internId = (document.getElementById("internId").value).trim();
                let companyLocation = (document.getElementById("companyLocation").value).trim();
                let startDate = (document.getElementById("startDate").value).trim();
                let endDate = (document.getElementById("endDate").value).trim();
                let selectedstartDate = new Date(startDate)
                let selectedendDate = new Date(endDate)

                if (internId === "") {
                    that.setState({ showinternId: true })
                }
                if (internType === "") {
                    that.setState({ showinternType: true })
                }
                if (companyLocation === "") {
                    that.setState({ showcompanyLocation: true })
                }
                if (internName === "") {
                    that.setState({ showinternName: true })
                }

                if (startDate === "") {
                    that.setState({ showstartDate: true })
                }
                if (endDate === "") {
                    that.setState({ showendDate: true })
                }


                if (selectedendDate < selectedstartDate) {
                    that.setState({
                        showinvalidDate: true
                    })

                    return false;
                }


                if (internType != "" && internId != "" && companyLocation != "" && internName != "" && startDate !== "" && endDate != "") {
                
                    return true;
                }
                else {
                    return false;
                }
            });
        });
    }

    hideinternName = () => {
        this.setState({
            showinternName: false
        })
    }
    hideinternType = () => {
        this.setState({
            showinternType: false
        })
    }
    hideinternId = () => {
        this.setState({
            showinternId: false
        })
    }
    hidecompanyLocation = () => {
        this.setState({
            showcompanyLocation: false
        })
    }

    hidestartDate = () => {
        this.setState({
            showstartDate: false
        })
    }
    hideendDate = () => {
        this.setState({
            showendDate: false
        })
    }
    hideInvalidDate = () => {
        this.setState({
            showinvalidDate: false
        })
    }


    pass = (event) => {
        event.preventDefault();
    

        this.props.clicked(this.state)
        this.props.history.push('/IntershipLetter')

    }

    onCheckHandler = (event) => {
        
       
        if (event.target.value == 'false') {
            this.setState({
                withWaterMark: true
            })
         
        }
        else {
            debugger;
            this.setState({
                withWaterMark: false
            })
         
        }
    }


    onChangeHeader = (event) => {

        debugger;

       
        if (event.target.value == 'false') {
            this.setState({
                withHeader: true
            })
           
        }
        else {
            debugger;
            this.setState({
                withHeader: false
            })
          

        }


    }


   



    render() {

        return (
            <div>
                <Home buttonShow={false} />
                <div >
                    <div className="container-fluid mt-5">
                        <div className="row">
                            <div className="col-auto container mt-5 pb-5">
                                <div style={{ width: '500px' }} className="card m-auto shadow-lg mt-5">
                                    <div class="card-header" style={{ borderRadius: '0px !important', background: 'white' }} >
                                        <h3 className="text-center black-text font-bold ">Intership Letter</h3>
                                    </div>
                                    <div className="card-body ">
                                        <form onSubmit={this.pass}>
                                            <div class="row">

                                                <div className="col-md-3" style={{ paddingTop: '25px' }}>
                                                    <select class="browser-default custom-select" value={this.state.salute} autocomplete="off" name="salutation" title="salutation" id="salutation" onChange={(event) => {
                                                        this.setState({
                                                            salute: event.target.value
                                                        })
                                                    }}>

                                                        <option selected value="Mr.">Mr.</option>
                                                        <option value="Ms.">Ms.</option>
                                                        <option value="Mrs.">Mrs.</option>
                                                    </select>
                                                </div>

                                                <div class="col-md-9">
                                                    <MDBInput autocomplete="off" value={this.state.internName} onKeyPress={this.hideinternName} label="Intern Name" className="w-100" name="internName" title="Intern Name" id="internName" onChange={(event) => {
                                                        this.setState({
                                                            internName: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                            </div>

                                            <div className="row" style={{ padding: 0 }}>
                                                <div className="col-3 p-0" >
                                                </div>
                                                <div className="col-6 p-0" style={{ width: 0 }}>
                                                    {this.state.showinternName ? <div id="errordiv" className="container-fluid">Please fill out Intern Name field * </div> : null}
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <MDBInput autocomplete="off" value={this.state.internType} onKeyPress={this.hideinternType} label="Intership Type" className="w-100" name="internType" title="Employe Type" id="internType" onChange={(event) => {
                                                        this.setState({
                                                            internType: event.target.value
                                                        })
                                                    }} />
                                                </div>

                                            </div>
                                            <div className="row">
                                                <div className="col-12 p-0">
                                                    {this.state.showinternType ? <div id="errordiv" className="container-fluid">Please fill out Internship type field * </div> : null}
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-6">
                                                    <MDBInput autocomplete="off" value={this.state.internId} onKeyPress={this.hideinternId} label="Intern Id" className="w-100" name="internId" title="Employe Id" id="internId" onChange={(event) => {
                                                        this.setState({
                                                            internId: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                                <div class="col-md-6">
                                                    <MDBInput autocomplete="off" value={this.state.companyLocation} onKeyPress={this.hidecompanyLocation} label="companyLocation" type="text" name="companyLocation" id="companyLocation" title="companyLocation" onChange={(event) => {
                                                        this.setState({
                                                            companyLocation: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-6 p-0">
                                                    {this.state.showinternId ? <div id="errordiv" className="container-fluid">Please fill out Intern Id field * </div> : null}
                                                </div>
                                                <div className="col-6 p-0">
                                                    {this.state.showcompanyLocation ? <div id="errordiv" className="container-fluid">Please fill out companyLocation field * </div> : null}
                                                </div>
                                            </div>




                                            <div class="row">
                                                <div class="col-md-6">
                                                    <MDBInput autocomplete="off" value={this.state.startDate} onClick={this.hidestartDate} onKeyPress={this.hidestartDate} type="date" label="Intership Start Date" title="Joining Date" name="startDate" id="startDate" onChange={(event) => {
                                                        this.setState({
                                                            startDate: event.target.value
                                                        }); this.hidestartDate();
                                                    }} />
                                                </div>
                                                <div class="col-md-6">
                                                    <MDBInput autocomplete="off" value={this.state.endDate} onClick={() => { this.hideendDate(); this.hideInvalidDate() }} onKeyPress={() => { this.hideendDate(); this.hideInvalidDate() }} type="date" label="Intership End Date" title="endDate" name="endDate" id="endDate" onChange={(event) => {
                                                        this.setState({
                                                            endDate: event.target.value
                                                        }); this.hideendDate(); this.hideInvalidDate()
                                                    }} />
                                                </div>
                                            </div>
                                            <div className="row" style={{ padding: 0 }}>
                                                <div className="col-6 p-0" >
                                                    {this.state.showstartDate ? <div id="errordiv" className="container-fluid">Please fill out Internship Start Date field * </div> : null}


                                                </div>
                                                <div className="col-6 p-0" style={{ width: 0 }}>
                                                    {this.state.showendDate ? <div id="errordiv" className="container-fluid">Please fill out Internship End Date field * </div> : null}
                                                    {this.state.showinvalidDate ? <div id="errordiv" className="container-fluid">Internship End Date greater or equal to Internship Start Date * </div> : null}
                                                </div>
                                            </div>

                                            

                                            <div className=" input-group w-50 container-fluid">
                                                <MDBBtn outline id="generate" type="submit" className=" form-control-plaintext  justify-content-center text-center" color="primary">Generate</MDBBtn>
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
export default withRouter(InputIntershipLetter)