import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _tagsHistory: string[] = []

  get tagsHistory() {
    return [...this._tagsHistory]
  }

  searchTag(tag: string): void {
    this._tagsHistory.unshift(tag)
    this._tagsHistory = this._tagsHistory.splice(0, 10)
    console.log(this._tagsHistory)
  }
}
