import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',  // This is the normal way of selector
  // selector:'[app-servers]',  // This is attribute  type of selector
  // selector: '.app-servers',  // This is used for class selector
  templateUrl: './servers.component.html', 
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No Server was Created !!';
  serverName = '';
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = 'New Server was created named ' + this.serverName;
  }

  onUpdateServerName(event: Event){
    this.serverName = (event.target as HTMLInputElement).value;
  }

}
