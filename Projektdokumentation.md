# Projekt-Dokumentation

Pascal Oestrich, Marek von Rogall

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
|  08.03.24  | 0.0.1 | Die Funktionen um dem Spieler und dem Dealer Karten hinzuzufügen wurde implementiert. |
|  10.03.24  | 0.0.2 | Das Kartendeck wird generiert und beim ausgeben der Karten Stück für Stück aufgebraucht. |
|  15.03.24  | 0.0.3 | Das Spiel berechnet die Punktzahl der ausgebenen Karten und überprüft wer gewonnen hat. |
|  22.03.24  | 0.0.4 | Die Buttonslogik wurde implementiert + Gutschrift und verlust implementiert.|
|  29.03.24  | 1.0 | Doublefunktion implementiert und Prgramm debugging.|



## 1 Informieren

### 1.1 Ihr Projekt

Unser Projekt ist ein BlackJack spiel, dass wir in Javascript geschrieben haben.

### 1.2 User Stories

| US-№ | Verbindlichkeit | Typ  | Beschreibung                       |
| ---- | --------------- | ---- | ---------------------------------- |
| 1    |   Muss       | Funktional     | Als User möchte ich, dass man eine Karte ziehen kann, damit ich weiter spielen kann.  |
| 2    |   Muss       | Funktional     | Als User möchte ich, dass man auch keine Karte ziehen kann wenn man nicht möchte, falls man mit seiner aktuellen Punktzahl zufrieden ist oder keinen Overshoot riskieren möchte.  |
| 3    |   Muss       | Funktional     | Als User möchte ich, dass man gewonnen hat, wenn man eine höhere Zahl als der Dealer hat die sich im Zahlenlimit befindet.                                |
| 4    |   Muss       | Funktional     | Als User möchte ich, dass 17 die niedrigste und 21 die höchste Zahl des Zahlenlimits ist, damit es einen Zahlenlimit gibt.                          |
| 5    |   Muss       | Qualität       | Als User möchte ich, dass es die Karten wie in einem Kartendeck vorgeneriert wird, damit das Spiel realistisch bleibt.                           |
| 6    |   Muss       | Qualität       | Als User möchte ich, dass man nur einen Einsatz setzen kann, damit das Spiel spannender gestaltet ist.                                 |
| 7    |   Muss       | Qualität       | Als User möchte ich, dass man (nur) vor dem aufnehmen der ersten Karte doublen kann, um eine grössere Spannung in das Spiel zu bringen.                              |
| 8    |   Muss       | Funktional     | Als Benutzer möchte ich, dass man nach dem doublen keine weiteren Karten mehr aufnehmen darf, damit das doublen mit einem Risiko verbunden ist. |
| 9    |   Muss       | Funktional     | Als Benutzer möchte ich, dass der Dealer Karten austeilt, bis der Spieler 2 Karten offen vor sich liegen hat, damit man mit dem Spiel anfangen kann. |
| 10   |   Muss       | Funktional     |Als User möchte ich, dass ein BlackJack beim erhalten von einem Ass und einer Karte mit der Punktzahl 10 in Kraft tritt, damit man mit dem BlackJack eine hohe Gewinnchance hat.|
| 11   |   Muss       | Rand           |Als User möchte ich, dass das Programm in Javascript geschrieben ist. |
| 12   |   Muss       | Funktional     |Als User möchte ich, dass der Dealer seine erste Karte offen auf den Tisch legt, damit ich besser abwägen kann, ob ich eine weitere Karte nehmen soll oder nicht.|
| 13   |   Muss       | Funktional     | Als User möchte ich, dass der Dealer, wenn alle Spieler fertig sind, so lange Karten zieht, bis er mindestens eine Punktzahl von 17 erreicht hat. |
| 14   |   Muss       | Funktional     |Als User möchte ich, dass man ein Startkapital von 50 hat, damit man das Spiel am Anfang auch spielen kann.|
| 15   |   Muss       | Fuktional      | Als User möchte ich, dass der ausgeschüttete Gewinn bei einem gewonnen Spiel x2 beträgt, damit ich für mein eingegangenes Risiko belohnt werde. |
| 16   |   Muss       | Fuktional      | Als User möchte ich, dass der ausgeschüttete Gewinn bei einem gewonnen Spiel mit einem Blackjack x2.5 beträgt, damit ich für mein eingegangenes Risiko belohnt werde. |
| 17   |   Muss       | Funktional     | Als Benutzer möchte ich, dass wenn der Dealer beim Ziehen (wenn alle Spieler fertig sind) mehr als 21 Punkte hat, dass der Dealer verloren hat und der Spieler, der nicht Overshootet ist gewinnen, damit der Benutzer mehr Gewinnchancen hat. |
| 18   |   Muss       | Funktional     | Als Benutzer möchte ich, dass wenn der Dealer und Ich gleich viel Punkte haben, und sich die Punkte innerhalb des Zahlenlimits befinden, dass ich meinen Wetteinsatz zurückerstatten bekomme, damit ich mein Geld nicht verliere. |



### 1.3 Testfälle

| TC-№ | Ausgangslage | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| 1.1  |  Programm gestartet                                                   |  Button(Karte ziehen)       |    **Karte**               |
| 2.1  |  Programm gestartet User wollte keine Karten mehr ziehen.             |  *Nichts*       |    **Der Dealer deckt seine Karte auf und zieht je nach Zahlenkonto Karten.**               |
| 3.1  |    Programm gestartet, Einsatz = 5 Benutzer's Zahlenkonto = 20, Dealer's Zahlenkonto = 17          |    *Nichts*     |     "Spieler hat gewonnen, bekommt 10 auf das Konto."               |
| 4.1  |    Programm gestartet, Einsatz = 5 Benutzer's Zahlenkonto = 24, Dealer's Zahlenkonto = 17          |    *Nichts*     |     "Spieler hat sich überzogen, verlert den Einsatz 5."              |
| 4.2  |    Programm gestartet, Einsatz = 5 Benutzer's Zahlenkonto = 20, Dealer's Zahlenkonto = 25          |    *Nichts*     |     "Spieler hat gewonnen, bekommt 10 auf das Konto."           |
| 4.3  |    Programm gestartet, Einsatz = 5 Benutzer's Zahlenkonto = 20, Dealer's Zahlenkonto = 14          |    *Nichts*     |     *Dealer zieht eine Karte.*         |
| 4.4  |    Programm gestartet, Einsatz = 5 Benutzer's Zahlenkonto = 20, Dealer's Zahlenkonto = 16          |    *Nichts*     |     *Dealer zieht eine Karte.*         |
| 4.5  |    Programm gestartet, Einsatz = 5 Benutzer's Zahlenkonto = 20, Dealer's Zahlenkonto = 17          |    *Nichts*     |     *Dealer zieht keine Karte.*         |
| 5.1  |  Programm gestartet             |    *Nichts*     |    **Kartendeck generiert**               |
| 6.1  |  Programm gestartet User wird abgefragt, welchen Einsatz er setzten möchte (0.25 ,0.5, 1, 5, 10, 25, 50, 100          |    Button(5)     |   **Spiel beginnt mit dem Einsatz von 5.**        |
| 6.1  |  Programm gestartet User wird abgefragt, welchen Einsatz er setzten möchte (0.25 ,0.5, 1, 5, 10, 25, 50, 100          |    zweimal Button(5)     |   "Nicht möglich, Sie können nur einen Einsatz geben."       |
| 7.1  |  Programm gestartet, Karten wurden ausgeteilt       |  *Double*      |   *Spieler verdoppelt seinen Einsatz und zieht eine Karte.*       |
| 8.1  |  Programm gestartet User hat gedoublet       |    *Nichts*    |   "Sie dürfen keine weitere Karte Ziehen."       |
| 9.1  | Programm wurde gestartet, Dealer teilt Karten aus. | *Nichts* | **Der Spieler hat zwei Karten.** |
| 10.1 |  Programm gestartet Karten ausgeteilt, User hat eine 10 und ein Ass (BlackJack) mit einem Einsatz 5       |   *Nichts*      |   "Spieler hat gewonnen, bekommt 10 auf das Konto."        |
| 11.1 |  Programm ist in Javascript geschrieben worden   |   *Nichts*      |   *Nichts*      |
| 12.1 |  Programm gestartet, Karten wurden Ausgeteilt  |   *Nichts*      |   *dem User wurden 2 Karten ausgeteilt. Der Dealer auch, aber seie erste Karte ist verdeckt.*      |
| 13.1 |  Programm ist gestartet, der User hat keine Karte mehr genommen |   *Nichts*      |   *Der Dealer deckt seine verdeckte Karte auf und zieht je nach Zahlenkontostand Karten.*      |
| 14.1 |  Programm wurde gestartet|   *Nichts*      |   *Der User bekommt 50 als Startkapital.*      |
| 15.1 |  Programm wurde gestartet, Spieler hat gewonnen|   *Nichts*      |   *Der User bekommt den doppelten Wert von seinem Einsatz auf sein Konto gutgeschrieben.*      |
| 16.1 |  Programm wurde gestartet, Spieler hat mit einem BlackJack gewonnen|   *Nichts*      |    *Der User bekommt 2.5 Mal von seinem Einsatz auf sein Konto gutgeschrieben.*      |
| 17.1 |  Programm wurde gestartet, der Dealer hat sich überspielt und der User nicht|   *Nichts*      |   *Der User bekommt das Doppelte von seinem Einsatz auf das Konto gutgeschrieben*      |
| 18.1 |  Programm wurde gestartet, der Dealer und der Spieler haben die gleiche Zahlen im Zahlenkonto und sie sind oder unter 21|   *Nichts*      |   "Push" *Der Spieler bekommt seinen Einsatz zurück*      |


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
| 1.1  |   05.04.2024    |    OK      |   Pascal Oestrich     |
| 2.1  |    05.04.2024    |     OK     |    Pascal Oestrich     |
|  3.1 |   05.04.2024     |    OK      |   Pascal Oestrich     |
|  4.1 |  05.04.2024      |   OK      |    Pascal Oestrich     |
|  4.2 |  05.04.2024      |     OK     |   Pascal Oestrich      |
|  4.3 |  05.04.2024      |       OK   |   Pascal Oestrich      |
|  4.4 |   05.04.2024     | OK         |    Pascal Oestrich     |
|  4.5 |   05.04.2024     |   OK       |     Pascal Oestrich    |
|  5.1 |   05.04.2024     |     OK     |    Pascal Oestrich     |
|  6.1 |   05.04.2024     |       OK   |    Pascal Oestrich     |
|  7.1 |   05.04.2024     | OK         |    Pascal Oestrich     |
|  8.1 |   05.04.2024     |   OK       |    Pascal Oestrich     |
|  9.1 |   05.04.2024     |     OK     |    Pascal Oestrich     |
|  10.1 |   05.04.2024     |      OK    |   Pascal Oestrich      |
| 11.1  |  05.04.2024      |        OK  |    Pascal Oestrich     |
| 12.1  |   05.04.2024     |OK          |   Pascal Oestrich      |
|  13.1 |   05.04.2024     |  OK        |   Pascal Oestrich      |
|  14.1 |    05.04.2024    |    OK      |   Pascal Oestrich      |
| 15.1  |   05.04.2024     |      OK    |   Pascal Oestrich      |
| 16.1  |   05.04.2024     |        OK  |   Pascal Oestrich      |
|  17.1 |   05.04.2024     |OK          |   Pascal Oestrich      |
|  18.1 |   05.04.2024     |  OK        |   Pascal Oestrich      |



Das Programm läuft optimal. Alle Testfälle hatten ein positives Ergebniss.



## 6 Mahara-Portfolios

Pascal Oestrich: https://portfolio.bbbaden.ch/user/p-oestrich-inf22/la1400-blackjack-in-javascript

Marek von Rogall: https://portfolio.bbbaden.ch/view/view.php?t=6d5404156d68fb4db55e
