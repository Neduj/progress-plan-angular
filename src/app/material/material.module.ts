import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

const MAT_COMPONENTS = [
  MatToolbarModule,
  MatButtonModule,
];


@NgModule({
  exports: [MAT_COMPONENTS],
  imports: [MAT_COMPONENTS]
})
export class MaterialModule { }
