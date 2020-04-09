# Core Russian Verbs

Purpose of the repository is to share knowledge and efforts to build a database about the the most frequent Russian verbs which are the most useful for any learner of the russian language.

This database/file can be used for example to:
- learn conjugation
- study and revise verbs forms
- build cheat-sheets
- build exercices

## What is in the file ?

The main file is called `RussianVerbsClassification.csv` and contains *3047* verbs.

More facts:
- 8959 words are in the *Frequency Dictionary of Contemporary Russian Core Vocabulary for Learners, 2013*
- 1755 verbs were extracted from these words (that's around 1 word out of 5 words)
- 1292 aspect pairs from these verbs, not initialy in the frequency list were added. These newly added verbs have a rank set to 10000.
- 1755 + 1292 = 3047


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
  * Rank and CEFR level in the russian language<br>
  As defined by Serge Sharoff, Elena Umanskaya, James Wilson (2008), in the [Frequency Dictionary of Contemporary Russian Core Vocabulary for Learner, 2013](http://corpus.leeds.ac.uk/serge/publications/2013-routledge-intro.pdf) by <br>
  To learn more about this study: [paper about the european KELLY project](http://corpus.leeds.ac.uk/serge/publications/2014-LREV-kelly.pdf), [dictionary files](http://corpus.leeds.ac.uk/serge/kelly/).<br>
  Note that the rank is set to 10 000 for a verb when he is a newly added aspect pair not originally in the *Frequency Dictionary*.

  * Aspect pairs (imperative / perfective)

  * Irregularity<br>
    Initiated with a list of irregular verbs from V.G. Gak and J. Triomphe (1991), *Dictionnaire français-russe французско-русский словарь*. 

  * Belonging to conjugation groups<br>
    1st or 2nd conjugation group.<br>
    Suffixes as defined by [ressources from the Cornell University](https://russian.cornell.edu/verbs/irgLinks.htm).

  * And any other metadata that could be relevant for learning


> April 2020: Be warned that material is given as is and may contains mistakes or not be complete. For example:
> - Conjugation is missing for a minority of verbs
> - Conjugation groups are not set
> - Some aspect pairs might be wrong
>
> Your contributions are welcomed to improve the file.


## Reading the file

The easiest way to read the file is to go on its [webpage](https://storkst.github.io/CoreRussianVerbs/).

You can also download the file from the repository and open it with your favorite CSV reader. Note that columns are marked with the semicolon mark ';'.


## Contributing and editing the main CSV file

When contributing to the project, you should take care of the tool you are using for editing the file.<br>
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

* Completing Metadata "Conjugation groups", "Suffix" and other almost-empty fields

* Creating special cheat-sheets (for learning conjugation groups, suffix, verbal adjectives, imperfective of perfective forms...)


Feel free to open issues and suggest new columns and information about verbs (Translation, Metadata...). Pull Requests are welcomed to improve the quality of the file.
