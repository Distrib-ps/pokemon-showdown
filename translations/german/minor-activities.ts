import type { Translations } from "../../server/chat";

export const translations: Translations = {
	strings: {
		"The announcement has ended.": "Die Ankündigung wurde beendet.",
		"Battles do not support announcements.": "Kämpfe unterstützen keine Ankündigungen.",
		"You are not allowed to use filtered words in announcements.": "Du darfst keine gefilterten Worte in Ankündigungen verwenden.",
		"There is already a poll or announcement in progress in this room.": "Es gibt bereits eine Umfrage oder Ankündigung in diesem Raum.",
		"An announcement was started by ${user.name}.": "Eine Ankündigung wurde von ${user.name} gestartet.",
		"There is no announcement running in this room.": "Derzeit gibt es keine Ankündigung in diesem Raum.",
		"There is no timer to clear.": "Es gibt keinen Timer zum Ausschalten.",
		"The announcement timer was turned off.": "Der Ankündigungs-Timer wurde ausgeschaltet.",
		"Invalid time given.": "Ungültige Zeitangabe.",
		"The announcement timer is off.": "Der Ankündigungs-Timer ist ausgeschaltet.",
		"The announcement was ended by ${user.name}.": "Die Ankündigung wurde von ${user.name} beendet.",
		"Accepts the following commands:": "Folgende Befehle werden akzeptiert:",

		"That option is not selected.": "Diese Wahloption ist nicht ausgewählt.",
		"You have already voted for this poll.": "Du hast bereits für diese Umfrage abgestimmt.",
		"No options selected.": "Keine Wahloption wurde ausgewählt.",
		"you will not be able to vote after viewing results": "du wirst nicht mehr abstimmen können, nachdem du die Ergebnisse eingesehen hast",
		"View results": "Ergebnisse einsehen",
		"You can't vote after viewing results": "Du kannst nicht mehr abstimmen, nachdem du die Ergebnisse eingesehen hast",
		"The poll has ended &ndash; scroll down to see the results": "Die Umfrage wurde beendet &ndash; scrolle nach unten, um die Ergebnisse einzusehen",
		"Vote for ${num}": "Stimme ab für ${num}",
		"Submit your vote": "Reiche deine Stimme ein",
		"Quiz": "Quiz",
		"Poll": "Umfrage",
		"Submit": "Einreichen",
		"ended": "beendet",
		"votes": "Stimmen",
		"delete": "löschen",
		"Poll too long.": "Die Umfrage ist zu lang.",
		"Battles do not support polls.": "Kämpfe unterstützen keine Umfragen.",
		"You are not allowed to use filtered words in polls.": "Du darfst keine gefilterten Worte in Umfragen verwenden.",
		"Not enough arguments for /poll new.": "Die Argumente für /poll new sind nicht hinreichend.",
		"Too many options for poll (maximum is 8).": "Es liegen zu viele Wahloptionen in der Umfrage (maximal 8) vor.",
		"There are duplicate options in the poll.": "Es liegen doppelte Wahloptionen in der Umfrage vor.",
		"${user.name} queued a poll.": "${user.name} hat eine Umfrage in die Warteschleife gestellt.",
		"A poll was started by ${user.name}.": "Eine Umfrage wurde von ${user.name} gestartet.",
		"The queue is already empty.": "Die Warteschleife ist bereits leer.",
		"Cleared poll queue.": "Die Umfrage-Warteschleife wurde gelöscht.",
		"Room \"${roomid}\" not found.": "Room \"${roomid}\" wurde nicht gefunden.",
		"Can't delete poll at slot ${slotString} - \"${slotString}\" is not a number.": "Die Umfrage kann nicht gelöscht werden an der Stelle ${slotString} - \"${slotString}\" ist keine Nummer.",
		"There is no poll in queue at slot ${slot}.": "An der Stelle ${slot} gibt es keine Umfrage in der Warteschleife.",
		"(${user.name} deleted the queued poll in slot ${slot}.)": "(${user.name} hat die Umfrage in der Warteschleife an der Stelle ${slot}.) gelöscht.",
		"There is no poll running in this room.": "Derzeit gibt es keine Umfrage in diesem Raum.",
		"To vote, specify the number of the option.": "Um abzustimmen, musst du dich für eine Wahloption entscheiden.",
		"Option not in poll.": "Die Wahloption ist nicht in der Umfrage.",
		"The poll timer was turned off.": "Der Umfrage-Timer wurde ausgeschaltet.",
		"The queued poll was started.": "Die Umfrage in der Warteschleife wurde gestartet.",
		"The poll timer was turned on: the poll will end in ${timeout} minute(s).": "Der Umfrage-Timer wurde eingeschaltet: Die Umfrage wird in ${timeout} Minute(n) beendet.",
		"The poll timer was set to ${timeout} minute(s) by ${user.name}.": "Der Umfrage-Timer wurde von ${user.name} auf ${timeout} Minute(n) gestellt.",
		"The poll timer is on and will end in ${poll.timeoutMins} minute(s).": "Der Umfrage-Timer ist eingeschaltet und wird in ${poll.timeoutMins} Minute(n) enden.",
		"The poll timer is off.": "Der Umfrage-Timer ist ausgeschaltet.",
		"The poll was ended by ${user.name}.": "Die Umfrage wurde von ${user.name} beendet.",
		"Queued polls:": "Umfragen in der Warteschleife:",
		"Refresh": "Aktualisieren",
		"No polls queued.": "Keine Umfragen befinden sich in der Warteschleife.",
		"#${number} in queue": "#${number} in der Warteschleife.",
	},
};
