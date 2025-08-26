import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    public get loginBtn () {
        return $('android=new UiSelector().text("󰍂")');
    }
    public get inputUsername () {
        return $('~input-email');
    }
    public get inputPassword () {
        return $('~input-password');
    }
    public get btnSubmit () {
        return $('~button-LOGIN');
    }

    public get signUpBtn () {
        return $('//android.widget.TextView[@text="Sign up"]');
    }
    public get inputPassword1 () {
        return $('~input-password');
    }
    public get inputPassword2 () {
        return $('~input-repeat-password');
    }
    public get btnSubmitSignUp () {
        return $('~button-SIGN UP');
    }
    public async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
    public async signUp (username: string, password1: string, password2: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword1.setValue(password1);
        await this.inputPassword2.setValue(password2);
        await this.btnSubmitSignUp.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
}

export default new LoginPage();
