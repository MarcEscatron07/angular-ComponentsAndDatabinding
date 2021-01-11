import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    {type: 'server', name: 'namePlaceholder', content: 'contentPlaceholder'}
  ];

  ngOnInit(){
    this.serverElements = [
      {type: 'server', name: 'namePlaceholder', content: 'contentPlaceholder'}
    ];
  }
  
  onAddServer(sData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: sData.serverName,
      content: sData.serverContent,
    });
  }

  onAddBlueprint(bData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bData.serverName,
      content: bData.serverContent,
    });
  }
}
