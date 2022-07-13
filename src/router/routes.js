
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/dashboard', component: () => import('src/pages/Dashboard.vue') },
      { path: '/user', component: () => import('src/pages/users/User.vue') },
      { path: '/locations', component: () => import('src/pages/locations/Location.vue') },

      { path: '/patients', component: () => import('src/pages/patients/Patient.vue') },
      { path: '/patient_schedule', component: () => import('src/pages/patients/Patient-schedule.vue') },
      { path: '/contacts', component: () => import('src/pages/contacts/Contact.vue') },
      { path: '/chat', component: () => import('src/pages/chat/Chat.vue') },
      { path: '/profile', component: () => import('src/pages/profile/Profile.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
