declare module "react-native-oauth" {
  interface IGenericClientConfig {
      client_id: string | number,
      client_secret: string,
  }

  interface IProviderConfig {
    twitter?: {
      consumer_key: string,
      consumer_secret: string,
    },
    facebook?: IGenericClientConfig
    google?: {
      callback_url: string;
      client_id: string,
      client_secret: string,
    };
    github?: IGenericClientConfig;
    slack?: IGenericClientConfig;
  }

  interface IOAuthReponse {
    credentials: {
      type: string;
      consumerKey?: string;
      accessToken?: string;
      tokenSecret?: string;
      clientID?: string;
      scopes?: any;
      authorizationHeader?: string;
    };
    uuid?: any;
  }

  interface IOAuthFullReponse {
    response: IOAuthReponse;
    provider: Provider;
    authorized: boolean;
    status: string;
  }

  type Provider = "twitter" | "facebook" | "google" | "github" | "slack";

  export default class OAuthManager {
    constructor(appName: string, opts?: {});
    configure(providerConfigs: IProviderConfig): Promise<this>;
    authorize(provider: Provider, opts?: {}): Promise<IOAuthFullReponse>;
    savedAccounts(opts?: {}): Promise<{
        accounts: any[];
    }>;
    savedAccount(provider: string): any;
    makeRequest(provider: string, url: any, opts?: {}): any;
    deauthorize(provider: string): any;
    providers(): string[];
    static providers(): string[];
    static isSupported(name: any): boolean;
    /**
     * Configure a single provider
     *
     *
     * @param {string} name of the provider
     * @param {object} additional configuration
     *
     **/
    configureProvider(name: any, props: any): any;
    configureProviders(providerConfigs: any): Promise<this>;
  }
}
