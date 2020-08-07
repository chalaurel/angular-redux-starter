import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { userDataComponent } from './pages/user/user.component';
import rootReducers from './reducers/root.reducer';
import { userDataEffects } from './effects/user.effect';
import { userDataService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    userDataComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      ...rootReducers
    }),
    EffectsModule.forRoot([
      userDataEffects,
    ]),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    userDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
