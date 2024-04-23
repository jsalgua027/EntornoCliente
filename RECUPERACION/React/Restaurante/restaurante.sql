-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-04-2024 a las 19:13:02
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `restaurante`
--
CREATE DATABASE IF NOT EXISTS `restaurante` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `restaurante`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nacho_categorias`
--

CREATE TABLE `nacho_categorias` (
  `id_categoria` int(11) NOT NULL,
  `categoria` varchar(50) DEFAULT NULL,
  `foto` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `nacho_categorias` (`id_categoria`, `categoria`, `foto`) VALUES
(1, 'Hamburguesas', NULL),
(2, 'Bebidas', NULL),
(3, 'Complementos', NULL),
(4, 'Ensaladas', NULL),
(5, 'Postres', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `nacho_pedidos` (
  `id_pedido` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` date DEFAULT NULL,
  `hora` time DEFAULT NULL,
  PRIMARY KEY (`id_pedido`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedido_producto`
--

CREATE TABLE `nacho_pedido_producto` (
  `id_pedido` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `nacho_productos` (
  `id_producto` int(11) NOT NULL,
  `producto` varchar(100) DEFAULT NULL,
  `precio` decimal(10,2) DEFAULT NULL,
  `portadaFoto` varchar(50) DEFAULT NULL,
  `id_categoria` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `nacho_productos`
--

INSERT INTO `nacho_productos` (`id_producto`, `producto`, `precio`, `portadaFoto`, `id_categoria`) VALUES
(1, 'BigMac', 5.00, 'BigMac.png', 1),
(2, 'CBO', 5.00, 'CBO.png', 1),
(3, 'Cheeseburger Doble', 5.00, 'Cheeseburger_Doble.png', 1),
(4, 'Cheeseburger Simple', 3.00, 'Cheeseburger_Simple.png', 1),
(5, 'Cheeseburger Triple', 5.00, 'Cheeseburger_Triple.png', 1),
(6, 'chicken & cheese', 5.00, 'chicken_&_cheese.png', 1),
(7, 'Chicken Burger BBQ', 5.00, 'Chicken_Burger_BBQ.png', 1),
(8, 'Cuarto de Libra', 3.00, 'Cuarto_de_Libra.png', 1),
(9, 'Cuarto de Libra_Doble', 5.00, 'Cuarto_de_Libra_Doble.png', 1),
(10, 'Doble Bacon', 5.00, 'Doble_Bacon.png', 1),
(11, 'McCrispy Legend', 5.00, 'McCrispy_Legend.png', 1),
(12, 'McCrispy Original', 5.00, 'McCrispy_Original.png', 1),
(13, 'McExtreme Bacon', 5.00, 'McExtreme_Bacon.png', 1),
(14, 'McExtreme Intense Cheddar', 5.00, 'McExtreme_Intense_Cheddar.png', 1),
(15, 'McExtreme Intense Cheddar Huevo', 5.00, 'McExtreme_Intense_Cheddar_Huevo.png', 1),
(16, 'McExtreme Intense Cheddar Huevo Doble', 5.00, 'McExtreme_Intense_Cheddar_Huevo_Doble.png', 1),
(17, 'McPollo', 3.00, 'McPollo.png', 1),
(18, 'McWrap Chiken & Bacon', 5.00, 'McWrap_Chiken_&_Bacon.png', 1),
(19, 'Agua 50cl', 2.00, 'Agua_50cl.png', 2),
(20, 'Aquarius Zero', 2.00, 'Aquarius_Zero.png', 2),
(21, 'Cerveza 5estrellas', 1.00, 'Cerveza_5estrellas.png', 2),
(22, 'Cervezas 00 Tostada Lata', 1.00, 'Cervezas_00_Tostada_Lata.png', 2),
(23, 'Cerveza Sin Gluten', 1.00, 'Cerveza-Sin_Gluten.png', 2),
(24, 'CocaCola', 2.00, 'CocaCola.png', 2),
(25, 'CocaCola Zero', 2.00, 'CocaCola_Zero.png', 2),
(26, 'CocaCola Zero Zero', 2.00, 'CocaCola_Zero_Zero.png', 2),
(27, 'Fanta Naranja Zero', 2.00, 'Fanta_Naranja_Zero.png', 2),
(28, 'Lipton', 2.00, 'Lipton.png', 2),
(29, 'Sprite Zero', 2.00, 'Sprite_Zero.png', 2),
(30, 'Zumo Tropicana Naranja', 2.00, 'Zumo_Tropicana_Naranja.png', 2),
(31, 'Alitas Pollo', 3.00, 'Alitas_Pollo.png', 3),
(32, 'Chiken McBites', 3.00, 'Chiken_McBites.png', 3),
(33, 'McNuggetspollo', 4.00, 'McNuggetspollo.png', 3),
(34, 'McShaker Fries Deluxe Sour Cream grandes', 4.00, 'McShaker_Fries_Deluxe_Sour_Cream-grandes.png', 3),
(35, 'McShaker Fries Sour Cream grandes+(1)', 4.50, 'McShaker_Fries_Sour_Cream-grandes+(1).png', 3),
(36, 'Patatas Fritas pequeñas Deluxe', 3.00, 'Patatas_Fritas_pequeñas_Deluxe.png', 3),
(37, 'Patatas Grandes', 4.00, 'Patatas-Grandes.png', 3),
(38, 'Top Fries Bacon & Cheese', 5.00, 'Top_Fries_Bacon_&_Cheese.png', 3),
(39, 'Top Fries Deluxe+(1)', 5.50, 'Top-Fries-Deluxe+(1).png', 3),
(40, 'Ensaladas Cesarsinpollo', 6.00, 'Ensaladas_Sep23_Cesarsinpollo.png', 4),
(41, 'Ensaladas Chickencesar', 6.00, 'Ensaladas_Sep23_Chickencesar.png', 4),
(42, 'Ensaladas ChickenHoneyMustard', 6.00, 'Ensaladas_Sep23_ChickenHoneyMustard.png', 4),
(43, 'Ensaladas Delahuerta', 6.00, 'Ensaladas_Sep23_Delahuerta.png', 4),
(44, 'Ensaladas HoneyMustard', 6.00, 'Ensaladas_Sep23_HoneyMustard.png', 4),
(45, 'Apple Pie', 1.00, 'Apple-Pie.png', 5),
(46, 'Cono Helado', 1.00, 'Cono_Helado.png', 5),
(47, 'McFlurry Cristal KitKat Chocolate', 2.00, 'McFlurry_Cristal_Enero24_KitKat_Chocolate.png', 5),
(48, 'McFlurry Cristal Oreo Chocolate Blanco', 2.00, 'McFlurry_Cristal_Oreo_Chocolate_Blanco.png', 5),
(49, 'McFlurry Lotus', 2.00, 'McFlurry_Lotus.png', 5),
(50, 'McFlurry Milkybar Chocolate Blanco', 2.00, 'McFlurry_Milkybar_Chocolate_Blanco.png', 5),
(51, 'Sundae caramelo', 1.50, 'Sundae_caramelo.png', 5),
(52, 'Sundae Choco', 1.50, 'Sundae_Choco.png', 5),
(53, 'Sundae Blanco', 1.50, 'Sundae-Blanco.jpg', 5);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `nacho_categorias`
--
ALTER TABLE `nacho_categorias`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Indices de la tabla `pedidos`
--

--
-- Indices de la tabla `pedido_producto`
--
ALTER TABLE `nacho_pedido_producto`
  ADD PRIMARY KEY (`id_pedido`,`id_producto`),
  ADD KEY `id_producto` (`id_producto`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `nacho_productos`
  ADD PRIMARY KEY (`id_producto`),
  ADD KEY `id_categoria` (`id_categoria`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `pedido_producto`
--
ALTER TABLE `nacho_pedido_producto`
  ADD CONSTRAINT `nacho_pedido_producto_ibfk_1` FOREIGN KEY (`id_pedido`) REFERENCES `nacho_pedidos` (`id_pedido`),
  ADD CONSTRAINT `nacho_pedido_producto_ibfk_2` FOREIGN KEY (`id_producto`) REFERENCES `nacho_productos` (`id_producto`);

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `nacho_productos`
  ADD CONSTRAINT `nacho_productos_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `nacho_categorias` (`id_categoria`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;