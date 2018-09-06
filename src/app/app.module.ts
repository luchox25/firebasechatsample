import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { MessageComponent } from './message/message.component';
import { InputComponent } from './input/input.component';

const config = {
    apiKey: "AIzaSyCZvbkSXuYnfGbLaEg-tDRiyQBrn7joBhc",
    authDomain: "chat-firebase-5cb27.firebaseapp.com",
    databaseURL: "https://chat-firebase-5cb27.firebaseio.com",
    projectId: "chat-firebase-5cb27",
    storageBucket: "chat-firebase-5cb27.appspot.com",
    messagingSenderId: "315188955838"
};

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MessageComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
