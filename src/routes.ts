import { Routes } from "@angular/router";

// Component
import { HomeComponent } from "./app/home/home.component";
import { DetailsComponent } from "./app/details/details.component";

const routeConfig: Routes = [
  // Rota / -> Rederiza o 'HomeComponent'
  {
    path: "",
    component: HomeComponent,
    title: "Home Page",
  },
  // Rota /details -> Rederiza o 'DetailsComponent'
  {
    path: "details/:id",
    component: DetailsComponent,
    title: "Details Page",
  },
];

export default routeConfig;
