import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

// Router
import { RouterModule } from "@angular/router";

// Interface
import { HousingLocation } from "../housingLocation";

@Component({
  selector: "app-housing-location",
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="housingLocationProps.photo"
        alt="Exterior photo of {{ housingLocationProps.name }}"
      />
      <h2 class="listing-heading">{{ housingLocationProps.name }}</h2>
      <p class="listing-location">
        {{ housingLocationProps.city }}, {{ housingLocationProps.state }}
      </p>
      <a [routerLink]="['/details', housingLocationProps.id]">Learn More</a>
    </section>
  `,
  styleUrls: ["./housing-location.component.css"],
})
export class HousingLocationComponent {
  @Input() housingLocationProps!: HousingLocation; // Recebendo 'props' do componente 'father'.
}

/*
[src]="" -> Indica que o 'src' recebe um valor dinâmico que é 'photo' que tem a 'interface' 'HousingLocation'.
{{}} -> Desta forma é feita a interpolação de váriaveis dinâmicas. 
@Input() -> É a entrada dos dados dentro do componente, este component recebe dados do tipo 'HousingLocation'.
[routerLink]="['/details', housingLocation.id] -> Link de roteamento que redireciona para '/details' passado o id do objeto atual. 
*/
