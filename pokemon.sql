-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 14, 2020 at 02:45 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pokemon`
--

-- --------------------------------------------------------

--
-- Table structure for table `playerspokemon`
--

CREATE TABLE `playerspokemon` (
  `id` int(11) DEFAULT NULL,
  `#` int(11) DEFAULT NULL,
  `Name` varchar(25) DEFAULT NULL,
  `Type 1` varchar(8) DEFAULT NULL,
  `Type 2` varchar(8) DEFAULT NULL,
  `Total` int(11) DEFAULT NULL,
  `HP` int(11) DEFAULT NULL,
  `Attack` int(11) DEFAULT NULL,
  `Defense` int(11) DEFAULT NULL,
  `Sp. Atk` int(11) DEFAULT NULL,
  `Sp. Def` int(11) DEFAULT NULL,
  `Speed` int(11) DEFAULT NULL,
  `Generation` int(11) DEFAULT NULL,
  `Legendary` varchar(5) DEFAULT NULL,
  `filename` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `playerspokemon`
--

INSERT INTO `playerspokemon` (`id`, `#`, `Name`, `Type 1`, `Type 2`, `Total`, `HP`, `Attack`, `Defense`, `Sp. Atk`, `Sp. Def`, `Speed`, `Generation`, `Legendary`, `filename`) VALUES
(57, 57, 'Primeape', 'Fighting', '', 455, 65, 105, 60, 60, 70, 95, 1, 'FALSE', ''),
(141, 135, 'Jolteon', 'Electric', '', 525, 65, 65, 60, 110, 95, 130, 1, 'FALSE', ''),
(124, 120, 'Staryu', 'Water', '', 340, 30, 45, 55, 70, 55, 85, 1, 'FALSE', ''),
(47, 47, 'Parasect', 'Bug', 'Grass', 405, 60, 95, 80, 60, 80, 30, 1, 'FALSE', ''),
(113, 110, 'Weezing', 'Poison', '', 490, 65, 90, 120, 85, 70, 60, 1, 'FALSE', ''),
(138, 132, 'Ditto', 'Normal', '', 288, 48, 48, 48, 48, 48, 48, 1, 'FALSE', '');

-- --------------------------------------------------------

--
-- Table structure for table `pokemon_data`
--

CREATE TABLE `pokemon_data` (
  `id` int(3) DEFAULT NULL,
  `#` int(3) DEFAULT NULL,
  `Name` varchar(25) DEFAULT NULL,
  `Type 1` varchar(8) DEFAULT NULL,
  `Type 2` varchar(8) DEFAULT NULL,
  `Total` int(3) DEFAULT NULL,
  `HP` int(3) DEFAULT NULL,
  `Attack` int(3) DEFAULT NULL,
  `Defense` int(3) DEFAULT NULL,
  `Sp. Atk` int(3) DEFAULT NULL,
  `Sp. Def` int(3) DEFAULT NULL,
  `Speed` int(3) DEFAULT NULL,
  `Generation` int(1) DEFAULT NULL,
  `Legendary` varchar(5) DEFAULT NULL,
  `filename` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `pokemon_data`
--

INSERT INTO `pokemon_data` (`id`, `#`, `Name`, `Type 1`, `Type 2`, `Total`, `HP`, `Attack`, `Defense`, `Sp. Atk`, `Sp. Def`, `Speed`, `Generation`, `Legendary`, `filename`) VALUES
(0, 4, 'Charmander', 'Fire', '', 309, 39, 52, 43, 60, 50, 65, 1, 'FALSE', ''),
(1, 5, 'Charmeleon', 'Fire', '', 405, 58, 64, 58, 80, 65, 80, 1, 'FALSE', ''),
(2, 6, 'Charizard', 'Fire', 'Flying', 534, 78, 84, 78, 109, 85, 100, 1, 'FALSE', ''),
(3, 6, 'CharizardMega Charizard X', 'Fire', 'Dragon', 634, 78, 130, 111, 130, 85, 100, 1, 'FALSE', '006Charizard.png'),
(4, 6, 'CharizardMega Charizard Y', 'Fire', 'Flying', 634, 78, 104, 78, 159, 115, 100, 1, 'FALSE', '006Charizard.png'),
(5, 7, 'Squirtle', 'Water', '', 314, 44, 48, 65, 50, 64, 43, 1, 'FALSE', ''),
(6, 8, 'Wartortle', 'Water', '', 405, 59, 63, 80, 65, 80, 58, 1, 'FALSE', ''),
(7, 9, 'Blastoise', 'Water', '', 530, 79, 83, 100, 85, 105, 78, 1, 'FALSE', ''),
(8, 9, 'BlastoiseMega Blastoise', 'Water', '', 630, 79, 103, 120, 135, 115, 78, 1, 'FALSE', '009Blastoise.png'),
(9, 10, 'Caterpie', 'Bug', '', 195, 45, 30, 35, 20, 20, 45, 1, 'FALSE', ''),
(10, 11, 'Metapod', 'Bug', '', 205, 50, 20, 55, 25, 25, 30, 1, 'FALSE', ''),
(11, 12, 'Butterfree', 'Bug', 'Flying', 395, 60, 45, 50, 90, 80, 70, 1, 'FALSE', ''),
(12, 13, 'Weedle', 'Bug', 'Poison', 195, 40, 35, 30, 20, 20, 50, 1, 'FALSE', ''),
(13, 14, 'Kakuna', 'Bug', 'Poison', 205, 45, 25, 50, 25, 25, 35, 1, 'FALSE', ''),
(14, 15, 'Beedrill', 'Bug', 'Poison', 395, 65, 90, 40, 45, 80, 75, 1, 'FALSE', ''),
(15, 15, 'BeedrillMega Beedrill', 'Bug', 'Poison', 495, 65, 150, 40, 15, 80, 145, 1, 'FALSE', '015Beedrill.png'),
(16, 16, 'Pidgey', 'Normal', 'Flying', 251, 40, 45, 40, 35, 35, 56, 1, 'FALSE', ''),
(17, 17, 'Pidgeotto', 'Normal', 'Flying', 349, 63, 60, 55, 50, 50, 71, 1, 'FALSE', ''),
(18, 18, 'Pidgeot', 'Normal', 'Flying', 479, 83, 80, 75, 70, 70, 101, 1, 'FALSE', ''),
(19, 18, 'PidgeotMega Pidgeot', 'Normal', 'Flying', 579, 83, 80, 80, 135, 80, 121, 1, 'FALSE', '018Pidgeot.png'),
(20, 19, 'Rattata', 'Normal', '', 253, 30, 56, 35, 25, 35, 72, 1, 'FALSE', ''),
(21, 21, 'Spearow', 'Normal', 'Flying', 262, 40, 60, 30, 31, 31, 70, 1, 'FALSE', ''),
(22, 22, 'Fearow', 'Normal', 'Flying', 442, 65, 90, 65, 61, 61, 100, 1, 'FALSE', ''),
(23, 23, 'Ekans', 'Poison', '', 288, 35, 60, 44, 40, 54, 55, 1, 'FALSE', ''),
(24, 24, 'Arbok', 'Poison', '', 438, 60, 85, 69, 65, 79, 80, 1, 'FALSE', ''),
(25, 25, 'Pikachu', 'Electric', '', 320, 35, 55, 40, 50, 50, 90, 1, 'FALSE', ''),
(26, 26, 'Raichu', 'Electric', '', 485, 60, 90, 55, 90, 80, 110, 1, 'FALSE', ''),
(27, 27, 'Sandshrew', 'Ground', '', 300, 50, 75, 85, 20, 30, 40, 1, 'FALSE', ''),
(28, 28, 'Sandslash', 'Ground', '', 450, 75, 100, 110, 45, 55, 65, 1, 'FALSE', ''),
(29, 29, 'Nidoran', 'Poison', '', 275, 55, 47, 52, 40, 40, 41, 1, 'FALSE', '029Nidoran.png'),
(30, 30, 'Nidorina', 'Poison', '', 365, 70, 62, 67, 55, 55, 56, 1, 'FALSE', ''),
(31, 31, 'Nidoqueen', 'Poison', 'Ground', 505, 90, 92, 87, 75, 85, 76, 1, 'FALSE', ''),
(32, 32, 'Nidoran', 'Poison', '', 273, 46, 57, 40, 40, 40, 50, 1, 'FALSE', '032Nidoran.png'),
(33, 33, 'Nidorino', 'Poison', '', 365, 61, 72, 57, 55, 55, 65, 1, 'FALSE', ''),
(34, 34, 'Nidoking', 'Poison', 'Ground', 505, 81, 102, 77, 85, 75, 85, 1, 'FALSE', ''),
(35, 35, 'Clefairy', 'Fairy', '', 323, 70, 45, 48, 60, 65, 35, 1, 'FALSE', ''),
(36, 36, 'Clefable', 'Fairy', '', 483, 95, 70, 73, 95, 90, 60, 1, 'FALSE', ''),
(37, 37, 'Vulpix', 'Fire', '', 299, 38, 41, 40, 50, 65, 65, 1, 'FALSE', ''),
(38, 38, 'Ninetales', 'Fire', '', 505, 73, 76, 75, 81, 100, 100, 1, 'FALSE', ''),
(39, 39, 'Jigglypuff', 'Normal', 'Fairy', 270, 115, 45, 20, 45, 25, 20, 1, 'FALSE', ''),
(40, 40, 'Wigglytuff', 'Normal', 'Fairy', 435, 140, 70, 45, 85, 50, 45, 1, 'FALSE', ''),
(41, 41, 'Zubat', 'Poison', 'Flying', 245, 40, 45, 35, 30, 40, 55, 1, 'FALSE', ''),
(42, 42, 'Golbat', 'Poison', 'Flying', 455, 75, 80, 70, 65, 75, 90, 1, 'FALSE', ''),
(43, 43, 'Oddish', 'Grass', 'Poison', 320, 45, 50, 55, 75, 65, 30, 1, 'FALSE', ''),
(44, 44, 'Gloom', 'Grass', 'Poison', 395, 60, 65, 70, 85, 75, 40, 1, 'FALSE', ''),
(45, 45, 'Vileplume', 'Grass', 'Poison', 490, 75, 80, 85, 110, 90, 50, 1, 'FALSE', ''),
(46, 46, 'Paras', 'Bug', 'Grass', 285, 35, 70, 55, 45, 55, 25, 1, 'FALSE', ''),
(47, 47, 'Parasect', 'Bug', 'Grass', 405, 60, 95, 80, 60, 80, 30, 1, 'FALSE', ''),
(48, 48, 'Venonat', 'Bug', 'Poison', 305, 60, 55, 50, 40, 55, 45, 1, 'FALSE', ''),
(49, 49, 'Venomoth', 'Bug', 'Poison', 450, 70, 65, 60, 90, 75, 90, 1, 'FALSE', ''),
(50, 50, 'Diglett', 'Ground', '', 265, 10, 55, 25, 35, 45, 95, 1, 'FALSE', ''),
(51, 51, 'Dugtrio', 'Ground', '', 405, 35, 80, 50, 50, 70, 120, 1, 'FALSE', ''),
(52, 52, 'Meowth', 'Normal', '', 290, 40, 45, 35, 40, 40, 90, 1, 'FALSE', ''),
(53, 53, 'Persian', 'Normal', '', 440, 65, 70, 60, 65, 65, 115, 1, 'FALSE', ''),
(54, 54, 'Psyduck', 'Water', '', 320, 50, 52, 48, 65, 50, 55, 1, 'FALSE', ''),
(55, 55, 'Golduck', 'Water', '', 500, 80, 82, 78, 95, 80, 85, 1, 'FALSE', ''),
(56, 56, 'Mankey', 'Fighting', '', 305, 40, 80, 35, 35, 45, 70, 1, 'FALSE', ''),
(57, 57, 'Primeape', 'Fighting', '', 455, 65, 105, 60, 60, 70, 95, 1, 'FALSE', ''),
(58, 58, 'Growlithe', 'Fire', '', 350, 55, 70, 45, 70, 50, 60, 1, 'FALSE', ''),
(59, 59, 'Arcanine', 'Fire', '', 555, 90, 110, 80, 100, 80, 95, 1, 'FALSE', ''),
(60, 60, 'Poliwag', 'Water', '', 300, 40, 50, 40, 40, 40, 90, 1, 'FALSE', ''),
(61, 61, 'Poliwhirl', 'Water', '', 385, 65, 65, 65, 50, 50, 90, 1, 'FALSE', ''),
(62, 62, 'Poliwrath', 'Water', 'Fighting', 510, 90, 95, 95, 70, 90, 70, 1, 'FALSE', ''),
(63, 63, 'Abra', 'Psychic', '', 310, 25, 20, 15, 105, 55, 90, 1, 'FALSE', ''),
(64, 64, 'Kadabra', 'Psychic', '', 400, 40, 35, 30, 120, 70, 105, 1, 'FALSE', ''),
(65, 65, 'Alakazam', 'Psychic', '', 500, 55, 50, 45, 135, 95, 120, 1, 'FALSE', ''),
(66, 65, 'AlakazamMega Alakazam', 'Psychic', '', 590, 55, 50, 65, 175, 95, 150, 1, 'FALSE', '065Alakazam.png'),
(67, 66, 'Machop', 'Fighting', '', 305, 70, 80, 50, 35, 35, 35, 1, 'FALSE', ''),
(68, 67, 'Machoke', 'Fighting', '', 405, 80, 100, 70, 50, 60, 45, 1, 'FALSE', ''),
(69, 68, 'Machamp', 'Fighting', '', 505, 90, 130, 80, 65, 85, 55, 1, 'FALSE', ''),
(70, 69, 'Bellsprout', 'Grass', 'Poison', 300, 50, 75, 35, 70, 30, 40, 1, 'FALSE', ''),
(71, 70, 'Weepinbell', 'Grass', 'Poison', 390, 65, 90, 50, 85, 45, 55, 1, 'FALSE', ''),
(72, 71, 'Victreebel', 'Grass', 'Poison', 490, 80, 105, 65, 100, 70, 70, 1, 'FALSE', ''),
(73, 72, 'Tentacool', 'Water', 'Poison', 335, 40, 40, 35, 50, 100, 70, 1, 'FALSE', ''),
(74, 73, 'Tentacruel', 'Water', 'Poison', 515, 80, 70, 65, 80, 120, 100, 1, 'FALSE', ''),
(75, 74, 'Geodude', 'Rock', 'Ground', 300, 40, 80, 100, 30, 30, 20, 1, 'FALSE', ''),
(76, 75, 'Graveler', 'Rock', 'Ground', 390, 55, 95, 115, 45, 45, 35, 1, 'FALSE', ''),
(77, 76, 'Golem', 'Rock', 'Ground', 495, 80, 120, 130, 55, 65, 45, 1, 'FALSE', ''),
(78, 77, 'Ponyta', 'Fire', '', 410, 50, 85, 55, 65, 65, 90, 1, 'FALSE', ''),
(79, 78, 'Rapidash', 'Fire', '', 500, 65, 100, 70, 80, 80, 105, 1, 'FALSE', ''),
(80, 79, 'Slowpoke', 'Water', 'Psychic', 315, 90, 65, 65, 40, 40, 15, 1, 'FALSE', ''),
(81, 80, 'Slowbro', 'Water', 'Psychic', 490, 95, 75, 110, 100, 80, 30, 1, 'FALSE', ''),
(82, 80, 'SlowbroMega Slowbro', 'Water', 'Psychic', 590, 95, 75, 180, 130, 80, 30, 1, 'FALSE', '080Slowbro.png'),
(83, 81, 'Magnemite', 'Electric', 'Steel', 325, 25, 35, 70, 95, 55, 45, 1, 'FALSE', ''),
(84, 82, 'Magneton', 'Electric', 'Steel', 465, 50, 60, 95, 120, 70, 70, 1, 'FALSE', ''),
(85, 83, 'Farfetch\'d', 'Normal', 'Flying', 352, 52, 65, 55, 58, 62, 60, 1, 'FALSE', ''),
(86, 84, 'Doduo', 'Normal', 'Flying', 310, 35, 85, 45, 35, 35, 75, 1, 'FALSE', ''),
(87, 85, 'Dodrio', 'Normal', 'Flying', 460, 60, 110, 70, 60, 60, 100, 1, 'FALSE', ''),
(88, 86, 'Seel', 'Water', '', 325, 65, 45, 55, 45, 70, 45, 1, 'FALSE', ''),
(89, 87, 'Dewgong', 'Water', 'Ice', 475, 90, 70, 80, 70, 95, 70, 1, 'FALSE', ''),
(90, 88, 'Grimer', 'Poison', '', 325, 80, 80, 50, 40, 50, 25, 1, 'FALSE', ''),
(91, 89, 'Muk', 'Poison', '', 500, 105, 105, 75, 65, 100, 50, 1, 'FALSE', ''),
(92, 90, 'Shellder', 'Water', '', 305, 30, 65, 100, 45, 25, 40, 1, 'FALSE', ''),
(93, 91, 'Cloyster', 'Water', 'Ice', 525, 50, 95, 180, 85, 45, 70, 1, 'FALSE', ''),
(94, 92, 'Gastly', 'Ghost', 'Poison', 310, 30, 35, 30, 100, 35, 80, 1, 'FALSE', ''),
(95, 93, 'Haunter', 'Ghost', 'Poison', 405, 45, 50, 45, 115, 55, 95, 1, 'FALSE', ''),
(96, 94, 'Gengar', 'Ghost', 'Poison', 500, 60, 65, 60, 130, 75, 110, 1, 'FALSE', ''),
(97, 94, 'GengarMega Gengar', 'Ghost', 'Poison', 600, 60, 65, 80, 170, 95, 130, 1, 'FALSE', '094Gengar.png'),
(98, 95, 'Onix', 'Rock', 'Ground', 385, 35, 45, 160, 30, 45, 70, 1, 'FALSE', ''),
(99, 96, 'Drowzee', 'Psychic', '', 328, 60, 48, 45, 43, 90, 42, 1, 'FALSE', ''),
(100, 97, 'Hypno', 'Psychic', '', 483, 85, 73, 70, 73, 115, 67, 1, 'FALSE', ''),
(101, 98, 'Krabby', 'Water', '', 325, 30, 105, 90, 25, 25, 50, 1, 'FALSE', ''),
(102, 99, 'Kingler', 'Water', '', 475, 55, 130, 115, 50, 50, 75, 1, 'FALSE', ''),
(103, 100, 'Voltorb', 'Electric', '', 330, 40, 30, 50, 55, 55, 100, 1, 'FALSE', ''),
(104, 101, 'Electrode', 'Electric', '', 480, 60, 50, 70, 80, 80, 140, 1, 'FALSE', ''),
(105, 102, 'Exeggcute', 'Grass', 'Psychic', 325, 60, 40, 80, 60, 45, 40, 1, 'FALSE', ''),
(106, 103, 'Exeggutor', 'Grass', 'Psychic', 520, 95, 95, 85, 125, 65, 55, 1, 'FALSE', ''),
(107, 104, 'Cubone', 'Ground', '', 320, 50, 50, 95, 40, 50, 35, 1, 'FALSE', ''),
(108, 105, 'Marowak', 'Ground', '', 425, 60, 80, 110, 50, 80, 45, 1, 'FALSE', ''),
(109, 106, 'Hitmonlee', 'Fighting', '', 455, 50, 120, 53, 35, 110, 87, 1, 'FALSE', ''),
(110, 107, 'Hitmonchan', 'Fighting', '', 455, 50, 105, 79, 35, 110, 76, 1, 'FALSE', ''),
(111, 108, 'Lickitung', 'Normal', '', 385, 90, 55, 75, 60, 75, 30, 1, 'FALSE', ''),
(112, 109, 'Koffing', 'Poison', '', 340, 40, 65, 95, 60, 45, 35, 1, 'FALSE', ''),
(113, 110, 'Weezing', 'Poison', '', 490, 65, 90, 120, 85, 70, 60, 1, 'FALSE', ''),
(114, 111, 'Rhyhorn', 'Ground', 'Rock', 345, 80, 85, 95, 30, 30, 25, 1, 'FALSE', ''),
(115, 112, 'Rhydon', 'Ground', 'Rock', 485, 105, 130, 120, 45, 45, 40, 1, 'FALSE', ''),
(116, 113, 'Chansey', 'Normal', '', 450, 250, 5, 5, 35, 105, 50, 1, 'FALSE', ''),
(117, 114, 'Tangela', 'Grass', '', 435, 65, 55, 115, 100, 40, 60, 1, 'FALSE', ''),
(118, 115, 'Kangaskhan', 'Normal', '', 490, 105, 95, 80, 40, 80, 90, 1, 'FALSE', ''),
(119, 115, 'KangaskhanMega Kangaskhan', 'Normal', '', 590, 105, 125, 100, 60, 100, 100, 1, 'FALSE', '115Kangaskhan.png'),
(120, 116, 'Horsea', 'Water', '', 295, 30, 40, 70, 70, 25, 60, 1, 'FALSE', ''),
(121, 117, 'Seadra', 'Water', '', 440, 55, 65, 95, 95, 45, 85, 1, 'FALSE', ''),
(122, 118, 'Goldeen', 'Water', '', 320, 45, 67, 60, 35, 50, 63, 1, 'FALSE', ''),
(123, 119, 'Seaking', 'Water', '', 450, 80, 92, 65, 65, 80, 68, 1, 'FALSE', ''),
(124, 120, 'Staryu', 'Water', '', 340, 30, 45, 55, 70, 55, 85, 1, 'FALSE', ''),
(125, 121, 'Starmie', 'Water', 'Psychic', 520, 60, 75, 85, 100, 85, 115, 1, 'FALSE', ''),
(126, 122, 'Mr. Mime', 'Psychic', 'Fairy', 460, 40, 45, 65, 100, 120, 90, 1, 'FALSE', '122Mr._Mime.png'),
(127, 123, 'Scyther', 'Bug', 'Flying', 500, 70, 110, 80, 55, 80, 105, 1, 'FALSE', ''),
(128, 124, 'Jynx', 'Ice', 'Psychic', 455, 65, 50, 35, 115, 95, 95, 1, 'FALSE', ''),
(129, 125, 'Electabuzz', 'Electric', '', 490, 65, 83, 57, 95, 85, 105, 1, 'FALSE', ''),
(130, 126, 'Magmar', 'Fire', '', 495, 65, 95, 57, 100, 85, 93, 1, 'FALSE', ''),
(131, 127, 'Pinsir', 'Bug', '', 500, 65, 125, 100, 55, 70, 85, 1, 'FALSE', ''),
(132, 127, 'PinsirMega Pinsir', 'Bug', 'Flying', 600, 65, 155, 120, 65, 90, 105, 1, 'FALSE', '127Pinsir.png'),
(133, 128, 'Tauros', 'Normal', '', 490, 75, 100, 95, 40, 70, 110, 1, 'FALSE', ''),
(134, 129, 'Magikarp', 'Water', '', 200, 20, 10, 55, 15, 20, 80, 1, 'FALSE', ''),
(135, 130, 'Gyarados', 'Water', 'Flying', 540, 95, 125, 79, 60, 100, 81, 1, 'FALSE', ''),
(136, 130, 'GyaradosMega Gyarados', 'Water', 'Dark', 640, 95, 155, 109, 70, 130, 81, 1, 'FALSE', '130Gyarados.png'),
(137, 131, 'Lapras', 'Water', 'Ice', 535, 130, 85, 80, 85, 95, 60, 1, 'FALSE', ''),
(138, 132, 'Ditto', 'Normal', '', 288, 48, 48, 48, 48, 48, 48, 1, 'FALSE', ''),
(139, 133, 'Eevee', 'Normal', '', 325, 55, 55, 50, 45, 65, 55, 1, 'FALSE', ''),
(140, 134, 'Vaporeon', 'Water', '', 525, 130, 65, 60, 110, 95, 65, 1, 'FALSE', ''),
(141, 135, 'Jolteon', 'Electric', '', 525, 65, 65, 60, 110, 95, 130, 1, 'FALSE', ''),
(142, 136, 'Flareon', 'Fire', '', 525, 65, 130, 60, 95, 110, 65, 1, 'FALSE', ''),
(143, 137, 'Porygon', 'Normal', '', 395, 65, 60, 70, 85, 75, 40, 1, 'FALSE', ''),
(144, 138, 'Omanyte', 'Rock', 'Water', 355, 35, 40, 100, 90, 55, 35, 1, 'FALSE', ''),
(145, 139, 'Omastar', 'Rock', 'Water', 495, 70, 60, 125, 115, 70, 55, 1, 'FALSE', ''),
(146, 140, 'Kabuto', 'Rock', 'Water', 355, 30, 80, 90, 55, 45, 55, 1, 'FALSE', ''),
(147, 141, 'Kabutops', 'Rock', 'Water', 495, 60, 115, 105, 65, 70, 80, 1, 'FALSE', ''),
(148, 142, 'Aerodactyl', 'Rock', 'Flying', 515, 80, 105, 65, 60, 75, 130, 1, 'FALSE', ''),
(149, 142, 'AerodactylMega Aerodactyl', 'Rock', 'Flying', 615, 80, 135, 85, 70, 95, 150, 1, 'FALSE', '142Aerodactyl.png'),
(150, 143, 'Snorlax', 'Normal', '', 540, 160, 110, 65, 65, 110, 30, 1, 'FALSE', ''),
(151, 144, 'Articuno', 'Ice', 'Flying', 580, 90, 85, 100, 95, 125, 85, 1, 'TRUE', ''),
(152, 145, 'Zapdos', 'Electric', 'Flying', 580, 90, 90, 85, 125, 90, 100, 1, 'TRUE', ''),
(153, 146, 'Moltres', 'Fire', 'Flying', 580, 90, 100, 90, 125, 85, 90, 1, 'TRUE', ''),
(154, 147, 'Dratini', 'Dragon', '', 300, 41, 64, 45, 50, 50, 50, 1, 'FALSE', ''),
(155, 148, 'Dragonair', 'Dragon', '', 420, 61, 84, 65, 70, 70, 70, 1, 'FALSE', ''),
(156, 149, 'Dragonite', 'Dragon', 'Flying', 600, 91, 134, 95, 100, 100, 80, 1, 'FALSE', ''),
(157, 150, 'Mewtwo', 'Psychic', '', 680, 106, 110, 90, 154, 90, 130, 1, 'TRUE', ''),
(158, 150, 'MewtwoMega Mewtwo X', 'Psychic', 'Fighting', 780, 106, 190, 100, 154, 100, 130, 1, 'TRUE', '150Mewtwo-Mega_X.png'),
(159, 150, 'MewtwoMega Mewtwo Y', 'Psychic', '', 780, 106, 150, 70, 194, 120, 140, 1, 'TRUE', '150Mewtwo-Mega_Y.png'),
(160, 151, 'Mew', 'Psychic', '', 600, 100, 100, 100, 100, 100, 100, 1, 'FALSE', '151Mew.png');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;