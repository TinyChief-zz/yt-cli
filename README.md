# yt-cli

# Yandex translate CLI app.

Use translation API provided by `yandex.ru` using CLI.

## Install

```
npm install easy-translate-cli -g
```

## Usage

```	
  $ yt [text] [languge]
```

For example:
```	
  $ yt 'Hello world!' ru
  <!-- or -->
  $ yt text='Hello world!' lang=ru
```
will output
```	
    🇬🇧  : Hello world!
    🇷🇺  : Всем привет!
```
