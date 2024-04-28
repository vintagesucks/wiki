# Homebrew

## perlbrew

We use `cpanm` installed via [Perlbrew](https://perlbrew.pl/) to setup [tools](/macos/tools#rxrx) like `rxrx`.

::: info
Installing Perl via `perlbrew` could take a while (~13m).
:::

```sh
\curl -L https://install.perlbrew.pl | bash
```

```sh
echo 'source ~/perl5/perlbrew/etc/bashrc' >> ~/.zshrc
```

```sh
perlbrew install stable
```

```sh
perlbrew switch perl-version # e.g. perlbrew switch perl-5.38.2
```

```sh
perlbrew install-cpanm
```
