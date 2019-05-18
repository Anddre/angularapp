import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-alumno',
  templateUrl: './datos-alumno.component.html',
  styleUrls: ['./datos-alumno.component.css']
})
export class DatosAlumnoComponent implements OnInit {

  alumno: any = {
    nombre: "Carlos Lopez",
    legajo: "23368",
    carrera: "TSP",
    promedio: "8.2"
  }

  ngOnInit() {
  }

}
