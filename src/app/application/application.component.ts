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

  showSuccessMessage = false;

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

  saveForm(event: Event) {
    event.preventDefault(); // Disable default form submission behavior

    console.log('Form data is ', this.profileForm.value);
    this.showSuccessMessage = true;
  }

  resetForm() {
    this.profileForm.reset();
    this.showSuccessMessage = false;
  }

  ngOnInit(): void {
  }

}
