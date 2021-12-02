# Topographic Attributes Maps - erweitert

![webtrees major version](https://img.shields.io/badge/webtrees-v2.0.x-green)
![License](https://img.shields.io/badge/license-MIT-green)](./LICENSE)

Diese Version setzt auf der 'Demo Implementation for Publication' auf, wie sie
per dem 11. Mai 2021 auf https://github.com/rpreiner/tam veröffentlicht war.

Die Kern-Funktionen sind unverändert wie beschrieben in README_TAM.md.

Aufruf: Lokal im Browser - Doppel-Klick auf 'index.htm'.

Getestet mit 'Firefox','Chrome','Edge','Brave' - jeweils aktuelle Version per 01.12.2021.

GEDCOM wurde erzeugt aus webtrees-v2.0.

Die Darstellung operiert auf Basis D3.js - Version 5, dynamisch referenziert.

### Anmerkung

Die 'Topographic Attribute Map' wird nur dann generiert, wenn man die Darstellung
einfriert, also den 'F'-Schalter aktiviert.

Will man GEDCOM importieren, muss sichergestellt sein, dass INDI- und FAM-Abschnitte
sauber voneinander getrennt sind. Die korrespondierenden NODE- und LINK-Strukturen
werden während des Einlese-Vorgangs erstellt, Referenzen in FAM auf noch nicht
bekannte INDI führen ohne einschlägige Meldung zu Fehlern, die ein Einfrieren
oder sogar den Absturz bewirken können, in jedem Fall werden solche Links nicht
gebildet und die Darstellung hat nicht weiter erläuterte Lücken.

## Erweiterungen

### i18n

In der ursprünglichen Version sind alle Bezeichnungen und Meldungen hart kodiert. Das
wurde geändert, es erfolgen jetzt Aufrufe an i18n.js, aus https://github.com/roddeh/i18njs
übernommen wurde und statisch eingebunden.

Die zugehörigen Texte stehen in 'translations.js'.

### Konturen-Tooltip

Man kann jetzt den Jahreswert einer Konturenlinie als Tooltip einblenden,
welcher der Cursorposition folgt.

Diese Funktion kann separat an- und abgestellt werden.

### family-Tooltip mit MARR-Tag

Im family-Tooltip wird jetzt auch das Hochzeits-Datum, abgeleitet aus dem MARR-Tag,
angezeigt.
