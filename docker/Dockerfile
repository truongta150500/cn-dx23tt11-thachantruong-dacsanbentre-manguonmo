FROM wordpress:6.8-php8.1-apache

RUN apt-get update && apt-get install -y libpng-dev libjpeg-dev libfreetype6-dev libzip-dev && docker-php-ext-install gd zip mysqli pdo pdo_mysql && a2enmod rewrite
