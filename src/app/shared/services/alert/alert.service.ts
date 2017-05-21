import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AlertService {
  private subject = new Subject<any>();
  private keepAfterNavChange = false;

  constructor(private router: Router) {
    // clear alert message on route change
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterNavChange) {
                    // only keep for a single location change
                    this.keepAfterNavChange = false;
                } else {
                    // clear alert
                    this.subject.next();
                }
            }
        });
  }

  success(message: string, keepAfterNavChange = false) {
    this.keepAfterNavChange = keepAfterNavChange;
    this.subject.next({ type: 'success', text: message });
  }

  error(message: string, keepAfterNavChange = false) {
    this.keepAfterNavChange = keepAfterNavChange;
    this.subject.next({ type: 'error', text: message });
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  sendCreateBucketAlert(){
    this.subject.next({type: 'crud', text: 'create bucketlist'})
  }

  alertCreateBucketList(): Observable<any>{
    return this.subject.asObservable();
  }
}
