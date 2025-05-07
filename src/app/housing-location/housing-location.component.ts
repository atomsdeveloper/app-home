import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

// Router
import { RouterModule } from "@angular/router";

// Interface
import { Housinglocation } from "../housinglocation";

@Component({
  selector: "app-housing-location",
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="housingLocation.photo"
        alt="Exterior photo of {{ housingLocation.name }}"
      />
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">
        {{ housingLocation.city }}, {{ housingLocation.state }}
      </p>
      <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
    </section>
  `,
  styleUrls: ["./housing-location.component.css"],
})
export class HousingLocationComponent {
  @Input() housingLocation!: Housinglocation;
}

/*
[src]="" -> Indica que o 'src' recebe um valor dinâmico que é 'photo' que tem a 'interface' 'HousingLocation'.
{{}} -> Desta forma é feita a interpolação de váriaveis dinâmicas. 
@Input() -> É a entrada dos dados dentro do componente, este component recebe dados do tipo 'HousingLocation'.
[routerLink]="['/details', housingLocation.id] -> Link de roteamento que redireciona para '/details' passado o id do objeto atual. 
*/
