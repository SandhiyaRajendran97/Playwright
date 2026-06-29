class Orange{

    constructor(page){    //parameter
        this.page=page;
        this.username='//input[@name="username"]';
        this.password='//input[@type="password"]';
        this.submit='//button[text()=" Login "]';


    }

    async login(uname,pword){ //method
        await this.page.locator(this.username).fill(uname)
        await this.page.locator(this.password).fill(pword)
        await this.page.locator(this.submit).click()

    }
}

    export default Orange;

