import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'gifs-search-box',
    standalone: true,
    imports: [
        CommonModule,
    ],
    template: `
      <h5>Buscar:</h5>
      <input type="text" class="form-control" placeholder="Buscar gifs...">
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBoxComponent { }
