import { NgModule } from '@angular/core';
import { LayoutComponent } from 'app/layout/layout.component';

import { SharedModule } from 'app/shared/shared.module';
import { EmptyLayoutModule } from './layouts/empty/empty.module';
import { EnterpriseLayoutModule } from './layouts/enterprise/enterprise.module';

@NgModule({
    declarations: [
        LayoutComponent
    ],
    imports: [
        SharedModule,
        EnterpriseLayoutModule,
        EmptyLayoutModule
    ],
    exports: [
        LayoutComponent,
        EnterpriseLayoutModule,
        EmptyLayoutModule
    ]
})
export class LayoutModule {
}
