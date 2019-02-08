import { Component, OnInit } from '@angular/core';
import {MusicService} from '../music.service';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  constructor(private music : MusicService,private http:HttpClient) { }
arrayMusic:any=[];
  ngOnInit() {
    this.music.getsong().subscribe(data=>{
      console.log(data)
      this.arrayMusic=data
    })
  }
 remove(music){
   this.http.delete('http://localhost:3004/posts/'+music).subscribe(console.log)
   this.arrayMusic=this.arrayMusic.filter(data=>music!=data.id)
 }
}
