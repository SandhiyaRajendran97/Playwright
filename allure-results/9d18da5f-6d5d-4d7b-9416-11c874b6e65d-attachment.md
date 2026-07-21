# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pomPractise.spec.js >> Login using sausecode
- Location: tests\pomPractise.spec.js:6:5

# Error details

```
TypeError: logoutcode.details is not a function
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - button "Open Menu" [ref=e8] [cursor=pointer]
          - img "Open Menu" [ref=e9]
        - generic [ref=e11]: Swag Labs
        - generic [ref=e14]: "2"
      - generic [ref=e16]: "Checkout: Your Information"
    - generic [ref=e19]:
      - generic [ref=e20]:
        - textbox "First Name" [ref=e22]
        - textbox "Last Name" [ref=e24]
        - textbox "Zip/Postal Code" [ref=e26]
      - generic [ref=e28]:
        - button "Go back Cancel" [ref=e29] [cursor=pointer]:
          - img "Go back" [ref=e30]
          - text: Cancel
        - button "Continue" [ref=e31] [cursor=pointer]
  - contentinfo [ref=e32]:
    - list [ref=e33]:
      - listitem [ref=e34]:
        - link "Twitter" [ref=e35] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e36]:
        - link "Facebook" [ref=e37] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e38]:
        - link "LinkedIn" [ref=e39] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e40]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test'
  2  | import Code from './pages/sausecode'
  3  | import Checkout from './pages/Product';
  4  | import cred from './test-data/sausecode.json'
  5  | 
  6  | test ("Login using sausecode",async({page})=>{
  7  |     await page.goto("https://www.saucedemo.com/");
  8  | 
  9  |     let logincode = new Code (page);
  10 | 
  11 |    await logincode.login(cred.username,cred.password);
  12 |    await logincode.productOne()
  13 |    await logincode.productTwo()
  14 |    await logincode.carts()
  15 |    
  16 |    let logoutcode = new Checkout(page);
  17 | 
> 18 |    await logoutcode.details(cred.firstname,cred.lastname,cred.PostalCode);
     |                     ^ TypeError: logoutcode.details is not a function
  19 |    await logoutcode.verify();
  20 |    await logoutcode.logouts();
  21 | 
  22 | 
  23 |     await page.pause()
  24 | 
  25 | 
  26 | 
  27 | 
  28 | })
```