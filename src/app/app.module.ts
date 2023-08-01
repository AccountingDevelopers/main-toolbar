import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgAccountingModule } from 'ng-accounting'
import { ButtonModule } from 'primeng/button'
import { AvatarModule } from 'primeng/avatar'

import { AppComponent } from './app.component';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        NgAccountingModule.forRoot({
            api: {
                key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGFlZGY2YmRmMWRhOTkwZWI0MmI1YjQiLCJjb21wYW55SWQiOiI2NGFmZmQ4ZDhlYjFkMzJhODBlM2I0YWIiLCJ3b3Jrc3BhY2VOYW1lIjoiam91cm5leSIsImlhdCI6MTY5MDU2MjAxMSwiZXhwIjoxNzE2NDgyMDExfQ.BRZ-3OIJ4qMpoH0CbEFr05mHfQKV4r1nZlKOuWiXv8U',
                url: {
                    client: 'http://localhost:4200',
                    server: isDevMode() ? 'http://localhost:80/api/v1' : 'http://localhost:80/api/v1'
                }
            }
        }),
        ButtonModule,
        AvatarModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
