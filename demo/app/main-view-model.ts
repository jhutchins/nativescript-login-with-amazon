import { Observable } from 'tns-core-modules/data/observable';
import { LoginWithAmazon } from 'nativescript-login-with-amazon';

export class HelloWorldModel extends Observable {
  public message: string;
  private loginWithAmazon: LoginWithAmazon;

  constructor() {
    super();

    this.loginWithAmazon = new LoginWithAmazon();
    this.message = this.loginWithAmazon.message;
  }
}
