import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
    @Output()
    public navClick: EventEmitter<void> = new EventEmitter();

    public toggleSideNav() {
        this.navClick.emit();
    }
}
