import { useShallowEqualSelector } from './useShallowEqualSelector'

export function useAuth() {
    return useShallowEqualSelector(state => state.auth)
}
