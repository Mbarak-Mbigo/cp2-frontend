import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BucketlistService } from '../../../shared/services/bucketlist/bucketlist.service';
import { AlertService } from '../../../shared/services/alert/alert.service';
import { BucketitemmodalComponent } from '../modals/bucketitemmodal/bucketitemmodal.component';

@Component({
  selector: 'app-bucketitem',
  templateUrl: './bucketitem.component.html',
  styleUrls: ['./bucketitem.component.css']
})
export class BucketitemComponent implements OnInit {
  BucketList: any;
  itemsList: any;
  constructor(private bucketlistService: BucketlistService,
              private route: ActivatedRoute,
              private alertService: AlertService) { }

  ngOnInit() {
    this.loadAllBucketItems();
  }

  loadAllBucketItems(){
    let bucketId = this.route.snapshot.params.id;
    this.bucketlistService.getBucketItems(this.route.snapshot.params.id)
    .subscribe(responseData => {
      this.BucketList = responseData;
      this.itemsList = responseData.items;
    },
    responseError => {
      console.log(responseError)
    })
  }

  updateItem(event: any){
    if (event.data){
      this.bucketlistService.updateBucketItem(event.url, event.data)
      .subscribe(responseData =>{
        console.log(responseData);
        this.loadAllBucketItems()
      })
    }else{
      this.alertService.error('Update data not provided!');
    }
  }

  deleteItem(event: any){
    console.log(event)

  }

  createItem(event: any){

  }

}
