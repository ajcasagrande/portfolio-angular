import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule }   from '@angular/material/card';
import { MatIconModule }   from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule
  ]
})
export class MaterialModule {}
