# Russian-Verbs-Classification

Purpose of the repository is to share knowledge and efforts to build a database about the the most frequent Russian Verbs which are the most useful for any russian language learners.

This database can be used for the study of russian verbs: to study verbs forms, to learn conjugation, to build cheat-sheets...

Once opened with a CSV Editor (Excel or an open-source alternative) it becomes easy to filter and display only the wanted verbs.

## What is in the file ?

The main file is called `RussianVerbsClassification.csv` and contains *3048* verbs.

More facts:
- 8959 words are contained in the *Frequency Dictionary of Contemporary RussianCore Vocabulary for Learner (2013)*
- 1755 verbs were extracted from these words (that's around 1 out of 5 words)
- 1293 aspect pairs from these verbs, not initialy in the frequency list were added. These newly added verbs have a rank set to 10000.


### Data structure

The file contains for each verb:

* Translation
  * English
  * French


* Conjugation
  * Conjugation at the present tense (if imperfective) else the future tense
  * Conjugation of imperatives
  * Conjugation of verbal adjectives and verbal adverbs


* Metadata
  * Rank and CEFR level in the russian language, as defined by results from the 2013 Frequency Dictionary of Contemporary RussianCore Vocabulary for Learner by [Serge Sharoff, Elena Umanskaya, James Wilson](http://corpus.leeds.ac.uk/serge/publications/2013-routledge-intro.pdf) (more about it: [paper about the european KELLY project](http://corpus.leeds.ac.uk/serge/publications/2014-LREV-kelly.pdf), [dictionary files](http://corpus.leeds.ac.uk/serge/kelly/)). Rank is 10 000 when an aspect pair was not in the initial frequency list.
  * Aspect pairs (imperative / perfective)
  * Belonging to conjugation groups (1st or 2nd conjugation group and suffixes as defined by [ressources from the Cornell University](https://russian.cornell.edu/verbs/irgLinks.htm))
  * Any other metadata that could be suggested and be relevant may by added


> **April 2020: Be warned that material is given as is and may contains mistakes or not be complete. For example:
> - conjugation is missing for a minority of verbs
> - conjugation groups are not set
> - some aspect pairs might be wrong

Your contributions are welcomed to improve the file**


## Reading the file

The easiest way to read the file is to go on the [webpage](https://storkst.github.io/RussianVerbsClassification/).

You can also download it and open it with your favorite CSV reader. Note that columns are marked with semicolons ';'.


## Contributing and editing the main CSV file

When contributing to the project, you should take care of the tool you are using.<br>
For example Excel can read the file in UTF-8 but exports with a BOM UTF-8 encoding that adds unwanted bytes to the file. Therefore you should avoid using Excel for editing if you want to contribute.

The best ways to edit the file for a collaborative usage are:
* Using OpenOffice Calc with this configuration set when opening the file.<br>
<img src="screenshots/LibreOffice-calc-configuration-at-opening.png" width="450">

It is important to not check Tab as it will add unwanted tabs throughout the file.


* Using [Atom](https://atom.io/) with the [atom-tablr extension](https://github.com/abe33/atom-tablr). With this configuration set when opening the file. <br>
<img src="screenshots/Atom-tablr-configuration-at-opening.png" width="700">


* Using a simple text editor (but this solution is not user-friendly)

* Feel free to try other text editors that would be simple to use but verify with `git diff` that new modifications to the file are comparable with its previous version

## Contributions

Thanks to:

* [Pavel Voronin](https://github.com/voroninp) for loading and setting up the CSV file into the MUI-Datatables component


## TODO
* Most needed would be making a review of the verbs, fixing false information and adding the missing one (conjugation and aspect pairs mainly)

* Completing Metadata "Conjugation groups" and "Suffix"

* Creating special cheat-sheets (for learning conjugation groups, suffix, verbal adjectives, imperfective of perfective forms...)


Feel free to open issue and suggest new columns and information about verbs (Translation, Metadata...). Pull Requests are welcomed.
