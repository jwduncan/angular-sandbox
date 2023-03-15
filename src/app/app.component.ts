import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
myDate = new Date();
offset: number = 0;


  // categories: {_id: string, name: string}[] = [];
  categories = [
    {_id: '1234', name: 'First'},
    {_id: '2345', name: 'Second'},
    {_id: '3456', name: 'Third'},
  ];
  selectedItem: string = ' ';

  ngOnInit(): void {
    // this.loadCategories();
    this.offset = new Date().getTimezoneOffset();

  }

  loadCategories() {
    this.categories = [
      {_id: '1234', name: 'First'},
      {_id: '2345', name: 'Second'},
      {_id: '3456', name: 'Third'},
    ];
  }

  processForm(form: NgForm) {
    console.log('Form:', form);
    console.log('selected item?', this.selectedItem);
    console.log('value', form.value.category);
  }

}
