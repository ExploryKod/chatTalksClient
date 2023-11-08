import { useState, useEffect } from 'react';

export interface IFlashMessage {
    alert: string;
    name: string;
}

const useFlashMessage = (message: string) => {
    const [flashMessage, setFlashMessage] = useState<IFlashMessage>({alert: '', name: ''});
    const [opacityMessage, setOpacityMessage] = useState<string>('');

    useEffect(() => {
        setOpacityMessage('opacity-transition opacity-animation-in');
        setFlashMessage({alert: message, name: 'alert'});
            setTimeout (() => {
                setOpacityMessage('opacity-transition opacity-animation-out')
            }, 2000);
    }, [message]);

    return {
        setFlashMessage,
        flashMessage,
        opacityMessage
    }
};

export default useFlashMessage;