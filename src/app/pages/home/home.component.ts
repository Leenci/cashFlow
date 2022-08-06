import { Component, OnInit } from '@angular/core';
import { Gasto, Ingreso, Services } from 'src/app/apiRest/interface';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  listIngresos: Ingreso[] =[]
  listGastos: Gasto[]=[]
  
  saldo = 0
  textBarGs = "SUS GASTOS SON DEL "
  textBarIn = "SU SALDO ES DEL "
  barIn={
    "width":"50%"
  }
  barGs ={
    "width":"50%"
  }  
   

  constructor(private _Services: Services) { 
    
  }
  ngOnInit(): void {
    this.getMontos()
    
  }
  getMontos(){
    this._Services.getBalance().subscribe(data => {
      console.log(data)
      const mgS = data.mGs
      const mIn = data.mIn
      this.saldo = data.saldo

      const valG = (Math.round(( mgS/ mIn )*100));
      const valI = Math.round(100 - valG)
      
      this.textBarGs = "SUS GASTOS SON DEL " + valG.toString() + "%";
      this.textBarIn = "SU SALDO ES DEL " + valI.toString() + "%";
        this.barGs ={
          "width": valG.toString() + "%"
        }
        this.barIn={
          "width": valI.toString() + "%"
        }

    }, error => {
        console.log(error)
    })
    
     
  }

}
