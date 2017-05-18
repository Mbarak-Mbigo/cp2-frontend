import { Component, OnInit, Input } from "@angular/core";
import { Router } from '@angular/router';

import { BucketlistService } from '../../../shared/services/bucketlist/bucketlist.service';
import { AlertService } from '../../../shared/services/alert/alert.service';

@Component({
  selector: 'app-bucketlist',
  templateUrl: './bucketlist.component.html',
  styleUrls: ['./bucketlist.component.css']
})
export class BucketListComponent implements OnInit {
  titleBucketList: string = 'My Bucketlists'
  allBuckets: any;
  constructor(private bucketlistService: BucketlistService,
              private alertService : AlertService,
              private router: Router) { }

  ngOnInit() {
    this.loadBuckets()
  }

  loadBuckets(){
    this.bucketlistService.getAllBucketLists()
    .subscribe(bucketData => { this.allBuckets = bucketData['results'];
    console.log(this.allBuckets)});
  }

}
