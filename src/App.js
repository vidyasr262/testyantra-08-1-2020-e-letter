
import React, { Component } from 'react';
import Home from './component/home';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'
import InputHRLetter from './component/HrLetter/InputHRLetter';
import Cards from './component/Cards';
import HRLetter from './component/HrLetter/HRLetter';

import InputConfirmationLetter from './component/ConfirmationLetter/InputConfirmationLetter';
import ConfirmationLetter from './component/ConfirmationLetter/ConfirmationLetter';
import InputCertificateLetter from './component/CertificateLetter/InputCertificateLetter';
import CertificateLetter from './component/CertificateLetter/CertificateLetter';
import InputDepuationLetter from './component/DepuationLetter/InputDepuationLetter';
import DepuationLetter from './component/DepuationLetter/DepuationLetter';
import InputIncrementLetter from './component/IncrementLetter/InputIncrementLetter';
import IncrementLetter from './component/IncrementLetter/IncrementLetter';
import InputDesignationLetter from './component/DesignationLetter/InputDesignationLetter';
import DesignationLetter from './component/DesignationLetter/DesignationLetter';
import InputRelivingLetter from './component/RelivingLetter/InputRelivingLetter';
import RelivingLetter from './component/RelivingLetter/RelivingLetter';
import InputExitLetter from './component/ExitLetter/InputExitLetter';
import ExitLetter from './component/ExitLetter/ExitLetter';
import Login from './component/Login/Login';

import TrainingCommit from './component/TrainingCommit/TrainingCommit';
import { InputTrainingCommitLetter } from './component/TrainingCommit/InputTrainingCommit';

import { InternshipLetter } from './component/InternshipLetter/InternshipLetter';
import { InputIntershipLetter } from './component/InternshipLetter/InputIntershipLetter';
import Dropdown from './component/dropdown';
import { InputOffer2Letter } from './component/Offer Letter2/InputOffer2';
import Offer2 from './component/Offer Letter2/OfferLetter2';
import Intent from './component/LetterOfIntent/Intent';
import InputIntentLetter from './component/LetterOfIntent/InputIntentLetter';
import Example from './component/Example';
import MailComponent from './component/Email/MailComponent';
import Form from './component/Form1';
import Form1 from './component/Form1';
import Temp from './component/HrLetter/Temp';
import { InputHrPolicy } from './component/HrPolicy/InputHrPolicy';
import { HrPolicy } from './component/HrPolicy/HrPolicy';
import { InputBDPolicy } from './component/BDPolicy/InputBDPolicy';
import { BDPolicy } from './component/BDPolicy/BDPolicy';
import { ConsultantOffer } from './component/ConsultantOffer/ConsultantOffer';
import { InputConsultantOffer } from './component/ConsultantOffer/InputConsultantOffer';
import { InputSalaryRevision } from './component/SalaryRevision/InputSalaryRevision';
import { SalaryRevision } from './component/SalaryRevision/SalaryRevision';
import { ProjectPolicy } from './component/ProjectPolicy/ProjectPolicy';
import { InputProjectPolicy } from './component/ProjectPolicy/InputProjectPolicy';

export class App extends Component{
  
         
          constructor(props){
            super(props);
            localStorage.setItem("editClick",false)
            this.state={
              emp:'',
              show:''
            }

          }

          employee = (data) => {
        
            this.setState({
              emp :data
            })
          }

          showWatermark=(data)=>{
             
            this.setState({
              show:data
            })
             
          }
        
 

    render(){
  return (

    <div className="App">

      <Route exact path='/' component={Login}></Route>

      <Route exact path='/cards' component={Cards}></Route>
      <Route exact path='/drop' component={Dropdown}></Route>
     
      <Route exact path='/hr'  render={() => { return <InputHRLetter empData={this.state.emp} clicked={this.employee.bind()}  /> }}></Route>
      <Route exact path='/hrLetter'  render={() => { return <HRLetter  empData={this.state.emp} navBarData={this.state.show} /> }}></Route>

      <Route exact path='/inputConfirmation'  render={() => { return <InputConfirmationLetter empData={this.state.emp} clicked={this.employee.bind()} /> }} ></Route>
      <Route exact path='/confirmationLetter'   render={() => { return <ConfirmationLetter  empData={this.state.emp} /> }}></Route>

      <Route exact path='/InputcertificateLetter'  render={() => { return <InputCertificateLetter empData={this.state.emp} clicked={this.employee.bind()} /> }}></Route>
      <Route exact path='/certificateLetter' render={() => { return <CertificateLetter  empData={this.state.emp} /> }}></Route>

      <Route exact path='/InputDepuationLetter'  render={() => { return <InputDepuationLetter empData={this.state.emp} clicked={this.employee.bind()} /> }}></Route>
      <Route exact path='/DepuationLetter'  render={() => { return <DepuationLetter   empData={this.state.emp} /> }}></Route>

      <Route exact path='/InputDesignationLetter'  render={() => { return <InputDesignationLetter empData={this.state.emp} clicked={this.employee.bind()} /> }}></Route>
      <Route exact path='/DesignationLetter' render={() => { return <DesignationLetter  empData={this.state.emp} /> }}></Route>

      <Route exact path='/InputIncrementLetter' render={() => { return <InputIncrementLetter empData={this.state.emp} clicked={this.employee.bind()} /> }}></Route>
      <Route exact path='/IncrementLetter'  render={() => { return <IncrementLetter  empData={this.state.emp} /> }}></Route>

   
      <Route exact path='/InputRelivingLetter'  render={() => { return <InputRelivingLetter empData={this.state.emp} clicked={this.employee.bind()} /> }} ></Route>
      <Route exact path='/RelivingLetter' render={() => { return <RelivingLetter  empData={this.state.emp} /> }}></Route>

      <Route exact path='/InputTrainingCommitLetter' render={() => { return <InputTrainingCommitLetter empData={this.state.emp} history={this.props.history} clicked={this.employee.bind()} /> }} ></Route>
      <Route exact path='/TrainingCommit'  render={() => { return <TrainingCommit  history={this.props.history} empData={this.state.emp} /> }} ></Route>

   {/*  */}

      <Route exact path='/InputExitLetter' render={() => { return <InputExitLetter empData={this.state.emp} clicked={this.employee.bind()} /> }} ></Route>
      <Route exact path='/ExitLetter'  render={() => { return <ExitLetter  empData={this.state.emp} /> }} ></Route>

      <Route exact path='/InputInternship' render={() => { return <InputIntershipLetter empData={this.state.emp} history={this.props.history} clicked={this.employee.bind()} /> }} ></Route>
      <Route exact path='/IntershipLetter'  render={() => { return <InternshipLetter  history={this.props.history} empData={this.state.emp} /> }} ></Route>

      <Route exact path='/InputOfferLetter2' render={() => { return <InputOffer2Letter empData={this.state.emp} history={this.props.history} clicked={this.employee.bind()} /> }} ></Route>
      <Route exact path='/Offerletter2'  render={() => { return <Offer2   history={this.props.history} empData={this.state.emp} /> }} ></Route>

      <Route exact path='/InputIntentLetter' render={() => { return <InputIntentLetter empData={this.state.emp} history={this.props.history} clicked={this.employee.bind()} /> }} ></Route>
      <Route exact path='/IntentLetter'  render={() => { return <Intent  history={this.props.history} empData={this.state.emp} /> }} ></Route>

      <Route exact path='/InputHrPolicy' render={() => { return <InputHrPolicy empData={this.state.emp} history={this.props.history} clicked={this.employee.bind()} /> }} ></Route>
      <Route exact path='/HrPolicy'  render={() => { return <HrPolicy  history={this.props.history} empData={this.state.emp} /> }} ></Route>


      <Route exact path='/InputBDPolicy' render={() => { return <InputBDPolicy empData={this.state.emp} history={this.props.history} clicked={this.employee.bind()} /> }} ></Route>
      <Route exact path='/BDPolicy'  render={() => { return <BDPolicy  history={this.props.history} empData={this.state.emp} /> }} ></Route>

      <Route exact path='/InputProjectPolicy' render={() => { return <InputProjectPolicy empData={this.state.emp} history={this.props.history} clicked={this.employee.bind()} /> }} ></Route>
      <Route exact path='/ProjectPolicy'  render={() => { return <ProjectPolicy  history={this.props.history} empData={this.state.emp} /> }} ></Route>
      
      <Route exact path='/InputConsultantOffer' render={() => { return <InputConsultantOffer empData={this.state.emp} history={this.props.history} clicked={this.employee.bind()} /> }} ></Route>
      <Route exact path='/ConsultantOffer'  render={() => { return <ConsultantOffer  history={this.props.history} empData={this.state.emp} /> }} ></Route>

      <Route exact path='/InputSalaryRevision' render={() => { return <InputSalaryRevision empData={this.state.emp} history={this.props.history} clicked={this.employee.bind()} /> }} ></Route>
      <Route exact path='/SalaryRevision'  render={() => { return <SalaryRevision  history={this.props.history} empData={this.state.emp} /> }} ></Route>

     <Route exact path='/withWaterMark' render={() => { return <Example  showWatermark={this.showWatermark.bind()} /> }} ></Route>
     
     
     <Route exact path='/form' component={Form1}></Route>

     <Route exact path='/email' component={MailComponent}></Route>

      <Route exact path='/test' component={Temp}></Route>

     
    </div>
  );
}
}

export default withRouter(App);
