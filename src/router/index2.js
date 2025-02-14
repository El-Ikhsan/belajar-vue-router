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
        name: "homeUsers",
        children: [
            { path: "", component: Home },
            { path: "Profil", name: "Profil", component: Profil },
            { path: "Contact", name: "contact", component: Contact },
        ]
    },
    {
        path: "/page1",
        name: "Page1",
        components: {
            a: First,
            b: Two
        }
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