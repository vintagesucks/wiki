# PHP

PHP development environment with Laravel Herd, Docker (WSL 2) and [`takeout`](https://github.com/tighten/takeout).

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

Add an alias to access `takeout` via Docker:

```ps1
Add-Content -Path $PROFILE.CurrentUserAllHosts -Value 'function takeout { docker run --rm -v //var/run/docker.sock:/var/run/docker.sock -it tighten/takeout:latest $args }'
```

Restart PowerShell.

```ps1
takeout
```

::: tip
Make sure Docker is running if you get an error like `docker: error during connect`.
:::

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
