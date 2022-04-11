INSERT INTO permissao (des_per) VALUES ('ROLE_ADMIN');
INSERT INTO permissao (des_per) VALUES ('ROLE_OPERATOR');

INSERT INTO usuario (nom_usu, ema_usu, sen_usu, sta_usu) VALUES ('Henrique Magalhães Simões', 'henrique.simoes@feluma.org.br', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG', 'ATIVO');
INSERT INTO usuario (nom_usu, ema_usu, sen_usu, sta_usu) VALUES ('Wemerson Bitori Maduro', 'wemerson.maduro@feluma.org.br', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG', 'ATIVO');
INSERT INTO usuario (nom_usu, ema_usu, sen_usu, sta_usu) VALUES ('Elaine Dias Pires', 'elaines.pires@feluma.org.br', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG', 'ATIVO');
INSERT INTO usuario (nom_usu, ema_usu, sen_usu, sta_usu) VALUES ('Kely Cristina Pereira', 'kelys.pereira@feluma.org.br', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG', 'ATIVO');
INSERT INTO usuario (nom_usu, ema_usu, sen_usu, sta_usu) VALUES ('Danielle Monteiro Lima', 'danielles.lima@feluma.org.br', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG', 'ATIVO');
INSERT INTO usuario (nom_usu, ema_usu, sen_usu, sta_usu) VALUES ('Úrsula Vieira Serra', 'ursulas.serra@feluma.org.br', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG', 'ATIVO');
INSERT INTO usuario (nom_usu, ema_usu, sen_usu, sta_usu) VALUES ('Simone Dutra', 'simones.dutra@feluma.org.br', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG', 'ATIVO');
INSERT INTO usuario (nom_usu, ema_usu, sen_usu, sta_usu) VALUES ('Nayara Salomão Alves de Lima', 'nayaras.lima@feluma.org.br', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG', 'ATIVO');
INSERT INTO usuario (nom_usu, ema_usu, sen_usu, sta_usu) VALUES ('Fernanda Amaral', 'fernanda.amarasl@feluma.org.br', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG', 'ATIVO');
INSERT INTO usuario (nom_usu, ema_usu, sen_usu, sta_usu) VALUES ('Michele Barros Aguiar', 'michele.aguiars@feluma.org.br', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG', 'ATIVO');

INSERT INTO usuario_permissao (cod_usu, cod_per) VALUES (1, 1);
INSERT INTO usuario_permissao (cod_usu, cod_per) VALUES (2, 2);

INSERT INTO categoria (des_cat) VALUES ('Hardware');
INSERT INTO categoria (des_cat) VALUES ('Software');
INSERT INTO categoria (des_cat) VALUES ('ERP');
INSERT INTO categoria (des_cat) VALUES ('Serviço de e-mail');
INSERT INTO categoria (des_cat) VALUES ('Link de internet');
INSERT INTO categoria (des_cat) VALUES ('Ajuda ao usuário');
INSERT INTO categoria (des_cat) VALUES ('Instalação / Desinstalação');
INSERT INTO categoria (des_cat) VALUES ('Relatório');
INSERT INTO categoria (des_cat) VALUES ('Atualização de sistema');
INSERT INTO categoria (des_cat) VALUES ('Outros');
INSERT INTO categoria (des_cat) VALUES ('Cadastro de Usuário');

INSERT INTO subcategoria (des_sub_cat) VALUES ('Gabinete');
INSERT INTO subcategoria (des_sub_cat) VALUES ('Monitor');
INSERT INTO subcategoria (des_sub_cat) VALUES ('Impressora');
INSERT INTO subcategoria (des_sub_cat) VALUES ('Teclado');
INSERT INTO subcategoria (des_sub_cat) VALUES ('Mouse');
INSERT INTO subcategoria (des_sub_cat) VALUES ('Notebook');
INSERT INTO subcategoria (des_sub_cat) VALUES ('Roteador');
INSERT INTO subcategoria (des_sub_cat) VALUES ('MV2000');
INSERT INTO subcategoria (des_sub_cat) VALUES ('Totvs');
INSERT INTO subcategoria (des_sub_cat) VALUES ('Exchange');
INSERT INTO subcategoria (des_sub_cat) VALUES ('CienciasMedicasMG (Gmail)');
INSERT INTO subcategoria (des_sub_cat) VALUES ('Universus');

INSERT INTO categoria_subcategoria (cod_cat, cod_sub_cat) VALUES (1, 1);
INSERT INTO categoria_subcategoria (cod_cat, cod_sub_cat) VALUES (2, 2);
INSERT INTO categoria_subcategoria (cod_cat, cod_sub_cat) VALUES (3, 3);
INSERT INTO categoria_subcategoria (cod_cat, cod_sub_cat) VALUES (4, 4);