# Homebrew

::: warning
This entry is a work in progress and needs a lot of formatting and sorting. Some TODOs.
:::

## Setup

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

```sh
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
```

```sh
eval "$(/opt/homebrew/bin/brew shellenv)"
```

## Git

```sh
brew install git
```

## Xcodes

https://github.com/XcodesOrg/XcodesApp

```sh
brew install --cask xcodes
```

-> Launch Xcodes
-> Install latest stable version of Xcode
-> Install iOS platform

## Alfred 5

https://www.alfredapp.com

```sh
brew install --cask alfred
```

(or [Alfred 4](https://www.alfredapp.com/help/v4/))

-> System Settings: Disable <kbd>⌘Space</kbd> Spotlight shortcut
-> Alfred: Set <kbd>⌘Space</kbd> shortcut
-> Alfred: Enable Clipboard History and set shortcut to <kbd>⇧⌘V</kbd>

## macOCR

https://github.com/schappim/macOCR

```sh
brew install schappim/ocr/ocr
```

```sh
curl -O https://files.littlebird.com.au/OCR2-ONrTkn.zip
```

```sh
unzip OCR2-ONrTkn.zip -x '__MACOSX/*'
```

```sh
open ./OCR2.alfredworkflow
```

```sh
rm OCR2-ONrTkn.zip OCR2.alfredworkflow
```

## TablePlus

```sh
brew install --cask tableplus
```

## Bartender

```sh
brew install --cask bartender
```

## Numi

```sh
brew install --cask numi
```

## Rectangle

```sh
brew install --cask rectangle
```

## Sonos

```sh
brew install --cask sonos
```

## Warp

```sh
brew install --cask warp
```

## coreutils

```sh
brew install coreutils
```

## greadlink
enabled via dotfiles, or:

```sh
echo 'alias readlink=greadlink' >> ~/.zshrc
```

## eza

```sh
brew install eza
```

enabled via dotfiles, or:

```sh
echo 'alias ls=eza' >> ~/.zshrc
```

## gh

```sh
brew install gh
```

```sh
gh auth login
```

## wget

```sh
brew install wget
```

## zsh-nvm

```sh
git clone https://github.com/lukechilds/zsh-nvm.git ~/.zsh-nvm
```

enabled via dotfiles, or:

```sh
echo 'export NVM_AUTO_USE=true' >> ~/.zshrc
```

```sh
echo 'source ~/.zsh-nvm/zsh-nvm.plugin.zsh' >> ~/.zshrc
```

Restart Terminal (2x)

## zsh-syntax-highlighting

```sh
brew install zsh-syntax-highlighting
```

enabled via dotfiles, or:

```sh
echo 'source /opt/homebrew/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh' >> ~/.zshrc
```

Restart Terminal

## Pure

```sh
mkdir -p "$HOME/.zsh"
```

```sh
git clone https://github.com/sindresorhus/pure.git "$HOME/.zsh/pure"
```

enabled via dotfiles, or:

```sh
echo 'fpath+=$HOME/.zsh/pure' >> ~/.zshrc
```

```sh
echo 'autoload -U promptinit; promptinit' >> ~/.zshrc
```

```sh
echo 'prompt pure' >> ~/.zshrc
```

Restart Terminal

## Docker

```sh
brew install --cask docker
```

-> Start Docker Desktop

## Node.js (nvm)

```sh
nvm install node
```

### .npmrc
If you have a private npm token, add the following to `~/.npmrc`:

```
//registry.npmjs.org/:_authToken=<token>
```

## Yarn (corepack)

```sh
corepack enable
```

### .yarnrc.yml
If you have a private npm token, add the following to `~/.yarnrc.yml`:

```
npmAuthToken: <token>
```

### Disable Telemetry

```sh
yarn config set --home enableTelemetry 0
```

### PHP

```sh
brew install shivammathur/php/php@8.3 shivammathur/php/php@8.2 shivammathur/php/php@8.1
```

### Composer

```sh
wget https://getcomposer.org/download/latest-stable/composer.phar
```

```sh
chmod +x composer.phar
```

```sh
sudo mv composer.phar /usr/local/bin/composer
```

added to path via dotfiles, or:

```sh
echo 'export PATH="${HOME}/.composer/vendor/bin:$PATH"' >> ~/.zshrc
```

Restart Terminal

## ext-imagick

```sh
brew install shivammathur/extensions/imagick@8.3 shivammathur/extensions/imagick@8.2 shivammathur/extensions/imagick@8.1
```

```sh
brew services restart nginx
```

## ext-redis

```sh
brew install shivammathur/extensions/redis@8.3 shivammathur/extensions/redis@8.2 shivammathur/extensions/redis@8.1
```

```sh
brew services restart nginx
```

## MySQL Client

```sh
brew install mysql-client
```

added to path via dotfiles, or:

```sh
echo 'export PATH="/opt/homebrew/opt/mysql-client/bin:$PATH"' >> ~/.zshrc
```

## htop

```sh
brew install htop
```

## jq

```sh
brew install jq
```

## Kap

```sh
brew install --cask kap
``` 

## Discord

```sh
brew install --cask discord
```

## Laravel Valet

```sh
composer global require laravel/valet
```

```sh
valet install
``` 

```sh
sudo valet trust
```

### ngrok config

TODO: does this still work?

Token via https://ngrok.com/ @ `~/.ngrok2/ngrok.yml`

```
authtoken: <token>
 
region: eu
```

### Trust Valet CA in Firefox

```sh
valet secure ca
```

```sh
valet unsecure ca
```

Firefox settings:
* Privacy & Security
* Scroll down to certificates -> click show certificates
* Click import
* Press <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>G</kbd> to be able to specify a path
* Enter `~/.config/valet/CA/` and select `.pem` file

## phpmon

```sh
brew install --cask nicoverbruggen/homebrew-cask/phpmon
```

## sudo-touchid

```sh
brew install artginzburg/tap/sudo-touchid
```

```sh
sudo brew services start sudo-touchid
```

```sh
sudo-touchid
```

## asciiquarium

```sh
brew install asciiquarium
``` 

## cowsay

```sh
brew install cowsay
```

## webp

```sh
brew install webp
```

## mkcert
```sh
brew install mkcert nss
```

```sh
mkcert -install
```

```sh
mkdir ~/certs
```

```sh
cd ~/certs
```

```sh
mkcert localhost
```

## Portainer

```sh
docker run -d -p 9001:9000 \
  --restart always \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v ~/Documents/docker/portainer:/data \
  -v ~/certs:/certs \
  --name portainer \
  portainer/portainer-ce:2.5.1 \
  --ssl --sslcert /certs/localhost.pem --sslkey /certs/localhost-key.pem
```

-> https://localhost:9001/

## Mailpit

```sh
docker run -d \
  --name=mailpit \
  --restart unless-stopped \
  -v ~/certs:/certs \
  -e MP_UI_TLS_CERT=/certs/localhost.pem \
  -e MP_UI_TLS_KEY=/certs/localhost-key.pem \
  -e TZ=Europe/Berlin \
  -p 8025:8025 \
  -p 1025:1025 \
  axllent/mailpit
```

-> https://localhost:8025/

TODO: The following works but seems wrong. Verify.

```sh
echo "sendmail_path = /opt/homebrew/bin/mailhog sendmail test@test -t --smtp-addr 127.0.0.1:1025" >> /opt/homebrew/etc/php/8.3/conf.d/mailhog.ini
```

```sh
echo "sendmail_path = /opt/homebrew/bin/mailhog sendmail test@test -t --smtp-addr 127.0.0.1:1025" >> /opt/homebrew/etc/php/8.2/conf.d/mailhog.ini
```

```sh
echo "sendmail_path = /opt/homebrew/bin/mailhog sendmail test@test -t --smtp-addr 127.0.0.1:1025" >> /opt/homebrew/etc/php/8.1/conf.d/mailhog.ini
```

## Takeout

```sh
composer global require tightenco/takeout -W
```

### MySQL 8

```sh
takeout enable mysql
```

* Port: 3307
* Tag: 8.0
* Volume: mysql8_data
* Password: secret

### Redis

```sh
takeout enable redis
```

* Port: 6379
* Tag: latest
* Volume: redis_data

### Meilisearch

* Port: 7700
* Tag: latest
* Volume: meili_data

## chromedriver

```sh
brew install chromedriver
```

## pyenv

```sh
brew install pyenv
```

enabled via dotfiles, or:

```sh
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zshrc
```

```sh
echo 'command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.zshrc
```

```sh
echo 'eval "$(pyenv init -)"' >> ~/.zshrc
```

Restart Terminal

then:

```sh
git clone https://github.com/pyenv/pyenv-doctor.git $(pyenv root)/plugins/pyenv-doctor
```

```sh
pyenv doctor
```

```sh
pyenv install 3.6.15
```

## pipenv

```sh
pyenv shell 3.6.15
```

```sh
pip install --user pipx
```

enabled via dotfiles, or:

```sh
echo 'export PATH="${HOME}/.local/bin:$PATH"' >> ~/.zshrc
```

Restart Terminal

```sh
pyenv shell 3.6.15
```

```sh
pipx install pipenv
```

## Cloudflare WARP

```sh
brew install --cask cloudflare-warp
```

## Ray

```sh
brew install --cask ray
```

## git-remote-codecommit

```sh
brew install git-remote-codecommit
```

## Safari Technology Preview

```sh
brew install --cask safari-technology-preview
```

## AWS CLI

```sh
brew install awscli
```

## Session Manager plugin for the AWS CLI

https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html

```sh
brew install --cask session-manager-plugin
```

## Asana

```sh
brew install --cask asana
```

## Grype

```sh
brew install grype
```

## Apidog

```sh
brew install --cask apidog
```

## Httpie

```sh
brew install --cask httpie
```
