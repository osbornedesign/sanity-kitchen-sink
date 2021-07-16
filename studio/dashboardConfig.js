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
                  buildHookId: '60f1cbccbdfeb884deea0907',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-brhmhu3a',
                  apiId: 'bdf509b5-7ea2-494f-8c89-0f91f87c5a4c'
                },
                {
                  buildHookId: '60f1cbcd5458456c1a381076',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-f9bg9235',
                  apiId: '32406cc9-1623-4634-8da7-6be875e95c5a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/osbornedesign/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-f9bg9235.netlify.app', category: 'apps'}
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
