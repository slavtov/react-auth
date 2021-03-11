import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeNotification } from '../redux/actions/notifications'

export function useNotification() {
    const message = useSelector(state => state.notifications.message)
    const dispatch = useDispatch()

    useEffect(() => {
        return () => dispatch(removeNotification())
    }, [dispatch])

    return message
}
