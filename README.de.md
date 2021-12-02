# Topographic Attributes Maps - erweitert

Diese Version setzt auf der 'Demo Implementation for Publication' auf, wie sie
per dem 11. Mai 2021 auf https://github.com/rpreiner/tam veröffentlicht war.

Die Kern-Funktionen sind unverändert wie beschrieben in README_TAM.md.

## Anmerkung

Die 'Topographic Attribute Map' wird nur dann generiert, wenn man die Darstellung
einfriert, also den 'F'-Schalter aktiviert.

Will man GEDCOM importieren, muss sichergestellt sein, dass INDI- und FAM-Abschnitte
sauber voneinander getrennt sind. Die korrespondierenden NODE- und LINK-Strukturen
werden während des Einlese-Vorgangs erstellt, Referenzen in FAM auf noch nicht
bekannte INDI führen ohne einschlägige Meldung zu Fehlern, die ein Einfrieren
oder sogar den Absturz bewirken können, in jedem Fall werden solche Links nicht
gebildet und die Darstellung hat nicht weiter erläuterte Lücken.

# Erweiterungen

## i18n

Alle Beschriftungen und Meldungen sind im Original hart codiert. Diese
wurden so umgestellt, dass jetzt Calls auf i18n.js erfolgen, übernommen 
von https://github.com/roddeh/i18njs und statisch eingebunden.

Die zugehörigen Texte stehen in translation.js.

## Konturen-Tooltip

Man kann jetzt den Jahreswert einer Konturenlinie als Tooltip einblenden,
welcher der Cursorposition folgt.

Diese Funktion kann separat an- und abgestellt werden.
