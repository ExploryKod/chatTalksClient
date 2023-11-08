import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
export interface IFlashMessage {
    alert: string;
    name: string;
}

export interface IToastMessage {
    position: "top-center" | "top-right" | "top-left" | "bottom-right" | "bottom-left" | "bottom-center";
    autoClose: number | false;
    hideProgressBar: boolean;
    closeOnClick: boolean;
    draggable: boolean;
    theme: "light" | "dark";
    type: "success" | "error" | "warning" | "info" | "default";

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

    // const toastMessage = (message: string, options: IToastMessage) => {
    //     toast(message, {
    //         position: options.position,
    //         autoClose: 5000,
    //         hideProgressBar: options.hideProgressBar,
    //         closeOnClick: true,
    //         draggable: true,
    //         type: options.type,
    //         theme: options.theme
    //     });
    // };

    const defaultToastOptions: IToastMessage = {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        theme: "light",
        type: "default",
    };

    const toastMessage = (message: string, options: IToastMessage = defaultToastOptions) => {
        toast(message, {
            ...defaultToastOptions, // spread the default options
            ...options, // then spread the provided options. This will override any default options
        });
    };


    return {
        setFlashMessage,
        flashMessage,
        opacityMessage,
        toastMessage
    }
};

export default useFlashMessage;