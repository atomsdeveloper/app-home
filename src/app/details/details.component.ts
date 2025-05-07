import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";

// Route
import { ActivatedRoute } from "@angular/router";

// Service
import { HousingService } from "../housing.service";

// Interface
import { Housinglocation } from "../housinglocation";

// Forms
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-details",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <article>
      <img
        class="listing-photo"
        [src]="housingLocation?.photo"
        alt="Extrat photo from {{ housingLocation?.name }}"
      />
      <section class="listing-description">
        <h2 class="listing-heading">{{ housingLocation?.name }}</h2>
        <p class="listing-location">{{ housingLocation?.state }}</p>
      </section>
      <section class="listing-features">
        <h2 class="listing-heading">About this housing</h2>
        <ul>
          <li>Units available: {{ housingLocation?.availableUnits }}</li>
          <li>Does this location have wi-Fi: {{ housingLocation?.wifi }}</li>
          <li>
            Does this have location laundry: {{ housingLocation?.laundry }}
          </li>
        </ul>
      </section>
      <section class="listing-apply">
        <h2 class="listing-heading">Apply now to live here</h2>
        <form (ngSubmit)="submitApplication()" [formGroup]="applyForm">
          <label for="first-name">First Name</label>
          <input type="text" id="first-name" formControlName="firstName" />

          <label for="Last-name">Last Name</label>
          <input type="text" id="last-name" formControlName="lastName" />

          <label for="email">First Name</label>
          <input type="text" id="email" formControlName="email" />

          <button type="button" class="primary">Apply now</button>
        </form>
      </section>
    </article>
  `,
  styleUrls: ["./details.component.css"],
})
export class DetailsComponent {
  // Recebe os valores inseridos na rota, como neste caso o 'params'.
  route: ActivatedRoute = inject(ActivatedRoute);
  // Usando 'Service' para receber os dados necessários e renderizar o componente corretamente.
  housingService = inject(HousingService);
  // Criando váriavel que receberá o obejto pelo 'id' para ser renderizado.
  housingLocation: Housinglocation | undefined;

  // 'FormGroup' representa uma coleção de controle que compôem um formulário.
  applyForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl(""),
  });

  constructor() {
    const housingLocationId = this.route.snapshot.params["id"];
    this.housingLocation =
      this.housingService.getHousingLocationById(housingLocationId);

    // const housingLocationId = this.route.snapshot.params["id"];
    // this.housingService
    //   .getHousingLocationById(housingLocationId)
    //   .then((housingLocation) => {
    //     this.housingLocation = housingLocation;
    //   });
  }

  // Passando os valores recebidos no formulário para o 'Service' que trata-rá os dados.
  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? "",
      this.applyForm.value.lastName ?? "",
      this.applyForm.value.email ?? ""
    );
  }
}
