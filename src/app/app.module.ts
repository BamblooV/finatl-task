import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { metaReducers, reducers } from './reducers';
import { AuthEffects } from './auth/state/auth.effects';
import { UserInfoEffects } from './user/state/user.effects';
import { apiHeadersInterceptor } from './core/interceptors/api-headers.interceptor';
import { GroupsEffects } from './messenger/state/groups/groups.effects';
import { UsersEffects } from './messenger/state/users/users.effects';
import { GroupDialogEffects } from './messenger/state/group-dialog/group-dialog.effects';
import { ConversationEffects } from './messenger/state/person-conversation/person-conversation.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ToastModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([
      AuthEffects,
      UserInfoEffects,
      GroupsEffects,
      UsersEffects,
      GroupDialogEffects,
      ConversationEffects,
    ]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [MessageService, provideHttpClient(withInterceptors([apiHeadersInterceptor]))],
  bootstrap: [AppComponent],
})
export class AppModule {}
