import { ListadoComponent } from './listado/listado.component';
import { HeroeComponent } from './heroe/heroe.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent //SE USA FUERA DEL MODULO, EN ESTE CASO EN EL HTML
        
    ],
    imports: [
        CommonModule
    ]

})
export class HeroesModule{}