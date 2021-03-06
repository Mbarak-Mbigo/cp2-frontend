import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BucketlistService } from '../../../shared/services/bucketlist/bucketlist.service';
import { AlertService } from '../../../shared/services/alert/alert.service';
import { BucketitemmodalComponent } from '../modals/bucketitemmodal/bucketitemmodal.component';
declare var $:any;

@Component({
  selector: 'app-bucketitem',
  templateUrl: './bucketitem.component.html',
  styleUrls: ['./bucketitem.component.css']
})
export class BucketitemComponent implements OnInit {
  bucketList: any;
  itemsList: any;
  buckeItem;
  constructor(private bucketlistService: BucketlistService,
              private route: ActivatedRoute,
              private alertService: AlertService) { }

  ngOnInit() {
    this.buckeItem = localStorage.getItem('bucketState');
    this.loadAllBucketItems();
  }

  loadAllBucketItems(){
    let bucketId = this.route.snapshot.params.id;
    this.bucketlistService.getBucketItems(this.route.snapshot.params.id)
    .subscribe(responseData => {
      this.bucketList = responseData;
      this.itemsList = responseData.items;
    },
    responseError => {
      this.alertService.error('Error occurred!')
    })
  }

  updateItem(event: any){
    if (event.data){
      this.bucketlistService.updateBucketItem(event.url, event.data)
      .subscribe(responseData =>{
        this.alertService.success('Bucket Item updated successfully');
        this.loadAllBucketItems();
      })
    }else{
      this.alertService.error('Update data not provided!');
    }
  }

  deleteItem(event: any){
    this.bucketlistService.deleteBucketItem(event.url)
    .subscribe( responseData => {
      this.alertService.success('Delete Successful');
      this.loadAllBucketItems();
    },
    errorData => {
      this.alertService.error('Error occurred!');
      this.loadAllBucketItems();
    }
  );

  }

  createItemSignal(){
    let bucketItemId = '#createItem';
    $(bucketItemId).modal('show');
  }

  createBucketLisItem(data: string){
    this.bucketlistService.createBucketItem(this.bucketList.url, data)
    .subscribe( responseData => {
      this.alertService.success('Item created successfully');
      this.loadAllBucketItems();
    },
    errorData => {
      this.alertService.error('Error occurred!');
    }
  );
  }

  backtoBuckets(){
    localStorage.setItem('bucketState', 'true');
    location.reload();
  }

  updateStatus(itemUrl:string, status: Boolean){
    this.bucketlistService.udpateStatus(itemUrl, !status)
    .subscribe( responseData => {
      this.loadAllBucketItems();
    },
    errorData => {
      this.alertService.error('Error occurred!');
    }
  );

  }

}
