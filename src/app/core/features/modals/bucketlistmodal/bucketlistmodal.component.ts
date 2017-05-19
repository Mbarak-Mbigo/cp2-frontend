import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { AlertService } from '../../../../shared/services/alert/alert.service';
declare var $:any;

@Component({
  selector: 'app-bucketlistmodal',
  templateUrl: './bucketlistmodal.component.html',
  styleUrls: ['./bucketlistmodal.component.css'],
  inputs: ['bucketName', 'bucketUrl']
})

export class BucketlistmodalComponent implements OnInit {
  subscription: Subscription;
  @Output() deleteBucket = new EventEmitter();
  @Output() updateBucket = new EventEmitter();
  @Output() createBucket = new EventEmitter();
  @Input() bucketId: Number;
  @Input() bucketUrl: string;
  @Input() bucketName: string;

  constructor(private alertService: AlertService) {
    // subscribe to alertservice component messages
    this.subscription = this.alertService.alertCreateBucketList()
    .subscribe(
      alertSignal =>{
        let bucketId = '#createBucket';
        $(bucketId).modal('show');
      }
    )
  }

  ngOnInit() {
  }

  deleteBucketList(bucketUrl: string){
    this.deleteBucket.emit({$event: event, data: bucketUrl})
  }

  updateBucketList(editData: string){
    this.updateBucket.emit({$event: event, data: editData, bucketUrl: this.bucketUrl})
  }

  createBucketList(data: string){
    this.createBucket.emit({$event: event, data: data})
  }

}
