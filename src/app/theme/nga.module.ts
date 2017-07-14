import { ModuleWithProviders, NgModule } from '@angular/core';
import { GlobalService, MenuService } from "app/theme/services";
import { MenuComponent } from './components/menu/menu.component';

const components = [
    // MenuComponent
]

const providers = [
    GlobalService,
    MenuService
]

@NgModule({
    imports: [],
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
