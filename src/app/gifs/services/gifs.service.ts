// biome-ignore lint/style/useImportType: <explanation>
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private serviceUrl = 'https://api.giphy.com/v1/gifs'
  private apiKey = '4UseQUMqwyDu07Pmh7hZTn5uKmK4srUR'

  constructor(private http: HttpClient) { }

  private _tagsHistory: string[] = []

  get tagsHistory() {
    return [...this._tagsHistory]
  }

  private organizeHistory(tag: string) {
    const lowercaseTag = tag.toLowerCase();
    if (this._tagsHistory.includes(lowercaseTag)) {
      this._tagsHistory = this._tagsHistory.filter(t => t !== lowercaseTag);
    }
    this._tagsHistory.unshift(lowercaseTag); // Add tag to the beginning of the array
    this._tagsHistory = this._tagsHistory.splice(0, 10); // Keep only the last 10 tags
  }

  searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams() // Create a new HttpParams object
      .set('api_key', this.apiKey)
      .set('q', tag)
      .set('limit', '10');

    this.http.get(`${this.serviceUrl}/search?`,{params}) // Use the params object in the request
      .subscribe((response) => {
        console.log(response);
      });
  }
}
