# WinGet

## fastfetch

```ps1
winget install fastfetch
```

## gh

The [GitHub CLI](https://cli.github.com/)

```ps1
winget install --id GitHub.cli
```

## Ollama

```ps1
winget install -e --id=Ollama.Ollama
```

### llama3.1 (405b)
```ps1
ollama pull llama3.1:405b
```

### Open WebUI

```ps1
docker run -d -p 8081:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart unless-stopped ghcr.io/open-webui/open-webui:main
```

→ http://localhost:8081

### OpenedAI Speech

```ps1
docker run -d --gpus=all -p 8000:8000 -v tts-voices:/app/voices -v tts-config:/app/config --name openedai-speech --restart unless-stopped ghcr.io/matatonic/openedai-speech:latest
```

http://localhost:8081/admin/settings/ 
→ Audio
* API Base URL: http://host.docker.internal:8000/v1
* API Key: sk-111111111
* Voice: `alloy`
* Model: `tts-1-hd`

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

## Warp

```ps1
winget install Warp.Warp
```

## LibreOffice

```ps1
winget install --id=TheDocumentFoundation.LibreOffice -e
```
