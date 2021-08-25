import { randomString } from './index';

export interface LifecycleTokenStorage {
  getItem: (name: string) => string | null;
  setItem: (key: string, value: string) => void;
}

export class LifecycleToken {
  public static TokenName = 'lifecycle_token';

  constructor(private storage: LifecycleTokenStorage) {}

  private static GenerateLCToken() {
    return randomString(30, 'QWERTYUIOPASDFGHJKLZXCVBNM0123456789');
  }

  public static IsValidLCToken(token: string | null) {
    return typeof token === 'string' && token.length === 30;
  }

  public generateAndSetToken() {
    let lcToken = this.storage.getItem(LifecycleToken.TokenName) || '';
    if (!lcToken || LifecycleToken.IsValidLCToken(lcToken)) {
      lcToken = LifecycleToken.GenerateLCToken();
      this.storage.setItem(LifecycleToken.TokenName, lcToken);
    }

    return lcToken;
  }
}
