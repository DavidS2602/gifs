import { Component } from '@angular/core';
// biome-ignore lint/style/useImportType: <explanation>
import  { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {
  constructor(private gifsService: GifsService) {}
  get tags() {
    return this.gifsService.tagsHistory
  }
}
