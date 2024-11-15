module.exports = {
  // ... otras configuraciones
  themeConfig: {
    navbar: {
      title: 'Win Lottery',
      items: [
        { to: '/docs/introduction', label: 'Introducción', position: 'left' },
        {
          to: '/docs/key-features',
          label: 'Características Clave',
          position: 'left',
        },
        { to: '/docs/work-plan', label: 'Plan de Trabajo', position: 'left' },
        { to: '/docs/visual-design', label: 'Diseño Visual', position: 'left' },
        {
          to: '/docs/user-stories',
          label: 'Historias de Usuario',
          position: 'left',
        },
        { to: '/docs/deliverables', label: 'Entregables', position: 'left' },
        {
          to: '/docs/improvement-ideas',
          label: 'Ideas de Mejora',
          position: 'left',
        },
        { to: '/docs/conclusion', label: 'Conclusión', position: 'left' },
      ],
    },
  },
};
