# Self-hosted fonts (next/font/local)

Replaces next/font/google, which fails when Google serves extensionless font URLs (Next loader.js:122). Same families, same latin subset, same variable CSS names (--font-inter, --font-playfair).

| File | Family | Source URL (fetched 2026-10-28) | sha256 | License |
|---|---|---|---|---|
| Inter-latin-variable.woff2 | Inter (variable, wght 100-900, latin) | https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7W0Q5nw.woff2 | c940764593d0fe5d596be327ca7558855e018039fb78509aa21921fd3644c3e4 | SIL OFL 1.1, OFL-Inter.txt |
| PlayfairDisplay-latin-variable.woff2 | Playfair Display (variable, wght 400-900, latin) | https://fonts.gstatic.com/s/playfairdisplay/v40/nuFiD-vYSZviVYUb_rj3ij__anPXDTzYgEM86xQ.woff2 | 5d91eb5d522a03081946c44c8ca17c902230dfed5f0f9b5014262135d47b15b2 | SIL OFL 1.1, OFL-PlayfairDisplay.txt |

OFL texts from https://github.com/google/fonts (ofl/inter/OFL.txt, ofl/playfairdisplay/OFL.txt). These are the same files next/font/google downloaded from Google Fonts (CSS2 API, Chrome 104 user agent). Latin-ext, cyrillic, greek and vietnamese subsets are not included; the site uses none of them.
