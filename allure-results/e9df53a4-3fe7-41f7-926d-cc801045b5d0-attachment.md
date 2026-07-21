# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pomPractise.spec.js >> Login using sausecode
- Location: tests\pomPractise.spec.js:5:5

# Error details

```
ReferenceError: login is not defined
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - generic [ref=e5]:
    - generic [ref=e9]:
      - textbox "Username" [ref=e11]
      - textbox "Password" [ref=e13]
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_user
        - text: locked_out_user
        - text: problem_user
        - text: performance_glitch_user
        - text: error_user
        - text: visual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test'
  2  | import code from './pages/sausecode'
  3  | import sausecode from './test-data/sausecode.json'
  4  | 
  5  | test ("Login using sausecode",async({page})=>{
  6  |     await page.goto("https://www.saucedemo.com/");
  7  | 
  8  |     let logincode = new code (page);
  9  | 
  10 |     //logincode.login("standard_user","secret_sauce",
  11 |         //"sandhiya","Raj","607 106");
  12 | 
  13 |     await expect(page.getByText('Swag Labs')).toBeVisible();
> 14 |     await page.getByPlaceholder('Username').fill(login.username);
     |                                                  ^ ReferenceError: login is not defined
  15 |     await page.getByPlaceholder('Password').fill(login.password);
  16 |     await page.getByPlaceholder('First Name').fill(login.firstname);
  17 |     await page.getByPlaceholder('Last Name').fill(login.lastname);
  18 |     await page.getByPlaceholder('Zip/Postal Code').fill(login.PostalCode);
  19 | 
  20 | 
  21 | 
  22 |     await page.pause()
  23 | 
  24 | 
  25 | 
  26 | 
  27 | })
```