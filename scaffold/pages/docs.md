### Pages

**Feel free to remove this directory for projects that don't need this level of structure**

If you have styles that are specific to a single page or page template, it is better to put them in the `pages/` directory in a file named after that page. For instance, it’s not uncommon to have very specific styles for the home page that are different from internal pages, so you might have `_home.sass` and `_internal.sass` files in `pages/` .http://sass-guidelin.es/#pages-folder

*Note — Depending on your deployment process, these files could be called on their own to avoid merging them with the others in the resulting stylesheet. It is really up to you.*
