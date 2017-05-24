import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class BucketlistService {
  private baseUrl = 'http://127.0.0.1:5000/api/v1/bucketlists/';

  constructor(private http: Http, private router: Router) { }

  authorizationHeaders(){
    // construct authentication headers
    let token = localStorage.getItem('accessToken');
    if (token){
      let headers = new Headers()
      headers.append('Content-Type', 'application/json');
      headers.append('Access-Control-Allow-Origin', '*');
      headers.append('Authorization', 'Bearer ' + token)
      return headers
    }
  }

  // get all bucketlists
  getAllBucketLists(dataUrl?:string) {
    let fetchUrl = dataUrl
    if (dataUrl){
      fetchUrl = dataUrl
    }else{
      fetchUrl = this.baseUrl
    }
    return this.http.get(fetchUrl,
      {headers:this.authorizationHeaders()})
      .map((responseData: Response) => {
        return responseData.json();
      },
        errorResponse => {
          this.errorHandler(errorResponse)
        }).catch(this.errorHandler)
  };

  getBucketItems(bucketId: number){
    let bucketUrl = this.baseUrl + bucketId
    return this.http.get(bucketUrl,
      {headers: this.authorizationHeaders()})
      .map((responseData: Response) => responseData.json());
  }

  createBucketList(bucketName: string){
    return this.http.post(this.baseUrl,{'name': bucketName},
      {headers: this.authorizationHeaders()})
      .map((response: Response) => response.json());
  }

  updateBucketList(bucketUrl: string, newName: string){
    return this.http.put(bucketUrl,{'name': newName},
      {headers: this.authorizationHeaders()})
      .map((response: Response) => response.json());
  }

  deleteBucketList(bucketUrl: string){
    return this.http.delete(bucketUrl,
      {headers: this.authorizationHeaders()})
      .map((response: Response) => response.json());
  }

  createBucketItem(bucketUrl: string, itemName: string){
    return this.http.post(bucketUrl+'/items/',{'name': itemName},
      {headers: this.authorizationHeaders()})
      .map((response: Response) => response.json());
  }

  updateBucketItem(bucketItemUrl: string, itemName: string){
    return this.http.put(bucketItemUrl,{'name': itemName},
      {headers: this.authorizationHeaders()})
      .map((response: Response) => response.json());
  }

  deleteBucketItem(bucketItemUrl: string){
    return this.http.delete(bucketItemUrl,
      {headers: this.authorizationHeaders()})
      .map((response: Response) => response.json());
  }

  udpateStatus(bucketItemUrl: string, status: Boolean){
    return this.http.put(bucketItemUrl, {'done': status},
      {headers: this.authorizationHeaders()})
      .map((response: Response) => response.json());
  }

  private errorHandler(error: Response){
    return Observable.throw(error || 'Server Error');
  }

}
