import { Route } from "@angular/router";
import { DetailComponent } from "./detail/detail.component";
import { MainComponent } from "./main/main.component";

export const publicationRoutes: Route[] = [
    {
        path: '',
        component: MainComponent,
        // children: [
        //     // {
        //     //     path     : '',
        //     //     pathMatch: 'full',
        //     //     component: AcademyListComponent,
        //     //     resolve  : {
        //     //         courses: AcademyCoursesResolver
        //     //     }
        //     // },
        //     {
        //         path: ':id',
        //         component: DetailComponent,
        //     }
        // ]
    }, 
    {
        path: ':id',
        component: DetailComponent,
    }
];
