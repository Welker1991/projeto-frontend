import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TotemService {

    private url = 'https://localhost:7204/totem/';

    httpOptions = {
        Headers: new HttpHeaders({ 'content-type': 'application/json' })
    }

    constructor(private http: HttpClient) { }

    getTotems(): Observable<any> {
        return this.http.get(this.url).pipe(tap(console.log))
    };

    createTotem(totem: any): Observable<any> {
        return this.http.post(this.url, totem).pipe(tap(console.log))
    };

    atualizarTotem(id: any, totem: any): Observable<any> {
        console.log(id)
        console.log(this.url + id)
        return this.http.put(this.url + id, totem).pipe(tap(console.log))
    };

    deletarTotem(id: any): Observable<any> {
        return this.http.delete(this.url.concat(id)).pipe(tap(console.log))
    };


}

