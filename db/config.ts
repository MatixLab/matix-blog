import { column, defineDb, defineTable } from 'astro:db'

const Sites = defineTable({
  columns: {
    id: column.number({
      primaryKey: true,
      unique: true,
      optional: false,
    }),
    name: column.text(),
    description: column.text({
      optional: true,
    }),
    tags: column.text({
      optional: true,
    }),
    url: column.text(),
    ogUrl: column.text({
      optional: true,
    }),
  },
})

export default defineDb({
  tables: {
    Sites,
  },
})
