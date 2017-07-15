import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GlobalService, MenuService } from 'app/theme/services';
import { MenuComponent } from './components/menu/menu.component';

const components = [
    MenuComponent
]

const providers = [
    GlobalService,
    MenuService
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [...components],
    declarations: [...components],
    providers: [...providers],
})
export class NgaModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: NgaModule,
            providers: [
                ...providers
            ]
        }
    }
}
