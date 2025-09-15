# Scoop

::: warning
This entry is a work in progress.
:::

## cmake

Separate [cmake](https://cmake.org/) installation because we are omitting `cmake` from the [VS Build Tools](/windows/c.md#visual-studio-build-tools) setup.

```ps1
scoop install cmake
```

## perl

We use `cpanm` installed via [Perl](https://strawberryperl.com/) to install [tools](/windows/tools#rxrx) like `rxrx`.

```ps1
scoop install perl
```

```ps1
cpan App::cpanminus
```

## mysql

```ps1
scoop install mysql
```
