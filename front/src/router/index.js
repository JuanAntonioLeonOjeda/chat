import { createMemoryHistory, createRouter } from "vue-router"

import LoginView from "../views/LoginView.vue"
import HomeView from "../views/HomeView.vue"
import ConversationView from "../views/ConversationView.vue"

const routes = [
  { path: "/", component: LoginView },
  { path: "/home", component: HomeView },
  { path: "/conv/:id", component: ConversationView }
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
