import { createRouter, createWebHistory } from 'vue-router'

// Les vistes es carreguen sota demanda perquè la de Casino (amb Phaser) no pesi a l'entrada.
const routes = [
  {
    path: '/',
    name: 'entrada',
    component: () => import('@/views/EntradaView.vue'),
    meta: { title: 'Entrada' },
  },
  {
    path: '/lobby',
    name: 'lobby',
    component: () => import('@/views/LobbyView.vue'),
    meta: { title: 'Lobby' },
  },
  {
    path: '/casino',
    name: 'casino',
    component: () => import('@/views/CasinoView.vue'),
    meta: { title: 'Casino' },
  },
  {
    path: '/resum',
    name: 'resum',
    component: () => import('@/views/ResumView.vue'),
    meta: { title: 'Resum' },
  },
  // Qualsevol ruta desconeguda torna a l'entrada.
  { path: '/:pathMatch(.*)*', redirect: { name: 'entrada' } },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// TODO (JAN-02): protegir lobby, casino i resum si no hi ha usuari a l'store de sessió.

router.afterEach((to) => {
  document.title = to.meta.title ? `${to.meta.title} · CasinoPlaza` : 'CasinoPlaza'
})

export default router
