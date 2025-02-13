import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/UserHome.vue';
import Parent from '@/views/parent.vue';
import Profil from '@/views/UserProfil.vue';
import Contact from '../views/UserContact.vue';

const routes = [{
    
        path: "/users2/:id",
        component: Parent,
        name: "homeUsers",
        children: [
            {path: "", component: Home},
            {path: "Profil", component: Profil},
            {path: "Contact", component: Contact},
        ],
}];

export default createRouter({
    history: createWebHistory(),
    routes,
});