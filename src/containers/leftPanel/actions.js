import {APPLY_CODE_CHANGES} from './constants'

export const saveCode = (code) => {
    return {
        type:APPLY_CODE_CHANGES,
        code:code,
    }
}