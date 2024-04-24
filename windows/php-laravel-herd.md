# PHP

PHP development environment with Laravel Herd, Docker (WSL 2) and [`takeout`](https://github.com/tighten/takeout).

::: info
This entry replaces a previous version of my Windows PHP setup: [PHP (WSL 2)](php-wsl2)
:::

## Prerequisites

Install the following:
* [Windows Subsystem for Linux](https://www.microsoft.com/store/productid/9P9TQF7MRM4R)
* [Ubuntu 22.04 for WSL](https://www.microsoft.com/store/productid/9PN20MSR04DW)
* [Docker with WSL 2](https://docs.docker.com/docker-for-windows/wsl/)

## PHP

Install and launch [Laravel Herd](https://herd.laravel.com/windows).
* Skip Herd Pro
* Enable "Automatically launch Herd on system startup"

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

Add user to Docker group

```bash
sudo usermod -aG docker ${USER}
```

::: tip
Make sure Docker is running if you get an error like `usermod: group 'docker' does not exist`.

:::

## Takeout

::: info
This PHP installation is only used to set up [`tighten/takeout`](https://github.com/tighten/takeout), not for actual development.
:::

```bash
LC_ALL=en_US.UTF-8 sudo add-apt-repository -y ppa:ondrej/php
```

```bash
sudo apt install -y php8.3 unzip
```

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


```bash
composer global require tightenco/takeout
```

```bash
exit
```

Add an alias to access `takeout` from Windows:

```ps1
Add-Content -Path $PROFILE.CurrentUserAllHosts -Value 'function takeout { wsl ~/.config/composer/vendor/bin/takeout @Args }'
```

Restart PowerShell.

```ps1
takeout
```

## VS Code 

To access the Herd binaries in the integrated terminal of VS Code, add the following config:

```json
"terminal.integrated.env.windows": {
  "PATH": "${env:PATH};${env:USERPROFILE}\\.config\\herd\\bin"
},
```

## Valet alias

Add a `valet` alias for `herd` in case muscle memory kicks in:

```ps1
Add-Content -Path $PROFILE.CurrentUserAllHosts -Value 'function valet { herd @Args }'
```

Restart PowerShell.

## Platform requirements

Ignore incompatible platform requirements such as `ext-pcntl`, for example when installing Laravel Horizon in a cross-platform project:

```ps1
Add-Content -Path $PROFILE.CurrentUserAllHosts -Value '$env:COMPOSER_IGNORE_PLATFORM_REQ = "ext-pcntl,ext-posix"'
```

Restart PowerShell.
