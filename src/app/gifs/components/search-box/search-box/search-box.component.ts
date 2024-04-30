import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type ElementRef, ViewChild } from '@angular/core';

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

  searchTag() {
    const newTag = this.tagInput.nativeElement.value
    console.log(newTag)
  }
}
