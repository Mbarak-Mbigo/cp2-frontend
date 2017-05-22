import { Component, OnInit, Input } from "@angular/core";
import { Router } from '@angular/router';

import { BucketlistService } from '../../../shared/services/bucketlist/bucketlist.service';
import { AlertService } from '../../../shared/services/alert/alert.service';
import { BucketlistmodalComponent } from '../modals/bucketlistmodal/bucketlistmodal.component';

@Component({
  selector: 'app-bucketlist',
  templateUrl: './bucketlist.component.html',
  styleUrls: ['./bucketlist.component.css']
})
export class BucketListComponent implements OnInit {
  titleBucketList: string = 'My Bucketlists'
  allBuckets: any;
  next: any;
  previous: any;
  constructor(private bucketlistService: BucketlistService,
              private alertService : AlertService,
              private router: Router) { }

  ngOnInit() {
    this.loadBuckets();
  }

  loadBuckets(dataUrl?:string){
    this.bucketlistService.getAllBucketLists(dataUrl)
    .subscribe(bucketData => { this.allBuckets = bucketData['results'];
    this.next = bucketData.next;
    this.previous = bucketData.previous;},
    dataError => {
      if(localStorage.getItem('accessToken')){
        localStorage.removeItem('accessToken');
        localStorage.removeItem('username');
        this.alertService.error('Token Expired Login to Access!');
        this.router.navigate(['login']);
        location.reload();
      }
    }
    );
  };

  getNext(){
    this.loadBuckets(this.next)
  };

  getPrevious(){
    this.loadBuckets(this.previous)
  };

  // loadBucketItems(bucketUrl: string){
  //   this.bucketlistService.getBucketItems(bucketUrl);
  // };

  deleteBucketList(event: any){
    this.bucketlistService.deleteBucketList(event.data)
    .subscribe(responseData => {
      this.loadBuckets();},
    responseError => {
      console.log(responseError)
    })
  };

  updateBucketList(event: any){
    this.bucketlistService.updateBucketList(event.bucketUrl, event.data)
    .subscribe(responseData => {
      this.loadBuckets();},
    responseError => {
      console.log(responseError)
    })
  };

  createBucketList(event: any){
    this.bucketlistService.createBucketList(event.data)
    .subscribe(responseData => {
      this.loadBuckets();},
    responseError => {
      console.log(responseError)
    })
  }

}
