import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Material } from './material';
import { ModeloComponent } from './modelo/modelo.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Material, ModeloComponent, FormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto Inteligencia Artificial';
}
