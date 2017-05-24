import { Component, OnInit, Input, AfterContentChecked } from "@angular/core";
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { BucketlistService } from '../../../shared/services/bucketlist/bucketlist.service';
import { AlertService } from '../../../shared/services/alert/alert.service';
import { BucketlistmodalComponent } from '../modals/bucketlistmodal/bucketlistmodal.component';
declare var $:any;

@Component({
  selector: 'app-bucketlist',
  templateUrl: './bucketlist.component.html',
  styleUrls: ['./bucketlist.component.css']
})

export class BucketListComponent implements OnInit {
  subscription: Subscription;
  allBuckets: any;
  next: any;
  previous: any;
  constructor(private bucketlistService: BucketlistService,
              private alertService : AlertService,
              private router: Router) {
    // subscribe to alertservice component messages
    this.subscription = this.alertService.alertCreateBucketList()
      .subscribe(
        alertSignal =>{
          let bucketId = '#createBucket';
          $(bucketId).modal('show');
        });

    this.alertService.alertSearch()
      .subscribe(searchData => {
        this.searchBuckets(searchData);
      });
  }

  ngOnInit() {
    this.loadBuckets();

  }

  loadBuckets(dataUrl?:string, search?:boolean){
    this.bucketlistService.getAllBucketLists(dataUrl)
      .subscribe(bucketData => {
        this.allBuckets = bucketData['results'];
        this.next = bucketData.next;
        this.previous = bucketData.previous;
    },
    errorResponse => {
      if( localStorage.getItem('accessToken') && errorResponse.status === 401){
        // token expired remove it and redirect to login page
        this.alertService.error('Session expired, login to access');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('username');
        this.router.navigate(['/login']);
      }else{
        this.alertService.error(errorResponse);
      }
    }
  );};

  getNext(){
    this.loadBuckets(this.next)
  };

  getPrevious(){
    this.loadBuckets(this.previous)
  };

  deleteBucketList(event: any){
    this.bucketlistService.deleteBucketList(event.data)
    .subscribe(responseData => {
      this.alertService.success('Bucketlist successfully deleted');
      this.loadBuckets();
    },
    responseError => {
      this.alertService.success('Error occurred!');
    })
  };

  updateBucketList(event: any){
    this.bucketlistService.updateBucketList(event.bucketUrl, event.data)
    .subscribe(responseData => {
      this.alertService.success('Bucketlist updated successfully');
      this.loadBuckets();},
    responseError => {
      this.alertService.error('Error occurred!');
    })
  };

  createBucketList(data: string) {
    if (data){
      this.bucketlistService.createBucketList(data)
      .subscribe(responseData => {
        this.alertService.success('Bucketlist created successfully');
        this.loadBuckets();},
      responseError => {
        this.alertService.error('Error occurred!');
      })
    }else{
      this.alertService.error('Update information not provided');
    }
  };

  gotoItems(){
    localStorage.removeItem('bucketState');
    location.reload();
  };

  searchBuckets(searchQuery: string){
    let baseUrl = 'http://127.0.0.1:5000/api/v1/bucketlists/';
    let searchUrl = baseUrl + '?q=' + searchQuery;
    this.bucketlistService.getAllBucketLists(searchUrl)
    .subscribe(searchData =>{
      this.allBuckets = searchData['results'];
      this.next = searchData.next;
      this.previous = searchData.previous;
    },
    searchError => {
      this.alertService.error('No results matching your search Query');
      this.allBuckets = [];
    }
  );
  }
}
