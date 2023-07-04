import { isStorageAvailable } from './isStorageAvailable';

/**
 * This file expands the behaviour of localStorage:
 * Creates an inMemory store that is not serialised and doesn't always need to
 * Read / Write to localStorage, thereby performing a little faster and still working
 * in sessions when localStorage is not available.
 *
 * At the same time, it also reads / writes to localStorage if it is available so that,
 * when available data is persisted across sessions.
 */

const saferJsonParse = (str: any): any => {
  try {
    return JSON.parse(str);
  } catch {
    return str;
  }
};

// Enhance storage to accept an object as well as string
type StorageStub = Pick<Storage, 'clear' | 'removeItem'> & {
  available: boolean;
  getIsAvailable(): boolean;
  getItem<T>(key: string): T | null;
  length(): number;
  setIsAvailable(value: boolean): void;
  setItem(key: string, value: string | Record<string, any>): void;
  store: Map<string, any>;
};

export const storage: StorageStub = {
  available: false,
  clear() {
    this.store.clear();

    if (this.available) {
      window.localStorage.clear();
    }
  },
  getIsAvailable() {
    return this.available;
  },
  getItem(key) {
    // First check if inMemory and return item
    const itemFromMemory = this.store.get(key);

    if (itemFromMemory !== undefined) {
      return itemFromMemory;
    }

    if (!this.available) {
      return null;
    }

    // Then try in localStorage
    const itemAsString = window.localStorage.getItem(key);

    // If for some reason it exists in LS but not inMemory, set it inMemory
    if (itemAsString) {
      const item = saferJsonParse(itemAsString);
      this.store.set(key, item);
      return item;
    }
    return null;
  },
  length() {
    return this.store.size;
  },
  removeItem(key) {
    this.store.delete(key);

    if (this.available) {
      window.localStorage.removeItem(key);
    }
  },
  setIsAvailable(value) {
    this.available = value;
  },
  setItem(key, value) {
    this.store.set(key, value);

    if (!this.available) {
      return;
    }

    if (typeof value === `string`) {
      window.localStorage.setItem(key, value);
    } else {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  },
  store: new Map<string, any>(),
};

// Immediately set whether the storage is available (but because of the getter / setter this can still be read and set, e.g. in tests)
if (isStorageAvailable(`localStorage`)) {
  storage.setIsAvailable(true);
}
