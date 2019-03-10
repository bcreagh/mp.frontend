import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DocsService {

    docsBaseUrl = 'https://raw.githubusercontent.com/bcreagh/mp.docs/master/';

    constructor(private http: HttpClient) {
    }

    getAboutDoc() {
        return this.http.get(`${this.docsBaseUrl}overview.md`, {
            responseType: "text"
        });
    }


}