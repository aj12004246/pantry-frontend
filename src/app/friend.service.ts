import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CentralService } from './central.service';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  constructor(public main: CentralService, public http: HttpClient) { }



}
