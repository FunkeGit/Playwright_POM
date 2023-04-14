exports.loginpage = class loginpage {


    constructor(page) {
        this.page = page
        this.username_textbox = page.getByLabel('Username')
        this.password_textBox = page.getByLabel('Password')
        this.Login_button = page.getByRole('button', { name: ' Login' })

    }

    async gotologinpage(){
        await this.page.goto('https://the-internet.herokuapp.com/login')
    }

    async login(username, password){
        await this.username_textbox.fill(username)
        await this.password_textBox.fill(password)
        await this.Login_button.click()
    }
}