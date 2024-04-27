# Tools

## rxrx

[rxrx](https://metacpan.org/pod/rxrx) is a command line regex debugger


```ps1
cpanm Regexp::Debugger
```

::: details Example Usage
Run:

```ps1
rxrx
```

Enter [a regex](https://blog.cloudflare.com/details-of-the-cloudflare-outage-on-july-2-2019):

```
/(?:(?:\"|'|\]|\}|\\|\d|(?:nan|infinity|true|false|null|undefined|symbol|math)|\`|\-|\+)+[)]*;?((?:\s|-|~|!|{}|\|\||\+)*.*(?:.*=.*)))/
```

Enter a string:

```
'infinity=false'
```

To get a visual of the regex:

```
m
```

To step forward:

```
s
```

To get a full list of commands:

```
?
```
:::

::: details Preview
<video controls autoplay muted loop playsinline>
  <source src="/files/windows/tools/rxrx.mp4" type="video/mp4">
</video>
:::
