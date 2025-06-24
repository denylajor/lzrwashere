/*M!999999\- enable the sandbox mode */ 
-- MariaDB dump 10.19-11.7.2-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: fullstack
-- ------------------------------------------------------
-- Server version	10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*M!100616 SET @OLD_NOTE_VERBOSITY=@@NOTE_VERBOSITY, NOTE_VERBOSITY=0 */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `idUser` int(11) NOT NULL AUTO_INCREMENT,
  `idUker` int(11) NOT NULL DEFAULT 0,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `oldPassword` varchar(255) DEFAULT NULL,
  `isActive` int(11) NOT NULL DEFAULT 0,
  `rememberToken` varchar(255) DEFAULT NULL,
  `createdBy` varchar(255) DEFAULT NULL,
  `updatedBy` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`idUser`) USING BTREE,
  UNIQUE KEY `username` (`username`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES
(1,0,'john','$2b$15$C5Pyq8CFx2JRI.A8OB/SiO2sJ1UU/YJXHpWc8dB2tynQNtMbbXYy.',NULL,1,NULL,NULL,NULL,'2025-06-20 03:52:51','2025-06-20 03:52:51'),
(6,0,'olobersykes','$2b$15$TP9wnUgsPMN29YQ3B6VSLegub90R/MSvCRTnYdYj6WxFEs4ZqJ79.',NULL,1,NULL,NULL,NULL,'2025-06-20 03:56:31','2025-06-20 03:56:31'),
(8,0,'saul','$2b$15$bYzeZaGws5gQM61VVPQ.d.FNFAScUonjY2EnXjSnl/h4FfsgazFa2',NULL,1,NULL,NULL,NULL,'2025-06-20 04:06:05','2025-06-20 04:06:05'),
(9,0,'rony','$2b$15$2frcUcmyF08R16LFItyap.V5bkY6pKhvNL7UyEIz9cbNdX/jAmu.C',NULL,1,NULL,NULL,NULL,'2025-06-20 04:06:11','2025-06-20 04:06:11'),
(10,0,'rori','$2b$15$JB8PmOLG9gMZpfm6TcRtAOQItl58SX/mbNGJ4hhyqRwONfu8h7Pcy',NULL,1,NULL,NULL,NULL,'2025-06-20 04:06:21','2025-06-20 04:06:21'),
(11,0,'agus','$2b$15$DghPG7Nvy4Fy7Jw15/ks6OZnLsLOEeUq/6gzGUrcvdCZut2z2XODK',NULL,1,NULL,NULL,NULL,'2025-06-20 04:06:26','2025-06-20 04:06:26'),
(17,0,'abenk','$2b$15$L01aSxALLjpXXpnDNR70YuLgSWx3btw4wmxBT.GAUdxokmHv8HrPS',NULL,1,NULL,NULL,NULL,'2025-06-23 02:48:49','2025-06-23 02:48:49'),
(19,0,'abenkx','$2b$15$PHostmXMD11mkmh9GAxKbewxLgZIoN1xkYf20nK40GMgFgYWBLsE6',NULL,1,NULL,NULL,NULL,'2025-06-23 03:35:51','2025-06-23 03:35:51'),
(24,0,'pace','$2b$15$wnH8.Ab2q5M7EUUn0piyIeplDUxglZ0opZz8DixR6wiIQ/RRilh0K',NULL,1,NULL,NULL,NULL,'2025-06-24 13:04:52','2025-06-24 13:04:52'),
(25,0,'qwdwq','$2b$15$lmtc8owYTvVF/PbOJsz/leCjKGw8ro6Kqme5pA1D82oQXQki2qKiK',NULL,1,NULL,NULL,NULL,'2025-06-24 13:05:24','2025-06-24 13:05:24'),
(27,0,'qqq','$2b$15$RnEoZNIztZCXQaoS4cQNgOLlYGJwFtfeL9j1CQe0c/Kgb7SPhhs4C',NULL,1,NULL,NULL,NULL,'2025-06-24 14:17:49','2025-06-24 14:17:49');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_profile`
--

DROP TABLE IF EXISTS `user_profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_profile` (
  `idUserProfile` int(11) NOT NULL AUTO_INCREMENT,
  `idUser` int(11) NOT NULL DEFAULT 0,
  `namaProfile` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `alamat` varchar(255) DEFAULT NULL,
  `createdBy` varchar(255) DEFAULT NULL,
  `updatedBy` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`idUserProfile`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_profile`
--

LOCK TABLES `user_profile` WRITE;
/*!40000 ALTER TABLE `user_profile` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_profile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'fullstack'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*M!100616 SET NOTE_VERBOSITY=@OLD_NOTE_VERBOSITY */;

-- Dump completed on 2025-06-24 21:37:46
