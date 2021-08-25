import { randomString } from './index';

export interface LifecycleTokenStorage {
  getItem: (name: string) => string | null;
  setItem: (key: string, value: string) => void;
}

export class LifecycleToken {
  public static TokenName = 'lifecycle_token';

  constructor(private storage: LifecycleTokenStorage) {}

  public generateAndSetToken() {
    let lcToken = this.storage.getItem(LifecycleToken.TokenName) || '';
    const isTokenValid = typeof lcToken === 'string' && lcToken.length === 30;

    if (!lcToken || !isTokenValid) {
      lcToken = randomString(30, 'QWERTYUIOPASDFGHJKLZXCVBNM0123456789');
      this.storage.setItem(LifecycleToken.TokenName, lcToken);
    }

    return lcToken;
  }
}
