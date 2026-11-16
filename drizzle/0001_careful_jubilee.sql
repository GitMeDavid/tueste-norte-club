ALTER TABLE `clientes` ADD `user_id` text;--> statement-breakpoint
CREATE UNIQUE INDEX `clientes_user_id_unique` ON `clientes` (`user_id`);