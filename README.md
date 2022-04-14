# GlobalGovernanceApp

Dopo aver scaricato la cartella

Installare tutti i moduli node che compongono l'app. (simile a composer update)

		npm install
C'è bisogno di installare EAS (Expo Application Services) per creare la build

## Creazione build

		npm install -g eas-cli
Una volta installato eas, bisognerà loggarsi con il proprio expo account dentro il progetto di quale si vuole creare la build

		eas login
Per vedere se i è già loggati utilizzare

		eas whoami
Dopo essersi loggati, bisogna creare
Comando per creare la build di Android.

		eas build -p android --profile development
		
Per maggiori dettagli sul processo e le possibili configurazioni, si veda: https://docs.expo.dev/build/setup/


