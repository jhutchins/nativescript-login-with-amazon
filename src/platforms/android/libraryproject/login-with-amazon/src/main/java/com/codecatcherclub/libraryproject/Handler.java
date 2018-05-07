package com.codecatcherclub.libraryproject;

public interface Handler {
    void onSuccess(String token);

    void onError(Exception error);
}
