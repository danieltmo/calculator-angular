
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightValueDirective } from './diretivas/highlight-value.directive';
import { CalculatorComponent } from './components/calculator/calculator.component';


@NgModule({
  imports: [
    CommonModule,FormsModule
  ],
  declarations: [CalculatorComponent, HighlightValueDirective],
  exports:[CalculatorComponent]
})
export class SharedModule { }
