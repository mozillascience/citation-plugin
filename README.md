# citation-plugin

citation-plugin is a firefox plugin which presents the [CitationCore](https://github.com/mozillascience/CitationCore) library in a user friendly way in browswer. It is part of a larger effort, lead by Mozilla Science Lab, to develop a suite of tools that aim to implement a standard for citing software and making it easier to cite software correctly.  To learn more about this project you can visit the [Software Citation Tools repository](https://github.com/mozillascience/software-citation-tools).

## Install
To install:
```
cd Plugin
npm install 
```

Once the install script finishes, navigate to [about:debugging#addons](about:debugging#addons). Once there, select the the "Load Temporary Add-on", navigate to the Plugin directory and select the manifest.json and click load
## Contributor Install
If you are interested in contributing to citation-plugin please follow these install instructions. They will add a pre-commit hook that will run our linter and reject commits that do not meet the project's coding standards.  We are adhereing to the [AirBnb style guide](https://github.com/airbnb/javascript). 
```
git clone https://github.com/mozillascience/citation-plugin.git
cd Plugin
cp dev/pre-commit .git/hooks/
```
