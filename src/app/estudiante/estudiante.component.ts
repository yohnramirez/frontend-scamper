import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiciofrontService } from '../serviciofront.service';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {

  Estudiantes: any = [];
  TituloEstudiantes = "";
  TablaEstudiantes: any = [];

  MiEstudiante: any = [];
  TituloEstudiante = "";
  TablaBuscarEstudiantes: any = [];
  comboListaEstudiante: any = [];

  TituloEstudianteEditar = "";
  MiEstudianteEditar: any = [];
  comboEditarEstudiante: any = [];

  title = "Administrador de Estudiantes";
  controlLista = 1;
  BuscarEvalor = 1;

  //*********************** FORM GROUP ***********************/
  
  ListaEstudiantes = new FormGroup({});

  filtrarEstudiante = new FormGroup({
    combofiltro: new FormControl()
  });

  // InsertarGTipDoc = new FormGroup({
  //   textTipDoc: new FormControl(),
  //   textIniTipDoc: new FormControl()
  // });

  // ActualizarATipDoc = new FormGroup({
  //   BuscarIdTipDoc: new FormControl(),
  //   textNuevoTipDoc: new FormControl(),
  //   textNuevoIniciales: new FormControl()
  // })

  constructor(
    private formBuilder: FormBuilder,
    private servi: ServiciofrontService,
    Router: Router
  ) { }

  //************************* CRUD *************************

  public consultaEstudiantes(op:any){
    if(this.controlLista == 1){

      this.servi.getEstudiantes().subscribe((data:any) => {

        if(op == 1){

          // let dat = data;

          this.Estudiantes = JSON.parse(JSON.stringify(data));
          this.TituloEstudiantes = "Lista de Tipos de Documentos";
          this.TablaEstudiantes[0] = "ID";
          this.TablaEstudiantes[1] = "Nombre";
          this.TablaEstudiantes[2] = "Apellido";

        }else if(op == 2){

          this.comboListaEstudiante = JSON.parse(JSON.stringify(data));
          this.MiEstudiante = null;
          this.TituloEstudiante = "";
          this.TablaBuscarEstudiantes[0] = "";
          this.TablaBuscarEstudiantes[1] = "";
          this.TablaBuscarEstudiantes[2] = "";

        }else if(op == 3){

          this.comboEditarEstudiante = JSON.parse(JSON.stringify(data));
          this.MiEstudianteEditar = null;
          this.TituloEstudianteEditar = "";
          console.log("El listado 5");
        }
      }, error => {console.error(error + " ")})

    }else{
      this.Estudiantes = null;
      this.TituloEstudiantes = "";
      this.TablaEstudiantes[0] = "";
      this.TablaEstudiantes[1] = "";
      this.TablaEstudiantes[2] = "";
      this.controlLista = 1;
    }
  }

  public limpiarLista(){
    this.controlLista = 0;
  }

  public buscarEstudiante(){

    var filtroValor = this.filtrarEstudiante.getRawValue()['combofiltro'];
    console.log("318    " + filtroValor);

    this.servi.getEstudiante('/' + filtroValor).subscribe((data: {}) => {
      
      console.log("313     " + filtroValor);

      this.MiEstudiante = data;

      console.log("La data es " + data);
      console.log("Mi Estudiante es " + this.MiEstudiante);

      this.TituloEstudiante = "Estudiante Seleccionado";
      this.TablaBuscarEstudiantes[0] = "ID";
      this.TablaBuscarEstudiantes[1] = "Nombre";
      this.TablaBuscarEstudiantes[2] = "Apellido";
      
    }, error => {console.log(error)})
  }

  // public InsertarTipDoc(){

  //   var datosvalo2 = this.InsertarGTipDoc.

  // }

  ngOnInit(): void {
    this.ListaEstudiantes = this.formBuilder.group({});
  }
}
