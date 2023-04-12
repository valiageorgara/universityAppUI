import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})

export class ApplicationComponent implements OnInit {
  universities = ['NKUA', 'NTUA', 'HUA', 'UniPi']
  departments = ["Informatics & Telecommunications", "Electrical and Computer Engineering", "Informatics & Telematics", "Informatics"]
  masters = ["Space Technologies and Applications", "Computer Science, Telecommunications and Networking"]
  streams = ["Downstream", "Upstream", "Hardware"]

  constructor(
    private formBuilder: FormBuilder
  ) {

  }

  profileForm = this.formBuilder.group({
    university: [''],
    department: [''],
    master: [''],
    stream: [''],
  });

  saveForm() {
    console.log('Form data is ', this.profileForm.value);
  }

  ngOnInit(): void {
  }

}
