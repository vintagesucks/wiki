# PHP

PHP development environment with Laravel Herd, Docker (WSL 2) and [`takeout`](https://github.com/tighten/takeout).

::: info
This entry replaces a previous version of my Windows PHP setup: [PHP (WSL 2)](php-wsl2)
:::

## Prerequisites

Install the following:
* [Windows Subsystem for Linux](https://www.microsoft.com/store/productid/9P9TQF7MRM4R)
* [Ubuntu 24.04 for WSL](https://www.microsoft.com/store/productid/9nz3klhxdjp5)
* [Docker with WSL 2](https://docs.docker.com/docker-for-windows/wsl/)

## PHP

Install and launch [Laravel Herd](https://herd.laravel.com/windows).
* Skip Herd Pro
* Enable "Automatically launch Herd on system startup"

## Ubuntu

Setup Ubuntu 24:

```ps1
ubuntu2404
```

```bash
exit
```

```ps1
wsl --setdefault Ubuntu-24.04
```

```ps1
wsl -t Ubuntu-24.04
```

```ps1
ubuntu2404
```

Add user to Docker group:

```bash
sudo usermod -aG docker ${USER}
```

::: tip
Make sure Docker is running if you get an error like `usermod: group 'docker' does not exist`.

:::

## Takeout

[Takeout](https://github.com/tighten/takeout) is a CLI tool for spinning up docker containers for services like MySQL or Redis.

::: info
The following PHP installation is only used to set up [`takeout`](https://github.com/tighten/takeout), not for actual development.

This part can probably be replaced in the future by using the upcoming [tighten/takeout](https://hub.docker.com/r/tighten/takeout) docker image (waiting for [tighten/takeout#326](https://github.com/tighten/takeout/pull/326)).
:::

Setup:

```bash
sudo apt install -y php unzip
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

## PhpManager

Install [PhpManager](https://www.powershellgallery.com/packages/PhpManager) to install additional extensions:

```ps1
Install-Module -Name PhpManager
```

Example usage with `imagick` and PHP 8.3:

```ps1
Install-PhpExtension imagick -Path $env:USERPROFILE\.config\herd\bin\php83
```

```ps1
Enable-PhpExtension imagick -Path $env:USERPROFILE\.config\herd\bin\php83
```

`Enable-PhpExtension` can also be used to enable default extensions such as `xsl` which are disabled by default:

```ps1
Enable-PhpExtension xsl -Path $env:USERPROFILE\.config\herd\bin\php83
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
