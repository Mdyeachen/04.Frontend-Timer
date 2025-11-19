# 04.Front End Timer

---

## Countdown Timer for Promotion

This project implements a **countdown timer** that displays the remaining time until a specified end date. The timer appends to an existing HTML element and preserves the existing text.

---

## How to Use

1. Add an HTML element where the countdown should appear:

```html
<div id="appendCode">Limited Time Offer!</div>
```

2. Include or copy the `time.js` file:

```html
<script src="time.js"></script>
```

3. Customize the timer in `time.js`:

* **Change the end date**:

```js
const endTime = new Date("YYYY-MM-DDTHH:MM:SS").getTime();
```

* **Change styles**:

```js
timerElement.style.color = "#ff5877";
timerElement.style.fontSize = "14px";
timerElement.style.padding = "0px 0 0 12px";
```

---

## Features

* Countdown in **Days:Hours:Minutes:Seconds** format
* Adds **leading zeros** for single-digit numbers
* Appends timer without overwriting existing content
* Stops automatically when time is up
* Style easily customizable via CSS

---

## Notes

* The timer shows the same countdown for all visitors when a fixed date is used.
* The timer disappears automatically when it reaches zero.

---

## License

This project is open-source and free to use.
