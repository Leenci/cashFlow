import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Gasto{
    id?:              number,
    concepto?:        number,
    nombre_concepto?: string,
    monto:            number,
    fecha:            Date
}
export interface Ingreso{
    id?:              number,
    concepto?:        number,
    nombre_concepto?: string,
    monto:            number,
    fecha:            Date
}
export interface Concepto{
  id?:                number,
  nombre_concepto:    string
}
@Injectable({
    providedIn: 'root'
  })


export class Services {
    private myAppUrl     = 'http://localhost:3000'
    private gasto_api    = '/api/gastos/'
    private ingreso_api  = '/api/ingresos/'
    private concepto_api = '/api/conceptos/'
    private getAll       = 'getAll'
    private getSaldo     = '/api/getSaldo'


    constructor(private http: HttpClient) {}


    //API TABLA CONCEPTOS
    getConcepto(condicion: boolean): Observable<any>{
      return this.http.get(this.myAppUrl + this.concepto_api + this.getAll + '/' + condicion)
    }
    createConcepto(concepto: Concepto): Observable<any> {
      return this.http.post(this.myAppUrl + this.concepto_api + 'create/', concepto)
    }
    deleteConcepto(id: number): Observable<any>{
      return this.http.delete(this.myAppUrl + this.concepto_api + 'delete/' + id )
    }

    //API TABLA GASTOS
    getListGs(): Observable<any> {
      return this.http.get(this.myAppUrl + this.gasto_api + this.getAll);
    }
    getGasto(id: any): Observable<any> {
      return this.http.get(this.myAppUrl + this.gasto_api + id)
    }
    createGasto(gasto: Gasto): Observable<any> {
      return this.http.post(this.myAppUrl + this.gasto_api + 'create/', gasto)
    }
    deleteGasto(id: number): Observable<any>{
      return this.http.delete(this.myAppUrl + this.gasto_api + 'delete/' + id )
    }

    //API TABLA INGRESOS
    getListIn(): Observable<any> {
      return this.http.get(this.myAppUrl + this.ingreso_api + this.getAll );
    }
    getIn(id: any): Observable<any> {
      return this.http.get(this.myAppUrl + this.ingreso_api + id)
    }
    createIn(ingreso: Ingreso): Observable<any> {
      return this.http.post(this.myAppUrl + this.ingreso_api + 'create/', ingreso)
    }
    deleteIn(id: number): Observable<any>{
      return this.http.delete(this.myAppUrl + this.ingreso_api + 'delete/' + id )
    }

    //API OBTENER EL BALANCE
    getBalance(): Observable<any> {
      return this.http.get(this.myAppUrl +  this.getSaldo)
    }
    
}
