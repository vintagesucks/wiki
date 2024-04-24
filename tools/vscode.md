# VS Code

::: warning
This entry is a work in progress.
:::

## settings.json

::: tip

Symlink `settings.json` to your local copy of this wiki:

::: code-group

```sh [macOS]
# TODO
```

```ps1 [Windows]
# In an elevated PowerShell
cd ${env:USERPROFILE}\AppData\Roaming\Code\User\
rm settings.json
New-Item -ItemType SymbolicLink -Path "${env:USERPROFILE}\AppData\Roaming\Code\User\settings.json" -Target "${env:USERPROFILE}\Documents\GitHub\wiki\tools\vscode\settings.json"
```
:::

```json
<!--@include: ./vscode/settings.json-->
```

