export type Lang = "en" | "de";

export const LINKS = {
  plugin: "https://github.com/trainvent/obsidian-sports-plugin-releases",
  docs: "https://github.com/trainvent/obsidian-sports-plugin-releases#readme",
  imprint: "https://trainvent.com/impressum/",
  googlePermissions: "https://myaccount.google.com/permissions",
  googleUserDataPolicy: "https://developers.google.com/terms/api-services-user-data-policy",
  githubPrivacy: "https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement",
  contact: "mailto:impressum@trainvent.com",
};

export const PATHS: Record<Lang, { home: string; privacy: string }> = {
  en: { home: "/", privacy: "/privacy/" },
  de: { home: "/de/", privacy: "/de/privacy/" },
};

export const POLICY_DATE: Record<Lang, string> = { en: "18 November 2026", de: "18. November 2026" };

export const CONTROLLER = ["Trainvent, Inh. Leon Marquardt", "Ravensbergerstraße 75", "33602 Bielefeld, Germany"];
export const CONTACT_EMAIL = "impressum@trainvent.com";

interface Section { heading: string; paragraphs: string[]; list?: readonly string[]; links?: readonly { label: string; href: string }[] }

export const CONTENT = {
  en: {
    switchLabel: "Deutsch",
    nav: { privacy: "Privacy", imprint: "Imprint" },
    home: {
      title: "Sports for Obsidian",
      lead: "Plan your training in a spreadsheet, record workouts with your watch, and follow your progress in your Obsidian notes.",
      primary: "Get the plugin",
      secondary: "Documentation",
      featuresHeading: "What it does",
      features: [
        "Training plans from your XLSX or ODS workbook or a calendar subscription",
        "Workouts from Garmin, Google Health (for example Fitbit or Pixel Watch) and FIT, TCX or GPX files, for example from Apple Watch",
        "Day and week notes, charts and a dashboard inside your vault",
      ],
      googleHeading: "Google Health",
      google: [
        "Sports can import the workouts recorded in your Google Health account. After you connect your Google account, Sports reads your exercise sessions: start time, sport, name, duration, distance and average heart rate. It shows them in your training notes, charts and dashboard.",
        "Sports only asks for read access to your activity and fitness data. Everything stays in your Obsidian vault on your device; Trainvent never receives it. You can disconnect in the plugin settings or remove access in your Google account at any time.",
      ],
      privacyLink: "Read the privacy policy",
    },
    privacy: {
      title: "Privacy policy",
      updated: "Last updated",
      sections: [
        { heading: "In short", paragraphs: ["Sports is an Obsidian plugin that runs entirely on your device. Trainvent does not operate a server for Sports and does not receive, store or share your training data. Data you import stays in your Obsidian vault."] },
        { heading: "Who is responsible", paragraphs: [CONTROLLER.join(", ") + ".", `Contact: ${CONTACT_EMAIL}`] },
        {
          heading: "Google Health",
          paragraphs: [
            "If you connect Google Health, Sports asks Google for read-only access to your activity and fitness data (scope googlehealth.activity_and_fitness.readonly). Sports requests your recorded exercise sessions and keeps only these details of each one:",
            "Sports does not request routes or location, sleep, or other health measurements. It uses the data only to show your workouts in your notes, charts and dashboard and to match them with your planned training.",
            "Your device connects directly to Google. The workout summaries are saved in the plugin's data file inside your vault. Your Google sign-in tokens are saved in Obsidian's secret storage on your device, separately from your notes. Nothing is sent to Trainvent or any other party.",
            "Sports's use and transfer to any other app of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements. The data is never used for advertising, never sold, never used to train AI models, and never read by people at Trainvent.",
          ],
          list: ["start time and time zone offset", "type of sport and name", "active duration", "distance", "average heart rate"],
          links: [{ label: "Google API Services User Data Policy", href: LINKS.googleUserDataPolicy }],
        },
        {
          heading: "Removing access and data",
          paragraphs: [
            "Select Disconnect in the plugin settings to delete the saved Google sign-in from your device. You can also remove Sports's access in your Google account under Third-party apps & services. To delete imported workouts, use Clear cached data in the plugin settings or delete the plugin's data. Notes Sports created stay in your vault until you delete them.",
          ],
          links: [{ label: "Google account permissions", href: LINKS.googlePermissions }],
        },
        {
          heading: "Other connections",
          paragraphs: [
            "Garmin: if you connect Garmin, your device connects directly to Garmin. Your password is never saved; sign-in tokens are kept in Obsidian's secret storage, and activity summaries in your vault.",
            "Workout files, workbooks and calendars: Sports reads files from your vault, and downloads only the workbook or calendar links you enter. These stay on your device.",
            "Sports contains no analytics, tracking or advertising.",
          ],
        },
        {
          heading: "This website",
          paragraphs: [
            "This website is hosted on GitHub Pages. When you visit it, GitHub processes technical data such as your IP address to deliver the page. This website sets no cookies and uses no analytics. See GitHub's privacy statement for details.",
          ],
          links: [{ label: "GitHub privacy statement", href: LINKS.githubPrivacy }],
        },
        {
          heading: "Your rights",
          paragraphs: [
            "Under the GDPR you have the right to access, correct and delete your personal data, to restrict or object to processing, to data portability, and to complain to a data protection authority. Because Trainvent does not hold your Sports data, you control it directly on your device. For questions, contact us at the address above.",
          ],
        },
        { heading: "Changes", paragraphs: ["We will update this page if Sports starts handling data differently and change the date above."] },
      ] satisfies Section[],
    },
    footer: "Trainvent",
  },
  de: {
    switchLabel: "English",
    nav: { privacy: "Datenschutz", imprint: "Impressum" },
    home: {
      title: "Sports für Obsidian",
      lead: "Plane dein Training in einer Tabelle, zeichne Trainings mit deiner Uhr auf und verfolge deinen Fortschritt in deinen Obsidian-Notizen.",
      primary: "Plugin holen",
      secondary: "Dokumentation",
      featuresHeading: "Was es kann",
      features: [
        "Trainingspläne aus deiner XLSX- oder ODS-Arbeitsmappe oder einem Kalender-Abo",
        "Trainings von Garmin, Google Health (zum Beispiel Fitbit oder Pixel Watch) und aus FIT-, TCX- oder GPX-Dateien, zum Beispiel von der Apple Watch",
        "Tages- und Wochennotizen, Diagramme und ein Dashboard in deinem Vault",
      ],
      googleHeading: "Google Health",
      google: [
        "Sports kann die Trainings aus deinem Google-Health-Konto importieren. Nachdem du dein Google-Konto verbunden hast, liest Sports deine Trainingseinheiten: Startzeit, Sportart, Name, Dauer, Distanz und durchschnittliche Herzfrequenz. Es zeigt sie in deinen Trainingsnotizen, Diagrammen und im Dashboard.",
        "Sports fragt nur Lesezugriff auf deine Aktivitäts- und Fitnessdaten an. Alles bleibt in deinem Obsidian-Vault auf deinem Gerät; Trainvent erhält nichts davon. Du kannst die Verbindung jederzeit in den Plugin-Einstellungen trennen oder den Zugriff in deinem Google-Konto entfernen.",
      ],
      privacyLink: "Datenschutzerklärung lesen",
    },
    privacy: {
      title: "Datenschutzerklärung",
      updated: "Stand",
      sections: [
        { heading: "Kurz gesagt", paragraphs: ["Sports ist ein Obsidian-Plugin, das vollständig auf deinem Gerät läuft. Trainvent betreibt keinen Server für Sports und erhält, speichert oder teilt keine deiner Trainingsdaten. Importierte Daten bleiben in deinem Obsidian-Vault."] },
        { heading: "Verantwortlich", paragraphs: ["Trainvent, Inh. Leon Marquardt, Ravensbergerstraße 75, 33602 Bielefeld, Deutschland.", `Kontakt: ${CONTACT_EMAIL}`] },
        {
          heading: "Google Health",
          paragraphs: [
            "Wenn du Google Health verbindest, fragt Sports bei Google nur Lesezugriff auf deine Aktivitäts- und Fitnessdaten an (Bereich googlehealth.activity_and_fitness.readonly). Sports ruft deine aufgezeichneten Trainingseinheiten ab und behält von jeder nur diese Angaben:",
            "Sports fragt keine Routen oder Standorte, keinen Schlaf und keine anderen Gesundheitsmesswerte ab. Die Daten dienen nur dazu, deine Trainings in Notizen, Diagrammen und im Dashboard anzuzeigen und sie deinem geplanten Training zuzuordnen.",
            "Dein Gerät verbindet sich direkt mit Google. Die Trainingszusammenfassungen werden in der Datendatei des Plugins in deinem Vault gespeichert, deine Google-Anmeldetoken im geschützten Speicher von Obsidian auf deinem Gerät, getrennt von deinen Notizen. Nichts davon wird an Trainvent oder Dritte übermittelt.",
            "Die Nutzung und Weitergabe von Informationen, die Sports über Google-APIs erhält, an andere Apps erfolgt gemäß der Google API Services User Data Policy, einschließlich der Anforderungen zur eingeschränkten Nutzung (Limited Use). Die Daten werden nie für Werbung verwendet, nie verkauft, nie zum Training von KI-Modellen genutzt und nie von Personen bei Trainvent gelesen.",
          ],
          list: ["Startzeit und Zeitzonenversatz", "Sportart und Name", "aktive Dauer", "Distanz", "durchschnittliche Herzfrequenz"],
          links: [{ label: "Google API Services User Data Policy", href: LINKS.googleUserDataPolicy }],
        },
        {
          heading: "Zugriff und Daten entfernen",
          paragraphs: [
            "Wähle in den Plugin-Einstellungen Trennen, um die gespeicherte Google-Anmeldung von deinem Gerät zu löschen. Du kannst den Zugriff von Sports auch in deinem Google-Konto unter Drittanbieter-Apps und -Dienste entfernen. Importierte Trainings löschst du mit Zwischengespeicherte Daten löschen in den Plugin-Einstellungen oder indem du die Daten des Plugins löschst. Von Sports erstellte Notizen bleiben in deinem Vault, bis du sie löschst.",
          ],
          links: [{ label: "Google-Kontoberechtigungen", href: LINKS.googlePermissions }],
        },
        {
          heading: "Weitere Verbindungen",
          paragraphs: [
            "Garmin: Wenn du Garmin verbindest, verbindet sich dein Gerät direkt mit Garmin. Dein Passwort wird nie gespeichert; Anmeldetoken liegen im geschützten Speicher von Obsidian, Aktivitätszusammenfassungen in deinem Vault.",
            "Trainingsdateien, Arbeitsmappen und Kalender: Sports liest Dateien aus deinem Vault und lädt nur die Arbeitsmappen- oder Kalenderlinks herunter, die du einträgst. Diese bleiben auf deinem Gerät.",
            "Sports enthält keine Analyse-, Tracking- oder Werbefunktionen.",
          ],
        },
        {
          heading: "Diese Website",
          paragraphs: [
            "Diese Website wird über GitHub Pages bereitgestellt. Beim Aufruf verarbeitet GitHub technische Daten wie deine IP-Adresse, um die Seite auszuliefern. Diese Website setzt keine Cookies und verwendet keine Analysewerkzeuge. Einzelheiten findest du in der Datenschutzerklärung von GitHub.",
          ],
          links: [{ label: "Datenschutzerklärung von GitHub", href: LINKS.githubPrivacy }],
        },
        {
          heading: "Deine Rechte",
          paragraphs: [
            "Nach der DSGVO hast du das Recht auf Auskunft, Berichtigung und Löschung deiner personenbezogenen Daten, auf Einschränkung der Verarbeitung, auf Widerspruch, auf Datenübertragbarkeit sowie auf Beschwerde bei einer Datenschutzaufsichtsbehörde. Da Trainvent deine Sports-Daten nicht besitzt, kontrollierst du sie direkt auf deinem Gerät. Bei Fragen erreichst du uns unter der oben genannten Adresse.",
          ],
        },
        { heading: "Änderungen", paragraphs: ["Wenn Sports Daten künftig anders verarbeitet, aktualisieren wir diese Seite und das Datum oben."] },
      ] satisfies Section[],
    },
    footer: "Trainvent",
  },
} as const;
