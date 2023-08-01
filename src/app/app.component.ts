import { Component } from '@angular/core';
import { AccSystemService } from 'ng-accounting';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private readonly accSystemService: AccSystemService) { }
    currentUser!: any

    ngOnInit(): void {
        this.currentUser = this.accSystemService.currentUser
        console.log(this.currentUser);

    }

    getAvatar() {
        return this.currentUser.name.first.split('').pop()
    }
}
