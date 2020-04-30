## Purpose
Use this component when you want a tooltip to appear on hover and focus of a link or button element.

## Accessibility
The tooltip shows on hover and focus, which makes it accessible to mouse and keyboard users. Since the element is in focus when clicked, it is also accessible to touch users.

`aria-describedby` on the `button` element references the `id` on the `role="tooltip"`, which allows screen reader users to hear the tooltip content when they're on the button element. Tooltip content should be kept concise because of this.
