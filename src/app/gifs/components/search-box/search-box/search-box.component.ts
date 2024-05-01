import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type ElementRef, ViewChild } from '@angular/core';
// biome-ignore lint/style/useImportType: <explanation>
import  { GifsService } from '../../../services/gifs.service';

@Component({
    selector: 'gifs-search-box',
    standalone: true,
    imports: [
        CommonModule,
    ],
    template: `
      <h5>Buscar:</h5>
      <input
        type="text"
        class="form-control"
        placeholder="Buscar GIFs"
        (keyup.enter)="searchTag()"
        #txtTagInput
      >
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  tagInput!: ElementRef<HTMLInputElement>

  constructor(private gifsService: GifsService) {}

  searchTag() {
    const newTag = this.tagInput.nativeElement.value
    this.gifsService.searchTag(newTag)
    this.tagInput.nativeElement.value = ''
  }
}
