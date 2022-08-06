import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Concepto, Ingreso, Services } from 'src/app/apiRest/interface';



@Component({
    selector: 'add-ingreso',
    templateUrl: './add-ingreso.component.html'
  })
  export class addIngresoComponent implements OnInit {
    addIn: FormGroup;
    
    
    listConceptos: Concepto[] = []
    constructor(private _Services: Services,
                private modalService: NgbModal,
                private router: Router,
                private fb: FormBuilder){
                    this.addIn = this.fb.group({
                        concepto: ['0', Validators.required],
                        fecha: ['', Validators.required],
                        monto: ['0', Validators.required]
                    })
                }
    ngOnInit(): void {
        this.getConcepto();
    }
    getConcepto(){
        this._Services.getConcepto(true).subscribe(data =>{
          this.listConceptos = data
          console.log(this.listConceptos)  
        }, error => {
          console.log(error)
        })
      }
      add(){
        const ingreso: Ingreso = {
            concepto: this.addIn.get('concepto')?.value,
            fecha:  this.addIn.get('fecha')?.value,
            monto:this.addIn.get('monto')?.value,
        }
        console.log(ingreso)
        this._Services.createIn(ingreso).subscribe(data=>{ this.modalService.dismissAll(), window.location.reload() }, error =>{
            console.log(error)
          })
        
      }
  }