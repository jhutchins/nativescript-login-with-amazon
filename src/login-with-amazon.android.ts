import * as app from 'tns-core-modules/application';

export class LoginWithAmazon {
  private amazon: com.codecatcherclub.libraryproject.Amazon

  constructor() {
    this.amazon = new com.codecatcherclub.libraryproject.Amazon();
  }

  login(): Promise<string> {
    let context = com.amazon.identity.auth.device.api.workflow.RequestContext.create(app.android.foregroundActivity);
    let listener = app.on(app.resumeEvent, (args) => {
      context.onResume();
    });
    return new Promise((resolve, reject) => {
      this.amazon.login(context, new com.codecatcherclub.libraryproject.Handler({
        onSuccess(token: string) {
          resolve(token);
          app.off(app.resumeEvent, listener);
        },

        onError(error: javalangException) {
          reject(new Error(error.getMessage()));
          app.off(app.resumeEvent, listener);
        },
      }))
    })
  }
}
