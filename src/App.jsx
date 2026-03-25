import React from "react";
import { BrowserRouter, Routes, Route, useNavigate, useParams } from "react-router-dom";


import luca from "./assets/luca.png";
import letzte from "./assets/letzte.png"
import hunter from "./assets/hunter.png";
import richter from "./assets/richte.png";
import red from "./assets/pngaaa.com-4283378.png";
import mahoraga from "./assets/mahoraga.png";
import higuruma from "./assets/higuruma.png";
import saul from "./assets/saul.png";
import goku from "./assets/goku.png";
import chrollo from "./assets/chrollo.png"
import law from "./assets/law.png"
import speedwagon from "./assets/speedwagon.png"

const npcImages = { luca, richter, letzte };

const lawyerOptions = [
  { id: "luca",    name: "Leorio",        img: hunter   },
  { id: "richter", name: "Mahoraga",      img: mahoraga },
  { id: "red",     name: "Phoenix Wright", img: red      },
  { id: "higuruma",     name: "higuruma", img: higuruma      },
  { id: "Saul",     name: "Saul Goodman", img: saul      },
  {id: "chrollo", name: "Chrollo lucifer", img: chrollo},
  {id: "goku", name: "Son Goku", img: goku},
  {id: "law", name: "Trafalgar D. Law", img: law},
  {id: "speedwagon", name: "Speedwagon", img: speedwagon},
];

function getPortrait(characterKey, selectedLawyerId) {
  if (characterKey === "luca") return lawyerOptions.find(l => l.id === selectedLawyerId)?.img ?? hunter;
  return npcImages[characterKey] ?? npcImages.richter;
}

const cases = {

  // ══════════════════════════════════════════════════════
  // TIER 1
  // ══════════════════════════════════════════════════════
  tierone: [

    // ──────────────────────────────────────────────────
    // CASE 1: Gestohlene Kunst im Kunsthaus Zürich
    // Story: 0-10  |  FAIL: 11-16  |  END: 17-19
    // ──────────────────────────────────────────────────
    {
      id: "kunstDiebstahl",
      title: "Gestohlene Kunst im Kunsthaus Zürich",
      scenes: [
        // 0
        { text: "Sicherheitsmitarbeiter Wagner: «Ich habe Herrn Müller gestern Nacht um 22:45 Uhr im Museumssaal gesehen – direkt neben dem Gemälde!»", speaker: "Zeuge Wagner", character: "luca",
          options: [{ label: "⚖ Zeugen befragen", next: 1 }, { label: "🔍 Beweise sichern", next: 2 }, { label: "🚫 Aussage ignorieren", next: 11 }] },
        // 1
        { text: "Wagner ist nervös. Seine Aussagen widersprechen sich – mal sah er Müller, mal eine unbekannte Person mit Kapuze.", speaker: "Zeuge Wagner", character: "luca",
          options: [{ label: "🤝 Sanft nachhaken – Kleidungsdetails", next: 3 }, { label: "⚡ Widersprüche konfrontieren", next: 12 }] },
        // 2
        { text: "Das Überwachungsvideo zeigt eine Gestalt mit auffälliger blauer Jacke. Am Bilderrahmen wurden Fingerabdrücke gesichert.", speaker: "Ermittler", character: "richter",
          options: [{ label: "🎥 Video dem Zeugen vorlegen", next: 3 }, { label: "🔴 Müller sofort beschuldigen", next: 13 }, { label: "🧪 Fingerabdrücke analysieren", next: 4 }] },
        // 3
        { text: "Wagner räumt ein: «Die Person trug eine blaue Jacke mit einem Adler-Aufnäher. Ich bin nicht 100 % sicher – aber dieses Detail erinnere ich genau.»", speaker: "Zeuge Wagner", character: "luca",
          options: [{ label: "🧥 Jacken-Spur verfolgen", next: 5 }, { label: "📋 Sicherheitsprotokolle prüfen", next: 6 }, { label: "🗑 Zeugenaussage fallen lassen", next: 14 }] },
        // 4
        { text: "Labor: «70 % Übereinstimmung mit Müllers Fingerabdrücken am Rahmen – partiell, aber signifikant. Allein nicht ausreichend.»", speaker: "Forensik-Labor", character: "richter",
          options: [{ label: "🧬 DNA-Analyse anfordern", next: 7 }, { label: "🤜 Müller konfrontieren", next: 8 }, { label: "❌ Fingerabdrücke verwerfen", next: 15 }] },
        // 5
        { text: "Eine Kaufhausquittung belegt: Müller erwarb eine identische blaue Jacke mit Adler-Aufnäher – am Morgen des Tattages.", speaker: "Beweis gesichert", character: "red",
          options: [{ label: "📁 Quittung sichern + Beweiskette fortsetzen", next: 9 }, { label: "🏠 Müllers Wohnung durchsuchen", next: 10 }] },
        // 6
        { text: "Das Sicherheitsprotokoll zeigt: Müllers Mitarbeiterausweis wurde um 22:47 Uhr im Saal gescannt – exakt zur Tatzeit.", speaker: "Sicherheitsprotokoll", character: "richter",
          options: [{ label: "🕐 Protokoll mit Video abgleichen", next: 9 }, { label: "⚡ Müller direkt konfrontieren", next: 8 }] },
        // 7
        { text: "DNA-Analyse bestätigt: Müllers Hautschuppen am Rahmen. Starker Beweis – doch Müller schweigt.", speaker: "DNA-Labor", character: "red",
          options: [{ label: "🔗 DNA + Video + Protokoll bündeln", next: 9 }, { label: "📊 Nur DNA vorlegen", next: 17 }] },
        // 8
        { text: "Müller: «Kein Kommentar.» – Er verspricht sich: Er beschreibt exakt, wo das Bild hing, obwohl nie öffentlich bekannt.", speaker: "Verdächtiger Müller", character: "luca",
          options: [{ label: "📝 Versprecher protokollieren + bündeln", next: 9 }, { label: "🚔 Sofortige Verhaftung", next: 16 }] },
        // 9
        { text: "Du hast: Zeugenaussage (Jacke + Aufnäher), Badge-Protokoll (22:47 Uhr), Video-Footage und Müllers Versprecher. Der Richter hört konzentriert zu.", speaker: "Gerichtssaal", character: "richter",
          options: [{ label: "⚖ Vollständigen Fall vorlegen", next: 18 }, { label: "🤝 Vergleich anbieten", next: 17 }, { label: "🏠 Wohnung durchsuchen", next: 10 }] },
        // 10
        { text: "In Müllers Wohnung: Restaurationswerkzeug, Lösungsmittel – und hinter einer Wandverkleidung das gestohlene Gemälde!", speaker: "Durchsuchungsprotokoll", character: "red",
          options: [{ label: "🖼 Gemälde sichern + Fall abschließen", next: 19 }, { label: "🚔 Müller sofort verhaften", next: 18 }] },
        // 11 FAIL
        { text: "Ohne Zeugenaussage fehlte jeder Ansatzpunkt. Der Fall wurde eingestellt. Müller ist frei.", speaker: "Urteil", character: "red", fail: true },
        // 12 FAIL
        { text: "Unter dem Druck brach Wagner zusammen und zog die Aussage zurück. Das Gericht verwarf alles.", speaker: "Urteil", character: "luca", fail: true },
        // 13 FAIL
        { text: "Ohne Beweise ist die Anklage haltlos. Müller freigesprochen – droht mit Verleumdungsklage.", speaker: "Urteil", character: "richter", fail: true },
        // 14 FAIL
        { text: "Die Zeugenaussage zur Jacke war das entscheidende Bindeglied. Ohne sie blieb der Fall ungelöst.", speaker: "Urteil", character: "luca", fail: true },
        // 15 FAIL
        { text: "Die verworfenen Fingerabdrücke hätten alles zusammengeführt. Müller kam frei.", speaker: "Urteil", character: "richter", fail: true },
        // 16 FAIL
        { text: "Verfrühte Verhaftung ohne Beweise. Müller sofort entlassen – Ihr Ruf litt erheblich.", speaker: "Urteil", character: "luca", fail: true },
        // 17 NEUTRAL
        { text: "Müller akzeptierte einen Vergleich: 2 Jahre Bewährung. Das Gemälde bleibt verschwunden.", speaker: "Urteil", character: "richter", success: true, outcome: "neutral" },
        // 18 GOOD
        { text: "Überzeugender Fall! Müller zu 4 Jahren Haft verurteilt. Das Kunsthaus dankt Ihnen persönlich.", speaker: "Urteil", character: "red", success: true, outcome: "good" },
        // 19 PERFECT
        { text: "Gemälde gerettet, Müller verurteilt, Höchststrafe. Ihr Name steht in den Zürich-Annalen!", speaker: "Urteil", character: "luca", success: true, outcome: "perfect" },
      ],
    },

    {
      id: "toterBanker",
      title: "Der tote Banker von der Bahnhofstrasse",
      scenes: [
        // 0 – Opening
        { text: "Bankdirektor Markus Hofer wurde heute Morgen tot in seinem Büro an der Bahnhofstrasse aufgefunden. Erste Erkenntnisse deuten auf Vergiftung hin. Die Presse wartet vor dem Gebäude.", speaker: "Kriminaltechniker", character: "richter",
          options: [{ label: "🔬 Tatort untersuchen", next: 1 }, { label: "👤 Zeugen befragen", next: 2 }, { label: "🚔 Direkt Verdächtigen verhaften", next: 17 }] },
        // 1 – Tatort
        { text: "Hofers Büro: Eine halbgeleerte Kaffeetasse mit weisslichem Rückstand. Kein Einbruch, kein Kampf. Das Fenster war von innen verschlossen. Der Täter kannte das Gebäude.", speaker: "Tatortbefund", character: "richter",
          options: [{ label: "🧪 Tasse ins Labor schicken", next: 3 }, { label: "🎥 Sicherheitskameras auswerten", next: 4 }, { label: "🖐 Fingerabdrücke sichern", next: 5 }] },
        // 2 – Sekretärin
        { text: "Sekretärin Petra Meier ist erschüttert: «Herr Hofer hatte gestern Nachmittag einen heftigen Streit mit seinem Assistenten Baumann. Die Kündigung stand unmittelbar bevor.»", speaker: "Sekretärin Meier", character: "luca",
          options: [{ label: "👔 Assistent Baumann befragen", next: 6 }, { label: "📦 Details zur anonymen Schachtel", next: 7 }, { label: "🚫 Aussage ignorieren", next: 18 }] },
        // 3 – Labor
        { text: "Labor-Ergebnis: Aconitin – ein hochpotentes Pflanzengift, kaum erkennbar im Körper. Nur in spezialisierten Apotheken erhältlich. Dosierung war präzise und geplant.", speaker: "Forensik-Labor", character: "richter",
          options: [{ label: "💊 Giftquelle recherchieren", next: 8 }, { label: "📋 Hofers Feinde ermitteln", next: 9 }, { label: "❌ Befund als unklar verwerfen", next: 19 }] },
        // 4 – Kamera
        { text: "Kameradesk: 18:28 Uhr betritt Baumann das Büro. 18:32 Uhr – eine zweite, vermummte Person. 18:45 Uhr verlässt Baumann. Die zweite Person verlässt um 18:50 Uhr. Beide nutzten Schlüsselkarten.", speaker: "Sicherheitskamera", character: "richter",
          options: [{ label: "🗝 Schlüsselkartendaten prüfen", next: 10 }, { label: "👔 Baumann direkt konfrontieren", next: 6 }, { label: "🚫 Footage beiseitelegen", next: 18 }] },
        // 5 – Fingerabdrücke
        { text: "Drei Fingerabdruck-Sets am Schreibtisch: Hofer (erwartet), Baumann, und ein dritter – teilweise verwischt, aber deutlich erkennbar. Abgleich mit Datenbank läuft.", speaker: "Forensik", character: "richter",
          options: [{ label: "🔍 Dritten Abdruck identifizieren", next: 11 }, { label: "👔 Baumann als Hauptverdächtigen", next: 6 }] },
        // 6 – Baumann befragen
        { text: "Assistent Jonas Baumann ist nervös, schweissig. Er gibt den Streit zu, bestreitet aber Gift. «Ich war um 19 Uhr weg – das war's.» Dabei verdreht er ständig die Hände.", speaker: "Assistent Baumann", character: "luca",
          options: [{ label: "📹 Kamerabeleg 18:45 Uhr vorlegen", next: 12 }, { label: "🏠 Baumanns Wohnung durchsuchen", next: 13 }, { label: "🚔 Baumann sofort verhaften", next: 20 }] },
        // 7 – Pralinenschachtel
        { text: "Petra Meier erinnert sich: «Herr Hofer erhielt gestern eine elegante Pralinenschachtel – ohne Absender. Er hat sofort zugegriffen. Die Schachtel steht noch im Büro!»", speaker: "Sekretärin Meier", character: "luca",
          options: [{ label: "🍫 Pralinenschachtel ins Labor", next: 3 }, { label: "👆 Absender über Fingerabdrücke", next: 11 }] },
        // 8 – Apothekenrecherche
        { text: "Apotheke Zürichberg: Aconitin wurde vor 3 Tagen auf gefälschtes Rezept ausgegeben. Der Verkäufer erinnert sich vage an den Kunden. CCTV der Apotheke ist noch verfügbar.", speaker: "Apothekenregister", character: "red",
          options: [{ label: "📹 Apotheken-CCTV auswerten", next: 11 }, { label: "📝 Rezept-Handschrift analysieren", next: 11 }] },
        // 9 – Feinde
        { text: "Ermittlungsakte: Hofer hatte drei bekannte Feinde. Assistent Baumann (drohende Kündigung), Ex-Kompagnon Heinrich Kurz (Schulden 2 Mio CHF, Streit seit Jahren), anonyme Drohbriefe (unbekannte Quelle).", speaker: "Ermittlungsakte", character: "richter",
          options: [{ label: "💰 Ex-Kompagnon Kurz überprüfen", next: 11 }, { label: "✉ Drohbriefe forensisch analysieren", next: 5 }, { label: "👔 Baumann im Fokus behalten", next: 6 }] },
        // 10 – Schlüsselkartendaten
        { text: "Schlüsselverwaltung: Baumanns Karte aktiv (erwartet). Zweite Karte: Ex-Kompagnon Heinrich Kurz – sein Zugang wurde nie deaktiviert! Er betrat um 18:32 das Büro.", speaker: "Zutrittssystem", character: "red",
          options: [{ label: "🕵 Heinrich Kurz ermitteln", next: 11 }, { label: "⚡ Baumann + Kurz gleichzeitig konfrontieren", next: 12 }] },
        // 11 – Kurz identifiziert
        { text: "Treffer: Der dritte Fingerabdruck gehört Ex-Kompagnon Heinrich Kurz. Apotheken-CCTV bestätigt ihn in Verkleidung (Narbe am Handgelenk erkennbar). Kurz hatte Motiv: 2 Mio CHF Schulden bei Hofer – fällig nächste Woche.", speaker: "Forensik-Datenbank", character: "richter",
          options: [{ label: "🎯 Kurz direkt befragen", next: 14 }, { label: "🔗 Baumann & Kurz als Komplizen", next: 12 }] },
        // 12 – Baumann-Geständnis
        { text: "Baumann bricht nach 40 Minuten ein: «Kurz hat mir 50'000 CHF geboten. Ich sollte nur die Tür offen lassen und nichts sagen. Vom Gift wusste ich nichts – ich schwöre es!»", speaker: "Assistent Baumann", character: "luca",
          options: [{ label: "📋 Aussage sichern + Kurz verhaften lassen", next: 15 }, { label: "⚖ Nur Baumann anklagen", next: 23 }, { label: "🤝 Vergleich für Baumann anbieten", next: 22 }] },
        // 13 – Baumanns Wohnung
        { text: "Hausdurchsuchung: In Baumanns Kühlschrank ein Briefumschlag – 50'000 CHF Bargeld. Fingerabdrücke auf dem Umschlag: Heinrich Kurz. Ein Burner-Handy mit gelöschten Nachrichten wurde gesichert.", speaker: "Hausdurchsuchung", character: "red",
          options: [{ label: "📱 Burner-Handy forensisch auslesen", next: 15 }, { label: "💵 Geld + Fingerabdrücke vorlegen", next: 23 }] },
        // 14 – Kurz Alibi
        { text: "Kurz: «Alibi? Ich war geschäftlich in Lugano.» Sein Zugticket ist echt – aber Bahnhof-Kameras zeigen: Er stieg in Zürich HB aus und kehrte mit dem nächsten Zug zurück. Zwei Stunden unaccounted.", speaker: "Verdächtiger Kurz", character: "luca",
          options: [{ label: "🚆 Zugdaten + Kamerabelege vorlegen", next: 15 }, { label: "📋 Nur Zugdaten – Verurteilung beantragen", next: 23 }, { label: "🚔 Kurz ohne weiteres verhaften", next: 21 }] },
        // 15 – Entscheidungspunkt
        { text: "Du hast: Baumann-Geständnis (Kurz als Auftraggeber), Aconitin-Nachweis (Pralinenschachtel), Schlüsselkartendaten (Kurz 18:32), Fingerabdrücke (Kurz), Apotheken-CCTV, Alibi-Widerlegung, Bargeld mit Kurz' Abdrücken. Der Richter lehnt sich vor.", speaker: "Gerichtssaal", character: "richter",
          options: [{ label: "⚖ Vollständigen Fall vorlegen – Urteil beantragen", next: 23 }, { label: "🏠 Kurz' Privatwohnung noch durchsuchen", next: 16 }, { label: "🤝 Vergleich für schnelle Einigung", next: 22 }] },
        // 16 – Kurz' Wohnung (Bonus-Szene)
        { text: "In Kurz' Wohnung am Zürichberg: Ein Tresor mit gefälschten Dokumenten, 300'000 CHF Bargeld und – entscheidend – ein Notizbuch mit detaillierten Plänen für den Mord an Hofer inklusive Datum und Dosierungsangaben.", speaker: "Hausdurchsuchung", character: "red",
          options: [{ label: "📔 Notizbuch + alle Beweise vorlegen", next: 24 }, { label: "⚖ Zum Urteil schreiten", next: 23 }] },
        // 17 FAIL
        { text: "Ohne Beweise oder Zeugen ist die vorschnelle Verhaftung rechtswidrig. Der Verdächtige wird sofort freigelassen – und sein Anwalt reicht Beschwerde ein.", speaker: "Urteil", character: "richter", fail: true },
        // 18 FAIL
        { text: "Der ignorierte Hinweis war das Bindeglied des Falls. Ohne ihn fehlen entscheidende Beweisstücke – das Verfahren wird eingestellt.", speaker: "Urteil", character: "luca", fail: true },
        // 19 FAIL
        { text: "Ohne den Giftnachweis gibt es keine Grundlage für eine Mordanklage. Der Fall wird als ungeklärter Todesfall zu den Akten gelegt.", speaker: "Urteil", character: "richter", fail: true },
        // 20 FAIL
        { text: "Baumann wird verhaftet, doch ohne Geständnis und Hauptbeweis ist der Fall brüchig. Kurz hört von der Verhaftung und flüchtet ins Ausland. Auslieferungsantrag läuft – doch es dauert Jahre.", speaker: "Urteil", character: "luca", fail: true },
        // 21 FAIL
        { text: "Verhaftung ohne ausreichende Beweislage. Kurz' Anwalt beantragt sofortige Entlassung – Richterin bewilligt. Kurz ist gewarnt und vernichtet alle Spuren.", speaker: "Urteil", character: "richter", fail: true },
        // 22 NEUTRAL
        { text: "Baumann akzeptiert einen Vergleich: 3 Jahre Bewährung für Beihilfe. Kurz flieht vor der Verhaftung nach Singapur – Auslieferungsverfahren läuft, Ausgang ungewiss.", speaker: "Urteil", character: "richter", success: true, outcome: "neutral" },
        // 23 GOOD
        { text: "Überzeugender Fall! Kurz zu 12 Jahren verurteilt, Baumann zu 4 Jahren als Beihilfe. Die Bankenaufsicht leitet zusätzliche Ermittlungen gegen Kurz' Firmen ein.", speaker: "Urteil", character: "red", success: true, outcome: "good" },
        // 24 PERFECT
        { text: "Vernichtende Beweislage. Kurz erhält die Höchststrafe: 18 Jahre. Baumann 6 Jahre. Kurz' Vermögen wird eingezogen. Das Notizbuch geht in die Rechtslehre ein – als Paradebeispiel gesicherter Tatplanung.", speaker: "Urteil", character: "luca", success: true, outcome: "perfect" },
      ],
    },

    {
      id: "testamentFälschung",
      title: "Das manipulierte Testament",
      scenes: [
        // 0 – Opening
        { text: "Mandant Thomas Hofmann, 42: «Mein Vater ist vor drei Wochen verstorben. Ich bin sein einziger Sohn – doch das Testament begünstigt vollständig meine Halbschwester Sandra. Das ist nicht mein Vater. Er hat mich immer geliebt.»", speaker: "Mandant Hofmann", character: "luca",
          options: [{ label: "📜 Testament juristisch prüfen", next: 1 }, { label: "🏛 Notar befragen", next: 2 }, { label: "🚫 Fall als hoffnungslos ablehnen", next: 15 }] },
        // 1 – Testament prüfen
        { text: "Dokumentenanalyse: Das Datum des Testaments ist exakt drei Tage vor dem Tod des Vaters. Die Tinte am Rand ist chemisch jünger als der Rest. Die Unterschrift zeigt statistisch signifikante Abweichungen vom Referenzmuster.", speaker: "Dokumentenanalyse", character: "richter",
          options: [{ label: "✍ Handschriftenexperten beauftragen", next: 3 }, { label: "💻 Digitale Metadaten prüfen", next: 7 }, { label: "⚠ Zweifel nicht weiterverfolgen", next: 16 }] },
        // 2 – Notar
        { text: "Notar Dr. Franz Kellner ist spürbar nervös. Er widerspricht sich bei Details der Beurkundung zweimal. Seine Hände zittern. «Das Testament wurde korrekt aufgesetzt – wie immer.» Auf Nachfragen wird er einsilbig.", speaker: "Notar Dr. Kellner", character: "luca",
          options: [{ label: "👥 Beurkundungs-Zeugen suchen", next: 4 }, { label: "💳 Kellners Konten prüfen", next: 9 }, { label: "🚫 Notar ignorieren", next: 15 }] },
        // 3 – Handschriftenexperte
        { text: "Gutachterin Dr. Lena Strauss: «38 % Abweichung von Herrn Hofmanns Referenzunterschriften aus anderen Dokumenten. Besonders der Schlusskringel fehlt vollständig – dieser war sein persönliches Markenzeichen seit Jahrzehnten.»", speaker: "Handschriftenexpertin", character: "richter",
          options: [{ label: "🧠 Psychiatrisches Gutachten zur Testierfähigkeit", next: 8 }, { label: "🔒 Notarsiegel prüfen lassen", next: 11 }, { label: "⚠ Gutachten als unzureichend werten", next: 16 }] },
        // 4 – Zeugen
        { text: "Als Zeugen der Beurkundung sind zwei Personen angegeben. Zeuge 1 ist nachweislich im Urlaub gewesen – Flugdaten belegen dies. Zeuge 2: Herr Voss – ist Sandra Hofmanns Ehemann.", speaker: "Zeugen-Recherche", character: "richter",
          options: [{ label: "🤵 Voss als Zeugen vorladen", next: 5 }, { label: "👩 Sandra Hofmann konfrontieren", next: 5 }, { label: "⚠ Zeugenprobleme ignorieren", next: 15 }] },
        // 5 – Sandra / Voss konfrontieren
        { text: "Sandra Hofmann tritt kühl und vorbereitet auf. Doch sie beschreibt den Inhalt der Beurkundungssitzung mit Details, die sie nur kennen konnte, wenn sie dabei war – was laut Protokoll nicht sein dürfte.", speaker: "Sandra Hofmann", character: "luca",
          options: [{ label: "💰 Sandras finanzielle Situation untersuchen", next: 6 }, { label: "🤫 Kronzeuge Haushälterin ausfindig machen", next: 10 }, { label: "🚫 Sandra direkt beschuldigen (ohne Beweise)", next: 17 }] },
        // 6 – Finanzielle Motive
        { text: "Sandras Konten: 847'000 CHF Schulden, davon 400'000 bei einer dubiosen Privatkreditfirma. Die letzte Mahnung datiert auf denselben Tag wie die vermutliche Testamentsfälschung. Motiv ist eindeutig.", speaker: "Finanzanalyse", character: "red",
          options: [{ label: "🔗 Schulden + Fälschung als Motiv verknüpfen", next: 14 }, { label: "🔑 Geheimkonto des Notars prüfen", next: 9 }] },
        // 7 – Digitale Metadaten
        { text: "PDF-Metadaten des eingescannten Testaments: Erstellt auf einem Rechner, der Sandra Hofmann gehört – MAC-Adresse eindeutig. Zeitstempel: 2:14 Uhr nachts, drei Tage vor dem Tod des Vaters.", speaker: "IT-Forensik", character: "red",
          options: [{ label: "🔗 Metadaten + Handschrift kombinieren", next: 3 }, { label: "🔒 Notarsiegel prüfen", next: 11 }] },
        // 8 – Psychiatrisches Gutachten
        { text: "Psychiater Dr. Meer: «Herr Hofmann senior litt in den letzten sechs Monaten an mittelgradiger Demenz. Er war testierfähig – aber hochgradig beeinflussbar. Besonders durch Familienmitglieder.»", speaker: "Psychiatrisches Gutachten", character: "richter",
          options: [{ label: "🧩 Gutachten + Unterschriftenanalyse bündeln", next: 14 }, { label: "🤫 Haushälterin als Kronzeugin", next: 10 }] },
        // 9 – Notars Geheimkonto
        { text: "Bankunterlagen (Rechtshilfeverfahren): Notar Kellner erhielt 500'000 CHF auf ein Konto in Liechtenstein – überwiesen von einer Briefkastenfirma, die auf Sandra Hofmann zurückgeführt werden kann.", speaker: "Bankermittlung", character: "red",
          options: [{ label: "🤝 Kellner mit Konto konfrontieren – Geständnis fordern", next: 13 }, { label: "🔗 Geld + Fälschung zur Anklage bündeln", next: 14 }] },
        // 10 – Haushälterin Kronzeuge
        { text: "Haushälterin Rosa Fink, 67, war dabei: «Fräulein Sandra kam mit einem Herrn Kellner. Der Vater war verwirrt. Sie haben ihm die Hand geführt. Er hat gefragt, was er unterschreibt – die sagten: ‹Steuerformular.›»", speaker: "Kronzeugin Fink", character: "luca",
          options: [{ label: "📋 Aussage notariell beglaubigen lassen", next: 14 }, { label: "🔒 Aussage mit Notarsiegel-Fälschung verknüpfen", next: 11 }] },
        // 11 – Notarsiegel gefälscht
        { text: "Siegelprüfungsstelle: Das Amtssiegel auf dem Testament ist eine hochwertige Reproduktion – kein Original. Der echte Siegel-Stempel des Notariats wurde nie für dieses Dokument verwendet.", speaker: "Siegelprüfungsstelle", character: "richter",
          options: [{ label: "🔗 Siegel + Metadaten + Unterschrift als Dreiklang", next: 14 }, { label: "🤝 Kellner konfrontieren", next: 13 }] },
        // 12 (not used directly, but kept for index alignment) – actually let me use it
        { text: "Zusätzliche Recherche: Sandra Hofmanns Ehemann Voss hat eine Vorstrafe wegen Urkundenfälschung – vor 12 Jahren. Der Fall wurde damals niedergeschlagen. Muster erkennbar.", speaker: "Strafregister", character: "richter",
          options: [{ label: "🔗 Voss Vorstrafe + aktuellen Fall verbinden", next: 14 }, { label: "👩 Sandra nun direkt beschuldigen", next: 14 }] },
        // 13 – Kellner Geständnis
        { text: "Kellner bricht nach einer Stunde Verhör ein: «Sandra hat mich erpresst. Sie wusste von einer alten Unregelmässigkeit in meiner Kanzlei. Ich hatte keine Wahl. Ich… Gott, was habe ich getan.»", speaker: "Notar Dr. Kellner", character: "luca",
          options: [{ label: "📋 Geständnis sichern + Sandra anklagen", next: 14 }, { label: "⚖ Sofort zur Verhandlung", next: 20 }] },
        // 14 – Entscheidung
        { text: "Du hast: Unterschriften-Gutachten (38 % Abweichung), IT-Forensik (Sandras Rechner), Geheimkonto (500K an Kellner), Kronzeugin Fink (Handführung bezeugt), gefälschtes Siegel, Kellners Geständnis. Der Richter legt den Stift hin.", speaker: "Gerichtssaal", character: "richter",
          options: [{ label: "⚖ Vollständige Klage einreichen", next: 20 }, { label: "🏦 Sandras Konten einfrieren + Klage", next: 21 }, { label: "🤝 Aussergerichtliche Einigung prüfen", next: 19 }] },
        // 15 FAIL
        { text: "Ohne rechtliche Grundlage und mit dem initialen Rückzug gilt das Testament als rechtsgültig. Thomas Hofmann geht leer aus. Sandra erbt alles.", speaker: "Urteil", character: "red", fail: true },
        // 16 FAIL
        { text: "Die erkannten Zweifel wurden nicht rechtlich verfolgt. Das Gericht bestätigt das Testament. Hofmann verliert das Erbe und einen Teil seines Vermögens durch Verfahrenskosten.", speaker: "Urteil", character: "luca", fail: true },
        // 17 FAIL
        { text: "Die voreilige Beschuldigung ohne Beweise führt zu einer Verleumdungsklage. Sandra Hofmann erzwingt einen Vergleich – Hofmann muss 120'000 CHF zahlen.", speaker: "Urteil", character: "richter", fail: true },
        // 18 FAIL
        { text: "Die Kronzeugin Fink wurde nicht angehört. Ohne ihre Aussage fehlt der entscheidende menschliche Beweis. Das Gericht weist die Klage mangels direkter Beweise ab.", speaker: "Urteil", character: "luca", fail: true },
        // 19 NEUTRAL
        { text: "Sandra Hofmann gibt aussergerichtlich 60 % des Erbes zurück, um eine Verurteilung zu vermeiden. Notar Kellner verliert seine Zulassung. Thomas erhält CHF 1,4 Mio – nicht alles, aber Gerechtigkeit.", speaker: "Urteil", character: "richter", success: true, outcome: "neutral" },
        // 20 GOOD
        { text: "Das Testament wird für ungültig erklärt. Thomas Hofmann erbt das gesamte Vermögen. Sandra erhält 3 Jahre Haft, Kellner 2 Jahre auf Bewährung. Gerechtigkeit – spät, aber vollständig.", speaker: "Urteil", character: "red", success: true, outcome: "good" },
        // 21 PERFECT
        { text: "Testament annulliert. Sandra 5 Jahre Haft, Kellner 3 Jahre, Voss 18 Monate. Sandras Konten werden eingefroren, die Schulden aus Pfändung beglichen. Thomas erhält CHF 2,3 Mio + Schadensersatz. Ein Lehrbuchfall.", speaker: "Urteil", character: "luca", success: true, outcome: "perfect" },
      ],
    },
  ],

  tiertwo: [


    {
      id: "doppelmordSee",
      title: "Doppelmord am Zürichsee",
      scenes: [
        // 0 – Opening
        { text: "Ehepaar Gerda und Klaus Wegner, beide 58, wurden am frühen Morgen am Seeufer erschossen gefunden. Zwei präzise Schüsse, kalibrierter Abstand. Kein Raubmotiv – ihre Uhren und Geldbörsen sind noch da. Das riecht nach Auftrag.", speaker: "Kriminaltechniker", character: "richter",
          options: [{ label: "🔬 Tatort forensisch analysieren", next: 1 }, { label: "🏠 Familie befragen", next: 2 }, { label: "📋 Wegners Hintergrund recherchieren", next: 9 }] },
        // 1 – Tatort
        { text: "Ballistik: Kaliber 9mm Parabellum, Schalldämpfer-Spuren, Schusswinkel konsistent mit einem Profi. Eine Zigarettenstummel 30 Meter entfernt – DNA möglich. Keine Reifenspuren, der Täter kam zu Fuss.", speaker: "Tatortbefund", character: "richter",
          options: [{ label: "🚬 Zigarette ins DNA-Labor", next: 3 }, { label: "🔫 Waffe im See suchen", next: 11 }, { label: "👥 Nachbarn befragen", next: 4 }] },
        // 2 – Familie
        { text: "Sohn Leon Wegner, 28, tritt auffallend gefasst auf. Er weint nicht. Kennt das Alibi seiner letzten Abende auswendig, als hätte er es auswendig gelernt. Erwähnt beiläufig: «Die Lebensversicherung wird sich auszahlen.»", speaker: "Sohn Leon Wegner", character: "luca",
          options: [{ label: "🕵 Leons Alibi überprüfen", next: 7 }, { label: "💰 Lebensversicherung prüfen", next: 5 }, { label: "📱 Leons Kommunikation prüfen", next: 8 }] },
        // 3 – DNA Zigarette
        { text: "DNA-Treffer: Lukas Dorn, 41 – vorbestraft wegen Körperverletzung und illegalem Waffenbesitz. Kein fester Wohnsitz. Szenebekannt als jemand, der «Aufträge übernimmt». Letzter bekannter Standort: Zürich.", speaker: "DNA-Labor", character: "red",
          options: [{ label: "🕵 Dorn observieren lassen", next: 13 }, { label: "📱 Dorns Kommunikation verfolgen", next: 8 }] },
        // 4 – Nachbarn
        { text: "Nachbarin Frau Isler: «Ich habe kurz nach Mitternacht ein schwarzes Auto gesehen – kein Kennzeichen erkennbar. Es stand 20 Minuten lang ohne Licht. Dann war es weg.» Fahrzeug-Typ: älterer BMW.", speaker: "Zeugin Isler", character: "luca",
          options: [{ label: "🚗 BMW-Modell über Kameras eingrenzen", next: 10 }, { label: "🔫 Tatwaffe suchen", next: 11 }] },
        // 5 – Versicherung
        { text: "Polizze: 3 Millionen CHF Lebensversicherung auf beide Eltern. Begünstigter: Leon Wegner zu 100 %. Die Polizze wurde vor 8 Monaten abgeschlossen – kurz nach einem heftigen Erbschaftsstreit zwischen Leon und seinen Eltern.", speaker: "Versicherungsakte", character: "red",
          options: [{ label: "💸 Leons Schulden untersuchen", next: 6 }, { label: "📱 Leons Anrufprotokolle", next: 8 }] },
        // 6 – Leons Schulden
        { text: "Finanzanalyse: Leon hat 680'000 CHF Schulden bei drei Gläubigern, davon 300'000 bei einem Inkassobüro mit kriminellen Verbindungen. Letzte Frist: vergangenen Freitag – zwei Tage vor dem Mord.", speaker: "Finanzanalyse", character: "red",
          options: [{ label: "🔗 Schulden + Versicherung + Mord verbinden", next: 15 }, { label: "📱 Leons Anruflisten genau prüfen", next: 8 }] },
        // 7 – Alibi-Überprüfung
        { text: "Leons Alibi: War angeblich in einer Bar. Der Barmann erinnert sich vage – Leon war tatsächlich da, aber ging um 22:30 Uhr. Die Morde fanden zwischen 00:15 und 00:45 statt. Lücke: 2 Stunden 15 Minuten.", speaker: "Alibi-Prüfung", character: "richter",
          options: [{ label: "📱 Was tat Leon in diesen 2 Stunden?", next: 8 }, { label: "🔗 Lücke mit Dorns Spur verknüpfen", next: 13 }] },
        // 8 – Anrufprotokolle
        { text: "Telekommunikationsüberwachung (Richterlicher Beschluss): Leon rief in den letzten 3 Monaten 14 Mal eine Prepaid-Nummer an. Die Prepaid-Karte wurde bar bezahlt – und Lukas Dorn wurde in derselben Tankstelle auf Kamera gesichtet.", speaker: "Anrufprotokolle", character: "red",
          options: [{ label: "📡 Prepaid-Karte auf Dorns Handy tracken", next: 13 }, { label: "🔗 Leon + Dorn-Verbindung bündeln", next: 15 }] },
        // 9 – Wegners Hintergrund
        { text: "Klaus Wegner war vor 20 Jahren in einen Geldwäsche-Skandal verwickelt – nie verurteilt. Hatte Feinde in der Immobilienbranche. Doch alle alten Feinde sind entweder tot oder im Ausland. Der Fokus kehrt auf die Familie zurück.", speaker: "Ermittlungsakte", character: "richter",
          options: [{ label: "💰 Erbschaft und Familienkonflikte", next: 5 }, { label: "👔 Geschäftspartner prüfen", next: 12 }] },
        // 10 – BMW-Spur
        { text: "Stadtüberwachung: Ein schwarzer BMW 5er, Kennzeichen ZH-394-KX, wurde auf drei Kameras rund ums Seeufer identifiziert. Halter: Autovermietung Hertz. Angemietet von: Lars Breit – einem bekannten Alias von Lukas Dorn.", speaker: "Fahrzeugermittlung", character: "red",
          options: [{ label: "🕵 Dorn observieren und verhaften", next: 13 }, { label: "🔗 Auto-Spur zu Auftraggeber", next: 15 }] },
        // 11 – Tatwaffe
        { text: "Taucher-Team findet nach 3 Stunden: eine Sig Sauer P226, 9mm, mit gesägter Seriennummer. Ballistischer Abgleich: 100 % Match mit den Tatgeschossen. Restliche DNA an Griffschale: Dorn.", speaker: "Tatwaffe", character: "red",
          options: [{ label: "🔗 Waffe + DNA + Dorn verhaften", next: 13 }, { label: "🔗 Waffe als Beweis einreichen + Leon", next: 15 }] },
        // 12 – Geschäftspartner
        { text: "Geschäftspartner Reto Fischer hatte Streit mit Wegner – aber sein Alibi ist wasserdicht (Videokonferenz mit 12 Teilnehmern bis 1 Uhr nachts). Fischer scheidet aus. Der interne Täterkreis rückt in den Fokus.", speaker: "Zeugenprüfung", character: "richter",
          options: [{ label: "💰 Zurück zu Leons Motiv", next: 6 }, { label: "📱 Leons Anrufe", next: 8 }] },
        // 13 – Dorn observiert / verhaftet
        { text: "Spezialeinheit verhaftet Dorn in einem Motel. Bei ihm: ein Laptop mit verschlüsselten Nachrichten, 80'000 CHF Bargeld und ein Bild des Ehepaars Wegner mit Markierungen. Nach 3 Stunden Verhör nennt er seinen Auftraggeber.", speaker: "Verhaftung Dorn", character: "luca",
          options: [{ label: "📋 Dorns Aussage gegen Leon verwenden", next: 15 }, { label: "⚖ Sofort Leon anklagen", next: 24 }] },
        // 14 – Banktransaktionen Leon
        { text: "Finanzkriminalisten: Leon überwies in drei Tranchen total 180'000 CHF an eine Scheinfirma in Malta – zeitlich identisch mit Dorns gemieteten BMW und dem Kauf der Prepaid-Karte. Geldfluss ist lückenlos nachvollziehbar.", speaker: "Finanzkriminalisten", character: "red",
          options: [{ label: "🔗 Transaktionen + Dorns Aussage", next: 15 }, { label: "⚖ Vollständige Anklage", next: 24 }] },
        // 15 – Entscheidung
        { text: "Du hast: Dorns DNA (Tatort), Tatwaffe (Dorn), BMW-Spur (Dorn alias Breit), Anrufverbindung Leon–Dorn (Prepaid), Leons Alibi-Lücke (2h 15min), Versicherungsmotiv (3 Mio CHF), Schulden (680K fällig), Malta-Transaktionen (180K), Dorns Geständnis. Der Richter sieht dich an.", speaker: "Gerichtssaal", character: "richter",
          options: [{ label: "⚖ Leon + Dorn gemeinsam anklagen", next: 24 }, { label: "🏠 Leons Wohnung noch durchsuchen", next: 16 }, { label: "🤝 Strafmilderung für Dorns Kooperation", next: 23 }] },
        // 16 – Leons Wohnung
        { text: "In Leons Wohnung: Burner-Handy mit ungelöschten Sprachnachrichten an Dorn («Mach es diese Woche.»). Eine handgeschriebene Notiz: «Tagesroute Eltern – Donnerstag-Spaziergang am See.» Leon hatte den Mord monatelang geplant.", speaker: "Hausdurchsuchung", character: "red",
          options: [{ label: "📔 Alles vorlegen – maximale Anklage", next: 25 }, { label: "⚖ Anklage jetzt einreichen", next: 24 }] },
        // 17 – (Reserve / Zusatz-Spur) Dorns Netzwerk
        { text: "Dorns Laptop enthüllt: Er hat in zwei weiteren ungeklärten Fällen mitgewirkt. Die Staatsanwaltschaft weitet die Ermittlung aus. Dorn ist bereit, vollständig zu kooperieren – im Tausch gegen Strafminderung.", speaker: "Staatsanwaltschaft", character: "richter",
          options: [{ label: "🤝 Kooperationsvertrag mit Dorn", next: 15 }, { label: "⚖ Ohne Kooperation – maximale Strafe für beide", next: 25 }] },
        // 18 FAIL
        { text: "Ohne klare Beweiskette bleibt die Anklage spekulativ. Leons Anwalt demontiert jeden Punkt. Freispruch für Leon – Dorn erhält 8 Jahre allein. Die Wahrheit bleibt verborgen.", speaker: "Urteil", character: "richter", fail: true },
        // 19 FAIL
        { text: "Die ignorierte Spur war der Schlüssel. Ohne sie fehlt das Bindeglied zwischen Leon und Dorn. Der Fall wird abgeschlossen – Leon erbt 3 Millionen.", speaker: "Urteil", character: "luca", fail: true },
        // 20 FAIL
        { text: "Vorschnelle Verhaftung ohne richterlichen Beschluss. Entscheidende Beweise werden als unrechtmässig erhoben eingestuft und aus dem Prozess ausgeschlossen.", speaker: "Urteil", character: "richter", fail: true },
        // 21 FAIL
        { text: "Fischer wurde verhaftet – doch sein Alibi hält stand. Peinliche Rücknahme. Inzwischen hat Leon alle digitalen Spuren vernichtet. Der echte Fall ist verloren.", speaker: "Urteil", character: "luca", fail: true },
        // 22 FAIL
        { text: "Dorn-Spur wurde ignoriert. Ohne den Auftragsmörder als Brücke zu Leon bleibt die Verbindung nicht beweisbar. Leon erbt und zieht ins Ausland.", speaker: "Urteil", character: "red", fail: true },
        // 23 NEUTRAL
        { text: "Dorn erhält 12 Jahre, kooperiert und belastet Leon. Leon kommt mit 6 Jahren davon – Strafmilderung wegen prozessualer Fehler der Verteidigung. Versicherung zahlt nicht aus – kleiner Sieg.", speaker: "Urteil", character: "richter", success: true, outcome: "neutral" },
        // 24 GOOD
        { text: "Leon Wegner: 18 Jahre Haft wegen Auftragsmords. Dorn: 14 Jahre. Die Versicherungssumme wird eingezogen. Justiz siegt – spät, aber vollständig.", speaker: "Urteil", character: "red", success: true, outcome: "good" },
        // 25 PERFECT
        { text: "Leon und Dorn erhalten die Höchststrafe. Die Sprachnachrichten und Tagesroute-Notiz gehen in die Rechtsgeschichte ein. Leons Vermögen wird vollständig eingezogen, Opferfonds dotiert. Ihr Ruf als Anwalt ist über alle Zweifel erhaben.", speaker: "Urteil", character: "luca", success: true, outcome: "perfect" },
      ],
    },


    {
      id: "korruptionStadtrat",
      title: "Korruption im Stadtrat von Zürich",
      scenes: [
        // 0
        { text: "Whistleblower «Hermes» kontaktiert Sie anonym: «Stadtrat Daniel Brack hat in den letzten vier Jahren systematisch Bauaufträge verschoben – gegen Schmiergelder. Mindestens 8 Mio CHF sollen geflossen sein. Ich habe Beweise, aber ich brauche Schutz.»", speaker: "Whistleblower ‹Hermes›", character: "luca",
          options: [{ label: "🛡 Zeugenschutz für Hermes sichern", next: 1 }, { label: "📁 Erste Dokumente sichten", next: 2 }, { label: "🚫 Anonyme Quellen ignorieren", next: 17 }] },
        // 1
        { text: "Staatsanwaltschaft genehmigt vorläufigen Zeugenschutz. Hermes enthüllt sich: Er ist Marcus Frei, leitender Buchhalter der Baufirma Helvetia AG. Er hat seit Jahren interne Belege gesammelt.", speaker: "Zeugenschutz-Protokoll", character: "richter",
          options: [{ label: "📊 Freis Unterlagen auswerten", next: 2 }, { label: "🏦 Brachs Konten prüfen lassen", next: 6 }, { label: "🏢 Helvetia AG durchsuchen", next: 3 }] },
        // 2
        { text: "Freis Unterlagen: Rechnungen mit manipulierten Zuschlagskriterien, interne Mails mit kodierten Zahlungsanweisungen und ein handgeschriebenes Notizbuch mit Datums-/Betragseinträgen über 4 Jahre.", speaker: "Dokumentenanalyse", character: "richter",
          options: [{ label: "💻 Notizbuch kryptographisch auswerten", next: 4 }, { label: "📧 Interne Mails rekonstruieren", next: 5 }, { label: "⚠ Unterlagen als unzureichend werten", next: 18 }] },
        // 3
        { text: "Hausdurchsuchung Helvetia AG (Durchsuchungsbefehl): Zwei Server gesichert. IT-Forensiker finden gelöschte Überweisungsbelege – 23 Transaktionen an zwei Briefkastenfirmen in Panama.", speaker: "Hausdurchsuchung Helvetia AG", character: "red",
          options: [{ label: "🌍 Panama-Firmen identifizieren", next: 7 }, { label: "💵 Transaktionen + Notizbuch abgleichen", next: 4 }] },
        // 4
        { text: "Kryptographische Analyse: Das Notizbuch ist eine Verschlüsselung – Datum, Betrag, Initialen des Empfängers. Sechs Einträge tragen die Initialen «D.B.» – Daniel Brack. Beträge: 180K bis 420K CHF pro Eintrag.", speaker: "Kryptograph", character: "richter",
          options: [{ label: "🔗 Initialen mit Kontonummern abgleichen", next: 6 }, { label: "🏛 Antikorruptionsbehörde einschalten", next: 9 }] },
        // 5
        { text: "Rekonstruierte Mails: «D.B. erwartet seine ‹Beratungsgebühr› vor der Abstimmung.» Absender: CEO Helvetia AG, Thomas Ammann. Empfänger: anonyme Adresse – aber Metadaten zeigen Brachs privaten Router.", speaker: "E-Mail-Forensik", character: "red",
          options: [{ label: "📡 Router-Daten sicherstellen", next: 8 }, { label: "🤝 Ammann als Kronzeugen gewinnen", next: 10 }] },
        // 6
        { text: "Bankrechtshilfe (Schweiz–Liechtenstein): Zwei Panama-Firmen gehören einer Holding, die auf Brachs Schwager eingetragen ist. Gesamttransfers: 7,8 Mio CHF über 4 Jahre. Timing korreliert mit 8 Bauaufträgen.", speaker: "Bankermittlung", character: "red",
          options: [{ label: "🔗 Schwager befragen", next: 11 }, { label: "🔗 Konten + Aufträge zeitlich überlagern", next: 12 }] },
        // 7
        { text: "Panama Papers Abgleich: Die zwei Briefkastenfirmen «Briseis Consulting» und «Argo Holdings» wurden 2019 registriert – eine Woche nach Brachs erster Abstimmung zu Gunsten von Helvetia AG.", speaker: "Panama-Abgleich", character: "red",
          options: [{ label: "🔗 Zeitkorrelation als Beweis sichern", next: 12 }, { label: "🌍 Weitere Verbindungen prüfen", next: 6 }] },
        // 8
        { text: "Brachs Heimrouter-Log: Verbindung zur anonymen Mail-Adresse um 23:14 Uhr an dem Tag, als die strittige Abstimmung vorbereitet wurde. Router-IP ist eindeutig seiner Wohnadresse zugeordnet.", speaker: "IT-Forensik", character: "richter",
          options: [{ label: "🔗 Router-Log + Mail-Metadaten kombinieren", next: 12 }, { label: "🤝 Ammann als Kronzeugen", next: 10 }] },
        // 9
        { text: "Antikorruptionsbehörde ACAS: «Wir beobachten Brack seit 14 Monaten – aber wir hatten nie genug für einen Beschluss. Ihre Beweise könnten der Durchbruch sein.» ACAS bietet Ressourcen und einen unabhängigen Staatsanwalt an.", speaker: "Antikorruption ACAS", character: "richter",
          options: [{ label: "🤝 Mit ACAS kooperieren", next: 12 }, { label: "📁 Alleine weiterarbeiten + Autonomie behalten", next: 12 }] },
        // 10
        { text: "CEO Ammann (nach anwaltlicher Beratung, Kronzeugenregelung): «Ich habe Brack persönlich Bargeld übergeben – dreimal. Immer nach der Abstimmung. Ich habe Fotos davon.» Er übergibt 3 Fotos.", speaker: "Kronzeuge Ammann", character: "luca",
          options: [{ label: "📷 Fotos forensisch auswerten", next: 13 }, { label: "🔗 Ammanns Aussage + Finanzdaten", next: 14 }] },
        // 11 – Schwager
        { text: "Brachs Schwager Peter Läng: zunächst schweigsam. Konfrontiert mit Kontoauszügen bricht er nach 20 Minuten: «Daniel hat mich benutzt. Ich wusste nicht, woher das Geld kommt – ehrlich!» Aussage ist glaubwürdig.", speaker: "Peter Läng", character: "luca",
          options: [{ label: "📋 Längs Aussage nutzen + Weiter zu Brack", next: 14 }, { label: "🔗 Längs Rolle klären + Panama-Firmen", next: 7 }] },
        // 12 – Beweisstand
        { text: "Beweislage: Notizbuch (Initialen + Beträge), Panama-Firmen (Timing), Router-Log (Brachs IP), Banktransfers (7,8 Mio), Helvetia-Mails (Beratungsgebühr). Brack wird vorgeladen. Er erscheint mit drei Anwälten.", speaker: "Ermittlungsstand", character: "richter",
          options: [{ label: "⚡ Brack konfrontieren – volle Beweislage", next: 15 }, { label: "📷 Erst Kronzeugenfotos sichern", next: 10 }, { label: "🤝 Kooperationsangebot an Brack", next: 22 }] },
        // 13 – Fotos ausgewertet
        { text: "Forensik: Fotos sind echt, unbearbeitet. Exif-Daten zeigen Ort (Parkhaus Flughafen Kloten) und Zeit – korreliert mit Abstimmungsdaten. Brachs Gesicht klar erkennbar. Er übergibt Briefumschlag.", speaker: "Foto-Forensik", character: "red",
          options: [{ label: "🔗 Fotos + Notizbuch + Konten = Entscheidung", next: 14 }, { label: "⚖ Sofort anklagen", next: 23 }] },
        // 14 – Alles bündeln
        { text: "Komplettpaket: Notizbuch-Kryptogramm, 7,8 Mio Banktransfers, Fotos (Übergabe), Router-Log, Helvetia-Mails, Ammanns Kronzeugenaussage, Längs Bestätigung. Medien erhalten Wind – Brack steht vor einer Pressekonferenz.", speaker: "Ermittlungssynthese", character: "richter",
          options: [{ label: "⚖ Vollständige Anklageschrift einreichen", next: 23 }, { label: "🏠 Brachs Privathaus durchsuchen", next: 16 }, { label: "📰 Medien als Druckmittel einsetzen", next: 19 }] },
        // 15 – Konfrontation Brack
        { text: "Brack-Konfrontation: Er bleibt 2 Stunden eisern. Dann – beim Vorzeigen der Fotos – erblasst er. Sein Anwalt signalisiert Gesprächsbereitschaft. Möglichkeit: Teilgeständnis im Tausch gegen Strafminderung.", speaker: "Verhör Brack", character: "luca",
          options: [{ label: "✍ Teilgeständnis annehmen", next: 22 }, { label: "❌ Kein Deal – maximale Strafe", next: 14 }, { label: "🔗 Brack als Zeuge gegen Netzwerk", next: 16 }] },
        // 16 – Brachs Haus
        { text: "Hausdurchsuchung Brachs Privatvilla: In einem Wandsafe: 380'000 CHF Bargeld, ein Burner-Handy mit Nachrichten an 4 weitere Stadtratsmitglieder und handschriftliche Listen zu 3 weiteren Korruptionsfällen.", speaker: "Hausdurchsuchung", character: "red",
          options: [{ label: "📁 Netzwerk aufdecken + Massenanklagen", next: 24 }, { label: "⚖ Nur Brack – solider Fall", next: 23 }] },
        // 17 FAIL
        { text: "Ohne die anonyme Quelle gab es keinen Einstiegspunkt. Die Korruption läuft ungestört weiter. Brack wird in einem Jahr Stadtratspräsident.", speaker: "Urteil", character: "red", fail: true },
        // 18 FAIL
        { text: "Die Unterlagen wurden als unzureichend eingestuft. Freis Glaubwürdigkeit wurde erfolgreich von Brachs Anwälten erschüttert. Fall eingestellt.", speaker: "Urteil", character: "luca", fail: true },
        // 19 FAIL
        { text: "Mediendruck vor dem Urteil gilt als Einflussnahme. Das Gericht erklärt alle nachfolgend gesicherten Beweise als unverwertbar. Brachs Anwalt feiert.", speaker: "Urteil", character: "richter", fail: true },
        // 20 FAIL
        { text: "Die Durchsuchung ohne vollständigen Beschluss macht alle Funde unverwertbar. Helvetia AG klagt auf Entschädigung. Massiver Rückschlag.", speaker: "Urteil", character: "luca", fail: true },
        // 21 FAIL
        { text: "Ammann wurde ohne Kronzeugenvertrag befragt – seine Aussage ist damit nicht schützbar. Er zieht sie zurück. Das Fundament der Anklage bricht weg.", speaker: "Urteil", character: "richter", fail: true },
        // 22 NEUTRAL
        { text: "Brack akzeptiert einen Deal: Geständnis zu zwei Anklagepunkten, 3 Jahre bedingt, Rücktritt vom Stadtrat, Rückzahlung von 4 Mio CHF. Das Netzwerk bleibt unberührt. Ein halber Sieg.", speaker: "Urteil", character: "richter", success: true, outcome: "neutral" },
        // 23 GOOD
        { text: "Daniel Brack: 7 Jahre Haft, 8 Mio CHF Rückforderung, lebenslanges Berufsverbot. Ammann erhält Strafminderung. Die Staatsanwaltschaft leitet Folgeermittlungen gegen Helvetia AG ein.", speaker: "Urteil", character: "red", success: true, outcome: "good" },
        // 24 PERFECT
        { text: "Brack erhält 11 Jahre – höchste Strafe für Korruption in der Stadtgeschichte. Das gesamte Netzwerk (4 Stadträte + 2 CEOs) wird angeklagt. 12 Mio CHF werden eingezogen. Der Fall wird als «Zürich Watergate» in die Geschichte eingehen.", speaker: "Urteil", character: "luca", success: true, outcome: "perfect" },
      ],
    },
  ],
};


const LawyerContext = React.createContext(null);
function LawyerProvider({ children }) {
  const [selectedLawyer, setSelectedLawyer] = React.useState("luca");
  return (
      <LawyerContext.Provider value={{ selectedLawyer, setSelectedLawyer }}>
        {children}
      </LawyerContext.Provider>
  );
}
function useLawyer() { return React.useContext(LawyerContext); }

// ─── TYPEWRITER ───────────────────────────────────────────────────────────────
function useTypewriter(text, speed = 22) {
  const [displayed, setDisplayed] = React.useState("");
  const [done, setDone] = React.useState(false);
  React.useEffect(() => {
    setDisplayed(""); setDone(false);
    let i = 0;
    const iv = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) { clearInterval(iv); setDone(true); }
    }, speed);
    return () => clearInterval(iv);
  }, [text, speed]);
  const skipToEnd = () => { setDisplayed(text); setDone(true); };
  return { displayed, done, skipToEnd };
}

// ─── GLOBAL CSS ───────────────────────────────────────────────────────────────
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Special+Elite&family=Courier+Prime:wght@400;700&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #0d0608; overflow-x: hidden; }

  @keyframes portraitIn {
    0%   { transform: translateY(40px) scale(0.92); opacity: 0; filter: brightness(0); }
    60%  { filter: brightness(1.3); }
    100% { transform: translateY(0) scale(1); opacity: 1; filter: brightness(1); }
  }
  @keyframes flashIn {
    0%   { opacity: 0; }
    30%  { opacity: 1; background: white; }
    100% { opacity: 1; background: transparent; }
  }
  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 18px 4px rgba(201,162,39,0.4); }
    50%       { box-shadow: 0 0 36px 10px rgba(201,162,39,0.75); }
  }
  @keyframes shake {
    0%,100% { transform: translateX(0); }
    20%     { transform: translateX(-8px); }
    40%     { transform: translateX(8px); }
    60%     { transform: translateX(-5px); }
    80%     { transform: translateX(5px); }
  }
  @keyframes slideUp {
    from { transform: translateY(30px); opacity: 0; }
    to   { transform: translateY(0);    opacity: 1; }
  }
  @keyframes btnAppear {
    from { transform: scale(0.8) translateY(10px); opacity: 0; }
    to   { transform: scale(1)   translateY(0);    opacity: 1; }
  }
  @keyframes bgPulse {
    0%,100% { opacity: 0.55; }
    50%     { opacity: 0.75; }
  }
  @keyframes stampIn {
    0%   { transform: scale(3) rotate(-8deg); opacity: 0; }
    60%  { transform: scale(0.95) rotate(2deg); opacity: 1; }
    100% { transform: scale(1) rotate(0deg); opacity: 1; }
  }

  .portrait-img { animation: portraitIn 0.55s cubic-bezier(0.22,1,0.36,1) both; }
  .portrait-img.fail-state { animation: portraitIn 0.4s ease both, shake 0.4s 0.5s ease; filter: grayscale(0.6) saturate(1.4) hue-rotate(-10deg) !important; }
  .portrait-img.success-state { filter: drop-shadow(0 0 24px gold) !important; }

  .btn-action {
    animation: btnAppear 0.35s ease both;
    transition: all 0.18s ease;
    font-family: 'Cinzel', serif;
    font-size: 13px; font-weight: 700; letter-spacing: 1px;
    padding: 12px 22px;
    border: 2px solid #c9a227;
    background: rgba(10,6,2,0.85);
    color: #f0d080; cursor: pointer; border-radius: 3px;
    text-transform: uppercase; backdrop-filter: blur(4px);
    position: relative; overflow: hidden;
  }
  .btn-action::before { content:''; position:absolute; inset:0; background: linear-gradient(135deg, rgba(201,162,39,0.12) 0%, transparent 60%); opacity:0; transition:opacity 0.2s; }
  .btn-action:hover { background: rgba(201,162,39,0.18); border-color: #f0d080; color: #fff; transform: translateY(-2px); box-shadow: 0 6px 24px rgba(201,162,39,0.35); }
  .btn-action:hover::before { opacity: 1; }
  .btn-action:active { transform: translateY(0) scale(0.97); }
  .btn-end-fail  { background: rgba(120,10,10,0.8) !important; border-color: #e53e3e !important; color: #fca5a5 !important; }
  .btn-end-fail:hover  { background: rgba(180,20,20,0.9) !important; box-shadow: 0 6px 24px rgba(200,50,50,0.5) !important; }
  .btn-end-good  { background: rgba(10,60,20,0.8) !important; border-color: #22c55e !important; color: #86efac !important; }
  .btn-end-good:hover  { background: rgba(20,90,35,0.9) !important; box-shadow: 0 6px 24px rgba(34,197,94,0.5) !important; }
  .dialogue-box { animation: slideUp 0.4s ease both; }
  .outcome-stamp { animation: stampIn 0.5s cubic-bezier(0.22,1,0.36,1) both; font-family:'Cinzel',serif; font-weight:900; letter-spacing:4px; font-size:clamp(28px,5vw,56px); text-transform:uppercase; padding:10px 32px; border:5px double; border-radius:4px; margin-bottom:20px; }
  .outcome-fail    { color:#e53e3e; border-color:#e53e3e; text-shadow:0 0 20px #e53e3e; }
  .outcome-neutral { color:#c9a227; border-color:#c9a227; text-shadow:0 0 20px #c9a227; }
  .outcome-good    { color:#22c55e; border-color:#22c55e; text-shadow:0 0 20px #22c55e; }
  .outcome-perfect { color:#a78bfa; border-color:#a78bfa; text-shadow:0 0 20px #a78bfa; }
  .scene-flash { pointer-events:none; position:fixed; inset:0; background:white; z-index:999; animation:flashIn 0.35s ease forwards; }
`;

function StyleInjector() {
  React.useEffect(() => {
    const el = document.createElement("style");
    el.textContent = GLOBAL_CSS;
    document.head.appendChild(el);
    return () => document.head.removeChild(el);
  }, []);
  return null;
}

// ─── TIER META ────────────────────────────────────────────────────────────────
const tierMeta = {
  tierone: { label: "TIER I – Einsteiger",     color: "#c9a227" },
  tiertwo: { label: "TIER II – Fortgeschritten", color: "#a78bfa" },
};

// ─── MENU ─────────────────────────────────────────────────────────────────────
function Menu() {
  const navigate = useNavigate();
  const { selectedLawyer, setSelectedLawyer } = useLawyer();
  const tiers = Object.keys(tierMeta);

  return (
      <div style={{ minHeight:"100vh", display:"flex", background:"radial-gradient(ellipse at 30% 50%, #1a0c08 0%, #0d0608 70%)", color:"white", fontFamily:"'Cinzel', serif", overflow:"hidden", position:"relative" }}>
        <div style={{ position:"absolute", inset:0, pointerEvents:"none", backgroundImage:`repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(201,162,39,0.04) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(201,162,39,0.04) 40px)` }} />
        {/* Left */}
        <div style={{ flex:1, display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:16, padding:60 }}>
          <div style={{ textAlign:"center", marginBottom:16 }}>
            <div style={{ fontSize:13, letterSpacing:8, color:"#c9a227", marginBottom:8, opacity:0.7 }}>VISUAL NOVEL</div>
            <h1 style={{ fontFamily:"'Cinzel',serif", fontSize:"clamp(2.2rem,5vw,4rem)", fontWeight:900, letterSpacing:6, lineHeight:1.1, background:"linear-gradient(135deg,#f0d080 0%,#c9a227 50%,#8b6a10 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
              COURTCASE
            </h1>
            <div style={{ width:80, height:2, background:"linear-gradient(90deg,transparent,#c9a227,transparent)", margin:"12px auto" }} />
            <div style={{ fontSize:11, letterSpacing:4, color:"#8b6a10", opacity:0.8 }}>ZÜRICH CHRONICLES</div>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:12, width:"100%", maxWidth:320 }}>
            {tiers.map((tid, i) => (
                <button key={tid} className="btn-action"
                        style={{ fontSize:13, padding:"14px 28px", letterSpacing:2, color: tierMeta[tid].color, borderColor: tierMeta[tid].color, animationDelay:`${i*0.1}s` }}
                        onClick={() => navigate(`/cases/${tid}`)}>
                  ▶ {tierMeta[tid].label}
                </button>
            ))}
          </div>
        </div>
        {/* Right – lawyer */}
        <div style={{ width:340, background:"rgba(0,0,0,0.5)", borderLeft:"1px solid rgba(201,162,39,0.25)", display:"flex", flexDirection:"column", alignItems:"center", padding:"50px 24px", gap:16, backdropFilter:"blur(10px)" }}>
          <div style={{ fontSize:11, letterSpacing:5, color:"#c9a227", opacity:0.7, marginBottom:4 }}>SELECT YOUR</div>
          <h2 style={{ fontFamily:"'Cinzel',serif", fontSize:"1.3rem", fontWeight:700, letterSpacing:3, color:"#f0d080", marginBottom:20 }}>ATTORNEY</h2>
          {lawyerOptions.map((l, idx) => {
            const isSel = selectedLawyer === l.id;
            return (
                <div key={l.id} onClick={() => setSelectedLawyer(l.id)}
                     style={{ display:"flex", alignItems:"center", gap:16, padding:"14px 18px", width:"100%", background: isSel?"rgba(201,162,39,0.12)":"rgba(255,255,255,0.03)", border:`1px solid ${isSel?"#c9a227":"rgba(201,162,39,0.2)"}`, borderRadius:4, cursor:"pointer", transition:"all 0.2s ease", animation:`btnAppear 0.4s ${idx*0.1}s ease both`, boxShadow: isSel?"0 0 20px rgba(201,162,39,0.25)":"none" }}>
                  <div style={{ width:64, height:64, borderRadius:4, overflow:"hidden", flexShrink:0, border:`2px solid ${isSel?"#c9a227":"rgba(201,162,39,0.3)"}`, boxShadow: isSel?"0 0 12px rgba(201,162,39,0.5)":"none" }}>
                    <img src={l.img} alt={l.name} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                  </div>
                  <div style={{ flex:1 }}>
                    <div style={{ fontFamily:"'Cinzel',serif", fontWeight:700, fontSize:14, letterSpacing:1, color: isSel?"#f0d080":"#a08060", transition:"color 0.2s" }}>{l.name}</div>
                    <div style={{ fontSize:10, color:"#5a4020", letterSpacing:2, marginTop:2 }}>ATTORNEY</div>
                  </div>
                  {isSel && <div style={{ color:"#c9a227", fontSize:18, fontWeight:900 }}>◆</div>}
                </div>
            );
          })}
          <p style={{ marginTop:16, fontSize:11, color:"#5a4020", letterSpacing:2, textAlign:"center" }}>
            SELECTED<br />
            <span style={{ color:"#c9a227", fontWeight:700, fontSize:13, letterSpacing:3 }}>
            {lawyerOptions.find(l => l.id === selectedLawyer)?.name?.toUpperCase()}
          </span>
          </p>
        </div>
      </div>
  );
}

// ─── CASE LIST ────────────────────────────────────────────────────────────────
function TierCases() {
  const { tierId } = useParams();
  const navigate = useNavigate();
  const list = cases[tierId] || [];
  const meta = tierMeta[tierId] || { label: tierId, color: "#c9a227" };

  return (
      <div style={{ minHeight:"100vh", background:"radial-gradient(ellipse at center top, #1a0c08 0%, #0d0608 100%)", color:"white", padding:60, fontFamily:"'Cinzel',serif" }}>
        <button className="btn-action" style={{ marginBottom:32, fontSize:11, padding:"8px 18px", letterSpacing:3, opacity:0.6 }} onClick={() => navigate("/")}>← ZURÜCK</button>
        <div style={{ fontSize:11, letterSpacing:6, color: meta.color, opacity:0.6, marginBottom:8 }}>CASE FILES</div>
        <h1 style={{ fontSize:"2rem", fontWeight:900, letterSpacing:4, color:"#f0d080", marginBottom:40 }}>{meta.label}</h1>
        {list.map((c, i) => (
            <div key={c.id} onClick={() => navigate(`/play/${tierId}/${c.id}`)} className="btn-action"
                 style={{ display:"block", width:"100%", maxWidth:700, textAlign:"left", padding:"20px 28px", marginBottom:16, fontSize:14, letterSpacing:2, animation:`btnAppear 0.4s ${i*0.12}s ease both`, cursor:"pointer", borderColor: meta.color, color: meta.color }}>
              <span style={{ fontSize:10, opacity:0.5, marginRight:14 }}>CASE #{String(i+1).padStart(3,"0")}</span>
              {c.title}
            </div>
        ))}
      </div>
  );
}

// ─── GAME ─────────────────────────────────────────────────────────────────────
function CaseGame() {
  const { tierId, caseId } = useParams();
  const navigate = useNavigate();
  const { selectedLawyer } = useLawyer();
  const [sceneIndex, setSceneIndex] = React.useState(0);
  const [flash, setFlash] = React.useState(false);
  const [portraitTick, setPortraitTick] = React.useState(0);

  const currentCase = cases[tierId]?.find(c => c.id === caseId);
  if (!currentCase) return <div style={{ color:"white" }}>Case not found</div>;

  const scene = currentCase.scenes[sceneIndex];
  if (!scene) return <div style={{ color:"white" }}>Scene not found</div>;

  const isEnding = scene.fail || scene.success;
  const portraitSrc = getPortrait(scene.character, selectedLawyer);
  const lawyerData = lawyerOptions.find(l => l.id === selectedLawyer);
  const meta = tierMeta[tierId] || { color: "#c9a227" };

  const { displayed, done, skipToEnd } = useTypewriter(scene.text, 22);

  const goToScene = (next) => {
    setFlash(true);
    setTimeout(() => { setSceneIndex(next); setPortraitTick(t => t + 1); setFlash(false); }, 200);
  };

  const outcomeLabel = scene.fail ? "VERLOREN" : scene.outcome === "neutral" ? "UNENTSCHIEDEN" : scene.outcome === "perfect" ? "PERFEKTION" : "GEWONNEN";
  const outcomeClass = scene.fail ? "outcome-fail" : scene.outcome === "neutral" ? "outcome-neutral" : scene.outcome === "perfect" ? "outcome-perfect" : "outcome-good";
  const endBtnClass = scene.fail ? "btn-action btn-end-fail" : "btn-action btn-end-good";

  const totalStory = currentCase.scenes.filter(s => !s.fail && !s.success).length;
  const progress = Math.min((sceneIndex / totalStory) * 100, 100);

  return (
      <div style={{ minHeight:"100vh", background:`radial-gradient(ellipse at 50% 0%, rgba(60,20,5,0.9) 0%, rgba(8,4,2,1) 60%), repeating-linear-gradient(90deg,transparent 0px,transparent 3px,rgba(201,162,39,0.015) 3px,rgba(201,162,39,0.015) 4px)`, color:"white", display:"flex", flexDirection:"column", alignItems:"center", padding:"0 20px 40px", fontFamily:"'Special Elite',cursive", position:"relative", overflow:"hidden" }}>
        {flash && <div className="scene-flash" />}
        <div style={{ position:"fixed", inset:0, pointerEvents:"none", zIndex:100, backgroundImage:"repeating-linear-gradient(0deg,rgba(0,0,0,0.03) 0px,rgba(0,0,0,0.03) 1px,transparent 1px,transparent 3px)" }} />

        {/* Top bar */}
        <div style={{ width:"100%", maxWidth:900, display:"flex", alignItems:"center", justifyContent:"space-between", padding:"18px 0 10px", borderBottom:"1px solid rgba(201,162,39,0.15)", marginBottom:8 }}>
          <div>
            <div style={{ fontSize:9, letterSpacing:5, color:"#8b6a10", marginBottom:2 }}>ACTIVE CASE</div>
            <div style={{ fontFamily:"'Cinzel',serif", fontSize:13, letterSpacing:2, color: meta.color }}>{currentCase.title}</div>
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:10 }}>
            <div style={{ textAlign:"right" }}>
              <div style={{ fontSize:9, letterSpacing:3, color:"#5a4020" }}>ATTORNEY</div>
              <div style={{ fontFamily:"'Cinzel',serif", fontSize:12, color:"#c9a227", letterSpacing:1 }}>{lawyerData?.name}</div>
            </div>
            <div style={{ width:44, height:44, borderRadius:3, overflow:"hidden", border:"1px solid #c9a227", boxShadow:"0 0 12px rgba(201,162,39,0.4)", animation:"pulse-glow 2.5s infinite" }}>
              <img src={lawyerData?.img} alt={lawyerData?.name} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
            </div>
          </div>
        </div>

        {/* Progress */}
        {!isEnding && (
            <div style={{ width:"100%", maxWidth:900, height:2, background:"rgba(201,162,39,0.1)", marginBottom:12 }}>
              <div style={{ height:"100%", width:`${progress}%`, background:`linear-gradient(90deg,#8b6a10,${meta.color})`, transition:"width 0.5s ease" }} />
            </div>
        )}

        <div style={{ fontSize:10, letterSpacing:4, color:"#5a4020", marginBottom:16, fontFamily:"'Cinzel',serif" }}>
          {isEnding ? "■ VERDIKT" : `SZENE ${String(sceneIndex+1).padStart(2,"0")} / ${String(totalStory).padStart(2,"0")}`}
        </div>

        {isEnding && <div className={`outcome-stamp ${outcomeClass}`} style={{ marginTop:10 }}>{outcomeLabel}</div>}

        {/* Portrait */}
        <div style={{ position:"relative", width:"clamp(200px,35vw,340px)", height:"clamp(200px,35vw,340px)", marginBottom:24, display:"flex", alignItems:"flex-end", justifyContent:"center" }}>
          <div style={{ position:"absolute", inset:"10%", borderRadius:"50%", background: scene.fail?"radial-gradient(circle,rgba(200,30,30,0.18) 0%,transparent 70%)":scene.success?"radial-gradient(circle,rgba(201,162,39,0.22) 0%,transparent 70%)":"radial-gradient(circle,rgba(201,162,39,0.1) 0%,transparent 70%)", filter:"blur(20px)", animation:"bgPulse 3s ease infinite", pointerEvents:"none" }} />
          <img key={`${portraitTick}-${sceneIndex}`} src={portraitSrc} alt={scene.character}
               className={`portrait-img${scene.fail?" fail-state":scene.success?" success-state":""}`}
               style={{ width:"100%", height:"100%", objectFit:"contain", filter: scene.fail?"drop-shadow(0 0 16px rgba(220,50,50,0.7))":scene.success?"drop-shadow(0 0 20px rgba(201,162,39,0.8))":"drop-shadow(0 8px 20px rgba(0,0,0,0.8))" }} />
        </div>

        {/* Dialogue */}
        <div className="dialogue-box" key={`d-${sceneIndex}`}
             style={{ width:"100%", maxWidth:900, background:"linear-gradient(135deg,rgba(5,3,1,0.97) 0%,rgba(12,8,3,0.95) 100%)", border:"1px solid rgba(201,162,39,0.35)", borderRadius:4, padding:"20px 28px 24px", marginBottom:20, position:"relative", cursor: done?"default":"pointer", boxShadow:"0 0 40px rgba(0,0,0,0.8),inset 0 1px 0 rgba(201,162,39,0.1)" }}
             onClick={() => !done && skipToEnd()}>
          {/* Corner decorations */}
          {[{top:0,left:0},{top:0,right:0},{bottom:0,left:0},{bottom:0,right:0}].map((pos,i) => (
              <div key={i} style={{ position:"absolute", ...pos, width:12, height:12, borderTop: i<2?"2px solid rgba(201,162,39,0.5)":"none", borderBottom: i>=2?"2px solid rgba(201,162,39,0.5)":"none", borderLeft: i%2===0?"2px solid rgba(201,162,39,0.5)":"none", borderRight: i%2===1?"2px solid rgba(201,162,39,0.5)":"none" }} />
          ))}
          <div style={{ fontFamily:"'Cinzel',serif", fontSize:10, letterSpacing:4, color:"#8b6a10", marginBottom:10, textTransform:"uppercase" }}>{scene.speaker || "—"}</div>
          <p style={{ fontFamily:"'Special Elite',cursive", fontSize:"clamp(14px,2.2vw,18px)", lineHeight:1.75, color:"#f5e6c8", minHeight:60 }}>
            {displayed}
            {!done && <span style={{ display:"inline-block", width:2, height:"1em", background:"#c9a227", marginLeft:2, verticalAlign:"text-bottom", animation:"bgPulse 0.7s infinite" }} />}
          </p>
          {!done && <div style={{ position:"absolute", bottom:10, right:14, fontSize:9, letterSpacing:3, color:"#5a4020", fontFamily:"'Cinzel',serif" }}>KLICK ZUM ÜBERSPRINGEN</div>}
        </div>

        {/* Buttons */}
        {(done || isEnding) && (
            <div style={{ display:"flex", gap:12, flexWrap:"wrap", justifyContent:"center", width:"100%", maxWidth:900 }}>
              {scene.options?.map((opt, i) => (
                  <button key={i} className="btn-action" style={{ animationDelay:`${i*0.08}s` }} onClick={() => goToScene(opt.next)}>{opt.label}</button>
              ))}
              {isEnding && (
                  <button className={endBtnClass} style={{ animationDelay:"0.1s", padding:"14px 36px", fontSize:13, letterSpacing:3 }} onClick={() => navigate("/")}>
                    {scene.fail ? "↩ ZURÜCK ZUM MENÜ" : "✦ ZURÜCK ZUM MENÜ"}
                  </button>
              )}
            </div>
        )}
      </div>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
      <LawyerProvider>
        <StyleInjector />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/cases/:tierId" element={<TierCases />} />
            <Route path="/play/:tierId/:caseId" element={<CaseGame />} />
          </Routes>
        </BrowserRouter>
      </LawyerProvider>
  );
}