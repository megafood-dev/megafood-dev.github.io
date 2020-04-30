## Accessibility
Never use tables for layout. Only use tables when it is semantically appropriate - for tabular data. It's important to use semantic markup for tables to help screen reader users understand the relationship of the data and to allow users with custom stylesheets to display tabular data in the way they need.

Never nest tables.

### Caption
Tables should have a programatically-associated caption or name. This can be done by using a `<caption>` element inside the `<table>`, `aria-label` attribute on the `<table>` element, or `aria-lebelledby` attribute on the `<table>` element that references an element outside of the table.

The caption or name of the table should describe the identity or purpose of the table accurately, meaningfully, and succinctly. For example, "Tabel 1" is not helpful, but "CCPA Information Categories" would be helpful.

The caption or name of the table should be unique within the context of other tables on the same page. Screen reader users should be able to pull up a list of all the tables on the page and be able to distinguish between them.

### TH
Table headers hust be designated with `<th>` and must accurately describe the category of the corresponding cells. Keep the `<th>` text concise.

Use `scope` attributes on all `<th>` and at the beginning of rows to help screen reader users associate the data cells with their header cells. When `scope` attribute on `<th>` can't be used, use the `headers` attribute that references the IDs of the headers (separated by a space).
