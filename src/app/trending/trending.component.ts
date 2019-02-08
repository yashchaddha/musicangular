import { Component, OnInit } from '@angular/core';
import {MusicService} from '../music.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{Router} from '@angular/router'

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  constructor(private music : MusicService , private http: HttpClient ,private router :Router) { }
 arrayTrend
  ngOnInit() {
    this.music.trend().subscribe(data=>{
      console.log(data)
      this.arrayTrend=data.tracks.track;
    })
  }
  addfav(name,artist,listeners,streamable,url,image):any{
    return this.http
    .post("http://localhost:3004/posts", {
     name,artist,listeners,streamable,url,image
    })
    .subscribe(console.log); 
  }
  routeTodetail(music) {
    console.log(music.name)
    this.router.navigateByUrl(`/detail/${music.name}`)
   }
}