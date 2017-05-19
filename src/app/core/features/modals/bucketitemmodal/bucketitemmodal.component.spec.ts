import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketitemmodalComponent } from './bucketitemmodal.component';

describe('BucketitemmodalComponent', () => {
  let component: BucketitemmodalComponent;
  let fixture: ComponentFixture<BucketitemmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BucketitemmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketitemmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
