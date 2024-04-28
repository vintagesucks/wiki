# C

C development environment.

## Visual Studio Build Tools

The [VS Build Tools](https://visualstudio.microsoft.com/downloads/?q=build+tools) include Developer PowerShell with access to `cl`.

```ps1
Invoke-WebRequest -Uri 'https://aka.ms/vs/17/release/vs_BuildTools.exe' -OutFile "$env:TEMP\vs_BuildTools.exe"
```

```ps1
& "$env:TEMP\vs_BuildTools.exe" --passive --wait --add Microsoft.VisualStudio.Workload.VCTools --includeRecommended --remove Microsoft.VisualStudio.Component.VC.CMake.Project	
```

Example usage: https://github.com/vintagesucks/helloworld.exe
