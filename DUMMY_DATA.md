# Dummy data

```SQL

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

INSERT INTO `coach` (`id`, `username`, `name`, `surname`, `published`, `phone`, `vat_number`, `intro_text`, `specialization`, `requirements`, `description`, `profile_photo_id`, `cover_photo_id`) VALUES
(1, 'starkovaleona', 'Leona', 'Stárková', 1, '452452753', NULL, 'Lorem ipsum dolor sit amet...', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer imperdiet lectus quis justo. Maecenas libero. Nunc auctor. Aenean fermentum risus id tortor. Proin mattis lacinia justo. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Suspendisse sagittis ultrices augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Nullam sit amet magna in magna gravida vehicula. Aliquam id dolor. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien.', 'In enim a arcu imperdiet malesuada. Nullam at arcu a est sollicitudin euismod. Aliquam ornare wisi eu metus. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Praesent dapibus. Maecenas aliquet accumsan leo. In convallis. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Integer malesuada. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui.', 'Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Etiam posuere lacus quis dolor. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Nullam faucibus mi quis velit. Suspendisse nisl. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Nulla quis diam. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Pellentesque ipsum. Etiam quis quam. Sed convallis magna eu sem. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. In enim a arcu imperdiet malesuada. Nunc auctor.', NULL, NULL),
(2, 'hakenovavlasta', 'Vlasta', 'Hakenová', 1, '753895678', NULL, 'Lorem ipsum dolor sit amet...', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer imperdiet lectus quis justo. Maecenas libero. Nunc auctor. Aenean fermentum risus id tortor. Proin mattis lacinia justo. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Suspendisse sagittis ultrices augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Nullam sit amet magna in magna gravida vehicula. Aliquam id dolor. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien.', 'In enim a arcu imperdiet malesuada. Nullam at arcu a est sollicitudin euismod. Aliquam ornare wisi eu metus. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Praesent dapibus. Maecenas aliquet accumsan leo. In convallis. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Integer malesuada. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui.', 'Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Etiam posuere lacus quis dolor. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Nullam faucibus mi quis velit. Suspendisse nisl. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Nulla quis diam. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Pellentesque ipsum. Etiam quis quam. Sed convallis magna eu sem. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. In enim a arcu imperdiet malesuada. Nunc auctor.', NULL, NULL),
(3, 'opletalovahana', 'Hana', 'Opletalová', 1, '785684562', NULL, 'Lorem ipsum dolor sit amet...', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer imperdiet lectus quis justo. Maecenas libero. Nunc auctor. Aenean fermentum risus id tortor. Proin mattis lacinia justo. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Suspendisse sagittis ultrices augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Nullam sit amet magna in magna gravida vehicula. Aliquam id dolor. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien.', 'In enim a arcu imperdiet malesuada. Nullam at arcu a est sollicitudin euismod. Aliquam ornare wisi eu metus. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Praesent dapibus. Maecenas aliquet accumsan leo. In convallis. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Integer malesuada. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui.', 'Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Etiam posuere lacus quis dolor. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Nullam faucibus mi quis velit. Suspendisse nisl. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Nulla quis diam. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Pellentesque ipsum. Etiam quis quam. Sed convallis magna eu sem. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. In enim a arcu imperdiet malesuada. Nunc auctor.', NULL, NULL),
(4, 'nesporjakub', 'Jakub', 'Nešpor', 1, '864531756', NULL, 'Lorem ipsum dolor sit amet...', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer imperdiet lectus quis justo. Maecenas libero. Nunc auctor. Aenean fermentum risus id tortor. Proin mattis lacinia justo. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Suspendisse sagittis ultrices augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Nullam sit amet magna in magna gravida vehicula. Aliquam id dolor. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien.', 'In enim a arcu imperdiet malesuada. Nullam at arcu a est sollicitudin euismod. Aliquam ornare wisi eu metus. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Praesent dapibus. Maecenas aliquet accumsan leo. In convallis. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Integer malesuada. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui.', 'Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Etiam posuere lacus quis dolor. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Nullam faucibus mi quis velit. Suspendisse nisl. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Nulla quis diam. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Pellentesque ipsum. Etiam quis quam. Sed convallis magna eu sem. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. In enim a arcu imperdiet malesuada. Nunc auctor.', NULL, NULL),
(5, 'dohnalovabarbora', 'Barbora', 'Dohnalová', 1, '853456789', NULL, 'Lorem ipsum dolor sit amet...', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer imperdiet lectus quis justo. Maecenas libero. Nunc auctor. Aenean fermentum risus id tortor. Proin mattis lacinia justo. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Suspendisse sagittis ultrices augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Nullam sit amet magna in magna gravida vehicula. Aliquam id dolor. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien.', 'In enim a arcu imperdiet malesuada. Nullam at arcu a est sollicitudin euismod. Aliquam ornare wisi eu metus. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Praesent dapibus. Maecenas aliquet accumsan leo. In convallis. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Integer malesuada. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui.', 'Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Etiam posuere lacus quis dolor. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Nullam faucibus mi quis velit. Suspendisse nisl. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Nulla quis diam. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Pellentesque ipsum. Etiam quis quam. Sed convallis magna eu sem. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. In enim a arcu imperdiet malesuada. Nunc auctor.', NULL, NULL),
(6, 'dvorakmarcel', 'Marcel', 'Dvořák', 1, '958643258', NULL, 'Lorem ipsum dolor sit amet...', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer imperdiet lectus quis justo. Maecenas libero. Nunc auctor. Aenean fermentum risus id tortor. Proin mattis lacinia justo. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Suspendisse sagittis ultrices augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Nullam sit amet magna in magna gravida vehicula. Aliquam id dolor. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien.', 'In enim a arcu imperdiet malesuada. Nullam at arcu a est sollicitudin euismod. Aliquam ornare wisi eu metus. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Praesent dapibus. Maecenas aliquet accumsan leo. In convallis. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Integer malesuada. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui.', 'Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Etiam posuere lacus quis dolor. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Nullam faucibus mi quis velit. Suspendisse nisl. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Nulla quis diam. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Pellentesque ipsum. Etiam quis quam. Sed convallis magna eu sem. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. In enim a arcu imperdiet malesuada. Nunc auctor.', NULL, NULL),
(7, 'polakmichal', 'Michal', 'Polák', 1, '856753159', NULL, 'Lorem ipsum dolor sit amet...', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer imperdiet lectus quis justo. Maecenas libero. Nunc auctor. Aenean fermentum risus id tortor. Proin mattis lacinia justo. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Suspendisse sagittis ultrices augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Nullam sit amet magna in magna gravida vehicula. Aliquam id dolor. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien.', 'In enim a arcu imperdiet malesuada. Nullam at arcu a est sollicitudin euismod. Aliquam ornare wisi eu metus. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Praesent dapibus. Maecenas aliquet accumsan leo. In convallis. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Integer malesuada. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui.', 'Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Etiam posuere lacus quis dolor. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Nullam faucibus mi quis velit. Suspendisse nisl. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Nulla quis diam. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Pellentesque ipsum. Etiam quis quam. Sed convallis magna eu sem. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. In enim a arcu imperdiet malesuada. Nunc auctor.', NULL, NULL),
(8, 'malyroman', 'Roman', 'Malý', 1, '852489654', NULL, 'Lorem ipsum dolor sit amet...', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer imperdiet lectus quis justo. Maecenas libero. Nunc auctor. Aenean fermentum risus id tortor. Proin mattis lacinia justo. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Suspendisse sagittis ultrices augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Nullam sit amet magna in magna gravida vehicula. Aliquam id dolor. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien.', 'In enim a arcu imperdiet malesuada. Nullam at arcu a est sollicitudin euismod. Aliquam ornare wisi eu metus. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Praesent dapibus. Maecenas aliquet accumsan leo. In convallis. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Integer malesuada. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui.', 'Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Etiam posuere lacus quis dolor. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Nullam faucibus mi quis velit. Suspendisse nisl. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Nulla quis diam. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Pellentesque ipsum. Etiam quis quam. Sed convallis magna eu sem. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. In enim a arcu imperdiet malesuada. Nunc auctor.', NULL, NULL),
(9, 'motalpetr', 'Petr', 'Motal', 1, '789259456', NULL, 'Lorem ipsum dolor sit amet...', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer imperdiet lectus quis justo. Maecenas libero. Nunc auctor. Aenean fermentum risus id tortor. Proin mattis lacinia justo. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Suspendisse sagittis ultrices augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Nullam sit amet magna in magna gravida vehicula. Aliquam id dolor. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien.', 'In enim a arcu imperdiet malesuada. Nullam at arcu a est sollicitudin euismod. Aliquam ornare wisi eu metus. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Praesent dapibus. Maecenas aliquet accumsan leo. In convallis. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Integer malesuada. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui.', 'Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Etiam posuere lacus quis dolor. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Nullam faucibus mi quis velit. Suspendisse nisl. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Nulla quis diam. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Pellentesque ipsum. Etiam quis quam. Sed convallis magna eu sem. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. In enim a arcu imperdiet malesuada. Nunc auctor.', NULL, NULL),
(10, 'kratochvilkarel', 'Karel', 'Kratochvíl', 1, '897159675', NULL, 'Lorem ipsum dolor sit amet...', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer imperdiet lectus quis justo. Maecenas libero. Nunc auctor. Aenean fermentum risus id tortor. Proin mattis lacinia justo. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Suspendisse sagittis ultrices augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Nullam sit amet magna in magna gravida vehicula. Aliquam id dolor. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien.', 'In enim a arcu imperdiet malesuada. Nullam at arcu a est sollicitudin euismod. Aliquam ornare wisi eu metus. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Praesent dapibus. Maecenas aliquet accumsan leo. In convallis. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Integer malesuada. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui.', 'Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Etiam posuere lacus quis dolor. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Nullam faucibus mi quis velit. Suspendisse nisl. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Nulla quis diam. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Pellentesque ipsum. Etiam quis quam. Sed convallis magna eu sem. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. In enim a arcu imperdiet malesuada. Nunc auctor.', NULL, NULL),
(11, 'kasikjosef', 'Josef', 'Kasík', 1, '756854125', NULL, 'Lorem ipsum dolor sit amet...', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer imperdiet lectus quis justo. Maecenas libero. Nunc auctor. Aenean fermentum risus id tortor. Proin mattis lacinia justo. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Suspendisse sagittis ultrices augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Nullam sit amet magna in magna gravida vehicula. Aliquam id dolor. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien.', 'In enim a arcu imperdiet malesuada. Nullam at arcu a est sollicitudin euismod. Aliquam ornare wisi eu metus. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Praesent dapibus. Maecenas aliquet accumsan leo. In convallis. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Integer malesuada. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui.', 'Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Etiam posuere lacus quis dolor. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Nullam faucibus mi quis velit. Suspendisse nisl. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Nulla quis diam. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Pellentesque ipsum. Etiam quis quam. Sed convallis magna eu sem. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. In enim a arcu imperdiet malesuada. Nunc auctor.', NULL, NULL),
(12, 'adamovajirina', 'Jiřina', 'Adamová', 1, '851235863', NULL, 'Lorem ipsum dolor sit amet...', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer imperdiet lectus quis justo. Maecenas libero. Nunc auctor. Aenean fermentum risus id tortor. Proin mattis lacinia justo. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Suspendisse sagittis ultrices augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Nullam sit amet magna in magna gravida vehicula. Aliquam id dolor. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien.', 'In enim a arcu imperdiet malesuada. Nullam at arcu a est sollicitudin euismod. Aliquam ornare wisi eu metus. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Praesent dapibus. Maecenas aliquet accumsan leo. In convallis. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Integer malesuada. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui.', 'Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Etiam posuere lacus quis dolor. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Nullam faucibus mi quis velit. Suspendisse nisl. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Nulla quis diam. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Pellentesque ipsum. Etiam quis quam. Sed convallis magna eu sem. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. In enim a arcu imperdiet malesuada. Nunc auctor.', NULL, NULL),
(13, 'coufalovapetra', 'Petra', 'Coufalová', 1, '874358951', NULL, 'Lorem ipsum dolor sit amet...', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer imperdiet lectus quis justo. Maecenas libero. Nunc auctor. Aenean fermentum risus id tortor. Proin mattis lacinia justo. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Suspendisse sagittis ultrices augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Nullam sit amet magna in magna gravida vehicula. Aliquam id dolor. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien.', 'In enim a arcu imperdiet malesuada. Nullam at arcu a est sollicitudin euismod. Aliquam ornare wisi eu metus. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Praesent dapibus. Maecenas aliquet accumsan leo. In convallis. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Integer malesuada. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui.', 'Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Etiam posuere lacus quis dolor. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Nullam faucibus mi quis velit. Suspendisse nisl. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Nulla quis diam. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Pellentesque ipsum. Etiam quis quam. Sed convallis magna eu sem. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. In enim a arcu imperdiet malesuada. Nunc auctor.', NULL, NULL),
(14, 'stankovamarie', 'Marie', 'Staňková', 1, '753159842', NULL, 'Lorem ipsum dolor sit amet...', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer imperdiet lectus quis justo. Maecenas libero. Nunc auctor. Aenean fermentum risus id tortor. Proin mattis lacinia justo. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Suspendisse sagittis ultrices augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Nullam sit amet magna in magna gravida vehicula. Aliquam id dolor. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien.', 'In enim a arcu imperdiet malesuada. Nullam at arcu a est sollicitudin euismod. Aliquam ornare wisi eu metus. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Praesent dapibus. Maecenas aliquet accumsan leo. In convallis. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Integer malesuada. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui.', 'Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Etiam posuere lacus quis dolor. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Nullam faucibus mi quis velit. Suspendisse nisl. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Nulla quis diam. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Pellentesque ipsum. Etiam quis quam. Sed convallis magna eu sem. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. In enim a arcu imperdiet malesuada. Nunc auctor.', NULL, NULL),
(15, 'sekyrovamichaela', 'Michaela', 'Sekyrová', 1, '542156742', NULL, 'Lorem ipsum dolor sit amet...', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer imperdiet lectus quis justo. Maecenas libero. Nunc auctor. Aenean fermentum risus id tortor. Proin mattis lacinia justo. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Suspendisse sagittis ultrices augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Nullam sit amet magna in magna gravida vehicula. Aliquam id dolor. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien.', 'In enim a arcu imperdiet malesuada. Nullam at arcu a est sollicitudin euismod. Aliquam ornare wisi eu metus. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Praesent dapibus. Maecenas aliquet accumsan leo. In convallis. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Integer malesuada. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui.', 'Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Etiam posuere lacus quis dolor. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Nullam faucibus mi quis velit. Suspendisse nisl. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Nulla quis diam. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Pellentesque ipsum. Etiam quis quam. Sed convallis magna eu sem. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. In enim a arcu imperdiet malesuada. Nunc auctor.', NULL, NULL);

--
-- Vypisuji data pro tabulku `difficulty`
--

INSERT INTO `difficulty` (`id`, `name`) VALUES
                                          (1, 'začátečník'),
                                          (2, 'mírně pokročilý'),
                                          (3, 'středně pokročilý'),
                                          (4, 'pokročilý');

--
-- Vypisuji data pro tabulku `exercise`
--

INSERT INTO `exercise` (`id`, `name`, `icon`) VALUES
                                                (1, 'rozcvička', NULL),
                                                (2, 'trénink', NULL);

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

INSERT INTO `sports_ground` (`id`, `username`, `name`, `published`, `opening_hours_from`, `opening_hours_to`, `web`, `phone`, `vat_number`, `intro_text`, `description`, `address_id`, `cover_photo_id`, `profile_photo_id`) VALUES
(1, 'sportzone', 'Sport Zone', 0, '09:00:00', '15:00:00', 'http://www.sport-zone.cz', '728 674 593', '27596001', 'Lorem ipsum dolor sit amet...', 'Provozujeme kurty na squash a bedminton s plně vybaveným sportovním zázemím a možností zapůjčení vybavení.', 1, NULL, NULL),
(2, 'relaxme', 'RelaxMe', 1, '13:00:00', '17:00:00', 'http://relaxme.cz', '728 124 754', '07918101', 'Lorem ipsum dolor sit amet...', 'Wellness centrum Relaxme v Kolíně nabízí nejrůznější masáže (klasické, těhotenské i thajské od rodilé Thajky), různé druhy jógy, cvičení a masáže.', 2, NULL, NULL),
(3, 'gymcube', 'Gym Cube', 1, '05:00:00', '21:00:00', 'http://gymcube.cz/', '607 618 666', NULL, 'Lorem ipsum dolor sit amet...', 'Nové moderní (nejen) fitness.', 3, NULL, NULL),
(4, 'JBI Sport Fit Studio', 'jbisportfitstudio', 1, '12:00:00', '18:00:00', 'http://www.jbi-fitness.cz', '321 721 319', NULL, 'Lorem ipsum dolor sit amet...', 'Skvělého pocitu z dobré kondice můžete dosáhnout v každém věku. Fitness je životní styl, který napomáhá lidem udržet si zdraví a účinně se chránit před stresem a civilizačními chorobami. Pravidelným cvičením můžete nabrat svalovou hmotu nebo se zbavit přebytečných kil.', 4, NULL, NULL),
(5, 'tvujgym', 'Tvůj Gym', 1, '05:00:00', '23:00:00', 'https://www.tvujgym.cz/', '723 032 597', '06125744', 'Lorem ipsum dolor sit amet...', 'Tvůj Gym (TG) je rájem pro všechny ty, kterým jde při cvičení o maximální kvalitu tréninku bez jakýchkoliv kompromisů, spojenou s velkou mírou soukromí.', 5, NULL, NULL),
(6, 'infinityfitness', 'Infinity fitness', 1, '09:00:00', '20:00:00', 'http://www.infinityfitness.cz', '564123784', NULL, 'Lorem ipsum dolor sit amet...', 'V našem fitku můžete navštívit lekce jako je například fitbox, TRX, kruhový trénink, box, street dance nebo bodystyling.', 6, NULL, NULL);


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

INSERT INTO `event` (`id`, `name`, `datetime_from`, `datetime_to`, `datetime_created`, `description`, `difficulty_id`, `cover_photo_id`, `sports_ground_id`, `coach_id`) VALUES
(1, 'Kruhový trénink', '2022-02-01 19:00:00', '2022-02-01 21:00:00', '2021-11-22 13:00:00', 'Kruhový trénink pro všechny.', 1, NULL, 3, 1),
(2, 'Ranní rozcvička', '2022-02-01 07:00:00', '2022-02-01 07:00:00', '2022-01-07 17:31:14', 'Ranní rozcvička v Sportzone.', 1, NULL, 1, 2),
(3, 'Ranní rozcvička', '2022-02-03 07:00:00', '2022-02-03 07:00:00', '2022-01-07 17:31:14', 'Ranní rozcvička v Sportzone.', 1, NULL, 1, 3),
(4, 'Ranní rozcvička', '2022-02-08 07:00:00', '2022-02-08 07:00:00', '2022-01-07 17:31:14', 'Ranní rozcvička v Sportzone.', 1, NULL, 1, 2),
(5, 'Ranní rozcvička', '2022-02-10 07:00:00', '2022-02-10 07:00:00', '2022-01-07 17:31:14', 'Ranní rozcvička v Sportzone.', 1, NULL, 1, 3),
(6, 'Kruhový trénink', '2022-02-08 19:00:00', '2022-02-08 21:00:00', '2021-11-22 13:00:00', 'Kruhový trénink pro všechny.', 1, NULL, 3, 1),
(7, 'Kruhový trénink', '2022-02-15 19:00:00', '2022-02-15 21:00:00', '2021-11-22 13:00:00', 'Kruhový trénink pro všechny.', 1, NULL, 3, 4),
(8, 'Jóga pro začátečníky', '2022-01-07 17:00:00', '2022-01-07 18:30:00', '2022-01-07 17:36:45', 'Jóga s vašimi oblíbenými trenéry.', 1, NULL, 2, 6),
(9, 'Jóga pro začátečníky', '2022-01-14 17:00:00', '2022-01-14 18:30:00', '2022-01-07 17:36:45', 'Jóga s vašimi oblíbenými trenéry.', 1, NULL, 2, 7),
(10, 'Jóga pro začátečníky', '2022-01-21 17:00:00', '2022-01-21 18:30:00', '2022-01-07 17:36:45', 'Jóga s vašimi oblíbenými trenéry.', 1, NULL, 2, 6),
(11, 'Jóga pro začátečníky', '2022-01-28 17:00:00', '2022-01-28 18:30:00', '2022-01-07 17:36:45', 'Jóga s vašimi oblíbenými trenéry.', 1, NULL, 2, 7),
(12, 'Box pro pokročilé', '2022-01-05 19:00:00', '2022-01-05 20:30:00', '2022-01-07 17:39:03', 'Vždy choďte ve dvojici se svým sparing partnerem.', 3, NULL, 4, 8),
(13, 'Box pro pokročilé', '2022-01-12 19:00:00', '2022-01-12 20:30:00', '2022-01-07 17:39:03', 'Vždy choďte ve dvojici se svým sparing partnerem.', 4, NULL, 4, 8),
(14, 'Box pro pokročilé', '2022-01-19 19:00:00', '2022-01-19 20:30:00', '2022-01-07 17:39:03', 'Vždy choďte ve dvojici se svým sparing partnerem.', 3, NULL, 4, 8),
(15, 'Box pro pokročilé', '2022-01-26 19:00:00', '2022-01-26 20:30:00', '2022-01-07 17:39:03', 'Vždy choďte ve dvojici se svým sparing partnerem.', 4, NULL, 4, 8),
(16, 'Box pro začátečníky', '2022-01-05 19:00:00', '2022-01-05 20:30:00', '2022-01-07 17:39:03', 'Vždy choďte ve dvojici se svým sparing partnerem.', 1, NULL, 4, 9),
(17, 'Box pro začátečníky', '2022-01-12 19:00:00', '2022-01-12 20:30:00', '2022-01-07 17:39:03', 'Vždy choďte ve dvojici se svým sparing partnerem.', 1, NULL, 4, 9),
(18, 'Box pro začátečníky', '2022-01-19 19:00:00', '2022-01-19 20:30:00', '2022-01-07 17:39:03', 'Vždy choďte ve dvojici se svým sparing partnerem.', 1, NULL, 4, 10),
(19, 'Box pro začátečníky', '2022-01-26 19:00:00', '2022-01-26 20:30:00', '2022-01-07 17:39:03', 'Vždy choďte ve dvojici se svým sparing partnerem.', 1, NULL, 4, 10),
(20, 'Posilování pro začátečníky', '2022-01-05 19:00:00', '2022-01-05 20:30:00', '2022-01-07 17:39:03', 'Dostavte se minimálně 15min před začátkem akce.', 1, NULL, 5, 11),
(21, 'Box pro začátečníky', '2022-01-12 19:00:00', '2022-01-12 20:30:00', '2022-01-07 17:39:03', 'Dostavte se minimálně 15min před začátkem akce.', 1, NULL, 5, 11),
(22, 'Box pro začátečníky', '2022-01-19 19:00:00', '2022-01-19 20:30:00', '2022-01-07 17:39:03', 'Dostavte se minimálně 15min před začátkem akce.', 1, NULL, 5, 12),
(23, 'Box pro začátečníky', '2022-01-26 19:00:00', '2022-01-26 20:30:00', '2022-01-07 17:39:03', 'Dostavte se minimálně 15min před začátkem akce.', 1, NULL, 5, 12),
(24, 'Pilates', '2022-02-01 07:00:00', '2022-02-01 07:00:00', '2022-01-07 17:31:14', 'Pro všechny milovníky zdravého životního stylu a pohybu.', 2, NULL, 6, 13),
(25, 'Pilates', '2022-02-03 07:00:00', '2022-02-03 07:00:00', '2022-01-07 17:31:14', 'Pro všechny milovníky zdravého životního stylu a pohybu.', 2, NULL, 6, 14),
(26, 'Pilates', '2022-02-08 07:00:00', '2022-02-08 07:00:00', '2022-01-07 17:31:14', 'Pro všechny milovníky zdravého životního stylu a pohybu.', 2, NULL, 6, 15);


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
-- Vypisuji data pro tabulku `event_exercise`
--

INSERT INTO `event_exercise` (`id`, `event_id`, `exercise_id`) VALUES
                                                                 (1, 1, 1),
                                                                 (2, 1, 2),
                                                                 (3, 2, 1),
                                                                 (4, 3, 1),
                                                                 (5, 4, 1),
                                                                 (6, 5, 1),
                                                                 (7, 6, 2),
                                                                 (8, 7, 2),
                                                                 (9, 8, 1),
                                                                 (10, 9, 1),
                                                                 (11, 10, 1),
                                                                 (12, 11, 1),
                                                                 (13, 12, 2),
                                                                 (14, 13, 2),
                                                                 (15, 14, 2),
                                                                 (16, 15, 2),
                                                                 (17, 16, 2),
                                                                 (18, 17, 2),
                                                                 (19, 18, 2),
                                                                 (20, 19, 2),
                                                                 (21, 20, 1),
                                                                 (22, 20, 2),
                                                                 (23, 21, 2),
                                                                 (24, 22, 2),
                                                                 (25, 23, 2),
                                                                 (26, 24, 1),
                                                                 (27, 25, 1),
                                                                 (28, 26, 1);

--
-- Vypisuji data pro tabulku `event_sport`
--

INSERT INTO `event_sport` (`id`, `event_id`, `sport_id`) VALUES
                                                           (19, 1, 1),
                                                           (20, 1, 11),
                                                           (21, 2, 1),
                                                           (22, 2, 8),
                                                           (23, 8, 2),
                                                           (24, 12, 1),
                                                           (26, 6, 1),
                                                           (27, 6, 11),
                                                           (28, 7, 1),
                                                           (29, 7, 11),
                                                           (30, 3, 1),
                                                           (31, 3, 8),
                                                           (32, 4, 1),
                                                           (33, 4, 8),
                                                           (34, 5, 1),
                                                           (35, 5, 8),
                                                           (37, 9, 2),
                                                           (38, 10, 2),
                                                           (39, 11, 2),
                                                           (40, 13, 1),
                                                           (41, 14, 1),
                                                           (42, 15, 1),
                                                           (43, 16, 1),
                                                           (44, 17, 1),
                                                           (45, 18, 1),
                                                           (46, 19, 1),
                                                           (47, 20, 1),
                                                           (48, 21, 1),
                                                           (49, 22, 1),
                                                           (50, 23, 1),
                                                           (51, 24, 1),
                                                           (52, 25, 1),
                                                           (53, 26, 1);

--
-- Vypisuji data pro tabulku `event_sportsman`
--

INSERT INTO `event_sportsman` (`id`, `event_id`, `sportsman_id`) VALUES
                                                                   (1, 1, 1),
                                                                   (2, 1, 2),
                                                                   (3, 1, 3),
                                                                   (4, 2, 4),
                                                                   (5, 2, 8),
                                                                   (6, 3, 3),
                                                                   (7, 4, 1),
                                                                   (8, 4, 10),
                                                                   (9, 6, 5),
                                                                   (10, 7, 10),
                                                                   (11, 7, 4),
                                                                   (12, 8, 6),
                                                                   (13, 8, 9),
                                                                   (14, 9, 6),
                                                                   (15, 12, 7),
                                                                   (16, 12, 3),
                                                                   (17, 12, 9),
                                                                   (18, 15, 7),
                                                                   (19, 18, 4),
                                                                   (20, 19, 10),
                                                                   (21, 18, 4),
                                                                   (22, 24, 1),
                                                                   (23, 24, 3),
                                                                   (24, 24, 5),
                                                                   (25, 24, 6);



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

COMMIT;

```
