// import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
// import {DataService} from '../services/data.service';
//
// @Component({
//   selector: 'blog',
//   templateUrl: './blog.component.html',
//   styleUrls: ['./blog.component.css']
// })
// export class BlogComponent implements OnInit {
//   @Input() filterText: string;
//   public items$: any;
//   @Input() image: string;
//   @Input() text: string;
//
//   constructor(private service: DataService) {
//   }
//
//   ngOnInit() {
//     this.getAll();
//   }
//
//   getAll() {
//     this.service.getAll().subscribe(response => {
//       console.log(response);
//       this.items$ = response;
//     });
//
//   }
// }
//


import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import {DataService} from '../services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @Input() filterText: string;
  @Input() id: number;
  public items$: any;

  constructor(private service: DataService, private router: Router) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.service.getAll().subscribe(response=> {
      console.log("response", response);
      this.items$ = response})

  }

  goToDetails(){
    this.router.navigate(['/blog/detail/:id']);
  }

}
