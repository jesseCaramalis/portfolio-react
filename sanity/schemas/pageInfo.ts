import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pageInfo',
  title: 'PageInfo',
  type: 'document',
  fields: [
    defineField({
      name: 'aboutPicture',
      title: 'aboutPicture',
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'heroPicture',
      title: 'heroPicture',
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'aboutInfo',
      title: 'aboutInfo',
      type: 'string',
    }),
  ],
})
