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

  onAddServer(serverName: HTMLInputElement) {
    // console.log('onAddServer input elem', serverName)
    let newServName = serverName.value;

    if (
      this.serverElements &&
      this.serverElements.length > 0 &&
      this.serverElements.map(data => data['name']).includes(newServName)
    ) { // check if the server name already existed
      alert('Server name already exists')
    } else {
      if (newServName.trim() === '') { // check if the server name is an empty string
        alert('No server name entered! Unable to add new server!')
      } else {
        this.serverCreated.emit({
          serverName: newServName,
          serverContent: this.newServerContent
        })
      }
    }
  }

  onAddBlueprint(serverContent: HTMLInputElement) {
    // console.log('onAddBlueprint input elem', serverContent)
    let newServContent = serverContent.value;

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
        if (newServContent.trim() === '') { // check if the server content is an empty string
          alert('Invalid server content! Please try again.')
        } else {
          this.blueprintCreated.emit({
            serverName: this.newServerName,
            serverContent: newServContent
          })
        }
      }
    }
  }
}
