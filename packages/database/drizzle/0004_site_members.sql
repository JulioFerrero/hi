CREATE TABLE "site_members" (
  "id" varchar(21) PRIMARY KEY NOT NULL,
  "site_id" varchar(21) NOT NULL,
  "user_id" text NOT NULL,
  "created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "site_members" ADD CONSTRAINT "site_members_site_id_sites_id_fk" FOREIGN KEY ("site_id") REFERENCES "sites"("id") ON DELETE cascade ON UPDATE no action;
--> statement-breakpoint
ALTER TABLE "site_members" ADD CONSTRAINT "site_members_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE cascade ON UPDATE no action;
--> statement-breakpoint
CREATE INDEX "site_members_site_user_idx" ON "site_members" USING btree ("site_id","user_id");
--> statement-breakpoint
CREATE INDEX "site_members_user_id_idx" ON "site_members" USING btree ("user_id");
