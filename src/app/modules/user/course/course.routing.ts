import { Route } from "@angular/router";
import { DetailCourseComponent } from "./detail-course/detail-course.component";
import { ListCourseComponent } from "./list-course/list-course.component";


export const courseRoutes: Route[] = [
    {
        path: '',
        component: ListCourseComponent,
    },
    {
        path: ':id',
        component: DetailCourseComponent,
    }
];
