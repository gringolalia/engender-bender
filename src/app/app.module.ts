import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';

import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { PlayCardsComponent } from './play-cards/play-cards.component';
import { FourthPageComponent } from './fourth-page/fourth-page.component';
import { RootFluteComponent } from './root-flute/root-flute.component';
import { CarteBlancheComponent } from './carte-blanche/carte-blanche.component';
import { GatosComponent } from './gatos/gatos.component';
import { EngenhocasComponent } from './engenhocas/engenhocas.component';
import { GoldbergComponent } from './goldberg/goldberg.component';
import { VinteUmComponent } from './vinte-um/vinte-um.component';
import { AltNavigationComponent } from './alt-navigation/alt-navigation.component';
import { AltNavComponent } from './alt-nav/alt-nav.component';
import { NavPrecisoComponent } from './nav-preciso/nav-preciso.component';

const appRoutes: Routes = [
  { path: 'first-page', component: FirstPageComponent },
  { path: 'second-page', component: SecondPageComponent },
  { path: 'third-page', component: ThirdPageComponent },
  { path: 'playing-cards', component: PlayCardsComponent },
  { path: 'mission-control', component: MyDashboardComponent },
  { path: 'route-flute', component: RootFluteComponent },
  { path: 'riding-fourth', component: FourthPageComponent },
  { path: '', component: VinteUmComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    MyDashboardComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    PlayCardsComponent,
    FourthPageComponent,
    RootFluteComponent,
    GatosComponent,
    EngenhocasComponent,
    GoldbergComponent,
    VinteUmComponent,
    AltNavigationComponent,
    AltNavComponent,
    NavPrecisoComponent
  ],
  imports: [
    BrowserModule,
    // FlexLayoutModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
