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
  constructor(private bucketlistService: BucketlistService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadAllBucketItems()
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

}
