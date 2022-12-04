import { Route } from "@angular/router";

export const routes: Route[] = [
  {
    path: 'add-paper',
    loadComponent: () => import('../add-paper/add-paper.component').then((c) => c.AddPaperComponent)
  },
  {
    path: 'pull',
    loadComponent: () => import('../pull-paper/pull-paper.component').then((c) => c.PullPaperComponent)
  },
  {
    path: 'view-game',
    loadComponent: () => import('../view-game/view-game.component').then((c) => c.ViewGameComponent)
  },
  {
    path: "",
    redirectTo: "pull",
    pathMatch: "full",
  },
]
