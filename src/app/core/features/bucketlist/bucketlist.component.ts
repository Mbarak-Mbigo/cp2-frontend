import { Component, OnInit } from '@angular/core';

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
