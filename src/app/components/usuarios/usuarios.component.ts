import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {

  Usuarios:any;
constructor(private dataService:DataService) {}
  ngOnInit(): void {
    this.getClientesData();
  
}
 getClientesData() {
  this.dataService.getData().subscribe(res =>{
  this.Usuarios = res;
  });
  
}
}
