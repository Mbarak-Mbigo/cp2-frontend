import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketlistmodalComponent } from './bucketlistmodal.component';

describe('BucketlistmodalComponent', () => {
  let component: BucketlistmodalComponent;
  let fixture: ComponentFixture<BucketlistmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BucketlistmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketlistmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
