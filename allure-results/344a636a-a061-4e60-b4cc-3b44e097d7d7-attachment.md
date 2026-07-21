# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pomPractise.spec.js >> Login using sausecode
- Location: tests\pomPractise.spec.js:4:5

# Error details

```
TypeError: this.page.locator(...).tobeVisible is not a function
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
      - button "Go back Back to products" [ref=e16] [cursor=pointer]:
        - img "Go back" [ref=e17]
        - text: Back to products
    - generic [ref=e20]:
      - img "Sauce Labs Backpack" [ref=e22]
      - generic [ref=e23]:
        - generic [ref=e24]: Sauce Labs Backpack
        - generic [ref=e25]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
        - generic [ref=e26]: $29.99
        - button "Add to cart" [ref=e27] [cursor=pointer]
  - contentinfo [ref=e28]:
    - list [ref=e29]:
      - listitem [ref=e30]:
        - link "Twitter" [ref=e31] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e32]:
        - link "Facebook" [ref=e33] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e34]:
        - link "LinkedIn" [ref=e35] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e36]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | class code{
  2  | 
  3  |  constructor(page){
  4  |     this.page=page;
  5  |     this.username="//input[@id='user-name']";
  6  |     this.password="//input[@id='password']";
  7  |     this.submit="//input[@id='login-button']";
  8  |     this.Backpack="//div[text()='Sauce Labs Backpack']";
  9  |     this.labs="//div[text()='Sauce Labs Backpack']";
  10 |     this.price="//div[text()='29.99']";
  11 |     this.add="//button[text()='Add to cart']";
  12 |    
  13 |  }
  14 | 
  15 |  async login (username,password){
  16 |     await this.page.locator(this.username).fill(username);
  17 |     await this.page.locator(this.password).fill(password);
  18 |     await this.page.locator(this.submit).click()
  19 |     await this.page.locator(this.Backpack).click();
> 20 |     await this.page.locator(this.labs).tobeVisible();
     |                                        ^ TypeError: this.page.locator(...).tobeVisible is not a function
  21 |     await this.page.locator(this.price).tobeVisible();
  22 |     await this.page.locator(this.add).click()
  23 |  }
  24 | 
  25 | 
  26 | 
  27 | 
  28 | 
  29 | }
  30 | export default code;
```