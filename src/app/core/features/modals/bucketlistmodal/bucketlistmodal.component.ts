import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { AlertService } from '../../../../shared/services/alert/alert.service';

@Component({
  selector: 'app-bucketlistmodal',
  templateUrl: './bucketlistmodal.component.html',
  styleUrls: ['./bucketlistmodal.component.css'],
  inputs: ['bucketName', 'bucketUrl']
})

export class BucketlistmodalComponent {
  subscription: Subscription;
  @Output() deleteBucket = new EventEmitter();
  @Output() updateBucket = new EventEmitter();
  @Output() createBucket = new EventEmitter();
  @Input() bucketId: Number;
  @Input() bucketUrl: string;
  @Input() bucketName: string;

  constructor(private alertService: AlertService) {}

  deleteBucketList(bucketUrl: string){
    this.deleteBucket.emit({$event: event, data: bucketUrl});
  }

  updateBucketList(editData: string){
    this.updateBucket.emit({$event: event, data: editData, bucketUrl: this.bucketUrl});
  }
}
