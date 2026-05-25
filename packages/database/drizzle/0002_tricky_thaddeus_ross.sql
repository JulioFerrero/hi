DROP TABLE "elements" CASCADE;--> statement-breakpoint
ALTER TABLE "pages" ADD COLUMN "content" jsonb DEFAULT '[]'::jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "pages" ADD COLUMN "pub_content" jsonb DEFAULT '[]'::jsonb NOT NULL;