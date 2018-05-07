/// <reference path="./_helpers.d.ts" />
import androidcontentContext = android.content.Context;
import androidnetUri = android.net.Uri;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.interactive.InteractiveRequest.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.interactive.InteractiveRequestRecord.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export abstract class AbstractRequest {
						public originalRequest: com.amazon.identity.auth.device.interactive.InteractiveRequest;
						public requestId: string;
						public incrementAttemptCount(): void;
						public getRequestId(): string;
						public canAttempt(): boolean;
						public getOriginalRequest(): com.amazon.identity.auth.device.interactive.InteractiveRequest;
						public getMaxAttemptCount(): number;
						public handleResponse(param0: androidnetUri, param1: androidcontentContext): boolean;
						public getInteractiveRequestRecord(): com.amazon.identity.auth.device.interactive.InteractiveRequestRecord;
						public constructor(param0: com.amazon.identity.auth.device.interactive.InteractiveRequest);
						public onStart(): void;
						public getUrl(param0: androidcontentContext): string;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export class AndroidManifest {
						public declaresWorkflowActivity(param0: androidcontentContext): boolean;
						public declaresAuthorizationActivity(param0: androidcontentContext): boolean;
					}
				}
			}
		}
	}
}

import javalangThrowable = java.lang.Throwable;
import androidosParcel = android.os.Parcel;
import androidcontentIntent = android.content.Intent;
import androidosBundle = android.os.Bundle;
import javalangClass = java.lang.Class;
import androidosIBinder = android.os.IBinder;
import androidosParcelableCreator = android.os.Parcelable.Creator;
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export class AuthError {
						public static AUTH_ERROR_EXECEPTION: string;
						public static RESULT_AUTH_ERROR: number;
						public static CREATOR: androidosParcelableCreator;
						public describeContents(): number;
						public constructor(param0: androidosParcel);
						public static getErrorBundle(param0: com.amazon.identity.auth.device.AuthError): androidosBundle;
						public static getErrorBundle(param0: javalangThrowable, param1: javalangClass, param2: com.amazon.identity.auth.device.AuthError.ERROR_TYPE): androidosBundle;
						public getType(): com.amazon.identity.auth.device.AuthError.ERROR_TYPE;
						public static getAuthError(param0: javalangThrowable, param1: javalangClass): com.amazon.identity.auth.device.AuthError;
						public toString(): string;
						public writeToParcel(param0: androidosParcel, param1: number): void;
						public asBinder(): androidosIBinder;
						public constructor(param0: string, param1: com.amazon.identity.auth.device.AuthError.ERROR_TYPE);
						public static getErrorBundle(param0: androidcontentIntent): androidosBundle;
						public getCategory(): com.amazon.identity.auth.device.AuthError.ERROR_CATEGORY;
						public static extractError(param0: androidosBundle): com.amazon.identity.auth.device.AuthError;
						public static extractError(param0: androidcontentIntent): com.amazon.identity.auth.device.AuthError;
						public constructor(param0: string, param1: javalangThrowable, param2: com.amazon.identity.auth.device.AuthError.ERROR_TYPE);
						public static getAuthError(param0: javalangThrowable, param1: javalangClass, param2: com.amazon.identity.auth.device.AuthError.ERROR_TYPE): com.amazon.identity.auth.device.AuthError;
					}
					export module AuthError {
						export class ERROR_CATEGORY {
							public static ACTION: com.amazon.identity.auth.device.AuthError.ERROR_CATEGORY;
							public static BAD_REQUEST: com.amazon.identity.auth.device.AuthError.ERROR_CATEGORY;
							public static NETWORK: com.amazon.identity.auth.device.AuthError.ERROR_CATEGORY;
							public static INTERNAL: com.amazon.identity.auth.device.AuthError.ERROR_CATEGORY;
							public static UNKNOWN: com.amazon.identity.auth.device.AuthError.ERROR_CATEGORY;
							public static values(): native.Array<com.amazon.identity.auth.device.AuthError.ERROR_CATEGORY>;
							public static valueOf(param0: string): com.amazon.identity.auth.device.AuthError.ERROR_CATEGORY;
						}
						export class ERROR_TYPE {
							public static ERROR_INVALID_TOKEN: com.amazon.identity.auth.device.AuthError.ERROR_TYPE;
							public static ERROR_INVALID_GRANT: com.amazon.identity.auth.device.AuthError.ERROR_TYPE;
							public static ERROR_INVALID_CLIENT: com.amazon.identity.auth.device.AuthError.ERROR_TYPE;
							public static ERROR_INVALID_SCOPE: com.amazon.identity.auth.device.AuthError.ERROR_TYPE;
							public static ERROR_UNAUTHORIZED_CLIENT: com.amazon.identity.auth.device.AuthError.ERROR_TYPE;
							public static ERROR_WEBVIEW_SSL: com.amazon.identity.auth.device.AuthError.ERROR_TYPE;
							public static ERROR_ACCESS_DENIED: com.amazon.identity.auth.device.AuthError.ERROR_TYPE;
							public static ERROR_COM: com.amazon.identity.auth.device.AuthError.ERROR_TYPE;
							public static ERROR_IO: com.amazon.identity.auth.device.AuthError.ERROR_TYPE;
							public static ERROR_BAD_PARAM: com.amazon.identity.auth.device.AuthError.ERROR_TYPE;
							public static ERROR_JSON: com.amazon.identity.auth.device.AuthError.ERROR_TYPE;
							public static ERROR_PARSE: com.amazon.identity.auth.device.AuthError.ERROR_TYPE;
							public static ERROR_SERVER_REPSONSE: com.amazon.identity.auth.device.AuthError.ERROR_TYPE;
							public static ERROR_DATA_STORAGE: com.amazon.identity.auth.device.AuthError.ERROR_TYPE;
							public static ERROR_THREAD: com.amazon.identity.auth.device.AuthError.ERROR_TYPE;
							public static ERROR_DCP_DMS: com.amazon.identity.auth.device.AuthError.ERROR_TYPE;
							public static ERROR_FORCE_UPDATE: com.amazon.identity.auth.device.AuthError.ERROR_TYPE;
							public static ERROR_REVOKE_AUTH: com.amazon.identity.auth.device.AuthError.ERROR_TYPE;
							public static ERROR_AUTH_DIALOG: com.amazon.identity.auth.device.AuthError.ERROR_TYPE;
							public static ERROR_BAD_API_PARAM: com.amazon.identity.auth.device.AuthError.ERROR_TYPE;
							public static ERROR_INIT: com.amazon.identity.auth.device.AuthError.ERROR_TYPE;
							public static ERROR_RESOURCES: com.amazon.identity.auth.device.AuthError.ERROR_TYPE;
							public static ERROR_DIRECTED_ID_NOT_FOUND: com.amazon.identity.auth.device.AuthError.ERROR_TYPE;
							public static ERROR_INVALID_API: com.amazon.identity.auth.device.AuthError.ERROR_TYPE;
							public static ERROR_SECURITY: com.amazon.identity.auth.device.AuthError.ERROR_TYPE;
							public static ERROR_UNKNOWN: com.amazon.identity.auth.device.AuthError.ERROR_TYPE;
							public static ERROR_REGISTRATION: com.amazon.identity.auth.device.AuthError.ERROR_TYPE;
							public static ERROR_MISSING_CODE_CHALLENGE: com.amazon.identity.auth.device.AuthError.ERROR_TYPE;
							public static ERROR_MISSING_TOKEN_FOR_REQUIRED_SCOPES: com.amazon.identity.auth.device.AuthError.ERROR_TYPE;
							public static fromValue(param0: number): com.amazon.identity.auth.device.AuthError.ERROR_TYPE;
							public static values(): native.Array<com.amazon.identity.auth.device.AuthError.ERROR_TYPE>;
							public getCategory(): com.amazon.identity.auth.device.AuthError.ERROR_CATEGORY;
							public static valueOf(param0: string): com.amazon.identity.auth.device.AuthError.ERROR_TYPE;
							public value(): number;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export class CompatibilityUtil {
						public static assertCorrectManifestIntegration(param0: androidcontentContext): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.AbstractRequest.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export class ExternalBrowserManager {
						public constructor();
						public openUrl(param0: com.amazon.identity.auth.device.AbstractRequest, param1: string, param2: androidcontentContext): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.IAuthError.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export class IAuthError {
						/**
						 * Constructs a new instance of the com.amazon.identity.auth.device.IAuthError interface with the provided implementation.
						 */
						public constructor(implementation: {
						});
					}
					export module IAuthError {
						export abstract class Stub {
							public constructor();
							public static asInterface(param0: androidosIBinder): com.amazon.identity.auth.device.IAuthError;
							public asBinder(): androidosIBinder;
							public onTransact(param0: number, param1: androidosParcel, param2: androidosParcel, param3: number): boolean;
						}
						export module Stub {
							export class Proxy {
								public getInterfaceDescriptor(): string;
								public asBinder(): androidosIBinder;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export class InsufficientScopeAuthError extends com.amazon.identity.auth.device.AuthError {
						public constructor(param0: string, param1: com.amazon.identity.auth.device.AuthError.ERROR_TYPE);
						public constructor(param0: androidosParcel);
						public constructor(param0: string, param1: javalangThrowable, param2: com.amazon.identity.auth.device.AuthError.ERROR_TYPE);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export class InvalidGrantAuthError extends com.amazon.identity.auth.device.AuthError {
						public constructor(param0: string, param1: com.amazon.identity.auth.device.AuthError.ERROR_TYPE);
						public constructor(param0: androidosParcel);
						public constructor(param0: string, param1: javalangThrowable, param2: com.amazon.identity.auth.device.AuthError.ERROR_TYPE);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export class InvalidTokenAuthError extends com.amazon.identity.auth.device.AuthError {
						public constructor(param0: string, param1: com.amazon.identity.auth.device.AuthError.ERROR_TYPE);
						public constructor(param0: androidosParcel);
						public constructor(param0: string, param1: javalangThrowable, param2: com.amazon.identity.auth.device.AuthError.ERROR_TYPE);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.AbstractRequest.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.ExternalBrowserManager.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.api.workflow.RequestContext.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export class RequestManager {
						public static STATE_PARAMETER_NAME: string;
						public static REQUEST_ID_FIELD: string;
						public static setInstance(param0: com.amazon.identity.auth.device.RequestManager): void;
						public static getRequestIdFromResponseUri(param0: androidnetUri): string;
						public static getInstance(): com.amazon.identity.auth.device.RequestManager;
						public executeRequest(param0: com.amazon.identity.auth.device.AbstractRequest, param1: androidcontentContext): void;
						public handleResponse(param0: androidnetUri, param1: androidcontentContext, param2: com.amazon.identity.auth.device.api.workflow.RequestContext): boolean;
						public constructor(param0: com.amazon.identity.auth.device.ExternalBrowserManager);
						public handleResponse(param0: androidnetUri, param1: androidcontentContext): boolean;
						public static isInteractiveRequest(param0: androidnetUri): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export class ResponseManager {
						public constructor();
						public putPendingResponse(param0: string, param1: androidnetUri): void;
						public static getInstance(): com.amazon.identity.auth.device.ResponseManager;
						public size(): number;
						public removePendingResponse(param0: string): androidnetUri;
						public hasPendingResponseForRequest(param0: string): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.api.authorization.Region.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export class StoredPreferences {
						public constructor();
						public static setTokenObtainedFromSSO(param0: androidcontentContext, param1: boolean): void;
						public static getRegion(param0: androidcontentContext): com.amazon.identity.auth.device.api.authorization.Region;
						public static isTokenObtainedFromSSO(param0: androidcontentContext): boolean;
						public static setRegion(param0: androidcontentContext, param1: com.amazon.identity.auth.device.api.authorization.Region): void;
						public static setSandboxMode(param0: androidcontentContext, param1: boolean): void;
						public static isSandboxMode(param0: androidcontentContext): boolean;
					}
				}
			}
		}
	}
}

import javalangObject = java.lang.Object;
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module api {
						export class CancellableListener {
							/**
							 * Constructs a new instance of the com.amazon.identity.auth.device.api.CancellableListener interface with the provided implementation.
							 */
							public constructor(implementation: {
								onSuccess(param0: javalangObject): void;
								onError(param0: javalangObject): void;
								onCancel(param0: javalangObject): void;
								onSuccess(param0: javalangObject): void;
								onError(param0: javalangObject): void;
							});
							public onSuccess(param0: javalangObject): void;
							public onError(param0: javalangObject): void;
							public onCancel(param0: javalangObject): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module api {
						export class InvalidIntegrationException {
							public constructor();
							public constructor(param0: string);
							public constructor(param0: string, param1: javalangThrowable);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module api {
						export class Listener {
							/**
							 * Constructs a new instance of the com.amazon.identity.auth.device.api.Listener interface with the provided implementation.
							 */
							public constructor(implementation: {
								onSuccess(param0: javalangObject): void;
								onError(param0: javalangObject): void;
							});
							public onSuccess(param0: javalangObject): void;
							public onError(param0: javalangObject): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module api {
						export class SDKInfo {
							/**
							 * Constructs a new instance of the com.amazon.identity.auth.device.api.SDKInfo interface with the provided implementation.
							 */
							public constructor(implementation: {
							});
							public static VERSION: string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module api {
						export module authorization {
							export class AuthCancellation {
								public equals(param0: javalangObject): boolean;
								public toString(): string;
								public getDescription(): string;
								public getCause(): com.amazon.identity.auth.device.api.authorization.AuthCancellation.Cause;
								public constructor(param0: com.amazon.identity.auth.device.api.authorization.AuthCancellation.Cause, param1: string);
								public hashCode(): number;
							}
							export module AuthCancellation {
								export class Cause {
									public static FAILED_AUTHENTICATION: com.amazon.identity.auth.device.api.authorization.AuthCancellation.Cause;
									public static valueOf(param0: string): com.amazon.identity.auth.device.api.authorization.AuthCancellation.Cause;
									public static values(): native.Array<com.amazon.identity.auth.device.api.authorization.AuthCancellation.Cause>;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.api.Listener.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.api.authorization.AuthorizeRequest.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.api.authorization.Region.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.api.authorization.Scope.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module api {
						export module authorization {
							export class AuthorizationManager {
								public static setRegion(param0: androidcontentContext, param1: com.amazon.identity.auth.device.api.authorization.Region): void;
								public static authorize(param0: com.amazon.identity.auth.device.api.authorization.AuthorizeRequest): void;
								public static signOut(param0: androidcontentContext, param1: com.amazon.identity.auth.device.api.Listener): void;
								public constructor();
								public static isSandboxMode(param0: androidcontentContext): boolean;
								public static setSandboxMode(param0: androidcontentContext, param1: boolean): void;
								public static getRegion(param0: androidcontentContext): com.amazon.identity.auth.device.api.authorization.Region;
								public static getToken(param0: androidcontentContext, param1: native.Array<com.amazon.identity.auth.device.api.authorization.Scope>, param2: com.amazon.identity.auth.device.api.Listener): void;
							}
						}
					}
				}
			}
		}
	}
}

import javalangException = java.lang.Exception;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.AuthError.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.api.authorization.AuthCancellation.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.api.authorization.AuthorizeResult.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.interactive.InteractiveRequestRecord.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.workflow.WorkflowCancellation.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module api {
						export module authorization {
							export abstract class AuthorizeListener {
								public onCancel(param0: com.amazon.identity.auth.device.api.authorization.AuthCancellation): void;
								public onSuccess(param0: javalangObject): void;
								public getRequestType(): string;
								public onSuccess(param0: com.amazon.identity.auth.device.api.authorization.AuthorizeResult): void;
								public onRequestError(param0: androidcontentContext, param1: com.amazon.identity.auth.device.interactive.InteractiveRequestRecord, param2: javalangException): void;
								public onRequestCompletion(param0: androidcontentContext, param1: com.amazon.identity.auth.device.interactive.InteractiveRequestRecord, param2: androidnetUri): void;
								public onCancel(param0: javalangObject): void;
								public constructor();
								public onError(param0: com.amazon.identity.auth.device.AuthError): void;
								public onRequestCancel(param0: androidcontentContext, param1: com.amazon.identity.auth.device.interactive.InteractiveRequestRecord, param2: com.amazon.identity.auth.device.workflow.WorkflowCancellation): void;
								public onError(param0: javalangObject): void;
							}
						}
					}
				}
			}
		}
	}
}

import javautilList = java.util.List;
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.api.authorization.AuthorizeRequest.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.api.authorization.Scope.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.api.workflow.RequestContext.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.interactive.InteractiveRequest.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module api {
						export module authorization {
							export class AuthorizeRequest extends com.amazon.identity.auth.device.interactive.InteractiveRequest {
								public addScope(param0: com.amazon.identity.auth.device.api.authorization.Scope): void;
								public getGrantType(): com.amazon.identity.auth.device.api.authorization.AuthorizeRequest.GrantType;
								public setGrantType(param0: com.amazon.identity.auth.device.api.authorization.AuthorizeRequest.GrantType): void;
								public addScopes(param0: native.Array<com.amazon.identity.auth.device.api.authorization.Scope>): void;
								public setScopes(param0: javautilList): void;
								public getCodeChallenge(): string;
								public onSuccess(param0: javalangObject): void;
								public getRequestType(): string;
								public setCodeChallengeMethod(param0: string): void;
								public getCodeChallengeMethod(): string;
								public shouldReturnUserData(): boolean;
								public setShouldReturnUserData(param0: boolean): void;
								public onCancel(param0: javalangObject): void;
								public getRequestExtras(): androidosBundle;
								public getListenerClass(): javalangClass;
								public onError(param0: javalangObject): void;
								public setProofKeyParameters(param0: string, param1: string): void;
								public getScopes(): javautilList;
								public setCodeChallenge(param0: string): void;
							}
							export module AuthorizeRequest {
								export class Builder extends com.amazon.identity.auth.device.interactive.InteractiveRequest.Builder {
									public addScopes(param0: native.Array<com.amazon.identity.auth.device.api.authorization.Scope>): com.amazon.identity.auth.device.api.authorization.AuthorizeRequest.Builder;
									public constructor(param0: com.amazon.identity.auth.device.api.workflow.RequestContext);
									public withProofKeyParameters(param0: string, param1: string): com.amazon.identity.auth.device.api.authorization.AuthorizeRequest.Builder;
									public shouldReturnUserData(param0: boolean): com.amazon.identity.auth.device.api.authorization.AuthorizeRequest.Builder;
									public addScope(param0: com.amazon.identity.auth.device.api.authorization.Scope): com.amazon.identity.auth.device.api.authorization.AuthorizeRequest.Builder;
									public build(): com.amazon.identity.auth.device.interactive.InteractiveRequest;
									public forGrantType(param0: com.amazon.identity.auth.device.api.authorization.AuthorizeRequest.GrantType): com.amazon.identity.auth.device.api.authorization.AuthorizeRequest.Builder;
									public build(): com.amazon.identity.auth.device.api.authorization.AuthorizeRequest;
								}
								export class GrantType {
									public static ACCESS_TOKEN: com.amazon.identity.auth.device.api.authorization.AuthorizeRequest.GrantType;
									public static AUTHORIZATION_CODE: com.amazon.identity.auth.device.api.authorization.AuthorizeRequest.GrantType;
									public static values(): native.Array<com.amazon.identity.auth.device.api.authorization.AuthorizeRequest.GrantType>;
									public static valueOf(param0: string): com.amazon.identity.auth.device.api.authorization.AuthorizeRequest.GrantType;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.amazon.identity.auth.device.api.authorization.User.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module api {
						export module authorization {
							export class AuthorizeResult {
								public equals(param0: javalangObject): boolean;
								public getAccessToken(): string;
								public getRedirectURI(): string;
								public getUser(): com.amazon.identity.auth.device.api.authorization.User;
								public getAuthorizationCode(): string;
								public getClientId(): string;
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.amazon.identity.auth.device.api.authorization.Scope.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module api {
						export module authorization {
							export class ProfileScope {
								public static profile(): com.amazon.identity.auth.device.api.authorization.Scope;
								public static userId(): com.amazon.identity.auth.device.api.authorization.Scope;
								public static postalCode(): com.amazon.identity.auth.device.api.authorization.Scope;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module api {
						export module authorization {
							export class Region {
								public static AUTO: com.amazon.identity.auth.device.api.authorization.Region;
								public static NA: com.amazon.identity.auth.device.api.authorization.Region;
								public static EU: com.amazon.identity.auth.device.api.authorization.Region;
								public static FE: com.amazon.identity.auth.device.api.authorization.Region;
								public getStringValue(): string;
								public static valueOf(param0: string): com.amazon.identity.auth.device.api.authorization.Region;
								public static values(): native.Array<com.amazon.identity.auth.device.api.authorization.Region>;
							}
						}
					}
				}
			}
		}
	}
}

import orgjsonJSONObject = org.json.JSONObject;
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module api {
						export module authorization {
							export class Scope {
								/**
								 * Constructs a new instance of the com.amazon.identity.auth.device.api.authorization.Scope interface with the provided implementation.
								 */
								public constructor(implementation: {
									getName(): string;
									getScopeData(): orgjsonJSONObject;
								});
								public getName(): string;
								public getScopeData(): orgjsonJSONObject;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.amazon.identity.auth.device.api.authorization.Scope.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module api {
						export module authorization {
							export class ScopeFactory {
								public static scopeNamed(param0: string): com.amazon.identity.auth.device.api.authorization.Scope;
								public static scopeNamed(param0: string, param1: orgjsonJSONObject): com.amazon.identity.auth.device.api.authorization.Scope;
							}
							export module ScopeFactory {
								export class GenericScope {
									public hashCode(): number;
									public getName(): string;
									public getScopeData(): orgjsonJSONObject;
									public equals(param0: javalangObject): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

import javautilMap = java.util.Map;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.api.Listener.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module api {
						export module authorization {
							export class User {
								public equals(param0: javalangObject): boolean;
								public toString(): string;
								public getUserEmail(): string;
								public getUserId(): string;
								public getUserPostalCode(): string;
								public static fetch(param0: androidcontentContext, param1: com.amazon.identity.auth.device.api.Listener): void;
								public getUserName(): string;
								public getUserInfo(): javautilMap;
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

import androidutilAttributeSet = android.util.AttributeSet;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module api {
						export module authorization {
							export module widget {
								export class SignInButton {
									public setStyle(param0: com.amazon.identity.auth.device.api.authorization.widget.SignInButton.Style): void;
									public setColor(param0: com.amazon.identity.auth.device.api.authorization.widget.SignInButton.Color): void;
									public setPressed(param0: boolean): void;
									public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number);
								}
								export module SignInButton {
									export class Color {
										public static GOLD: com.amazon.identity.auth.device.api.authorization.widget.SignInButton.Color;
										public static GRAY: com.amazon.identity.auth.device.api.authorization.widget.SignInButton.Color;
										public static DARK_GRAY: com.amazon.identity.auth.device.api.authorization.widget.SignInButton.Color;
										public static valueOf(param0: string): com.amazon.identity.auth.device.api.authorization.widget.SignInButton.Color;
										public static values(): native.Array<com.amazon.identity.auth.device.api.authorization.widget.SignInButton.Color>;
									}
									export class Style {
										public static A_WITH_SMILE: com.amazon.identity.auth.device.api.authorization.widget.SignInButton.Style;
										public static LOGIN: com.amazon.identity.auth.device.api.authorization.widget.SignInButton.Style;
										public static LOGIN_WITH_AMAZON: com.amazon.identity.auth.device.api.authorization.widget.SignInButton.Style;
										public static valueOf(param0: string): com.amazon.identity.auth.device.api.authorization.widget.SignInButton.Style;
										public static values(): native.Array<com.amazon.identity.auth.device.api.authorization.widget.SignInButton.Style>;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module api {
						export module workflow {
							export class ListenerNotFoundException extends com.amazon.identity.auth.device.api.InvalidIntegrationException {
								public constructor();
								public constructor(param0: string, param1: javalangThrowable);
								public constructor(param0: string);
							}
						}
					}
				}
			}
		}
	}
}

import androidappActivity = android.app.Activity;
import androidappFragment = android.app.Fragment;
import androidsupportv4appFragmentActivity = android.support.v4.app.FragmentActivity;
import androidsupportv4appFragment = android.support.v4.app.Fragment;
import javautilSet = java.util.Set;
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.app.Fragment.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.support.v4.app.Fragment.d.ts" />
/// <reference path="./android.support.v4.app.FragmentActivity.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.interactive.InteractiveAPI.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.interactive.InteractiveListener.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.interactive.InteractiveRequest.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.interactive.InteractiveRequestRecord.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module api {
						export module workflow {
							export class RequestContext {
								public assertListenerPresent(param0: com.amazon.identity.auth.device.interactive.InteractiveAPI): void;
								public getContext(): androidcontentContext;
								public getAggregateListener(param0: com.amazon.identity.auth.device.interactive.InteractiveRequest): com.amazon.identity.auth.device.interactive.InteractiveListener;
								public onResume(): void;
								public processResponse(param0: com.amazon.identity.auth.device.interactive.InteractiveRequestRecord, param1: androidnetUri): void;
								public static create(param0: androidappFragment): com.amazon.identity.auth.device.api.workflow.RequestContext;
								public static create(param0: androidappActivity): com.amazon.identity.auth.device.api.workflow.RequestContext;
								public getListeners(param0: com.amazon.identity.auth.device.interactive.InteractiveAPI, param1: javalangClass): javautilSet;
								public registerListener(param0: com.amazon.identity.auth.device.interactive.InteractiveListener): void;
								public static create(param0: androidsupportv4appFragmentActivity): com.amazon.identity.auth.device.api.workflow.RequestContext;
								public static create(param0: androidsupportv4appFragment): com.amazon.identity.auth.device.api.workflow.RequestContext;
								public unregisterListener(param0: com.amazon.identity.auth.device.interactive.InteractiveListener): boolean;
								public onStartRequest(param0: com.amazon.identity.auth.device.interactive.InteractiveRequestRecord): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.dataobject.AppInfo.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module appid {
						export class APIKeyDecoder {
							public static KEY_ENDPOINTS: string;
							public static KEY_AUTHORIZATION_HOST: string;
							public static KEY_EXCHANGE_HOST: string;
							public static decode(param0: string, param1: string, param2: androidcontentContext): com.amazon.identity.auth.device.dataobject.AppInfo;
							public static extractAppInfo(param0: orgjsonJSONObject): com.amazon.identity.auth.device.dataobject.AppInfo;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.dataobject.AppInfo.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.utils.ThirdPartyResourceParser.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module appid {
						export abstract class AbstractAppIdentifier {
							public constructor();
							public getAppFamilyId(param0: string, param1: androidcontentContext): string;
							public isAPIKeyValid(param0: string, param1: string, param2: androidcontentContext): boolean;
							public getAppInfoFromAPIKey(param0: string, param1: androidcontentContext): com.amazon.identity.auth.device.dataobject.AppInfo;
							public getPackageNames(param0: string, param1: androidcontentContext): native.Array<string>;
							public getAppVariantId(param0: string, param1: androidcontentContext): string;
							public isAPIKeyValid(param0: androidcontentContext): boolean;
							public getResourceParser(param0: androidcontentContext, param1: string): com.amazon.identity.auth.device.utils.ThirdPartyResourceParser;
							public getAppInfo(param0: string, param1: androidcontentContext): com.amazon.identity.auth.device.dataobject.AppInfo;
							public getPackageNameByVariant(param0: string, param1: androidcontentContext): string;
							public isAPIKeyValid(param0: string, param1: androidcontentContext): boolean;
							public getAppLabel(param0: string, param1: androidcontentContext): string;
							public getAllowedScopes(param0: string, param1: androidcontentContext): native.Array<string>;
							public getAppPermissions(param0: string, param1: androidcontentContext): native.Array<string>;
							public getPackageName(param0: string, param1: androidcontentContext): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.dataobject.AppInfo.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module appid {
						export class AppIdentifier {
							/**
							 * Constructs a new instance of the com.amazon.identity.auth.device.appid.AppIdentifier interface with the provided implementation.
							 */
							public constructor(implementation: {
								isAPIKeyValid(param0: androidcontentContext): boolean;
								isAPIKeyValid(param0: string, param1: androidcontentContext): boolean;
								isAPIKeyValid(param0: string, param1: string, param2: androidcontentContext): boolean;
								getAppInfo(param0: string, param1: androidcontentContext): com.amazon.identity.auth.device.dataobject.AppInfo;
								getAppFamilyId(param0: string, param1: androidcontentContext): string;
								getAppVariantId(param0: string, param1: androidcontentContext): string;
								getPackageName(param0: string, param1: androidcontentContext): string;
								getPackageNames(param0: string, param1: androidcontentContext): native.Array<string>;
								getPackageNameByVariant(param0: string, param1: androidcontentContext): string;
								getAllowedScopes(param0: string, param1: androidcontentContext): native.Array<string>;
								getAppPermissions(param0: string, param1: androidcontentContext): native.Array<string>;
								getAppLabel(param0: string, param1: androidcontentContext): string;
							});
							public getAppInfo(param0: string, param1: androidcontentContext): com.amazon.identity.auth.device.dataobject.AppInfo;
							public getAppFamilyId(param0: string, param1: androidcontentContext): string;
							public getPackageNameByVariant(param0: string, param1: androidcontentContext): string;
							public isAPIKeyValid(param0: string, param1: androidcontentContext): boolean;
							public isAPIKeyValid(param0: string, param1: string, param2: androidcontentContext): boolean;
							public getAppLabel(param0: string, param1: androidcontentContext): string;
							public getAppVariantId(param0: string, param1: androidcontentContext): string;
							public getPackageNames(param0: string, param1: androidcontentContext): native.Array<string>;
							public getAllowedScopes(param0: string, param1: androidcontentContext): native.Array<string>;
							public getAppPermissions(param0: string, param1: androidcontentContext): native.Array<string>;
							public isAPIKeyValid(param0: androidcontentContext): boolean;
							public getPackageName(param0: string, param1: androidcontentContext): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.dataobject.AppInfo.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module appid {
						export class ThirdPartyAppIdentifier extends com.amazon.identity.auth.device.appid.AbstractAppIdentifier {
							public constructor();
							public getAppFamilyId(param0: string, param1: androidcontentContext): string;
							public getAppInfoByApiKey(param0: string, param1: string, param2: androidcontentContext): com.amazon.identity.auth.device.dataobject.AppInfo;
							public isAPIKeyValid(param0: string, param1: string, param2: androidcontentContext): boolean;
							public getPackageNames(param0: string, param1: androidcontentContext): native.Array<string>;
							public getAppVariantId(param0: string, param1: androidcontentContext): string;
							public isAPIKeyValid(param0: androidcontentContext): boolean;
							public getRedirectUrl(param0: androidcontentContext): string;
							public getAppInfo(param0: string, param1: androidcontentContext): com.amazon.identity.auth.device.dataobject.AppInfo;
							public getPackageNameByVariant(param0: string, param1: androidcontentContext): string;
							public isAPIKeyValid(param0: string, param1: androidcontentContext): boolean;
							public getAppLabel(param0: string, param1: androidcontentContext): string;
							public isAPIKeyValidFormat(param0: string, param1: string, param2: androidcontentContext): boolean;
							public getAllowedScopes(param0: string, param1: androidcontentContext): native.Array<string>;
							public getAppPermissions(param0: string, param1: androidcontentContext): native.Array<string>;
							public getPackageName(param0: string, param1: androidcontentContext): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.authorization.AmazonAuthorizationServiceInterface.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module authorization {
						export class AmazonAuthorizationServiceInterface {
							/**
							 * Constructs a new instance of the com.amazon.identity.auth.device.authorization.AmazonAuthorizationServiceInterface interface with the provided implementation.
							 */
							public constructor(implementation: {
								authorize(param0: androidosBundle, param1: string, param2: native.Array<string>): androidosBundle;
								getToken(param0: androidosBundle, param1: string, param2: native.Array<string>): androidosBundle;
								clearAuthorizationState(param0: androidosBundle, param1: string): androidosBundle;
								openWorkflow(param0: androidosBundle, param1: string, param2: string, param3: string): androidosBundle;
								getMetaData(): androidosBundle;
							});
							public openWorkflow(param0: androidosBundle, param1: string, param2: string, param3: string): androidosBundle;
							public clearAuthorizationState(param0: androidosBundle, param1: string): androidosBundle;
							public getToken(param0: androidosBundle, param1: string, param2: native.Array<string>): androidosBundle;
							public getMetaData(): androidosBundle;
							public authorize(param0: androidosBundle, param1: string, param2: native.Array<string>): androidosBundle;
						}
						export module AmazonAuthorizationServiceInterface {
							export abstract class Stub {
								public clearAuthorizationState(param0: androidosBundle, param1: string): androidosBundle;
								public authorize(param0: androidosBundle, param1: string, param2: native.Array<string>): androidosBundle;
								public getToken(param0: androidosBundle, param1: string, param2: native.Array<string>): androidosBundle;
								public static asInterface(param0: androidosIBinder): com.amazon.identity.auth.device.authorization.AmazonAuthorizationServiceInterface;
								public onTransact(param0: number, param1: androidosParcel, param2: androidosParcel, param3: number): boolean;
								public openWorkflow(param0: androidosBundle, param1: string, param2: string, param3: string): androidosBundle;
								public getMetaData(): androidosBundle;
								public constructor();
								public asBinder(): androidosIBinder;
							}
							export module Stub {
								export class Proxy {
									public clearAuthorizationState(param0: androidosBundle, param1: string): androidosBundle;
									public getInterfaceDescriptor(): string;
									public authorize(param0: androidosBundle, param1: string, param2: native.Array<string>): androidosBundle;
									public getToken(param0: androidosBundle, param1: string, param2: native.Array<string>): androidosBundle;
									public getMetaData(): androidosBundle;
									public asBinder(): androidosIBinder;
									public openWorkflow(param0: androidosBundle, param1: string, param2: string, param3: string): androidosBundle;
								}
							}
						}
					}
				}
			}
		}
	}
}

import androidosIInterface = android.os.IInterface;
/// <reference path="./android.os.IInterface.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.AuthError.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module authorization {
						export class AmazonServiceListener {
							/**
							 * Constructs a new instance of the com.amazon.identity.auth.device.authorization.AmazonServiceListener interface with the provided implementation.
							 */
							public constructor(implementation: {
								onBindSuccess(param0: androidosIInterface): void;
								onBindError(param0: com.amazon.identity.auth.device.AuthError): void;
							});
							public onBindSuccess(param0: androidosIInterface): void;
							public onBindError(param0: com.amazon.identity.auth.device.AuthError): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module authorization {
						export class AuthorizationActivity {
							public constructor();
							public onCreate(param0: androidosBundle): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.authorization.api.AuthorizationListener.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.dataobject.AppInfo.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module authorization {
						export class AuthorizationHelper {
							public static AUTHZ_QUERY_PARAMS: string;
							public constructor();
							public static getOAuth2ErrorUrl(param0: androidcontentContext): string;
							public static getCustomQueryParams(param0: androidosBundle): string;
							public static getOAuth2Url(param0: androidcontentContext, param1: string, param2: string, param3: native.Array<string>, param4: string, param5: boolean, param6: boolean, param7: androidosBundle, param8: com.amazon.identity.auth.device.dataobject.AppInfo): string;
							public static getCommonScopesForAuthorization(param0: androidcontentContext, param1: native.Array<string>, param2: javautilList): native.Array<string>;
							public static sendAuthorizationCodeAsResponse(param0: string, param1: string, param2: string, param3: com.amazon.identity.auth.device.authorization.api.AuthorizationListener): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.api.authorization.AuthorizeRequest.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.authorization.api.AuthorizationListener.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.dataobject.AppInfo.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.interactive.InteractiveRequest.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module authorization {
						export class AuthorizationRequest extends com.amazon.identity.auth.device.AbstractRequest {
							public handleResponse(param0: androidnetUri, param1: androidcontentContext): boolean;
							public getUrl(param0: androidcontentContext): string;
							public constructor(param0: com.amazon.identity.auth.device.api.authorization.AuthorizeRequest, param1: string, param2: native.Array<string>, param3: androidosBundle, param4: com.amazon.identity.auth.device.dataobject.AppInfo, param5: com.amazon.identity.auth.device.authorization.api.AuthorizationListener);
							public constructor(param0: com.amazon.identity.auth.device.interactive.InteractiveRequest);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module authorization {
						export class AuthorizationResponseParser {
							public static CLIENT_REQUEST_ID_STATE: string;
							public static REDIRECT_URI_STATE: string;
							public static CLIENT_ID_STATE: string;
							public static SCOPE: string;
							public static CODE: string;
							public static RESPONSE_URL: string;
							public static ERROR: string;
							public static ERROR_DESCRIPTION: string;
							public static ERROR_ACCESS_DENIED: string;
							public static ERROR_INVALID_ATN_TOKEN: string;
							public static ACCESS_NOT_PERMITTED: string;
							public static ACCESS_NOT_PERMITTED_ALT: string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.authorization.api.AuthorizationListener.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module authorization {
						export class AuthorizationResponseProcessor {
							public constructor();
							public static handleResponse(param0: androidcontentContext, param1: androidnetUri, param2: native.Array<string>, param3: boolean, param4: com.amazon.identity.auth.device.authorization.api.AuthorizationListener): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.os.IInterface.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module authorization {
						export class AuthorizationServiceConnection extends com.amazon.identity.auth.device.authorization.MAPServiceConnection {
							public constructor();
							public getServiceInterface(param0: androidosIBinder): androidosIInterface;
							public getServiceInterfaceClass(): javalangClass;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module authorization {
						export class BuildConfig {
							public static DEBUG: boolean;
							public constructor();
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module authorization {
						export class CodeChallengeWorkflow {
							public static CODE_CHALLENGE_KEY: string;
							public static CODE_CHALLENGE_METHOD_KEY: string;
							public getProofKeyParameters(): androidosBundle;
							public getCodeVerifier(): string;
							public static getInstance(): com.amazon.identity.auth.device.authorization.CodeChallengeWorkflow;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.api.authorization.Region.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.authorization.Service.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.authorization.Stage.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.dataobject.AppInfo.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module authorization {
						export class EndpointDomainBuilder {
							public forStage(param0: com.amazon.identity.auth.device.authorization.Stage): com.amazon.identity.auth.device.authorization.EndpointDomainBuilder;
							public forRegion(param0: com.amazon.identity.auth.device.api.authorization.Region): com.amazon.identity.auth.device.authorization.EndpointDomainBuilder;
							public constructor(param0: androidcontentContext, param1: com.amazon.identity.auth.device.dataobject.AppInfo);
							public getDomain(): string;
							public forService(param0: com.amazon.identity.auth.device.authorization.Service): com.amazon.identity.auth.device.authorization.EndpointDomainBuilder;
							public forSandbox(param0: boolean): com.amazon.identity.auth.device.authorization.EndpointDomainBuilder;
							public getRegionForAPIKey(): com.amazon.identity.auth.device.api.authorization.Region;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.IAuthError.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.authorization.IAuthorizationListener.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module authorization {
						export class IAuthorizationListener {
							/**
							 * Constructs a new instance of the com.amazon.identity.auth.device.authorization.IAuthorizationListener interface with the provided implementation.
							 */
							public constructor(implementation: {
								onSuccess(param0: androidosBundle): void;
								onError(param0: com.amazon.identity.auth.device.IAuthError): void;
								onCancel(param0: androidosBundle): void;
							});
							public onCancel(param0: androidosBundle): void;
							public onError(param0: com.amazon.identity.auth.device.IAuthError): void;
							public onSuccess(param0: androidosBundle): void;
						}
						export module IAuthorizationListener {
							export abstract class Stub {
								public static asInterface(param0: androidosIBinder): com.amazon.identity.auth.device.authorization.IAuthorizationListener;
								public onTransact(param0: number, param1: androidosParcel, param2: androidosParcel, param3: number): boolean;
								public onCancel(param0: androidosBundle): void;
								public onSuccess(param0: androidosBundle): void;
								public constructor();
								public asBinder(): androidosIBinder;
								public onError(param0: com.amazon.identity.auth.device.IAuthError): void;
							}
							export module Stub {
								export class Proxy {
									public onCancel(param0: androidosBundle): void;
									public onSuccess(param0: androidosBundle): void;
									public onError(param0: com.amazon.identity.auth.device.IAuthError): void;
									public getInterfaceDescriptor(): string;
									public asBinder(): androidosIBinder;
								}
							}
						}
					}
				}
			}
		}
	}
}

import javautilconcurrentFuture = java.util.concurrent.Future;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.api.authorization.AuthorizeRequest.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.api.authorization.Region.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.authorization.api.AuthorizationListener.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.shared.APIListener.d.ts" />
/// <reference path="./java.util.concurrent.Future.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module authorization {
						export class InternalAuthManager {
							public static getInstance(param0: androidcontentContext): com.amazon.identity.auth.device.authorization.InternalAuthManager;
							public getRedirectURI(param0: androidcontentContext): string;
							public constructor(param0: androidcontentContext);
							public getToken(param0: androidcontentContext, param1: native.Array<string>, param2: com.amazon.identity.auth.device.shared.APIListener): javautilconcurrentFuture;
							public clearAuthorizationState(param0: androidcontentContext, param1: com.amazon.identity.auth.device.shared.APIListener): javautilconcurrentFuture;
							public authorize(param0: com.amazon.identity.auth.device.api.authorization.AuthorizeRequest, param1: androidcontentContext, param2: native.Array<string>, param3: androidosBundle, param4: com.amazon.identity.auth.device.authorization.api.AuthorizationListener): javautilconcurrentFuture;
							public setRegion(param0: androidcontentContext, param1: com.amazon.identity.auth.device.api.authorization.Region): void;
							public isAPIKeyValid(param0: androidcontentContext): boolean;
							public getRegion(param0: androidcontentContext): com.amazon.identity.auth.device.api.authorization.Region;
							public getClientId(): string;
							public getProfile(param0: androidcontentContext, param1: androidosBundle, param2: com.amazon.identity.auth.device.shared.APIListener): javautilconcurrentFuture;
						}
					}
				}
			}
		}
	}
}

import androidcontentComponentName = android.content.ComponentName;
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.os.IInterface.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.authorization.AmazonServiceListener.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module authorization {
						export abstract class MAPServiceConnection {
							public mService: androidosIInterface;
							public mListener: com.amazon.identity.auth.device.authorization.AmazonServiceListener;
							public constructor();
							public onServiceConnected(param0: androidcontentComponentName, param1: androidosIBinder): void;
							public getServiceInterface(param0: androidosIBinder): androidosIInterface;
							public getServiceInterfaceClass(): javalangClass;
							public isValidService(param0: androidosIBinder): boolean;
							public setServiceListener(param0: com.amazon.identity.auth.device.authorization.AmazonServiceListener): void;
							public onServiceDisconnected(param0: androidcontentComponentName): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module authorization {
						export class PackageIntentReceiver {
							public constructor();
							public onReceive(param0: androidcontentContext, param1: androidcontentIntent): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.shared.APIListener.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module authorization {
						export class ProfileHelper {
							public constructor();
							public static getProfile(param0: androidcontentContext, param1: string, param2: androidosBundle, param3: com.amazon.identity.auth.device.shared.APIListener): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.amazon.identity.auth.device.api.authorization.Region.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module authorization {
						export class RegionUtil {
							public static REGION_STRING_AUTO: string;
							public static REGION_STRING_NA: string;
							public static REGION_STRING_EU: string;
							public static REGION_STRING_FE: string;
							public constructor();
							public static regionForString(param0: string): com.amazon.identity.auth.device.api.authorization.Region;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module authorization {
						export class ScopesHelper {
							public static getScopesFromString(param0: string): native.Array<string>;
							public static getScopesString(param0: native.Array<string>): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module authorization {
						export class Service {
							public static AUTHORIZATION: com.amazon.identity.auth.device.authorization.Service;
							public static PANDA: com.amazon.identity.auth.device.authorization.Service;
							public static values(): native.Array<com.amazon.identity.auth.device.authorization.Service>;
							public static valueOf(param0: string): com.amazon.identity.auth.device.authorization.Service;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module authorization {
						export class Stage {
							public static DEVO: com.amazon.identity.auth.device.authorization.Stage;
							public static PRE_PROD: com.amazon.identity.auth.device.authorization.Stage;
							public static PROD: com.amazon.identity.auth.device.authorization.Stage;
							public static valueOf(param0: string): com.amazon.identity.auth.device.authorization.Stage;
							public static values(): native.Array<com.amazon.identity.auth.device.authorization.Stage>;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.api.authorization.AuthorizeRequest.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.authorization.ThirdPartyServiceHelper.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.authorization.api.AuthorizationListener.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.endpoint.TokenVendor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module authorization {
						export class ThirdPartyAuthorizationHelper extends com.amazon.identity.auth.device.authorization.AuthorizationHelper {
							public constructor();
							public authorize(param0: androidcontentContext, param1: string, param2: string, param3: string, param4: native.Array<string>, param5: boolean, param6: com.amazon.identity.auth.device.endpoint.TokenVendor, param7: com.amazon.identity.auth.device.authorization.api.AuthorizationListener): void;
							public authorize(param0: androidcontentContext, param1: string, param2: string, param3: string, param4: native.Array<string>, param5: boolean, param6: com.amazon.identity.auth.device.endpoint.TokenVendor, param7: com.amazon.identity.auth.device.authorization.api.AuthorizationListener, param8: androidosBundle): void;
							public authorize(param0: com.amazon.identity.auth.device.api.authorization.AuthorizeRequest, param1: androidcontentContext, param2: string, param3: string, param4: string, param5: native.Array<string>, param6: boolean, param7: com.amazon.identity.auth.device.endpoint.TokenVendor, param8: com.amazon.identity.auth.device.authorization.api.AuthorizationListener, param9: androidosBundle): void;
							public constructor(param0: com.amazon.identity.auth.device.authorization.ThirdPartyServiceHelper);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.os.IInterface.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module authorization {
						export class ThirdPartyAuthorizationServiceConnection extends com.amazon.identity.auth.device.authorization.MAPServiceConnection {
							public constructor();
							public getServiceInterface(param0: androidosIBinder): androidosIInterface;
							public getServiceInterfaceClass(): javalangClass;
						}
					}
				}
			}
		}
	}
}

import androidcontentServiceConnection = android.content.ServiceConnection;
import androidcontentpmResolveInfo = android.content.pm.ResolveInfo;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.ServiceConnection.d.ts" />
/// <reference path="./android.content.pm.ResolveInfo.d.ts" />
/// <reference path="./android.os.IInterface.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.authorization.AmazonAuthorizationServiceInterface.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.authorization.ThirdPartyAuthorizationServiceConnection.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.authorization.ThirdPartyServiceHelper.d.ts" />
/// <reference path="./com.amazon.identity.auth.map.device.utils.MAPVersion.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module authorization {
						export class ThirdPartyServiceHelper {
							public constructor();
							public static safeUnbind(param0: androidcontentContext, param1: androidcontentServiceConnection, param2: androidcontentIntent): void;
							public static unbind(param0: androidcontentContext): void;
							public getAuthorizationServiceInstance(param0: androidcontentContext, param1: boolean): androidosIInterface;
							public getRemoteAndroidService(param0: androidcontentContext, param1: boolean): com.amazon.identity.auth.device.authorization.AmazonAuthorizationServiceInterface;
							public static clearCachedService(param0: androidcontentContext): void;
						}
						export module ThirdPartyServiceHelper {
							export class HighestVersionedService {
								public static getMAPServiceInfo(): com.amazon.identity.auth.device.authorization.ThirdPartyServiceHelper.MAPServiceInfo;
							}
							export class MAPServiceInfo {
								public setService(param0: androidosIInterface): void;
								public getMapVersion(): com.amazon.identity.auth.map.device.utils.MAPVersion;
								public getService(): androidosIInterface;
								public constructor(param0: com.amazon.identity.auth.device.authorization.ThirdPartyServiceHelper, param1: com.amazon.identity.auth.map.device.utils.MAPVersion, param2: androidosIInterface, param3: com.amazon.identity.auth.device.authorization.ThirdPartyAuthorizationServiceConnection, param4: boolean, param5: androidcontentpmResolveInfo, param6: androidcontentIntent);
								public getServiceIntent(): androidcontentIntent;
								public isPrimary(): boolean;
								public getConnection(): com.amazon.identity.auth.device.authorization.ThirdPartyAuthorizationServiceConnection;
								public setServiceIntent(param0: androidcontentIntent): void;
							}
							export class TOKEN_KEYS {
								public static ACCESS_ATZ_TOKEN: string;
								public static ACCESS_ATZ_EXPIRES_IN: string;
								public static REFRESH_ATZ_TOKEN: string;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.appid.AppIdentifier.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.dataobject.AppInfo.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.shared.APIListener.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module authorization {
						export class TokenHelper {
							public static getTokenInternal(param0: androidcontentContext, param1: string, param2: native.Array<string>, param3: com.amazon.identity.auth.device.dataobject.AppInfo, param4: androidosBundle): string;
							public static getToken(param0: androidcontentContext, param1: string, param2: string, param3: native.Array<string>, param4: com.amazon.identity.auth.device.shared.APIListener, param5: com.amazon.identity.auth.device.appid.AppIdentifier, param6: androidosBundle): void;
							public static clearAuthStateServerSide(param0: androidcontentContext, param1: com.amazon.identity.auth.device.dataobject.AppInfo, param2: androidosBundle): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.authorization.api.AuthorizationListener.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.shared.APIListener.d.ts" />
/// <reference path="./java.util.concurrent.Future.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module authorization {
						export module api {
							export class AmazonAuthorizationManager {
								public clearAuthorizationState(param0: com.amazon.identity.auth.device.shared.APIListener): javautilconcurrentFuture;
								public getRedirectUri(): string;
								public getToken(param0: native.Array<string>, param1: com.amazon.identity.auth.device.shared.APIListener): javautilconcurrentFuture;
								public getAppId(): string;
								public constructor(param0: androidcontentContext, param1: androidosBundle);
								public authorize(param0: native.Array<string>, param1: androidosBundle, param2: com.amazon.identity.auth.device.authorization.api.AuthorizationListener): javautilconcurrentFuture;
								public getProfile(param0: com.amazon.identity.auth.device.shared.APIListener): javautilconcurrentFuture;
								public getAppVariantId(): string;
								public getClientId(): string;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.dataobject.AppInfo.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module authorization {
						export module api {
							export class AppIdentifierHelper {
								public static isAPIKeyValid(param0: string, param1: androidcontentContext): boolean;
								public static getAppInfo(param0: string, param1: androidcontentContext): com.amazon.identity.auth.device.dataobject.AppInfo;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.AuthError.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module authorization {
						export module api {
							export class AuthorizationListener {
								/**
								 * Constructs a new instance of the com.amazon.identity.auth.device.authorization.api.AuthorizationListener interface with the provided implementation.
								 */
								public constructor(implementation: {
									onSuccess(param0: androidosBundle): void;
									onError(param0: com.amazon.identity.auth.device.AuthError): void;
									onCancel(param0: androidosBundle): void;
									onSuccess(param0: androidosBundle): void;
									onError(param0: com.amazon.identity.auth.device.AuthError): void;
									onSuccess(param0: javalangObject): void;
									onError(param0: javalangObject): void;
									onCancel(param0: javalangObject): void;
									onSuccess(param0: javalangObject): void;
									onError(param0: javalangObject): void;
									onSuccess(param0: javalangObject): void;
									onError(param0: javalangObject): void;
								});
								public onSuccess(param0: javalangObject): void;
								public onCancel(param0: androidosBundle): void;
								public onSuccess(param0: androidosBundle): void;
								public onCancel(param0: javalangObject): void;
								public onError(param0: com.amazon.identity.auth.device.AuthError): void;
								public onError(param0: javalangObject): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module authorization {
						export module api {
							export class AuthzConstants {
								public static CAUSE_FAILED_AUTHENTICATION: number;
								public static CAUSE_REJECTED_SCOPES: number;
								public constructor();
							}
							export module AuthzConstants {
								export class BUNDLE_KEY {
									public static TOKEN: com.amazon.identity.auth.device.authorization.api.AuthzConstants.BUNDLE_KEY;
									public static AUTHORIZATION_CODE: com.amazon.identity.auth.device.authorization.api.AuthzConstants.BUNDLE_KEY;
									public static DIRECTED_ID: com.amazon.identity.auth.device.authorization.api.AuthzConstants.BUNDLE_KEY;
									public static DEVICE_ID: com.amazon.identity.auth.device.authorization.api.AuthzConstants.BUNDLE_KEY;
									public static APP_ID: com.amazon.identity.auth.device.authorization.api.AuthzConstants.BUNDLE_KEY;
									public static CAUSE_ID: com.amazon.identity.auth.device.authorization.api.AuthzConstants.BUNDLE_KEY;
									public static REJECTED_SCOPE_LIST: com.amazon.identity.auth.device.authorization.api.AuthzConstants.BUNDLE_KEY;
									public static AUTHORIZE: com.amazon.identity.auth.device.authorization.api.AuthzConstants.BUNDLE_KEY;
									public static CLIENT_ID: com.amazon.identity.auth.device.authorization.api.AuthzConstants.BUNDLE_KEY;
									public static REDIRECT_URI: com.amazon.identity.auth.device.authorization.api.AuthzConstants.BUNDLE_KEY;
									public static ON_CANCEL_TYPE: com.amazon.identity.auth.device.authorization.api.AuthzConstants.BUNDLE_KEY;
									public static ON_CANCEL_DESCRIPTION: com.amazon.identity.auth.device.authorization.api.AuthzConstants.BUNDLE_KEY;
									public static BROWSER_AUTHORIZATION: com.amazon.identity.auth.device.authorization.api.AuthzConstants.BUNDLE_KEY;
									public static PROFILE: com.amazon.identity.auth.device.authorization.api.AuthzConstants.BUNDLE_KEY;
									public static FUTURE: com.amazon.identity.auth.device.authorization.api.AuthzConstants.BUNDLE_KEY;
									public static NO_SERVICE: com.amazon.identity.auth.device.authorization.api.AuthzConstants.BUNDLE_KEY;
									public static SCOPE_DATA: com.amazon.identity.auth.device.authorization.api.AuthzConstants.BUNDLE_KEY;
									public static CODE_CHALLENGE: com.amazon.identity.auth.device.authorization.api.AuthzConstants.BUNDLE_KEY;
									public static CODE_CHALLENGE_METHOD: com.amazon.identity.auth.device.authorization.api.AuthzConstants.BUNDLE_KEY;
									public static GET_AUTH_CODE: com.amazon.identity.auth.device.authorization.api.AuthzConstants.BUNDLE_KEY;
									public static SANDBOX: com.amazon.identity.auth.device.authorization.api.AuthzConstants.BUNDLE_KEY;
									public static CHECK_API_KEY: com.amazon.identity.auth.device.authorization.api.AuthzConstants.BUNDLE_KEY;
									public static EXTRA_URL_PARAMS: com.amazon.identity.auth.device.authorization.api.AuthzConstants.BUNDLE_KEY;
									public static RETURN_CODE: com.amazon.identity.auth.device.authorization.api.AuthzConstants.BUNDLE_KEY;
									public static MINIMUM_TOKEN_LIFETIME: com.amazon.identity.auth.device.authorization.api.AuthzConstants.BUNDLE_KEY;
									public static SDK_VERSION: com.amazon.identity.auth.device.authorization.api.AuthzConstants.BUNDLE_KEY;
									public static SSO_VERSION: com.amazon.identity.auth.device.authorization.api.AuthzConstants.BUNDLE_KEY;
									public val: string;
									public static values(): native.Array<com.amazon.identity.auth.device.authorization.api.AuthzConstants.BUNDLE_KEY>;
									public static valueOf(param0: string): com.amazon.identity.auth.device.authorization.api.AuthzConstants.BUNDLE_KEY;
								}
								export class FUTURE_TYPE {
									public static SUCCESS: com.amazon.identity.auth.device.authorization.api.AuthzConstants.FUTURE_TYPE;
									public static ERROR: com.amazon.identity.auth.device.authorization.api.AuthzConstants.FUTURE_TYPE;
									public static CANCEL: com.amazon.identity.auth.device.authorization.api.AuthzConstants.FUTURE_TYPE;
									public static valueOf(param0: string): com.amazon.identity.auth.device.authorization.api.AuthzConstants.FUTURE_TYPE;
									public static values(): native.Array<com.amazon.identity.auth.device.authorization.api.AuthzConstants.FUTURE_TYPE>;
								}
								export class PROFILE_KEY {
									public static NAME: com.amazon.identity.auth.device.authorization.api.AuthzConstants.PROFILE_KEY;
									public static EMAIL: com.amazon.identity.auth.device.authorization.api.AuthzConstants.PROFILE_KEY;
									public static USER_ID: com.amazon.identity.auth.device.authorization.api.AuthzConstants.PROFILE_KEY;
									public static POSTAL_CODE: com.amazon.identity.auth.device.authorization.api.AuthzConstants.PROFILE_KEY;
									public val: string;
									public static values(): native.Array<com.amazon.identity.auth.device.authorization.api.AuthzConstants.PROFILE_KEY>;
									public static valueOf(param0: string): com.amazon.identity.auth.device.authorization.api.AuthzConstants.PROFILE_KEY;
								}
							}
						}
					}
				}
			}
		}
	}
}

import androidcontentContentValues = android.content.ContentValues;
/// <reference path="./android.content.ContentValues.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.datastore.AbstractDataSource.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module dataobject {
						export abstract class AbstractDataObject {
							public static NON_EXISTENT_ROW: number;
							public constructor();
							public areObjectsEqual(param0: javalangObject, param1: javalangObject): boolean;
							public delete(param0: androidcontentContext): boolean;
							public getDataSource(param0: androidcontentContext): com.amazon.identity.auth.device.datastore.AbstractDataSource;
							public setRowId(param0: number): void;
							public insertOrUpdate(param0: androidcontentContext): boolean;
							public toString(): string;
							public getRowId(): number;
							public getValuesForInsert(): androidcontentContentValues;
							public equals(param0: javalangObject): boolean;
							public insert(param0: androidcontentContext): number;
							public update(param0: androidcontentContext): boolean;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.ContentValues.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.datastore.AbstractDataSource.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.datastore.AppInfoDataSource.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module dataobject {
						export class AppInfo extends com.amazon.identity.auth.device.dataobject.AbstractDataObject {
							public static ALL_COLUMNS: native.Array<string>;
							public static DELIM: string;
							public getGrantedPermissions(): native.Array<string>;
							public getAppFamilyId(): string;
							public setAppFamilyId(param0: string): void;
							public toString(): string;
							public setPayload(param0: orgjsonJSONObject): void;
							public getValuesForInsert(): androidcontentContentValues;
							public getAppVariantId(): string;
							public setGrantedPermissions(param0: native.Array<string>): void;
							public setExchangeHost(param0: string): void;
							public getAttributeByKey(param0: string): string;
							public equals(param0: javalangObject): boolean;
							public getAllowedScopes(): native.Array<string>;
							public setAuthorizationHost(param0: string): void;
							public constructor();
							public setAppVariantId(param0: string): void;
							public clone(): com.amazon.identity.auth.device.dataobject.AppInfo;
							public getAuthorizationHost(): string;
							public getDataSource(param0: androidcontentContext): com.amazon.identity.auth.device.datastore.AbstractDataSource;
							public setPackageName(param0: string): void;
							public setAllowedScopes(param0: native.Array<string>): void;
							public getExchangeHost(): string;
							public getDataSource(param0: androidcontentContext): com.amazon.identity.auth.device.datastore.AppInfoDataSource;
							public setClientId(param0: string): void;
							public getAllowedRemoteScopes(): native.Array<string>;
							public getPackageName(): string;
							public constructor(param0: string, param1: string, param2: string, param3: native.Array<string>, param4: native.Array<string>, param5: string, param6: string, param7: string, param8: orgjsonJSONObject);
							public getClientId(): string;
							public getVersion(): string;
							public setPayload(param0: string): void;
						}
						export module AppInfo {
							export class COL_INDEX {
								public static ROW_ID: com.amazon.identity.auth.device.dataobject.AppInfo.COL_INDEX;
								public static APP_FAMILY_ID: com.amazon.identity.auth.device.dataobject.AppInfo.COL_INDEX;
								public static PACKAGE_NAME: com.amazon.identity.auth.device.dataobject.AppInfo.COL_INDEX;
								public static ALLOWED_SCOPES: com.amazon.identity.auth.device.dataobject.AppInfo.COL_INDEX;
								public static GRANTED_PERMISSIONS: com.amazon.identity.auth.device.dataobject.AppInfo.COL_INDEX;
								public static CLIENT_ID: com.amazon.identity.auth.device.dataobject.AppInfo.COL_INDEX;
								public static APP_VARIANT_ID: com.amazon.identity.auth.device.dataobject.AppInfo.COL_INDEX;
								public static AUTHZ_HOST: com.amazon.identity.auth.device.dataobject.AppInfo.COL_INDEX;
								public static EXCHANGE_HOST: com.amazon.identity.auth.device.dataobject.AppInfo.COL_INDEX;
								public static PAYLOAD: com.amazon.identity.auth.device.dataobject.AppInfo.COL_INDEX;
								public colId: number;
								public static valueOf(param0: string): com.amazon.identity.auth.device.dataobject.AppInfo.COL_INDEX;
								public static values(): native.Array<com.amazon.identity.auth.device.dataobject.AppInfo.COL_INDEX>;
							}
						}
					}
				}
			}
		}
	}
}

import javautilDate = java.util.Date;
import androidtextformatTime = android.text.format.Time;
/// <reference path="./android.content.ContentValues.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.text.format.Time.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.datastore.AbstractDataSource.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.datastore.AuthorizationTokenDataSource.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module dataobject {
						export abstract class AuthorizationToken extends com.amazon.identity.auth.device.dataobject.AbstractDataObject implements com.amazon.identity.auth.map.device.token.Token {
							public static ALL_COLUMNS: native.Array<string>;
							public mAppFamilyId: string;
							public mTokenValue: string;
							public mCreationTime: javautilDate;
							public mExpirationTime: javautilDate;
							public mMiscData: native.Array<number>;
							public mType: com.amazon.identity.auth.device.dataobject.AuthorizationToken.AUTHZ_TOKEN_TYPE;
							public getAppFamilyId(): string;
							public constructor(param0: string, param1: string, param2: string, param3: javautilDate, param4: javautilDate, param5: native.Array<number>, param6: com.amazon.identity.auth.device.dataobject.AuthorizationToken.AUTHZ_TOKEN_TYPE);
							public setTokenValue(param0: string): void;
							public getMiscData(): native.Array<number>;
							public isRemainingLifeAcceptable(): boolean;
							public getCreationTime(): javautilDate;
							public setAppFamilyId(param0: string): void;
							public toString(): string;
							public getValuesForInsert(): androidcontentContentValues;
							public setId(param0: number): void;
							public getTokenValue(): string;
							public getExpirationTime(): javautilDate;
							public equals(param0: javalangObject): boolean;
							public getType(): string;
							public isRemainingLifeAcceptable(param0: number): boolean;
							public constructor();
							public getDirectedId(): string;
							public setDirectedId(param0: string): void;
							public toLogString(): string;
							public getDataSource(param0: androidcontentContext): com.amazon.identity.auth.device.datastore.AbstractDataSource;
							public getData(): javautilMap;
							public getTypeAsEnum(): com.amazon.identity.auth.device.dataobject.AuthorizationToken.AUTHZ_TOKEN_TYPE;
							public setMiscData(param0: native.Array<number>): void;
							public setCreationTime(param0: javautilDate): void;
							public getId(): number;
							public getLocalTimestamp(): androidtextformatTime;
							public getDataSource(param0: androidcontentContext): com.amazon.identity.auth.device.datastore.AuthorizationTokenDataSource;
							public setExpirationTime(param0: javautilDate): void;
						}
						export module AuthorizationToken {
							export class AUTHZ_TOKEN_TYPE {
								public static ACCESS: com.amazon.identity.auth.device.dataobject.AuthorizationToken.AUTHZ_TOKEN_TYPE;
								public static REFRESH: com.amazon.identity.auth.device.dataobject.AuthorizationToken.AUTHZ_TOKEN_TYPE;
								public static valueOf(param0: string): com.amazon.identity.auth.device.dataobject.AuthorizationToken.AUTHZ_TOKEN_TYPE;
								public toString(): string;
								public static values(): native.Array<com.amazon.identity.auth.device.dataobject.AuthorizationToken.AUTHZ_TOKEN_TYPE>;
							}
							export class COL_INDEX {
								public static ID: com.amazon.identity.auth.device.dataobject.AuthorizationToken.COL_INDEX;
								public static APP_FAMILY_ID: com.amazon.identity.auth.device.dataobject.AuthorizationToken.COL_INDEX;
								public static TOKEN: com.amazon.identity.auth.device.dataobject.AuthorizationToken.COL_INDEX;
								public static CREATION_TIME: com.amazon.identity.auth.device.dataobject.AuthorizationToken.COL_INDEX;
								public static EXPIRATION_TIME: com.amazon.identity.auth.device.dataobject.AuthorizationToken.COL_INDEX;
								public static MISC_DATA: com.amazon.identity.auth.device.dataobject.AuthorizationToken.COL_INDEX;
								public static TYPE: com.amazon.identity.auth.device.dataobject.AuthorizationToken.COL_INDEX;
								public static DIRECTED_ID: com.amazon.identity.auth.device.dataobject.AuthorizationToken.COL_INDEX;
								public colId: number;
								public static values(): native.Array<com.amazon.identity.auth.device.dataobject.AuthorizationToken.COL_INDEX>;
								public static valueOf(param0: string): com.amazon.identity.auth.device.dataobject.AuthorizationToken.COL_INDEX;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.amazon.identity.auth.device.dataobject.AuthorizationToken.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module dataobject {
						export class AuthorizationTokenFactory {
							public static getAuthorizationToken(param0: com.amazon.identity.auth.device.dataobject.AuthorizationToken.AUTHZ_TOKEN_TYPE): com.amazon.identity.auth.device.dataobject.AuthorizationToken;
							public static getCopyAuthorizationToken(param0: com.amazon.identity.auth.device.dataobject.AuthorizationToken): com.amazon.identity.auth.device.dataobject.AuthorizationToken;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.ContentValues.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.datastore.AbstractDataSource.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.datastore.ProfileDataSource.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module dataobject {
						export class Profile extends com.amazon.identity.auth.device.dataobject.AbstractDataObject {
							public static ALL_COLUMNS: native.Array<string>;
							public mAppFamilyId: string;
							public mData: string;
							public mExpirationTime: javautilDate;
							public constructor();
							public getAppFamilyId(): string;
							public getDataSource(param0: androidcontentContext): com.amazon.identity.auth.device.datastore.ProfileDataSource;
							public toLogString(): string;
							public constructor(param0: string, param1: string);
							public getDataSource(param0: androidcontentContext): com.amazon.identity.auth.device.datastore.AbstractDataSource;
							public toString(): string;
							public setAppId(param0: string): void;
							public getValuesForInsert(): androidcontentContentValues;
							public setData(param0: string): void;
							public getData(): string;
							public setId(param0: number): void;
							public getId(): number;
							public getDataAsBundle(): androidosBundle;
							public hasExpired(): boolean;
							public getExpirationTime(): javautilDate;
							public equals(param0: javalangObject): boolean;
							public setExpirationTime(param0: javautilDate): void;
						}
						export module Profile {
							export class COL_INDEX {
								public static ID: com.amazon.identity.auth.device.dataobject.Profile.COL_INDEX;
								public static EXPIRATION_TIME: com.amazon.identity.auth.device.dataobject.Profile.COL_INDEX;
								public static APP_ID: com.amazon.identity.auth.device.dataobject.Profile.COL_INDEX;
								public static DATA: com.amazon.identity.auth.device.dataobject.Profile.COL_INDEX;
								public colId: number;
								public static values(): native.Array<com.amazon.identity.auth.device.dataobject.Profile.COL_INDEX>;
								public static valueOf(param0: string): com.amazon.identity.auth.device.dataobject.Profile.COL_INDEX;
							}
						}
					}
				}
			}
		}
	}
}

import javalangBoolean = java.lang.Boolean;
/// <reference path="./android.content.ContentValues.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.dataobject.Scope.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.datastore.AbstractDataSource.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.datastore.RequestedScopeDataSource.d.ts" />
/// <reference path="./java.lang.Boolean.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module dataobject {
						export class RequestedScope extends com.amazon.identity.auth.device.dataobject.AbstractDataObject {
							public static ALL_COLUMNS: native.Array<string>;
							public static CREATOR: androidosParcelableCreator;
							public getAppFamilyId(): string;
							public getAuthorizationRefreshTokenId(): number;
							public clone(): com.amazon.identity.auth.device.dataobject.RequestedScope;
							public constructor(param0: string, param1: string, param2: string, param3: number, param4: number);
							public setAppFamilyId(param0: string): void;
							public setIsGranted(param0: javalangBoolean): void;
							public toString(): string;
							public setAuthorizationRefreshTokenId(param0: number): void;
							public getValuesForInsert(): androidcontentContentValues;
							public setAuthorizationAccessTokenId(param0: number): void;
							public describeContents(): number;
							public setScopeValue(param0: string): void;
							public constructor(param0: string, param1: string, param2: string);
							public getDataSource(param0: androidcontentContext): com.amazon.identity.auth.device.datastore.RequestedScopeDataSource;
							public equals(param0: javalangObject): boolean;
							public constructor();
							public getDirectedId(): string;
							public setDirectedId(param0: string): void;
							public writeToParcel(param0: androidosParcel, param1: number): void;
							public getDataSource(param0: androidcontentContext): com.amazon.identity.auth.device.datastore.AbstractDataSource;
							public constructor(param0: androidosParcel);
							public getScope(): com.amazon.identity.auth.device.dataobject.Scope;
							public getAuthorizationAccessTokenId(): number;
							public isGranted(): javalangBoolean;
							public getScopeValue(): string;
						}
						export module RequestedScope {
							export class COL_INDEX {
								public static ROW_ID: com.amazon.identity.auth.device.dataobject.RequestedScope.COL_INDEX;
								public static SCOPE: com.amazon.identity.auth.device.dataobject.RequestedScope.COL_INDEX;
								public static APP_FAMILY_ID: com.amazon.identity.auth.device.dataobject.RequestedScope.COL_INDEX;
								public static DIRECTED_ID: com.amazon.identity.auth.device.dataobject.RequestedScope.COL_INDEX;
								public static AUTHORIZATION_ACCESS_TOKEN_ID: com.amazon.identity.auth.device.dataobject.RequestedScope.COL_INDEX;
								public static AUTHORIZATION_REFRESH_TOKEN_ID: com.amazon.identity.auth.device.dataobject.RequestedScope.COL_INDEX;
								public colId: number;
								public static values(): native.Array<com.amazon.identity.auth.device.dataobject.RequestedScope.COL_INDEX>;
								public static valueOf(param0: string): com.amazon.identity.auth.device.dataobject.RequestedScope.COL_INDEX;
							}
							export class OUTCOME {
								public static UNKNOWN: com.amazon.identity.auth.device.dataobject.RequestedScope.OUTCOME;
								public static REJECTED: com.amazon.identity.auth.device.dataobject.RequestedScope.OUTCOME;
								public static GRANTED_LOCALLY: com.amazon.identity.auth.device.dataobject.RequestedScope.OUTCOME;
								public longVal: number;
								public static values(): native.Array<com.amazon.identity.auth.device.dataobject.RequestedScope.OUTCOME>;
								public static valueOf(param0: string): com.amazon.identity.auth.device.dataobject.RequestedScope.OUTCOME;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module dataobject {
						export class Scope {
							public getScopeName(): string;
							public getScopeDescription(): string;
							public setScopeDescription(param0: string): void;
							public constructor(param0: string);
							public isLocal(): boolean;
							public static getDescription(param0: string, param1: string): string;
							public static isLocal(param0: string): boolean;
						}
					}
				}
			}
		}
	}
}

import androiddatabasesqliteSQLiteDatabase = android.database.sqlite.SQLiteDatabase;
import androiddatabaseCursor = android.database.Cursor;
/// <reference path="./android.content.ContentValues.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteDatabase.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.dataobject.AbstractDataObject.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module datastore {
						export abstract class AbstractDataSource {
							public static INSERT_FAILED: number;
							public database: androiddatabasesqliteSQLiteDatabase;
							public findOneRowBySingleColumn(param0: string, param1: string): com.amazon.identity.auth.device.dataobject.AbstractDataObject;
							public getTableName(): string;
							public findByRowId(param0: number): com.amazon.identity.auth.device.dataobject.AbstractDataObject;
							public findAllRows(param0: native.Array<string>, param1: native.Array<string>): javautilList;
							public findAllRows(): javautilList;
							public findOneRow(param0: native.Array<string>, param1: native.Array<string>): com.amazon.identity.auth.device.dataobject.AbstractDataObject;
							public findAllRowsBySingleColumn(param0: string, param1: string): javautilList;
							public getLogTag(): string;
							public deleteRowsBySingleColumn(param0: string, param1: string): number;
							public getColumnIndex(param0: androiddatabaseCursor, param1: number): number;
							public getAllColumns(): native.Array<string>;
							public deleteRow(param0: number): boolean;
							public deleteAllRows(): number;
							public deleteRows(param0: native.Array<string>, param1: native.Array<string>): number;
							public updateRow(param0: number, param1: androidcontentContentValues): boolean;
							public constructor(param0: androiddatabasesqliteSQLiteDatabase);
							public insertRow(param0: com.amazon.identity.auth.device.dataobject.AbstractDataObject): number;
							public cursorToObject(param0: androiddatabaseCursor): com.amazon.identity.auth.device.dataobject.AbstractDataObject;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.dataobject.AbstractDataObject.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.dataobject.AppInfo.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module datastore {
						export class AppInfoDataSource extends com.amazon.identity.auth.device.datastore.AbstractDataSource {
							public deleteByPackageName(param0: string): number;
							public cursorToObject(param0: androiddatabaseCursor): com.amazon.identity.auth.device.dataobject.AppInfo;
							public getTableName(): string;
							public findByAppFamilyId(param0: string): javautilList;
							public findByAppVariantId(param0: string): com.amazon.identity.auth.device.dataobject.AppInfo;
							public static resetInstance(): void;
							public findByPrimaryKey(param0: string): com.amazon.identity.auth.device.dataobject.AppInfo;
							public static getInstance(param0: androidcontentContext): com.amazon.identity.auth.device.datastore.AppInfoDataSource;
							public getLogTag(): string;
							public getAllColumns(): native.Array<string>;
							public findByPackageName(param0: string): com.amazon.identity.auth.device.dataobject.AppInfo;
							public deleteByAppFamilyId(param0: string): number;
							public cursorToObject(param0: androiddatabaseCursor): com.amazon.identity.auth.device.dataobject.AbstractDataObject;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.dataobject.AbstractDataObject.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.dataobject.AuthorizationToken.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module datastore {
						export class AuthorizationTokenDataSource extends com.amazon.identity.auth.device.datastore.AbstractDataSource {
							public cursorToObject(param0: androiddatabaseCursor): com.amazon.identity.auth.device.dataobject.AuthorizationToken;
							public findByPrimaryKey(param0: number): com.amazon.identity.auth.device.dataobject.AuthorizationToken;
							public findByDirectedId(param0: string): javautilList;
							public getTableName(): string;
							public findByAppFamilyId(param0: string): javautilList;
							public static resetInstance(): void;
							public getLogTag(): string;
							public getAllColumns(): native.Array<string>;
							public deleteByAppFamilyId(param0: string): number;
							public deleteByDirectedId(param0: string): number;
							public static getInstance(param0: androidcontentContext): com.amazon.identity.auth.device.datastore.AuthorizationTokenDataSource;
							public cursorToObject(param0: androiddatabaseCursor): com.amazon.identity.auth.device.dataobject.AbstractDataObject;
							public findById(param0: number): com.amazon.identity.auth.device.dataobject.AuthorizationToken;
						}
					}
				}
			}
		}
	}
}

import javatextSimpleDateFormat = java.text.SimpleDateFormat;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteDatabase.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.authorization.ThirdPartyServiceHelper.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.text.SimpleDateFormat.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module datastore {
						export class DatabaseHelper {
							public static MAP_DB_VERSION: number;
							public static MAP_DB_NAME: string;
							public static appInfoTable: string;
							public static appInfo_AppFamilyId: string;
							public static appInfo_AppVariantId: string;
							public static appInfo_PackageName: string;
							public static appInfo_AllowedScopes: string;
							public static appInfo_GrantedPermissions: string;
							public static appInfo_ClientId: string;
							public static appInfo_AuthzHost: string;
							public static appInfo_ExchangeHost: string;
							public static appInfo_Payload: string;
							public static requestedScopeTable: string;
							public static requestedScope_Scope: string;
							public static requestedScope_AppFamilyId: string;
							public static requestedScope_DirectedId: string;
							public static requestedScope_AuthorizationAccessTokenId: string;
							public static requestedScope_AuthorizationRefreshTokenId: string;
							public static authorizationTokenTable: string;
							public static authorizationToken_Id: string;
							public static authorizationToken_AppFamilyId: string;
							public static authorizationToken_Token: string;
							public static authorizationToken_CreationTime: string;
							public static authorizationToken_ExpirationTime: string;
							public static authorizationToken_Type: string;
							public static authorizationToken_MiscData: string;
							public static authorizationToken_DirectedId: string;
							public static authorizationCodeTable: string;
							public static authorizationCode_Id: string;
							public static authorizationCode: string;
							public static authorizationCode_AppId: string;
							public static authorizationCode_AuthorizationTokenId: string;
							public static profileTable: string;
							public static profile_Id: string;
							public static profile_ExpirationTime: string;
							public static profile_AppId: string;
							public static profile_Data: string;
							public static clearServiceAuthorizationState(param0: androidcontentContext): void;
							public static clearServiceAuthorizationState(param0: androidcontentContext, param1: com.amazon.identity.auth.device.authorization.ThirdPartyServiceHelper): void;
							public constructor(param0: androidcontentContext);
							public static truncateFractionalSeconds(param0: javautilDate): javautilDate;
							public onUpgrade(param0: androiddatabasesqliteSQLiteDatabase, param1: number, param2: number): void;
							public static getDateFormat(): javatextSimpleDateFormat;
							public static clearAuthorizationState(param0: androidcontentContext): void;
							public doesColumnExist(param0: androiddatabasesqliteSQLiteDatabase, param1: string, param2: string): boolean;
							public onCreate(param0: androiddatabasesqliteSQLiteDatabase): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteDatabase.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.dataobject.AbstractDataObject.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.dataobject.Profile.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module datastore {
						export class ProfileDataSource extends com.amazon.identity.auth.device.datastore.AbstractDataSource {
							public getProfile(param0: string): com.amazon.identity.auth.device.dataobject.Profile;
							public static getInstance(param0: androidcontentContext): com.amazon.identity.auth.device.datastore.ProfileDataSource;
							public getLogTag(): string;
							public getTableName(): string;
							public getAllColumns(): native.Array<string>;
							public cursorToObject(param0: androiddatabaseCursor): com.amazon.identity.auth.device.dataobject.Profile;
							public static resetInstance(): void;
							public constructor(param0: androiddatabasesqliteSQLiteDatabase);
							public cursorToObject(param0: androiddatabaseCursor): com.amazon.identity.auth.device.dataobject.AbstractDataObject;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.dataobject.AbstractDataObject.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.dataobject.RequestedScope.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module datastore {
						export class RequestedScopeDataSource extends com.amazon.identity.auth.device.datastore.AbstractDataSource {
							public findByScope(param0: string): javautilList;
							public findByDirectedId(param0: string): javautilList;
							public static getInstance(param0: androidcontentContext): com.amazon.identity.auth.device.datastore.RequestedScopeDataSource;
							public getTableName(): string;
							public findByAppFamilyId(param0: string): javautilList;
							public findByPrimaryKey(param0: string, param1: string, param2: string): com.amazon.identity.auth.device.dataobject.RequestedScope;
							public static resetInstance(): void;
							public findByAuthorizationAccessTokenId(param0: number): javautilList;
							public deleteByScope(param0: string): number;
							public getLogTag(): string;
							public getAllColumns(): native.Array<string>;
							public findByAuthorizationRefreshTokenId(param0: number): javautilList;
							public deleteByAppFamilyId(param0: string): number;
							public deleteByDirectedId(param0: string): number;
							public cursorToObject(param0: androiddatabaseCursor): com.amazon.identity.auth.device.dataobject.AbstractDataObject;
							public cursorToObject(param0: androiddatabaseCursor): com.amazon.identity.auth.device.dataobject.RequestedScope;
						}
					}
				}
			}
		}
	}
}

import orgapachehttpHttpResponse = org.apache.http.HttpResponse;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.apache.http.HttpResponse.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module endpoint {
						export abstract class AbstractJSONTokenResponse {
							public static JSON_ERROR_FIELD: string;
							public static FORCE_UPDATE: string;
							public static TOKEN: string;
							public static COOKIE: string;
							public static RESPONSE: string;
							public static REQUEST_ID: string;
							public static VER_UNKOWN: string;
							public static EXPIRES_IN: string;
							public static TOKEN_EXPIRES_IN: string;
							public static TOKEN_TYPE: string;
							public static ACCESS_TOKEN: string;
							public static REFRESH_TOKEN: string;
							public constructor(param0: orgapachehttpHttpResponse);
							public extractResponseJSONObject(param0: orgjsonJSONObject): orgjsonJSONObject;
							public getJSONResponse(): orgjsonJSONObject;
							public handleJSONError(param0: orgjsonJSONObject): void;
							public getResponse(): orgapachehttpHttpResponse;
							public throwUnknownAuthError(param0: string): void;
							public getStatusCode(): number;
							public getEntity(): string;
							public parse(): void;
							public static hasReceived500Error(param0: orgapachehttpHttpResponse): boolean;
							public getExpiresIn(param0: orgjsonJSONObject): number;
							public handleForceUpdate(param0: orgjsonJSONObject): void;
							public logRequestId(param0: orgjsonJSONObject): void;
							public getVersion(): string;
							public doParse(param0: orgjsonJSONObject): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.dataobject.AppInfo.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module endpoint {
						export abstract class AbstractJsonPandaRequest extends com.amazon.identity.auth.device.endpoint.AbstractPandaRequest {
							public setEntity(): void;
							public getExtraHeaders(): javautilList;
							public constructor(param0: androidcontentContext, param1: com.amazon.identity.auth.device.dataobject.AppInfo);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.dataobject.AppInfo.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module endpoint {
						export abstract class AbstractOauthTokenRequest extends com.amazon.identity.auth.device.endpoint.AbstractPandaRequest {
							public static OAUTH_END_POINT: string;
							public static GRANT_TYPE_PARAM: string;
							public getExtraHeaders(): javautilList;
							public getAppFamilyId(): string;
							public constructor(param0: androidcontentContext, param1: com.amazon.identity.auth.device.dataobject.AppInfo);
							public getGrantType(): string;
							public getExtraParameters(): javautilList;
							public getExtraOauthTokenRequestParameters(): javautilList;
							public getEndPoint(): string;
						}
					}
				}
			}
		}
	}
}

import orgapachehttpclientmethodsHttpRequestBase = org.apache.http.client.methods.HttpRequestBase;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.dataobject.AppInfo.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.apache.http.client.methods.HttpRequestBase.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module endpoint {
						export abstract class AbstractPandaGetRequest extends com.amazon.identity.auth.device.endpoint.AbstractPandaRequest {
							public initializeRequest(param0: string): orgapachehttpclientmethodsHttpRequestBase;
							public setEntity(): void;
							public constructor(param0: androidcontentContext, param1: com.amazon.identity.auth.device.dataobject.AppInfo);
							public consumeEntity(): void;
						}
					}
				}
			}
		}
	}
}

import orgapachehttpconnClientConnectionManager = org.apache.http.conn.ClientConnectionManager;
import javasecurityKeyStore = java.security.KeyStore;
import javanetSocket = java.net.Socket;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.dataobject.AppInfo.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.endpoint.AbstractPandaRequest.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.endpoint.PandaResponse.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.Socket.d.ts" />
/// <reference path="./java.security.KeyStore.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./org.apache.http.HttpResponse.d.ts" />
/// <reference path="./org.apache.http.client.methods.HttpRequestBase.d.ts" />
/// <reference path="./org.apache.http.conn.ClientConnectionManager.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module endpoint {
						export abstract class AbstractPandaRequest {
							public static DI_HW_NAME: string;
							public static DI_HW_VERSION: string;
							public static DI_OS_NAME: string;
							public static DI_OS_VERSION: string;
							public static DI_SDK_VERSION: string;
							public static APP_VERSION: string;
							public static APP_NAME: string;
							public static ANDROID_OS_NAME: string;
							public static NUM_RETRY_ATTEMPTS: number;
							public static DEFAULT_TOP_LEVEL_DOMAIN: string;
							public static API_PREFIX_DEVO: string;
							public static API_PREFIX_PRE_PROD: string;
							public static API_PREFIX_PROD: string;
							public httpRequest: orgapachehttpclientmethodsHttpRequestBase;
							public postParameters: javautilList;
							public submit(): com.amazon.identity.auth.device.endpoint.PandaResponse;
							public getExtraHeaders(): javautilList;
							public initializeRequest(param0: string): orgapachehttpclientmethodsHttpRequestBase;
							public setEntity(): void;
							public isSandboxEnabled(): boolean;
							public logRequest(): void;
							public constructor(param0: androidcontentContext, param1: com.amazon.identity.auth.device.dataobject.AppInfo);
							public generateResponse(param0: orgapachehttpHttpResponse): com.amazon.identity.auth.device.endpoint.PandaResponse;
							public consumeEntity(): void;
							public getExtraParameters(): javautilList;
							public getEndPoint(): string;
						}
						export module AbstractPandaRequest {
							export class UnsafeSslHttpClient {
								public createClientConnectionManager(): orgapachehttpconnClientConnectionManager;
								public constructor(param0: com.amazon.identity.auth.device.endpoint.AbstractPandaRequest);
							}
							export module UnsafeSslHttpClient {
								export class MySSLSocketFactory {
									public createSocket(param0: javanetSocket, param1: string, param2: number, param3: boolean): javanetSocket;
									public createSocket(): javanetSocket;
									public constructor(param0: com.amazon.identity.auth.device.endpoint.AbstractPandaRequest.UnsafeSslHttpClient, param1: javasecurityKeyStore);
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.dataobject.AppInfo.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.endpoint.LogoutResponse.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.endpoint.PandaResponse.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./org.apache.http.HttpResponse.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module endpoint {
						export class LogoutRequest extends com.amazon.identity.auth.device.endpoint.AbstractJsonPandaRequest {
							public logRequest(): void;
							public constructor(param0: androidcontentContext, param1: com.amazon.identity.auth.device.dataobject.AppInfo);
							public generateResponse(param0: orgapachehttpHttpResponse): com.amazon.identity.auth.device.endpoint.PandaResponse;
							public getExtraParameters(): javautilList;
							public constructor(param0: androidcontentContext, param1: com.amazon.identity.auth.device.dataobject.AppInfo, param2: string);
							public generateResponse(param0: orgapachehttpHttpResponse): com.amazon.identity.auth.device.endpoint.LogoutResponse;
							public getEndPoint(): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./org.apache.http.HttpResponse.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module endpoint {
						export class LogoutResponse extends com.amazon.identity.auth.device.endpoint.AbstractJSONTokenResponse {
							public getStatusCode(): number;
							public parse(): void;
							public getLogoutResponse(): orgjsonJSONObject;
							public constructor(param0: orgapachehttpHttpResponse);
							public doParse(param0: orgjsonJSONObject): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.amazon.identity.auth.device.endpoint.OauthCodeForTokenResponse.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.endpoint.PandaResponse.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./org.apache.http.HttpResponse.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module endpoint {
						export class OauthCodeForTokenRequest extends com.amazon.identity.auth.device.endpoint.AbstractOauthTokenRequest {
							public static AUTHORIZATION_CODE_GRANT: string;
							public static AUTHORIZATION_CODE_PARAM: string;
							public static REDIRECT_URI_PARAM: string;
							public generateResponse(param0: orgapachehttpHttpResponse): com.amazon.identity.auth.device.endpoint.OauthCodeForTokenResponse;
							public logRequest(): void;
							public generateResponse(param0: orgapachehttpHttpResponse): com.amazon.identity.auth.device.endpoint.PandaResponse;
							public getGrantType(): string;
							public getExtraOauthTokenRequestParameters(): javautilList;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.amazon.identity.auth.device.token.RefreshAtzToken.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module endpoint {
						export class OauthCodeForTokenResponse extends com.amazon.identity.auth.device.endpoint.OauthTokenResponse {
							public getStatusCode(): number;
							public parse(): void;
							public extractRefreshAtzToken(param0: orgjsonJSONObject): com.amazon.identity.auth.device.token.RefreshAtzToken;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.amazon.identity.auth.device.endpoint.OauthTokenResponse.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.endpoint.PandaResponse.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./org.apache.http.HttpResponse.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module endpoint {
						export class OauthTokenRequest extends com.amazon.identity.auth.device.endpoint.AbstractOauthTokenRequest {
							public static REFRESH_TOKEN_GRANT: string;
							public static REFRESH_TOKEN: string;
							public generateResponse(param0: orgapachehttpHttpResponse): com.amazon.identity.auth.device.endpoint.OauthTokenResponse;
							public logRequest(): void;
							public generateResponse(param0: orgapachehttpHttpResponse): com.amazon.identity.auth.device.endpoint.PandaResponse;
							public getGrantType(): string;
							public getExtraOauthTokenRequestParameters(): javautilList;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.amazon.identity.auth.device.dataobject.AuthorizationToken.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.token.AccessAtzToken.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.token.RefreshAtzToken.d.ts" />
/// <reference path="./com.amazon.identity.auth.map.device.token.Token.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module endpoint {
						export class OauthTokenResponse extends com.amazon.identity.auth.device.endpoint.AbstractJSONTokenResponse {
							public mAccessToken: com.amazon.identity.auth.device.token.AccessAtzToken;
							public getAppFamilyId(): string;
							public createPrimaryToken(param0: string, param1: number): com.amazon.identity.auth.map.device.token.Token;
							public getAtzTokens(): native.Array<com.amazon.identity.auth.device.dataobject.AuthorizationToken>;
							public extractAccessAtzToken(param0: orgjsonJSONObject): com.amazon.identity.auth.device.token.AccessAtzToken;
							public getAccessAtzToken(): com.amazon.identity.auth.device.token.AccessAtzToken;
							public getRefreshAtzToken(): com.amazon.identity.auth.device.token.RefreshAtzToken;
							public extractResponseJSONObject(param0: orgjsonJSONObject): orgjsonJSONObject;
							public extractRefreshAtzToken(param0: orgjsonJSONObject): com.amazon.identity.auth.device.token.RefreshAtzToken;
							public handleJSONError(param0: orgjsonJSONObject): void;
							public testParse(param0: orgjsonJSONObject): void;
							public getStatusCode(): number;
							public parse(): void;
							public doParse(param0: orgjsonJSONObject): void;
							public logRequestId(param0: orgjsonJSONObject): void;
							public getVersion(): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.dataobject.AppInfo.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.endpoint.OneTimeCodeResponse.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.endpoint.PandaResponse.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./org.apache.http.HttpResponse.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module endpoint {
						export class OneTimeCodeRequest extends com.amazon.identity.auth.device.endpoint.AbstractJsonPandaRequest {
							public hashCode(): number;
							public logRequest(): void;
							public constructor(param0: androidcontentContext, param1: com.amazon.identity.auth.device.dataobject.AppInfo);
							public generateResponse(param0: orgapachehttpHttpResponse): com.amazon.identity.auth.device.endpoint.PandaResponse;
							public getExtraParameters(): javautilList;
							public constructor(param0: androidcontentContext, param1: string, param2: string, param3: com.amazon.identity.auth.device.dataobject.AppInfo);
							public generateResponse(param0: orgapachehttpHttpResponse): com.amazon.identity.auth.device.endpoint.OneTimeCodeResponse;
							public equals(param0: javalangObject): boolean;
							public getEndPoint(): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.apache.http.HttpResponse.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module endpoint {
						export class OneTimeCodeResponse extends com.amazon.identity.auth.device.endpoint.AbstractJSONTokenResponse {
							public getStatusCode(): number;
							public parse(): void;
							public setOneTimeCode(param0: string): void;
							public constructor(param0: orgapachehttpHttpResponse);
							public getOneTimeCode(): string;
							public extractResponseJSONObject(param0: orgjsonJSONObject): orgjsonJSONObject;
							public doParse(param0: orgjsonJSONObject): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module endpoint {
						export class PandaResponse {
							/**
							 * Constructs a new instance of the com.amazon.identity.auth.device.endpoint.PandaResponse interface with the provided implementation.
							 */
							public constructor(implementation: {
								parse(): void;
								getStatusCode(): number;
							});
							public getStatusCode(): number;
							public parse(): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.dataobject.AppInfo.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.endpoint.PandaResponse.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.endpoint.ProfileResponse.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./org.apache.http.HttpResponse.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module endpoint {
						export class ProfileRequest extends com.amazon.identity.auth.device.endpoint.AbstractPandaGetRequest {
							public static API_PREFIX_DEVO_SANDBOX: string;
							public static API_PREFIX_PRE_PROD_SANDBOX: string;
							public static API_PREFIX_PROD_SANDBOX: string;
							public getExtraHeaders(): javautilList;
							public isSandboxEnabled(): boolean;
							public logRequest(): void;
							public constructor(param0: androidcontentContext, param1: com.amazon.identity.auth.device.dataobject.AppInfo);
							public constructor(param0: androidosBundle, param1: string, param2: androidcontentContext, param3: com.amazon.identity.auth.device.dataobject.AppInfo);
							public generateResponse(param0: orgapachehttpHttpResponse): com.amazon.identity.auth.device.endpoint.PandaResponse;
							public generateResponse(param0: orgapachehttpHttpResponse): com.amazon.identity.auth.device.endpoint.ProfileResponse;
							public getExtraParameters(): javautilList;
							public getEndPoint(): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./org.apache.http.HttpResponse.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module endpoint {
						export class ProfileResponse extends com.amazon.identity.auth.device.endpoint.AbstractJSONTokenResponse {
							public getStatusCode(): number;
							public parse(): void;
							public constructor(param0: orgapachehttpHttpResponse);
							public extractResponseJSONObject(param0: orgjsonJSONObject): orgjsonJSONObject;
							public getProfileResponse(): orgjsonJSONObject;
							public handleJSONError(param0: orgjsonJSONObject): void;
							public doParse(param0: orgjsonJSONObject): void;
							public getVersion(): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module endpoint {
						export class ResponseUri {
							public static STATE_PARAMETER_NAME: string;
							public getStateValues(): javautilMap;
							public constructor(param0: androidnetUri);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.dataobject.AppInfo.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.dataobject.AuthorizationToken.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.endpoint.AbstractPandaRequest.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.endpoint.PandaResponse.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.token.RefreshAtzToken.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module endpoint {
						export class ServerCommunication {
							public constructor();
							public getAuthorizationTokens(param0: com.amazon.identity.auth.device.token.RefreshAtzToken, param1: string, param2: native.Array<string>, param3: androidcontentContext, param4: androidosBundle, param5: com.amazon.identity.auth.device.dataobject.AppInfo): native.Array<com.amazon.identity.auth.device.dataobject.AuthorizationToken>;
							public executeRequest(param0: com.amazon.identity.auth.device.endpoint.AbstractPandaRequest, param1: androidcontentContext): com.amazon.identity.auth.device.endpoint.PandaResponse;
							public getTokensFromCode(param0: string, param1: string, param2: native.Array<string>, param3: string, param4: com.amazon.identity.auth.device.dataobject.AppInfo, param5: androidcontentContext): native.Array<com.amazon.identity.auth.device.dataobject.AuthorizationToken>;
							public getTokensFromCode(param0: string, param1: string, param2: string, param3: native.Array<string>, param4: string, param5: androidcontentContext, param6: com.amazon.identity.auth.device.dataobject.AppInfo): native.Array<com.amazon.identity.auth.device.dataobject.AuthorizationToken>;
							public getProfile(param0: androidcontentContext, param1: string, param2: androidosBundle, param3: com.amazon.identity.auth.device.dataobject.AppInfo): orgjsonJSONObject;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.dataobject.AppInfo.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.dataobject.AuthorizationToken.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.dataobject.RequestedScope.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.endpoint.ServerCommunication.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.token.AccessAtzToken.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.token.RefreshAtzToken.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module endpoint {
						export class TokenVendor {
							public mServerCommunication: com.amazon.identity.auth.device.endpoint.ServerCommunication;
							public constructor();
							public clearAuthStateServerSide(param0: androidcontentContext, param1: com.amazon.identity.auth.device.dataobject.AppInfo, param2: androidosBundle): void;
							public vendNewTokensFromCode(param0: string, param1: string, param2: string, param3: native.Array<string>, param4: string, param5: androidcontentContext, param6: com.amazon.identity.auth.device.dataobject.AppInfo): androidosBundle;
							public updateRequestedScopes(param0: string, param1: native.Array<string>, param2: androidcontentContext, param3: com.amazon.identity.auth.device.token.AccessAtzToken, param4: com.amazon.identity.auth.device.token.RefreshAtzToken, param5: string): void;
							public insertTokens(param0: androidcontentContext, param1: com.amazon.identity.auth.device.token.AccessAtzToken, param2: com.amazon.identity.auth.device.token.RefreshAtzToken, param3: string, param4: string, param5: native.Array<string>): void;
							public getCachedScopes(param0: androidcontentContext): javautilList;
							public vendToken(param0: string, param1: native.Array<string>, param2: androidcontentContext, param3: androidosBundle, param4: com.amazon.identity.auth.device.dataobject.AppInfo): string;
							public getRequestedScopes(param0: string, param1: string, param2: native.Array<string>, param3: androidcontentContext): native.Array<com.amazon.identity.auth.device.dataobject.RequestedScope>;
							public vendNewTokensFromCode(param0: string, param1: string, param2: string, param3: native.Array<string>, param4: string, param5: androidcontentContext, param6: com.amazon.identity.auth.device.dataobject.AppInfo, param7: androidosBundle): androidosBundle;
							public vendNewTokensFromCode(param0: string, param1: string, param2: native.Array<string>, param3: string, param4: com.amazon.identity.auth.device.dataobject.AppInfo, param5: androidcontentContext): androidosBundle;
							public setServerCommunication(param0: com.amazon.identity.auth.device.endpoint.ServerCommunication): void;
							public insertToken(param0: androidcontentContext, param1: com.amazon.identity.auth.device.dataobject.AuthorizationToken): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.interactive.InteractiveRequestRecord.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.workflow.WorkflowCancellation.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module interactive {
						export class AggregateInteractiveListener {
							public getRequestType(): string;
							public onSuccess(param0: javalangObject): void;
							public onError(param0: javalangObject): void;
							public onRequestCancel(param0: androidcontentContext, param1: com.amazon.identity.auth.device.interactive.InteractiveRequestRecord, param2: com.amazon.identity.auth.device.workflow.WorkflowCancellation): void;
							public onCancel(param0: javalangObject): void;
							public onRequestError(param0: androidcontentContext, param1: com.amazon.identity.auth.device.interactive.InteractiveRequestRecord, param2: javalangException): void;
							public constructor(param0: string, param1: javautilSet);
							public onRequestCompletion(param0: androidcontentContext, param1: com.amazon.identity.auth.device.interactive.InteractiveRequestRecord, param2: androidnetUri): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.api.workflow.RequestContext.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.interactive.InteractiveRequestRecord.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module interactive {
						export class GenericInteractiveState {
							public shouldAttemptProcessingResponses(): boolean;
							public writeToBundle(param0: androidosBundle): void;
							public onRequestStart(param0: com.amazon.identity.auth.device.interactive.InteractiveRequestRecord): void;
							public processPendingResponses(param0: com.amazon.identity.auth.device.api.workflow.RequestContext): void;
							public readFromBundle(param0: androidosBundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module interactive {
						export class InteractiveAPI {
							/**
							 * Constructs a new instance of the com.amazon.identity.auth.device.interactive.InteractiveAPI interface with the provided implementation.
							 */
							public constructor(implementation: {
								getRequestType(): string;
							});
							public getRequestType(): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.interactive.InteractiveRequestRecord.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.workflow.WorkflowCancellation.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module interactive {
						export class InteractiveListener {
							/**
							 * Constructs a new instance of the com.amazon.identity.auth.device.interactive.InteractiveListener interface with the provided implementation.
							 */
							public constructor(implementation: {
								onSuccess(param0: javalangObject): void;
								onError(param0: javalangObject): void;
								onCancel(param0: javalangObject): void;
								onSuccess(param0: javalangObject): void;
								onError(param0: javalangObject): void;
								onCancel(param0: javalangObject): void;
								getRequestType(): string;
								onRequestCompletion(param0: androidcontentContext, param1: com.amazon.identity.auth.device.interactive.InteractiveRequestRecord, param2: androidnetUri): void;
								onRequestError(param0: androidcontentContext, param1: com.amazon.identity.auth.device.interactive.InteractiveRequestRecord, param2: javalangException): void;
								onRequestCancel(param0: androidcontentContext, param1: com.amazon.identity.auth.device.interactive.InteractiveRequestRecord, param2: com.amazon.identity.auth.device.workflow.WorkflowCancellation): void;
								onSuccess(param0: javalangObject): void;
								onError(param0: javalangObject): void;
							});
							public getRequestType(): string;
							public onSuccess(param0: javalangObject): void;
							public onError(param0: javalangObject): void;
							public onRequestCancel(param0: androidcontentContext, param1: com.amazon.identity.auth.device.interactive.InteractiveRequestRecord, param2: com.amazon.identity.auth.device.workflow.WorkflowCancellation): void;
							public onCancel(param0: javalangObject): void;
							public onRequestError(param0: androidcontentContext, param1: com.amazon.identity.auth.device.interactive.InteractiveRequestRecord, param2: javalangException): void;
							public onRequestCompletion(param0: androidcontentContext, param1: com.amazon.identity.auth.device.interactive.InteractiveRequestRecord, param2: androidnetUri): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.api.workflow.RequestContext.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.interactive.InteractiveRequest.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.interactive.InteractiveRequestRecord.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.workflow.WorkflowCancellation.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module interactive {
						export abstract class InteractiveRequest {
							public getRequestExtras(): androidosBundle;
							public getRequestType(): string;
							public setRequestContext(param0: com.amazon.identity.auth.device.api.workflow.RequestContext): void;
							public assertListenerPresent(): void;
							public onSuccess(param0: javalangObject): void;
							public onRequestCancel(param0: androidcontentContext, param1: com.amazon.identity.auth.device.interactive.InteractiveRequestRecord, param2: com.amazon.identity.auth.device.workflow.WorkflowCancellation): void;
							public onCancel(param0: javalangObject): void;
							public onRequestCompletion(param0: androidcontentContext, param1: com.amazon.identity.auth.device.interactive.InteractiveRequestRecord, param2: androidnetUri): void;
							public getContext(): androidcontentContext;
							public onError(param0: javalangObject): void;
							public getListenerClass(): javalangClass;
							public getRequestContext(): com.amazon.identity.auth.device.api.workflow.RequestContext;
							public onRequestError(param0: androidcontentContext, param1: com.amazon.identity.auth.device.interactive.InteractiveRequestRecord, param2: javalangException): void;
							public constructor(param0: com.amazon.identity.auth.device.api.workflow.RequestContext);
						}
						export module InteractiveRequest {
							export abstract class Builder {
								public requestContext: com.amazon.identity.auth.device.api.workflow.RequestContext;
								public constructor(param0: com.amazon.identity.auth.device.api.workflow.RequestContext);
								public build(): com.amazon.identity.auth.device.interactive.InteractiveRequest;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.amazon.identity.auth.device.api.workflow.RequestContext.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module interactive {
						export class InteractiveRequestMap {
							public putRequestContextForSource(param0: javalangObject, param1: com.amazon.identity.auth.device.api.workflow.RequestContext): void;
							public static getInstance(): com.amazon.identity.auth.device.interactive.InteractiveRequestMap;
							public getRequestContextForSource(param0: javalangObject): com.amazon.identity.auth.device.api.workflow.RequestContext;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module interactive {
						export class InteractiveRequestRecord {
							public static CREATOR: androidosParcelableCreator;
							public getRequestExtras(): androidosBundle;
							public getRequestId(): string;
							public constructor(param0: string, param1: androidosBundle);
							public hashCode(): number;
							public describeContents(): number;
							public writeToParcel(param0: androidosParcel, param1: number): void;
							public toString(): string;
							public equals(param0: javalangObject): boolean;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.amazon.identity.auth.device.api.workflow.RequestContext.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.interactive.InteractiveRequestRecord.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module interactive {
						export class InteractiveState {
							/**
							 * Constructs a new instance of the com.amazon.identity.auth.device.interactive.InteractiveState interface with the provided implementation.
							 */
							public constructor(implementation: {
								onRequestStart(param0: com.amazon.identity.auth.device.interactive.InteractiveRequestRecord): void;
								processPendingResponses(param0: com.amazon.identity.auth.device.api.workflow.RequestContext): void;
							});
							public static FRAGMENT_WRAPPER_KEY: string;
							public onRequestStart(param0: com.amazon.identity.auth.device.interactive.InteractiveRequestRecord): void;
							public processPendingResponses(param0: com.amazon.identity.auth.device.api.workflow.RequestContext): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.interactive.InteractiveState.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module interactive {
						export class InteractiveStateFragment {
							/**
							 * Constructs a new instance of the com.amazon.identity.auth.device.interactive.InteractiveStateFragment interface with the provided implementation.
							 */
							public constructor(implementation: {
								getState(): com.amazon.identity.auth.device.interactive.InteractiveState;
								getParentActivity(): javalangObject;
								getFragment(param0: androidosBundle): javalangObject;
								<clinit>(): void;
							});
							public static TAG_ID: string;
							public getFragment(param0: androidosBundle): javalangObject;
							public getState(): com.amazon.identity.auth.device.interactive.InteractiveState;
							public getParentActivity(): javalangObject;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.interactive.InteractiveRequestRecord.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.workflow.WorkflowCancellation.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module interactive {
						export class InternalInteractiveListener {
							/**
							 * Constructs a new instance of the com.amazon.identity.auth.device.interactive.InternalInteractiveListener interface with the provided implementation.
							 */
							public constructor(implementation: {
								onRequestCompletion(param0: androidcontentContext, param1: com.amazon.identity.auth.device.interactive.InteractiveRequestRecord, param2: androidnetUri): void;
								onRequestError(param0: androidcontentContext, param1: com.amazon.identity.auth.device.interactive.InteractiveRequestRecord, param2: javalangException): void;
								onRequestCancel(param0: androidcontentContext, param1: com.amazon.identity.auth.device.interactive.InteractiveRequestRecord, param2: com.amazon.identity.auth.device.workflow.WorkflowCancellation): void;
							});
							public onRequestCancel(param0: androidcontentContext, param1: com.amazon.identity.auth.device.interactive.InteractiveRequestRecord, param2: com.amazon.identity.auth.device.workflow.WorkflowCancellation): void;
							public onRequestError(param0: androidcontentContext, param1: com.amazon.identity.auth.device.interactive.InteractiveRequestRecord, param2: javalangException): void;
							public onRequestCompletion(param0: androidcontentContext, param1: com.amazon.identity.auth.device.interactive.InteractiveRequestRecord, param2: androidnetUri): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.interactive.InteractiveRequestRecord.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.interactive.InteractiveState.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module interactive {
						export class RequestSource {
							/**
							 * Constructs a new instance of the com.amazon.identity.auth.device.interactive.RequestSource interface with the provided implementation.
							 */
							public constructor(implementation: {
								onStartRequest(param0: com.amazon.identity.auth.device.interactive.InteractiveRequestRecord): void;
								getInteractiveState(): com.amazon.identity.auth.device.interactive.InteractiveState;
								getBackingObject(): javalangObject;
								getContext(): androidcontentContext;
							});
							public getBackingObject(): javalangObject;
							public onStartRequest(param0: com.amazon.identity.auth.device.interactive.InteractiveRequestRecord): void;
							public getInteractiveState(): com.amazon.identity.auth.device.interactive.InteractiveState;
							public getContext(): androidcontentContext;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.interactive.InteractiveRequestRecord.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.interactive.InteractiveState.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module interactive {
						export class RequestSourceActivityWrapper {
							public getBackingObject(): javalangObject;
							public hashCode(): number;
							public onStartRequest(param0: com.amazon.identity.auth.device.interactive.InteractiveRequestRecord): void;
							public constructor(param0: androidappActivity);
							public getInteractiveState(): com.amazon.identity.auth.device.interactive.InteractiveState;
							public equals(param0: javalangObject): boolean;
							public getContext(): androidcontentContext;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.support.v4.app.FragmentActivity.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.interactive.InteractiveRequestRecord.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.interactive.InteractiveState.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module interactive {
						export class RequestSourceFragmentActivityWrapper {
							public getBackingObject(): javalangObject;
							public hashCode(): number;
							public constructor(param0: androidsupportv4appFragmentActivity);
							public onStartRequest(param0: com.amazon.identity.auth.device.interactive.InteractiveRequestRecord): void;
							public getInteractiveState(): com.amazon.identity.auth.device.interactive.InteractiveState;
							public equals(param0: javalangObject): boolean;
							public getContext(): androidcontentContext;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.app.Fragment.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.interactive.InteractiveRequestRecord.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.interactive.InteractiveState.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module interactive {
						export class RequestSourceFragmentWrapper {
							public getBackingObject(): javalangObject;
							public constructor(param0: androidappFragment);
							public hashCode(): number;
							public onStartRequest(param0: com.amazon.identity.auth.device.interactive.InteractiveRequestRecord): void;
							public getInteractiveState(): com.amazon.identity.auth.device.interactive.InteractiveState;
							public equals(param0: javalangObject): boolean;
							public getContext(): androidcontentContext;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.support.v4.app.Fragment.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.interactive.InteractiveRequestRecord.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.interactive.InteractiveState.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module interactive {
						export class RequestSourceSupportFragmentWrapper {
							public getBackingObject(): javalangObject;
							public hashCode(): number;
							public onStartRequest(param0: com.amazon.identity.auth.device.interactive.InteractiveRequestRecord): void;
							public getInteractiveState(): com.amazon.identity.auth.device.interactive.InteractiveState;
							public equals(param0: javalangObject): boolean;
							public constructor(param0: androidsupportv4appFragment);
							public getContext(): androidcontentContext;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.interactive.InteractiveState.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module interactive {
						export class WorkflowFragment {
							public constructor();
							public onCreate(param0: androidosBundle): void;
							public getFragment(param0: androidosBundle): javalangObject;
							public getState(): com.amazon.identity.auth.device.interactive.InteractiveState;
							public getParentActivity(): javalangObject;
							public onSaveInstanceState(param0: androidosBundle): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.interactive.InteractiveState.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module interactive {
						export class WorkflowSupportFragment {
							public constructor();
							public onCreate(param0: androidosBundle): void;
							public getFragment(param0: androidosBundle): javalangObject;
							public getState(): com.amazon.identity.auth.device.interactive.InteractiveState;
							public getParentActivity(): javalangObject;
							public onSaveInstanceState(param0: androidosBundle): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.AuthError.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module service {
						export class MAPServiceResult {
							public static getOnCancelBundle(param0: number, param1: native.Array<string>): androidosBundle;
							public static getOnErrorBundle(param0: com.amazon.identity.auth.device.AuthError): androidosBundle;
							public static getOnSuccessBundle(param0: string, param1: string): androidosBundle;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.AuthError.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module shared {
						export class APIListener {
							/**
							 * Constructs a new instance of the com.amazon.identity.auth.device.shared.APIListener interface with the provided implementation.
							 */
							public constructor(implementation: {
								onSuccess(param0: androidosBundle): void;
								onError(param0: com.amazon.identity.auth.device.AuthError): void;
								onSuccess(param0: javalangObject): void;
								onError(param0: javalangObject): void;
							});
							public onError(param0: com.amazon.identity.auth.device.AuthError): void;
							public onSuccess(param0: javalangObject): void;
							public onError(param0: javalangObject): void;
							public onSuccess(param0: androidosBundle): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.AuthError.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.authorization.api.AuthorizationListener.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.shared.APIListener.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module thread {
						export class AuthzCallbackFuture extends com.amazon.identity.auth.device.thread.MAPCallbackFuture implements com.amazon.identity.auth.device.authorization.api.AuthorizationListener {
							public constructor();
							public onCancel(param0: androidosBundle): void;
							public getResultHelper(): androidosBundle;
							public constructor(param0: com.amazon.identity.auth.device.shared.APIListener);
							public onError(param0: com.amazon.identity.auth.device.AuthError): void;
							public onSuccess(param0: javalangObject): void;
							public onError(param0: javalangObject): void;
							public onSuccess(param0: androidosBundle): void;
							public onCancel(param0: javalangObject): void;
							public constructor(param0: com.amazon.identity.auth.device.authorization.api.AuthorizationListener);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.AuthError.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module thread {
						export class DefaultAuthorizationListener {
							public constructor();
							public onCancel(param0: androidosBundle): void;
							public onError(param0: com.amazon.identity.auth.device.AuthError): void;
							public onSuccess(param0: javalangObject): void;
							public onError(param0: javalangObject): void;
							public onSuccess(param0: androidosBundle): void;
							public onCancel(param0: javalangObject): void;
						}
					}
				}
			}
		}
	}
}

import javautilconcurrentTimeUnit = java.util.concurrent.TimeUnit;
import javautilconcurrentCountDownLatch = java.util.concurrent.CountDownLatch;
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.AuthError.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.authorization.api.AuthorizationListener.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.concurrent.CountDownLatch.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module thread {
						export class MAPCallbackFuture {
							public mListener: com.amazon.identity.auth.device.authorization.api.AuthorizationListener;
							public mLatch: javautilconcurrentCountDownLatch;
							public mSuccessResult: androidosBundle;
							public mError: com.amazon.identity.auth.device.AuthError;
							public constructor();
							public getResultHelper(): androidosBundle;
							public onError(param0: com.amazon.identity.auth.device.AuthError): void;
							public cancel(param0: boolean): boolean;
							public isCancelled(): boolean;
							public isDone(): boolean;
							public onSuccess(param0: javalangObject): void;
							public onError(param0: javalangObject): void;
							public onSuccess(param0: androidosBundle): void;
							public get(): androidosBundle;
							public get(param0: number, param1: javautilconcurrentTimeUnit): androidosBundle;
							public constructor(param0: com.amazon.identity.auth.device.authorization.api.AuthorizationListener);
						}
					}
				}
			}
		}
	}
}

import javautilconcurrentExecutor = java.util.concurrent.Executor;
/// <reference path="./java.util.concurrent.Executor.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module thread {
						export class ThreadUtils {
							public static THREAD_POOL: javautilconcurrentExecutor;
							public static isRunningOnMainThread(): boolean;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.text.format.Time.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module token {
						export class AccessAtzToken extends com.amazon.identity.auth.device.dataobject.AuthorizationToken {
							public constructor();
							public constructor(param0: string, param1: string, param2: string, param3: javautilDate, param4: javautilDate, param5: native.Array<number>, param6: com.amazon.identity.auth.device.dataobject.AuthorizationToken.AUTHZ_TOKEN_TYPE);
							public constructor(param0: string, param1: string, param2: string, param3: number, param4: native.Array<number>);
							public getDirectedId(): string;
							public constructor(param0: string, param1: string, param2: string, param3: javautilDate, param4: number, param5: native.Array<number>);
							public constructor(param0: string, param1: string, param2: string, param3: javautilDate, param4: javautilDate, param5: native.Array<number>);
							public getLocalTimestamp(): androidtextformatTime;
							public toString(): string;
							public constructor(param0: com.amazon.identity.auth.device.token.AccessAtzToken);
							public getType(): string;
							public getData(): javautilMap;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.text.format.Time.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module token {
						export class RefreshAtzToken extends com.amazon.identity.auth.device.dataobject.AuthorizationToken {
							public constructor();
							public constructor(param0: string, param1: string, param2: string, param3: native.Array<number>);
							public constructor(param0: string, param1: string, param2: string, param3: javautilDate, param4: javautilDate, param5: native.Array<number>, param6: com.amazon.identity.auth.device.dataobject.AuthorizationToken.AUTHZ_TOKEN_TYPE);
							public constructor(param0: com.amazon.identity.auth.device.token.RefreshAtzToken);
							public getDirectedId(): string;
							public getLocalTimestamp(): androidtextformatTime;
							public toString(): string;
							public constructor(param0: string, param1: string, param2: string, param3: javautilDate, param4: native.Array<number>);
							public getType(): string;
							public getData(): javautilMap;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.amazon.identity.auth.device.api.authorization.Region.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.authorization.Stage.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module utils {
						export abstract class DefaultLibraryInfo {
							public constructor();
							public static getLibraryRegion(): com.amazon.identity.auth.device.api.authorization.Region;
							public static setLibraryRegion(param0: com.amazon.identity.auth.device.api.authorization.Region): void;
							public static setOverrideAppStage(param0: com.amazon.identity.auth.device.authorization.Stage): void;
							public static isProd(): boolean;
							public static getOverrideLibraryStage(): com.amazon.identity.auth.device.authorization.Stage;
							public static isDevo(): boolean;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module utils {
						export class HashAlgorithm {
							public static MD5: com.amazon.identity.auth.device.utils.HashAlgorithm;
							public static SHA_256: com.amazon.identity.auth.device.utils.HashAlgorithm;
							public static values(): native.Array<com.amazon.identity.auth.device.utils.HashAlgorithm>;
							public static valueOf(param0: string): com.amazon.identity.auth.device.utils.HashAlgorithm;
							public getAlgorithmName(): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module utils {
						export class JSONUtils {
							public constructor();
							public static getStringList(param0: orgjsonJSONObject, param1: string): javautilList;
							public static getStringArray(param0: orgjsonJSONObject, param1: string): native.Array<string>;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module utils {
						export class JWTDecoder {
							public constructor();
							public decode(param0: string): orgjsonJSONObject;
						}
						export module JWTDecoder {
							export class JWT_SECTION {
								public static HEADER: com.amazon.identity.auth.device.utils.JWTDecoder.JWT_SECTION;
								public static PAYLOAD: com.amazon.identity.auth.device.utils.JWTDecoder.JWT_SECTION;
								public static SIGNATURE: com.amazon.identity.auth.device.utils.JWTDecoder.JWT_SECTION;
								public static values(): native.Array<com.amazon.identity.auth.device.utils.JWTDecoder.JWT_SECTION>;
								public static valueOf(param0: string): com.amazon.identity.auth.device.utils.JWTDecoder.JWT_SECTION;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module utils {
						export class LWAConstants {
							public static CONSTANT_PREFIX: string;
							public static INTERACTIVE_REQUEST_TYPE_KEY: string;
							public static AUTHORIZE_REQUEST_TYPE: string;
							public constructor();
						}
						export module LWAConstants {
							export class AUTHORIZE_BUNDLE_KEY {
								public static REGION: com.amazon.identity.auth.device.utils.LWAConstants.AUTHORIZE_BUNDLE_KEY;
								public static RETURN_ACCESS_TOKEN: com.amazon.identity.auth.device.utils.LWAConstants.AUTHORIZE_BUNDLE_KEY;
								public val: string;
								public static values(): native.Array<com.amazon.identity.auth.device.utils.LWAConstants.AUTHORIZE_BUNDLE_KEY>;
								public static valueOf(param0: string): com.amazon.identity.auth.device.utils.LWAConstants.AUTHORIZE_BUNDLE_KEY;
							}
							export class PROFILE_BUNDLE_KEY {
								public static FAIL_ON_INSUFFICIENT_SCOPE: com.amazon.identity.auth.device.utils.LWAConstants.PROFILE_BUNDLE_KEY;
								public val: string;
								public static valueOf(param0: string): com.amazon.identity.auth.device.utils.LWAConstants.PROFILE_BUNDLE_KEY;
								public static values(): native.Array<com.amazon.identity.auth.device.utils.LWAConstants.PROFILE_BUNDLE_KEY>;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.authorization.AmazonAuthorizationServiceInterface.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.authorization.ThirdPartyServiceHelper.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module utils {
						export abstract class LWAServiceWrapper {
							public constructor();
							public doWork(param0: androidcontentContext, param1: com.amazon.identity.auth.device.authorization.AmazonAuthorizationServiceInterface): javalangObject;
							public execute(param0: androidcontentContext, param1: com.amazon.identity.auth.device.authorization.ThirdPartyServiceHelper): javalangObject;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module utils {
						export class MAPConstants {
							/**
							 * Constructs a new instance of the com.amazon.identity.auth.device.utils.MAPConstants interface with the provided implementation.
							 */
							public constructor(implementation: {
							});
							public static REFRESH_TOKEN_INDEX: number;
							public static MAP_VERSION_KEY: string;
							public static SANDBOX_MODE_QUERY_PARAM: string;
							public static MAP_IS_PRIMARY: string;
							public static ACCESS_TOKEN_INDEX: number;
							public static DEFAULT_DOMAIN: string;
							public static CONSTANT_PREFIX: string;
						}
						export module MAPConstants {
							export class CREDENTIAL_MANAGER_BUNDLE_KEY {
								public static PACKAGE_NAME: com.amazon.identity.auth.device.utils.MAPConstants.CREDENTIAL_MANAGER_BUNDLE_KEY;
								public static APP_ID: com.amazon.identity.auth.device.utils.MAPConstants.CREDENTIAL_MANAGER_BUNDLE_KEY;
								public static USER_ID: com.amazon.identity.auth.device.utils.MAPConstants.CREDENTIAL_MANAGER_BUNDLE_KEY;
								public static APPS_WITH_SCOPE_LIST: com.amazon.identity.auth.device.utils.MAPConstants.CREDENTIAL_MANAGER_BUNDLE_KEY;
								public static SCOPE_LIST: com.amazon.identity.auth.device.utils.MAPConstants.CREDENTIAL_MANAGER_BUNDLE_KEY;
								public static HAS_SCOPE: com.amazon.identity.auth.device.utils.MAPConstants.CREDENTIAL_MANAGER_BUNDLE_KEY;
								public static PERMISSION_LIST: com.amazon.identity.auth.device.utils.MAPConstants.CREDENTIAL_MANAGER_BUNDLE_KEY;
								public static HAS_PERMISSION: com.amazon.identity.auth.device.utils.MAPConstants.CREDENTIAL_MANAGER_BUNDLE_KEY;
								public static APPS_WITH_PERMISSION_LIST: com.amazon.identity.auth.device.utils.MAPConstants.CREDENTIAL_MANAGER_BUNDLE_KEY;
								public static APP_VARIANT_ID: com.amazon.identity.auth.device.utils.MAPConstants.CREDENTIAL_MANAGER_BUNDLE_KEY;
								public static PACKAGE_NAMES: com.amazon.identity.auth.device.utils.MAPConstants.CREDENTIAL_MANAGER_BUNDLE_KEY;
								public val: string;
								public static valueOf(param0: string): com.amazon.identity.auth.device.utils.MAPConstants.CREDENTIAL_MANAGER_BUNDLE_KEY;
								public static values(): native.Array<com.amazon.identity.auth.device.utils.MAPConstants.CREDENTIAL_MANAGER_BUNDLE_KEY>;
							}
							export class SERVICE_BUNDLE_KEY {
								public static AUTHZ_PARAMS: com.amazon.identity.auth.device.utils.MAPConstants.SERVICE_BUNDLE_KEY;
								public val: string;
								public static values(): native.Array<com.amazon.identity.auth.device.utils.MAPConstants.SERVICE_BUNDLE_KEY>;
								public static valueOf(param0: string): com.amazon.identity.auth.device.utils.MAPConstants.SERVICE_BUNDLE_KEY;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteDatabase.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.dataobject.AppInfo.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module utils {
						export class MAPUtils {
							public static deleteDatabase(param0: androidcontentContext): androiddatabasesqliteSQLiteDatabase;
							public static areScopesValid(param0: com.amazon.identity.auth.device.dataobject.AppInfo, param1: native.Array<string>): boolean;
							public static areScopesLocalAndValid(param0: com.amazon.identity.auth.device.dataobject.AppInfo, param1: native.Array<string>): boolean;
							public static getAppName(param0: androidcontentContext): string;
							public static isMAPUrl(param0: string): boolean;
							public static toDelimitedString(param0: native.Array<string>, param1: string): string;
							public static toHexString(param0: native.Array<number>): string;
							public static contains(param0: native.Array<string>, param1: string): boolean;
							public static toStringArray(param0: string, param1: string): native.Array<string>;
							public static getHostType(param0: androidcontentContext, param1: string): string;
							public static getDeviceId(): string;
							public static resetDatabaseInstance(): void;
							public static getSetDifference(param0: native.Array<string>, param1: native.Array<string>): javautilSet;
							public static getVersion(param0: androidcontentContext): string;
							public static getMAPdatabase(param0: androidcontentContext): androiddatabasesqliteSQLiteDatabase;
							public static areScopesRemoteAndValid(param0: com.amazon.identity.auth.device.dataobject.AppInfo, param1: native.Array<string>): boolean;
							public static isDevo(param0: androidcontentContext): boolean;
						}
						export module MAPUtils {
							export class SCOPE_MODIFIER {
								public static LOCAL: com.amazon.identity.auth.device.utils.MAPUtils.SCOPE_MODIFIER;
								public static REMOTE: com.amazon.identity.auth.device.utils.MAPUtils.SCOPE_MODIFIER;
								public static ALL: com.amazon.identity.auth.device.utils.MAPUtils.SCOPE_MODIFIER;
								public static valueOf(param0: string): com.amazon.identity.auth.device.utils.MAPUtils.SCOPE_MODIFIER;
								public static values(): native.Array<com.amazon.identity.auth.device.utils.MAPUtils.SCOPE_MODIFIER>;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module utils {
						export class MAPVersionHelper {
							public static getVersionAsString(param0: native.Array<number>): string;
							public static getVersionInfo(param0: string): native.Array<number>;
						}
					}
				}
			}
		}
	}
}

import androidcontentpmSignature = android.content.pm.Signature;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.pm.Signature.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.utils.HashAlgorithm.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module utils {
						export class PackageSignatureUtil {
							public constructor();
							public static getAllSignaturesFor(param0: string, param1: com.amazon.identity.auth.device.utils.HashAlgorithm, param2: androidcontentContext): javautilList;
							public static getSignatureFingerprint(param0: androidcontentpmSignature, param1: com.amazon.identity.auth.device.utils.HashAlgorithm): string;
						}
					}
				}
			}
		}
	}
}

import javasecuritycertCertificate = java.security.cert.Certificate;
/// <reference path="./java.security.cert.Certificate.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module utils {
						export class SignatureUtil {
							public constructor();
							public static getCertificateFromByteArray(param0: native.Array<number>): javasecuritycertCertificate;
							public static getAmazonPublicCertificate(): javasecuritycertCertificate;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module utils {
						export class ThirdPartyResourceParser {
							public static KEY_API_KEY: string;
							public static KEY_API_KEY_OLD: string;
							public static UTF8_BYTE_ORDER_MARK: string;
							public getApiKeyFile(): string;
							public getPackageName(): string;
							public isApiKeyInAssest(): boolean;
							public getApiKey(): string;
							public constructor(param0: androidcontentContext, param1: string);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.interactive.InteractiveRequest.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module workflow {
						export class AmazonWorkflow {
							public static openWorkflow(param0: com.amazon.identity.auth.device.interactive.InteractiveRequest, param1: string, param2: string, param3: androidosBundle): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.interactive.InteractiveRequestRecord.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.workflow.WorkflowCancellation.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module workflow {
						export abstract class BaseWorkflowListener {
							public constructor();
							public getRequestType(): string;
							public onWorkflowSuccess(param0: androidcontentContext, param1: com.amazon.identity.auth.device.interactive.InteractiveRequestRecord, param2: orgjsonJSONObject): void;
							public onSuccess(param0: javalangObject): void;
							public onError(param0: javalangObject): void;
							public onRequestCancel(param0: androidcontentContext, param1: com.amazon.identity.auth.device.interactive.InteractiveRequestRecord, param2: com.amazon.identity.auth.device.workflow.WorkflowCancellation): void;
							public onWorkflowCancel(param0: androidcontentContext, param1: com.amazon.identity.auth.device.interactive.InteractiveRequestRecord, param2: com.amazon.identity.auth.device.workflow.WorkflowCancellation): void;
							public onRequestError(param0: androidcontentContext, param1: com.amazon.identity.auth.device.interactive.InteractiveRequestRecord, param2: javalangException): void;
							public onCancel(param0: javalangObject): void;
							public onRequestCompletion(param0: androidcontentContext, param1: com.amazon.identity.auth.device.interactive.InteractiveRequestRecord, param2: androidnetUri): void;
							public onWorkflowError(param0: androidcontentContext, param1: com.amazon.identity.auth.device.interactive.InteractiveRequestRecord, param2: javalangException): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module workflow {
						export class WorkflowActivity {
							public constructor();
							public onCreate(param0: androidosBundle): void;
							public static handleResponseUri(param0: androidnetUri, param1: androidappActivity, param2: string): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module workflow {
						export class WorkflowCancellation {
							public constructor(param0: androidosBundle);
							public hashCode(): number;
							public getCause(): com.amazon.identity.auth.device.workflow.WorkflowCancellation.Cause;
							public toString(): string;
							public constructor(param0: com.amazon.identity.auth.device.workflow.WorkflowCancellation.Cause, param1: string);
							public getDescription(): string;
							public equals(param0: javalangObject): boolean;
						}
						export module WorkflowCancellation {
							export class Cause {
								public static USER_TERMINATED: com.amazon.identity.auth.device.workflow.WorkflowCancellation.Cause;
								public static values(): native.Array<com.amazon.identity.auth.device.workflow.WorkflowCancellation.Cause>;
								public static valueOf(param0: string): com.amazon.identity.auth.device.workflow.WorkflowCancellation.Cause;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.amazon.identity.auth.device.AuthError.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module workflow {
						export class WorkflowCompletionListener {
							/**
							 * Constructs a new instance of the com.amazon.identity.auth.device.workflow.WorkflowCompletionListener interface with the provided implementation.
							 */
							public constructor(implementation: {
								onSuccess(param0: orgjsonJSONObject): void;
								onError(param0: com.amazon.identity.auth.device.AuthError): void;
							});
							public onError(param0: com.amazon.identity.auth.device.AuthError): void;
							public onSuccess(param0: orgjsonJSONObject): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module workflow {
						export class WorkflowConstants {
							public static CANCELLATION_CODE_USER_TERMINATED: number;
							public constructor();
						}
						export module WorkflowConstants {
							export class API {
								public static RESPONSE_URL: com.amazon.identity.auth.device.workflow.WorkflowConstants.API;
								public static CANCELLATION_CODE: com.amazon.identity.auth.device.workflow.WorkflowConstants.API;
								public static CANCELLATION_DESCRIPTION: com.amazon.identity.auth.device.workflow.WorkflowConstants.API;
								public val: string;
								public static values(): native.Array<com.amazon.identity.auth.device.workflow.WorkflowConstants.API>;
								public static valueOf(param0: string): com.amazon.identity.auth.device.workflow.WorkflowConstants.API;
							}
							export class OPTION {
								public static MINIMUM_TOKEN_LIFETIME: com.amazon.identity.auth.device.workflow.WorkflowConstants.OPTION;
								public val: string;
								public static valueOf(param0: string): com.amazon.identity.auth.device.workflow.WorkflowConstants.OPTION;
								public static values(): native.Array<com.amazon.identity.auth.device.workflow.WorkflowConstants.OPTION>;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.endpoint.ServerCommunication.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.interactive.InteractiveRequest.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.workflow.WorkflowToken.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module workflow {
						export class WorkflowRequest extends com.amazon.identity.auth.device.AbstractRequest {
							public handleResponse(param0: androidnetUri, param1: androidcontentContext): boolean;
							public getUrl(param0: androidcontentContext): string;
							public getMaxAttemptCount(): number;
							public constructor(param0: com.amazon.identity.auth.device.interactive.InteractiveRequest, param1: string, param2: com.amazon.identity.auth.device.workflow.WorkflowToken, param3: number, param4: com.amazon.identity.auth.device.endpoint.ServerCommunication);
							public constructor(param0: com.amazon.identity.auth.device.interactive.InteractiveRequest);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.amazon.identity.auth.device.endpoint.ServerCommunication.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.interactive.InteractiveRequest.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.workflow.WorkflowRequest.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.workflow.WorkflowToken.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module workflow {
						export class WorkflowRequestFactory {
							public getWorkflowRequest(param0: com.amazon.identity.auth.device.interactive.InteractiveRequest, param1: string, param2: com.amazon.identity.auth.device.workflow.WorkflowToken, param3: number): com.amazon.identity.auth.device.workflow.WorkflowRequest;
							public constructor(param0: com.amazon.identity.auth.device.endpoint.ServerCommunication);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.AuthError.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module workflow {
						export class WorkflowResponse {
							public isError(): boolean;
							public getError(): com.amazon.identity.auth.device.AuthError;
							public isRecoverable(): boolean;
							public constructor(param0: androidnetUri);
							public getResultJson(): orgjsonJSONObject;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module device {
					export module workflow {
						export class WorkflowToken {
							public assertWorkflowUrlIsAllowed(param0: string): void;
							public constructor(param0: string);
							public getScopes(): native.Array<string>;
							public getClientId(): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module map {
					export module device {
						export class AccountManagerConstants {
							public static AUTHPORTAL_SIGN_IN_KEY_BOOLEAN_RESULT: string;
							public static NEW_ACCOUNT: string;
							public static KEY_ACCOUNT_MANAGER_CALLBACK: string;
							public static IDENTITY_PREFIX: string;
							public static TOKEN_TYPE_PREFIX: string;
							public static COOKIE_TOKEN_TYPE_PREFIX: string;
							public static ACCESS_TOKEN_TYPE_PREFIX: string;
							public static REFRESH_TOKEN_TYPE_PREFIX: string;
							public static DEVICEID_TOKEN_TYPE_PREFIX: string;
							public static CLIENT_ID_PREFIX: string;
							public static TOKEN_TYPE_COOKIE_XMAIN_TOKEN: string;
							public static TOKEN_TYPE_COOKIE_ATMAIN_TOKEN: string;
							public static AP_OPTION_KEY_PREFIX: string;
							public static AP_OPTION_KEY_UBID: string;
							public static AP_OPTION_KEY_SESSIONID: string;
							public static AP_OPTION_KEY_CLIENT_CONTEXT: string;
							public static CLIENT_ID_LABEL: string;
							public static RETURN_TO: string;
							public static SITE_STATE: string;
							public static URL: string;
							public static KEY_DOMAIN: string;
							public static AP_OPTION_KEY_CLAIMED_ID: string;
							public static AP_OPTION_KEY_IDENTITY: string;
							public static AP_OPTION_KEY_PAGEID: string;
							public static AP_OPTION_KEY_DOMAIN: string;
							public static AP_OPTION_KEY_ASSOC_HANDLE: string;
							public static AP_SIGNIN_ACTIVITY_REQUEST_CODE: number;
							public static AP_CONFIRM_CREDENTIAL_REQUEST_CODE: number;
							public static KEY_DEVICETYPE: string;
							public static KEY_DEVICESERIAL: string;
							public static KEY_DIRECTEDID: string;
							public constructor();
						}
						export module AccountManagerConstants {
							export class GetCookiesParams extends com.amazon.identity.auth.map.device.AccountManagerConstants.GetParams {
								public static OPTION_COOKIE_TYPE: string;
								public static OPTION_DOMAIN: string;
								public static OPTION_URL: string;
								public static COOKIES: string;
								public static USER_AGENT: string;
								public constructor();
							}
							export module GetCookiesParams {
								export class COOKIE_TYPE {
									public static COOKIE: com.amazon.identity.auth.map.device.AccountManagerConstants.GetCookiesParams.COOKIE_TYPE;
									public static DELEGATED_COOKIE: com.amazon.identity.auth.map.device.AccountManagerConstants.GetCookiesParams.COOKIE_TYPE;
									public static valueOf(param0: string): com.amazon.identity.auth.map.device.AccountManagerConstants.GetCookiesParams.COOKIE_TYPE;
									public static values(): native.Array<com.amazon.identity.auth.map.device.AccountManagerConstants.GetCookiesParams.COOKIE_TYPE>;
								}
							}
							export class GetParams {
								public static OPTION_DIRECTEDID: string;
								public static FORCE_REFRESH: string;
								public static OPTION_SOCKET_TIMEOUT: string;
								public static ANDROID_DEFAULT_SOCKET_TIMEOUT: number;
								public static DEFAULT_SOCKET_TIMEOUT: number;
								public constructor();
							}
							export class GetTokenParams extends com.amazon.identity.auth.map.device.AccountManagerConstants.GetParams {
								public static OPTION_TOKEN_TYPE: string;
								public constructor();
							}
							export module GetTokenParams {
								export class TOKEN_TYPE {
									public static ACCESS_TOKEN: com.amazon.identity.auth.map.device.AccountManagerConstants.GetTokenParams.TOKEN_TYPE;
									public static DELEGATED_ACCESS_TOKEN: com.amazon.identity.auth.map.device.AccountManagerConstants.GetTokenParams.TOKEN_TYPE;
									public static values(): native.Array<com.amazon.identity.auth.map.device.AccountManagerConstants.GetTokenParams.TOKEN_TYPE>;
									public static valueOf(param0: string): com.amazon.identity.auth.map.device.AccountManagerConstants.GetTokenParams.TOKEN_TYPE;
								}
							}
							export class GetUIParams {
								public static KEY_SPLASH_SCREEN_RESOURCE: string;
								public static KEY_SPLASH_SCREEN_SCALE_TYPE: string;
								public static KEY_PROGRESSBAR_STATE: string;
								public static KEY_INVERT_SPINNER: string;
								public static KEY_PROGRESSBAR_RESOURCE: string;
								public static KEY_PROGRESSBAR_BACKGROUND_RESOURCE: string;
								public static KEY_PROGRESSBAR_PRIMARY_COLOR: string;
								public static KEY_PROGRESSBAR_SECONDARY_COLOR: string;
								public static KEY_PROGRESSBAR_FADE: string;
								public static KEY_PROGRESSBAR_POSITION: string;
								public static KEY_PROGRESSBAR_STRETCH: string;
								public constructor();
							}
							export module GetUIParams {
								export class PROGRESSBAR_STATE {
									public static OFF: com.amazon.identity.auth.map.device.AccountManagerConstants.GetUIParams.PROGRESSBAR_STATE;
									public static PROGRESS_BAR: com.amazon.identity.auth.map.device.AccountManagerConstants.GetUIParams.PROGRESSBAR_STATE;
									public static SPINNER_SMALL: com.amazon.identity.auth.map.device.AccountManagerConstants.GetUIParams.PROGRESSBAR_STATE;
									public static SPINNER_MEDIUM: com.amazon.identity.auth.map.device.AccountManagerConstants.GetUIParams.PROGRESSBAR_STATE;
									public static SPINNER_LARGE: com.amazon.identity.auth.map.device.AccountManagerConstants.GetUIParams.PROGRESSBAR_STATE;
									public static valueOf(param0: string): com.amazon.identity.auth.map.device.AccountManagerConstants.GetUIParams.PROGRESSBAR_STATE;
									public static values(): native.Array<com.amazon.identity.auth.map.device.AccountManagerConstants.GetUIParams.PROGRESSBAR_STATE>;
								}
								export class SCREEN_POSITION {
									public static TOP_LEFT: com.amazon.identity.auth.map.device.AccountManagerConstants.GetUIParams.SCREEN_POSITION;
									public static TOP_CENTER: com.amazon.identity.auth.map.device.AccountManagerConstants.GetUIParams.SCREEN_POSITION;
									public static TOP_RIGHT: com.amazon.identity.auth.map.device.AccountManagerConstants.GetUIParams.SCREEN_POSITION;
									public static CENTER_LEFT: com.amazon.identity.auth.map.device.AccountManagerConstants.GetUIParams.SCREEN_POSITION;
									public static CENTER_CENTER: com.amazon.identity.auth.map.device.AccountManagerConstants.GetUIParams.SCREEN_POSITION;
									public static CENTER_RIGHT: com.amazon.identity.auth.map.device.AccountManagerConstants.GetUIParams.SCREEN_POSITION;
									public static BOTTOM_LEFT: com.amazon.identity.auth.map.device.AccountManagerConstants.GetUIParams.SCREEN_POSITION;
									public static BOTTOM_CENTER: com.amazon.identity.auth.map.device.AccountManagerConstants.GetUIParams.SCREEN_POSITION;
									public static BOTTOM_RIGHT: com.amazon.identity.auth.map.device.AccountManagerConstants.GetUIParams.SCREEN_POSITION;
									public static valueOf(param0: string): com.amazon.identity.auth.map.device.AccountManagerConstants.GetUIParams.SCREEN_POSITION;
									public static values(): native.Array<com.amazon.identity.auth.map.device.AccountManagerConstants.GetUIParams.SCREEN_POSITION>;
								}
							}
							export class LOCALE {
								public static US: com.amazon.identity.auth.map.device.AccountManagerConstants.LOCALE;
								public static DE: com.amazon.identity.auth.map.device.AccountManagerConstants.LOCALE;
								public static UK: com.amazon.identity.auth.map.device.AccountManagerConstants.LOCALE;
								public static JP: com.amazon.identity.auth.map.device.AccountManagerConstants.LOCALE;
								public static FR: com.amazon.identity.auth.map.device.AccountManagerConstants.LOCALE;
								public static CA: com.amazon.identity.auth.map.device.AccountManagerConstants.LOCALE;
								public static ES: com.amazon.identity.auth.map.device.AccountManagerConstants.LOCALE;
								public static CN: com.amazon.identity.auth.map.device.AccountManagerConstants.LOCALE;
								public static valueOf(param0: string): com.amazon.identity.auth.map.device.AccountManagerConstants.LOCALE;
								public toUrlString(): string;
								public static values(): native.Array<com.amazon.identity.auth.map.device.AccountManagerConstants.LOCALE>;
							}
							export class OVERIDE_APP_STATE {
								public static FORCE_DEVO: com.amazon.identity.auth.map.device.AccountManagerConstants.OVERIDE_APP_STATE;
								public static FORCE_PROD: com.amazon.identity.auth.map.device.AccountManagerConstants.OVERIDE_APP_STATE;
								public static FORCE_PRE_PROD: com.amazon.identity.auth.map.device.AccountManagerConstants.OVERIDE_APP_STATE;
								public static NO_FORCE: com.amazon.identity.auth.map.device.AccountManagerConstants.OVERIDE_APP_STATE;
								public static valueOf(param0: string): com.amazon.identity.auth.map.device.AccountManagerConstants.OVERIDE_APP_STATE;
								public static values(): native.Array<com.amazon.identity.auth.map.device.AccountManagerConstants.OVERIDE_APP_STATE>;
							}
							export class REGION_HINT {
								public static NA: com.amazon.identity.auth.map.device.AccountManagerConstants.REGION_HINT;
								public static EU: com.amazon.identity.auth.map.device.AccountManagerConstants.REGION_HINT;
								public static CN: com.amazon.identity.auth.map.device.AccountManagerConstants.REGION_HINT;
								public static FE: com.amazon.identity.auth.map.device.AccountManagerConstants.REGION_HINT;
								public static values(): native.Array<com.amazon.identity.auth.map.device.AccountManagerConstants.REGION_HINT>;
								public static valueOf(param0: string): com.amazon.identity.auth.map.device.AccountManagerConstants.REGION_HINT;
							}
							export class SignInParams {
								public static USER_NAME: string;
								public static PASSWORD: string;
								public constructor();
							}
							export class TOKEN_EXCHANGER_TYPE {
								public static REFRESH_FOR_ACCESS: com.amazon.identity.auth.map.device.AccountManagerConstants.TOKEN_EXCHANGER_TYPE;
								public static DMS_FOR_ACCESS: com.amazon.identity.auth.map.device.AccountManagerConstants.TOKEN_EXCHANGER_TYPE;
								public static REFRESH_FOR_COOKIES: com.amazon.identity.auth.map.device.AccountManagerConstants.TOKEN_EXCHANGER_TYPE;
								public static valueOf(param0: string): com.amazon.identity.auth.map.device.AccountManagerConstants.TOKEN_EXCHANGER_TYPE;
								public static values(): native.Array<com.amazon.identity.auth.map.device.AccountManagerConstants.TOKEN_EXCHANGER_TYPE>;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.text.format.Time.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module map {
					export module device {
						export module token {
							export abstract class AbstractToken {
								public static KEY_CREATION_TIME: string;
								public static KEY_EXPIRES_IN: string;
								public static NEVER_EXPIRE: number;
								public static ALWAYS_EXPIRE: number;
								public localCreationTimestamp: androidtextformatTime;
								public tokenData: javautilMap;
								public static secsToMillis(param0: number): number;
								public static millisToSecs(param0: number): number;
								public toString(): string;
								public getToken(): string;
								public getDirectedId(): string;
								public getLocalTimestamp(): androidtextformatTime;
								public getData(): javautilMap;
								public constructor(param0: string);
								public constructor(param0: com.amazon.identity.auth.map.device.token.AbstractToken);
								public constructor(param0: javautilMap);
								public static convertStringToRegionHint(param0: string): com.amazon.identity.auth.map.device.AccountManagerConstants.REGION_HINT;
								public getType(): string;
							}
						}
					}
				}
			}
		}
	}
}

import orgapachehttpcookieCookie = org.apache.http.cookie.Cookie;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.text.format.Time.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./org.apache.http.cookie.Cookie.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module map {
					export module device {
						export module token {
							export class MAPCookie {
								public static NO_VERSION: number;
								public static KEY_HTTP_ONLY: string;
								public static KEY_SECURE: string;
								public static KEY_EXPIRES: string;
								public static KEY_PATH: string;
								public static KEY_DOMAIN: string;
								public static KEY_VALUE: string;
								public static KEY_NAME: string;
								public static KEY_COMMENT: string;
								public static KEY_COMMENT_URL: string;
								public static KEY_VERSION: string;
								public static KEY_DIRECTED_ID: string;
								public static KEY_PERSISTANT: string;
								public static COOKIE_DATE_FORMAT: string;
								public isSecure(): boolean;
								public toString(): string;
								public setHttpOnly(param0: boolean): void;
								public isExpired(param0: javautilDate): boolean;
								public static clearCookieInCookieManager(param0: androidcontentContext, param1: orgapachehttpcookieCookie, param2: string, param3: string): void;
								public isPersistent(): boolean;
								public setSecure(param0: boolean): void;
								public static extractCookieStringArray(param0: javautilList): native.Array<string>;
								public static getCookiesFromCookieManager(param0: androidcontentContext, param1: string, param2: string): javautilList;
								public hasExpired(): boolean;
								public static getSetCookieHeader(param0: orgapachehttpcookieCookie): string;
								public setPath(param0: string): void;
								public getCommentURL(): string;
								public constructor(param0: string, param1: string, param2: string, param3: string, param4: boolean);
								public getVersion(): number;
								public getPath(): string;
								public getComment(): string;
								public getDirectedId(): string;
								public getName(): string;
								public getLocalTimestamp(): androidtextformatTime;
								public getData(): javautilMap;
								public getExpiryDate(): javautilDate;
								public static formatDate(param0: javautilDate): string;
								public getPorts(): native.Array<number>;
								public setExpiryDate(param0: string): void;
								public static getCookiesStringFromCookieManager(param0: androidcontentContext, param1: string): string;
								public isHttpOnly(): boolean;
								public setAttribute(param0: string, param1: string): string;
								public setPorts(param0: native.Array<number>): void;
								public getType(): string;
								public constructor(param0: javautilMap);
								public getDomain(): string;
								public getAttribute(param0: string): string;
								public getValue(): string;
							}
							export module MAPCookie {
								export class CookieAttribute {
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.text.format.Time.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module map {
					export module device {
						export module token {
							export class Token {
								/**
								 * Constructs a new instance of the com.amazon.identity.auth.map.device.token.Token interface with the provided implementation.
								 */
								public constructor(implementation: {
									getLocalTimestamp(): androidtextformatTime;
									getData(): javautilMap;
									toString(): string;
									getType(): string;
									getDirectedId(): string;
								});
								public static KEY_TOKEN: string;
								public toString(): string;
								public getDirectedId(): string;
								public getLocalTimestamp(): androidtextformatTime;
								public getData(): javautilMap;
								public getType(): string;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module map {
					export module device {
						export module utils {
							export class MAPLog {
								public static IS_FIRST_PARTY_DEBUG_BUILD: boolean;
								public static wtf(param0: string, param1: string): number;
								public static e(param0: string, param1: string, param2: javalangThrowable): number;
								public static getStackTraceString(param0: javalangThrowable): string;
								public static v(param0: string, param1: string): number;
								public constructor();
								public static i(param0: string, param1: string): number;
								public static isLoggable(param0: string, param1: number): boolean;
								public static v(param0: string, param1: string, param2: javalangThrowable): number;
								public static w(param0: string, param1: string): number;
								public static wtf(param0: string, param1: javalangThrowable): number;
								public static wtf(param0: string, param1: string, param2: javalangThrowable): number;
								public static pii(param0: string, param1: string, param2: string): number;
								public static d(param0: string, param1: string): number;
								public static d(param0: string, param1: string, param2: javalangThrowable): number;
								public static w(param0: string, param1: string, param2: javalangThrowable): number;
								public static println(param0: number, param1: string, param2: string): number;
								public static pii(param0: string, param1: string, param2: string, param3: javalangThrowable): number;
								public static w(param0: string, param1: javalangThrowable): number;
								public static e(param0: string, param1: string): number;
								public static i(param0: string, param1: string, param2: javalangThrowable): number;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module map {
					export module device {
						export module utils {
							export class MAPVersion {
								public static VERSION_ZERO: com.amazon.identity.auth.map.device.utils.MAPVersion;
								public static CREATOR: androidosParcelableCreator;
								public toString(): string;
								public describeContents(): number;
								public constructor(param0: androidosParcel);
								public constructor(param0: string);
								public getVersionInfo(): native.Array<number>;
								public compare(param0: com.amazon.identity.auth.map.device.utils.MAPVersion): number;
								public constructor(param0: native.Array<number>);
								public writeToParcel(param0: androidosParcel, param1: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazon {
		export module identity {
			export module auth {
				export module map {
					export module device {
						export module utils {
							export class MAPVersionInfo {
								/**
								 * Constructs a new instance of the com.amazon.identity.auth.map.device.utils.MAPVersionInfo interface with the provided implementation.
								 */
								public constructor(implementation: {
								});
								public static VERSION_NAME: string;
								public static LWA_VERSION: string;
								public static VERSION: string;
								public static LWA_VERSION_NAME: string;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.amazon.identity.auth.device.AuthError.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.api.authorization.AuthCancellation.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.api.authorization.AuthorizeResult.d.ts" />
/// <reference path="./com.amazon.identity.auth.device.api.workflow.RequestContext.d.ts" />
/// <reference path="./com.codecatcherclub.libraryproject.Handler.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module codecatcherclub {
		export module libraryproject {
			export class Amazon {
				public login(param0: com.amazon.identity.auth.device.api.workflow.RequestContext, param1: com.codecatcherclub.libraryproject.Handler): void;
				public constructor();
			}
			export module Amazon {
				export class Listener extends com.amazon.identity.auth.device.api.authorization.AuthorizeListener {
					public onError(param0: javalangObject): void;
					public onError(param0: com.amazon.identity.auth.device.AuthError): void;
					public onSuccess(param0: com.amazon.identity.auth.device.api.authorization.AuthorizeResult): void;
					public onCancel(param0: com.amazon.identity.auth.device.api.authorization.AuthCancellation): void;
					public onCancel(param0: javalangObject): void;
					public onSuccess(param0: javalangObject): void;
				}
			}
		}
	}
}

declare module com {
	export module codecatcherclub {
		export module libraryproject {
			export class BuildConfig {
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module codecatcherclub {
		export module libraryproject {
			export class Handler {
				/**
				 * Constructs a new instance of the com.codecatcherclub.libraryproject.Handler interface with the provided implementation.
				 */
				public constructor(implementation: {
					onSuccess(param0: string): void;
					onError(param0: javalangException): void;
				});
				public onSuccess(param0: string): void;
				public onError(param0: javalangException): void;
			}
		}
	}
}

