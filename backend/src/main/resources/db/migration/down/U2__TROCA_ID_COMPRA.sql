ALTER TABLE `grandtur`.`compra` DROP COLUMN `id`;
ALTER TABLE `grandtur`.`compra` ADD PRIMARY KEY (`ponto_turistico_id`, `usuario_cpf`);
