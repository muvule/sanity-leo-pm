export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f4431dba10f3f3c99cd31f6',
                  title: 'Sanity Studio',
                  name: 'sanity-leo-pm-studio',
                  apiId: '3bc8d1b9-9613-418e-83d4-f9552cd09e12'
                },
                {
                  buildHookId: '5f4431db557cad2ddbe5552f',
                  title: 'Blog Website',
                  name: 'sanity-leo-pm',
                  apiId: '82814f81-4c2e-4acb-bb96-71e778790e3e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/muvule/sanity-leo-pm',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-leo-pm.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
