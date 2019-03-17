export class LCUState {
  public ActiveState?: LCUStateConfig;

  public IsStateSettings?: boolean;

  public Loading?: boolean;

  public States?: string[];
}

export class LCUStateConfig {
  public Actions: { [action: string]: LCUStateAction };

  public ActiveEnvironment?: string;

  public DefaultValue?: any;

  public Description: string;

  public Environments?: { [env: string]: LCUStateEnvironment };

  public Lookup: string;

  public Name: string;

  public UseUsername: boolean;
}

export class LCUStateAction {
  public APIRoot: string;

  public Security: string;
}

export class LCUStateEnvironment {
  public Security: string;

  public ServerAPIRoot: string;
}
