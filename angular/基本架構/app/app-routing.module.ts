import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 預先載入模組
import { PreloadAllModules } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutGuard } from './layout/layout.guard';
import { EnsureLoginGuard } from './login/ensure-login.guard';

const routes: Routes = [
  // 預設路由
  {
    path: '',
    component: LayoutComponent,
    // guard
    canActivate: [LayoutGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    //離開頁面時使用守門員
    canDeactivate: [EnsureLoginGuard]
  },
  // 延遲載入(只適用在module)
  {
    path: 'feature',
    // #前面放路徑，後面放模組名稱
    loadChildren: './feature/feature.module#FeatureModule'
  },
  // 萬用路由或轉向路由(必放在路由最後一個)
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // 可log目前url位置
    enableTracing: true,
    // 將#/url導至/url
    useHash: true,
    // 預先載入
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
