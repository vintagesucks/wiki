# PHP (WSL 2)

PHP development environment with WSL 2, Docker, [`valet-linux`](https://github.com/cpriego/valet-linux) and [`takeout`](https://github.com/tighten/takeout).

## Prerequisites
Install the following:
* [Windows Subsystem for Linux](https://www.microsoft.com/store/productid/9P9TQF7MRM4R)
* [Ubuntu 22.04 for WSL](https://www.microsoft.com/store/productid/9PN20MSR04DW)
* [Docker with WSL 2](https://docs.docker.com/docker-for-windows/wsl/)

## Ubuntu

Launch Ubuntu

```ps1
ubuntu2204
```

Disable Windows PATH

```bash
sudo bash -c "cat >> /etc/wsl.conf" << EOL
[interop]
appendWindowsPath = false
EOL
```

Configure Browser

```bash
echo "export BROWSER='/mnt/c/Windows/explorer.exe'" >> ~/.bashrc
```

Restart Ubuntu

```bash
exit
```

```ps1
wsl --setdefault Ubuntu-22.04
```

```ps1
wsl -t Ubuntu-22.04
```

```ps1
ubuntu2204
```

## PHP

::: info
This guide uses PHP 8.1, please adapt the following to suit your needs.
:::

```bash
LC_ALL=en_US.UTF-8 sudo add-apt-repository -y ppa:ondrej/php
```

```bash
sudo apt update && sudo apt install -y \
  php8.1-bcmath \
  php8.1-curl \
  php8.1-dev \
  php8.1-dom \
  php8.1-fpm \
  php8.1-gd \
  php8.1-intl \
  php8.1-mbstring \
  php8.1-mysql \
  php8.1-simplexml \
  php8.1-sqlite3 \
  php8.1-zip
```

## Composer

```bash
curl -sS https://getcomposer.org/installer | php \
  && sudo mv composer.phar /usr/local/bin/composer
```

```bash
echo 'export PATH=~/.config/composer/vendor/bin:$PATH' >> ~/.bashrc
```

```bash
source ~/.bashrc
```

## `valet-linux`

```bash
composer global require cpriego/valet-linux
```

```bash
sudo apt install -y libnss3-tools jq xsel xdg-utils
```

```bash
valet install
```

```bash
valet domain localhost
```

```bash
mkdir ~/sites && cd ~/sites && valet park
```

```bash
mkdir ~/sites/phpinfo \
  && echo '<?php phpinfo();' > ~/sites/phpinfo/index.php
```

```bash
valet open phpinfo
```

## `takeout`

🔜
