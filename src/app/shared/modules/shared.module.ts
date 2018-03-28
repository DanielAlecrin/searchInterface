import {ModuleWithProviders, NgModule} from '@angular/core';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
/* import {SampleModule} from 'angular-example-library'; */

@NgModule({
  imports: [
    MaterialModule,
    FlexLayoutModule,
  /*   SampleModule */
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
 /*    SampleModule */
  ]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      /* providers: [
        HeroService
      ] */
    };
  }
}
