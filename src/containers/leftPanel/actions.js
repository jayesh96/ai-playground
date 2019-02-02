import { APPLY_CODE_CHANGES } from "./constants";

export const saveCode = (key,code,activeTab,active=false) => {
    return {
        type:APPLY_CODE_CHANGES,
        key:key,
        code:code,
        tab:activeTab,
        active:active
    }
}

