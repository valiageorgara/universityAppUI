import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Student} from "../models/models";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  getStudents(): Observable<Student[]> {
    const url = `/api/v1/students`
    return this.http.get<Student[]>(url);

  }
}
