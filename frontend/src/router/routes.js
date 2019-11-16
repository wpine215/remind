
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      // Index page
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/contacts', name: 'PageContacts', component: () => import('pages/Contacts.vue') },
      { path: '/navigation', name: 'PageNavigation', component: () => import('pages/Navigation.vue') },
      { path: '/reminders', name: 'PageReminders', component: () => import('pages/Reminders.vue') },
      { path: '/finditems', name: 'PageFindItems', component: () => import('pages/FindItems.vue') },
      { path: '/exercises', name: 'PageExercises', component: () => import('pages/Exercises.vue') },
      { path: '/camera', name: 'PageCamera', component: () => import('pages/Camera.vue') },
      { path: '/emergency', name: 'PageEmergency', component: () => import('pages/Emergency.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
