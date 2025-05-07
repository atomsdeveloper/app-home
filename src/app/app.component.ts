import { Component } from "@angular/core";

// Components
import { HomeComponent } from "./home/home.component";

// Route
import { RouterModule } from "@angular/router";

@Component({
  standalone: true,
  selector: "app-root",
  template: `
    <main>
      <header class="brand-name">
        <img src="/assets/logo.svg" alt="Icon Logo" aria-hidden="true" />
      </header>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ["./app.component.css"],
  imports: [RouterModule],
})
export class AppComponent {
  title = "homes";
}

/*
<router-outlet></router-outlet> -> Usa o roteamento pra rederizar o componente através fso arquivo 'routes.ts'
*/
