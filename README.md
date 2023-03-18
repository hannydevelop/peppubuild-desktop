# ConnectPay
A Middleware to connect PayTrack to your application's checkout

> Please note that the user needs to have PayTrack Installed in their workspace. Next, the addition of this middleware completes their transactions.

- Install [PayTrack](https://workspace.google.com/marketplace/app/paytrack/913987535189) using your business account here, if you don't have PayTrack installed already.

- Create a Spreadsheet with the name `Accounting`.

## Steps (BootStrap-Checkout)
If you have an e-commerce shop that you've bootstrap, you can collect checkout information after issuing invoices/receipts using the steps below.

> If you don't already have an invoicing/receipt medium in place, use the `BootStrap-Full` method.

- Add PayTrack's Middleware url to your form action, following the example below.

> https://script.google.com/macros/s/AKfycbz7SN9BrBP55273d24kRE-9eL3ewK5posyk823svAUPP4DK5gykQeXA8QIDvuYhm_Kd/exec

```html
    <form method="POST" action="https://script.google.com/macros/s/AKfycbz7SN9BrBP55273d24kRE-9eL3ewK5posyk823svAUPP4DK5gykQeXA8QIDvuYhm_Kd/exec">
        <input name="Description" type="text" placeholder="Description" required>
        <input name="Amount" type="number" placeholder="Amount" required>
        <input name="Due Date" type="date" placeholder="Due Date" required>
        <input name="Receiver's Address" type="email" placeholder="Receiver's Address" required>
        <button type="submit">Send</button>
    </form>
```

Notice that the information we're collecting (in no particular order) are:

- Description
- Amount
- Due Date
- Receiver's Address

Please, don't change the value in the `name` attribute as it determines how data are collected.

## Steps (BootStrap-Full)
This step handles your accounting needs, starting from attaching an invoiving flow to completing transactions.

## Shopify Steps
Coming soon!