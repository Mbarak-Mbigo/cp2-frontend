import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { AlertService } from '../../../../shared/services/alert/alert.service';

@Component({
  selector: 'app-bucketlistmodal',
  templateUrl: './bucketlistmodal.component.html',
  styleUrls: ['./bucketlistmodal.component.css'],
  inputs: ['bucketName', 'bucketUrl']
})

export class BucketlistmodalComponent implements OnInit {
  @Output() deleteBucket = new EventEmitter();
  @Output() updateBucket = new EventEmitter();
  @Output() createBucket = new EventEmitter();
  @Input() bucketId: Number;
  @Input() bucketUrl: string;
  @Input() bucketName: string;

  constructor(private alertService: AlertService) {}

  ngOnInit() {
  }

  deleteBucketList(bucketUrl: string){
    this.deleteBucket.emit({$event: event, data: bucketUrl});
  }

  updateBucketList(editData: string){
    this.updateBucket.emit({$event: event, data: editData, bucketUrl: this.bucketUrl});
  }
}
