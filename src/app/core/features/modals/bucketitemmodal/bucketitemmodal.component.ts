import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-bucketitemmodal',
  inputs: ['itemId', 'itemName', 'itemUrl'],
  templateUrl: './bucketitemmodal.component.html',
  styleUrls: ['./bucketitemmodal.component.css']
})

export class BucketitemmodalComponent {
  @Output() deleteItem = new EventEmitter();
  @Output() updateItem = new EventEmitter();
  @Input() itemId: Number;
  @Input() itemName: string;
  @Input() itemUrl: string;

  deleteBucketItem(){
    this.deleteItem.emit({event: event, url: this.itemUrl})
  }

  updateBucketItem(data: string){
    this.updateItem.emit({event: event, data:data, url: this.itemUrl})
  }

}
