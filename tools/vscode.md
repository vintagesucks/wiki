# VS Code

## settings.json

::: tip

Symlink `settings.json` to your local copy of this wiki:

::: code-group

```sh [macOS]
rm ~/Library/Application\ Support/Code/User/settings.json
ln -s ~/Documents/GitHub/wiki/tools/vscode/settings.json ~/Library/Application\ Support/Code/User/settings.json
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

## keybindings.json

```json
[
    {
        "key": "cmd+[Semicolon]",
        "command": "workbench.action.terminal.toggleTerminal",
        "when": "terminal.active"
    },
    {
        "key": "ctrl+shift+[Equal]",
        "command": "-workbench.action.terminal.toggleTerminal",
        "when": "terminal.active"
    }
]
```
