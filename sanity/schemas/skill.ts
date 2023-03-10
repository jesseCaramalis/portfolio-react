import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skill',
  title: 'SkillType',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'SkillName',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
