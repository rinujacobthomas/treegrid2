import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  ContextMenuService,
  EditService,
  FilterService,
  PageService,
  SortService,
  ToolbarService,
  TreeGridModule,
} from '@syncfusion/ej2-angular-treegrid';
import { FormsModule } from '@angular/forms';
import { ContextMenuModule } from '@syncfusion/ej2-angular-navigations';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    TreeGridModule,
    FormsModule,
    // DialogModule,
    ContextMenuModule,
    // GridAllModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-left',
      preventDuplicates: true,
    }),
  ],
  providers: [
    PageService,
    SortService,
    FilterService,
    ToolbarService,
    EditService,
    ContextMenuService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
