
import { observable } from 'mobx';

class GlobalThemeOptions {
    @observable colors : any;

    constructor() {
        this.colors = {
            "brand": "",
            "accent-1": "",
            "accent-2": "",
            "accent-3": "",
            "accent-4": "",
            "neutral-1": "",
            "neutral-2": "",
            "neutral-3": "",
            "neutral-4": "",
            "status-critical": "",
            "status-error": "",
            "status-warning": "",
            "status-ok": "",
            "status-unknown": "",
            "status-disabled": "",
            "light-1": "",
            "light-2": "",
            "light-3": "",
            "light-4": "",
            "light-5": "",
            "light-6": "",
            "dark-1": "",
            "dark-2": "",
            "dark-3": "",
            "dark-4": "",
            "dark-5": "",
            "dark-6": "",
        }
    }

}

export class ThemeStore {
    @observable name : string;
    @observable global : GlobalThemeOptions;

    constructor() {
        this.name = "Foo";
        this.global = new GlobalThemeOptions();
    }
}

export const ThemeStoreName = "theme";

export type ThemeStoreProps = { theme: ThemeStore };
export const ThemeStoreDefaultProps = { theme : (null as unknown) as ThemeStore};