import { Component } from '@angular/core';
// biome-ignore lint/style/useImportType: <explanation>
import { GifsService } from '../../services/gifs.service';
import type { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor(private gifsService: GifsService) {}

  get gifs(): Gif[] {
    return this.gifsService.gifList;
  }
}
