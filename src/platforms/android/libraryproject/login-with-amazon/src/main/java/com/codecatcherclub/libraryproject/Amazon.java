package com.codecatcherclub.libraryproject;

import com.amazon.identity.auth.device.AuthError;
import com.amazon.identity.auth.device.api.authorization.AuthCancellation;
import com.amazon.identity.auth.device.api.authorization.AuthorizationManager;
import com.amazon.identity.auth.device.api.authorization.AuthorizeListener;
import com.amazon.identity.auth.device.api.authorization.AuthorizeRequest;
import com.amazon.identity.auth.device.api.authorization.AuthorizeResult;
import com.amazon.identity.auth.device.api.authorization.ProfileScope;
import com.amazon.identity.auth.device.api.workflow.RequestContext;

public class Amazon {

    public void login(final RequestContext context, final Handler handler) {
        context.registerListener(new Listener(context, handler));
        AuthorizationManager.authorize(new AuthorizeRequest
                .Builder(context)
                .addScopes(ProfileScope.profile())
                .build());
    }

    private static class Listener extends AuthorizeListener {

        private final RequestContext context;
        private final Handler handler;

        private Listener(final RequestContext context, final Handler handler) {
            this.context = context;
            this.handler = handler;
        }

        @Override
        public void onSuccess(AuthorizeResult authorizeResult) {
            this.handler.onSuccess(authorizeResult.getAccessToken());
            this.context.unregisterListener(this);
        }

        @Override
        public void onError(AuthError authError) {
            this.handler.onError(authError);
            this.context.unregisterListener(this);
        }

        @Override
        public void onCancel(AuthCancellation authCancellation) {
            this.onError(null);
            this.context.unregisterListener(this);
        }
    }
}
