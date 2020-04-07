* To run on localhost:

  `npm install && npm run start:dev`


* To build docker container

  `docker build . -t VerbsApp`

  Where `VerbsApp` is a tag for the image, omit `-t VerbsApp` if you don't want to tag the image.


* To build and export to branch `gh-pages`:

  `npm run build && npm run deploy`
