import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionnaireComponent } from './pages/questionnaire/questionnaire.component';
import { SurveyResultsComponent } from './pages/survey-results/survey-results.component';
import { SearchComponent } from './pages/search/search.component';


const routes: Routes = [
  { path: 'home', component: QuestionnaireComponent },
  { path: 'search', component: SearchComponent },
  { path: 'results', component: SurveyResultsComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
