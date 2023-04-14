# Professional README Generator

The professional README Generator creates markdown files (all named 'README.md'), by taking a template with relevant markdown, and populating it with text supplied by the user via a terminal prompt.

When run, the Generator prompts the user with 8 questions, using the inquirer.js dependency. 7 of the questions use the "input" type, which takes typed strings for answers, and 1 question uses the "list" type, where the user selects a single answer from a provided list. The Generator would be more user-friendly if some of the "input" type questions were "editor" type instead, but this was not feasible since the behavior of "editor" varies wildly from user to user, and from machine to machine.

The 'EXAMPLE README.md' provided was created by the Professional README Generator.

## Notes on usage

Make sure you run Professional README Generator with write permissions! It needs to create a file in order for it to work.

Note that Professional README Generator will overwrite any existing README.md in its directory. That includes other README.mds that it made earlier.

## Video Demonstration:

[Inglehart Professional README Generator](https://watch.screencastify.com/v/Kt1PfXYCLM1JywzGryms)

## A screenshot of the Generator being used in a Git Bash terminal on Windows:

![module nine challenge screencap](/readme-screencap.png)
