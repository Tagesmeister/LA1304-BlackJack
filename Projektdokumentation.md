# Projekt-Dokumentation

Pascal Oestrich, Marek von Rogall

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
|       | 0.0.1   | ✍️ Jedes Mal, wenn Sie an dem Projekt arbeiten, fügen Sie hier eine neue Zeile ein und beschreiben in *einem* Satz, was Sie erreicht haben. |


## 1 Informieren

### 1.1 Ihr Projekt

User Projekt ist ein BlackJack spiel, dass ich Javascript geschrieben ist.

### 1.2 User Stories

| US-№ | Verbindlichkeit | Typ  | Beschreibung                       |
| ---- | --------------- | ---- | ---------------------------------- |
| 1    |   Muss       | Funktional     | Als User möchte ich, dass man eine Karte ziehen kann, damit ich weiter spielen kann.  |
| 2    |   Muss       | Funktional     | Als User möchte ich, dass man auch keine Karten ziehen muss, wenn man nicht möchte, um die Zahl im Zahlenkonto zu behalten.  |
| 3    |   Muss       | Funktional     | Als User möchte ich, dass man gewonnen hat, wenn man eine höhere Zahl als der Dealer hat.                                |
| 4    |   Muss       | Funktional     | Als User möchte ich, dass 21 die höchste zahl ist, damit es einen Zahlenlimit gibt.                          |
| 5    |   Muss       | Qualität       | Als User möchte ich, dass es die Karten wie in einem Kartendeck vorgeneriert wird, damit das Spiel realistisch bleibt.                           |
| 6    |   Muss       | Funktional     | Als User möchte ich, dass der Dealer nur bis 17 Karten ziehen darf, damit das Spiel nach regeln fungiert.                             |
| 7    |   Muss       | Qualität       | Als User möchte ich, dass man nur einen Einsatz setzen kann, damit das Spiel spanender gestaltet ist.                                 |
| 8    |   Muss       | Qualität       | Als User möchte ich, dass man beim ersten Zug doublen kann, um eine grössere Spannung in das Spiel zu bringen.                              |
| 9    |   Muss       | Funktional     |Als User möchte ich, dass im ersten Zug bei einem Ass und 10 der User direkt gewonnen hat (BlackJack). |
| 10   |   Muss       | Rand           |Als User möchte ich, dass das Programm in Javascript geschrieben wurde. |
| 11   |   Muss       | Funktional     |Als User möchte ich, dass beim Start der Spieler 2 Karten bekommt, der Dealer auch, aber seine erste Karte ist verdeckt. |
| 12   |   Muss       | Funktional     |Als User möchte ich, dass der Dealer seine verdeckte Karte aufdeckt, damit das Spiel nach Regeln fungiert.|
| 13   |   Muss       | Funktional     |Als User möchte ich, dass man ein Startkapital von 50 hat, damit man das Spiel am Anfang auch spielen kann.|

### 1.3 Testfälle

| TC-№ | Ausgangslage | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| 1.1  |  Programm gestartet             |  Button(Karte ziehen)       |    **Karte**               |
| 2.1  |  Programm gestartet User wollte keine Karten mehr ziehen.             |  *Nichts*       |    **Der Dealer deckt seine Karte auf und zieht je nach Zahlenkonto Karten.**               |
| 3.1 |    Programm gestartet, Einsatz = 5 Benutzer's Zahlenkonto = 20, Dealer's Zahlenkonto = 17          |    *Nichts*     |     "Spieler hat gewonnen, bekommt 10 auf das Konto."               |
| 4.1  |    Programm gestartet, Einsatz = 5 Benutzer's Zahlenkonto = 24, Dealer's Zahlenkonto = 17          |    *Nichts*     |     "Spieler hat sich überzogen, verlert den Einsatz 5."              |
| 4.2  |    Programm gestartet, Einsatz = 5 Benutzer's Zahlenkonto = 20, Dealer's Zahlenkonto = 25          |    *Nichts*     |     "Spieler hat gewonnen, bekommt 10 auf das Konto."           |
| 5.1  |  Programm gestartet             |    *Nichts*     |    **Kartendeck generiert**               |
| 6.1  |  Programm gestartet User wollte keine Karte mehr ziehen, Dealer deckt auf und zieht Karten.             |    *Nichts*     |   1.Karte Dealer's Zahlenkonto = 16, 2.Karte Dealer's Zahlenkonto = 18.           |
| 6.2  |  Programm gestartet User wollte keine Karte mehr ziehen, Dealer deckt auf und zieht Karten.             |    *Nichts*     |   1.Karte Dealer's Zahlenkonto = 14, 2.Karte Dealer's Zahlenkonto = 17.           |
| 7.1  |  Programm gestartet User wird abgefragt, welchen Einsatz er setzten möchte (0.25 ,0.5, 1, 5, 10, 25, 50, 100          |    Button(5)     |   **Spiel beginnt mit dem Einsatz von 5.**        |
| 7.1  |  Programm gestartet User wird abgefragt, welchen Einsatz er setzten möchte (0.25 ,0.5, 1, 5, 10, 25, 50, 100          |    zweimal Button(5)     |   "Nicht möglich, Sie können nur einen Einsatz geben."       |
| 9.1  |  Programm gestartet User hat seinen ersten Zug mit dem Einsatz von 5        |    Button(Doublen)     |   **User gibt den doppelten Einsatz (10) und zieht eine Karte.**        |
| 10.1  |  Programm gestartet Karten ausgeteilt, User hat eine 10 und ein Ass (BlackJack) mit einem Einsatz 5       |   *Nichts*      |   "Spieler hat gewonnen, bekommt 10 auf das Konto."        |
| 11.1  |  Programm ist in Javascript geschrieben worden   |   *Nichts*      |   *Nichts*      |
| 12.1  |  Programm gestartet, Karten wurden Ausgeteilt  |   *Nichts*      |   *dem User wurden 2 Karten ausgeteilt. Der Dealer auch, aber seie erste Karte ist verdeckt.*      |
| 13.1  |  Programm ist gestartet, der User hat keine Karte mehr genommen |   *Nichts*      |   *Der Dealer deckt seine verdeckte Karte auf und zieht je nach Zahlenkontostand Karten.*      |
| 14.1  |  Programm wurde gestartet|   *Nichts*      |   *Der User bekommt 50 als Startkapital.*      |


### 1.4 UseCase-Diagramm
![UseCase-DiagramLA1304](https://github.com/Tagesmeister/LA1304-BlackJack/assets/110892258/0be9ef67-b29f-49ae-8548-8814b60d527a)

## 2 Planen

| AP-№ | Frist | Zuständig | Beschreibung | geplante Zeit |
| ---- | ----- | --------- | ------------ | ------------- |
| 1.A  |   08.03.2024    |    Marek von Rogall, Pascal Oestrich       |      Realisierung vom einfachen Interface        |     5          |
| 2.A  |  15.03.2024     |   Pascal Oestrich        |      Kartenlogik implementieren       |      3         |
| 3.A |    15.03.2024   |     Marek von Rogall      |      Dealer's Logik implementieren        |    2           |
| 4.A  |   22.03.2024    |      Pascal Oestrich     |       Buttonlogik implementierung       |      3         |
| 5.A  |   22.03.2024    |    Marek von Rogall       |     Implementierung der Einsätze und deren Abrechnung und Gutschrift auf das Konto        |       3        |
| 6.A |   29.03.2024    |     Pascal Oestrich      |     Doublen Implementieren         |      2         |
| 7.A  |   29.03.2024    |      Marek von Rogall     |    Debuggen          |       3        |

Total: 21 *45min = 945min --> 15.75h

## 3 Entscheiden

Wir haben uns Entschieden, nach Planung vorzugehen.

## 4 Realisieren

| AP-№ | Datum | Zuständig | geplante Zeit | tatsächliche Zeit |
| ---- | ----- | --------- | ------------- | ----------------- |
| 1.A  |    08.03.2024    |      Marek von Rogall, Pascal Oestrich     |        5       |          6           |
| 2.A  |   15.03.2024    |     Pascal Oestrich                         |        3       |          4           |
| 3.A  |     15.03.2024   |     Marek von Rogall                       |        2       |          3           |
| 4.A  |   22.03.2024     |     Pascal Oestrich                        |        3       |          2           |
| 5.A  |    22.03.2024   |      Marek von Rogall                       |        3       |          4           |
| 6.A  |   29.03.2024     |    Pascal Oestrich                         |        2       |          2           |
| 7.A  |    29.03.2024    |       Marek von Rogall                     |        3       |          3           |


## 5 Kontrollieren

### 5.1 Testprotokoll

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |       |          |        |
| ...  |       |          |        |

✍️ Vergessen Sie nicht, ein Fazit hinzuzufügen, welches das Test-Ergebnis einordnet.



## 6 Mahara-Portfolios

Pascal Oestrich:
Marek von Rogall
