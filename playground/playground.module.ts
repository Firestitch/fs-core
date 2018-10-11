import './styles.scss';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FsCoreModule } from '../src';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app/material.module';
import { FsExampleModule } from '@firestitch/example';
import {
  ExampleComponent,
  ExamplesComponent,
  Page1Component,
  Page2Component,
  StylingComponent,
  BasicDialogComponent,
  BasicComponent,
  ComponentClassComponent,
  ComponentClassPageComponent,
  ComponentExampleComponent
} from './app/components';


const routes: Routes = [
  { path: '', component: ExamplesComponent, children:
    [
      { path: 'body/page1', component: Page1Component },
      { path: 'body/page2', component: Page2Component, data: { bodyClass: 'body-feed,body-class' }},
    ],
  },
  { path: '', component: ComponentClassComponent, children:
    [
      { path: 'component/class1', component: ComponentClassPageComponent },
      { path: 'component/class2', component: ComponentClassPageComponent }
    ]
  }
];

@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    FsCoreModule.forRoot(),
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    FsExampleModule,
    RouterModule.forRoot(routes),
  ],
  entryComponents: [
    BasicDialogComponent
  ],
  declarations: [
    AppComponent,
    ExamplesComponent,
    ExampleComponent,
    Page1Component,
    Page2Component,
    StylingComponent,
    BasicDialogComponent,
    BasicComponent,
    ComponentClassComponent,
    ComponentClassPageComponent,
    ComponentExampleComponent
  ],
  providers: [
  ],
})
export class PlaygroundModule {
}
