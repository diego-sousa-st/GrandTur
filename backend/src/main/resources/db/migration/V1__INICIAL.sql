-- -----------------------------------------------------
-- Table `grandtur`.`usuario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `grandtur`.`usuario` ;

CREATE TABLE IF NOT EXISTS `grandtur`.`usuario` (
  `email` VARCHAR(45) NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `senha` VARCHAR(35) NOT NULL,
  `cpf` CHAR(11) NOT NULL,
  `credito` INT UNSIGNED NOT NULL,
  `e_admin` TINYINT NOT NULL,
  PRIMARY KEY (`cpf`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `grandtur`.`ponto_turistico`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `grandtur`.`ponto_turistico` ;

CREATE TABLE IF NOT EXISTS `grandtur`.`ponto_turistico` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `pais` VARCHAR(45) NOT NULL,
  `cidade` VARCHAR(45) NOT NULL,
  `complemento` TEXT(1000) NULL,
  `descricao` TEXT(1000) NOT NULL,
  `valor` INT NOT NULL,
  `usuario_cpf` CHAR(11) NOT NULL,
  `ativo` TINYINT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  INDEX `fk_ponto_turistico_usuario1_idx` (`usuario_cpf` ASC) VISIBLE,
  CONSTRAINT `fk_ponto_turistico_usuario1`
    FOREIGN KEY (`usuario_cpf`)
    REFERENCES `grandtur`.`usuario` (`cpf`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `grandtur`.`imagem`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `grandtur`.`imagem` ;

CREATE TABLE IF NOT EXISTS `grandtur`.`imagem` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `caminho` VARCHAR(45) NOT NULL,
  `e_principal` TINYINT NOT NULL,
  `ponto_turistico_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_imagem_ponto_turistico_idx` (`ponto_turistico_id` ASC) VISIBLE,
  CONSTRAINT `fk_imagem_ponto_turistico`
    FOREIGN KEY (`ponto_turistico_id`)
    REFERENCES `grandtur`.`ponto_turistico` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `grandtur`.`compra`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `grandtur`.`compra` ;

CREATE TABLE IF NOT EXISTS `grandtur`.`compra` (
  `ponto_turistico_id` INT NOT NULL,
  `usuario_cpf` CHAR(11) NOT NULL,
  `valor` DOUBLE NOT NULL,
  `data` DATE NOT NULL,
  PRIMARY KEY (`ponto_turistico_id`, `usuario_cpf`),
  INDEX `fk_ponto_turistico_e_comprado_usuario_usuario1_idx` (`usuario_cpf` ASC) VISIBLE,
  INDEX `fk_ponto_turistico_e_comprado_usuario_ponto_turistico1_idx` (`ponto_turistico_id` ASC) VISIBLE,
  CONSTRAINT `fk_ponto_turistico_e_comprado_usuario_ponto_turistico1`
    FOREIGN KEY (`ponto_turistico_id`)
    REFERENCES `grandtur`.`ponto_turistico` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ponto_turistico_e_comprado_usuario_usuario1`
    FOREIGN KEY (`usuario_cpf`)
    REFERENCES `grandtur`.`usuario` (`cpf`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
