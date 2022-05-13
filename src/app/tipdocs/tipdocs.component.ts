import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiciofrontService } from '../serviciofront.service';


@Component({
  selector: 'app-tipdocs',
  templateUrl: './tipdocs.component.html',
  styleUrls: ['./tipdocs.component.css']
})

export class TipdocsComponent implements OnInit {

  TipDocs: any = [];
  TituloTipDocs = "";
  TablaTipDocs: any = [];

  MiTipDoc: any = [];
  TituloTipDoc = "";
  TabBusTipDocs: any = [];
  comboListaTipDoc: any = [];

  TituloTipDocEdit = "";
  MiTipDocE: any = [];
  comboEditarTipDoc: any = [];

  title = "Manejo de Tipos de Documento";
  controlLista = 1;
  BuscarEvalor = 1;

  //*********************** FORM GROUP ***********************/
  
  listaTiposDocum = new FormGroup({});

  filtrarTipDoc = new FormGroup({
    combofiltro: new FormControl()
  });

  insertarTipDoc = new FormGroup({
    textTipDoc: new FormControl(),
    textIniTipDoc: new FormControl()
  });

  actualizarTipDoc = new FormGroup({
    BuscarIdTipDoc: new FormControl(),
    textNuevoTipDoc: new FormControl(),
    textNuevoIniciales: new FormControl()
  })

  constructor(
    private formBuilder: FormBuilder,
    private servi: ServiciofrontService,
    Router: Router
  ) { }

  //************************* CRUD *************************

  public consultaTipoDocumentos(op:any){
    if(this.controlLista == 1){

      this.servi.getTipDocs().subscribe((data:any) => {

        if(op == 1){

          let dat = data;

          this.TipDocs = JSON.parse(data);
          this.TituloTipDocs = "Lista de Tipos de Documentos";
          this.TablaTipDocs[0] = "Indicador";
          this.TablaTipDocs[1] = "Denominación";
          this.TablaTipDocs[2] = "Inicales";

        }else if(op == 2){

          this.comboListaTipDoc = JSON.parse(data);
          this.MiTipDoc = null;
          this.TituloTipDoc = "";
          this.TabBusTipDocs[0] = "";
          this.TabBusTipDocs[1] = "";
          this.TabBusTipDocs[2] = "";

        }else if(op == 3){

          this.comboEditarTipDoc = JSON.parse(data);
          this.MiTipDocE = null;
          this.TituloTipDocEdit = "";
          console.log("El listado 5");
        }
      }, error => {console.error(error + " ")})

    }else{
      this.TipDocs = null;
      this.TituloTipDocs = "";
      this.TablaTipDocs[0] = "";
      this.TablaTipDocs[1] = "";
      this.TablaTipDocs[2] = "";
      this.controlLista = 1;
    }
  }

  public limpiarLista(){
    this.controlLista = 0;
  }

  public buscarTipDoc(){

    var filtroValor = this.filtrarTipDoc.getRawValue()['combofiltro'];
    console.log("318    " + filtroValor);

    this.servi.getTipDoc('/' + filtroValor).subscribe((data: {}) => {
      
      console.log("313     " + filtroValor);

      this.MiTipDoc = data;

      console.log("La data es " + data);
      console.log("MiTipDoc es " + this.MiTipDoc);

      this.TituloTipDoc = "Tipo de Documento Seleccionado";
      this.TabBusTipDocs[0] = "Indicador";
      this.TabBusTipDocs[1] = "Denominación";
      this.TabBusTipDocs[2] = "Iniciales";
      
    }, error => {console.log(error)})
  }

  ngOnInit(): void {
  }

}
