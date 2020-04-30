## Purpose
This component should be used when navigation is needed to get to different stages of a particular process. Since these are links that go to different pages, rather than tabs that show/hide different content on the same page, a `nav` element with links has been used rather than a tabpanel component.

## Markup
The container should be a `<nav>` element with unique `aria-label` when there are links inside and a `<div>` when there are no links inside. The active page should not have a link.
