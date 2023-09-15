export default {
     name: 'profile',
     type: 'document',
     fields: [
          {
               name: 'intro',
               title: 'Intro',
               type:'string'
          },
          {
               name: 'userId',
               title: 'UserId',
               type:'string'
          },
          {
               name: 'github',
               title: 'Github',
               type:'string'
          },
          {
               name: 'linkedIn',
               title: 'LinkedIn',
               type:'string'
          },
          {
               name: 'blogs',
               title: 'Blogs',
               type:'string'
          },
          {
               name: 'instagram',
               title: 'Instagram',
               type:'string'
          },
          {
               name: 'youtube',
               title: 'Youtube',
               type:'string'
          },
          {
               name: 'other1',
               title: 'Other1',
               type: 'document',
               fields: [
                    {
                         name: 'input',
                         title: 'Input',
                         type:'string'
                    },
                    {
                         name: 'title',
                         title: 'Title',
                         type:'string'
                    },
               ]
          },
          {
               name: 'other2',
               title: 'Other2',
               type: 'document',
               fields: [
                    {
                         name: 'input',
                         title: 'Input',
                         type:'string'
                    },
                    {
                         name: 'title',
                         title: 'Title',
                         type:'string'
                    },
               ]
          },
          {
               name: 'other3',
               title: 'Other3',
               type: 'document',
               fields: [
                    {
                         name: 'input',
                         title: 'Input',
                         type:'string'
                    },
                    {
                         name: 'title',
                         title: 'Title',
                         type:'string'
                    },
               ]
          },
          {
               name: 'other4',
               title: 'Other4',
               type: 'document',
               fields: [
                    {
                         name: 'input',
                         title: 'Input',
                         type:'string'
                    },
                    {
                         name: 'title',
                         title: 'Title',
                         type:'string'
                    },
               ]
          },
     ]
}