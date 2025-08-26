import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    public get flashAlert () {
        return $('id:android:id/message');
    }
    public get alertaEmailErr () {
        return $('//android.widget.TextView[@text="Please enter a valid email address"]');
    }
    public get alertaPassErr () {
        return $('//android.widget.TextView[@text="Please enter at least 8 characters"]');
    }
}

export default new SecurePage();
