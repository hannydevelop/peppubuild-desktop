# ConnectPay
A Middleware to connect PayTrack to your application's checkout

> Please note that the user needs to have PayTrack Installed in their workspace. Next, the addition of this middleware completes their transactions.

## Steps (BootStrap-Checkout)
If you have an e-commerce shop that you've bootstrap, you can collect checkout information after issuing invoices/receipts using the steps below.

> If you don't already have an invoicing/receipt medium in place, use the `BootStrap-Full` method.

- Install PayTrack using your business account here, if you don't have PayTrack installed already.

- Create a Spreadsheet with the name `Accounting`.

- Add PayTrack's Middleware url to your form action, following the example below.

```html
    <form method="POST" action="https://script.google.com/macros/s/AKfycbyGBKxwEdI7YO87zE3XAWqC6x-JhwxF9WAlLjHO11I/dev">
        <input name="Description" type="text" placeholder="Description" required>
        <input name="Amount" type="number" placeholder="Amount" required>
        <input name="Due Date" type="date" placeholder="Due Date" required>
        <input name="Receiver's Address" type="email" placeholder="Receiver's Address" required>
        <button type="submit">Send</button>
    </form>
```

## Shopify Steps
Coming soon!