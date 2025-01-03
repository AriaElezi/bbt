import React from "react";

const UserConfirmation = () => {
    return (
            <div className="confirmation__user">
                <div className="body-big__regular">
                    Eine Nachricht mit den Anmeldedaten wurde an
                    <span className="confirmation__user--email body-big__medium">
                        “thomas.mueller@thomas-gruppe.de”
                    </span>
                    versendet.
                </div>
                <div className="body-big__regular">
                    Sie werden über eine erfolgreiche Registrierung benachrichtigt.
                </div>
            </div>
    );
};

export default UserConfirmation;
