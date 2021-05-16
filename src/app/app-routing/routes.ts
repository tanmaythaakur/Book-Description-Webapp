import { Routes } from '@angular/router';

import { BooklistComponent } from '../booklist/booklist.component';
import { BookdetailComponent } from '../bookdetail/bookdetail.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'booklist', component: BooklistComponent},
    {path: 'bookdetail/:id', component: BookdetailComponent},
    { path: 'about', component: AboutComponent},
    {path: 'contactus', component: ContactComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
];