# WinGet

## gh

The [GitHub CLI](https://cli.github.com/)

```ps1
winget install --id GitHub.cli
```

## mkcert

[mkcert](https://mkcert.dev/) is a tool to create locally-trusted development certificates

```ps1
winget install -e --id FiloSottile.mkcert
```

```ps1
mkcert -install
```

```ps1
md "$Env:USERPROFILE\certs"
```

```ps1
cd "$Env:USERPROFILE\certs"
```

```ps1
mkcert localhost
```
