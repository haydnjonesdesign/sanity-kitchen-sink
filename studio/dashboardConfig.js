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
                  buildHookId: '601a90557b65c00783745dd9',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-wkgbeg74',
                  apiId: 'bec26b24-307e-4c83-9a50-9e03b62fe37c'
                },
                {
                  buildHookId: '601a9055fe0addfea64ee067',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-q5bu7frh',
                  apiId: '8540b33f-cfb6-4fcb-b4a1-47035fccdb9c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/haydnjonesdesign/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-q5bu7frh.netlify.app', category: 'apps'}
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
