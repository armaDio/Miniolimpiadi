import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SidebarListComponent } from './components/sidebar-list/sidebar-list.component';
import { materialModule } from '../shared/material.module';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    materialModule
  ],
  exports:[
    NavbarComponent,
    SidebarListComponent
  ]
})
export class CoreModule {
  public static forRoute(){
    return{
    ngModule: CoreModule,
      providers:[
      ]
    }
  }

  public static forChild(){
    return{
      NgModule: CoreModule
    }
  }
  
  public static forTest(){
    return{
      NgModule:CoreModule,
      providers:[]
    }
  }

  constructor(@Optional() @SkipSelf() parentModule:CoreModule){
    if(parentModule) {
      throw new Error("CoreModule is already instantiated")
    }
  }
 }
