import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CelularService {

    private url = 'https://localhost:7204/celular/';

    httpOptions = {
        Headers: new HttpHeaders({ 'content-type': 'application/json' })
    }

    constructor(private http: HttpClient) { }

    getCelulares(): Observable<any> {
        return this.http.get(this.url).pipe(tap(console.log))
    };

    createCelular(celular: any): Observable<any> {
        return this.http.post(this.url, celular).pipe(tap(console.log))
    };

    atualizarCelular(id: any, totem: any): Observable<any> {
        console.log(id)
        console.log(this.url + id)
        return this.http.put(this.url + id, totem).pipe(tap(console.log))
    };

    deletarCelular(id: any): Observable<any> {
        return this.http.delete(this.url.concat(id)).pipe(tap(console.log))
    };
}