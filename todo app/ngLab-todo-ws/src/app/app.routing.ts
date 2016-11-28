import { TodoAppComponent } from './todo-app/todo-app.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
 
export const AppRoutes: any = [
    {path: "", component: TodoAppComponent },
    { path: "page2", component: Page2Component },
    { path: "page3", component: Page3Component }
];
 
export const AppComponents: any = [
    TodoAppComponent,
    Page2Component,
    Page3Component
];