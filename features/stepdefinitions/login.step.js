import { Given, When, Then } from '@cucumber/cucumber';
import LoginPage from '../pageobjects/loginPage';
import DashboardPage from '../pageobjects/dashboardPage';

Given('I am on the login page', async () => {
    await LoginPage.open();
    await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/login');
});

When('I login with email {string} and password {string}', async function (email, password) {
    await LoginPage.emailTextfield.setValue(email);
    await LoginPage.passwordTextfield.setValue(password);
});

When('I click button login', async () => {
    await LoginPage.loginButton.click();
})

Then('I must see error message saying {string}', async function (errorMessage) {
    await expect(LoginPage.errorMessage).toExist();
    await expect(LoginPage.errorMessage).toHaveTextContaining(errorMessage);
})

Then('I must navigated to dashboard page', async () => {
    await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/dashboard');
    await expect(DashboardPage.textKasirAja).toExist();
});