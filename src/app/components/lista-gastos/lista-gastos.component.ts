import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Gasto, Services } from 'src/app/apiRest/interface';



@Component({
  selector: 'app-lista-gastos',
  templateUrl: './lista-gastos.component.html'
  
})
export class ListaGastosComponent implements OnInit {
  
  

  
  listGastos: Gasto[]=[ ]

  constructor(private _Services: Services, 
              private modalService: NgbModal,
              private router: Router
              ) {
                

              
              }

  ngOnInit(): void {
    this.getAll();
    
  }
  getAll(){
    this._Services.getListGs().subscribe(data => {
      console.log(data)
      this.listGastos = data
    }, error => {
      console.log(error)
    })
  }
 
  open(content: any) {
    this.modalService.open(content, {centered: true, ariaLabelledBy: 'modal-basic-title'}).result.then()
  }
  delete(id: any){
    this._Services.deleteGasto(id).subscribe(data=> {window.location.reload(), this.getAll()},
    error => { console.log(error)});
    
  }

}
