function ask() {
  return prompt("When is your birthday?") || ""
}

```
function parse(birthday: string): Date | null {
  let date = new Date(birthday)
  if (!isValid(date)) {
    return null
  }
  return date
}
```

function parse(birthday: string): Date {
  let date = new Date(birthday)
  if (!isValid(date)) {
    throw new RangeError("Enter a date in the form YYY/MM/DD")
  }
  return date
}

function isValid(date: Date) {
  return Object.prototype.toString.call(date) === '[object Date]' && !Number.isNaN(date.getTime())
}

```
let date = parse(ask())
if (date) {
  console.info("Date is", date.toISOString())
} else {
  console.error("Error parsing date for some reason")
}
```

try {
  let date = parse(ask())
  console.info("Date is", date.toISOString())
} catch (e) {
  console.error(e.message)
}
