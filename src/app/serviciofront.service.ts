import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
// import { resolve } from 'dns';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class ServiciofrontService {

  private Url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  private extractData(res: Response){

    let body = JSON.parse('' + res);
    return body || {}
  }

  private handleError<T>(operation = 'operation', result ? : T){
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  };

  getTipDocs(): Observable<any>{
    return this.http.get(this.Url + "/tipdoc", httpOptions);
  };

  getTipDoc(id:any): Observable<any> {
    console.log("   4555 ***** " + this.Url + "/tipdoc" + id)
    console.log("221     ");

    return this.http.get(this.Url + "/tipdoc" + id, httpOptions);
  }

  async insertTipDoc(TipDocD:any): Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.post(this.Url + "/tipdoc", TipDocD, httpOptions).toPromise();
    })
  };

  async updateTipDoc(cadena:any): Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.put(this.Url + "/tipdoc", cadena, httpOptions).toPromise();
    });
  }
}