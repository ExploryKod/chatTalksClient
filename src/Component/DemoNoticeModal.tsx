import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import blackCat from "../assets/black-cat.png";

const STORAGE_KEY = "chattalks-demo-notice-dismissed";
const TARGET_PATHS = ["/", "/connexion"];

const DemoNoticeModal = () => {
    const location = useLocation();
    const [dismissed, setDismissed] = useState<boolean>(false);
    const [isInitialized, setIsInitialized] = useState<boolean>(false);

    // Initialize dismissed state from sessionStorage on mount
    useEffect(() => {
        if (typeof window === "undefined") {
            setIsInitialized(true);
            return;
        }
        
        // Check sessionStorage for dismissed state
        const stored = window.sessionStorage.getItem(STORAGE_KEY);
        setDismissed(stored === "true");
        setIsInitialized(true);
    }, []);

    // Update sessionStorage when dismissed state changes
    useEffect(() => {
        if (!isInitialized || typeof window === "undefined") {
            return;
        }
        
        if (dismissed) {
            window.sessionStorage.setItem(STORAGE_KEY, "true");
        } else {
            window.sessionStorage.removeItem(STORAGE_KEY);
        }
    }, [dismissed, isInitialized]);

    const shouldDisplay = useMemo(() => {
        // Only show if initialized, on target paths, and not dismissed
        return isInitialized && TARGET_PATHS.includes(location.pathname) && !dismissed;
    }, [location.pathname, dismissed, isInitialized]);

    const handleClose = () => {
        setDismissed(true);
    };

    if (!shouldDisplay) {
        return null;
    }

    return (
        <div className="modal" role="dialog" aria-modal="true" aria-labelledby="demo-notice-title">
            <div className="modal-content demo-notice-modal">
                <div className="modal-header">
                    <h2 id="demo-notice-title">Information importante</h2>
                    <button className="close" aria-label="Fermer la fenêtre" onClick={handleClose}>
                        &times;
                    </button>
                </div>
                <div className="modal-body demo-notice-body">
                    <div className="demo-notice-icons">
                        <img src={blackCat} alt="Chat" className="demo-notice-cat-icon" />
                        <img src={blackCat} alt="Chat" className="demo-notice-cat-icon" />
                    </div>
                    <p>
                        Ceci est un site de démo. Vous pouvez vous connecter avec un faux compte car la
                        confirmation par e-mail est désactivée. N&apos;utilisez pas votre vrai e-mail ni
                        d&apos;autres données personnelles durant la visite.
                    </p>
                </div>
                <div className="modal-footer">
                    <button className="footer__button-cancel" type="button" onClick={handleClose}>
                        J&apos;ai compris
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DemoNoticeModal;

