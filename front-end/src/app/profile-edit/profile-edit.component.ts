import { Component, OnInit } from '@angular/core';


import { ProfileBlockComponent } from './profile-block.component';
import { ProfileService } from '../profile.service';
import { Block } from '../block.model';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  public user: any;
  public profile: any;
  public newBlock: Block;
  private _profileService: ProfileService;

  constructor(profileService: ProfileService) {
    this._profileService = profileService;
   }

  ngOnInit() {
    this.user = {};
    this.newBlock = new Block();
    this._profileService.user.subscribe((user) => {
      this.user = user;
    });
    this._profileService.profile.subscribe((profile) => {
      this.profile = profile;
    });
    this._profileService.getProfile();
  }
  //user add new block
onClick(event){
  event.preventDefault();
  //clone the profile
  let profile = this.profile.slice(0);
  let block = Object.assign({}, this.newBlock); // clone the new block

    profile.push(block);
    this._profileService.profile.next(profile);
    this.newBlock = new Block();

}

}
