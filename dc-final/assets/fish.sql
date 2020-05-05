CREATE TABLE IF NOT EXISTS fish (
    `ID` INT,
    `Name` VARCHAR(19) CHARACTER SET utf8,
    `Location` VARCHAR(16) CHARACTER SET utf8,
    `Size` VARCHAR(13) CHARACTER SET utf8,
    `Value` INT,
    `Time` VARCHAR(33) CHARACTER SET utf8,
    `Seasonality` VARCHAR(86) CHARACTER SET utf8
);
INSERT INTO fish VALUES
    (1,'Bitterling','River','Smallest',900,'All day','November-March (Northern) / May-September (Southern)'),
    (2,'Pale Chub','River','Smallest',160,'9 a.m. - 4 p.m.','Year-round (Northern and Southern)'),
    (3,'Crucian Carp','River','Small',160,'All day','Year-round (Northern and Southern)'),
    (4,'Dace','River','Medium',240,'4 p.m. - 9 a.m.','Year-round (Northern and Southern)'),
    (5,'Carp','Pond','Large',300,'All day','Year-round (Northern and Southern)'),
    (6,'Koi','Pond','Large',4000,'4 p.m. - 9 a.m.','Year-round (Northern and Southern)'),
    (7,'Goldfish','Pond','Smallest',1300,'All day','Year-round (Northern and Southern)'),
    (8,'Pop-eyed Goldfish','Pond','Smallest',1300,'9 a.m. - 4 p.m.','Year-round (Northern and Southern)'),
    (9,'Ranchu Goldfish','Pond','Small',4500,'9 a.m. - 4 p.m.','Year-round (Northern and Southern)'),
    (10,'Killifish','Pond','Smallest',300,'All day','April-August (Northern) / October-February (Southern)'),
    (11,'Crawfish','Pond','Small',200,'All day','April-September (Northern) / October-March (Southern)'),
    (12,'Soft-shelled Turtle','River','Large',3750,'4 p.m. - 9 a.m.','August-September (Northern) / February-March (Southern)'),
    (13,'Snapping Turtle','River','X Large',5000,'9 p.m. - 4 a.m.','April-October (Northern) / October-April (Southern)'),
    (14,'Tadpole','Pond','Smallest',100,'All day','March-July (Northern) / September-January (Southern)'),
    (15,'Frog','Pond','Small',120,'All day','May-August (Northern) / November-Feburary (Southern)'),
    (16,'Freshwater Goby','River','Small',400,'4 p.m. - 9 a.m.','Year-round (Northern and Southern)'),
    (17,'Loach','River','Small',400,'All day','March-May (Northern) / September-November (Southern)'),
    (18,'Catfish','Pond','Large',800,'4 p.m. - 9 a.m.','May-October (Northern) / November-April (Southern)'),
    (19,'Giant Snakehead','Pond','X Large',5500,'9 a.m. - 4 p.m.','June-August (Northern) / December-February (Southern)'),
    (20,'Bluegill','River','Small',180,'9 a.m. - 4 p.m.','Year-round (Northern and Southern)'),
    (21,'Yellow Perch','River','Medium',300,'All day','October-March (Northern) / April-September (Southern)'),
    (22,'Black Bass','River','Large',400,'All day','Year-round (Northern and Southern)'),
    (23,'Tilapia','River','Medium',800,'All day','June-October (Northern) / December-April (Southern)'),
    (24,'Pike','River','X Large',1800,'All day','September-December (Northern) / March-June (Southern)'),
    (25,'Pond Smelt','River','Small',500,'All day','December-February (Northern) / June-August (Southern)'),
    (26,'Sweetfish','River','Medium',900,'All day','July-September (Northern) / January-March (Southern)'),
    (27,'Cherry Salmon','River (Clifftop)','Medium',1000,'4 p.m. - 9 a.m.','March-June & September-November (Northern) / March-May & September-December (Southern)'),
    (28,'Char','River (Clifftop)','Medium',3800,'4 p.m. - 9 a.m.','March-June & September-November (Northern) / March-May & September-December (Southern)'),
    (29,'Golden Trout','River (Clifftop)','Medium',15000,'4 p.m. - 9 a.m.','March-June & September-November (Northern) / March-May & September-December (Southern)'),
    (30,'Stringfish','River (Clifftop)','Largest',15000,'4 p.m. - 9 a.m.','December-March (Northern) / June-September (Southern)'),
    (31,'Salmon','River (mouth)','Large',700,'All day','September (Northern) / March (Southern)'),
    (32,'King Salmon','River (mouth)','Largest',1800,'All day','September (Northern) / March (Southern)'),
    (33,'Mitten Crab','River','Small',2000,'4 p.m. - 9 a.m.','September-November (Northern) / March-May (Southern)'),
    (34,'Guppy','River','Smallest',1300,'9 a.m. - 4 p.m.','April-November (Northern) / October-May (Southern)'),
    (35,'Nibble Fish','River','Small',1500,'9 a.m. - 4 p.m.','May-September (Northern) / November-March (Southern)'),
    (36,'Angelfish','River','Small',3000,'4 p.m. - 9 a.m.','May-October (Northern) / November-April (Southern)'),
    (37,'Betta','River','Small',2500,'9 a.m. - 4 p.m.','May-October (Northern) / November-April (Southern)'),
    (38,'Neon Tetra','River','Smallest',500,'9 a.m. - 4 p.m.','April-November (Northern) / October-May (Southern)'),
    (39,'Rainbowfish','River','Small',800,'9 a.m. - 4 p.m.','May-October (Northern) / November-April (Southern)'),
    (40,'Piranha','River','Small',2500,'9 a.m. - 4 p.m. & 9 p.m. - 4 a.m.','June-September (Northern) / December-March (Southern)'),
    (41,'Arowana','River','Large',10000,'4 p.m. - 9 a.m.','June-September (Northern) / December-March (Southern)'),
    (42,'Dorado','River','X Large',15000,'4 a.m. - 9 p.m.','June-September (Northern) / December-March (Southern)'),
    (43,'Gar','Pond','Largest',6000,'4 p.m. - 9 a.m.','June-September (Northern) / December-March (Southern)'),
    (44,'Arapaima','River','Largest',10000,'4 p.m. - 9 a.m.','June-September (Northern) / December-March (Southern)'),
    (45,'Saddled Bichir','River','Large',4000,'9 p.m. - 4 a.m.','June-September (Northern) / December-March (Southern)'),
    (46,'Sturgeon','River (mouth)','Largest',10000,'All day','September-March (Northern) / March-September (Southern)'),
    (47,'Sea Butterfly','Sea','Smallest',1000,'All day','December-March (Northern) / June-September (Southern)'),
    (48,'Sea Horse','Sea','Smallest',1100,'All day','April-November (Northern) / October-May (Southern)'),
    (49,'Clown Fish','Sea','Smallest',650,'All day','April-September (Northern) / October-March (Southern)'),
    (50,'Surgeonfish','Sea','Small',1000,'All day','April-September (Northern) / October-March (Southern)'),
    (51,'Butterfly Fish','Sea','Small',1000,'All day','April-September (Northern) / October-March (Southern)'),
    (52,'Napoleonfish','Sea','Largest',10000,'4 a.m. - 9 p.m.','July-August (Northern) / January-February (Southern)'),
    (53,'Zebra Turkeyfish','Sea','Medium',500,'All day','April-November (Northern) / October-May (Southern)'),
    (54,'Blowfish','Sea','Medium',5000,'6 p.m. - 4 a.m.','November-February (Northern) / May-August (Southern)'),
    (55,'Puffer Fish','Sea','Medium',250,'All day','July-September (Northern) / January-March (Southern)'),
    (56,'Anchovy','Sea','Small',200,'4 a.m. - 9 p.m.','Year-round (Northern and Southern)'),
    (57,'Horse Mackerel','Sea','Small',150,'All day','Year-round (Northern and Southern)'),
    (58,'Barred Knifejaw','Sea','Medium',5000,'All day','March-November (Northern) / September-May (Southern)'),
    (59,'Sea Bass','Sea','X Large',400,'All day','Year-round (Northern and Southern)'),
    (60,'Red Snapper','Sea','Large',3000,'All day','Year-round (Northern and Southern)'),
    (61,'Dab','Sea','Medium',300,'All day','October-April (Northern) / April-October (Southern)'),
    (62,'Olive Flounder','Sea','Large',800,'All day','Year-round (Northern and Southern)'),
    (63,'Squid','Sea','Medium',500,'All day','December-August (Northern) / June-February (Southern)'),
    (64,'Moray Eel','Sea','Narrow',2000,'All day','August-October (Northern) / February-April (Southern)'),
    (65,'Ribbon Eel','Sea','Narrow',600,'All day','June-October (Northern) / December-April (Southern)'),
    (66,'Tuna','Pier','Largest',7000,'All day','November-April (Northern) / May-October (Southern)'),
    (67,'Blue Marlin','Pier','Largest',10000,'All day','July-September & November-April (Northern) / January-March & May-November (Southern)'),
    (68,'Giant Trevally','Pier','Large',4500,'All day','May-October (Northern) / November-April (Southern)'),
    (69,'Mahi-mahi','Sea','Large',6000,'All day','May-October (Northern) / November-April (Southern)'),
    (70,'Ocean Sunfish','Sea','Largest (Fin)',4000,'4 a.m. - 9 p.m.','July-September (Northern) / January-March (Southern)'),
    (71,'Ray','Sea','X Large',3000,'4 a.m. - 9 p.m.','August-November (Northern) / February-May (Southern)'),
    (72,'Saw Shark','Sea','Largest (Fin)',12000,'4 p.m. - 9 a.m.','June-September (Northern) / December-March (Southern)'),
    (73,'Hammerhead Shark','Sea','Largest (Fin)',8000,'4 p.m. - 9 a.m.','June-September (Northern) / December-March (Southern)'),
    (74,'Great White Shark','Sea','Largest (Fin)',15000,'4 p.m. - 9 a.m.','June-September (Northern) / December-March (Southern)'),
    (75,'Whale Shark','Sea','Largest (Fin)',13000,'All day','June-September (Northern) / December-March (Southern)'),
    (76,'Suckerfish','Sea','Large (Fin)',1500,'All day','June-September (Northern) / December-March (Southern)'),
    (77,'Football Fish','Sea','Large',2500,'4 p.m. - 9 a.m.','November-March (Northern) / May-September (Southern)'),
    (78,'Oarfish','Sea','Largest',9000,'All day','December-May (Northern) / June-November (Southern)'),
    (79,'Barreleye','Sea','Small',15000,'9 p.m. - 4 a.m.','Year-round (Northern and Southern)'),
    (80,'Coelacanth','Sea (rainy days)','Largest',15000,'All day','Year-round (Northern and Southern)');
