import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
values: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
  }

  getValues()
  {
    this.http.get('http://localhost:43562/api/values').subscribe((response: any) => {

      this.values = response;
    }, (error: any) => {
      console.log(error);
    });
  }
}
