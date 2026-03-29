import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const postsTable = sqliteTable('posts', {
  id: text('id').primaryKey().notNull(),
  slug: text('slug').notNull().unique(),
  title: text('title').notNull(),
  author: text('author').notNull(),
  excerpt: text('excert').notNull(),
  content: text('content').notNull(),
  coverImageUrl: text('cover_image_url').notNull(),
  published: integer('published', {mode: 'boolean'}).notNull(),
  createdAt: text('created_at').notNull(),
  updatedAt: text('update_at').notNull(),
})

export type PostsTableSelectModel = InferSelectModel<typeof postsTable>
export type InsertTableSelectModel = InferInsertModel<typeof postsTable>