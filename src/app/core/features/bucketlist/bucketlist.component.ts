import { Component, OnInit, Input } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-bucketlist',
  templateUrl: './bucketlist.component.html',
  styleUrls: ['./bucketlist.component.css']
})
export class BucketListComponent implements OnInit {
  titleBucketList: string = 'Bucketlist View'
  constructor() { }

  ngOnInit() {
  }

}
