# GlobalGovernanceApp



## [DEPRECATED] Configurare l'ambiente di sviluppo

C'è bisogno di node.js ed npm. Installando l'ultima versione di node.js dal sito installerà anche npm

### Installare expo-cli
		npm install --global expo-cli

Dopo aver scaricato la cartella

Installare tutti i moduli node che compongono l'app. (simile a composer update)

		npm install
C'è bisogno di installare EAS (Expo Application Services) per creare la build

## Guida alla creazione della build

### Installazione pacchetti necessari

		npm install -g eas-cli
Una volta installato eas, bisognerà loggarsi con il proprio expo account dentro il progetto di quale si vuole creare la build

		eas login
Per vedere se i è già loggati utilizzare

		eas whoami
Dopo essersi loggati, bisogna configurare il progetto per la build. (ATTENZIONE: Nella repo su github la configurazione è già presente).

### Configurazione

		eas:build configure
Questo comando creerà un file eas.json all'interno del progetto che gestisce tutte le settings necessarie al processo di build.

### Creazione build

Comando per creare la build di Android. (in base alla configurazione già presente della repo)

		eas build -p android --profile development
		
Per maggiori dettagli sul processo e le possibili configurazioni, si veda: https://docs.expo.dev/build/setup/


