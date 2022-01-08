-- Seed SQL:
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Struktura tabulky `accepted_payment`
--

CREATE TABLE `accepted_payment` (
                                    `id` int(11) NOT NULL,
                                    `name` varchar(255) COLLATE utf8_czech_ci NOT NULL,
                                    `description` text COLLATE utf8_czech_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;

-- --------------------------------------------------------

--
-- Struktura tabulky `accepted_payment_sports_ground`
--

CREATE TABLE `accepted_payment_sports_ground` (
                                                  `id` int(11) NOT NULL,
                                                  `accepted_payment_id` int(11) NOT NULL,
                                                  `sports_ground_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktura tabulky `address`
--

CREATE TABLE `address` (
                           `id` int(11) NOT NULL,
                           `street` varchar(255) COLLATE utf8_czech_ci NOT NULL,
                           `no` int(11) NOT NULL,
                           `city` varchar(255) COLLATE utf8_czech_ci NOT NULL,
                           `zip_code` int(11) NOT NULL,
                           `region` varchar(255) COLLATE utf8_czech_ci NOT NULL,
                           `state` varchar(255) COLLATE utf8_czech_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;

-- --------------------------------------------------------

--
-- Struktura tabulky `coach`
--

CREATE TABLE `coach` (
                         `id` int(11) NOT NULL,
                         `username` varchar(255) COLLATE utf8_czech_ci NOT NULL,
                         `name` varchar(255) COLLATE utf8_czech_ci NOT NULL,
                         `surname` varchar(255) COLLATE utf8_czech_ci NOT NULL,
                         `published` tinyint(1) DEFAULT 0,
                         `phone` varchar(15) COLLATE utf8_czech_ci DEFAULT NULL,
                         `vat_number` varchar(255) COLLATE utf8_czech_ci DEFAULT NULL,
                         `specialization` text COLLATE utf8_czech_ci DEFAULT NULL,
                         `requirements` text COLLATE utf8_czech_ci DEFAULT NULL,
                         `description` text COLLATE utf8_czech_ci DEFAULT NULL,
                         `profile_photo_id` int(11) DEFAULT NULL,
                         `cover_photo_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;

-- --------------------------------------------------------

--
-- Struktura tabulky `event`
--

CREATE TABLE `event` (
                         `id` int(11) NOT NULL,
                         `name` varchar(255) COLLATE utf8_czech_ci NOT NULL,
                         `datetime_from` datetime NOT NULL,
                         `datetime_to` datetime NOT NULL,
                         `datetime_created` datetime NOT NULL,
                         `description` text COLLATE utf8_czech_ci NOT NULL,
                         `cover_photo_id` int(11) DEFAULT NULL,
                         `sports_ground_id` int(11) DEFAULT NULL,
                         `coach_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;

-- --------------------------------------------------------

--
-- Struktura tabulky `favorite`
--

CREATE TABLE `favorite` (
                            `id` int(11) NOT NULL,
                            `sportsman_id` int(11) NOT NULL,
                            `coach_id` int(11) DEFAULT NULL,
                            `sports_ground_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;

-- --------------------------------------------------------

--
-- Struktura tabulky `message`
--

CREATE TABLE `message` (
                           `id` int(11) NOT NULL,
                           `subject` varchar(255) COLLATE utf8_czech_ci NOT NULL,
                           `text` text COLLATE utf8_czech_ci NOT NULL,
                           `sportsman_id` int(11) NOT NULL,
                           `sports_ground_id` int(11) DEFAULT NULL,
                           `coach_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;

-- --------------------------------------------------------

--
-- Struktura tabulky `photo`
--

CREATE TABLE `photo` (
                         `id` int(11) NOT NULL,
                         `name` varchar(255) COLLATE utf8_czech_ci DEFAULT NULL,
                         `location` text COLLATE utf8_czech_ci NOT NULL,
                         `coach_id` int(11) DEFAULT NULL,
                         `sports_ground_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;

-- --------------------------------------------------------

--
-- Struktura tabulky `review`
--

CREATE TABLE `review` (
                          `id` int(11) NOT NULL,
                          `stars` int(11) NOT NULL,
                          `comment` text COLLATE utf8_czech_ci DEFAULT NULL,
                          `datetime` datetime DEFAULT current_timestamp(),
                          `sportsman_id` int(11) NOT NULL,
                          `sports_ground_id` int(11) DEFAULT NULL,
                          `coach_id` int(11) DEFAULT NULL,
                          `event_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;

-- --------------------------------------------------------

--
-- Struktura tabulky `service`
--

CREATE TABLE `service` (
                           `id` int(11) NOT NULL,
                           `name` varchar(255) COLLATE utf8_czech_ci NOT NULL,
                           `description` text COLLATE utf8_czech_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;

-- --------------------------------------------------------

--
-- Struktura tabulky `service_sports_ground`
--

CREATE TABLE `service_sports_ground` (
                                         `id` int(11) NOT NULL,
                                         `service_id` int(11) NOT NULL,
                                         `sports_ground_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktura tabulky `sport`
--

CREATE TABLE `sport` (
                         `id` int(11) NOT NULL,
                         `name` varchar(255) COLLATE utf8_czech_ci NOT NULL,
                         `color` varchar(100) COLLATE utf8_czech_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;

-- --------------------------------------------------------

--
-- Struktura tabulky `sportsman`
--

CREATE TABLE `sportsman` (
                             `id` int(11) NOT NULL,
                             `username` varchar(255) COLLATE utf8_czech_ci NOT NULL,
                             `name` varchar(255) COLLATE utf8_czech_ci NOT NULL,
                             `surname` varchar(255) COLLATE utf8_czech_ci NOT NULL,
                             `phone` varchar(15) COLLATE utf8_czech_ci DEFAULT NULL,
                             `profile_photo_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;

-- --------------------------------------------------------

--
-- Struktura tabulky `sports_ground`
--

CREATE TABLE `sports_ground` (
                                 `id` int(11) NOT NULL,
                                 `username` varchar(255) COLLATE utf8_czech_ci NOT NULL,
                                 `name` varchar(255) COLLATE utf8_czech_ci NOT NULL,
                                 `published` tinyint(1) DEFAULT 0,
                                 `opening_hours_from` time DEFAULT NULL,
                                 `opening_hours_to` time DEFAULT NULL,
                                 `web` text COLLATE utf8_czech_ci DEFAULT NULL,
                                 `phone` varchar(15) COLLATE utf8_czech_ci DEFAULT NULL,
                                 `vat_number` varchar(255) COLLATE utf8_czech_ci DEFAULT NULL,
                                 `description` text COLLATE utf8_czech_ci DEFAULT NULL,
                                 `address_id` int(11) DEFAULT NULL,
                                 `cover_photo_id` int(11) DEFAULT NULL,
                                 `profile_photo_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;

-- --------------------------------------------------------

--
-- Struktura tabulky `sport_sports_ground`
--

CREATE TABLE `sport_sports_ground` (
                                       `id` int(11) NOT NULL,
                                       `sport_id` int(11) NOT NULL,
                                       `sports_ground_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;

-- --------------------------------------------------------

--
-- Struktura tabulky `user`
--

CREATE TABLE `user` (
                        `id` int(11) NOT NULL,
                        `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_czech_ci NOT NULL,
                        `password` text CHARACTER SET utf8 COLLATE utf8_czech_ci NOT NULL,
                        `verified` tinyint(1) DEFAULT 0,
                        `password_reset_hash` text DEFAULT NULL,
                        `coach_id` int(11) DEFAULT NULL,
                        `sportsman_id` int(11) DEFAULT NULL,
                        `sports_ground_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexy pro exportované tabulky
--

--
-- Indexy pro tabulku `accepted_payment`
--
ALTER TABLE `accepted_payment`
    ADD PRIMARY KEY (`id`);

--
-- Indexy pro tabulku `accepted_payment_sports_ground`
--
ALTER TABLE `accepted_payment_sports_ground`
    ADD PRIMARY KEY (`id`);

--
-- Indexy pro tabulku `address`
--
ALTER TABLE `address`
    ADD PRIMARY KEY (`id`);

--
-- Indexy pro tabulku `coach`
--
ALTER TABLE `coach`
    ADD PRIMARY KEY (`id`),
  ADD KEY `fkIdx_282` (`cover_photo_id`);

--
-- Indexy pro tabulku `event`
--
ALTER TABLE `event`
    ADD PRIMARY KEY (`id`),
  ADD KEY `fkIdx_126` (`sports_ground_id`),
  ADD KEY `fkIdx_167` (`coach_id`);

--
-- Indexy pro tabulku `favorite`
--
ALTER TABLE `favorite`
    ADD PRIMARY KEY (`id`),
  ADD KEY `fkIdx_137` (`sportsman_id`),
  ADD KEY `fkIdx_140` (`sports_ground_id`),
  ADD KEY `fkIdx_248` (`coach_id`);

--
-- Indexy pro tabulku `message`
--
ALTER TABLE `message`
    ADD PRIMARY KEY (`id`),
  ADD KEY `fkIdx_219` (`sportsman_id`),
  ADD KEY `fkIdx_222` (`sports_ground_id`),
  ADD KEY `fkIdx_225` (`coach_id`);

--
-- Indexy pro tabulku `photo`
--
ALTER TABLE `photo`
    ADD PRIMARY KEY (`id`),
  ADD KEY `fkIdx_264` (`coach_id`),
  ADD KEY `fkIdx_310` (`sports_ground_id`);

--
-- Indexy pro tabulku `review`
--
ALTER TABLE `review`
    ADD PRIMARY KEY (`id`),
  ADD KEY `fkIdx_102` (`sports_ground_id`),
  ADD KEY `fkIdx_111` (`coach_id`),
  ADD KEY `fkIdx_241` (`sportsman_id`),
  ADD KEY `event_id` (`event_id`);

--
-- Indexy pro tabulku `service`
--
ALTER TABLE `service`
    ADD PRIMARY KEY (`id`);

--
-- Indexy pro tabulku `service_sports_ground`
--
ALTER TABLE `service_sports_ground`
    ADD PRIMARY KEY (`id`);

--
-- Indexy pro tabulku `sport`
--
ALTER TABLE `sport`
    ADD PRIMARY KEY (`id`);

--
-- Indexy pro tabulku `sportsman`
--
ALTER TABLE `sportsman`
    ADD PRIMARY KEY (`id`);

--
-- Indexy pro tabulku `sports_ground`
--
ALTER TABLE `sports_ground`
    ADD PRIMARY KEY (`id`),
  ADD KEY `fkIdx_173` (`address_id`),
  ADD KEY `fkIdx_295` (`cover_photo_id`),
  ADD KEY `fkIdx_318` (`profile_photo_id`);

--
-- Indexy pro tabulku `sport_sports_ground`
--
ALTER TABLE `sport_sports_ground`
    ADD PRIMARY KEY (`id`);

--
-- Indexy pro tabulku `user`
--
ALTER TABLE `user`
    ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pro tabulky
--

--
-- AUTO_INCREMENT pro tabulku `accepted_payment`
--
ALTER TABLE `accepted_payment`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pro tabulku `accepted_payment_sports_ground`
--
ALTER TABLE `accepted_payment_sports_ground`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pro tabulku `address`
--
ALTER TABLE `address`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pro tabulku `coach`
--
ALTER TABLE `coach`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pro tabulku `event`
--
ALTER TABLE `event`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pro tabulku `favorite`
--
ALTER TABLE `favorite`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pro tabulku `message`
--
ALTER TABLE `message`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pro tabulku `photo`
--
ALTER TABLE `photo`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pro tabulku `review`
--
ALTER TABLE `review`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pro tabulku `service`
--
ALTER TABLE `service`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pro tabulku `service_sports_ground`
--
ALTER TABLE `service_sports_ground`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pro tabulku `sport`
--
ALTER TABLE `sport`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pro tabulku `sportsman`
--
ALTER TABLE `sportsman`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pro tabulku `sports_ground`
--
ALTER TABLE `sports_ground`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pro tabulku `sport_sports_ground`
--
ALTER TABLE `sport_sports_ground`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pro tabulku `user`
--
ALTER TABLE `user`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Omezení pro exportované tabulky
--

--
-- Omezení pro tabulku `coach`
--
ALTER TABLE `coach`
    ADD CONSTRAINT `FK_280` FOREIGN KEY (`cover_photo_id`) REFERENCES `photo` (`id`);

--
-- Omezení pro tabulku `event`
--
ALTER TABLE `event`
    ADD CONSTRAINT `FK_124` FOREIGN KEY (`sports_ground_id`) REFERENCES `sports_ground` (`id`),
  ADD CONSTRAINT `FK_165` FOREIGN KEY (`coach_id`) REFERENCES `coach` (`id`);

--
-- Omezení pro tabulku `favorite`
--
ALTER TABLE `favorite`
    ADD CONSTRAINT `FK_135` FOREIGN KEY (`sportsman_id`) REFERENCES `sportsman` (`id`),
  ADD CONSTRAINT `FK_138` FOREIGN KEY (`sports_ground_id`) REFERENCES `sports_ground` (`id`),
  ADD CONSTRAINT `FK_246` FOREIGN KEY (`coach_id`) REFERENCES `coach` (`id`);

--
-- Omezení pro tabulku `message`
--
ALTER TABLE `message`
    ADD CONSTRAINT `FK_217` FOREIGN KEY (`sportsman_id`) REFERENCES `sportsman` (`id`),
  ADD CONSTRAINT `FK_220` FOREIGN KEY (`sports_ground_id`) REFERENCES `sports_ground` (`id`),
  ADD CONSTRAINT `FK_223` FOREIGN KEY (`coach_id`) REFERENCES `coach` (`id`);

--
-- Omezení pro tabulku `photo`
--
ALTER TABLE `photo`
    ADD CONSTRAINT `FK_262` FOREIGN KEY (`coach_id`) REFERENCES `coach` (`id`),
  ADD CONSTRAINT `FK_308` FOREIGN KEY (`sports_ground_id`) REFERENCES `sports_ground` (`id`);

--
-- Omezení pro tabulku `review`
--
ALTER TABLE `review`
    ADD CONSTRAINT `FK_100` FOREIGN KEY (`sports_ground_id`) REFERENCES `sports_ground` (`id`),
  ADD CONSTRAINT `FK_109` FOREIGN KEY (`coach_id`) REFERENCES `coach` (`id`),
  ADD CONSTRAINT `FK_239` FOREIGN KEY (`sportsman_id`) REFERENCES `sportsman` (`id`),
  ADD CONSTRAINT `review_ibfk_1` FOREIGN KEY (`event_id`) REFERENCES `event` (`id`);

--
-- Omezení pro tabulku `sports_ground`
--
ALTER TABLE `sports_ground`
    ADD CONSTRAINT `FK_171` FOREIGN KEY (`address_id`) REFERENCES `address` (`id`),
  ADD CONSTRAINT `FK_293` FOREIGN KEY (`cover_photo_id`) REFERENCES `photo` (`id`),
  ADD CONSTRAINT `FK_316` FOREIGN KEY (`profile_photo_id`) REFERENCES `photo` (`id`);
COMMIT;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Vypisuji data pro tabulku `accepted_payment`
--

INSERT INTO `accepted_payment` (`id`, `name`, `description`) VALUES
(1, 'Hotově', 'Zaplaťte na místě hotově.'),
(2, 'Převodem', 'Zaplaťte z pohodlí domova převodem.'),
(3, 'Multisport', 'K platbě použijte svou Multisport kartu.');

--
-- Vypisuji data pro tabulku `accepted_payment_sports_ground`
--

INSERT INTO `accepted_payment_sports_ground` (`id`, `accepted_payment_id`, `sports_ground_id`) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 1, 2),
(4, 2, 2),
(5, 1, 3),
(6, 2, 4),
(7, 3, 4),
(8, 1, 5),
(9, 2, 6),
(10, 3, 6);

--
-- Vypisuji data pro tabulku `address`
--

INSERT INTO `address` (`id`, `street`, `no`, `city`, `zip_code`, `region`, `state`) VALUES
(1, 'Semčice', 41, 'Semčice', 39175, 'Středočeský kraj', 'Česká republika'),
(2, 'Sýčina', 8, 'Dobrovice', 29441, 'Středočeský kraj', 'Česká republika'),
(3, 'Brozánky', 83, 'Hořín - Brozánky', 27601, 'Středočeský kraj', 'Česká republika'),
(4, 'Italská', 560, 'Praha 2', 12000, 'Praha', 'Česká republika'),
(5, 'Vlašská', 336, 'Praha 1', 11800, 'Praha', 'Česká republika'),
(6, 'Na Petřinách', 302, 'Praha 6', 16200, 'Praha', 'Česká republika'),
(7, 'Stochovská', 530, 'Praha 6', 16100, 'Praha', 'Česká republika'),
(8, 'Plzeňská', 290, 'Praha 5', 15000, 'Praha', 'Česká republika'),
(9, 'Radlická', 333, 'Praha 5', 15000, 'Praha', 'Česká republika'),
(10, 'náměstí I. P. Pavlova', 1785, 'Praha 2', 12000, 'Praha', 'Česká republika'),
(11, 'Husova', 37, 'Podbořany', 44101, 'Středočeský kraj', 'Česká republika');

--
-- Vypisuji data pro tabulku `coach`
--

INSERT INTO `coach` (`id`, `username`, `name`, `surname`, `published`, `phone`, `vat_number`, `specialization`, `requirements`, `description`, `profile_photo_id`, `cover_photo_id`) VALUES
(1, 'starkovaleona', 'Leona', 'Stárková', 1, '452452753', NULL, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer imperdiet lectus quis justo. Maecenas libero. Nunc auctor. Aenean fermentum risus id tortor. Proin mattis lacinia justo. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Suspendisse sagittis ultrices augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Nullam sit amet magna in magna gravida vehicula. Aliquam id dolor. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien.', 'In enim a arcu imperdiet malesuada. Nullam at arcu a est sollicitudin euismod. Aliquam ornare wisi eu metus. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Praesent dapibus. Maecenas aliquet accumsan leo. In convallis. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Integer malesuada. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui.', 'Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Etiam posuere lacus quis dolor. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Nullam faucibus mi quis velit. Suspendisse nisl. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Nulla quis diam. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Pellentesque ipsum. Etiam quis quam. Sed convallis magna eu sem. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. In enim a arcu imperdiet malesuada. Nunc auctor.', NULL, NULL),
(2, 'hakenovavlasta', 'Vlasta', 'Hakenová', 1, '753895678', NULL, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer imperdiet lectus quis justo. Maecenas libero. Nunc auctor. Aenean fermentum risus id tortor. Proin mattis lacinia justo. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Suspendisse sagittis ultrices augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Nullam sit amet magna in magna gravida vehicula. Aliquam id dolor. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien.', 'In enim a arcu imperdiet malesuada. Nullam at arcu a est sollicitudin euismod. Aliquam ornare wisi eu metus. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Praesent dapibus. Maecenas aliquet accumsan leo. In convallis. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Integer malesuada. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui.', 'Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Etiam posuere lacus quis dolor. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Nullam faucibus mi quis velit. Suspendisse nisl. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Nulla quis diam. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Pellentesque ipsum. Etiam quis quam. Sed convallis magna eu sem. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. In enim a arcu imperdiet malesuada. Nunc auctor.', NULL, NULL),
(3, 'opletalovahana', 'Hana', 'Opletalová', 1, '785684562', NULL, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer imperdiet lectus quis justo. Maecenas libero. Nunc auctor. Aenean fermentum risus id tortor. Proin mattis lacinia justo. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Suspendisse sagittis ultrices augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Nullam sit amet magna in magna gravida vehicula. Aliquam id dolor. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien.', 'In enim a arcu imperdiet malesuada. Nullam at arcu a est sollicitudin euismod. Aliquam ornare wisi eu metus. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Praesent dapibus. Maecenas aliquet accumsan leo. In convallis. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Integer malesuada. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui.', 'Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Etiam posuere lacus quis dolor. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Nullam faucibus mi quis velit. Suspendisse nisl. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Nulla quis diam. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Pellentesque ipsum. Etiam quis quam. Sed convallis magna eu sem. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. In enim a arcu imperdiet malesuada. Nunc auctor.', NULL, NULL),
(4, 'nesporjakub', 'Jakub', 'Nešpor', 1, '864531756', NULL, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer imperdiet lectus quis justo. Maecenas libero. Nunc auctor. Aenean fermentum risus id tortor. Proin mattis lacinia justo. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Suspendisse sagittis ultrices augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Nullam sit amet magna in magna gravida vehicula. Aliquam id dolor. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien.', 'In enim a arcu imperdiet malesuada. Nullam at arcu a est sollicitudin euismod. Aliquam ornare wisi eu metus. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Praesent dapibus. Maecenas aliquet accumsan leo. In convallis. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Integer malesuada. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui.', 'Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Etiam posuere lacus quis dolor. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Nullam faucibus mi quis velit. Suspendisse nisl. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Nulla quis diam. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Pellentesque ipsum. Etiam quis quam. Sed convallis magna eu sem. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. In enim a arcu imperdiet malesuada. Nunc auctor.', NULL, NULL),
(5, 'dohnalovabarbora', 'Barbora', 'Dohnalová', 1, '853456789', NULL, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer imperdiet lectus quis justo. Maecenas libero. Nunc auctor. Aenean fermentum risus id tortor. Proin mattis lacinia justo. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Suspendisse sagittis ultrices augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Nullam sit amet magna in magna gravida vehicula. Aliquam id dolor. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien.', 'In enim a arcu imperdiet malesuada. Nullam at arcu a est sollicitudin euismod. Aliquam ornare wisi eu metus. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Praesent dapibus. Maecenas aliquet accumsan leo. In convallis. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Integer malesuada. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui.', 'Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Etiam posuere lacus quis dolor. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Nullam faucibus mi quis velit. Suspendisse nisl. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Nulla quis diam. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Pellentesque ipsum. Etiam quis quam. Sed convallis magna eu sem. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. In enim a arcu imperdiet malesuada. Nunc auctor.', NULL, NULL),
(6, 'dvorakmarcel', 'Marcel', 'Dvořák', 1, '958643258', NULL, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer imperdiet lectus quis justo. Maecenas libero. Nunc auctor. Aenean fermentum risus id tortor. Proin mattis lacinia justo. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Suspendisse sagittis ultrices augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Nullam sit amet magna in magna gravida vehicula. Aliquam id dolor. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien.', 'In enim a arcu imperdiet malesuada. Nullam at arcu a est sollicitudin euismod. Aliquam ornare wisi eu metus. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Praesent dapibus. Maecenas aliquet accumsan leo. In convallis. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Integer malesuada. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui.', 'Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Etiam posuere lacus quis dolor. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Nullam faucibus mi quis velit. Suspendisse nisl. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Nulla quis diam. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Pellentesque ipsum. Etiam quis quam. Sed convallis magna eu sem. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. In enim a arcu imperdiet malesuada. Nunc auctor.', NULL, NULL),
(7, 'polakmichal', 'Michal', 'Polák', 1, '856753159', NULL, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer imperdiet lectus quis justo. Maecenas libero. Nunc auctor. Aenean fermentum risus id tortor. Proin mattis lacinia justo. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Suspendisse sagittis ultrices augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Nullam sit amet magna in magna gravida vehicula. Aliquam id dolor. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien.', 'In enim a arcu imperdiet malesuada. Nullam at arcu a est sollicitudin euismod. Aliquam ornare wisi eu metus. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Praesent dapibus. Maecenas aliquet accumsan leo. In convallis. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Integer malesuada. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui.', 'Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Etiam posuere lacus quis dolor. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Nullam faucibus mi quis velit. Suspendisse nisl. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Nulla quis diam. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Pellentesque ipsum. Etiam quis quam. Sed convallis magna eu sem. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. In enim a arcu imperdiet malesuada. Nunc auctor.', NULL, NULL),
(8, 'malyroman', 'Roman', 'Malý', 1, '852489654', NULL, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer imperdiet lectus quis justo. Maecenas libero. Nunc auctor. Aenean fermentum risus id tortor. Proin mattis lacinia justo. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Suspendisse sagittis ultrices augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Nullam sit amet magna in magna gravida vehicula. Aliquam id dolor. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien.', 'In enim a arcu imperdiet malesuada. Nullam at arcu a est sollicitudin euismod. Aliquam ornare wisi eu metus. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Praesent dapibus. Maecenas aliquet accumsan leo. In convallis. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Integer malesuada. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui.', 'Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Etiam posuere lacus quis dolor. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Nullam faucibus mi quis velit. Suspendisse nisl. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Nulla quis diam. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Pellentesque ipsum. Etiam quis quam. Sed convallis magna eu sem. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. In enim a arcu imperdiet malesuada. Nunc auctor.', NULL, NULL),
(9, 'motalpetr', 'Petr', 'Motal', 1, '789259456', NULL, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer imperdiet lectus quis justo. Maecenas libero. Nunc auctor. Aenean fermentum risus id tortor. Proin mattis lacinia justo. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Suspendisse sagittis ultrices augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Nullam sit amet magna in magna gravida vehicula. Aliquam id dolor. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien.', 'In enim a arcu imperdiet malesuada. Nullam at arcu a est sollicitudin euismod. Aliquam ornare wisi eu metus. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Praesent dapibus. Maecenas aliquet accumsan leo. In convallis. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Integer malesuada. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui.', 'Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Etiam posuere lacus quis dolor. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Nullam faucibus mi quis velit. Suspendisse nisl. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Nulla quis diam. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Pellentesque ipsum. Etiam quis quam. Sed convallis magna eu sem. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. In enim a arcu imperdiet malesuada. Nunc auctor.', NULL, NULL),
(10, 'kratochvilkarel', 'Karel', 'Kratochvíl', 1, '897159675', NULL, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer imperdiet lectus quis justo. Maecenas libero. Nunc auctor. Aenean fermentum risus id tortor. Proin mattis lacinia justo. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Suspendisse sagittis ultrices augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Nullam sit amet magna in magna gravida vehicula. Aliquam id dolor. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien.', 'In enim a arcu imperdiet malesuada. Nullam at arcu a est sollicitudin euismod. Aliquam ornare wisi eu metus. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Praesent dapibus. Maecenas aliquet accumsan leo. In convallis. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Integer malesuada. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui.', 'Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Etiam posuere lacus quis dolor. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Nullam faucibus mi quis velit. Suspendisse nisl. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Nulla quis diam. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Pellentesque ipsum. Etiam quis quam. Sed convallis magna eu sem. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. In enim a arcu imperdiet malesuada. Nunc auctor.', NULL, NULL),
(11, 'kasikjosef', 'Josef', 'Kasík', 1, '756854125', NULL, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer imperdiet lectus quis justo. Maecenas libero. Nunc auctor. Aenean fermentum risus id tortor. Proin mattis lacinia justo. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Suspendisse sagittis ultrices augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Nullam sit amet magna in magna gravida vehicula. Aliquam id dolor. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien.', 'In enim a arcu imperdiet malesuada. Nullam at arcu a est sollicitudin euismod. Aliquam ornare wisi eu metus. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Praesent dapibus. Maecenas aliquet accumsan leo. In convallis. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Integer malesuada. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui.', 'Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Etiam posuere lacus quis dolor. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Nullam faucibus mi quis velit. Suspendisse nisl. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Nulla quis diam. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Pellentesque ipsum. Etiam quis quam. Sed convallis magna eu sem. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. In enim a arcu imperdiet malesuada. Nunc auctor.', NULL, NULL),
(12, 'adamovajirina', 'Jiřina', 'Adamová', 1, '851235863', NULL, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer imperdiet lectus quis justo. Maecenas libero. Nunc auctor. Aenean fermentum risus id tortor. Proin mattis lacinia justo. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Suspendisse sagittis ultrices augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Nullam sit amet magna in magna gravida vehicula. Aliquam id dolor. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien.', 'In enim a arcu imperdiet malesuada. Nullam at arcu a est sollicitudin euismod. Aliquam ornare wisi eu metus. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Praesent dapibus. Maecenas aliquet accumsan leo. In convallis. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Integer malesuada. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui.', 'Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Etiam posuere lacus quis dolor. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Nullam faucibus mi quis velit. Suspendisse nisl. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Nulla quis diam. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Pellentesque ipsum. Etiam quis quam. Sed convallis magna eu sem. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. In enim a arcu imperdiet malesuada. Nunc auctor.', NULL, NULL),
(13, 'coufalovapetra', 'Petra', 'Coufalová', 1, '874358951', NULL, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer imperdiet lectus quis justo. Maecenas libero. Nunc auctor. Aenean fermentum risus id tortor. Proin mattis lacinia justo. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Suspendisse sagittis ultrices augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Nullam sit amet magna in magna gravida vehicula. Aliquam id dolor. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien.', 'In enim a arcu imperdiet malesuada. Nullam at arcu a est sollicitudin euismod. Aliquam ornare wisi eu metus. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Praesent dapibus. Maecenas aliquet accumsan leo. In convallis. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Integer malesuada. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui.', 'Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Etiam posuere lacus quis dolor. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Nullam faucibus mi quis velit. Suspendisse nisl. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Nulla quis diam. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Pellentesque ipsum. Etiam quis quam. Sed convallis magna eu sem. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. In enim a arcu imperdiet malesuada. Nunc auctor.', NULL, NULL),
(14, 'stankovamarie', 'Marie', 'Staňková', 1, '753159842', NULL, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer imperdiet lectus quis justo. Maecenas libero. Nunc auctor. Aenean fermentum risus id tortor. Proin mattis lacinia justo. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Suspendisse sagittis ultrices augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Nullam sit amet magna in magna gravida vehicula. Aliquam id dolor. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien.', 'In enim a arcu imperdiet malesuada. Nullam at arcu a est sollicitudin euismod. Aliquam ornare wisi eu metus. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Praesent dapibus. Maecenas aliquet accumsan leo. In convallis. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Integer malesuada. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui.', 'Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Etiam posuere lacus quis dolor. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Nullam faucibus mi quis velit. Suspendisse nisl. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Nulla quis diam. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Pellentesque ipsum. Etiam quis quam. Sed convallis magna eu sem. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. In enim a arcu imperdiet malesuada. Nunc auctor.', NULL, NULL),
(15, 'sekyrovamichaela', 'Michaela', 'Sekyrová', 1, '542156742', NULL, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer imperdiet lectus quis justo. Maecenas libero. Nunc auctor. Aenean fermentum risus id tortor. Proin mattis lacinia justo. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Suspendisse sagittis ultrices augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Nullam sit amet magna in magna gravida vehicula. Aliquam id dolor. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien.', 'In enim a arcu imperdiet malesuada. Nullam at arcu a est sollicitudin euismod. Aliquam ornare wisi eu metus. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Praesent dapibus. Maecenas aliquet accumsan leo. In convallis. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Integer malesuada. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui.', 'Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Etiam posuere lacus quis dolor. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Nullam faucibus mi quis velit. Suspendisse nisl. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Nulla quis diam. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Pellentesque ipsum. Etiam quis quam. Sed convallis magna eu sem. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. In enim a arcu imperdiet malesuada. Nunc auctor.', NULL, NULL);



--
-- Vypisuji data pro tabulku `service`
--

INSERT INTO `service` (`id`, `name`, `description`) VALUES
(1, 'WiFi', 'Pokrytí po celé provozovně.'),
(2, 'Sprchy', ''),
(3, 'Šatna', ''),
(4, 'Zapůjčení potřebného vybavení', '');

--
-- Vypisuji data pro tabulku `sport`
--

INSERT INTO `sport` (`id`, `name`, `color`) VALUES
(1, 'Fitness', 'green'),
(2, 'Jóga', 'lime'),
(3, 'H.E.A.T.', 'red'),
(4, 'Pilates', 'pink'),
(5, 'TRX Training', 'yellow'),
(6, 'Spinning', 'purple'),
(7, 'Posilovna', 'green'),
(8, 'Zumba', 'lime'),
(9, 'Pole Dance', 'red'),
(10, 'Koule', 'pink'),
(11, 'Cvičení s vlastní vahou', 'yellow'),
(12, 'Tabata', 'purple');

--
-- Vypisuji data pro tabulku `sportsman`
--

INSERT INTO `sportsman` (`id`, `username`, `name`, `surname`, `phone`, `profile_photo_id`) VALUES
(1, 'gunarovamarie', 'Marie', 'Gunárová', '123456789', NULL),
(2, 'ledvinamichal', 'Michal', 'Ledvina', '879871234', NULL),
(3, 'kusaadela', 'Adéla', 'Kusá', NULL, NULL),
(4, 'majjakub', 'Jakub', 'Máj', '785231575', NULL),
(5, 'rosovamarketa', 'Markéta', 'Rosová', '564856428', NULL),
(6, 'ferkovaanna', 'Anna', 'Ferková', '485298456', NULL),
(7, 'slegrrene', 'René', 'Šlégr', NULL, NULL),
(8, 'kohoutkovajitka', 'Jitka', 'Kohoutková', '544567538', NULL),
(9, 'vlachmichal', 'Michal', 'Vlach', '654852159', NULL),
(10, 'krejcidavid', 'David', 'Krejčí', NULL, NULL);

--
-- Vypisuji data pro tabulku `sports_ground`
--

INSERT INTO `sports_ground` (`id`, `username`, `name`, `published`, `opening_hours_from`, `opening_hours_to`, `web`, `phone`, `vat_number`, `description`, `address_id`, `cover_photo_id`, `profile_photo_id`) VALUES
(1, 'sportzone', 'Sport Zone', 0, '09:00:00', '15:00:00', 'http://www.sport-zone.cz', '728 674 593', '27596001', 'Provozujeme kurty na squash a bedminton s plně vybaveným sportovním zázemím a možností zapůjčení vybavení.', 1, NULL, NULL),
(2, 'relaxme', 'RelaxMe', 1, '13:00:00', '17:00:00', 'http://relaxme.cz', '728 124 754', '07918101', 'Wellness centrum Relaxme v Kolíně nabízí nejrůznější masáže (klasické, těhotenské i thajské od rodilé Thajky), různé druhy jógy, cvičení a masáže.', 2, NULL, NULL),
(3, 'gymcube', 'Gym Cube', 1, '05:00:00', '21:00:00', 'http://gymcube.cz/', '607 618 666', NULL, 'Nové moderní (nejen) fitness.', 3, NULL, NULL),
(4, 'JBI Sport Fit Studio', 'jbisportfitstudio', 1, '12:00:00', '18:00:00', 'http://www.jbi-fitness.cz', '321 721 319', NULL, 'Skvělého pocitu z dobré kondice můžete dosáhnout v každém věku. Fitness je životní styl, který napomáhá lidem udržet si zdraví a účinně se chránit před stresem a civilizačními chorobami. Pravidelným cvičením můžete nabrat svalovou hmotu nebo se zbavit přebytečných kil.', 4, NULL, NULL),
(5, 'tvujgym', 'Tvůj Gym', 1, '05:00:00', '23:00:00', 'https://www.tvujgym.cz/', '723 032 597', '06125744', 'Tvůj Gym (TG) je rájem pro všechny ty, kterým jde při cvičení o maximální kvalitu tréninku bez jakýchkoliv kompromisů, spojenou s velkou mírou soukromí.', 5, NULL, NULL),
(6, 'infinityfitness', 'Infinity fitness', 1, '09:00:00', '20:00:00', 'http://www.infinityfitness.cz', '564123784', NULL, 'V našem fitku můžete navštívit lekce jako je například fitbox, TRX, kruhový trénink, box, street dance nebo bodystyling.', 6, NULL, NULL);

--
-- Vypisuji data pro tabulku `sport_sports_ground`
--

INSERT INTO `sport_sports_ground` (`id`, `sport_id`, `sports_ground_id`) VALUES
(1, 1, 1),
(2, 12, 1),
(3, 2, 2),
(4, 5, 2),
(5, 3, 2),
(6, 8, 3),
(7, 6, 3),
(8, 7, 4),
(9, 9, 5),
(10, 10, 5),
(11, 11, 5),
(12, 12, 6),
(13, 1, 6),
(14, 5, 6),
(15, 4, 6),
(16, 7, 6);

--
-- Vypisuji data pro tabulku `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `verified`, `password_reset_hash`, `coach_id`, `sportsman_id`, `sports_ground_id`) VALUES
(1, 'keiji@sbcglobal.net', '$argon2i$v=19$m=16,t=2,p=1$dGVzdDEyMzQ1$4CsBrhGxu26Eyp7biRJCfw', 1, NULL, NULL, 1, NULL),
(2, 'cyrus@gmail.com', '$argon2i$v=19$m=16,t=2,p=1$dGVzdDEyMzQ1$4CsBrhGxu26Eyp7biRJCfw', 0, NULL, NULL, 2, NULL),
(3, 'lishoy@hotmail.com', '$argon2i$v=19$m=16,t=2,p=1$dGVzdDEyMzQ1$4CsBrhGxu26Eyp7biRJCfw', 0, NULL, NULL, 3, NULL),
(4, 'goldberg@verizon.net', '$argon2i$v=19$m=16,t=2,p=1$dGVzdDEyMzQ1$4CsBrhGxu26Eyp7biRJCfw', 0, NULL, NULL, 4, NULL),
(5, 'valdez@yahoo.com', '$argon2i$v=19$m=16,t=2,p=1$dGVzdDEyMzQ1$4CsBrhGxu26Eyp7biRJCfw', 0, NULL, NULL, 5, NULL),
(6, 'kidehen@verizon.net', '$argon2i$v=19$m=16,t=2,p=1$dGVzdDEyMzQ1$4CsBrhGxu26Eyp7biRJCfw', 0, NULL, NULL, 6, NULL),
(7, 'grolschie@aol.com', '$argon2i$v=19$m=16,t=2,p=1$dGVzdDEyMzQ1$4CsBrhGxu26Eyp7biRJCfw', 0, NULL, NULL, 7, NULL),
(8, 'danneng@msn.com', '$argon2i$v=19$m=16,t=2,p=1$dGVzdDEyMzQ1$4CsBrhGxu26Eyp7biRJCfw', 0, NULL, NULL, 8, NULL),
(9, 'kjetilk@icloud.com', '$argon2i$v=19$m=16,t=2,p=1$dGVzdDEyMzQ1$4CsBrhGxu26Eyp7biRJCfw', 0, NULL, NULL, 9, NULL),
(10, 'aegreene@gmail.com', '$argon2i$v=19$m=16,t=2,p=1$dGVzdDEyMzQ1$4CsBrhGxu26Eyp7biRJCfw', 0, NULL, NULL, 10, NULL),
(11, 'cgcra@me.com', '$argon2i$v=19$m=16,t=2,p=1$dGVzdDEyMzQ1$4CsBrhGxu26Eyp7biRJCfw', 0, NULL, NULL, NULL, 1),
(12, 'suresh@gmail.com', '$argon2i$v=19$m=16,t=2,p=1$dGVzdDEyMzQ1$4CsBrhGxu26Eyp7biRJCfw', 0, NULL, NULL, NULL, 2),
(13, 'simone@att.net', '$argon2i$v=19$m=16,t=2,p=1$dGVzdDEyMzQ1$4CsBrhGxu26Eyp7biRJCfw', 0, NULL, NULL, NULL, 3),
(14, 'smartfart@live.com', '$argon2i$v=19$m=16,t=2,p=1$dGVzdDEyMzQ1$4CsBrhGxu26Eyp7biRJCfw', 0, NULL, NULL, NULL, 4),
(15, 'lpalmer@gmail.com', '$argon2i$v=19$m=16,t=2,p=1$dGVzdDEyMzQ1$4CsBrhGxu26Eyp7biRJCfw', 0, NULL, NULL, NULL, 5),
(16, 'lishoy@hotmail.com', '$argon2i$v=19$m=16,t=2,p=1$dGVzdDEyMzQ1$4CsBrhGxu26Eyp7biRJCfw', 0, NULL, NULL, NULL, 6);

--
-- Vypisuji data pro tabulku `event`
--

INSERT INTO `event` (`id`, `name`, `datetime_from`, `datetime_to`, `datetime_created`, `description`, `cover_photo_id`, `sports_ground_id`, `coach_id`) VALUES
(1, 'Kruhový trénink', '2022-02-01 19:00:00', '2022-02-01 21:00:00', '2021-11-22 13:00:00', 'Kruhový trénink pro všechny.', NULL, 3, 1),
(2, 'Ranní rozcvička', '2022-02-01 07:00:00', '2022-02-01 07:00:00', '2022-01-07 17:31:14', 'Ranní rozcvička v Sportzone.', NULL, 1, 2),
(3, 'Ranní rozcvička', '2022-02-03 07:00:00', '2022-02-03 07:00:00', '2022-01-07 17:31:14', 'Ranní rozcvička v Sportzone.', NULL, 1, 3),
(4, 'Ranní rozcvička', '2022-02-08 07:00:00', '2022-02-08 07:00:00', '2022-01-07 17:31:14', 'Ranní rozcvička v Sportzone.', NULL, 1, 2),
(5, 'Ranní rozcvička', '2022-02-10 07:00:00', '2022-02-10 07:00:00', '2022-01-07 17:31:14', 'Ranní rozcvička v Sportzone.', NULL, 1, 3),
(6, 'Kruhový trénink', '2022-02-08 19:00:00', '2022-02-08 21:00:00', '2021-11-22 13:00:00', 'Kruhový trénink pro všechny.', NULL, 3, 1),
(7, 'Kruhový trénink', '2022-02-15 19:00:00', '2022-02-15 21:00:00', '2021-11-22 13:00:00', 'Kruhový trénink pro všechny.', NULL, 3, 4),
(8, 'Jóga pro začátečníky', '2022-01-07 17:00:00', '2022-01-07 18:30:00', '2022-01-07 17:36:45', 'Jóga s vašimi oblíbenými trenéry.', NULL, 2, 6),
(9, 'Jóga pro začátečníky', '2022-01-14 17:00:00', '2022-01-14 18:30:00', '2022-01-07 17:36:45', 'Jóga s vašimi oblíbenými trenéry.', NULL, 2, 7),
(10, 'Jóga pro začátečníky', '2022-01-21 17:00:00', '2022-01-21 18:30:00', '2022-01-07 17:36:45', 'Jóga s vašimi oblíbenými trenéry.', NULL, 2, 6),
(11, 'Jóga pro začátečníky', '2022-01-28 17:00:00', '2022-01-28 18:30:00', '2022-01-07 17:36:45', 'Jóga s vašimi oblíbenými trenéry.', NULL, 2, 7),
(12, 'Box pro pokročilé', '2022-01-05 19:00:00', '2022-01-05 20:30:00', '2022-01-07 17:39:03', 'Vždy choďte ve dvojici se svým sparing partnerem.', NULL, 4, 8),
(13, 'Box pro pokročilé', '2022-01-12 19:00:00', '2022-01-12 20:30:00', '2022-01-07 17:39:03', 'Vždy choďte ve dvojici se svým sparing partnerem.', NULL, 4, 8),
(14, 'Box pro pokročilé', '2022-01-19 19:00:00', '2022-01-19 20:30:00', '2022-01-07 17:39:03', 'Vždy choďte ve dvojici se svým sparing partnerem.', NULL, 4, 8),
(15, 'Box pro pokročilé', '2022-01-26 19:00:00', '2022-01-26 20:30:00', '2022-01-07 17:39:03', 'Vždy choďte ve dvojici se svým sparing partnerem.', NULL, 4, 8),
(16, 'Box pro začátečníky', '2022-01-05 19:00:00', '2022-01-05 20:30:00', '2022-01-07 17:39:03', 'Vždy choďte ve dvojici se svým sparing partnerem.', NULL, 4, 9),
(17, 'Box pro začátečníky', '2022-01-12 19:00:00', '2022-01-12 20:30:00', '2022-01-07 17:39:03', 'Vždy choďte ve dvojici se svým sparing partnerem.', NULL, 4, 9),
(18, 'Box pro začátečníky', '2022-01-19 19:00:00', '2022-01-19 20:30:00', '2022-01-07 17:39:03', 'Vždy choďte ve dvojici se svým sparing partnerem.', NULL, 4, 10),
(19, 'Box pro začátečníky', '2022-01-26 19:00:00', '2022-01-26 20:30:00', '2022-01-07 17:39:03', 'Vždy choďte ve dvojici se svým sparing partnerem.', NULL, 4, 10),
(20, 'Posilování pro začátečníky', '2022-01-05 19:00:00', '2022-01-05 20:30:00', '2022-01-07 17:39:03', 'Dostavte se minimálně 15min před začátkem akce.', NULL, 5, 11),
(21, 'Box pro začátečníky', '2022-01-12 19:00:00', '2022-01-12 20:30:00', '2022-01-07 17:39:03', 'Dostavte se minimálně 15min před začátkem akce.', NULL, 5, 11),
(22, 'Box pro začátečníky', '2022-01-19 19:00:00', '2022-01-19 20:30:00', '2022-01-07 17:39:03', 'Dostavte se minimálně 15min před začátkem akce.', NULL, 5, 12),
(23, 'Box pro začátečníky', '2022-01-26 19:00:00', '2022-01-26 20:30:00', '2022-01-07 17:39:03', 'Dostavte se minimálně 15min před začátkem akce.', NULL, 5, 12),
(24, 'Pilates', '2022-02-01 07:00:00', '2022-02-01 07:00:00', '2022-01-07 17:31:14', 'Pro všechny milovníky zdravého životního stylu a pohybu.', NULL, 6, 13),
(25, 'Pilates', '2022-02-03 07:00:00', '2022-02-03 07:00:00', '2022-01-07 17:31:14', 'Pro všechny milovníky zdravého životního stylu a pohybu.', NULL, 6, 14),
(26, 'Pilates', '2022-02-08 07:00:00', '2022-02-08 07:00:00', '2022-01-07 17:31:14', 'Pro všechny milovníky zdravého životního stylu a pohybu.', NULL, 6, 15);


--
-- Vypisuji data pro tabulku `favorite`
--

INSERT INTO `favorite` (`id`, `sportsman_id`, `coach_id`, `sports_ground_id`) VALUES
(1, 1, 1, NULL),
(2, 1, 5, NULL),
(3, 1, NULL, 5),
(4, 2, NULL, 4),
(5, 2, NULL, 4),
(6, 3, 4, NULL),
(7, 4, NULL, 6),
(8, 5, 4, NULL),
(9, 6, NULL, 3),
(10, 7, 3, NULL),
(11, 8, NULL, 3),
(12, 9, NULL, 1),
(13, 10, NULL, 4),
(14, 10, NULL, 5),
(15, 10, NULL, 2);


--
-- Vypisuji data pro tabulku `service_sports_ground`
--

INSERT INTO `service_sports_ground` (`id`, `service_id`, `sports_ground_id`) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 3, 1),
(4, 4, 1),
(5, 1, 2),
(6, 2, 2),
(7, 3, 3),
(8, 4, 3),
(9, 4, 5),
(10, 1, 6),
(11, 3, 6),
(12, 4, 6);

--
-- Vypisuji data pro tabulku `review`
--

INSERT INTO `review` (`id`, `stars`, `comment`, `datetime`, `sportsman_id`, `sports_ground_id`, `coach_id`, `event_id`) VALUES
(1, 5, 'Skvělé prostředí.', '2021-11-28 20:28:36', 1, 1, NULL, NULL),
(12, 4, 'Kdyby se v prostorách nacházelo více vybavení, bylo by to ještě lepší:)', '2022-01-08 16:27:18', 1, NULL, NULL, 1),
(13, 3, 'Lekce by mohla trvat déle.', '2022-01-08 16:27:18', 2, NULL, NULL, 2),
(14, 2, 'Nelíbil se mi ani interiér, ani přístup personálu.', '2022-01-08 16:27:18', 3, NULL, NULL, 3),
(15, 1, 'Jedním slovem příšerné.', '2022-01-08 16:27:18', 1, NULL, NULL, 3),
(16, 5, 'Skvělé!!', '2022-01-08 16:27:18', 4, NULL, NULL, 4),
(17, 4, 'Kdyby se v prostorách nacházelo více vybavení, bylo by to ještě lepší:)', '2022-01-08 16:27:18', 1, NULL, NULL, 5),
(18, 3, 'Lekce by mohla trvat déle.', '2022-01-08 16:27:18', 2, NULL, NULL, 6),
(19, 2, 'Nelíbil se mi ani interiér, ani přístup personálu.', '2022-01-08 16:27:18', 3, NULL, NULL, 6),
(20, 1, 'Jedním slovem příšerné.', '2022-01-08 16:27:18', 1, NULL, NULL, 7),
(21, 5, 'Skvělé!!', '2022-01-08 16:27:18', 5, NULL, NULL, 8),
(22, 4, 'Kdyby se v prostorách nacházelo více vybavení, bylo by to ještě lepší:)', '2022-01-08 16:27:18', 1, NULL, NULL, 9),
(23, 3, 'Lekce by mohla trvat déle.', '2022-01-08 16:27:18', 2, NULL, NULL, 10),
(24, 2, 'Nelíbil se mi ani interiér, ani přístup personálu.', '2022-01-08 16:27:18', 3, NULL, NULL, 11),
(25, 1, 'Jedním slovem příšerné.', '2022-01-08 16:27:18', 1, NULL, NULL, 12),
(26, 5, 'Skvělé!!', '2022-01-08 16:27:18', 4, NULL, NULL, 12),
(27, 4, 'Kdyby se v prostorách nacházelo více vybavení, bylo by to ještě lepší:)', '2022-01-08 16:27:18', 1, NULL, NULL, 13),
(28, 3, 'Lekce by mohla trvat déle.', '2022-01-08 16:27:18', 2, NULL, NULL, 14),
(29, 2, 'Nelíbil se mi ani interiér, ani přístup personálu.', '2022-01-08 16:27:18', 3, NULL, NULL, 15),
(30, 1, 'Jedním slovem příšerné.', '2022-01-08 16:27:18', 1, NULL, NULL, 15),
(31, 5, 'Skvělé!!', '2022-01-08 16:27:18', 5, NULL, NULL, 15),
(32, 4, 'Kdyby se v prostorách nacházelo více vybavení, bylo by to ještě lepší:)', '2022-01-08 16:27:18', 1, NULL, NULL, 16),
(33, 3, 'Lekce by mohla trvat déle.', '2022-01-08 16:27:18', 2, NULL, NULL, 17),
(34, 2, 'Nelíbil se mi ani interiér, ani přístup personálu.', '2022-01-08 16:27:18', 3, NULL, NULL, 18),
(35, 1, 'Jedním slovem příšerné.', '2022-01-08 16:27:18', 1, NULL, NULL, 19),
(36, 5, 'Skvělé!!', '2022-01-08 16:27:18', 4, NULL, NULL, 20),
(37, 4, 'Kdyby se v prostorách nacházelo více vybavení, bylo by to ještě lepší:)', '2022-01-08 16:27:18', 1, NULL, NULL, 21),
(38, 3, 'Lekce by mohla trvat déle.', '2022-01-08 16:27:18', 2, NULL, NULL, 22),
(39, 2, 'Nelíbil se mi ani interiér, ani přístup personálu.', '2022-01-08 16:27:18', 3, NULL, NULL, 23),
(40, 1, 'Jedním slovem příšerné.', '2022-01-08 16:27:18', 1, NULL, NULL, 24),
(41, 5, 'Skvělé!!', '2022-01-08 16:27:18', 5, NULL, NULL, 25),
(42, 4, 'Kdyby se v prostorách nacházelo více vybavení, bylo by to ještě lepší:)', '2022-01-08 16:27:18', 1, NULL, NULL, 25),
(43, 3, 'Lekce by mohla trvat déle.', '2022-01-08 16:27:18', 2, NULL, NULL, 26),
(44, 2, 'Nelíbil se mi ani interiér, ani přístup personálu.', '2022-01-08 16:27:18', 3, NULL, NULL, 26),
(45, 1, 'Jedním slovem příšerné.', '2022-01-08 16:27:18', 1, NULL, NULL, 26),
(46, 5, 'Skvělé!!', '2022-01-08 16:27:18', 4, NULL, NULL, 26),
(47, 3, 'Chtělo by to lépe pečovat o vybavení.', '2022-01-08 16:33:29', 7, 1, NULL, NULL),
(48, 1, 'Příšerný přístup personálu k zákazníkovi.', '2022-01-08 16:33:29', 8, 1, NULL, NULL),
(49, 5, 'Skvělé prostředí, rozsáhlá nabídka služeb.', '2022-01-08 16:33:29', 9, 1, NULL, NULL),
(50, 2, 'Nic moc.', '2022-01-08 16:33:29', 10, 2, NULL, NULL),
(51, 3, 'Chtělo by to lépe pečovat o vybavení.', '2022-01-08 16:33:29', 7, 2, NULL, NULL),
(52, 1, 'Příšerný přístup personálu k zákazníkovi.', '2022-01-08 16:33:29', 8, 3, NULL, NULL),
(53, 5, 'Skvělé prostředí, rozsáhlá nabídka služeb.', '2022-01-08 16:33:29', 9, 3, NULL, NULL),
(54, 2, 'Nic moc.', '2022-01-08 16:33:29', 10, 5, NULL, NULL),
(55, 3, 'Chtělo by to lépe pečovat o vybavení.', '2022-01-08 16:33:29', 7, 5, NULL, NULL),
(56, 1, 'Příšerný přístup personálu k zákazníkovi.', '2022-01-08 16:33:29', 8, 6, NULL, NULL),
(57, 5, 'Skvělé prostředí, rozsáhlá nabídka služeb.', '2022-01-08 16:33:29', 9, 6, NULL, NULL),
(58, 2, 'Nic moc.', '2022-01-08 16:33:29', 10, 6, NULL, NULL),
(59, 2, 'Nepříjemný trenér.', '2022-01-08 16:36:12', 1, NULL, 1, NULL),
(60, 5, 'Doopravdy naučí, skvělý a přátelský přístup.', '2022-01-08 16:36:12', 2, NULL, 1, NULL),
(61, 4, 'Vždy je co zlepšovat, ale vcelku super trenér :)', '2022-01-08 16:36:12', 10, NULL, 1, NULL),
(62, 2, 'Nepříjemný trenér.', '2022-01-08 16:36:12', 1, NULL, 2, NULL),
(63, 5, 'Doopravdy naučí, skvělý a přátelský přístup.', '2022-01-08 16:36:12', 2, NULL, 3, NULL),
(64, 4, 'Vždy je co zlepšovat, ale vcelku super trenér :)', '2022-01-08 16:36:12', 10, NULL, 4, NULL),
(65, 2, 'Nepříjemný trenér.', '2022-01-08 16:36:12', 1, NULL, 6, NULL),
(66, 5, 'Doopravdy naučí, skvělý a přátelský přístup.', '2022-01-08 16:36:12', 2, NULL, 4, NULL),
(67, 4, 'Vždy je co zlepšovat, ale vcelku super trenér :)', '2022-01-08 16:36:12', 10, NULL, 6, NULL),
(68, 2, 'Nepříjemný trenér.', '2022-01-08 16:36:12', 1, NULL, 7, NULL),
(69, 5, 'Doopravdy naučí, skvělý a přátelský přístup.', '2022-01-08 16:36:12', 2, NULL, 8, NULL),
(70, 4, 'Vždy je co zlepšovat, ale vcelku super trenér :)', '2022-01-08 16:36:12', 10, NULL, 9, NULL),
(71, 2, 'Nepříjemný trenér.', '2022-01-08 16:36:12', 1, NULL, 10, NULL),
(72, 5, 'Doopravdy naučí, skvělý a přátelský přístup.', '2022-01-08 16:36:12', 3, NULL, 11, NULL),
(73, 4, 'Vždy je co zlepšovat, ale vcelku super trenér :)', '2022-01-08 16:36:12', 8, NULL, 12, NULL),
(74, 2, 'Nepříjemný trenér.', '2022-01-08 16:36:12', 4, NULL, 11, NULL),
(75, 5, 'Doopravdy naučí, skvělý a přátelský přístup.', '2022-01-08 16:36:12', 7, NULL, 12, NULL),
(76, 4, 'Vždy je co zlepšovat, ale vcelku super trenér :)', '2022-01-08 16:36:12', 6, NULL, 13, NULL),
(77, 2, 'Nepříjemný trenér.', '2022-01-08 16:36:12', 1, NULL, 6, NULL),
(78, 5, 'Doopravdy naučí, skvělý a přátelský přístup.', '2022-01-08 16:36:12', 2, NULL, 14, NULL),
(79, 4, 'Vždy je co zlepšovat, ale vcelku super trenér :)', '2022-01-08 16:36:12', 10, NULL, 14, NULL),
(80, 2, 'Nepříjemný trenér.', '2022-01-08 16:36:12', 1, NULL, 15, NULL),
(81, 5, 'Doopravdy naučí, skvělý a přátelský přístup.', '2022-01-08 16:36:12', 2, NULL, 15, NULL),
(82, 4, 'Vždy je co zlepšovat, ale vcelku super trenér :)', '2022-01-08 16:36:12', 10, NULL, 15, NULL);


COMMIT;
