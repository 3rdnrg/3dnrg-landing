import React from 'react';

const Impressum = () => {
    return (
        <div className="max-w-screen-lg mx-auto p-8 bg-white rounded-lg shadow dark:bg-gray-900">
            <h1 className="text-4xl font-bold mb-8 text-center dark:text-gray-400 ">IMPRESSUM</h1>
            <div className="text-gray-700 dark:text-gray-400 space-y-6">
                <div>
                    <p>Bei Bedarf helfen wir Ihnen gern weiter. Um möglichst schnell Antworten auf Ihre Fragen zu erhalten, können Sie sich gerne an unseren Kundendienst wenden. Weitere Informationen finden Sie in unserem Hilfe-Center oder nehmen Sie Kontakt zu uns auf. Alternativ können
                        Sie eine E-Mail an den Kundensupport (cweigel@glc-group.com) schicken.
                        Bitte senden Sie keine Passwörter für Konten oder Zahlungsinformationen. </p>
                    <div>
                    <h2 className="text-xl font-semibold">Herausgeber</h2>
                    <p>Gesellschaft für Energieprojekte mbH</p>
                    <p>Gründungszentrum Clausthal-Zellerfeld</p>
                    <p>Agricolastraße 8, 38678 Clausthal-Zellerfeld</p>
                    <p>38678 Clausthal-Zellerfeld</p>
                    <p>Telefon: +49 (0)176 7260 2690</p>
                    <p>E-Mail: cweigel@glc-group.com</p>
                    <p>Internet: <a href="http://www.glc-group.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.glc-group.com</a></p>

                    </div>
                </div>


            </div>
        </div>
    );
}

export default Impressum;
