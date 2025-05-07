import { Component, inject, Inject } from "@angular/core";
import { CommonModule } from "@angular/common";

// Component
import { HousingLocationComponent } from "../housing-location/housing-location.component";

// Interface
import { HousingLocation } from "../housingLocation";

// Service
import { HousingService } from "../housing.service";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form action="">
        <input type="text" placeholder="Filter by city" #filter />
        <button
          class="primary"
          type="button"
          (click)="filterResults(filter.value)"
        >
          Search
        </button>
      </form>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of filteredLocationList"
        [housingLocation]="housingLocation"
      ></app-housing-location>
    </section>
  `,
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  filteredLocationList: HousingLocation[] = [];
  // Usando 'Service' para receber os dados necessários e renderizar o componente corretamente.
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.filteredLocationList = this.housingService.getHousingLocations();
  }

  // Função que filtra os dados de acordo com o que foi dígitado na barra de pesquisa.
  // Passando por cada item de 'housingLocationList' e verificando a cidade que contém o texto recebido no parâmetro.
  filterResults(text: string) {
    if (!text) this.filteredLocationList = this.housingLocationList;

    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}

/*
*ngFor= -> Diretiva para mapear uma lista/array.
[housingLocation]= -> Passa a propriedade atual percorrida para o componente filho.
 */
