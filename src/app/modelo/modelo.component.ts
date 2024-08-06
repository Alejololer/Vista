import { Component } from '@angular/core';
import { Material } from '../material';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ModeloService } from './modelo.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-modelo',
  standalone: true,
  imports: [Material, CommonModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule, HttpClientModule],
  providers: [ModeloService],
  templateUrl: './modelo.component.html',
  styleUrl: './modelo.component.css'
})
export class ModeloComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private httpModelo: ModeloService,) {
    this.form = this.fb.group({
      hora: [''],
      circuito: [''],
      tipo: [''],
      dia: [''],
      mes: ['']
    });
    
  }
  salida :string = "";
  horas :number[] = Array.from({length: 24}, (_, i) => i + 1);
  circuitos :string[] = ['POMASQUI', 'CENTRO HISTORICO', 'LAS CASAS', 'EL MIRADOR',
    'SAN JUAN', 'TUMBACO SUR', 'CARCELEN', 'GUAMANI', 'LA BOTA',
    'CHIMBACALLE', 'KENNEDY', 'SOLANDA', 'MENA', 'NAYON', 'ITCHIMBIA',
    'CHILLOGALLO', 'LAS CUADRAS', 'SAN ISIDRO DEL INCA',
    'SAN JUAN DE CALDERON', 'MAGDALENA', 'VIA LACTEA', 'CHILIBULO',
    'IÑAQUITO', 'LA MARISCAL', 'PIFO', 'CALDERON', 'FERROVIARIA',
    'BARRIO NUEVO', 'CONOCOTO SUR', 'DAMMER', 'AEROPUERTO',
    'LA ROLDOS', 'PONCIANO', 'JIPIJAPA', 'YARUQUI', 'QUITUMBE',
    'EL BOSQUE', 'QUINCHE', 'SANTA ROSA', 'NONO', 'PUENGASI',
    'CONOCOTO NORTE', 'COCHAPAMBA', 'PANECILLO', 'ARGELIA', 'OYACOTO',
    'COTOCOLLAO', 'LOS LLANOS', 'ECUATORIANA', 'SANTA ANITA',
    'LA MERCED', 'SAN ANTONIO BAJO', 'TURUBAMBA', 'LLOA', 'ALANGASI',
    'EL PLACER', 'MONJAS COLLACOTO', 'UNIVERSITARIO', 'LA PAMPA',
    'GUAYLLABAMBA', 'AMAGUAÑA CENTRO', 'ZAMBIZA', 'TUMBACO',
    'EL EJIDO', 'CARAPUNGO', 'BELLAVISTA DE CALDERON', 'LLANO CHICO',
    'BICENTENARIO', 'EL CONDADO', 'MENA DEL HIERRO', 'EL CALZADO',
    'LA LIBERTAD', 'PUEMBO', 'SANTA ISABEL', 'SAN ANTONIO ALTO',
    'COLINAS DEL NORTE', 'CUMBAYA SUR', 'TABABELA', 'PINTAG', 'TABLON',
    'NANEGALITO', 'PUELLARO', 'GUALEA', 'CALACALI',
    'LADERAS DE SAN FRANCISCO', 'NANEGAL', 'CHECA', 'PACTO',
    'GUANGOPOLO', 'SAN JOSE DE MINAS OCCIDENTE',
    'SAN JOSE DE MINAS ORIENTE', 'PERUCHO']
  tipos :string[] = ['Otros', 'Robo y Hurto', 'Delitos Sexuales',
    'Accidentes y Emergencias', 'Violencia y Agresiones',
    'Tentativa o Sospecha de Delitos',
    'Consumo y Tenencia de Sustancias',
    'Presencia Policial y Patrullaje', 'Desapariciones',
    'Tenencia y Uso de Armas', 'Escándalos y Ruidos',
    'Homicidios y Secuestros', 'Muerte']
  dias :string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
  meses :string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

  consultarModelo(){
    const mesIndex = this.meses.indexOf(this.form.value.mes);
    const mesNumeroEquivalente = mesIndex + 1;
    this.httpModelo.getConsultaModelo(this.form.value.hora, this.form.value.circuito, this.form.value.tipo, this.form.value.dia, mesNumeroEquivalente).subscribe(
      (data: any) => {
          this.salida = data.result;
      }
    );
  }
}
