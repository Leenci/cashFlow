import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Concepto, Gasto, Services } from 'src/app/apiRest/interface';


@Component({
    selector: 'add-gasto',
    templateUrl: './add-gasto.component.html'
  })
  export class addGastoComponent implements OnInit {
    addGs: FormGroup;
    
    
    listConceptos: Concepto[] = []
    constructor(private _Services: Services,
                private modalService: NgbModal,
                private router: Router,
                private fb: FormBuilder){
                    this.addGs = this.fb.group({
                        concepto: ['0', Validators.required],
                        fecha: ['', Validators.required],
                        monto: ['0', Validators.required]
                    })
                }
    ngOnInit(): void {
        this.getConcepto();
    }
    getConcepto(){
        this._Services.getConcepto(false).subscribe(data =>{
          this.listConceptos = data
          console.log(this.listConceptos)  
        }, error => {
          console.log(error)
        })
      }
      add(){
        const gasto: Gasto = {
            concepto: this.addGs.get('concepto')?.value,
            fecha:  this.addGs.get('fecha')?.value,
            monto:this.addGs.get('monto')?.value,
        }
        console.log(gasto)
        this._Services.createGasto(gasto).subscribe(data=>{ this.modalService.dismissAll(), window.location.reload() }, error =>{
            console.log(error)
          })
        
      }
  }