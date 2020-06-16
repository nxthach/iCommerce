import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { ICommerceSharedModule } from 'app/shared/shared.module';
import { ICommerceCoreModule } from 'app/core/core.module';
import { ICommerceAppRoutingModule } from './app-routing.module';
import { ICommerceHomeModule } from './home/home.module';
import { ICommerceEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    ICommerceSharedModule,
    ICommerceCoreModule,
    ICommerceHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    ICommerceEntityModule,
    ICommerceAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class ICommerceAppModule {}
