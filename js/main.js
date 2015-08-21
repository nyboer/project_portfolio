// 
// $( window ).resize(function() {
//   console.log('window width: '+ $( window ).width());
// });

//get database of project media
var proj = {};
$.getJSON('js/projects.json', function(p) {
    console.log('getting projects');
    proj = p;
  })
  .success(function() {
    console.log('projects loaded');
    setupProjects();
    renderProjectsRow();
    //renderProject(projectnames[0]);
    $('#project_0').trigger('click');
  })
  .fail(function() {
    console.log('projects JSON error');
  });


var projToRender = [];
//use a 'punchcard' variable in the url to only render some of the projects from the JSON, such as http://myportfolio.com/index.html?proj='10110101':
function setupProjects(){
  var renderThese = $.urlParam('proj');
  var i = 0;
  var k = 0;
  projToRender = [];
  //if no variable is used, render all projects
  if( isEmpty(renderThese) ){
    //render all the projects
    for (ptitle in proj){
      projToRender[i] = ptitle;
      i++;
    }
  }else{
    //render some projects
    for (ptitle in proj){
      var j = i+1; //first item in string from url is blank, so we start at 1
      if(renderThese[j]>0){
        projToRender[k] = ptitle;
        k++;
      }
      i++;
    }
  }
}

//create the projects nav content based on JSON database
var projectnames = []; //convenient
function renderProjectsRow() {
  if(!isEmpty(proj)){ 
    //first clear the projects div
    $('#projects').empty();
    //now fill it up
    var i=0;
    for (i in projToRender){
      var ptitle = projToRender[i];
      var somehtml = '<li class="proj projpage" id="project_'+i+'"><ahref="#">'+ptitle+'</a></li>'
      $('#projects').append(somehtml);
      projectnames[i]=ptitle;
      i++;
    }
  }
//   console.log('showing projects: '+projectnames);
}

var currentproject = '';
//click on project button
$(document).on('click','.projpage',function(e){
  var pid = $(this).attr('id');
  var id = pid.split("_");
  //exclude label
  if(id.length>1){
    $('.projpage').each(function(){
      $( this ).removeClass('on');
      $( this ).removeClass('off');
      $( this ).addClass('off');
    });
    $( this ).removeClass('off');
    $( this ).addClass('on');
    var pname = projectnames[ id[1] ]
    currentproject = pname;
    renderPage(pname)
  }
});


//fill up the project area with project content

//when a project name is clicked on:
function renderProject(pname){
  
//   console.log('rendering project '+pname);
  if(!textiscollapsed){
    $('#descriptitle').trigger('click');
  }
}

function renderPage() {
//   console.log('rendering page: '+currentproject);
  $('#project').fadeTo(100,0., function() {  
  
    //title text
    var titletext = currentproject;
    $('#projectTitle').html(titletext);
  
    //intro text
    var problemtext = proj[currentproject]['problem'];
//     console.log('problemtext: '+problemtext);
    $('#problem').html(problemtext);
  
    var solutiontext = proj[currentproject]['solution'];
//     console.log('solutiontext: '+solutiontext);
    $('#solution').html(solutiontext);
  
    //project text
    var maintext = proj[currentproject]['projectText'];
//     console.log('maintext: '+maintext);
    $('#projectText').html(maintext);

    //tools text
    $('#toolsText').empty();
    $('#toolsText').append('<p>'); //there's a better way to do this, I'm sure....
    var introtext = proj[currentproject]['tools'];
    for(i in introtext){
      $('#toolsText').append('• '+introtext[i]+'<br>');
//       console.log(introtext[i]);
    }
    $('#toolsText').append('</p>'); //there's a better way to do this, I'm sure....
    
    //images
    var images = proj[currentproject]['mains'];
    for (i in images){    
      var yout = images[i].split('youtube.com').length;
      //first image goes into a parallax container https://github.com/pixelcog/parallax.js/      
      if(yout>1){
        var hash = images[i].split('/').pop(); //the hash code used for the youtube URL, e.g. HGV3yV9q4Q4
        var movhtml = '<div class="item embed-responsive embed-responsive-16by9 mainimg" id="video"><iframe id="videoframe" src="http://www.youtube.com/embed/'+hash+'?version=3&amp;enablejsapi=1"></iframe></div>';
        $('#image_'+i).html(movhtml);
      }else{  
        var imghtml = '<img src="'+images[i]+'" alt="Peter Nyboer portfolio" class="mainimg">'
        $('#image_'+i).html(imghtml);
      }
    }
  }).fadeTo(400,1);;
}


//--UTLITIES---------------------------------------------------------------

//from stackoverflow http://stackoverflow.com/questions/4994201/is-object-empty
// Speed up calls to hasOwnProperty
var hasOwnProperty = Object.prototype.hasOwnProperty;
function isEmpty(obj) {
    // null and undefined are "empty"
    if (obj == null) return true;

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length > 0)    return false;
    if (obj.length === 0)  return true;

    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and valueOf enumeration bugs in IE < 9
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }
    return true;
}

//get url and store as variables
//ex: given "example.com?param1=name" $.urlParam('param1') results in 'name'
$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return results[1] || 0;
    }
}
