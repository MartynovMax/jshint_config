# jshint configuration

This project contains different configurations for 
[JSHint](http://jshint.com/docs/) for different tools. 
It will allow automatically watch your code and make the validation (JS & CSS) on the fly.


#### [Install](#install)
#### [Gulp configuration](#gulp-configuration)
#### [Code styles](#code-styles)
##### [JS styles](#js-styles)
##### [CSS styles](#css-styles)


# Install
Copy .jshintrc file to your project to start



# Gulp configuration 

## Install
```
npm install --save-dev gulp gulp-jshint jshint jshint-stylish gulp-watch gulp-cached gulp-csslint gulp-util
```

Copy file './gulp/gulpfile.js' to your project, or just add the 
code from this file to your gulpfile.js if it is already exists

Run watch task:
```
gulp watch
```

Process and results of the validation you will see in the terminal.
You will see the warnings only for files which was changed.



# Code styles
## JS styles
1. [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
2. [Google JavaScript Style Guide](https://google.github.io/styleguide/javascriptguide.xml)
3. [Felix's Node.js Style Guide](http://nodeguide.com/style.html)
4. [Angular Style Guide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md)

## CSS styles
1. [Airbnb CSS](https://github.com/airbnb/css)
2. [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.xml)

### Dunice (c)