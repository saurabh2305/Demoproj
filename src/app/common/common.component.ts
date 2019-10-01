import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {
  valueShow : any;
  isDisabled : boolean = false;
  
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}
