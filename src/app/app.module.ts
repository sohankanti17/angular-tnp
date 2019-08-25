import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CompanySidenavComponent } from './components/company-sidenav/company-sidenav.component';
import { CompanyDataComponent } from './components/company-data/company-data.component';
import { CompanyDataService } from './company-data.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CompanySidenavComponent, CompanyDataComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CompanyDataService]
})
export class AppModule { }
