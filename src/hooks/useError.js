import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeError } from '../redux/actions/notifications'

export function useError() {
    const error = useSelector(state => state.notifications.error)
    const dispatch = useDispatch()

    useEffect(() => {
        return () => dispatch(removeError())
    }, [dispatch])

    return error
}
