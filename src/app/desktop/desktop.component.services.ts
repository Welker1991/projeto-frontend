import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DesktopService {

    private url = 'https://localhost:7204/desktop';

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

}

