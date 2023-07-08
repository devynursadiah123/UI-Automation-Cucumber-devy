
import page from './page.js';

class LoginPage extends page {

    get emailTextfield() {
        return $('#email')
    }

    get passwordTextfield() {
        return $('#password')
    }

    get loginButton() {
        return $('button[type="submit"]')
    }

    get errorMessage() {
        return $('div[role="alert"]')
    }

    open() {
        return super.open('https://kasirdemo.belajarqa.com')
    }

    async login(email, password) {
        await this.emailTextfield.setValue(email);
        await this.passwordTextfield.setValue(password);
        await this.loginButton.click();
    }

}
export default new LoginPage();
