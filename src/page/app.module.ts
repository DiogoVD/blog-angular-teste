import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { TitleComponent } from './title/title.component';
import { PersonCardComponent } from './person-card/person-card.component';
import { SmallCardComponent } from './small-card/small-card.component';
import { BigCardComponent } from './big-card/big-card.component';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { ItemMenuComponent } from './item-menu/item-menu.component';

@NgModule({
  imports: [CommonModule, BrowserModule],

  declarations: [
    MenuComponent,
    ItemMenuComponent,
    TitleComponent,
    PersonCardComponent,
    SmallCardComponent,
    BigCardComponent,
    HomeComponent,
  ],
  bootstrap: [HomeComponent],
})
export class AppModule {}
