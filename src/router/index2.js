import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/UserHome.vue';
import Parent from '@/views/parent.vue';
import Profil from '@/views/UserProfil.vue';
import Contact from '../views/UserContact.vue';
import First from '@/views/First.vue';
import Two from '@/views/Two.vue'

const routes = [
    {
        path: "/users2/:id",
        component: Parent,
        props: true,
        name: "homeUsers",
        children: [
            { path: "", component: Home },
            { path: "Profil", name: "Profil", props: true, component: Profil },
            { path: "Contact", name: "contact", component: Contact },
        ]
    },
    {
        path: "/page1/:id",
        name: "Page1",
        components: {
            a: First,
            b: Two
        },
        props: {a: true, b:false},
    },
    {
        path: "/page2",
        name: "Page2",
        components: {
            a: Two,
            b: First
        }
    }
];

export default createRouter({
    history: createWebHistory(),
    routes,
});