# Database schema

```SQL
CREATE TABLE `address` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `street` varchar(255) COLLATE utf8_czech_ci NOT NULL,
  `no` int(11) NOT NULL,
  `city` varchar(255) COLLATE utf8_czech_ci NOT NULL,
  `zip_code` int(11) NOT NULL,
  `region` varchar(255) COLLATE utf8_czech_ci NOT NULL,
  `state` varchar(255) COLLATE utf8_czech_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;


CREATE TABLE `sportsman` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_czech_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_czech_ci NOT NULL,
  `password` text COLLATE utf8_czech_ci NOT NULL,
  `phone` varchar(15) COLLATE utf8_czech_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;


CREATE TABLE `photo` (
  `location` text COLLATE utf8_czech_ci NOT NULL,
  `coach_id` int(11) DEFAULT NULL,
  `sports_ground_id` int(11) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;


CREATE TABLE `sports_ground` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_czech_ci NOT NULL,
  `shortcut` varchar(255) COLLATE utf8_czech_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_czech_ci NOT NULL,
  `password` TEXT COLLATE utf8_czech_ci NOT NULL,
  `description` text COLLATE utf8_czech_ci DEFAULT NULL,
  `opening_hours_from` datetime NOT NULL,
  `opening_hours_to` datetime NOT NULL,
  `web` text COLLATE utf8_czech_ci DEFAULT NULL,
  `phone` varchar(15) COLLATE utf8_czech_ci NOT NULL,
  `address_id` int(11) NOT NULL,
  `cover_photo_id` int(11) NOT NULL,
  `profile_photo_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fkIdx_173` (`address_id`),
  KEY `fkIdx_295` (`cover_photo_id`),
  KEY `fkIdx_318` (`profile_photo_id`),
  CONSTRAINT `FK_171` FOREIGN KEY (`address_id`) REFERENCES `address` (`id`),
  CONSTRAINT `FK_293` FOREIGN KEY (`cover_photo_id`) REFERENCES `photo` (`id`),
  CONSTRAINT `FK_316` FOREIGN KEY (`profile_photo_id`) REFERENCES `photo` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;


CREATE TABLE `coach` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_czech_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_czech_ci NOT NULL,
  `password` text COLLATE utf8_czech_ci NOT NULL,
  `username` varchar(255) COLLATE utf8_czech_ci NOT NULL,
  `phone` varchar(15) COLLATE utf8_czech_ci NOT NULL,
  `description` text COLLATE utf8_czech_ci DEFAULT NULL,
  `specialization` text COLLATE utf8_czech_ci DEFAULT NULL,
  `requirements` text COLLATE utf8_czech_ci DEFAULT NULL,
  `datetime` datetime NOT NULL,
  `address_id` int(11) NOT NULL,
  `cover_photo_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fkIdx_190` (`address_id`),
  KEY `fkIdx_282` (`cover_photo_id`),
  CONSTRAINT `FK_188` FOREIGN KEY (`address_id`) REFERENCES `address` (`id`),
  CONSTRAINT `FK_280` FOREIGN KEY (`cover_photo_id`) REFERENCES `photo` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;


CREATE TABLE `review` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `stars` int(11) NOT NULL,
  `comment` text COLLATE utf8_czech_ci DEFAULT NULL,
  `datetime` datetime NOT NULL,
  `sportsman_id` int(11) NOT NULL,
  `sports_ground_id` int(11) DEFAULT NULL,
  `coach_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fkIdx_102` (`sports_ground_id`),
  KEY `fkIdx_111` (`coach_id`),
  KEY `fkIdx_241` (`sportsman_id`),
  CONSTRAINT `FK_100` FOREIGN KEY (`sports_ground_id`) REFERENCES `sports_ground` (`id`),
  CONSTRAINT `FK_109` FOREIGN KEY (`coach_id`) REFERENCES `coach` (`id`),
  CONSTRAINT `FK_239` FOREIGN KEY (`sportsman_id`) REFERENCES `sportsman` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;


CREATE TABLE `favorite` (
  `sportsman_id` int(11) NOT NULL,
  `coach_id` int(11) DEFAULT NULL,
  `sports_ground_id` int(11) DEFAULT NULL,
  KEY `fkIdx_137` (`sportsman_id`),
  KEY `fkIdx_140` (`sports_ground_id`),
  KEY `fkIdx_248` (`coach_id`),
  CONSTRAINT `FK_135` FOREIGN KEY (`sportsman_id`) REFERENCES `sportsman` (`id`),
  CONSTRAINT `FK_138` FOREIGN KEY (`sports_ground_id`) REFERENCES `sports_ground` (`id`),
  CONSTRAINT `FK_246` FOREIGN KEY (`coach_id`) REFERENCES `coach` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;


CREATE TABLE `accepted_payment` (
  `name` varchar(255) COLLATE utf8_czech_ci NOT NULL,
  `description` text COLLATE utf8_czech_ci DEFAULT NULL,
  `sports_ground_id` int(11) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `fkIdx_159` (`sports_ground_id`),
  CONSTRAINT `FK_157` FOREIGN KEY (`sports_ground_id`) REFERENCES `sports_ground` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;


CREATE TABLE `service` (
  `name` varchar(255) COLLATE utf8_czech_ci NOT NULL,
  `description` text COLLATE utf8_czech_ci NOT NULL,
  `price` float DEFAULT NULL,
  `sports_ground_id` int(11) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `fkIdx_151` (`sports_ground_id`),
  CONSTRAINT `FK_149` FOREIGN KEY (`sports_ground_id`) REFERENCES `sports_ground` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;


CREATE TABLE `sport` (
  `name` varchar(255) COLLATE utf8_czech_ci NOT NULL,
  `coach_id` int(11) DEFAULT NULL,
  `sports_ground_id` int(11) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `fkIdx_272` (`sports_ground_id`),
  KEY `fkIdx_275` (`coach_id`),
  CONSTRAINT `FK_270` FOREIGN KEY (`sports_ground_id`) REFERENCES `sports_ground` (`id`),
  CONSTRAINT `FK_273` FOREIGN KEY (`coach_id`) REFERENCES `coach` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;


CREATE TABLE `event` (
  `name` varchar(255) COLLATE utf8_czech_ci NOT NULL,
  `description` text COLLATE utf8_czech_ci NOT NULL,
  `datetime_from` datetime NOT NULL,
  `datetime_to` datetime NOT NULL,
  `datetime_created` datetime NOT NULL,
  `sports_ground_id` int(11) DEFAULT NULL,
  `coach_id` int(11) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `fkIdx_126` (`sports_ground_id`),
  KEY `fkIdx_167` (`coach_id`),
  CONSTRAINT `FK_124` FOREIGN KEY (`sports_ground_id`) REFERENCES `sports_ground` (`id`),
  CONSTRAINT `FK_165` FOREIGN KEY (`coach_id`) REFERENCES `coach` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;


CREATE TABLE `message` (
  `subject` varchar(255) COLLATE utf8_czech_ci NOT NULL,
  `text` text COLLATE utf8_czech_ci NOT NULL,
  `sportsman_id` int(11) NOT NULL,
  `sports_ground_id` int(11) DEFAULT NULL,
  `coach_id` int(11) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `fkIdx_219` (`sportsman_id`),
  KEY `fkIdx_222` (`sports_ground_id`),
  KEY `fkIdx_225` (`coach_id`),
  CONSTRAINT `FK_217` FOREIGN KEY (`sportsman_id`) REFERENCES `sportsman` (`id`),
  CONSTRAINT `FK_220` FOREIGN KEY (`sports_ground_id`) REFERENCES `sports_ground` (`id`),
  CONSTRAINT `FK_223` FOREIGN KEY (`coach_id`) REFERENCES `coach` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;


ALTER TABLE `photo`
ADD KEY `fkIdx_264` (`coach_id`),
ADD KEY `fkIdx_310` (`sports_ground_id`),
ADD CONSTRAINT `FK_262` FOREIGN KEY (`coach_id`) REFERENCES `coach` (`id`),
ADD CONSTRAINT `FK_308` FOREIGN KEY (`sports_ground_id`) REFERENCES `sports_ground` (`id`);
```
