# MC Theme

A free, open-source website theme for Minecraft servers — built with pure HTML, CSS and JavaScript. No frameworks, no dependencies.

Made by **[WittyBits Studio](https://wittybits.net)**

---

**[Live Demo](https://wittybits-studio.github.io/mc-theme/)** 

---

## Pages

| Page | File |
|---|---|
| Loading screen | `index.html` |
| Main menu | `home.html` |
| Server list | `servers.html` |
| News | `news.html` |
| Rules | `rules.html` |
| Staff | `staff.html` |
| FAQ | `faq.html` |
| Vote | `vote.html` |
| Contact | `contact.html` |

## Features

- Minecraft-style pixel font (VT323)
- Animated loading screen with progress bar
- Smooth page transitions
- Click-to-copy server IP with tooltip
- Responsive design — works on mobile and desktop
- Accessible markup (ARIA roles, focus-visible, prefers-reduced-motion)

## File structure

```
mc-theme/
├── index.html
├── home.html
├── servers.html
├── news.html
├── rules.html
├── staff.html
├── faq.html
├── vote.html
├── contact.html
├── img/
│   ├── style.css
│   ├── style-load.css
│   ├── bg.jpg
│   └── js/
│       └── main.js
└── LICENSE.txt
```

## How to use

1. Download or clone this repository
2. Open `index.html` in your browser (or host the files on any static server)
3. Edit the HTML files to match your server name, IP addresses, staff list, rules, etc.
4. Replace `bg.jpg` in the `img/` folder with your own background image
5. Customize colors in `img/style.css` by editing the CSS variables at the top of the file:

```css
:root {
    --c-yellow: #f9e102;
    --c-blue:   #52677d;
    --c-gray:   #74747c;
    --c-dark:   #101015;
}
```

## License

Free to use and modify. You may not sell this theme as a standalone product.  
Attribution is not required but appreciated — a mention of WittyBits Studio means a lot to us.

See [LICENSE.txt](LICENSE.txt) for full details.
