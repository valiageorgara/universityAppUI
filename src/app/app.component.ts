import {Component, OnInit} from '@angular/core';
import {HttpService} from "./services/http.service";
import {KeycloakService} from "keycloak-angular";
import {Student} from "./models/models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'uniApp';
  public students: Student[] | undefined;
  constructor(
    private keycloakService: KeycloakService,
    private httpService: HttpService
  ) {}
  ngOnInit(): void {
    this.keycloakService.getToken()
      .then((token) => {
        localStorage.setItem("token",token)
      })
    this.httpService.getStudents().subscribe({
        next: (students: Student[]) => {
          this.students = students;
        }
      }
    )
  }
}
