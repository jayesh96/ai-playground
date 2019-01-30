import {APPLY_CODE_CHANGES} from './constants'

export const applyCodeChanges = (code) => {
    return {
        type:APPLY_CODE_CHANGES,
        code
    }
}