import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }
  isClicked:boolean=false;
  Forms={
    fname:'',
    lname:'',
    email:'',
    phn:'',
    address:'',
    city:'',
    state:'',
    pincode:''
  }
  @ViewChild('f') formData : NgForm;
  ngOnInit(): void {
  }
  onSubmit(form){
  this.Forms.fname=form.value.fname;
  this.Forms.lname=form.value.lname;
  this.Forms.email=form.value.email;
  this.Forms.phn=form.value.phn;
  this.Forms.address=form.value.address;
  this.Forms.city=form.value.city;
  this.Forms.state=form.value.state;
  this.Forms.pincode=form.value.pincode;
  this.isClicked=true;
  this.formData.reset();
  }
}
