## Markup
The hint ID must begin with the text `hint-`.

If there is also an error message associated with the input, it should appear above the hint text.

### Radios and Checkboxes
If there is hint text associated with a radio or checkbox, use `.has-desc` on the containing `fieldset` to diferentiate the label styles from the hint text. Hint text for radio and checkboxes should folow the label associated with the input.
```
<fieldset class="has-desc">
    <legend>Choose an Option</legend>
    <input type="radio" id="radio-1" name="radio-test" aria-describedby="hint-radio-1" /><label for="radio-1">Radio 1</label>
	<p id="hint-radio-1">Here's the hint text for the first radio button.</p>

    <input type="radio" id="radio-2" name="radio-test" aria-describedby="hint-radio-2" /><label for="radio-2">Radio 2</label>
    <p id="hint-radio-2">Here's the hint text for the second radio button.</p>
</fieldset>
```

## Accessibility
Include the `aria-describedby` attribute that points to the ID of the associated hint message.

If this component is used on a page more than once, the IDs must be unique.
