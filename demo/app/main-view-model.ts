import { Observable } from 'tns-core-modules/data/observable';
import { LoginWithAmazon } from 'nativescript-login-with-amazon';
import * as dialogs from 'tns-core-modules/ui/dialogs';

export class HelloWorldModel extends Observable {
  public message: string;
  private loginWithAmazon: LoginWithAmazon;

  constructor() {
    super();

    this.loginWithAmazon = new LoginWithAmazon();
    dialogs.alert('About to login with Amazon')
    .then(() => {
      this.loginWithAmazon.login()
      .then(token => {
        console.log(`Found ${token}`);
      })
      .catch(error => {
        console.error(error);
      })
    })
  }
}
