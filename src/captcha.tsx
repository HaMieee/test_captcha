// ReCAPTCHAComponent.tsx
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

interface ReCAPTCHAComponentProps {
    onVerify: () => void;
}

const ReCAPTCHAComponent: React.FC<ReCAPTCHAComponentProps> = ({ onVerify }) => {
    const [verified, setVerified] = useState<boolean>(false);

    const handleVerify = (value: string | null) => {
        if (value) {
            setVerified(true);
            onVerify();
        }
    };
    return (
        <div>
            {!verified && (
                <ReCAPTCHA
                    sitekey="6LeyckUqAAAAAAJmdoVp75c8e4DIA4w59DyOLvpC"
                    onChange={handleVerify}
                />
            )}
        </div>
    );
};

export default ReCAPTCHAComponent;
