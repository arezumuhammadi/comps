import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  partOfLink = 'hi';
  data = [
    {name:'james', age:24, job:'Designer', employed: true},
    {name:'jill', age:26, job:'Engineer', employed: false},
    {name:'james', age:25, job:'Engineer', employed: true},
  ];
  headers = [
    { key: 'employed', label: 'has a job?' },
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
