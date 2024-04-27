# Homebrew

## perl

::: warning
TBD: Should we use https://perlbrew.pl instead of relying on a directory that gets nuked on perl upgrades?
:::

```sh
brew install perl
```

```sh
echo 'export PATH="$(brew --prefix perl)/bin:$PATH"' >> ~/.zshrc
``` 

## cpanminus

::: warning
See [perl](#perl)
:::

```sh
brew install cpanminus
```
