export class LCUState {
  public ActiveState?: string;

  public Loading?: boolean;

  public States?: LCUStateConfig[];
}

export class LCUStateConfig {
  public Actions: { [action: string]: LCUStateAction };

  public Description: string;

  public Name: string;
}

export class LCUStateAction {
  public Proxy: LCUStateActionAPI;
}

export class LCUStateActionAPI {
  public APIRoot: string;

  public Security: string;
}
