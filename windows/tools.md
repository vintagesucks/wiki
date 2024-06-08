# Windows Tools

## Portainer

```ps1
docker run -d -p 9002:9000 `
  --restart always `
  -v //var/run/docker.sock:/var/run/docker.sock `
  -v "$Env:USERPROFILE\Documents\docker\portainer:/data" `
  -v "$Env:USERPROFILE\certs:/certs" `
  --name portainer `
  portainer/portainer-ce:2.5.1 `
  --ssl --sslcert /certs/localhost.pem --sslkey /certs/localhost-key.pem
```

→ https://localhost:9002

## rxrx

[rxrx](https://metacpan.org/pod/rxrx) is a command line regex debugger


```ps1
cpanm Regexp::Debugger
```

::: details Example Usage
<!--@include: ../partials/tools/rxrx/example-usage.md-->
:::

::: details Preview
<video controls autoplay muted loop playsinline>
  <source src="/files/windows/tools/rxrx.mp4" type="video/mp4">
</video>
:::
