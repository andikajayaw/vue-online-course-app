import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {name: 'home', path: '/', component: () => import('./pages/Home.vue')},
    {name: 'course', path: '/courses/:courseId', component: () => import('./pages/Course.vue')},
    {name: 'lesson', path: '/courses/:courseId/lessons/:lessonId', component: () => import('./pages/Lesson.vue')},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router