
import { observable } from 'mobx';

export class ThemeStore {
    @observable name : string;

    constructor() {
        this.name = "Foo";
    }
}

export const ThemeStoreName = "ThemeStore";

export type ThemeStoreProps = { ThemeStore: ThemeStore };
export const ThemeStoreDefaultProps = { ThemeStore : (null as unknown) as ThemeStore};