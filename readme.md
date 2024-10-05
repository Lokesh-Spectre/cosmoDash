# cosmoDash
## INTRODUCTION
<p>This is a instant personal project in a hurry to be home page for my home server.I am no expert in backend nor frontend, just trying to learn. If you found anything to improve, much appriciated. If you found this useful, thats great.</p>

## DOCUMENTATION
### FRONTEND
    - reactjs
    - google's mui components
### BACKEND
    - nodejs
    - express

### CONFIG
The server configs and media are stored on `~/.local/share/cosmoDash`\
```
Folder structure:
    cosmoDash
    ├── assets
    │   ├── adGuardHome.png
    │   ├── home-assistant.png
    │   ├── immich.png
    │   ├── plex.png
    │   ├── qbittorrent.png
    │   └── vscode.png
    └── services.json
```

syntax for ```services.json``` file
```json
[
    {
        "name":         "name of the service",
        "image":        "path of the image for the service",
        "description":  "this text is showed on the tile along with image",
        "url":          "The url to which user will be re-routed"
    },
    {
        "name":         "name of the service 2",
        "image":        "path of the image for the service",
        "description":  "this text is showed on the tile along with image",
        "url":          "The url to which user will be re-routed"
    }
]
```