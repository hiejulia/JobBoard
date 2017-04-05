import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Block } from '../block.model';
import { Entry } from '../entry.model';

@Component({
  selector: 'app-profile-block',
  templateUrl: './profile-block.component.html',
  styleUrls: ['./profile-block.component.css']
})
export class ProfileBlockComponent implements OnInit {
  public block: any;
  private _profileService: ProfileService;


  constructor(profileService: ProfileService) {
    this._profileService = profileService;
   }

  ngOnInit() {
    console.log(this.block);
  }
  addEntry(event){
    event.preventDefault();
    this.block.data.push(new Entry);
  }

  onEnter(event){
    event.preventDefault();
    this._profileService.updateProfileBlock(this.block);
    }

}
