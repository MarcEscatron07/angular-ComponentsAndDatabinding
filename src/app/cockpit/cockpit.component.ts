import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Input('servElems') serverElements: any[];
  newServerName: string = '';
  newServerContent: string = '';

  constructor() {
  }

  ngOnInit(): void {
    console.log('cockpit server elems', this.serverElements)
  }

  onAddServer() {
    if (
      this.serverElements &&
      this.serverElements.length > 0 &&
      this.serverElements.map(data => data['name']).includes(this.newServerName)
    ) { // check if the server name already existed
      alert('Server name already exists')
    } else {
      if (this.newServerName.trim() === '') { // check if the server name is an empty string
        alert('No server name entered! Unable to add new server!')
      } else {
        this.serverCreated.emit({ serverName: this.newServerName, serverContent: this.newServerContent })
      }
    }
  }

  onAddBlueprint() {
    if (
      this.serverElements &&
      this.serverElements.length > 0 &&
      this.serverElements.map(data => data['name']).includes(this.newServerName)
    ) { // check if the server name already existed
      alert('Server name already exists')
    } else {
      if (this.newServerContent.trim() === '') { // check if the server content is an empty string
        alert('Invalid server content! Please try again.')
      } else {
        this.blueprintCreated.emit({ serverName: this.newServerName, serverContent: this.newServerContent })
      }
    }
  }
}
