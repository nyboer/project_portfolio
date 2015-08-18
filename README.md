# project_portfolio
A responsive, single page website template to setup a portfolio of projects. 
The basic structure for telling the story of a project is 'problem, solution, tools, video'. 

A simple JSON file provides content. Uses bootcamp for layout and jquery to manage the DOM.

## About ##
If you need a portfolio site for projects you've worked on, this simple template is a good place to start. Bootstrap manages the layout to make it look good on mobile and desktop devices. All you need to do is edit the `js/projects.json` file and add images to the `img/` directory. Since the links to images in the JSON file are arbitrary, you could create your own image directories. 

You can put as many projects as you want in the `projects.json` file, and they will be rendered as needed. If you have a lot of projects, you can reduce what you show to any one party by adding a variable to the end of the url. For example, the link:
```
www.aportfolio.com/index.html?proj='1001101'
```
would populate the top navigation with four projects: the 1st, 4th, 5th, and 7th projects, based on the order in the `projects.json` file.


This portfolio also accommodates video playback. Just enter a youtube URL in the images array in `projects.json`, and the portfolio will handle playback, sizing, etc.

Another special field, designed for the 3rd slide in the portfolio, is the 'tools' section. Enter an array of tools and technology used for the projects to show your expertise!

The first item in the `projects.json` file is the *About* which can be structured a bit differently than projects. You can just put one or two pictures in there if you like. Notice there is no `tools` node in the *About* section.

If you want to change the fonts, you'll need to change the links in the `index.html` header, as well as the font-family styles in `css/main.css`

Example images are used with permission from http://www.unsplash.com

See this portfolio in action at http://yowstar.com/pftemp/
