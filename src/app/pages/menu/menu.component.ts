import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu = [];  // Inicializamos la lista de menú como un array vacío
  categories = ['Entradas', 'Tradicionales', 'Carnes', 'Asados', 'Bebidas'];
  filteredMenu = [];
  selectedCategory = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadMenu();
  }

  loadMenu() {
    // Carga el archivo JSON desde la carpeta de assets
    this.http.get<any[]>('assets/menu.json').subscribe(data => {
      this.menu = data;
      this.filteredMenu = this.menu;  // Inicialmente mostrar todos los platos
    });
  }

  filterMenu(categoria: string) {
    this.selectedCategory = categoria;
    this.filteredMenu = this.menu.filter(plato => plato.categoria === categoria);
  }
}
