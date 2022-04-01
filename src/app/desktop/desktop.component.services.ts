import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DesktopService {

    private url = 'https://localhost:7204/desktop/';

    httpOptions = {
        Headers: new HttpHeaders({ 'content-type': 'application/json' })
    }

    constructor(private http: HttpClient) { }

    getDesktops(): Observable<any> {
        return this.http.get(this.url).pipe(tap(console.log))
    };

    createDesktop(desktop: any): Observable<any> {
        return this.http.post(this.url, desktop).pipe(tap(console.log))
    }

    atualizarDesktop(id: any, totem: any): Observable<any> {
        console.log(id)
        console.log(this.url + id)
        return this.http.put(this.url + id, totem).pipe(tap(console.log))
    };

    deletarDesktop(id: any): Observable<any> {
        return this.http.delete(this.url.concat(id)).pipe(tap(console.log))
    };

}

