import { Component, OnInit } from '@angular/core';
import {MusicService} from '../music.service';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private music : MusicService,private http:HttpClient) { }
  arrayMusic:any=[];
    ngOnInit() {
      this.music.getsong().subscribe(data=>{
        console.log(data)
        this.arrayMusic=data
      })
}
  
}
