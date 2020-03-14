# Russian-Verbs-Classification

Purpose of the repository is to share knowledge and efforts to build a database about the the most frequent Russian Verbs.
This database can be used for the study of russian verbs: learn conjugation, revise with cheat-sheets, study verbs forms...

Once opened with a CSV Editor (Excel or an open-source alternative) it becomes easy to filter and display only the wanted verbs.

## Structure

The main file is called RussianVerbs.csv
It contains for each verb:

* Conjugation
  * Conjugation of the present present (if imperfective) else the future tense.
  * Conjugation of imperatives
  * Conjugation of verbal adjectives and verbal adverbs

* Translation
  * In english for now

* Metadata
  * Aspect pairs (imperative / perfective)
  * Rank in the russian language, as defined by a study of Serge Sharoff. Rank is 0 when an aspect pair was not in the initial frequency list.
  * Belongings to conjugation groups (1st or 2nd conjugation group, suffixes as defined by [ressources from the Cornell University](https://russian.cornell.edu/verbs/irgLinks.htm))
  * Any other metadata that could be suggested and be relevant may by added


March 2020: Be warned that material is given as is and may contains mistakes or not be complete. For example many adverbial forms are not yet specified and Conjugation is missing for a few verbs.


## Quantity

Of the 1396 verbs from the initial frequency list of the study, the main file goes to around 2000, adding aspect pairs that were not initialy in the frequency list.


## TODO
* Most needed would be making a review of the verbs, fixing false information and adding the missing one (Conjugation and aspect pairs mainly)
* Adding Metadata "Conjugation groups" and "Suffix"
* Creating special cheat-sheets (for learning conjugation groups, suffix, verbal adjectives, imperfective of perfective forms...)
* Feel free to make Pull Request to add new columns and information about verbs (Translation, Metadata...)
