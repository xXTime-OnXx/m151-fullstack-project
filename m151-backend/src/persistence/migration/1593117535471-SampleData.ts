import {MigrationInterface, QueryRunner} from "typeorm";

export class SampleData_1593117535471 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
            INSERT INTO product (name, price, image, description)
            VALUES ('Nektarinen gelb', 5.2, 'nektarinen.jpg', 'Herkunft: Spanien');
            INSERT INTO product (name, price, image, description)
            VALUES ('Rispentomaten', 3.1, 'tomaten.jpg',
                    'Tomaten verfügen über einen hohen Gehalt an Vitamin C sowie Zucker und Mineralstoffen.');
            INSERT INTO product (name, price, image, description)
            VALUES ('Kalbs-Bratwürste', 16.5, 'kalbsbratwuerste.jpg', 'Terra Suisse Kalbs-Bratwurst 3x2 Stück');
            INSERT INTO product (name, price, image, description)
            VALUES ('Appenzeller Classic', 3.45, 'appenzeller.jpg',
                    'Schweizer Halbhartkäse und  vollfett. aus Rohmilch');
            INSERT INTO product (name, price, image, description)
            VALUES ('Eier', 5.4, 'eier.jpg', '9 Schweizer Eier aus Frilandhaltung');
            INSERT INTO product (name, price, image, description)
            VALUES ('Krustenkranz', 2.3, 'krustenkranz.jpg', 'Terra Suisse');
            INSERT INTO product (name, price, image, description)
            VALUES ('Magunm Almond', 9.9, 'vanille_glace.jpg', 'Vanilleglace und Milchschokolade mit Mandeln');
            INSERT INTO product (name, price, image, description)
            VALUES ('Iced Green Tea', 10.8, 'icedtea.jpg', 'AriZona Green Tea - Grünteegrtränk');
            INSERT INTO product (name, price, image, description)
            VALUES ('Senf', 3.4, 'senf.jpg', 'Senf mild');
            INSERT INTO product (name, price, image, description)
            VALUES ('Olivenöl', 17.95, 'olivenoel.jpg', 'Bertolli Olivenöl extra vergine originale');
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
