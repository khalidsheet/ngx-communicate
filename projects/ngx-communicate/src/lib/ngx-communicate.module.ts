import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxCommunicateService } from './ngx-communicate.service';



@NgModule({
  declarations: [],
  imports: [],
  exports: []
})
export class NgxCommunicateModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxCommunicateModule,
      providers: [NgxCommunicateService]
    }
  }
}
