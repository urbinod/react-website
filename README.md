# React website

#### To deploy code in github, gh-pages needs to be installed

```
    npm install -g gh-pages --save-dev
    Homepage link should be added in the package.json
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    should be added under scripts
```

## Deploy the build folder:

```
  npm run deploy
```

#### (If you are using GitHub in your code editor, you will see the build folder content being added to the Unstaged Changes - ready to be staged).

### Stage all:

```
  git add .
```

### ..and commit:

```
  git commit -m "update build for gh-pages"
```

#### Last step - Push to GitHub:

```
  git push -u origin master
```
