import { Component, OnInit } from '@angular/core';
// import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  applications = [
    {university: 'NKUA', department: 'Informatics & Telecommunications', master: 'Space Technologies and Applications', stream: 'Downstream', date: '01/01/2023', status: 'Pending'},
    {university: 'NTUA', department: 'Electrical and Computer Engineering', master: 'Computer Science, Telecommunications and Networking', stream: 'Upstream', date: '02/01/2023', status: 'Approved'},
    {university: 'HUA', department: 'Informatics & Telematics', master: 'Computer Science, Telecommunications and Networking', stream: 'Hardware', date: '03/01/2023', status: 'Rejected'},
    {university: 'UniPi', department: 'Informatics', master: 'Space Technologies and Applications', stream: 'Downstream', date: '04/01/2023', status: 'Pending'},
    {university: 'NTUA', department: 'Electrical and Computer Engineering', master: 'Computer Science, Telecommunications and Networking', stream: 'Hardware', date: '05/01/2023', status: 'Approved'},
    {university: 'NKUA', department: 'Informatics & Telecommunications', master: 'Space Technologies and Applications', stream: 'Upstream', date: '06/01/2023', status: 'Rejected'},
    {university: 'UniPi', department: 'Informatics', master: 'Computer Science, Telecommunications and Networking', stream: 'Downstream', date: '07/01/2023', status: 'Pending'},
    {university: 'HUA', department: 'Informatics & Telematics', master: 'Space Technologies and Applications', stream: 'Hardware', date: '08/01/2023', status: 'Approved'},
  ];

  constructor() { }

  ngOnInit(): void {
  }
  deleteApplication(index: number) {
    this.applications.splice(index, 1);
  }

}
