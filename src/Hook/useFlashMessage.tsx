import { useState, useEffect } from 'react';

const useFlashMessage = (message: string) => {
    const [flashMessage, setFlashMessage] = useState<string>('');
    const [opacityMessage, setOpacityMessage] = useState<string>('');

    useEffect(() => {
        setOpacityMessage('opacity-100 opacity-transition')
        setFlashMessage(message);
            setTimeout (() => {
                setOpacityMessage('opacity-0 opacity-transition')
            }, 2000);
    }, [message]);

    return {
        setFlashMessage,
        flashMessage,
        opacityMessage
    }
};

export default useFlashMessage;