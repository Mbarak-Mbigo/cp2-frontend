import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketitemComponent } from './bucketitem.component';

describe('BucketitemComponent', () => {
  let component: BucketitemComponent;
  let fixture: ComponentFixture<BucketitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BucketitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
