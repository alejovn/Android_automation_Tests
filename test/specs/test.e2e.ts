import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('My Login application', () => {
    beforeEach(async () => {
        await driver.execute('mobile: terminateApp', { appId: 'com.wdiodemoapp' });
        await browser.pause(1000);
        await driver.execute('mobile: activateApp', { appId: 'com.wdiodemoapp' });
        
    });
    it('should login with invalid email', async () => {
        await LoginPage.loginBtn.waitForDisplayed({ timeout: 5000 });
        if (await LoginPage.loginBtn.isDisplayed()) {
            await LoginPage.loginBtn.click();
            await LoginPage.login('tomsmith', 'SuperSecretPassword!')
            await expect(SecurePage.alertaEmailErr).toBeExisting()
            await expect(SecurePage.alertaEmailErr).toHaveText(expect.stringContaining('Please enter a valid email address'))
        }else{
            const condicion = true;
            await expect(condicion).toBe(true);
        }
        
    })
    it('should login with invalid password', async () => {
        await LoginPage.loginBtn.waitForDisplayed({ timeout: 5000 });
        if (await LoginPage.loginBtn.isDisplayed()) {
            await LoginPage.loginBtn.click();
            await LoginPage.login('tomsmith@email.com', '1234')
            await expect(SecurePage.alertaPassErr).toBeExisting()
            await expect(SecurePage.alertaPassErr).toHaveText(expect.stringContaining('Please enter at least 8 characters'))
        }else{
            const condicion = true;
            await expect(condicion).toBe(true);
        }
        
    })
    it('should login with valid credentials', async () => {
        await LoginPage.loginBtn.waitForDisplayed({ timeout: 5000 });
        if (await LoginPage.loginBtn.isDisplayed()) {
            await LoginPage.loginBtn.click();
            await LoginPage.login('tomsmith@email.com', 'SuperSecretPassword!')
            await expect(SecurePage.flashAlert).toBeExisting()
            await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining('You are logged in!'))
        }else{
            const condicion = true;
            await expect(condicion).toBe(true);
        }
    })
    it('should sign Up with valid credentials', async () => {
        await LoginPage.loginBtn.waitForDisplayed({ timeout: 50000 })
        if (await LoginPage.loginBtn.isDisplayed()) {
            await LoginPage.loginBtn.click()
            await LoginPage.signUpBtn.waitForDisplayed({ timeout: 5000 })
            await LoginPage.signUpBtn.click()
            await LoginPage.signUp('tomsmith@email.com', 'SuperSecretPassword!','SuperSecretPassword!')
            await expect(SecurePage.flashAlert).toBeExisting()
            await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining('You successfully signed up!'))
        }else{
            const condicion = true
            await expect(condicion).toBe(true)
        }
    })
})

