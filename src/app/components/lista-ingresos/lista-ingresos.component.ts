import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Concepto, Ingreso, Services } from 'src/app/apiRest/interface';


@Component({
  selector: 'app-lista-ingresos',
  templateUrl: './lista-ingresos.component.html',
  
})
export class ListaIngresosComponent implements OnInit {
  
  
  listConceptos: Concepto[] =  []
  listIngresos: Ingreso[] = []

  constructor(private _Services: Services, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.getAll();
    
  }

  getAll(){
    this._Services.getListIn().subscribe(data => {
      console.log(data)
      this.listIngresos = data 
    }, error => {
      console.log(error)
    });
  }
  
  open(content: any) {
    this.modalService.open(content, {centered: true, ariaLabelledBy: 'modal-basic-title'}).result.then()
  }
  delete(id: any){
    this._Services.deleteIn(id).subscribe(data=> {window.location.reload(), this.getAll()},
    error => { console.log(error)});
    
  }
 
}
