import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TotemService {

    private url = 'https://localhost:7204/totem';

    httpOptions = {
        Headers: new HttpHeaders({ 'content-type': 'application/json' })
    }

    constructor(private http: HttpClient) { }

    getTotems(): Observable<any> {
        return this.http.get(this.url).pipe(tap(console.log))
    };

}
