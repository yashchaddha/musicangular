import { Component, OnInit } from '@angular/core';
import { MusicService } from "../music.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private music : MusicService, private http: HttpClient  ) { }

  arrayMusic = [];
  ngOnInit() {
    
  }

  getMusic(search){
    console.log(search);
    this.music.searchMusic(search).subscribe((data: any) => {
      this.arrayMusic=data.results.trackmatches.track;
  })
  }
  addfav(name,artist,listeners,streamable,url,image):any{
    return this.http
    .post("http://localhost:3004/posts", {
     name,artist,listeners,streamable,url,image
    })
    .subscribe(console.log); 
  }
  isavailable=true;
 hideTrending()
 {
   this.isavailable=false;
 }
}


