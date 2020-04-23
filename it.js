export default {
  self: 'xroom',
  on: 'acceso',
  off: 'spento',
  title: 'Ti serve una stanza conferenze?',
  buttons: {
    ok: 'ok',
    yes: 'Si',
    no: 'No',
    cancel: 'Annulla',
    retry: 'Riprova',
    chooseWindow: 'Scegli una finestra',
    wholeScreen: 'Schermo intero',
    install: 'Aggiungi',
    uninstall: 'Rimuovi',
    send: 'Invia',
    close: 'Chiudi',
    hide: 'Nascondi',
    knock: 'Toc toc',
    allowIn: 'Accesso consentito',
    deny: 'Accesso negato',
  },
  mbox: {
    notSupported: 'Sembra che questo browser non supporti XROOM o WebRTC sia disabilitato.',
    success: 'Operazione riuscita',
    failure: 'Operazione fallita',
    enterRoomName: 'Inserisci il nome della stanza per favore',
    isCamOn: 'La videocamera è accesa?',
    isCamOnText: 'Per favore verifica di non aver bloccato per sbaglio la videocamera/il microfono su questo sito e premi "Riprova".',
    isMicOn: 'Il microfono è acceso?',
    isMicOnText: 'Se vuoi parlare, abbiamo bisogno del tuo permesso per il microfono. Dai il consenso su questa pagina e premi "Riprova".',
    iWillOnlyWatch: 'Solo video',
    iWillOnlyListen: 'Solo audio',
    screenSharingText: 'La condivisione dello schermo non è consentita. Assicurati che non sia bloccata per questa pagina.<br><br>Anche questa funzione è supportata solo da browser aggiornati come Chrome o Firefox.',
    cannotFile: 'Dato che non possiamo accedere ai tuoi file, non possiamo inviarli dopo che qualcuno si è connesso. Devi farlo online.',
    cannotMessage: 'Dato che non possiamo accedere ai tuoi messaggi, non possiamo inviarli dopo che qualcuno si è connesso. Devi farlo online.',
    roomLockedText: 'Questa stanza è bloccata',
    oops: 'Scusa',
    kickedOutText: 'Sei stato buttato fuori',
    areYouSure: 'Sei sicuro?',
    doYouWantToLeave: 'Sei sicuro di voler uscire?',
    doYouWantToLeaveAsHost: 'Sei sicuro di voler interrompere lo streaming?',
    restartRequiredText: 'Questa impostazione influenza troppe cose, è necessario ricaricare la pagina. Ci mette un attimo, non ti preoccupare!',
    onlySafariOnIOS: 'iOS supporta solo Safari. "Grazie", Apple!',
    cannotLoadPlugin: 'Plugin "%s" non supporta il tuo browser',
    confirmFileSend: 'Vuoi inviarlo?',
    whatIsYourName: 'Inserisci un nuovo nome',
    setVideoVolume: 'Imposta il volume per questo video',
    roomLockedTryKnockText: 'La stanza è attualmente bloccata. Puoi chiedere il permesso di entrare "bussando" alla porta.',
    knockingFailedText: 'Tentativo di bussata fallito',
    doYouWantToKick: 'Sei sicuto di voler cacciare questo utente?',
    deviceChanged: 'Hai collegato/rimosso un nuovo dispositivo di input. Se non funziona, selezionalo manualmente da Impostazioni.',
    allowCameraPlz: 'Dopo aver premuto Ok per favore <b>dai il consenso</b> a xroom di usare la tua videocamera.<br><br>Non preoccuparti! Sarai in grado di spegnerla di nuovo prima di entrare nella stanza dal menu in basso, se vuoi rimanere non visibile.',
    tooOldBrowser: 'Il tuo browser non è supportato o è prodotto da Microsoft. Molte funzioni potrebbero non essere disponibili.',
    pluginsLoadFailed: 'Caricamento dei plugin non riuscito',
    researchConsent: 'Ciao!<br><br>Attualmente stiamo facendo un serio aggiornamento per migliorare il servizio.<br><br>Se si riscontrano errori, si prega di segnalarlo a hello@xroom.app',
    protoExpired: 'Too old client version. Please press Ctrl&nbsp;+&nbsp;F5 to reload. If you then see this message again please clear browser cache manually.',
    peerError: 'Something went wrong when exchanging data with your peers. We suggest reloading the page.',
    enterpriseOnly: 'This is an enterprise only feature.',
    pluginSuggested: 'User %s suggested you to install plugin %s. Do you wish to do it?',
  },
  home: {
    nisdos: 'Non usiamo i cookie',
    title: 'La tua sala conferenze personale',
    btnGo: 'Vai!',
    knowMore: 'Informazioni su xroom',
    nameRoom: 'Inserisci il nome della tua stanza:',
    placeholder: 'digita qui',
    rejoinRoom: 'o riunisciti a',
  },
  wl: {
    poweredBy: 'Offerto da',
  },
  pre: {
    checkIt: 'Controlla il tuo microfono e le cuffie',
    btnGo: 'Entra',
    knockDenied: 'La tua richiesta di bussata è stata respinta. Non puoi entrare nella stanza. :(',
    knockRequested: 'In attesa di permesso. Le persone possono vederti attraverso lo spioncino.',
    noAudio: 'Nessun segnale dal microfono rilevato',
    roomIsBusyWebinar: 'Un webinar/streaming è attualmente in corso',
    roomIsBusyConference: 'Una conferenza è attualmente in corso',
    startWebinar: 'Avvia in modalita streaming/webinar',
  },
  videoMenu: {
    hint: 'Attiva/disattiva menu',
    expand: 'Espandi',
    fullscreen: 'Schermo intero',
    volume: 'Volume A}',
    restore: 'Ripristina',
    kick: 'Caccia',
  },
  controls: {
    ss: 'Schermo %s',
    cam: 'Video %s',
    mic: 'Mic %s',
    chat: 'Chat %s',
    exit: 'Esci',
    xroom: 'Offerto da xroom',
    settings: 'Impostazioni',
    plugins: 'Plugin',
    media: 'Media',
    more: 'Più',
    letMeSpeak: 'Fammi parlare',
  },
  reactions: {
    letMeSpeak: 'Voglio parlare!',
  },
  waiting: {
    invite: 'Invita i tuoi colleghi',
    beforeCopy: 'Clicca per copiare',
    afterCopy: 'Copiato. Condividilo!',
    webinar: 'Il Webinar non è ancora iniziato',
  },
  video: {
    you: 'Tu (clicca per nominare)',
    someone: 'Qualcuno',
    knocking: 'stai bussando...',
    poorNet: 'Connessione lenta',
  },
  chat: {
    fileSending: 'Invio file: ',
    fileReceived: 'File ricevuto: ',
    inputPlaceholder: 'Digita un messaggio e premi invio ...',
    me: 'me',
    dropMe: 'Scrivimi!',
  },
  webinar: {
    peersCount: '%s persone stanno guardando',
  },
  settings: {
    experimental: '*) in fase beta, funziona in modo instabile',
    showCameraWithScreen: 'Mostra la videocamera durante la condivisione dello schermo *',
    qualityLevel: 'Alta definizione (utilizza più traffico dati)',
    autoGetIn: 'Avvia chat senza anteprima',
    soundEffects: 'Effetti sonori',
    noisyBackground: 'Sono in un posto rumoroso',
    rtcDebug: 'Debug RTC',
    audioDevices: 'Fonti audio',
    videoDevices: 'Fonti video',
    language: 'Lingua',
    theme: 'Colore tema',
    server: 'Server',
  },
  plugins: {
    by: 'da',
    size: 'dimensione: %s kB',
    searchPlaceholder: 'Ricerca in corso...',
    source: 'Codice sorgente',
    add: {
      title: 'Aggiungi un nuovo plugin',
      descr: 'Stai sviluppando un nuovo plugin? Aggiungilo qui per testarlo. Non è stato salvato, ricaricando la pagina viene rimosso dalla memoria. Il manuale dei plugin API è disponibile <a href="https://github.com/punarinta/xroom-plugins" target="_blank">qui</a>.',
      name: 'Qual è il nome del plugin?',
      rootUrl: 'Dov`è il plugin root?',
      loaded: 'Evviva! Caricamento riuscito!',
      loadFailed: 'Caricamento del plugin fallito',
    }
  },
  feedback: {
    header: 'Oh, scusa, solo un attimo...',
    question: 'Questa volta è andato tutto bene?',
    videoFroze: 'No, video bloccato',
    soundLagged: 'No, audio rallentato',
    cantConnect: 'No, qualcuno non è riuscito a connettersi',
    smthElse: 'Qualcos`altro:',
    feedbackInput: 'lascia il feedback...',
    contactMe: 'Contattami per favore:',
    emailInput: 'la tua email...',
  },
  tips: {
    prefix: 'Consiglio del giorno: ',
    lines: [
      'Attivi/disattivi l`audio spesso? C`è il tasto di scelta rapida "m" per quello.',
      'Fai doppio clic su un video remoto per visualizzarlo a schermo intero.',
      'Hai bisogno di chiudere la tua stanza? Aggiungi semplicemente il blocco della stanza nei plugin di seguito.',
      'Usa Slack e vuoi risparmiare più tempo? Prova il nostro <a href="//about.xroom.app/en/library/slack-bot" target="_blank">bot di Slack</a>.',
      'Perdi le videochiamate su Telegram? Il nostro <a href="//about.xroom.app/en/library/telegram-bot" target="_blank">bot di Telegram</a> è qui per aiutarti.',
      'Devi condividere un`immagine copiata? Fai Ctrl+V nella chat, noi penseremo al resto.',
      'Clicca sul tuo nome per modificarlo sia localmente che per i tuoi colleghi.',
      'Hai mai avuto bisogno di registrare il tuo schermo con pochi clic? Prova il nostro plug-in per la registrazione dello schermo.',
      'Devi disegnare durante una chiamata? Prova il plug-in di disegno. Non dimenticare di attivare la condivisione dello schermo.',
      'Clicca sul tuo nome o "Tu" per rinominare te stesso per tutti.',
    ]
  },
}
