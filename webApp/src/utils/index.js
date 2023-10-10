import Toastify from 'toastify-js';
import WebApp from '@twa-dev/sdk';

let Audios = {};

const Utils = {
    
    Toast: (text, duration = 2000) => { 
        Toastify({text: text, duration: duration, gravity: 'top', position: 'left', style: {background: 'var(--tg-theme-text-color)', color: 'var(--tg-theme-bg-color)'}}).showToast(); 
    },

    DPXSendRequest: async (endpoint = '/', data = [], method = 'POST', i18n = null) => {

        const FD = new FormData();

        for (const [key, value] of Object.entries(data)) {
            
            FD.append(key, value);

        }
        
        try {

            var endpoint_url = `${ import.meta.env.VITE_APP_URL.toString().replace(/\/+$/, '') }/api`;

            let data = { 'method': method };

            if (method === 'POST') {

                data['body'] = FD;

            }

            var request = await fetch(`${ endpoint_url }${ endpoint }`, data);

            var result = await request.json();

        } catch(Exception) {

            result = { status: 'error' };

        }

        if (result.status !== 'success') {

            if ('info' in result) {

                if (i18n) {

                    Utils.Toast(i18n.t(`api.errors.${ result.error }`));

                }else{
                
                    Utils.Toast(result.info);

                }
                

            }else{

                Utils.Toast("Error");

            }

            return null;

        }else{

            return result;

        }

    },

    PreLoadAudio: (name) => {
            
        if (Audios[name] === undefined) {
        
            Audios[name] = new Audio(`${import.meta.env.BASE_URL}assets/sounds/${ name }`);

        }

    },

    PlayAudio: (name) => {

        Audios[name].play();

    },

    Prompt: (title = null, text, options) => {

        if (WebApp.isVersionAtLeast('6.2')) {

            WebApp.HapticFeedback.notificationOccurred('warning');

            let buttons = [];

            options.forEach((option, key) => {
                
                let id = Math.random().toString(36).slice(2, 7);
                options[key]['id'] = id;

                buttons.push({
                    id: id,
                    type: option.type,
                    text: option.text
                });

            });

            WebApp.showPopup({
                title: title,
                message: text,
                buttons: buttons
            });

            let OnPopupClosedHanlder = (data) => {

                options.forEach((option) => {

                    if (option.id === data['button_id']) {
                        
                        option.event();

                    }

                });

                WebApp.offEvent('popupClosed', OnPopupClosedHanlder);

            };

            WebApp.onEvent('popupClosed', OnPopupClosedHanlder);

        }else{

            Utils.Toast('Unsupported');

        }

    },

    ScanQRCode: (text, onReceive) => {

        if (WebApp.isVersionAtLeast('6.4')) {

            WebApp.HapticFeedback.notificationOccurred('warning');

            WebApp.showScanQrPopup({
                text: text,
            });

            let OnQRTextReceivedHanlder = (data) => {

                if (onReceive(data)) {

                    WebApp.offEvent('qrTextReceived', OnQRTextReceivedHanlder);
                    WebApp.closeScanQrPopup();

                }

            };

            WebApp.onEvent('qrTextReceived', OnQRTextReceivedHanlder);

        }else{

            Utils.Toast('Unsupported');

        }

    },

    readTextFromClipboard: (onPaste) => {

        if (WebApp.isVersionAtLeast('6.4')) {

            WebApp.readTextFromClipboard(onPaste);

        }else{

            Utils.Toast('Unsupported');

        }

    },

    hideKeyboardOnEnter: (event) => { if (event.keyCode === 13) { event.target.blur(); } },

    copyTextToClipboard: (text) => {

        if (!navigator.clipboard) {
    
            var textArea = document.createElement("textarea");
            textArea.value = text;
            
            textArea.style.top = "0";
            textArea.style.left = "0";
            textArea.style.position = "fixed";
          
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
          
            try {
                var successful = document.execCommand('copy');
                var msg = successful ? 'successful' : 'unsuccessful';
            } catch (err) {
        
            }
          
            document.body.removeChild(textArea);
    
          return;
          
        }
    
        navigator.clipboard.writeText(text);
    
    },

    GetWallet(param = null) {

        let info = window.localStorage.getItem(`wallet_user_${ WebApp.initDataUnsafe.user.id }`);

        if (info) {

            if (param) {

                return JSON.parse(info)[param];

            }else{
                
                return JSON.parse(info);

            }

        }else{

            return null;

        }

    },

    SetWallet(wallet = null, secret = null) {

        if (wallet === null) {

            wallet = Utils.GetWallet('wallet');

        }else if (secret === null) {

            secret = Utils.GetWallet('secret');

        }

        window.localStorage.setItem(`wallet_user_${ WebApp.initDataUnsafe.user.id }`, JSON.stringify({
            wallet: wallet,
            secret: secret,
        }))

    },

    HandleInputFocus: () => {

        window.scrollTo(0, 0);
        document.body.scrollTop = 0;

    }

};

export default Utils;