export default {
  name: 'user',
  model: 'User',
  type: 'document',
  fields: [
    {
      name: 'userName',
      title: 'UserName',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'string',
    },
  ],
}
