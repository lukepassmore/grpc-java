import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy, RouterModule, Routes} from '@angular/router';
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {AppComponent} from './app.component';
import {TabsPage} from './tabs/tabs.page';
import {JsonPage} from './json/json.page';
import {ProtobufPage} from './protobuf/protobuf.page';
import {ProtobufparsedPage} from './protobufparsed/protobufparsed.page';
import {PostprotobufPage} from './postprotobuf/postprotobuf.page';
import {DeleteprotobufPage} from './deleteprotobuf/deleteprotobuf.page';
import {PutprotobufPage} from './putprotobuf/putprotobuf.page';
import {PatchprotobufPage} from './patchprotobuf/patchprotobuf.page';
import {HttpClientModule} from '@angular/common/http';
import {DetailComponent} from './detail/detail.component';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'json',
        children: [{
          path: '',
          component: JsonPage
        }]
      },
      {
        path: 'protobuf',
        children: [{
          path: '',
          component: ProtobufPage
        }]
      },
      {
        path: 'protobufparsed',
        children: [{
          path: '',
          component: ProtobufparsedPage
        }]
      },
      {
        path: 'postprotobuf',
        children: [{
          path: '',
          component: PostprotobufPage
        }]
      },
      {
        path: 'putprotobuf',
        children: [{
          path: '',
          component: PutprotobufPage
        }]
      },
      {
        path: 'deleteprotobuf',
        children: [{
          path: '',
          component: DeleteprotobufPage
        }]
      },
      {
        path: 'patchprotobuf',
        children: [{
          path: '',
          component: PatchprotobufPage
        }]
      },
      {
        path: '',
        redirectTo: '/tabs/json',
        pathMatch: 'full',
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/json',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [AppComponent, TabsPage, ProtobufPage, ProtobufparsedPage, PostprotobufPage, PutprotobufPage, DeleteprotobufPage, PatchprotobufPage, JsonPage, DetailComponent],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(), RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
  providers: [
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
