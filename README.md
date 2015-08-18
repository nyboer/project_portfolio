# project_portfolio
A responsive, single page website template to setup a portfolio of projects. 
Based around telling stories as 'problems/solutions'. 
A simple JSON file provides content. Uses bootcamp for layout and jquery to manage the DOM.

## About ##
If you need a portfolio site for projects you've worked on, this simple template is a good place to start. Bootstrap manages the layout to make it look good on mobile and desktop devices. All you need to do is edit the `js/projects.json` file and add images to the `img/` directory. Since the links to images in the JSON file are arbitrary, you could create your own image directories. 

This portfolio also accommodates video playback. Just enter a youtube URL in the images array in projects.json, and the portfolio will handle playback, sizing, etc.

Another special field, designed for the 3rd slide in the portfolio, is the 'tools' section. Enter an array of tools and technology used for the projects to show your expertise!

The first item in the `projects.json` file is the *About* which can be structured a bit differently than projects. You can just put one or two pictures in there if you like. Notice there is no `tools` node in the *About* section.

If you want to change the fonts, you'll need to change the links in the `index.html` header, as well as the font-family styles in `css/main.css`

