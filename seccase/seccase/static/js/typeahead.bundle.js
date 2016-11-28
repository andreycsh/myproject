<!DOCTYPE html>
<html lang="en">
<head>
  <meta id="bb-bootstrap" data-current-user="{&quot;isKbdShortcutsEnabled&quot;: true, &quot;isSshEnabled&quot;: false, &quot;isAuthenticated&quot;: false}" />
  
  
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta charset="utf-8">
  <title>
  amirski_ / labdemo 
  / source  / labdemo / static / js / typeahead.bundle.js
 &mdash; Bitbucket
</title>
  <script type="text/javascript">window.NREUM||(NREUM={}),__nr_require=function(e,t,n){function r(n){if(!t[n]){var o=t[n]={exports:{}};e[n][0].call(o.exports,function(t){var o=e[n][1][t];return r(o||t)},o,o.exports)}return t[n].exports}if("function"==typeof __nr_require)return __nr_require;for(var o=0;o<n.length;o++)r(n[o]);return r}({1:[function(e,t,n){function r(){}function o(e,t,n){return function(){return i(e,[(new Date).getTime()].concat(u(arguments)),t?null:this,n),t?void 0:this}}var i=e("handle"),a=e(2),u=e(3),c=e("ee").get("tracer"),f=NREUM;"undefined"==typeof window.newrelic&&(newrelic=f);var s=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit"],l="api-",p=l+"ixn-";a(s,function(e,t){f[t]=o(l+t,!0,"api")}),f.addPageAction=o(l+"addPageAction",!0),f.setCurrentRouteName=o(l+"routeName",!0),t.exports=newrelic,f.interaction=function(){return(new r).get()};var d=r.prototype={createTracer:function(e,t){var n={},r=this,o="function"==typeof t;return i(p+"tracer",[Date.now(),e,n],r),function(){if(c.emit((o?"":"no-")+"fn-start",[Date.now(),r,o],n),o)try{return t.apply(this,arguments)}finally{c.emit("fn-end",[Date.now()],n)}}}};a("setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(e,t){d[t]=o(p+t)}),newrelic.noticeError=function(e){"string"==typeof e&&(e=new Error(e)),i("err",[e,(new Date).getTime()])}},{}],2:[function(e,t,n){function r(e,t){var n=[],r="",i=0;for(r in e)o.call(e,r)&&(n[i]=t(r,e[r]),i+=1);return n}var o=Object.prototype.hasOwnProperty;t.exports=r},{}],3:[function(e,t,n){function r(e,t,n){t||(t=0),"undefined"==typeof n&&(n=e?e.length:0);for(var r=-1,o=n-t||0,i=Array(o<0?0:o);++r<o;)i[r]=e[t+r];return i}t.exports=r},{}],ee:[function(e,t,n){function r(){}function o(e){function t(e){return e&&e instanceof r?e:e?c(e,u,i):i()}function n(n,r,o){if(!p.aborted){e&&e(n,r,o);for(var i=t(o),a=v(n),u=a.length,c=0;c<u;c++)a[c].apply(i,r);var f=s[w[n]];return f&&f.push([y,n,r,i]),i}}function d(e,t){b[e]=v(e).concat(t)}function v(e){return b[e]||[]}function g(e){return l[e]=l[e]||o(n)}function m(e,t){f(e,function(e,n){t=t||"feature",w[n]=t,t in s||(s[t]=[])})}var b={},w={},y={on:d,emit:n,get:g,listeners:v,context:t,buffer:m,abort:a,aborted:!1};return y}function i(){return new r}function a(){(s.api||s.feature)&&(p.aborted=!0,s=p.backlog={})}var u="nr@context",c=e("gos"),f=e(2),s={},l={},p=t.exports=o();p.backlog=s},{}],gos:[function(e,t,n){function r(e,t,n){if(o.call(e,t))return e[t];var r=n();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(e,t,{value:r,writable:!0,enumerable:!1}),r}catch(i){}return e[t]=r,r}var o=Object.prototype.hasOwnProperty;t.exports=r},{}],handle:[function(e,t,n){function r(e,t,n,r){o.buffer([e],r),o.emit(e,t,n)}var o=e("ee").get("handle");t.exports=r,r.ee=o},{}],id:[function(e,t,n){function r(e){var t=typeof e;return!e||"object"!==t&&"function"!==t?-1:e===window?0:a(e,i,function(){return o++})}var o=1,i="nr@id",a=e("gos");t.exports=r},{}],loader:[function(e,t,n){function r(){if(!h++){var e=y.info=NREUM.info,t=l.getElementsByTagName("script")[0];if(setTimeout(f.abort,3e4),!(e&&e.licenseKey&&e.applicationID&&t))return f.abort();c(b,function(t,n){e[t]||(e[t]=n)}),u("mark",["onload",a()],null,"api");var n=l.createElement("script");n.src="https://"+e.agent,t.parentNode.insertBefore(n,t)}}function o(){"complete"===l.readyState&&i()}function i(){u("mark",["domContent",a()],null,"api")}function a(){return(new Date).getTime()}var u=e("handle"),c=e(2),f=e("ee"),s=window,l=s.document,p="addEventListener",d="attachEvent",v=s.XMLHttpRequest,g=v&&v.prototype;NREUM.o={ST:setTimeout,CT:clearTimeout,XHR:v,REQ:s.Request,EV:s.Event,PR:s.Promise,MO:s.MutationObserver},e(1);var m=""+location,b={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-998.min.js"},w=v&&g&&g[p]&&!/CriOS/.test(navigator.userAgent),y=t.exports={offset:a(),origin:m,features:{},xhrWrappable:w};l[p]?(l[p]("DOMContentLoaded",i,!1),s[p]("load",r,!1)):(l[d]("onreadystatechange",o),s[d]("onload",r)),u("mark",["firstbyte",a()],null,"api");var h=0},{}]},{},["loader"]);</script>
  


<meta id="bb-canon-url" name="bb-canon-url" content="https://bitbucket.org">

<meta name="bb-view-name" content="bitbucket.apps.repo2.views.filebrowse">
<meta name="ignore-whitespace" content="False">
<meta name="tab-size" content="None">

<meta name="application-name" content="Bitbucket">
<meta name="apple-mobile-web-app-title" content="Bitbucket">
<meta name="theme-color" content="#205081">
<meta name="msapplication-TileColor" content="#205081">
<meta name="msapplication-TileImage" content="https://d301sr5gafysq2.cloudfront.net/3260c91ef192/img/logos/bitbucket/white-256.png">
<link rel="apple-touch-icon" sizes="192x192" type="image/png" href="https://d301sr5gafysq2.cloudfront.net/3260c91ef192/img/bitbucket_avatar/192/bitbucket.png">
<link rel="icon" sizes="192x192" type="image/png" href="https://d301sr5gafysq2.cloudfront.net/3260c91ef192/img/bitbucket_avatar/192/bitbucket.png">
<link rel="icon" sizes="16x16 32x32" type="image/x-icon" href="/favicon.ico">
<link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="Bitbucket">
  <meta name="description" content="">
  
  
    
  



  <link rel="stylesheet" href="https://d301sr5gafysq2.cloudfront.net/3260c91ef192/css/entry/vendor.css" />
<link rel="stylesheet" href="https://d301sr5gafysq2.cloudfront.net/3260c91ef192/css/entry/app.css" />




  
  <script src="https://d301sr5gafysq2.cloudfront.net/3260c91ef192/dist/webpack/early.js"></script>
  
  
  
    <link href="/amirski_/labdemo/rss" rel="alternate nofollow" type="application/rss+xml" title="RSS feed for labdemo" />

</head>
<body class="production aui-page-sidebar aui-sidebar-expanded"
    data-static-url="https://d301sr5gafysq2.cloudfront.net/3260c91ef192/"
data-base-url="https://bitbucket.org"
data-base-api-url="https://api.bitbucket.org"
data-no-avatar-image="https://d301sr5gafysq2.cloudfront.net/3260c91ef192/img/default_avatar/user_blue.svg"
data-current-user="{&quot;isKbdShortcutsEnabled&quot;: true, &quot;isSshEnabled&quot;: false, &quot;isAuthenticated&quot;: false}"
data-atlassian-id="{&quot;loginStatusUrl&quot;: &quot;https://id.atlassian.com/profile/rest/profile&quot;}"
data-settings="{&quot;MENTIONS_MIN_QUERY_LENGTH&quot;: 3}"

data-current-repo="{&quot;scm&quot;: &quot;git&quot;, &quot;readOnly&quot;: false, &quot;mainbranch&quot;: {&quot;name&quot;: &quot;master&quot;}, &quot;language&quot;: &quot;&quot;, &quot;owner&quot;: {&quot;username&quot;: &quot;amirski_&quot;, &quot;uuid&quot;: &quot;d4b48e3d-1a09-441b-8706-f6aab26f2c65&quot;, &quot;isTeam&quot;: false}, &quot;fullslug&quot;: &quot;amirski_/labdemo&quot;, &quot;slug&quot;: &quot;labdemo&quot;, &quot;id&quot;: 21737049, &quot;pygmentsLanguage&quot;: null}"
data-current-cset="cc095f37210ff04106b3333cf7185a86f6c8f08d"





data-browser-monitoring="true"
data-switch-create-pullrequest-commit-status="true"

data-track-js-errors="true"

data-hide-inbox="true">
<div id="page">
  
    <ak-page
      layout="fluid"
      
        navigation-open
      
    >
      
    
    <div id="wrapper">
      
  


      
        <header id="header" role="banner" data-module="header/tracking">
          
  


          <nav class="aui-header aui-dropdown2-trigger-group" role="navigation">
            <div class="aui-header-inner">
              <div class="aui-header-primary">
                
  

                
                  <h1 class="aui-header-logo aui-header-logo-bitbucket logged-out"
                      id="logo" data-ct="header.logo">
                    <a href="/">
                      <span class="aui-header-logo-device">Bitbucket</span>
                    </a>
                  </h1>
                
                
  

    <script id="repo-dropdown-template" type="text/html">
      


  [[#hasViewed]]
    <div class="aui-dropdown2-section">
      <strong class="viewed">Recently viewed</strong>
      <ul>
        [[#viewed]]
          <li class="[[#is_private]]private[[/is_private]][[^is_private]]public[[/is_private]] repository">
            <a href="[[url]]" title="[[owner]][[#project]] / [[project]][[/project]] / [[name]]" class="aui-icon-container recently-viewed repo-link"
                data-ct="header.repository.dropdown.repository" data-ct-data='{"type": "recently-viewed"}'>
              <span class="aui-avatar aui-avatar-xsmall aui-avatar-project">
                <span class="aui-avatar-inner">
                  <img src="[[{avatar}]]">
                </span>
              </span>
              <span class="dropdown-path">
                <span class="dropdown-path-part">[[#project]][[project]][[/project]][[^project]][[owner]][[/project]]</span>
                <span class="dropdown-path-separator">/</span>
                <span class="dropdown-path-part dropdown-path-part--primary">[[name]]</span>
              </span>
            </a>
          </li>
        [[/viewed]]
      </ul>
    </div>
  [[/hasViewed]]
  [[#hasUpdated]]
    <div class="aui-dropdown2-section">
      <strong class="updated">Recently updated</strong>
      <ul>
        [[#updated]]
        <li class="[[#is_private]]private[[/is_private]][[^is_private]]public[[/is_private]] repository">
          <a href="[[url]]" title="[[owner]][[#project]] / [[project]][[/project]] / [[name]]" class="aui-icon-container recently-updated repo-link"
             data-ct="header.repository.dropdown.repository" data-ct-data='{"type": "recently-updated"}'>
            <span class="aui-avatar aui-avatar-xsmall aui-avatar-project">
              <span class="aui-avatar-inner">
                <img src="[[{avatar}]]">
              </span>
            </span>
            <span class="dropdown-path">
              <span class="dropdown-path-part">[[#project]][[project]][[/project]][[^project]][[owner]][[/project]]</span>
              <span class="dropdown-path-separator">/</span>
              <span class="dropdown-path-part dropdown-path-part--primary">[[name]]</span>
            </span>
          </a>
        </li>
        [[/updated]]
      </ul>
    </div>
  [[/hasUpdated]]


    </script>
  

    <script id="snippet-dropdown-template" type="text/html">
      <div class="aui-dropdown2-section">
  <strong>[[sectionTitle]]</strong>
  <ul class="aui-list-truncate">
    [[#snippets]]
      <li>
        <a href="[[links.html.href]]">[[owner.display_name]] / [[name]]</a>
      </li>
    [[/snippets]]
  </ul>
</div>

    </script>
  
<ul class="aui-nav">
  
    <li>
      <a href="/product/features">
        Features
      </a>
    </li>
    <li>
      <a href="/plans">
        Pricing
      </a>
    </li>
  
</ul>

              </div>
              <div class="aui-header-secondary">
                
  

<ul role="menu" class="aui-nav">
  
  <li>
    <form action="/repo/all" method="get" class="aui-quicksearch">
      <label for="search-query" class="assistive">owner/repository</label>
      <input id="search-query" class="bb-repo-typeahead" type="text"
             placeholder="Find a repository&hellip;" name="name" autocomplete="off"
             data-bb-typeahead-focus="false">
    </form>
  </li>
  <li>
    <a id="help-menu-link" class="aui-nav-link" href="#"
        aria-controls="help-menu-dialog"
        data-aui-trigger>
      <span id="help-menu-icon" class="aui-icon aui-icon-small aui-iconfont-help"></span>
    </a>
  </li>
  
    <li>
      <a class="aui-dropdown2-trigger" href="#header-language"
          aria-controls="header-language" aria-owns="header-language"
          aria-haspopup="true" data-container="#header .aui-header-inner">
        <span>English</span></a>
      <nav id="header-language" class="aui-dropdown2 aui-style-default aui-dropdown2-radio aui-dropdown2-in-header"
          aria-hidden="true">
        <form method="post" action="/account/language/setlang/"
            data-module="i18n/header-language-form">
          <input type="hidden" name="language" value="">
          <ul>
          <li><a class="aui-dropdown2-radio interactive checked"
                data-value="en" href="#en">English</a></li>
          
          <li><a class="aui-dropdown2-radio interactive "
                data-value="ja" href="#ja">日本語</a></li>
          </ul>
        </form>
      </nav>
    </li>
  
  
      <li id="header-signup-button">
        <a id="sign-up-link" data-ct="header.signup" class="aui-button aui-button-primary" href="/account/signup/">
          Sign up
        </a>
      </li>
    <li id="user-options">
      <a href="/account/signin/?next=/amirski_/labdemo/src/cc095f37210ff04106b3333cf7185a86f6c8f08d/labdemo/static/js/typeahead.bundle.js%3Fat%3Dmaster" class="aui-nav-link login-link">Log in</a>
    </li>
  
</ul>

              </div>
            </div>
          </nav>
        </header>
      

      
  

<header id="account-warning" role="banner" data-module="header/account-warning"
        class="aui-message-banner warning
        ">
  <div class="aui-message-banner-inner">
    <span class="aui-icon aui-icon-warning"></span>
    <span class="message">
    
    </span>
  </div>
</header>



      
  
<header id="aui-message-bar">
  
</header>


    <div id="content" role="main">
      
        
  
    <div class="aui-sidebar repo-sidebar"
    data-module="repo/sidebar"
  >
  <div class="aui-sidebar-wrapper">
    <div class="aui-sidebar-body">
      <header class="aui-page-header">
        <div class="aui-page-header-inner">
          <div class="aui-page-header-image">
            <a href="/amirski_/labdemo" id="repo-avatar-link" class="repo-link">
              <span class="aui-avatar aui-avatar-large aui-avatar-project">
                <span class="aui-avatar-inner">
                  <img src="https://d301sr5gafysq2.cloudfront.net/3260c91ef192/img/repo-avatars/default.svg" alt="">
                </span>
              </span>
            </a>
          </div>
          <div class="aui-page-header-main">
            <h1>
              
              <a href="/amirski_/labdemo" title="labdemo" class="entity-name">labdemo</a>
            </h1>
          </div>
        </div>
      </header>
      <nav class="aui-navgroup aui-navgroup-vertical">
        <div class="aui-navgroup-inner">
          
            
              <div class="aui-sidebar-group aui-sidebar-group-actions repository-actions forks-enabled">
                <div class="aui-nav-heading">
                  <strong>Actions</strong>
                </div>
                <ul id="repo-actions" class="aui-nav">
                  
                  
                    <li>
                      <a id="repo-clone-button" class="aui-nav-item "
                        href="#clone"
                        data-ct="sidebar.actions.repository.clone"
                        data-ct-data=""
                        data-module="components/clone/clone-dialog"
                        target="_self">
                        
                          <span class="aui-icon aui-icon-large icon-clone"></span>
                        
                        <span class="aui-nav-item-label">Clone</span>
                      </a>
                    </li>
                  
                    <li>
                      <a id="repo-compare-link" class="aui-nav-item "
                        href="/amirski_/labdemo/branches/compare"
                        data-ct="sidebar.actions.repository.compare"
                        data-ct-data=""
                        
                        target="_self">
                        
                          <span class="aui-icon aui-icon-large aui-icon-small aui-iconfont-devtools-compare"></span>
                        
                        <span class="aui-nav-item-label">Compare</span>
                      </a>
                    </li>
                  
                    <li>
                      <a id="repo-fork-link" class="aui-nav-item "
                        href="/amirski_/labdemo/fork"
                        data-ct="sidebar.actions.repository.fork"
                        data-ct-data=""
                        
                        target="_self">
                        
                          <span class="aui-icon aui-icon-large icon-fork"></span>
                        
                        <span class="aui-nav-item-label">Fork</span>
                      </a>
                    </li>
                  
                </ul>
              </div>
          
          <div class="aui-sidebar-group aui-sidebar-group-tier-one repository-sections">
            <div class="aui-nav-heading">
              <strong>Navigation</strong>
            </div>
            <ul class="aui-nav">
              
              
                <li>
                  <a id="repo-overview-link" class="aui-nav-item "
                    href="/amirski_/labdemo/overview"
                    data-ct="sidebar.navigation.repository.overview"
                    data-ct-data=""
                    
                    target="_self"
                    >
                    
                    
                      <span class="aui-icon aui-icon-large icon-overview"></span>
                    
                    <span class="aui-nav-item-label">
                      Overview
                      
                      
                    </span>
                  </a>
                </li>
              
                <li class="aui-nav-selected">
                  <a id="repo-source-link" class="aui-nav-item "
                    href="/amirski_/labdemo/src"
                    data-ct="sidebar.navigation.repository.source"
                    data-ct-data=""
                    
                    target="_self"
                    >
                    
                    
                      <span class="aui-icon aui-icon-large icon-source"></span>
                    
                    <span class="aui-nav-item-label">
                      Source
                      
                      
                    </span>
                  </a>
                </li>
              
                <li>
                  <a id="repo-commits-link" class="aui-nav-item "
                    href="/amirski_/labdemo/commits/"
                    data-ct="sidebar.navigation.repository.commits"
                    data-ct-data=""
                    
                    target="_self"
                    >
                    
                    
                      <span class="aui-icon aui-icon-large icon-commits"></span>
                    
                    <span class="aui-nav-item-label">
                      Commits
                      
                      
                    </span>
                  </a>
                </li>
              
                <li>
                  <a id="repo-branches-link" class="aui-nav-item "
                    href="/amirski_/labdemo/branches/"
                    data-ct="sidebar.navigation.repository.branches"
                    data-ct-data=""
                    
                    target="_self"
                    >
                    
                    
                      <span class="aui-icon aui-icon-large icon-branches"></span>
                    
                    <span class="aui-nav-item-label">
                      Branches
                      
                      
                    </span>
                  </a>
                </li>
              
                <li>
                  <a id="repo-pullrequests-link" class="aui-nav-item "
                    href="/amirski_/labdemo/pull-requests/"
                    data-ct="sidebar.navigation.repository.pullrequests"
                    data-ct-data=""
                    
                    target="_self"
                    >
                    
                    
                      <span class="aui-icon aui-icon-large icon-pull-requests"></span>
                    
                    <span class="aui-nav-item-label">
                      Pull requests
                      
                      
                    </span>
                  </a>
                </li>
              
                <li>
                  <a id="repo-downloads-link" class="aui-nav-item "
                    href="/amirski_/labdemo/downloads"
                    data-ct="sidebar.navigation.repository.downloads"
                    data-ct-data=""
                    
                    target="_self"
                    >
                    
                    
                      <span class="aui-icon aui-icon-large icon-downloads"></span>
                    
                    <span class="aui-nav-item-label">
                      Downloads
                      
                      
                    </span>
                  </a>
                </li>
              
            </ul>
          </div>
          <div class="aui-sidebar-group aui-sidebar-group-tier-one repository-settings">
            <div class="aui-nav-heading">
              <strong class="assistive">Settings</strong>
            </div>
            <ul class="aui-nav">
              
              
            </ul>
          </div>
          
        </div>
      </nav>
    </div>
    <div class="aui-sidebar-footer">
      <a class="aui-sidebar-toggle aui-sidebar-footer-tipsy aui-button aui-button-subtle"><span class="aui-icon"></span></a>
    </div>
  </div>
  

<div id="repo-clone-dialog" class="clone-dialog hidden">
  





  

<div class="clone-url" data-module="components/clone/url-dropdown" data-owner="d4b48e3d-1a09-441b-8706-f6aab26f2c65"
     data-location-context="header"
     data-fetch-url="https://bitbucket.org/amirski_/labdemo.git"
     data-push-url="https://bitbucket.org/amirski_/labdemo.git"
     
     
     
     >
  <div class="aui-buttons">
    
    <button class="aui-button aui-dropdown2-trigger protocol-trigger"
            data-command-prefix="git clone"
            data-primary-https="https://bitbucket.org/amirski_/labdemo.git"
            data-primary-ssh="git@bitbucket.org:amirski_/labdemo.git"
            aria-controls="protocols-list-header">
      <span class="dropdown-text">HTTPS</span>
    </button>
    <aui-dropdown-menu id="protocols-list-header" data-aui-alignment="bottom left">
      <aui-section id="protocols-list-section" class="aui-list-truncate">
        <aui-item-radio class="item-link https" checked>HTTPS</aui-item-radio>
        <aui-item-radio class="item-link ssh">SSH</aui-item-radio>
      </aui-section>
    </aui-dropdown-menu>
    <input type="text" readonly="readonly" class="clone-url-input"
           value="git clone https://bitbucket.org/amirski_/labdemo.git">
  </div>
  
</div>

  <div class="learn-more">
    <p>Need help cloning? Learn how to
         <a href="https://confluence.atlassian.com/x/4whODQ" target="_blank">clone a repository</a>.
    </p>
  </div>
  
  <div class="sourcetree-callout clone-in-sourcetree"
  data-module="components/clone/clone-in-sourcetree"
  data-https-url="https://bitbucket.org/amirski_/labdemo.git"
  data-ssh-url="ssh://git@bitbucket.org/amirski_/labdemo.git">

  <div>
    <button class="aui-button aui-button-primary">
      
        Clone in SourceTree
      
    </button>
  </div>

  <p class="windows-text">
    
      <a href="http://www.sourcetreeapp.com/?utm_source=internal&amp;utm_medium=link&amp;utm_campaign=clone_repo_win" target="_blank">Atlassian SourceTree</a>
      is a free Git and Mercurial client for Windows.
    
  </p>
  <p class="mac-text">
    
      <a href="http://www.sourcetreeapp.com/?utm_source=internal&amp;utm_medium=link&amp;utm_campaign=clone_repo_mac" target="_blank">Atlassian SourceTree</a>
      is a free Git and Mercurial client for Mac.
    
  </p>
</div>
</div>
</div>
  

        
  <div class="aui-page-panel ">
    
  
  
    <div class="aui-page-panel-inner">
      <div id="repo-content" class="aui-page-panel-content"
          data-module="repo/index"
          
          >
        
          
            <ol class="aui-nav aui-nav-breadcrumbs">
              <li>
  <a href="/amirski_/">Amir</a>
</li>

<li>
  <a href="/amirski_/labdemo">labdemo</a>
</li>
              
            </ol>
          
          <div class="aui-group repo-page-header">
            <div class="aui-item section-title">
              <h1>Source</h1>
            </div>
            <div class="aui-item page-actions">
              
            </div>
          </div>
        
        
  <div id="source-container" class="maskable" data-module="repo/source/index">
    



<header id="source-path">
  
    <div class="labels labels-csv">
      <div class="aui-buttons">
        <button data-branches-tags-url="/api/1.0/repositories/amirski_/labdemo/branches-tags"
                data-module="components/branch-dialog"
                class="aui-button branch-dialog-trigger" title="master">
          
            
              <span class="aui-icon aui-icon-small aui-iconfont-devtools-branch">Branch</span>
            
            <span class="name">master</span>
          
          <span class="aui-icon-dropdown"></span>
        </button>
        <button class="aui-button" id="checkout-branch-button"
                title="Check out this branch">
          <span class="aui-icon aui-icon-small aui-iconfont-devtools-clone">Check out branch</span>
          <span class="aui-icon-dropdown"></span>
        </button>
      </div>
      
    <script id="branch-checkout-template" type="text/html">
      

<div id="checkout-branch-contents">
  <div class="command-line">
    <p>
      Check out this branch on your local machine to begin working on it.
    </p>
    <input type="text" class="checkout-command" readonly="readonly"
        
           value="git fetch && git checkout [[branchName]]"
        
        >
  </div>
  
    <div class="sourcetree-callout clone-in-sourcetree"
  data-module="components/clone/clone-in-sourcetree"
  data-https-url="https://bitbucket.org/amirski_/labdemo.git"
  data-ssh-url="ssh://git@bitbucket.org/amirski_/labdemo.git">

  <div>
    <button class="aui-button aui-button-primary">
      
        Check out in SourceTree
      
    </button>
  </div>

  <p class="windows-text">
    
      <a href="http://www.sourcetreeapp.com/?utm_source=internal&amp;utm_medium=link&amp;utm_campaign=clone_repo_win" target="_blank">Atlassian SourceTree</a>
      is a free Git and Mercurial client for Windows.
    
  </p>
  <p class="mac-text">
    
      <a href="http://www.sourcetreeapp.com/?utm_source=internal&amp;utm_medium=link&amp;utm_campaign=clone_repo_mac" target="_blank">Atlassian SourceTree</a>
      is a free Git and Mercurial client for Mac.
    
  </p>
</div>
  
</div>

    </script>
  
    </div>
  
  
    <div class="secondary-actions">
      <div class="aui-buttons">
        
          <a href="/amirski_/labdemo/src/cc095f37210f/labdemo/static/js/typeahead.bundle.js?at=master"
            class="aui-button pjax-trigger" aria-pressed="true">
            Source
          </a>
          <a href="/amirski_/labdemo/diff/labdemo/static/js/typeahead.bundle.js?diff2=cc095f37210f&at=master"
            class="aui-button pjax-trigger"
            title="Diff to previous change">
            Diff
          </a>
          <a href="/amirski_/labdemo/history-node/cc095f37210f/labdemo/static/js/typeahead.bundle.js?at=master"
            class="aui-button pjax-trigger">
            History
          </a>
        
      </div>
    </div>
  
  <h1>
    
      
        <a href="/amirski_/labdemo/src/cc095f37210f?at=master"
          class="pjax-trigger root" title="amirski_/labdemo at cc095f37210f">labdemo</a> /
      
      
        
          
            <a href="/amirski_/labdemo/src/cc095f37210f/labdemo/?at=master"
              class="pjax-trigger directory-name">labdemo</a> /
          
        
      
        
          
            <a href="/amirski_/labdemo/src/cc095f37210f/labdemo/static/?at=master"
              class="pjax-trigger directory-name">static</a> /
          
        
      
        
          
            <a href="/amirski_/labdemo/src/cc095f37210f/labdemo/static/js/?at=master"
              class="pjax-trigger directory-name">js</a> /
          
        
      
        
          
            <span class="file-name">typeahead.bundle.js</span>
          
        
      
    
  </h1>
  
    
    
  
  <div class="clearfix"></div>
</header>


  
    
  

  <div id="editor-container" class="maskable"
       data-module="repo/source/editor"
       data-owner="amirski_"
       data-slug="labdemo"
       data-is-writer="false"
       data-has-push-access="true"
       data-hash="cc095f37210ff04106b3333cf7185a86f6c8f08d"
       data-branch="master"
       data-path="labdemo/static/js/typeahead.bundle.js"
       data-source-url="/api/internal/repositories/amirski_/labdemo/src/cc095f37210ff04106b3333cf7185a86f6c8f08d/labdemo/static/js/typeahead.bundle.js">
    <div id="source-view" class="file-source-container" data-module="repo/source/view-file" data-is-lfs="false">
      <div class="toolbar">
        <div class="primary">
          <div class="aui-buttons">
            
              <button id="file-history-trigger" class="aui-button aui-button-light changeset-info"
                      data-changeset="cc095f37210ff04106b3333cf7185a86f6c8f08d"
                      data-path="labdemo/static/js/typeahead.bundle.js"
                      data-current="cc095f37210ff04106b3333cf7185a86f6c8f08d">
                 

  <div class="aui-avatar aui-avatar-xsmall">
    <div class="aui-avatar-inner">
      <img src="https://d301sr5gafysq2.cloudfront.net/3260c91ef192/img/default_avatar/user_blue.svg">
    </div>
  </div>
  <span class="changeset-hash">cc095f3</span>
  <time datetime="2016-11-10T08:06:41+00:00" class="timestamp"></time>
  <span class="aui-icon-dropdown"></span>

              </button>
            
          </div>
          
          <a href="/amirski_/labdemo/full-commit/cc095f37210f/labdemo/static/js/typeahead.bundle.js" id="full-commit-link"
             title="View full commit cc095f3">Full commit</a>
        </div>
        <div class="secondary">
          
          <div class="aui-buttons">
            
              <a href="/amirski_/labdemo/annotate/cc095f37210ff04106b3333cf7185a86f6c8f08d/labdemo/static/js/typeahead.bundle.js?at=master"
                 class="aui-button aui-button-light pjax-trigger">Blame</a>
              
                
                <a data-embed-url="https://bitbucket.org/amirski_/labdemo/src/cc095f37210ff04106b3333cf7185a86f6c8f08d/labdemo/static/js/typeahead.bundle.js?embed=t" class="aui-button aui-button-light js-embed-link">
                  Embed
                </a>
              
            
            <a href="/amirski_/labdemo/raw/cc095f37210ff04106b3333cf7185a86f6c8f08d/labdemo/static/js/typeahead.bundle.js" class="aui-button aui-button-light">Raw</a>
          </div>
          
            <button id="file-edit-button" class="edit-button aui-button aui-button-light" disabled="disabled" aria-disabled="true">
              Edit
              <span class="edit-button-overlay" title="Log in to edit this file"></span>
            </button>
          
        </div>

        <div id="fileview-dropdown"
            class="aui-dropdown2 aui-style-default"
            data-fileview-container="#fileview-container"
            
            
            data-fileview-button="#fileview-trigger"
            data-module="connect/fileview">
          <div class="aui-dropdown2-section">
            <ul>
              <li>
                <a class="aui-dropdown2-radio aui-dropdown2-checked"
                    data-fileview-id="-1"
                    data-fileview-loaded="true"
                    data-fileview-target="#fileview-original"
                    data-fileview-connection-key=""
                    data-fileview-module-key="file-view-default">
                  Default File Viewer
                </a>
              </li>
              
            </ul>
          </div>
        </div>

        <div class="clearfix"></div>
      </div>
      <div id="fileview-container">
        <div id="fileview-original"
            class="fileview"
            data-module="repo/source/highlight-lines"
            data-fileview-loaded="true">
          


  
    <div class="file-source">
      <table class="codehilite highlighttable"><tr><td class="linenos"><div class="linenodiv"><pre><a href="#typeahead.bundle.js-1">   1</a>
<a href="#typeahead.bundle.js-2">   2</a>
<a href="#typeahead.bundle.js-3">   3</a>
<a href="#typeahead.bundle.js-4">   4</a>
<a href="#typeahead.bundle.js-5">   5</a>
<a href="#typeahead.bundle.js-6">   6</a>
<a href="#typeahead.bundle.js-7">   7</a>
<a href="#typeahead.bundle.js-8">   8</a>
<a href="#typeahead.bundle.js-9">   9</a>
<a href="#typeahead.bundle.js-10">  10</a>
<a href="#typeahead.bundle.js-11">  11</a>
<a href="#typeahead.bundle.js-12">  12</a>
<a href="#typeahead.bundle.js-13">  13</a>
<a href="#typeahead.bundle.js-14">  14</a>
<a href="#typeahead.bundle.js-15">  15</a>
<a href="#typeahead.bundle.js-16">  16</a>
<a href="#typeahead.bundle.js-17">  17</a>
<a href="#typeahead.bundle.js-18">  18</a>
<a href="#typeahead.bundle.js-19">  19</a>
<a href="#typeahead.bundle.js-20">  20</a>
<a href="#typeahead.bundle.js-21">  21</a>
<a href="#typeahead.bundle.js-22">  22</a>
<a href="#typeahead.bundle.js-23">  23</a>
<a href="#typeahead.bundle.js-24">  24</a>
<a href="#typeahead.bundle.js-25">  25</a>
<a href="#typeahead.bundle.js-26">  26</a>
<a href="#typeahead.bundle.js-27">  27</a>
<a href="#typeahead.bundle.js-28">  28</a>
<a href="#typeahead.bundle.js-29">  29</a>
<a href="#typeahead.bundle.js-30">  30</a>
<a href="#typeahead.bundle.js-31">  31</a>
<a href="#typeahead.bundle.js-32">  32</a>
<a href="#typeahead.bundle.js-33">  33</a>
<a href="#typeahead.bundle.js-34">  34</a>
<a href="#typeahead.bundle.js-35">  35</a>
<a href="#typeahead.bundle.js-36">  36</a>
<a href="#typeahead.bundle.js-37">  37</a>
<a href="#typeahead.bundle.js-38">  38</a>
<a href="#typeahead.bundle.js-39">  39</a>
<a href="#typeahead.bundle.js-40">  40</a>
<a href="#typeahead.bundle.js-41">  41</a>
<a href="#typeahead.bundle.js-42">  42</a>
<a href="#typeahead.bundle.js-43">  43</a>
<a href="#typeahead.bundle.js-44">  44</a>
<a href="#typeahead.bundle.js-45">  45</a>
<a href="#typeahead.bundle.js-46">  46</a>
<a href="#typeahead.bundle.js-47">  47</a>
<a href="#typeahead.bundle.js-48">  48</a>
<a href="#typeahead.bundle.js-49">  49</a>
<a href="#typeahead.bundle.js-50">  50</a>
<a href="#typeahead.bundle.js-51">  51</a>
<a href="#typeahead.bundle.js-52">  52</a>
<a href="#typeahead.bundle.js-53">  53</a>
<a href="#typeahead.bundle.js-54">  54</a>
<a href="#typeahead.bundle.js-55">  55</a>
<a href="#typeahead.bundle.js-56">  56</a>
<a href="#typeahead.bundle.js-57">  57</a>
<a href="#typeahead.bundle.js-58">  58</a>
<a href="#typeahead.bundle.js-59">  59</a>
<a href="#typeahead.bundle.js-60">  60</a>
<a href="#typeahead.bundle.js-61">  61</a>
<a href="#typeahead.bundle.js-62">  62</a>
<a href="#typeahead.bundle.js-63">  63</a>
<a href="#typeahead.bundle.js-64">  64</a>
<a href="#typeahead.bundle.js-65">  65</a>
<a href="#typeahead.bundle.js-66">  66</a>
<a href="#typeahead.bundle.js-67">  67</a>
<a href="#typeahead.bundle.js-68">  68</a>
<a href="#typeahead.bundle.js-69">  69</a>
<a href="#typeahead.bundle.js-70">  70</a>
<a href="#typeahead.bundle.js-71">  71</a>
<a href="#typeahead.bundle.js-72">  72</a>
<a href="#typeahead.bundle.js-73">  73</a>
<a href="#typeahead.bundle.js-74">  74</a>
<a href="#typeahead.bundle.js-75">  75</a>
<a href="#typeahead.bundle.js-76">  76</a>
<a href="#typeahead.bundle.js-77">  77</a>
<a href="#typeahead.bundle.js-78">  78</a>
<a href="#typeahead.bundle.js-79">  79</a>
<a href="#typeahead.bundle.js-80">  80</a>
<a href="#typeahead.bundle.js-81">  81</a>
<a href="#typeahead.bundle.js-82">  82</a>
<a href="#typeahead.bundle.js-83">  83</a>
<a href="#typeahead.bundle.js-84">  84</a>
<a href="#typeahead.bundle.js-85">  85</a>
<a href="#typeahead.bundle.js-86">  86</a>
<a href="#typeahead.bundle.js-87">  87</a>
<a href="#typeahead.bundle.js-88">  88</a>
<a href="#typeahead.bundle.js-89">  89</a>
<a href="#typeahead.bundle.js-90">  90</a>
<a href="#typeahead.bundle.js-91">  91</a>
<a href="#typeahead.bundle.js-92">  92</a>
<a href="#typeahead.bundle.js-93">  93</a>
<a href="#typeahead.bundle.js-94">  94</a>
<a href="#typeahead.bundle.js-95">  95</a>
<a href="#typeahead.bundle.js-96">  96</a>
<a href="#typeahead.bundle.js-97">  97</a>
<a href="#typeahead.bundle.js-98">  98</a>
<a href="#typeahead.bundle.js-99">  99</a>
<a href="#typeahead.bundle.js-100"> 100</a>
<a href="#typeahead.bundle.js-101"> 101</a>
<a href="#typeahead.bundle.js-102"> 102</a>
<a href="#typeahead.bundle.js-103"> 103</a>
<a href="#typeahead.bundle.js-104"> 104</a>
<a href="#typeahead.bundle.js-105"> 105</a>
<a href="#typeahead.bundle.js-106"> 106</a>
<a href="#typeahead.bundle.js-107"> 107</a>
<a href="#typeahead.bundle.js-108"> 108</a>
<a href="#typeahead.bundle.js-109"> 109</a>
<a href="#typeahead.bundle.js-110"> 110</a>
<a href="#typeahead.bundle.js-111"> 111</a>
<a href="#typeahead.bundle.js-112"> 112</a>
<a href="#typeahead.bundle.js-113"> 113</a>
<a href="#typeahead.bundle.js-114"> 114</a>
<a href="#typeahead.bundle.js-115"> 115</a>
<a href="#typeahead.bundle.js-116"> 116</a>
<a href="#typeahead.bundle.js-117"> 117</a>
<a href="#typeahead.bundle.js-118"> 118</a>
<a href="#typeahead.bundle.js-119"> 119</a>
<a href="#typeahead.bundle.js-120"> 120</a>
<a href="#typeahead.bundle.js-121"> 121</a>
<a href="#typeahead.bundle.js-122"> 122</a>
<a href="#typeahead.bundle.js-123"> 123</a>
<a href="#typeahead.bundle.js-124"> 124</a>
<a href="#typeahead.bundle.js-125"> 125</a>
<a href="#typeahead.bundle.js-126"> 126</a>
<a href="#typeahead.bundle.js-127"> 127</a>
<a href="#typeahead.bundle.js-128"> 128</a>
<a href="#typeahead.bundle.js-129"> 129</a>
<a href="#typeahead.bundle.js-130"> 130</a>
<a href="#typeahead.bundle.js-131"> 131</a>
<a href="#typeahead.bundle.js-132"> 132</a>
<a href="#typeahead.bundle.js-133"> 133</a>
<a href="#typeahead.bundle.js-134"> 134</a>
<a href="#typeahead.bundle.js-135"> 135</a>
<a href="#typeahead.bundle.js-136"> 136</a>
<a href="#typeahead.bundle.js-137"> 137</a>
<a href="#typeahead.bundle.js-138"> 138</a>
<a href="#typeahead.bundle.js-139"> 139</a>
<a href="#typeahead.bundle.js-140"> 140</a>
<a href="#typeahead.bundle.js-141"> 141</a>
<a href="#typeahead.bundle.js-142"> 142</a>
<a href="#typeahead.bundle.js-143"> 143</a>
<a href="#typeahead.bundle.js-144"> 144</a>
<a href="#typeahead.bundle.js-145"> 145</a>
<a href="#typeahead.bundle.js-146"> 146</a>
<a href="#typeahead.bundle.js-147"> 147</a>
<a href="#typeahead.bundle.js-148"> 148</a>
<a href="#typeahead.bundle.js-149"> 149</a>
<a href="#typeahead.bundle.js-150"> 150</a>
<a href="#typeahead.bundle.js-151"> 151</a>
<a href="#typeahead.bundle.js-152"> 152</a>
<a href="#typeahead.bundle.js-153"> 153</a>
<a href="#typeahead.bundle.js-154"> 154</a>
<a href="#typeahead.bundle.js-155"> 155</a>
<a href="#typeahead.bundle.js-156"> 156</a>
<a href="#typeahead.bundle.js-157"> 157</a>
<a href="#typeahead.bundle.js-158"> 158</a>
<a href="#typeahead.bundle.js-159"> 159</a>
<a href="#typeahead.bundle.js-160"> 160</a>
<a href="#typeahead.bundle.js-161"> 161</a>
<a href="#typeahead.bundle.js-162"> 162</a>
<a href="#typeahead.bundle.js-163"> 163</a>
<a href="#typeahead.bundle.js-164"> 164</a>
<a href="#typeahead.bundle.js-165"> 165</a>
<a href="#typeahead.bundle.js-166"> 166</a>
<a href="#typeahead.bundle.js-167"> 167</a>
<a href="#typeahead.bundle.js-168"> 168</a>
<a href="#typeahead.bundle.js-169"> 169</a>
<a href="#typeahead.bundle.js-170"> 170</a>
<a href="#typeahead.bundle.js-171"> 171</a>
<a href="#typeahead.bundle.js-172"> 172</a>
<a href="#typeahead.bundle.js-173"> 173</a>
<a href="#typeahead.bundle.js-174"> 174</a>
<a href="#typeahead.bundle.js-175"> 175</a>
<a href="#typeahead.bundle.js-176"> 176</a>
<a href="#typeahead.bundle.js-177"> 177</a>
<a href="#typeahead.bundle.js-178"> 178</a>
<a href="#typeahead.bundle.js-179"> 179</a>
<a href="#typeahead.bundle.js-180"> 180</a>
<a href="#typeahead.bundle.js-181"> 181</a>
<a href="#typeahead.bundle.js-182"> 182</a>
<a href="#typeahead.bundle.js-183"> 183</a>
<a href="#typeahead.bundle.js-184"> 184</a>
<a href="#typeahead.bundle.js-185"> 185</a>
<a href="#typeahead.bundle.js-186"> 186</a>
<a href="#typeahead.bundle.js-187"> 187</a>
<a href="#typeahead.bundle.js-188"> 188</a>
<a href="#typeahead.bundle.js-189"> 189</a>
<a href="#typeahead.bundle.js-190"> 190</a>
<a href="#typeahead.bundle.js-191"> 191</a>
<a href="#typeahead.bundle.js-192"> 192</a>
<a href="#typeahead.bundle.js-193"> 193</a>
<a href="#typeahead.bundle.js-194"> 194</a>
<a href="#typeahead.bundle.js-195"> 195</a>
<a href="#typeahead.bundle.js-196"> 196</a>
<a href="#typeahead.bundle.js-197"> 197</a>
<a href="#typeahead.bundle.js-198"> 198</a>
<a href="#typeahead.bundle.js-199"> 199</a>
<a href="#typeahead.bundle.js-200"> 200</a>
<a href="#typeahead.bundle.js-201"> 201</a>
<a href="#typeahead.bundle.js-202"> 202</a>
<a href="#typeahead.bundle.js-203"> 203</a>
<a href="#typeahead.bundle.js-204"> 204</a>
<a href="#typeahead.bundle.js-205"> 205</a>
<a href="#typeahead.bundle.js-206"> 206</a>
<a href="#typeahead.bundle.js-207"> 207</a>
<a href="#typeahead.bundle.js-208"> 208</a>
<a href="#typeahead.bundle.js-209"> 209</a>
<a href="#typeahead.bundle.js-210"> 210</a>
<a href="#typeahead.bundle.js-211"> 211</a>
<a href="#typeahead.bundle.js-212"> 212</a>
<a href="#typeahead.bundle.js-213"> 213</a>
<a href="#typeahead.bundle.js-214"> 214</a>
<a href="#typeahead.bundle.js-215"> 215</a>
<a href="#typeahead.bundle.js-216"> 216</a>
<a href="#typeahead.bundle.js-217"> 217</a>
<a href="#typeahead.bundle.js-218"> 218</a>
<a href="#typeahead.bundle.js-219"> 219</a>
<a href="#typeahead.bundle.js-220"> 220</a>
<a href="#typeahead.bundle.js-221"> 221</a>
<a href="#typeahead.bundle.js-222"> 222</a>
<a href="#typeahead.bundle.js-223"> 223</a>
<a href="#typeahead.bundle.js-224"> 224</a>
<a href="#typeahead.bundle.js-225"> 225</a>
<a href="#typeahead.bundle.js-226"> 226</a>
<a href="#typeahead.bundle.js-227"> 227</a>
<a href="#typeahead.bundle.js-228"> 228</a>
<a href="#typeahead.bundle.js-229"> 229</a>
<a href="#typeahead.bundle.js-230"> 230</a>
<a href="#typeahead.bundle.js-231"> 231</a>
<a href="#typeahead.bundle.js-232"> 232</a>
<a href="#typeahead.bundle.js-233"> 233</a>
<a href="#typeahead.bundle.js-234"> 234</a>
<a href="#typeahead.bundle.js-235"> 235</a>
<a href="#typeahead.bundle.js-236"> 236</a>
<a href="#typeahead.bundle.js-237"> 237</a>
<a href="#typeahead.bundle.js-238"> 238</a>
<a href="#typeahead.bundle.js-239"> 239</a>
<a href="#typeahead.bundle.js-240"> 240</a>
<a href="#typeahead.bundle.js-241"> 241</a>
<a href="#typeahead.bundle.js-242"> 242</a>
<a href="#typeahead.bundle.js-243"> 243</a>
<a href="#typeahead.bundle.js-244"> 244</a>
<a href="#typeahead.bundle.js-245"> 245</a>
<a href="#typeahead.bundle.js-246"> 246</a>
<a href="#typeahead.bundle.js-247"> 247</a>
<a href="#typeahead.bundle.js-248"> 248</a>
<a href="#typeahead.bundle.js-249"> 249</a>
<a href="#typeahead.bundle.js-250"> 250</a>
<a href="#typeahead.bundle.js-251"> 251</a>
<a href="#typeahead.bundle.js-252"> 252</a>
<a href="#typeahead.bundle.js-253"> 253</a>
<a href="#typeahead.bundle.js-254"> 254</a>
<a href="#typeahead.bundle.js-255"> 255</a>
<a href="#typeahead.bundle.js-256"> 256</a>
<a href="#typeahead.bundle.js-257"> 257</a>
<a href="#typeahead.bundle.js-258"> 258</a>
<a href="#typeahead.bundle.js-259"> 259</a>
<a href="#typeahead.bundle.js-260"> 260</a>
<a href="#typeahead.bundle.js-261"> 261</a>
<a href="#typeahead.bundle.js-262"> 262</a>
<a href="#typeahead.bundle.js-263"> 263</a>
<a href="#typeahead.bundle.js-264"> 264</a>
<a href="#typeahead.bundle.js-265"> 265</a>
<a href="#typeahead.bundle.js-266"> 266</a>
<a href="#typeahead.bundle.js-267"> 267</a>
<a href="#typeahead.bundle.js-268"> 268</a>
<a href="#typeahead.bundle.js-269"> 269</a>
<a href="#typeahead.bundle.js-270"> 270</a>
<a href="#typeahead.bundle.js-271"> 271</a>
<a href="#typeahead.bundle.js-272"> 272</a>
<a href="#typeahead.bundle.js-273"> 273</a>
<a href="#typeahead.bundle.js-274"> 274</a>
<a href="#typeahead.bundle.js-275"> 275</a>
<a href="#typeahead.bundle.js-276"> 276</a>
<a href="#typeahead.bundle.js-277"> 277</a>
<a href="#typeahead.bundle.js-278"> 278</a>
<a href="#typeahead.bundle.js-279"> 279</a>
<a href="#typeahead.bundle.js-280"> 280</a>
<a href="#typeahead.bundle.js-281"> 281</a>
<a href="#typeahead.bundle.js-282"> 282</a>
<a href="#typeahead.bundle.js-283"> 283</a>
<a href="#typeahead.bundle.js-284"> 284</a>
<a href="#typeahead.bundle.js-285"> 285</a>
<a href="#typeahead.bundle.js-286"> 286</a>
<a href="#typeahead.bundle.js-287"> 287</a>
<a href="#typeahead.bundle.js-288"> 288</a>
<a href="#typeahead.bundle.js-289"> 289</a>
<a href="#typeahead.bundle.js-290"> 290</a>
<a href="#typeahead.bundle.js-291"> 291</a>
<a href="#typeahead.bundle.js-292"> 292</a>
<a href="#typeahead.bundle.js-293"> 293</a>
<a href="#typeahead.bundle.js-294"> 294</a>
<a href="#typeahead.bundle.js-295"> 295</a>
<a href="#typeahead.bundle.js-296"> 296</a>
<a href="#typeahead.bundle.js-297"> 297</a>
<a href="#typeahead.bundle.js-298"> 298</a>
<a href="#typeahead.bundle.js-299"> 299</a>
<a href="#typeahead.bundle.js-300"> 300</a>
<a href="#typeahead.bundle.js-301"> 301</a>
<a href="#typeahead.bundle.js-302"> 302</a>
<a href="#typeahead.bundle.js-303"> 303</a>
<a href="#typeahead.bundle.js-304"> 304</a>
<a href="#typeahead.bundle.js-305"> 305</a>
<a href="#typeahead.bundle.js-306"> 306</a>
<a href="#typeahead.bundle.js-307"> 307</a>
<a href="#typeahead.bundle.js-308"> 308</a>
<a href="#typeahead.bundle.js-309"> 309</a>
<a href="#typeahead.bundle.js-310"> 310</a>
<a href="#typeahead.bundle.js-311"> 311</a>
<a href="#typeahead.bundle.js-312"> 312</a>
<a href="#typeahead.bundle.js-313"> 313</a>
<a href="#typeahead.bundle.js-314"> 314</a>
<a href="#typeahead.bundle.js-315"> 315</a>
<a href="#typeahead.bundle.js-316"> 316</a>
<a href="#typeahead.bundle.js-317"> 317</a>
<a href="#typeahead.bundle.js-318"> 318</a>
<a href="#typeahead.bundle.js-319"> 319</a>
<a href="#typeahead.bundle.js-320"> 320</a>
<a href="#typeahead.bundle.js-321"> 321</a>
<a href="#typeahead.bundle.js-322"> 322</a>
<a href="#typeahead.bundle.js-323"> 323</a>
<a href="#typeahead.bundle.js-324"> 324</a>
<a href="#typeahead.bundle.js-325"> 325</a>
<a href="#typeahead.bundle.js-326"> 326</a>
<a href="#typeahead.bundle.js-327"> 327</a>
<a href="#typeahead.bundle.js-328"> 328</a>
<a href="#typeahead.bundle.js-329"> 329</a>
<a href="#typeahead.bundle.js-330"> 330</a>
<a href="#typeahead.bundle.js-331"> 331</a>
<a href="#typeahead.bundle.js-332"> 332</a>
<a href="#typeahead.bundle.js-333"> 333</a>
<a href="#typeahead.bundle.js-334"> 334</a>
<a href="#typeahead.bundle.js-335"> 335</a>
<a href="#typeahead.bundle.js-336"> 336</a>
<a href="#typeahead.bundle.js-337"> 337</a>
<a href="#typeahead.bundle.js-338"> 338</a>
<a href="#typeahead.bundle.js-339"> 339</a>
<a href="#typeahead.bundle.js-340"> 340</a>
<a href="#typeahead.bundle.js-341"> 341</a>
<a href="#typeahead.bundle.js-342"> 342</a>
<a href="#typeahead.bundle.js-343"> 343</a>
<a href="#typeahead.bundle.js-344"> 344</a>
<a href="#typeahead.bundle.js-345"> 345</a>
<a href="#typeahead.bundle.js-346"> 346</a>
<a href="#typeahead.bundle.js-347"> 347</a>
<a href="#typeahead.bundle.js-348"> 348</a>
<a href="#typeahead.bundle.js-349"> 349</a>
<a href="#typeahead.bundle.js-350"> 350</a>
<a href="#typeahead.bundle.js-351"> 351</a>
<a href="#typeahead.bundle.js-352"> 352</a>
<a href="#typeahead.bundle.js-353"> 353</a>
<a href="#typeahead.bundle.js-354"> 354</a>
<a href="#typeahead.bundle.js-355"> 355</a>
<a href="#typeahead.bundle.js-356"> 356</a>
<a href="#typeahead.bundle.js-357"> 357</a>
<a href="#typeahead.bundle.js-358"> 358</a>
<a href="#typeahead.bundle.js-359"> 359</a>
<a href="#typeahead.bundle.js-360"> 360</a>
<a href="#typeahead.bundle.js-361"> 361</a>
<a href="#typeahead.bundle.js-362"> 362</a>
<a href="#typeahead.bundle.js-363"> 363</a>
<a href="#typeahead.bundle.js-364"> 364</a>
<a href="#typeahead.bundle.js-365"> 365</a>
<a href="#typeahead.bundle.js-366"> 366</a>
<a href="#typeahead.bundle.js-367"> 367</a>
<a href="#typeahead.bundle.js-368"> 368</a>
<a href="#typeahead.bundle.js-369"> 369</a>
<a href="#typeahead.bundle.js-370"> 370</a>
<a href="#typeahead.bundle.js-371"> 371</a>
<a href="#typeahead.bundle.js-372"> 372</a>
<a href="#typeahead.bundle.js-373"> 373</a>
<a href="#typeahead.bundle.js-374"> 374</a>
<a href="#typeahead.bundle.js-375"> 375</a>
<a href="#typeahead.bundle.js-376"> 376</a>
<a href="#typeahead.bundle.js-377"> 377</a>
<a href="#typeahead.bundle.js-378"> 378</a>
<a href="#typeahead.bundle.js-379"> 379</a>
<a href="#typeahead.bundle.js-380"> 380</a>
<a href="#typeahead.bundle.js-381"> 381</a>
<a href="#typeahead.bundle.js-382"> 382</a>
<a href="#typeahead.bundle.js-383"> 383</a>
<a href="#typeahead.bundle.js-384"> 384</a>
<a href="#typeahead.bundle.js-385"> 385</a>
<a href="#typeahead.bundle.js-386"> 386</a>
<a href="#typeahead.bundle.js-387"> 387</a>
<a href="#typeahead.bundle.js-388"> 388</a>
<a href="#typeahead.bundle.js-389"> 389</a>
<a href="#typeahead.bundle.js-390"> 390</a>
<a href="#typeahead.bundle.js-391"> 391</a>
<a href="#typeahead.bundle.js-392"> 392</a>
<a href="#typeahead.bundle.js-393"> 393</a>
<a href="#typeahead.bundle.js-394"> 394</a>
<a href="#typeahead.bundle.js-395"> 395</a>
<a href="#typeahead.bundle.js-396"> 396</a>
<a href="#typeahead.bundle.js-397"> 397</a>
<a href="#typeahead.bundle.js-398"> 398</a>
<a href="#typeahead.bundle.js-399"> 399</a>
<a href="#typeahead.bundle.js-400"> 400</a>
<a href="#typeahead.bundle.js-401"> 401</a>
<a href="#typeahead.bundle.js-402"> 402</a>
<a href="#typeahead.bundle.js-403"> 403</a>
<a href="#typeahead.bundle.js-404"> 404</a>
<a href="#typeahead.bundle.js-405"> 405</a>
<a href="#typeahead.bundle.js-406"> 406</a>
<a href="#typeahead.bundle.js-407"> 407</a>
<a href="#typeahead.bundle.js-408"> 408</a>
<a href="#typeahead.bundle.js-409"> 409</a>
<a href="#typeahead.bundle.js-410"> 410</a>
<a href="#typeahead.bundle.js-411"> 411</a>
<a href="#typeahead.bundle.js-412"> 412</a>
<a href="#typeahead.bundle.js-413"> 413</a>
<a href="#typeahead.bundle.js-414"> 414</a>
<a href="#typeahead.bundle.js-415"> 415</a>
<a href="#typeahead.bundle.js-416"> 416</a>
<a href="#typeahead.bundle.js-417"> 417</a>
<a href="#typeahead.bundle.js-418"> 418</a>
<a href="#typeahead.bundle.js-419"> 419</a>
<a href="#typeahead.bundle.js-420"> 420</a>
<a href="#typeahead.bundle.js-421"> 421</a>
<a href="#typeahead.bundle.js-422"> 422</a>
<a href="#typeahead.bundle.js-423"> 423</a>
<a href="#typeahead.bundle.js-424"> 424</a>
<a href="#typeahead.bundle.js-425"> 425</a>
<a href="#typeahead.bundle.js-426"> 426</a>
<a href="#typeahead.bundle.js-427"> 427</a>
<a href="#typeahead.bundle.js-428"> 428</a>
<a href="#typeahead.bundle.js-429"> 429</a>
<a href="#typeahead.bundle.js-430"> 430</a>
<a href="#typeahead.bundle.js-431"> 431</a>
<a href="#typeahead.bundle.js-432"> 432</a>
<a href="#typeahead.bundle.js-433"> 433</a>
<a href="#typeahead.bundle.js-434"> 434</a>
<a href="#typeahead.bundle.js-435"> 435</a>
<a href="#typeahead.bundle.js-436"> 436</a>
<a href="#typeahead.bundle.js-437"> 437</a>
<a href="#typeahead.bundle.js-438"> 438</a>
<a href="#typeahead.bundle.js-439"> 439</a>
<a href="#typeahead.bundle.js-440"> 440</a>
<a href="#typeahead.bundle.js-441"> 441</a>
<a href="#typeahead.bundle.js-442"> 442</a>
<a href="#typeahead.bundle.js-443"> 443</a>
<a href="#typeahead.bundle.js-444"> 444</a>
<a href="#typeahead.bundle.js-445"> 445</a>
<a href="#typeahead.bundle.js-446"> 446</a>
<a href="#typeahead.bundle.js-447"> 447</a>
<a href="#typeahead.bundle.js-448"> 448</a>
<a href="#typeahead.bundle.js-449"> 449</a>
<a href="#typeahead.bundle.js-450"> 450</a>
<a href="#typeahead.bundle.js-451"> 451</a>
<a href="#typeahead.bundle.js-452"> 452</a>
<a href="#typeahead.bundle.js-453"> 453</a>
<a href="#typeahead.bundle.js-454"> 454</a>
<a href="#typeahead.bundle.js-455"> 455</a>
<a href="#typeahead.bundle.js-456"> 456</a>
<a href="#typeahead.bundle.js-457"> 457</a>
<a href="#typeahead.bundle.js-458"> 458</a>
<a href="#typeahead.bundle.js-459"> 459</a>
<a href="#typeahead.bundle.js-460"> 460</a>
<a href="#typeahead.bundle.js-461"> 461</a>
<a href="#typeahead.bundle.js-462"> 462</a>
<a href="#typeahead.bundle.js-463"> 463</a>
<a href="#typeahead.bundle.js-464"> 464</a>
<a href="#typeahead.bundle.js-465"> 465</a>
<a href="#typeahead.bundle.js-466"> 466</a>
<a href="#typeahead.bundle.js-467"> 467</a>
<a href="#typeahead.bundle.js-468"> 468</a>
<a href="#typeahead.bundle.js-469"> 469</a>
<a href="#typeahead.bundle.js-470"> 470</a>
<a href="#typeahead.bundle.js-471"> 471</a>
<a href="#typeahead.bundle.js-472"> 472</a>
<a href="#typeahead.bundle.js-473"> 473</a>
<a href="#typeahead.bundle.js-474"> 474</a>
<a href="#typeahead.bundle.js-475"> 475</a>
<a href="#typeahead.bundle.js-476"> 476</a>
<a href="#typeahead.bundle.js-477"> 477</a>
<a href="#typeahead.bundle.js-478"> 478</a>
<a href="#typeahead.bundle.js-479"> 479</a>
<a href="#typeahead.bundle.js-480"> 480</a>
<a href="#typeahead.bundle.js-481"> 481</a>
<a href="#typeahead.bundle.js-482"> 482</a>
<a href="#typeahead.bundle.js-483"> 483</a>
<a href="#typeahead.bundle.js-484"> 484</a>
<a href="#typeahead.bundle.js-485"> 485</a>
<a href="#typeahead.bundle.js-486"> 486</a>
<a href="#typeahead.bundle.js-487"> 487</a>
<a href="#typeahead.bundle.js-488"> 488</a>
<a href="#typeahead.bundle.js-489"> 489</a>
<a href="#typeahead.bundle.js-490"> 490</a>
<a href="#typeahead.bundle.js-491"> 491</a>
<a href="#typeahead.bundle.js-492"> 492</a>
<a href="#typeahead.bundle.js-493"> 493</a>
<a href="#typeahead.bundle.js-494"> 494</a>
<a href="#typeahead.bundle.js-495"> 495</a>
<a href="#typeahead.bundle.js-496"> 496</a>
<a href="#typeahead.bundle.js-497"> 497</a>
<a href="#typeahead.bundle.js-498"> 498</a>
<a href="#typeahead.bundle.js-499"> 499</a>
<a href="#typeahead.bundle.js-500"> 500</a>
<a href="#typeahead.bundle.js-501"> 501</a>
<a href="#typeahead.bundle.js-502"> 502</a>
<a href="#typeahead.bundle.js-503"> 503</a>
<a href="#typeahead.bundle.js-504"> 504</a>
<a href="#typeahead.bundle.js-505"> 505</a>
<a href="#typeahead.bundle.js-506"> 506</a>
<a href="#typeahead.bundle.js-507"> 507</a>
<a href="#typeahead.bundle.js-508"> 508</a>
<a href="#typeahead.bundle.js-509"> 509</a>
<a href="#typeahead.bundle.js-510"> 510</a>
<a href="#typeahead.bundle.js-511"> 511</a>
<a href="#typeahead.bundle.js-512"> 512</a>
<a href="#typeahead.bundle.js-513"> 513</a>
<a href="#typeahead.bundle.js-514"> 514</a>
<a href="#typeahead.bundle.js-515"> 515</a>
<a href="#typeahead.bundle.js-516"> 516</a>
<a href="#typeahead.bundle.js-517"> 517</a>
<a href="#typeahead.bundle.js-518"> 518</a>
<a href="#typeahead.bundle.js-519"> 519</a>
<a href="#typeahead.bundle.js-520"> 520</a>
<a href="#typeahead.bundle.js-521"> 521</a>
<a href="#typeahead.bundle.js-522"> 522</a>
<a href="#typeahead.bundle.js-523"> 523</a>
<a href="#typeahead.bundle.js-524"> 524</a>
<a href="#typeahead.bundle.js-525"> 525</a>
<a href="#typeahead.bundle.js-526"> 526</a>
<a href="#typeahead.bundle.js-527"> 527</a>
<a href="#typeahead.bundle.js-528"> 528</a>
<a href="#typeahead.bundle.js-529"> 529</a>
<a href="#typeahead.bundle.js-530"> 530</a>
<a href="#typeahead.bundle.js-531"> 531</a>
<a href="#typeahead.bundle.js-532"> 532</a>
<a href="#typeahead.bundle.js-533"> 533</a>
<a href="#typeahead.bundle.js-534"> 534</a>
<a href="#typeahead.bundle.js-535"> 535</a>
<a href="#typeahead.bundle.js-536"> 536</a>
<a href="#typeahead.bundle.js-537"> 537</a>
<a href="#typeahead.bundle.js-538"> 538</a>
<a href="#typeahead.bundle.js-539"> 539</a>
<a href="#typeahead.bundle.js-540"> 540</a>
<a href="#typeahead.bundle.js-541"> 541</a>
<a href="#typeahead.bundle.js-542"> 542</a>
<a href="#typeahead.bundle.js-543"> 543</a>
<a href="#typeahead.bundle.js-544"> 544</a>
<a href="#typeahead.bundle.js-545"> 545</a>
<a href="#typeahead.bundle.js-546"> 546</a>
<a href="#typeahead.bundle.js-547"> 547</a>
<a href="#typeahead.bundle.js-548"> 548</a>
<a href="#typeahead.bundle.js-549"> 549</a>
<a href="#typeahead.bundle.js-550"> 550</a>
<a href="#typeahead.bundle.js-551"> 551</a>
<a href="#typeahead.bundle.js-552"> 552</a>
<a href="#typeahead.bundle.js-553"> 553</a>
<a href="#typeahead.bundle.js-554"> 554</a>
<a href="#typeahead.bundle.js-555"> 555</a>
<a href="#typeahead.bundle.js-556"> 556</a>
<a href="#typeahead.bundle.js-557"> 557</a>
<a href="#typeahead.bundle.js-558"> 558</a>
<a href="#typeahead.bundle.js-559"> 559</a>
<a href="#typeahead.bundle.js-560"> 560</a>
<a href="#typeahead.bundle.js-561"> 561</a>
<a href="#typeahead.bundle.js-562"> 562</a>
<a href="#typeahead.bundle.js-563"> 563</a>
<a href="#typeahead.bundle.js-564"> 564</a>
<a href="#typeahead.bundle.js-565"> 565</a>
<a href="#typeahead.bundle.js-566"> 566</a>
<a href="#typeahead.bundle.js-567"> 567</a>
<a href="#typeahead.bundle.js-568"> 568</a>
<a href="#typeahead.bundle.js-569"> 569</a>
<a href="#typeahead.bundle.js-570"> 570</a>
<a href="#typeahead.bundle.js-571"> 571</a>
<a href="#typeahead.bundle.js-572"> 572</a>
<a href="#typeahead.bundle.js-573"> 573</a>
<a href="#typeahead.bundle.js-574"> 574</a>
<a href="#typeahead.bundle.js-575"> 575</a>
<a href="#typeahead.bundle.js-576"> 576</a>
<a href="#typeahead.bundle.js-577"> 577</a>
<a href="#typeahead.bundle.js-578"> 578</a>
<a href="#typeahead.bundle.js-579"> 579</a>
<a href="#typeahead.bundle.js-580"> 580</a>
<a href="#typeahead.bundle.js-581"> 581</a>
<a href="#typeahead.bundle.js-582"> 582</a>
<a href="#typeahead.bundle.js-583"> 583</a>
<a href="#typeahead.bundle.js-584"> 584</a>
<a href="#typeahead.bundle.js-585"> 585</a>
<a href="#typeahead.bundle.js-586"> 586</a>
<a href="#typeahead.bundle.js-587"> 587</a>
<a href="#typeahead.bundle.js-588"> 588</a>
<a href="#typeahead.bundle.js-589"> 589</a>
<a href="#typeahead.bundle.js-590"> 590</a>
<a href="#typeahead.bundle.js-591"> 591</a>
<a href="#typeahead.bundle.js-592"> 592</a>
<a href="#typeahead.bundle.js-593"> 593</a>
<a href="#typeahead.bundle.js-594"> 594</a>
<a href="#typeahead.bundle.js-595"> 595</a>
<a href="#typeahead.bundle.js-596"> 596</a>
<a href="#typeahead.bundle.js-597"> 597</a>
<a href="#typeahead.bundle.js-598"> 598</a>
<a href="#typeahead.bundle.js-599"> 599</a>
<a href="#typeahead.bundle.js-600"> 600</a>
<a href="#typeahead.bundle.js-601"> 601</a>
<a href="#typeahead.bundle.js-602"> 602</a>
<a href="#typeahead.bundle.js-603"> 603</a>
<a href="#typeahead.bundle.js-604"> 604</a>
<a href="#typeahead.bundle.js-605"> 605</a>
<a href="#typeahead.bundle.js-606"> 606</a>
<a href="#typeahead.bundle.js-607"> 607</a>
<a href="#typeahead.bundle.js-608"> 608</a>
<a href="#typeahead.bundle.js-609"> 609</a>
<a href="#typeahead.bundle.js-610"> 610</a>
<a href="#typeahead.bundle.js-611"> 611</a>
<a href="#typeahead.bundle.js-612"> 612</a>
<a href="#typeahead.bundle.js-613"> 613</a>
<a href="#typeahead.bundle.js-614"> 614</a>
<a href="#typeahead.bundle.js-615"> 615</a>
<a href="#typeahead.bundle.js-616"> 616</a>
<a href="#typeahead.bundle.js-617"> 617</a>
<a href="#typeahead.bundle.js-618"> 618</a>
<a href="#typeahead.bundle.js-619"> 619</a>
<a href="#typeahead.bundle.js-620"> 620</a>
<a href="#typeahead.bundle.js-621"> 621</a>
<a href="#typeahead.bundle.js-622"> 622</a>
<a href="#typeahead.bundle.js-623"> 623</a>
<a href="#typeahead.bundle.js-624"> 624</a>
<a href="#typeahead.bundle.js-625"> 625</a>
<a href="#typeahead.bundle.js-626"> 626</a>
<a href="#typeahead.bundle.js-627"> 627</a>
<a href="#typeahead.bundle.js-628"> 628</a>
<a href="#typeahead.bundle.js-629"> 629</a>
<a href="#typeahead.bundle.js-630"> 630</a>
<a href="#typeahead.bundle.js-631"> 631</a>
<a href="#typeahead.bundle.js-632"> 632</a>
<a href="#typeahead.bundle.js-633"> 633</a>
<a href="#typeahead.bundle.js-634"> 634</a>
<a href="#typeahead.bundle.js-635"> 635</a>
<a href="#typeahead.bundle.js-636"> 636</a>
<a href="#typeahead.bundle.js-637"> 637</a>
<a href="#typeahead.bundle.js-638"> 638</a>
<a href="#typeahead.bundle.js-639"> 639</a>
<a href="#typeahead.bundle.js-640"> 640</a>
<a href="#typeahead.bundle.js-641"> 641</a>
<a href="#typeahead.bundle.js-642"> 642</a>
<a href="#typeahead.bundle.js-643"> 643</a>
<a href="#typeahead.bundle.js-644"> 644</a>
<a href="#typeahead.bundle.js-645"> 645</a>
<a href="#typeahead.bundle.js-646"> 646</a>
<a href="#typeahead.bundle.js-647"> 647</a>
<a href="#typeahead.bundle.js-648"> 648</a>
<a href="#typeahead.bundle.js-649"> 649</a>
<a href="#typeahead.bundle.js-650"> 650</a>
<a href="#typeahead.bundle.js-651"> 651</a>
<a href="#typeahead.bundle.js-652"> 652</a>
<a href="#typeahead.bundle.js-653"> 653</a>
<a href="#typeahead.bundle.js-654"> 654</a>
<a href="#typeahead.bundle.js-655"> 655</a>
<a href="#typeahead.bundle.js-656"> 656</a>
<a href="#typeahead.bundle.js-657"> 657</a>
<a href="#typeahead.bundle.js-658"> 658</a>
<a href="#typeahead.bundle.js-659"> 659</a>
<a href="#typeahead.bundle.js-660"> 660</a>
<a href="#typeahead.bundle.js-661"> 661</a>
<a href="#typeahead.bundle.js-662"> 662</a>
<a href="#typeahead.bundle.js-663"> 663</a>
<a href="#typeahead.bundle.js-664"> 664</a>
<a href="#typeahead.bundle.js-665"> 665</a>
<a href="#typeahead.bundle.js-666"> 666</a>
<a href="#typeahead.bundle.js-667"> 667</a>
<a href="#typeahead.bundle.js-668"> 668</a>
<a href="#typeahead.bundle.js-669"> 669</a>
<a href="#typeahead.bundle.js-670"> 670</a>
<a href="#typeahead.bundle.js-671"> 671</a>
<a href="#typeahead.bundle.js-672"> 672</a>
<a href="#typeahead.bundle.js-673"> 673</a>
<a href="#typeahead.bundle.js-674"> 674</a>
<a href="#typeahead.bundle.js-675"> 675</a>
<a href="#typeahead.bundle.js-676"> 676</a>
<a href="#typeahead.bundle.js-677"> 677</a>
<a href="#typeahead.bundle.js-678"> 678</a>
<a href="#typeahead.bundle.js-679"> 679</a>
<a href="#typeahead.bundle.js-680"> 680</a>
<a href="#typeahead.bundle.js-681"> 681</a>
<a href="#typeahead.bundle.js-682"> 682</a>
<a href="#typeahead.bundle.js-683"> 683</a>
<a href="#typeahead.bundle.js-684"> 684</a>
<a href="#typeahead.bundle.js-685"> 685</a>
<a href="#typeahead.bundle.js-686"> 686</a>
<a href="#typeahead.bundle.js-687"> 687</a>
<a href="#typeahead.bundle.js-688"> 688</a>
<a href="#typeahead.bundle.js-689"> 689</a>
<a href="#typeahead.bundle.js-690"> 690</a>
<a href="#typeahead.bundle.js-691"> 691</a>
<a href="#typeahead.bundle.js-692"> 692</a>
<a href="#typeahead.bundle.js-693"> 693</a>
<a href="#typeahead.bundle.js-694"> 694</a>
<a href="#typeahead.bundle.js-695"> 695</a>
<a href="#typeahead.bundle.js-696"> 696</a>
<a href="#typeahead.bundle.js-697"> 697</a>
<a href="#typeahead.bundle.js-698"> 698</a>
<a href="#typeahead.bundle.js-699"> 699</a>
<a href="#typeahead.bundle.js-700"> 700</a>
<a href="#typeahead.bundle.js-701"> 701</a>
<a href="#typeahead.bundle.js-702"> 702</a>
<a href="#typeahead.bundle.js-703"> 703</a>
<a href="#typeahead.bundle.js-704"> 704</a>
<a href="#typeahead.bundle.js-705"> 705</a>
<a href="#typeahead.bundle.js-706"> 706</a>
<a href="#typeahead.bundle.js-707"> 707</a>
<a href="#typeahead.bundle.js-708"> 708</a>
<a href="#typeahead.bundle.js-709"> 709</a>
<a href="#typeahead.bundle.js-710"> 710</a>
<a href="#typeahead.bundle.js-711"> 711</a>
<a href="#typeahead.bundle.js-712"> 712</a>
<a href="#typeahead.bundle.js-713"> 713</a>
<a href="#typeahead.bundle.js-714"> 714</a>
<a href="#typeahead.bundle.js-715"> 715</a>
<a href="#typeahead.bundle.js-716"> 716</a>
<a href="#typeahead.bundle.js-717"> 717</a>
<a href="#typeahead.bundle.js-718"> 718</a>
<a href="#typeahead.bundle.js-719"> 719</a>
<a href="#typeahead.bundle.js-720"> 720</a>
<a href="#typeahead.bundle.js-721"> 721</a>
<a href="#typeahead.bundle.js-722"> 722</a>
<a href="#typeahead.bundle.js-723"> 723</a>
<a href="#typeahead.bundle.js-724"> 724</a>
<a href="#typeahead.bundle.js-725"> 725</a>
<a href="#typeahead.bundle.js-726"> 726</a>
<a href="#typeahead.bundle.js-727"> 727</a>
<a href="#typeahead.bundle.js-728"> 728</a>
<a href="#typeahead.bundle.js-729"> 729</a>
<a href="#typeahead.bundle.js-730"> 730</a>
<a href="#typeahead.bundle.js-731"> 731</a>
<a href="#typeahead.bundle.js-732"> 732</a>
<a href="#typeahead.bundle.js-733"> 733</a>
<a href="#typeahead.bundle.js-734"> 734</a>
<a href="#typeahead.bundle.js-735"> 735</a>
<a href="#typeahead.bundle.js-736"> 736</a>
<a href="#typeahead.bundle.js-737"> 737</a>
<a href="#typeahead.bundle.js-738"> 738</a>
<a href="#typeahead.bundle.js-739"> 739</a>
<a href="#typeahead.bundle.js-740"> 740</a>
<a href="#typeahead.bundle.js-741"> 741</a>
<a href="#typeahead.bundle.js-742"> 742</a>
<a href="#typeahead.bundle.js-743"> 743</a>
<a href="#typeahead.bundle.js-744"> 744</a>
<a href="#typeahead.bundle.js-745"> 745</a>
<a href="#typeahead.bundle.js-746"> 746</a>
<a href="#typeahead.bundle.js-747"> 747</a>
<a href="#typeahead.bundle.js-748"> 748</a>
<a href="#typeahead.bundle.js-749"> 749</a>
<a href="#typeahead.bundle.js-750"> 750</a>
<a href="#typeahead.bundle.js-751"> 751</a>
<a href="#typeahead.bundle.js-752"> 752</a>
<a href="#typeahead.bundle.js-753"> 753</a>
<a href="#typeahead.bundle.js-754"> 754</a>
<a href="#typeahead.bundle.js-755"> 755</a>
<a href="#typeahead.bundle.js-756"> 756</a>
<a href="#typeahead.bundle.js-757"> 757</a>
<a href="#typeahead.bundle.js-758"> 758</a>
<a href="#typeahead.bundle.js-759"> 759</a>
<a href="#typeahead.bundle.js-760"> 760</a>
<a href="#typeahead.bundle.js-761"> 761</a>
<a href="#typeahead.bundle.js-762"> 762</a>
<a href="#typeahead.bundle.js-763"> 763</a>
<a href="#typeahead.bundle.js-764"> 764</a>
<a href="#typeahead.bundle.js-765"> 765</a>
<a href="#typeahead.bundle.js-766"> 766</a>
<a href="#typeahead.bundle.js-767"> 767</a>
<a href="#typeahead.bundle.js-768"> 768</a>
<a href="#typeahead.bundle.js-769"> 769</a>
<a href="#typeahead.bundle.js-770"> 770</a>
<a href="#typeahead.bundle.js-771"> 771</a>
<a href="#typeahead.bundle.js-772"> 772</a>
<a href="#typeahead.bundle.js-773"> 773</a>
<a href="#typeahead.bundle.js-774"> 774</a>
<a href="#typeahead.bundle.js-775"> 775</a>
<a href="#typeahead.bundle.js-776"> 776</a>
<a href="#typeahead.bundle.js-777"> 777</a>
<a href="#typeahead.bundle.js-778"> 778</a>
<a href="#typeahead.bundle.js-779"> 779</a>
<a href="#typeahead.bundle.js-780"> 780</a>
<a href="#typeahead.bundle.js-781"> 781</a>
<a href="#typeahead.bundle.js-782"> 782</a>
<a href="#typeahead.bundle.js-783"> 783</a>
<a href="#typeahead.bundle.js-784"> 784</a>
<a href="#typeahead.bundle.js-785"> 785</a>
<a href="#typeahead.bundle.js-786"> 786</a>
<a href="#typeahead.bundle.js-787"> 787</a>
<a href="#typeahead.bundle.js-788"> 788</a>
<a href="#typeahead.bundle.js-789"> 789</a>
<a href="#typeahead.bundle.js-790"> 790</a>
<a href="#typeahead.bundle.js-791"> 791</a>
<a href="#typeahead.bundle.js-792"> 792</a>
<a href="#typeahead.bundle.js-793"> 793</a>
<a href="#typeahead.bundle.js-794"> 794</a>
<a href="#typeahead.bundle.js-795"> 795</a>
<a href="#typeahead.bundle.js-796"> 796</a>
<a href="#typeahead.bundle.js-797"> 797</a>
<a href="#typeahead.bundle.js-798"> 798</a>
<a href="#typeahead.bundle.js-799"> 799</a>
<a href="#typeahead.bundle.js-800"> 800</a>
<a href="#typeahead.bundle.js-801"> 801</a>
<a href="#typeahead.bundle.js-802"> 802</a>
<a href="#typeahead.bundle.js-803"> 803</a>
<a href="#typeahead.bundle.js-804"> 804</a>
<a href="#typeahead.bundle.js-805"> 805</a>
<a href="#typeahead.bundle.js-806"> 806</a>
<a href="#typeahead.bundle.js-807"> 807</a>
<a href="#typeahead.bundle.js-808"> 808</a>
<a href="#typeahead.bundle.js-809"> 809</a>
<a href="#typeahead.bundle.js-810"> 810</a>
<a href="#typeahead.bundle.js-811"> 811</a>
<a href="#typeahead.bundle.js-812"> 812</a>
<a href="#typeahead.bundle.js-813"> 813</a>
<a href="#typeahead.bundle.js-814"> 814</a>
<a href="#typeahead.bundle.js-815"> 815</a>
<a href="#typeahead.bundle.js-816"> 816</a>
<a href="#typeahead.bundle.js-817"> 817</a>
<a href="#typeahead.bundle.js-818"> 818</a>
<a href="#typeahead.bundle.js-819"> 819</a>
<a href="#typeahead.bundle.js-820"> 820</a>
<a href="#typeahead.bundle.js-821"> 821</a>
<a href="#typeahead.bundle.js-822"> 822</a>
<a href="#typeahead.bundle.js-823"> 823</a>
<a href="#typeahead.bundle.js-824"> 824</a>
<a href="#typeahead.bundle.js-825"> 825</a>
<a href="#typeahead.bundle.js-826"> 826</a>
<a href="#typeahead.bundle.js-827"> 827</a>
<a href="#typeahead.bundle.js-828"> 828</a>
<a href="#typeahead.bundle.js-829"> 829</a>
<a href="#typeahead.bundle.js-830"> 830</a>
<a href="#typeahead.bundle.js-831"> 831</a>
<a href="#typeahead.bundle.js-832"> 832</a>
<a href="#typeahead.bundle.js-833"> 833</a>
<a href="#typeahead.bundle.js-834"> 834</a>
<a href="#typeahead.bundle.js-835"> 835</a>
<a href="#typeahead.bundle.js-836"> 836</a>
<a href="#typeahead.bundle.js-837"> 837</a>
<a href="#typeahead.bundle.js-838"> 838</a>
<a href="#typeahead.bundle.js-839"> 839</a>
<a href="#typeahead.bundle.js-840"> 840</a>
<a href="#typeahead.bundle.js-841"> 841</a>
<a href="#typeahead.bundle.js-842"> 842</a>
<a href="#typeahead.bundle.js-843"> 843</a>
<a href="#typeahead.bundle.js-844"> 844</a>
<a href="#typeahead.bundle.js-845"> 845</a>
<a href="#typeahead.bundle.js-846"> 846</a>
<a href="#typeahead.bundle.js-847"> 847</a>
<a href="#typeahead.bundle.js-848"> 848</a>
<a href="#typeahead.bundle.js-849"> 849</a>
<a href="#typeahead.bundle.js-850"> 850</a>
<a href="#typeahead.bundle.js-851"> 851</a>
<a href="#typeahead.bundle.js-852"> 852</a>
<a href="#typeahead.bundle.js-853"> 853</a>
<a href="#typeahead.bundle.js-854"> 854</a>
<a href="#typeahead.bundle.js-855"> 855</a>
<a href="#typeahead.bundle.js-856"> 856</a>
<a href="#typeahead.bundle.js-857"> 857</a>
<a href="#typeahead.bundle.js-858"> 858</a>
<a href="#typeahead.bundle.js-859"> 859</a>
<a href="#typeahead.bundle.js-860"> 860</a>
<a href="#typeahead.bundle.js-861"> 861</a>
<a href="#typeahead.bundle.js-862"> 862</a>
<a href="#typeahead.bundle.js-863"> 863</a>
<a href="#typeahead.bundle.js-864"> 864</a>
<a href="#typeahead.bundle.js-865"> 865</a>
<a href="#typeahead.bundle.js-866"> 866</a>
<a href="#typeahead.bundle.js-867"> 867</a>
<a href="#typeahead.bundle.js-868"> 868</a>
<a href="#typeahead.bundle.js-869"> 869</a>
<a href="#typeahead.bundle.js-870"> 870</a>
<a href="#typeahead.bundle.js-871"> 871</a>
<a href="#typeahead.bundle.js-872"> 872</a>
<a href="#typeahead.bundle.js-873"> 873</a>
<a href="#typeahead.bundle.js-874"> 874</a>
<a href="#typeahead.bundle.js-875"> 875</a>
<a href="#typeahead.bundle.js-876"> 876</a>
<a href="#typeahead.bundle.js-877"> 877</a>
<a href="#typeahead.bundle.js-878"> 878</a>
<a href="#typeahead.bundle.js-879"> 879</a>
<a href="#typeahead.bundle.js-880"> 880</a>
<a href="#typeahead.bundle.js-881"> 881</a>
<a href="#typeahead.bundle.js-882"> 882</a>
<a href="#typeahead.bundle.js-883"> 883</a>
<a href="#typeahead.bundle.js-884"> 884</a>
<a href="#typeahead.bundle.js-885"> 885</a>
<a href="#typeahead.bundle.js-886"> 886</a>
<a href="#typeahead.bundle.js-887"> 887</a>
<a href="#typeahead.bundle.js-888"> 888</a>
<a href="#typeahead.bundle.js-889"> 889</a>
<a href="#typeahead.bundle.js-890"> 890</a>
<a href="#typeahead.bundle.js-891"> 891</a>
<a href="#typeahead.bundle.js-892"> 892</a>
<a href="#typeahead.bundle.js-893"> 893</a>
<a href="#typeahead.bundle.js-894"> 894</a>
<a href="#typeahead.bundle.js-895"> 895</a>
<a href="#typeahead.bundle.js-896"> 896</a>
<a href="#typeahead.bundle.js-897"> 897</a>
<a href="#typeahead.bundle.js-898"> 898</a>
<a href="#typeahead.bundle.js-899"> 899</a>
<a href="#typeahead.bundle.js-900"> 900</a>
<a href="#typeahead.bundle.js-901"> 901</a>
<a href="#typeahead.bundle.js-902"> 902</a>
<a href="#typeahead.bundle.js-903"> 903</a>
<a href="#typeahead.bundle.js-904"> 904</a>
<a href="#typeahead.bundle.js-905"> 905</a>
<a href="#typeahead.bundle.js-906"> 906</a>
<a href="#typeahead.bundle.js-907"> 907</a>
<a href="#typeahead.bundle.js-908"> 908</a>
<a href="#typeahead.bundle.js-909"> 909</a>
<a href="#typeahead.bundle.js-910"> 910</a>
<a href="#typeahead.bundle.js-911"> 911</a>
<a href="#typeahead.bundle.js-912"> 912</a>
<a href="#typeahead.bundle.js-913"> 913</a>
<a href="#typeahead.bundle.js-914"> 914</a>
<a href="#typeahead.bundle.js-915"> 915</a>
<a href="#typeahead.bundle.js-916"> 916</a>
<a href="#typeahead.bundle.js-917"> 917</a>
<a href="#typeahead.bundle.js-918"> 918</a>
<a href="#typeahead.bundle.js-919"> 919</a>
<a href="#typeahead.bundle.js-920"> 920</a>
<a href="#typeahead.bundle.js-921"> 921</a>
<a href="#typeahead.bundle.js-922"> 922</a>
<a href="#typeahead.bundle.js-923"> 923</a>
<a href="#typeahead.bundle.js-924"> 924</a>
<a href="#typeahead.bundle.js-925"> 925</a>
<a href="#typeahead.bundle.js-926"> 926</a>
<a href="#typeahead.bundle.js-927"> 927</a>
<a href="#typeahead.bundle.js-928"> 928</a>
<a href="#typeahead.bundle.js-929"> 929</a>
<a href="#typeahead.bundle.js-930"> 930</a>
<a href="#typeahead.bundle.js-931"> 931</a>
<a href="#typeahead.bundle.js-932"> 932</a>
<a href="#typeahead.bundle.js-933"> 933</a>
<a href="#typeahead.bundle.js-934"> 934</a>
<a href="#typeahead.bundle.js-935"> 935</a>
<a href="#typeahead.bundle.js-936"> 936</a>
<a href="#typeahead.bundle.js-937"> 937</a>
<a href="#typeahead.bundle.js-938"> 938</a>
<a href="#typeahead.bundle.js-939"> 939</a>
<a href="#typeahead.bundle.js-940"> 940</a>
<a href="#typeahead.bundle.js-941"> 941</a>
<a href="#typeahead.bundle.js-942"> 942</a>
<a href="#typeahead.bundle.js-943"> 943</a>
<a href="#typeahead.bundle.js-944"> 944</a>
<a href="#typeahead.bundle.js-945"> 945</a>
<a href="#typeahead.bundle.js-946"> 946</a>
<a href="#typeahead.bundle.js-947"> 947</a>
<a href="#typeahead.bundle.js-948"> 948</a>
<a href="#typeahead.bundle.js-949"> 949</a>
<a href="#typeahead.bundle.js-950"> 950</a>
<a href="#typeahead.bundle.js-951"> 951</a>
<a href="#typeahead.bundle.js-952"> 952</a>
<a href="#typeahead.bundle.js-953"> 953</a>
<a href="#typeahead.bundle.js-954"> 954</a>
<a href="#typeahead.bundle.js-955"> 955</a>
<a href="#typeahead.bundle.js-956"> 956</a>
<a href="#typeahead.bundle.js-957"> 957</a>
<a href="#typeahead.bundle.js-958"> 958</a>
<a href="#typeahead.bundle.js-959"> 959</a>
<a href="#typeahead.bundle.js-960"> 960</a>
<a href="#typeahead.bundle.js-961"> 961</a>
<a href="#typeahead.bundle.js-962"> 962</a>
<a href="#typeahead.bundle.js-963"> 963</a>
<a href="#typeahead.bundle.js-964"> 964</a>
<a href="#typeahead.bundle.js-965"> 965</a>
<a href="#typeahead.bundle.js-966"> 966</a>
<a href="#typeahead.bundle.js-967"> 967</a>
<a href="#typeahead.bundle.js-968"> 968</a>
<a href="#typeahead.bundle.js-969"> 969</a>
<a href="#typeahead.bundle.js-970"> 970</a>
<a href="#typeahead.bundle.js-971"> 971</a>
<a href="#typeahead.bundle.js-972"> 972</a>
<a href="#typeahead.bundle.js-973"> 973</a>
<a href="#typeahead.bundle.js-974"> 974</a>
<a href="#typeahead.bundle.js-975"> 975</a>
<a href="#typeahead.bundle.js-976"> 976</a>
<a href="#typeahead.bundle.js-977"> 977</a>
<a href="#typeahead.bundle.js-978"> 978</a>
<a href="#typeahead.bundle.js-979"> 979</a>
<a href="#typeahead.bundle.js-980"> 980</a>
<a href="#typeahead.bundle.js-981"> 981</a>
<a href="#typeahead.bundle.js-982"> 982</a>
<a href="#typeahead.bundle.js-983"> 983</a>
<a href="#typeahead.bundle.js-984"> 984</a>
<a href="#typeahead.bundle.js-985"> 985</a>
<a href="#typeahead.bundle.js-986"> 986</a>
<a href="#typeahead.bundle.js-987"> 987</a>
<a href="#typeahead.bundle.js-988"> 988</a>
<a href="#typeahead.bundle.js-989"> 989</a>
<a href="#typeahead.bundle.js-990"> 990</a>
<a href="#typeahead.bundle.js-991"> 991</a>
<a href="#typeahead.bundle.js-992"> 992</a>
<a href="#typeahead.bundle.js-993"> 993</a>
<a href="#typeahead.bundle.js-994"> 994</a>
<a href="#typeahead.bundle.js-995"> 995</a>
<a href="#typeahead.bundle.js-996"> 996</a>
<a href="#typeahead.bundle.js-997"> 997</a>
<a href="#typeahead.bundle.js-998"> 998</a>
<a href="#typeahead.bundle.js-999"> 999</a>
<a href="#typeahead.bundle.js-1000">1000</a>
<a href="#typeahead.bundle.js-1001">1001</a>
<a href="#typeahead.bundle.js-1002">1002</a>
<a href="#typeahead.bundle.js-1003">1003</a>
<a href="#typeahead.bundle.js-1004">1004</a>
<a href="#typeahead.bundle.js-1005">1005</a>
<a href="#typeahead.bundle.js-1006">1006</a>
<a href="#typeahead.bundle.js-1007">1007</a>
<a href="#typeahead.bundle.js-1008">1008</a>
<a href="#typeahead.bundle.js-1009">1009</a>
<a href="#typeahead.bundle.js-1010">1010</a>
<a href="#typeahead.bundle.js-1011">1011</a>
<a href="#typeahead.bundle.js-1012">1012</a>
<a href="#typeahead.bundle.js-1013">1013</a>
<a href="#typeahead.bundle.js-1014">1014</a>
<a href="#typeahead.bundle.js-1015">1015</a>
<a href="#typeahead.bundle.js-1016">1016</a>
<a href="#typeahead.bundle.js-1017">1017</a>
<a href="#typeahead.bundle.js-1018">1018</a>
<a href="#typeahead.bundle.js-1019">1019</a>
<a href="#typeahead.bundle.js-1020">1020</a>
<a href="#typeahead.bundle.js-1021">1021</a>
<a href="#typeahead.bundle.js-1022">1022</a>
<a href="#typeahead.bundle.js-1023">1023</a>
<a href="#typeahead.bundle.js-1024">1024</a>
<a href="#typeahead.bundle.js-1025">1025</a>
<a href="#typeahead.bundle.js-1026">1026</a>
<a href="#typeahead.bundle.js-1027">1027</a>
<a href="#typeahead.bundle.js-1028">1028</a>
<a href="#typeahead.bundle.js-1029">1029</a>
<a href="#typeahead.bundle.js-1030">1030</a>
<a href="#typeahead.bundle.js-1031">1031</a>
<a href="#typeahead.bundle.js-1032">1032</a>
<a href="#typeahead.bundle.js-1033">1033</a>
<a href="#typeahead.bundle.js-1034">1034</a>
<a href="#typeahead.bundle.js-1035">1035</a>
<a href="#typeahead.bundle.js-1036">1036</a>
<a href="#typeahead.bundle.js-1037">1037</a>
<a href="#typeahead.bundle.js-1038">1038</a>
<a href="#typeahead.bundle.js-1039">1039</a>
<a href="#typeahead.bundle.js-1040">1040</a>
<a href="#typeahead.bundle.js-1041">1041</a>
<a href="#typeahead.bundle.js-1042">1042</a>
<a href="#typeahead.bundle.js-1043">1043</a>
<a href="#typeahead.bundle.js-1044">1044</a>
<a href="#typeahead.bundle.js-1045">1045</a>
<a href="#typeahead.bundle.js-1046">1046</a>
<a href="#typeahead.bundle.js-1047">1047</a>
<a href="#typeahead.bundle.js-1048">1048</a>
<a href="#typeahead.bundle.js-1049">1049</a>
<a href="#typeahead.bundle.js-1050">1050</a>
<a href="#typeahead.bundle.js-1051">1051</a>
<a href="#typeahead.bundle.js-1052">1052</a>
<a href="#typeahead.bundle.js-1053">1053</a>
<a href="#typeahead.bundle.js-1054">1054</a>
<a href="#typeahead.bundle.js-1055">1055</a>
<a href="#typeahead.bundle.js-1056">1056</a>
<a href="#typeahead.bundle.js-1057">1057</a>
<a href="#typeahead.bundle.js-1058">1058</a>
<a href="#typeahead.bundle.js-1059">1059</a>
<a href="#typeahead.bundle.js-1060">1060</a>
<a href="#typeahead.bundle.js-1061">1061</a>
<a href="#typeahead.bundle.js-1062">1062</a>
<a href="#typeahead.bundle.js-1063">1063</a>
<a href="#typeahead.bundle.js-1064">1064</a>
<a href="#typeahead.bundle.js-1065">1065</a>
<a href="#typeahead.bundle.js-1066">1066</a>
<a href="#typeahead.bundle.js-1067">1067</a>
<a href="#typeahead.bundle.js-1068">1068</a>
<a href="#typeahead.bundle.js-1069">1069</a>
<a href="#typeahead.bundle.js-1070">1070</a>
<a href="#typeahead.bundle.js-1071">1071</a>
<a href="#typeahead.bundle.js-1072">1072</a>
<a href="#typeahead.bundle.js-1073">1073</a>
<a href="#typeahead.bundle.js-1074">1074</a>
<a href="#typeahead.bundle.js-1075">1075</a>
<a href="#typeahead.bundle.js-1076">1076</a>
<a href="#typeahead.bundle.js-1077">1077</a>
<a href="#typeahead.bundle.js-1078">1078</a>
<a href="#typeahead.bundle.js-1079">1079</a>
<a href="#typeahead.bundle.js-1080">1080</a>
<a href="#typeahead.bundle.js-1081">1081</a>
<a href="#typeahead.bundle.js-1082">1082</a>
<a href="#typeahead.bundle.js-1083">1083</a>
<a href="#typeahead.bundle.js-1084">1084</a>
<a href="#typeahead.bundle.js-1085">1085</a>
<a href="#typeahead.bundle.js-1086">1086</a>
<a href="#typeahead.bundle.js-1087">1087</a>
<a href="#typeahead.bundle.js-1088">1088</a>
<a href="#typeahead.bundle.js-1089">1089</a>
<a href="#typeahead.bundle.js-1090">1090</a>
<a href="#typeahead.bundle.js-1091">1091</a>
<a href="#typeahead.bundle.js-1092">1092</a>
<a href="#typeahead.bundle.js-1093">1093</a>
<a href="#typeahead.bundle.js-1094">1094</a>
<a href="#typeahead.bundle.js-1095">1095</a>
<a href="#typeahead.bundle.js-1096">1096</a>
<a href="#typeahead.bundle.js-1097">1097</a>
<a href="#typeahead.bundle.js-1098">1098</a>
<a href="#typeahead.bundle.js-1099">1099</a>
<a href="#typeahead.bundle.js-1100">1100</a>
<a href="#typeahead.bundle.js-1101">1101</a>
<a href="#typeahead.bundle.js-1102">1102</a>
<a href="#typeahead.bundle.js-1103">1103</a>
<a href="#typeahead.bundle.js-1104">1104</a>
<a href="#typeahead.bundle.js-1105">1105</a>
<a href="#typeahead.bundle.js-1106">1106</a>
<a href="#typeahead.bundle.js-1107">1107</a>
<a href="#typeahead.bundle.js-1108">1108</a>
<a href="#typeahead.bundle.js-1109">1109</a>
<a href="#typeahead.bundle.js-1110">1110</a>
<a href="#typeahead.bundle.js-1111">1111</a>
<a href="#typeahead.bundle.js-1112">1112</a>
<a href="#typeahead.bundle.js-1113">1113</a>
<a href="#typeahead.bundle.js-1114">1114</a>
<a href="#typeahead.bundle.js-1115">1115</a>
<a href="#typeahead.bundle.js-1116">1116</a>
<a href="#typeahead.bundle.js-1117">1117</a>
<a href="#typeahead.bundle.js-1118">1118</a>
<a href="#typeahead.bundle.js-1119">1119</a>
<a href="#typeahead.bundle.js-1120">1120</a>
<a href="#typeahead.bundle.js-1121">1121</a>
<a href="#typeahead.bundle.js-1122">1122</a>
<a href="#typeahead.bundle.js-1123">1123</a>
<a href="#typeahead.bundle.js-1124">1124</a>
<a href="#typeahead.bundle.js-1125">1125</a>
<a href="#typeahead.bundle.js-1126">1126</a>
<a href="#typeahead.bundle.js-1127">1127</a>
<a href="#typeahead.bundle.js-1128">1128</a>
<a href="#typeahead.bundle.js-1129">1129</a>
<a href="#typeahead.bundle.js-1130">1130</a>
<a href="#typeahead.bundle.js-1131">1131</a>
<a href="#typeahead.bundle.js-1132">1132</a>
<a href="#typeahead.bundle.js-1133">1133</a>
<a href="#typeahead.bundle.js-1134">1134</a>
<a href="#typeahead.bundle.js-1135">1135</a>
<a href="#typeahead.bundle.js-1136">1136</a>
<a href="#typeahead.bundle.js-1137">1137</a>
<a href="#typeahead.bundle.js-1138">1138</a>
<a href="#typeahead.bundle.js-1139">1139</a>
<a href="#typeahead.bundle.js-1140">1140</a>
<a href="#typeahead.bundle.js-1141">1141</a>
<a href="#typeahead.bundle.js-1142">1142</a>
<a href="#typeahead.bundle.js-1143">1143</a>
<a href="#typeahead.bundle.js-1144">1144</a>
<a href="#typeahead.bundle.js-1145">1145</a>
<a href="#typeahead.bundle.js-1146">1146</a>
<a href="#typeahead.bundle.js-1147">1147</a>
<a href="#typeahead.bundle.js-1148">1148</a>
<a href="#typeahead.bundle.js-1149">1149</a>
<a href="#typeahead.bundle.js-1150">1150</a>
<a href="#typeahead.bundle.js-1151">1151</a>
<a href="#typeahead.bundle.js-1152">1152</a>
<a href="#typeahead.bundle.js-1153">1153</a>
<a href="#typeahead.bundle.js-1154">1154</a>
<a href="#typeahead.bundle.js-1155">1155</a>
<a href="#typeahead.bundle.js-1156">1156</a>
<a href="#typeahead.bundle.js-1157">1157</a>
<a href="#typeahead.bundle.js-1158">1158</a>
<a href="#typeahead.bundle.js-1159">1159</a>
<a href="#typeahead.bundle.js-1160">1160</a>
<a href="#typeahead.bundle.js-1161">1161</a>
<a href="#typeahead.bundle.js-1162">1162</a>
<a href="#typeahead.bundle.js-1163">1163</a>
<a href="#typeahead.bundle.js-1164">1164</a>
<a href="#typeahead.bundle.js-1165">1165</a>
<a href="#typeahead.bundle.js-1166">1166</a>
<a href="#typeahead.bundle.js-1167">1167</a>
<a href="#typeahead.bundle.js-1168">1168</a>
<a href="#typeahead.bundle.js-1169">1169</a>
<a href="#typeahead.bundle.js-1170">1170</a>
<a href="#typeahead.bundle.js-1171">1171</a>
<a href="#typeahead.bundle.js-1172">1172</a>
<a href="#typeahead.bundle.js-1173">1173</a>
<a href="#typeahead.bundle.js-1174">1174</a>
<a href="#typeahead.bundle.js-1175">1175</a>
<a href="#typeahead.bundle.js-1176">1176</a>
<a href="#typeahead.bundle.js-1177">1177</a>
<a href="#typeahead.bundle.js-1178">1178</a>
<a href="#typeahead.bundle.js-1179">1179</a>
<a href="#typeahead.bundle.js-1180">1180</a>
<a href="#typeahead.bundle.js-1181">1181</a>
<a href="#typeahead.bundle.js-1182">1182</a>
<a href="#typeahead.bundle.js-1183">1183</a>
<a href="#typeahead.bundle.js-1184">1184</a>
<a href="#typeahead.bundle.js-1185">1185</a>
<a href="#typeahead.bundle.js-1186">1186</a>
<a href="#typeahead.bundle.js-1187">1187</a>
<a href="#typeahead.bundle.js-1188">1188</a>
<a href="#typeahead.bundle.js-1189">1189</a>
<a href="#typeahead.bundle.js-1190">1190</a>
<a href="#typeahead.bundle.js-1191">1191</a>
<a href="#typeahead.bundle.js-1192">1192</a>
<a href="#typeahead.bundle.js-1193">1193</a>
<a href="#typeahead.bundle.js-1194">1194</a>
<a href="#typeahead.bundle.js-1195">1195</a>
<a href="#typeahead.bundle.js-1196">1196</a>
<a href="#typeahead.bundle.js-1197">1197</a>
<a href="#typeahead.bundle.js-1198">1198</a>
<a href="#typeahead.bundle.js-1199">1199</a>
<a href="#typeahead.bundle.js-1200">1200</a>
<a href="#typeahead.bundle.js-1201">1201</a>
<a href="#typeahead.bundle.js-1202">1202</a>
<a href="#typeahead.bundle.js-1203">1203</a>
<a href="#typeahead.bundle.js-1204">1204</a>
<a href="#typeahead.bundle.js-1205">1205</a>
<a href="#typeahead.bundle.js-1206">1206</a>
<a href="#typeahead.bundle.js-1207">1207</a>
<a href="#typeahead.bundle.js-1208">1208</a>
<a href="#typeahead.bundle.js-1209">1209</a>
<a href="#typeahead.bundle.js-1210">1210</a>
<a href="#typeahead.bundle.js-1211">1211</a>
<a href="#typeahead.bundle.js-1212">1212</a>
<a href="#typeahead.bundle.js-1213">1213</a>
<a href="#typeahead.bundle.js-1214">1214</a>
<a href="#typeahead.bundle.js-1215">1215</a>
<a href="#typeahead.bundle.js-1216">1216</a>
<a href="#typeahead.bundle.js-1217">1217</a>
<a href="#typeahead.bundle.js-1218">1218</a>
<a href="#typeahead.bundle.js-1219">1219</a>
<a href="#typeahead.bundle.js-1220">1220</a>
<a href="#typeahead.bundle.js-1221">1221</a>
<a href="#typeahead.bundle.js-1222">1222</a>
<a href="#typeahead.bundle.js-1223">1223</a>
<a href="#typeahead.bundle.js-1224">1224</a>
<a href="#typeahead.bundle.js-1225">1225</a>
<a href="#typeahead.bundle.js-1226">1226</a>
<a href="#typeahead.bundle.js-1227">1227</a>
<a href="#typeahead.bundle.js-1228">1228</a>
<a href="#typeahead.bundle.js-1229">1229</a>
<a href="#typeahead.bundle.js-1230">1230</a>
<a href="#typeahead.bundle.js-1231">1231</a>
<a href="#typeahead.bundle.js-1232">1232</a>
<a href="#typeahead.bundle.js-1233">1233</a>
<a href="#typeahead.bundle.js-1234">1234</a>
<a href="#typeahead.bundle.js-1235">1235</a>
<a href="#typeahead.bundle.js-1236">1236</a>
<a href="#typeahead.bundle.js-1237">1237</a>
<a href="#typeahead.bundle.js-1238">1238</a>
<a href="#typeahead.bundle.js-1239">1239</a>
<a href="#typeahead.bundle.js-1240">1240</a>
<a href="#typeahead.bundle.js-1241">1241</a>
<a href="#typeahead.bundle.js-1242">1242</a>
<a href="#typeahead.bundle.js-1243">1243</a>
<a href="#typeahead.bundle.js-1244">1244</a>
<a href="#typeahead.bundle.js-1245">1245</a>
<a href="#typeahead.bundle.js-1246">1246</a>
<a href="#typeahead.bundle.js-1247">1247</a>
<a href="#typeahead.bundle.js-1248">1248</a>
<a href="#typeahead.bundle.js-1249">1249</a>
<a href="#typeahead.bundle.js-1250">1250</a>
<a href="#typeahead.bundle.js-1251">1251</a>
<a href="#typeahead.bundle.js-1252">1252</a>
<a href="#typeahead.bundle.js-1253">1253</a>
<a href="#typeahead.bundle.js-1254">1254</a>
<a href="#typeahead.bundle.js-1255">1255</a>
<a href="#typeahead.bundle.js-1256">1256</a>
<a href="#typeahead.bundle.js-1257">1257</a>
<a href="#typeahead.bundle.js-1258">1258</a>
<a href="#typeahead.bundle.js-1259">1259</a>
<a href="#typeahead.bundle.js-1260">1260</a>
<a href="#typeahead.bundle.js-1261">1261</a>
<a href="#typeahead.bundle.js-1262">1262</a>
<a href="#typeahead.bundle.js-1263">1263</a>
<a href="#typeahead.bundle.js-1264">1264</a>
<a href="#typeahead.bundle.js-1265">1265</a>
<a href="#typeahead.bundle.js-1266">1266</a>
<a href="#typeahead.bundle.js-1267">1267</a>
<a href="#typeahead.bundle.js-1268">1268</a>
<a href="#typeahead.bundle.js-1269">1269</a>
<a href="#typeahead.bundle.js-1270">1270</a>
<a href="#typeahead.bundle.js-1271">1271</a>
<a href="#typeahead.bundle.js-1272">1272</a>
<a href="#typeahead.bundle.js-1273">1273</a>
<a href="#typeahead.bundle.js-1274">1274</a>
<a href="#typeahead.bundle.js-1275">1275</a>
<a href="#typeahead.bundle.js-1276">1276</a>
<a href="#typeahead.bundle.js-1277">1277</a>
<a href="#typeahead.bundle.js-1278">1278</a>
<a href="#typeahead.bundle.js-1279">1279</a>
<a href="#typeahead.bundle.js-1280">1280</a>
<a href="#typeahead.bundle.js-1281">1281</a>
<a href="#typeahead.bundle.js-1282">1282</a>
<a href="#typeahead.bundle.js-1283">1283</a>
<a href="#typeahead.bundle.js-1284">1284</a>
<a href="#typeahead.bundle.js-1285">1285</a>
<a href="#typeahead.bundle.js-1286">1286</a>
<a href="#typeahead.bundle.js-1287">1287</a>
<a href="#typeahead.bundle.js-1288">1288</a>
<a href="#typeahead.bundle.js-1289">1289</a>
<a href="#typeahead.bundle.js-1290">1290</a>
<a href="#typeahead.bundle.js-1291">1291</a>
<a href="#typeahead.bundle.js-1292">1292</a>
<a href="#typeahead.bundle.js-1293">1293</a>
<a href="#typeahead.bundle.js-1294">1294</a>
<a href="#typeahead.bundle.js-1295">1295</a>
<a href="#typeahead.bundle.js-1296">1296</a>
<a href="#typeahead.bundle.js-1297">1297</a>
<a href="#typeahead.bundle.js-1298">1298</a>
<a href="#typeahead.bundle.js-1299">1299</a>
<a href="#typeahead.bundle.js-1300">1300</a>
<a href="#typeahead.bundle.js-1301">1301</a>
<a href="#typeahead.bundle.js-1302">1302</a>
<a href="#typeahead.bundle.js-1303">1303</a>
<a href="#typeahead.bundle.js-1304">1304</a>
<a href="#typeahead.bundle.js-1305">1305</a>
<a href="#typeahead.bundle.js-1306">1306</a>
<a href="#typeahead.bundle.js-1307">1307</a>
<a href="#typeahead.bundle.js-1308">1308</a>
<a href="#typeahead.bundle.js-1309">1309</a>
<a href="#typeahead.bundle.js-1310">1310</a>
<a href="#typeahead.bundle.js-1311">1311</a>
<a href="#typeahead.bundle.js-1312">1312</a>
<a href="#typeahead.bundle.js-1313">1313</a>
<a href="#typeahead.bundle.js-1314">1314</a>
<a href="#typeahead.bundle.js-1315">1315</a>
<a href="#typeahead.bundle.js-1316">1316</a>
<a href="#typeahead.bundle.js-1317">1317</a>
<a href="#typeahead.bundle.js-1318">1318</a>
<a href="#typeahead.bundle.js-1319">1319</a>
<a href="#typeahead.bundle.js-1320">1320</a>
<a href="#typeahead.bundle.js-1321">1321</a>
<a href="#typeahead.bundle.js-1322">1322</a>
<a href="#typeahead.bundle.js-1323">1323</a>
<a href="#typeahead.bundle.js-1324">1324</a>
<a href="#typeahead.bundle.js-1325">1325</a>
<a href="#typeahead.bundle.js-1326">1326</a>
<a href="#typeahead.bundle.js-1327">1327</a>
<a href="#typeahead.bundle.js-1328">1328</a>
<a href="#typeahead.bundle.js-1329">1329</a>
<a href="#typeahead.bundle.js-1330">1330</a>
<a href="#typeahead.bundle.js-1331">1331</a>
<a href="#typeahead.bundle.js-1332">1332</a>
<a href="#typeahead.bundle.js-1333">1333</a>
<a href="#typeahead.bundle.js-1334">1334</a>
<a href="#typeahead.bundle.js-1335">1335</a>
<a href="#typeahead.bundle.js-1336">1336</a>
<a href="#typeahead.bundle.js-1337">1337</a>
<a href="#typeahead.bundle.js-1338">1338</a>
<a href="#typeahead.bundle.js-1339">1339</a>
<a href="#typeahead.bundle.js-1340">1340</a>
<a href="#typeahead.bundle.js-1341">1341</a>
<a href="#typeahead.bundle.js-1342">1342</a>
<a href="#typeahead.bundle.js-1343">1343</a>
<a href="#typeahead.bundle.js-1344">1344</a>
<a href="#typeahead.bundle.js-1345">1345</a>
<a href="#typeahead.bundle.js-1346">1346</a>
<a href="#typeahead.bundle.js-1347">1347</a>
<a href="#typeahead.bundle.js-1348">1348</a>
<a href="#typeahead.bundle.js-1349">1349</a>
<a href="#typeahead.bundle.js-1350">1350</a>
<a href="#typeahead.bundle.js-1351">1351</a>
<a href="#typeahead.bundle.js-1352">1352</a>
<a href="#typeahead.bundle.js-1353">1353</a>
<a href="#typeahead.bundle.js-1354">1354</a>
<a href="#typeahead.bundle.js-1355">1355</a>
<a href="#typeahead.bundle.js-1356">1356</a>
<a href="#typeahead.bundle.js-1357">1357</a>
<a href="#typeahead.bundle.js-1358">1358</a>
<a href="#typeahead.bundle.js-1359">1359</a>
<a href="#typeahead.bundle.js-1360">1360</a>
<a href="#typeahead.bundle.js-1361">1361</a>
<a href="#typeahead.bundle.js-1362">1362</a>
<a href="#typeahead.bundle.js-1363">1363</a>
<a href="#typeahead.bundle.js-1364">1364</a>
<a href="#typeahead.bundle.js-1365">1365</a>
<a href="#typeahead.bundle.js-1366">1366</a>
<a href="#typeahead.bundle.js-1367">1367</a>
<a href="#typeahead.bundle.js-1368">1368</a>
<a href="#typeahead.bundle.js-1369">1369</a>
<a href="#typeahead.bundle.js-1370">1370</a>
<a href="#typeahead.bundle.js-1371">1371</a>
<a href="#typeahead.bundle.js-1372">1372</a>
<a href="#typeahead.bundle.js-1373">1373</a>
<a href="#typeahead.bundle.js-1374">1374</a>
<a href="#typeahead.bundle.js-1375">1375</a>
<a href="#typeahead.bundle.js-1376">1376</a>
<a href="#typeahead.bundle.js-1377">1377</a>
<a href="#typeahead.bundle.js-1378">1378</a>
<a href="#typeahead.bundle.js-1379">1379</a>
<a href="#typeahead.bundle.js-1380">1380</a>
<a href="#typeahead.bundle.js-1381">1381</a>
<a href="#typeahead.bundle.js-1382">1382</a>
<a href="#typeahead.bundle.js-1383">1383</a>
<a href="#typeahead.bundle.js-1384">1384</a>
<a href="#typeahead.bundle.js-1385">1385</a>
<a href="#typeahead.bundle.js-1386">1386</a>
<a href="#typeahead.bundle.js-1387">1387</a>
<a href="#typeahead.bundle.js-1388">1388</a>
<a href="#typeahead.bundle.js-1389">1389</a>
<a href="#typeahead.bundle.js-1390">1390</a>
<a href="#typeahead.bundle.js-1391">1391</a>
<a href="#typeahead.bundle.js-1392">1392</a>
<a href="#typeahead.bundle.js-1393">1393</a>
<a href="#typeahead.bundle.js-1394">1394</a>
<a href="#typeahead.bundle.js-1395">1395</a>
<a href="#typeahead.bundle.js-1396">1396</a>
<a href="#typeahead.bundle.js-1397">1397</a>
<a href="#typeahead.bundle.js-1398">1398</a>
<a href="#typeahead.bundle.js-1399">1399</a>
<a href="#typeahead.bundle.js-1400">1400</a>
<a href="#typeahead.bundle.js-1401">1401</a>
<a href="#typeahead.bundle.js-1402">1402</a>
<a href="#typeahead.bundle.js-1403">1403</a>
<a href="#typeahead.bundle.js-1404">1404</a>
<a href="#typeahead.bundle.js-1405">1405</a>
<a href="#typeahead.bundle.js-1406">1406</a>
<a href="#typeahead.bundle.js-1407">1407</a>
<a href="#typeahead.bundle.js-1408">1408</a>
<a href="#typeahead.bundle.js-1409">1409</a>
<a href="#typeahead.bundle.js-1410">1410</a>
<a href="#typeahead.bundle.js-1411">1411</a>
<a href="#typeahead.bundle.js-1412">1412</a>
<a href="#typeahead.bundle.js-1413">1413</a>
<a href="#typeahead.bundle.js-1414">1414</a>
<a href="#typeahead.bundle.js-1415">1415</a>
<a href="#typeahead.bundle.js-1416">1416</a>
<a href="#typeahead.bundle.js-1417">1417</a>
<a href="#typeahead.bundle.js-1418">1418</a>
<a href="#typeahead.bundle.js-1419">1419</a>
<a href="#typeahead.bundle.js-1420">1420</a>
<a href="#typeahead.bundle.js-1421">1421</a>
<a href="#typeahead.bundle.js-1422">1422</a>
<a href="#typeahead.bundle.js-1423">1423</a>
<a href="#typeahead.bundle.js-1424">1424</a>
<a href="#typeahead.bundle.js-1425">1425</a>
<a href="#typeahead.bundle.js-1426">1426</a>
<a href="#typeahead.bundle.js-1427">1427</a>
<a href="#typeahead.bundle.js-1428">1428</a>
<a href="#typeahead.bundle.js-1429">1429</a>
<a href="#typeahead.bundle.js-1430">1430</a>
<a href="#typeahead.bundle.js-1431">1431</a>
<a href="#typeahead.bundle.js-1432">1432</a>
<a href="#typeahead.bundle.js-1433">1433</a>
<a href="#typeahead.bundle.js-1434">1434</a>
<a href="#typeahead.bundle.js-1435">1435</a>
<a href="#typeahead.bundle.js-1436">1436</a>
<a href="#typeahead.bundle.js-1437">1437</a>
<a href="#typeahead.bundle.js-1438">1438</a>
<a href="#typeahead.bundle.js-1439">1439</a>
<a href="#typeahead.bundle.js-1440">1440</a>
<a href="#typeahead.bundle.js-1441">1441</a>
<a href="#typeahead.bundle.js-1442">1442</a>
<a href="#typeahead.bundle.js-1443">1443</a>
<a href="#typeahead.bundle.js-1444">1444</a>
<a href="#typeahead.bundle.js-1445">1445</a>
<a href="#typeahead.bundle.js-1446">1446</a>
<a href="#typeahead.bundle.js-1447">1447</a>
<a href="#typeahead.bundle.js-1448">1448</a>
<a href="#typeahead.bundle.js-1449">1449</a>
<a href="#typeahead.bundle.js-1450">1450</a>
<a href="#typeahead.bundle.js-1451">1451</a>
<a href="#typeahead.bundle.js-1452">1452</a>
<a href="#typeahead.bundle.js-1453">1453</a>
<a href="#typeahead.bundle.js-1454">1454</a>
<a href="#typeahead.bundle.js-1455">1455</a>
<a href="#typeahead.bundle.js-1456">1456</a>
<a href="#typeahead.bundle.js-1457">1457</a>
<a href="#typeahead.bundle.js-1458">1458</a>
<a href="#typeahead.bundle.js-1459">1459</a>
<a href="#typeahead.bundle.js-1460">1460</a>
<a href="#typeahead.bundle.js-1461">1461</a>
<a href="#typeahead.bundle.js-1462">1462</a>
<a href="#typeahead.bundle.js-1463">1463</a>
<a href="#typeahead.bundle.js-1464">1464</a>
<a href="#typeahead.bundle.js-1465">1465</a>
<a href="#typeahead.bundle.js-1466">1466</a>
<a href="#typeahead.bundle.js-1467">1467</a>
<a href="#typeahead.bundle.js-1468">1468</a>
<a href="#typeahead.bundle.js-1469">1469</a>
<a href="#typeahead.bundle.js-1470">1470</a>
<a href="#typeahead.bundle.js-1471">1471</a>
<a href="#typeahead.bundle.js-1472">1472</a>
<a href="#typeahead.bundle.js-1473">1473</a>
<a href="#typeahead.bundle.js-1474">1474</a>
<a href="#typeahead.bundle.js-1475">1475</a>
<a href="#typeahead.bundle.js-1476">1476</a>
<a href="#typeahead.bundle.js-1477">1477</a>
<a href="#typeahead.bundle.js-1478">1478</a>
<a href="#typeahead.bundle.js-1479">1479</a>
<a href="#typeahead.bundle.js-1480">1480</a>
<a href="#typeahead.bundle.js-1481">1481</a>
<a href="#typeahead.bundle.js-1482">1482</a>
<a href="#typeahead.bundle.js-1483">1483</a>
<a href="#typeahead.bundle.js-1484">1484</a>
<a href="#typeahead.bundle.js-1485">1485</a>
<a href="#typeahead.bundle.js-1486">1486</a>
<a href="#typeahead.bundle.js-1487">1487</a>
<a href="#typeahead.bundle.js-1488">1488</a>
<a href="#typeahead.bundle.js-1489">1489</a>
<a href="#typeahead.bundle.js-1490">1490</a>
<a href="#typeahead.bundle.js-1491">1491</a>
<a href="#typeahead.bundle.js-1492">1492</a>
<a href="#typeahead.bundle.js-1493">1493</a>
<a href="#typeahead.bundle.js-1494">1494</a>
<a href="#typeahead.bundle.js-1495">1495</a>
<a href="#typeahead.bundle.js-1496">1496</a>
<a href="#typeahead.bundle.js-1497">1497</a>
<a href="#typeahead.bundle.js-1498">1498</a>
<a href="#typeahead.bundle.js-1499">1499</a>
<a href="#typeahead.bundle.js-1500">1500</a>
<a href="#typeahead.bundle.js-1501">1501</a>
<a href="#typeahead.bundle.js-1502">1502</a>
<a href="#typeahead.bundle.js-1503">1503</a>
<a href="#typeahead.bundle.js-1504">1504</a>
<a href="#typeahead.bundle.js-1505">1505</a>
<a href="#typeahead.bundle.js-1506">1506</a>
<a href="#typeahead.bundle.js-1507">1507</a>
<a href="#typeahead.bundle.js-1508">1508</a>
<a href="#typeahead.bundle.js-1509">1509</a>
<a href="#typeahead.bundle.js-1510">1510</a>
<a href="#typeahead.bundle.js-1511">1511</a>
<a href="#typeahead.bundle.js-1512">1512</a>
<a href="#typeahead.bundle.js-1513">1513</a>
<a href="#typeahead.bundle.js-1514">1514</a>
<a href="#typeahead.bundle.js-1515">1515</a>
<a href="#typeahead.bundle.js-1516">1516</a>
<a href="#typeahead.bundle.js-1517">1517</a>
<a href="#typeahead.bundle.js-1518">1518</a>
<a href="#typeahead.bundle.js-1519">1519</a>
<a href="#typeahead.bundle.js-1520">1520</a>
<a href="#typeahead.bundle.js-1521">1521</a>
<a href="#typeahead.bundle.js-1522">1522</a>
<a href="#typeahead.bundle.js-1523">1523</a>
<a href="#typeahead.bundle.js-1524">1524</a>
<a href="#typeahead.bundle.js-1525">1525</a>
<a href="#typeahead.bundle.js-1526">1526</a>
<a href="#typeahead.bundle.js-1527">1527</a>
<a href="#typeahead.bundle.js-1528">1528</a>
<a href="#typeahead.bundle.js-1529">1529</a>
<a href="#typeahead.bundle.js-1530">1530</a>
<a href="#typeahead.bundle.js-1531">1531</a>
<a href="#typeahead.bundle.js-1532">1532</a>
<a href="#typeahead.bundle.js-1533">1533</a>
<a href="#typeahead.bundle.js-1534">1534</a>
<a href="#typeahead.bundle.js-1535">1535</a>
<a href="#typeahead.bundle.js-1536">1536</a>
<a href="#typeahead.bundle.js-1537">1537</a>
<a href="#typeahead.bundle.js-1538">1538</a>
<a href="#typeahead.bundle.js-1539">1539</a>
<a href="#typeahead.bundle.js-1540">1540</a>
<a href="#typeahead.bundle.js-1541">1541</a>
<a href="#typeahead.bundle.js-1542">1542</a>
<a href="#typeahead.bundle.js-1543">1543</a>
<a href="#typeahead.bundle.js-1544">1544</a>
<a href="#typeahead.bundle.js-1545">1545</a>
<a href="#typeahead.bundle.js-1546">1546</a>
<a href="#typeahead.bundle.js-1547">1547</a>
<a href="#typeahead.bundle.js-1548">1548</a>
<a href="#typeahead.bundle.js-1549">1549</a>
<a href="#typeahead.bundle.js-1550">1550</a>
<a href="#typeahead.bundle.js-1551">1551</a>
<a href="#typeahead.bundle.js-1552">1552</a>
<a href="#typeahead.bundle.js-1553">1553</a>
<a href="#typeahead.bundle.js-1554">1554</a>
<a href="#typeahead.bundle.js-1555">1555</a>
<a href="#typeahead.bundle.js-1556">1556</a>
<a href="#typeahead.bundle.js-1557">1557</a>
<a href="#typeahead.bundle.js-1558">1558</a>
<a href="#typeahead.bundle.js-1559">1559</a>
<a href="#typeahead.bundle.js-1560">1560</a>
<a href="#typeahead.bundle.js-1561">1561</a>
<a href="#typeahead.bundle.js-1562">1562</a>
<a href="#typeahead.bundle.js-1563">1563</a>
<a href="#typeahead.bundle.js-1564">1564</a>
<a href="#typeahead.bundle.js-1565">1565</a>
<a href="#typeahead.bundle.js-1566">1566</a>
<a href="#typeahead.bundle.js-1567">1567</a>
<a href="#typeahead.bundle.js-1568">1568</a>
<a href="#typeahead.bundle.js-1569">1569</a>
<a href="#typeahead.bundle.js-1570">1570</a>
<a href="#typeahead.bundle.js-1571">1571</a>
<a href="#typeahead.bundle.js-1572">1572</a>
<a href="#typeahead.bundle.js-1573">1573</a>
<a href="#typeahead.bundle.js-1574">1574</a>
<a href="#typeahead.bundle.js-1575">1575</a>
<a href="#typeahead.bundle.js-1576">1576</a>
<a href="#typeahead.bundle.js-1577">1577</a>
<a href="#typeahead.bundle.js-1578">1578</a>
<a href="#typeahead.bundle.js-1579">1579</a>
<a href="#typeahead.bundle.js-1580">1580</a>
<a href="#typeahead.bundle.js-1581">1581</a>
<a href="#typeahead.bundle.js-1582">1582</a>
<a href="#typeahead.bundle.js-1583">1583</a>
<a href="#typeahead.bundle.js-1584">1584</a>
<a href="#typeahead.bundle.js-1585">1585</a>
<a href="#typeahead.bundle.js-1586">1586</a>
<a href="#typeahead.bundle.js-1587">1587</a>
<a href="#typeahead.bundle.js-1588">1588</a>
<a href="#typeahead.bundle.js-1589">1589</a>
<a href="#typeahead.bundle.js-1590">1590</a>
<a href="#typeahead.bundle.js-1591">1591</a>
<a href="#typeahead.bundle.js-1592">1592</a>
<a href="#typeahead.bundle.js-1593">1593</a>
<a href="#typeahead.bundle.js-1594">1594</a>
<a href="#typeahead.bundle.js-1595">1595</a>
<a href="#typeahead.bundle.js-1596">1596</a>
<a href="#typeahead.bundle.js-1597">1597</a>
<a href="#typeahead.bundle.js-1598">1598</a>
<a href="#typeahead.bundle.js-1599">1599</a>
<a href="#typeahead.bundle.js-1600">1600</a>
<a href="#typeahead.bundle.js-1601">1601</a>
<a href="#typeahead.bundle.js-1602">1602</a>
<a href="#typeahead.bundle.js-1603">1603</a>
<a href="#typeahead.bundle.js-1604">1604</a>
<a href="#typeahead.bundle.js-1605">1605</a>
<a href="#typeahead.bundle.js-1606">1606</a>
<a href="#typeahead.bundle.js-1607">1607</a>
<a href="#typeahead.bundle.js-1608">1608</a>
<a href="#typeahead.bundle.js-1609">1609</a>
<a href="#typeahead.bundle.js-1610">1610</a>
<a href="#typeahead.bundle.js-1611">1611</a>
<a href="#typeahead.bundle.js-1612">1612</a>
<a href="#typeahead.bundle.js-1613">1613</a>
<a href="#typeahead.bundle.js-1614">1614</a>
<a href="#typeahead.bundle.js-1615">1615</a>
<a href="#typeahead.bundle.js-1616">1616</a>
<a href="#typeahead.bundle.js-1617">1617</a>
<a href="#typeahead.bundle.js-1618">1618</a>
<a href="#typeahead.bundle.js-1619">1619</a>
<a href="#typeahead.bundle.js-1620">1620</a>
<a href="#typeahead.bundle.js-1621">1621</a>
<a href="#typeahead.bundle.js-1622">1622</a>
<a href="#typeahead.bundle.js-1623">1623</a>
<a href="#typeahead.bundle.js-1624">1624</a>
<a href="#typeahead.bundle.js-1625">1625</a>
<a href="#typeahead.bundle.js-1626">1626</a>
<a href="#typeahead.bundle.js-1627">1627</a>
<a href="#typeahead.bundle.js-1628">1628</a>
<a href="#typeahead.bundle.js-1629">1629</a>
<a href="#typeahead.bundle.js-1630">1630</a>
<a href="#typeahead.bundle.js-1631">1631</a>
<a href="#typeahead.bundle.js-1632">1632</a>
<a href="#typeahead.bundle.js-1633">1633</a>
<a href="#typeahead.bundle.js-1634">1634</a>
<a href="#typeahead.bundle.js-1635">1635</a>
<a href="#typeahead.bundle.js-1636">1636</a>
<a href="#typeahead.bundle.js-1637">1637</a>
<a href="#typeahead.bundle.js-1638">1638</a>
<a href="#typeahead.bundle.js-1639">1639</a>
<a href="#typeahead.bundle.js-1640">1640</a>
<a href="#typeahead.bundle.js-1641">1641</a>
<a href="#typeahead.bundle.js-1642">1642</a>
<a href="#typeahead.bundle.js-1643">1643</a>
<a href="#typeahead.bundle.js-1644">1644</a>
<a href="#typeahead.bundle.js-1645">1645</a>
<a href="#typeahead.bundle.js-1646">1646</a>
<a href="#typeahead.bundle.js-1647">1647</a>
<a href="#typeahead.bundle.js-1648">1648</a>
<a href="#typeahead.bundle.js-1649">1649</a>
<a href="#typeahead.bundle.js-1650">1650</a>
<a href="#typeahead.bundle.js-1651">1651</a>
<a href="#typeahead.bundle.js-1652">1652</a>
<a href="#typeahead.bundle.js-1653">1653</a>
<a href="#typeahead.bundle.js-1654">1654</a>
<a href="#typeahead.bundle.js-1655">1655</a>
<a href="#typeahead.bundle.js-1656">1656</a>
<a href="#typeahead.bundle.js-1657">1657</a>
<a href="#typeahead.bundle.js-1658">1658</a>
<a href="#typeahead.bundle.js-1659">1659</a>
<a href="#typeahead.bundle.js-1660">1660</a>
<a href="#typeahead.bundle.js-1661">1661</a>
<a href="#typeahead.bundle.js-1662">1662</a>
<a href="#typeahead.bundle.js-1663">1663</a>
<a href="#typeahead.bundle.js-1664">1664</a>
<a href="#typeahead.bundle.js-1665">1665</a>
<a href="#typeahead.bundle.js-1666">1666</a>
<a href="#typeahead.bundle.js-1667">1667</a>
<a href="#typeahead.bundle.js-1668">1668</a>
<a href="#typeahead.bundle.js-1669">1669</a>
<a href="#typeahead.bundle.js-1670">1670</a>
<a href="#typeahead.bundle.js-1671">1671</a>
<a href="#typeahead.bundle.js-1672">1672</a>
<a href="#typeahead.bundle.js-1673">1673</a>
<a href="#typeahead.bundle.js-1674">1674</a>
<a href="#typeahead.bundle.js-1675">1675</a>
<a href="#typeahead.bundle.js-1676">1676</a>
<a href="#typeahead.bundle.js-1677">1677</a>
<a href="#typeahead.bundle.js-1678">1678</a>
<a href="#typeahead.bundle.js-1679">1679</a>
<a href="#typeahead.bundle.js-1680">1680</a>
<a href="#typeahead.bundle.js-1681">1681</a>
<a href="#typeahead.bundle.js-1682">1682</a>
<a href="#typeahead.bundle.js-1683">1683</a>
<a href="#typeahead.bundle.js-1684">1684</a>
<a href="#typeahead.bundle.js-1685">1685</a>
<a href="#typeahead.bundle.js-1686">1686</a>
<a href="#typeahead.bundle.js-1687">1687</a>
<a href="#typeahead.bundle.js-1688">1688</a>
<a href="#typeahead.bundle.js-1689">1689</a>
<a href="#typeahead.bundle.js-1690">1690</a>
<a href="#typeahead.bundle.js-1691">1691</a>
<a href="#typeahead.bundle.js-1692">1692</a>
<a href="#typeahead.bundle.js-1693">1693</a>
<a href="#typeahead.bundle.js-1694">1694</a>
<a href="#typeahead.bundle.js-1695">1695</a>
<a href="#typeahead.bundle.js-1696">1696</a>
<a href="#typeahead.bundle.js-1697">1697</a>
<a href="#typeahead.bundle.js-1698">1698</a>
<a href="#typeahead.bundle.js-1699">1699</a>
<a href="#typeahead.bundle.js-1700">1700</a>
<a href="#typeahead.bundle.js-1701">1701</a>
<a href="#typeahead.bundle.js-1702">1702</a>
<a href="#typeahead.bundle.js-1703">1703</a>
<a href="#typeahead.bundle.js-1704">1704</a>
<a href="#typeahead.bundle.js-1705">1705</a>
<a href="#typeahead.bundle.js-1706">1706</a>
<a href="#typeahead.bundle.js-1707">1707</a>
<a href="#typeahead.bundle.js-1708">1708</a>
<a href="#typeahead.bundle.js-1709">1709</a>
<a href="#typeahead.bundle.js-1710">1710</a>
<a href="#typeahead.bundle.js-1711">1711</a>
<a href="#typeahead.bundle.js-1712">1712</a>
<a href="#typeahead.bundle.js-1713">1713</a>
<a href="#typeahead.bundle.js-1714">1714</a>
<a href="#typeahead.bundle.js-1715">1715</a>
<a href="#typeahead.bundle.js-1716">1716</a>
<a href="#typeahead.bundle.js-1717">1717</a>
<a href="#typeahead.bundle.js-1718">1718</a>
<a href="#typeahead.bundle.js-1719">1719</a>
<a href="#typeahead.bundle.js-1720">1720</a>
<a href="#typeahead.bundle.js-1721">1721</a>
<a href="#typeahead.bundle.js-1722">1722</a>
<a href="#typeahead.bundle.js-1723">1723</a>
<a href="#typeahead.bundle.js-1724">1724</a>
<a href="#typeahead.bundle.js-1725">1725</a>
<a href="#typeahead.bundle.js-1726">1726</a>
<a href="#typeahead.bundle.js-1727">1727</a>
<a href="#typeahead.bundle.js-1728">1728</a>
<a href="#typeahead.bundle.js-1729">1729</a>
<a href="#typeahead.bundle.js-1730">1730</a>
<a href="#typeahead.bundle.js-1731">1731</a>
<a href="#typeahead.bundle.js-1732">1732</a>
<a href="#typeahead.bundle.js-1733">1733</a>
<a href="#typeahead.bundle.js-1734">1734</a>
<a href="#typeahead.bundle.js-1735">1735</a>
<a href="#typeahead.bundle.js-1736">1736</a>
<a href="#typeahead.bundle.js-1737">1737</a>
<a href="#typeahead.bundle.js-1738">1738</a>
<a href="#typeahead.bundle.js-1739">1739</a>
<a href="#typeahead.bundle.js-1740">1740</a>
<a href="#typeahead.bundle.js-1741">1741</a>
<a href="#typeahead.bundle.js-1742">1742</a>
<a href="#typeahead.bundle.js-1743">1743</a>
<a href="#typeahead.bundle.js-1744">1744</a>
<a href="#typeahead.bundle.js-1745">1745</a>
<a href="#typeahead.bundle.js-1746">1746</a>
<a href="#typeahead.bundle.js-1747">1747</a>
<a href="#typeahead.bundle.js-1748">1748</a>
<a href="#typeahead.bundle.js-1749">1749</a>
<a href="#typeahead.bundle.js-1750">1750</a>
<a href="#typeahead.bundle.js-1751">1751</a>
<a href="#typeahead.bundle.js-1752">1752</a>
<a href="#typeahead.bundle.js-1753">1753</a>
<a href="#typeahead.bundle.js-1754">1754</a>
<a href="#typeahead.bundle.js-1755">1755</a>
<a href="#typeahead.bundle.js-1756">1756</a>
<a href="#typeahead.bundle.js-1757">1757</a>
<a href="#typeahead.bundle.js-1758">1758</a>
<a href="#typeahead.bundle.js-1759">1759</a>
<a href="#typeahead.bundle.js-1760">1760</a>
<a href="#typeahead.bundle.js-1761">1761</a>
<a href="#typeahead.bundle.js-1762">1762</a>
<a href="#typeahead.bundle.js-1763">1763</a>
<a href="#typeahead.bundle.js-1764">1764</a>
<a href="#typeahead.bundle.js-1765">1765</a>
<a href="#typeahead.bundle.js-1766">1766</a>
<a href="#typeahead.bundle.js-1767">1767</a>
<a href="#typeahead.bundle.js-1768">1768</a>
<a href="#typeahead.bundle.js-1769">1769</a>
<a href="#typeahead.bundle.js-1770">1770</a>
<a href="#typeahead.bundle.js-1771">1771</a>
<a href="#typeahead.bundle.js-1772">1772</a>
<a href="#typeahead.bundle.js-1773">1773</a>
<a href="#typeahead.bundle.js-1774">1774</a>
<a href="#typeahead.bundle.js-1775">1775</a>
<a href="#typeahead.bundle.js-1776">1776</a>
<a href="#typeahead.bundle.js-1777">1777</a>
<a href="#typeahead.bundle.js-1778">1778</a>
<a href="#typeahead.bundle.js-1779">1779</a>
<a href="#typeahead.bundle.js-1780">1780</a>
<a href="#typeahead.bundle.js-1781">1781</a>
<a href="#typeahead.bundle.js-1782">1782</a>
<a href="#typeahead.bundle.js-1783">1783</a>
<a href="#typeahead.bundle.js-1784">1784</a>
<a href="#typeahead.bundle.js-1785">1785</a>
<a href="#typeahead.bundle.js-1786">1786</a>
<a href="#typeahead.bundle.js-1787">1787</a>
<a href="#typeahead.bundle.js-1788">1788</a>
<a href="#typeahead.bundle.js-1789">1789</a>
<a href="#typeahead.bundle.js-1790">1790</a>
<a href="#typeahead.bundle.js-1791">1791</a>
<a href="#typeahead.bundle.js-1792">1792</a>
<a href="#typeahead.bundle.js-1793">1793</a>
<a href="#typeahead.bundle.js-1794">1794</a>
<a href="#typeahead.bundle.js-1795">1795</a>
<a href="#typeahead.bundle.js-1796">1796</a>
<a href="#typeahead.bundle.js-1797">1797</a>
<a href="#typeahead.bundle.js-1798">1798</a>
<a href="#typeahead.bundle.js-1799">1799</a>
<a href="#typeahead.bundle.js-1800">1800</a>
<a href="#typeahead.bundle.js-1801">1801</a>
<a href="#typeahead.bundle.js-1802">1802</a>
<a href="#typeahead.bundle.js-1803">1803</a>
<a href="#typeahead.bundle.js-1804">1804</a>
<a href="#typeahead.bundle.js-1805">1805</a>
<a href="#typeahead.bundle.js-1806">1806</a>
<a href="#typeahead.bundle.js-1807">1807</a>
<a href="#typeahead.bundle.js-1808">1808</a>
<a href="#typeahead.bundle.js-1809">1809</a>
<a href="#typeahead.bundle.js-1810">1810</a>
<a href="#typeahead.bundle.js-1811">1811</a>
<a href="#typeahead.bundle.js-1812">1812</a>
<a href="#typeahead.bundle.js-1813">1813</a>
<a href="#typeahead.bundle.js-1814">1814</a>
<a href="#typeahead.bundle.js-1815">1815</a>
<a href="#typeahead.bundle.js-1816">1816</a>
<a href="#typeahead.bundle.js-1817">1817</a>
<a href="#typeahead.bundle.js-1818">1818</a>
<a href="#typeahead.bundle.js-1819">1819</a>
<a href="#typeahead.bundle.js-1820">1820</a>
<a href="#typeahead.bundle.js-1821">1821</a>
<a href="#typeahead.bundle.js-1822">1822</a>
<a href="#typeahead.bundle.js-1823">1823</a>
<a href="#typeahead.bundle.js-1824">1824</a>
<a href="#typeahead.bundle.js-1825">1825</a>
<a href="#typeahead.bundle.js-1826">1826</a>
<a href="#typeahead.bundle.js-1827">1827</a>
<a href="#typeahead.bundle.js-1828">1828</a>
<a href="#typeahead.bundle.js-1829">1829</a>
<a href="#typeahead.bundle.js-1830">1830</a>
<a href="#typeahead.bundle.js-1831">1831</a>
<a href="#typeahead.bundle.js-1832">1832</a>
<a href="#typeahead.bundle.js-1833">1833</a>
<a href="#typeahead.bundle.js-1834">1834</a>
<a href="#typeahead.bundle.js-1835">1835</a>
<a href="#typeahead.bundle.js-1836">1836</a>
<a href="#typeahead.bundle.js-1837">1837</a>
<a href="#typeahead.bundle.js-1838">1838</a>
<a href="#typeahead.bundle.js-1839">1839</a>
<a href="#typeahead.bundle.js-1840">1840</a>
<a href="#typeahead.bundle.js-1841">1841</a>
<a href="#typeahead.bundle.js-1842">1842</a>
<a href="#typeahead.bundle.js-1843">1843</a>
<a href="#typeahead.bundle.js-1844">1844</a>
<a href="#typeahead.bundle.js-1845">1845</a>
<a href="#typeahead.bundle.js-1846">1846</a>
<a href="#typeahead.bundle.js-1847">1847</a>
<a href="#typeahead.bundle.js-1848">1848</a>
<a href="#typeahead.bundle.js-1849">1849</a>
<a href="#typeahead.bundle.js-1850">1850</a>
<a href="#typeahead.bundle.js-1851">1851</a>
<a href="#typeahead.bundle.js-1852">1852</a>
<a href="#typeahead.bundle.js-1853">1853</a>
<a href="#typeahead.bundle.js-1854">1854</a>
<a href="#typeahead.bundle.js-1855">1855</a>
<a href="#typeahead.bundle.js-1856">1856</a>
<a href="#typeahead.bundle.js-1857">1857</a>
<a href="#typeahead.bundle.js-1858">1858</a>
<a href="#typeahead.bundle.js-1859">1859</a>
<a href="#typeahead.bundle.js-1860">1860</a>
<a href="#typeahead.bundle.js-1861">1861</a>
<a href="#typeahead.bundle.js-1862">1862</a>
<a href="#typeahead.bundle.js-1863">1863</a>
<a href="#typeahead.bundle.js-1864">1864</a>
<a href="#typeahead.bundle.js-1865">1865</a>
<a href="#typeahead.bundle.js-1866">1866</a>
<a href="#typeahead.bundle.js-1867">1867</a>
<a href="#typeahead.bundle.js-1868">1868</a>
<a href="#typeahead.bundle.js-1869">1869</a>
<a href="#typeahead.bundle.js-1870">1870</a>
<a href="#typeahead.bundle.js-1871">1871</a>
<a href="#typeahead.bundle.js-1872">1872</a>
<a href="#typeahead.bundle.js-1873">1873</a>
<a href="#typeahead.bundle.js-1874">1874</a>
<a href="#typeahead.bundle.js-1875">1875</a>
<a href="#typeahead.bundle.js-1876">1876</a>
<a href="#typeahead.bundle.js-1877">1877</a>
<a href="#typeahead.bundle.js-1878">1878</a>
<a href="#typeahead.bundle.js-1879">1879</a>
<a href="#typeahead.bundle.js-1880">1880</a>
<a href="#typeahead.bundle.js-1881">1881</a>
<a href="#typeahead.bundle.js-1882">1882</a>
<a href="#typeahead.bundle.js-1883">1883</a>
<a href="#typeahead.bundle.js-1884">1884</a>
<a href="#typeahead.bundle.js-1885">1885</a>
<a href="#typeahead.bundle.js-1886">1886</a>
<a href="#typeahead.bundle.js-1887">1887</a>
<a href="#typeahead.bundle.js-1888">1888</a>
<a href="#typeahead.bundle.js-1889">1889</a>
<a href="#typeahead.bundle.js-1890">1890</a>
<a href="#typeahead.bundle.js-1891">1891</a>
<a href="#typeahead.bundle.js-1892">1892</a>
<a href="#typeahead.bundle.js-1893">1893</a>
<a href="#typeahead.bundle.js-1894">1894</a>
<a href="#typeahead.bundle.js-1895">1895</a>
<a href="#typeahead.bundle.js-1896">1896</a>
<a href="#typeahead.bundle.js-1897">1897</a>
<a href="#typeahead.bundle.js-1898">1898</a>
<a href="#typeahead.bundle.js-1899">1899</a>
<a href="#typeahead.bundle.js-1900">1900</a>
<a href="#typeahead.bundle.js-1901">1901</a>
<a href="#typeahead.bundle.js-1902">1902</a>
<a href="#typeahead.bundle.js-1903">1903</a>
<a href="#typeahead.bundle.js-1904">1904</a>
<a href="#typeahead.bundle.js-1905">1905</a>
<a href="#typeahead.bundle.js-1906">1906</a>
<a href="#typeahead.bundle.js-1907">1907</a>
<a href="#typeahead.bundle.js-1908">1908</a>
<a href="#typeahead.bundle.js-1909">1909</a>
<a href="#typeahead.bundle.js-1910">1910</a>
<a href="#typeahead.bundle.js-1911">1911</a>
<a href="#typeahead.bundle.js-1912">1912</a>
<a href="#typeahead.bundle.js-1913">1913</a>
<a href="#typeahead.bundle.js-1914">1914</a>
<a href="#typeahead.bundle.js-1915">1915</a>
<a href="#typeahead.bundle.js-1916">1916</a>
<a href="#typeahead.bundle.js-1917">1917</a>
<a href="#typeahead.bundle.js-1918">1918</a>
<a href="#typeahead.bundle.js-1919">1919</a>
<a href="#typeahead.bundle.js-1920">1920</a>
<a href="#typeahead.bundle.js-1921">1921</a>
<a href="#typeahead.bundle.js-1922">1922</a>
<a href="#typeahead.bundle.js-1923">1923</a>
<a href="#typeahead.bundle.js-1924">1924</a>
<a href="#typeahead.bundle.js-1925">1925</a>
<a href="#typeahead.bundle.js-1926">1926</a>
<a href="#typeahead.bundle.js-1927">1927</a>
<a href="#typeahead.bundle.js-1928">1928</a>
<a href="#typeahead.bundle.js-1929">1929</a>
<a href="#typeahead.bundle.js-1930">1930</a>
<a href="#typeahead.bundle.js-1931">1931</a>
<a href="#typeahead.bundle.js-1932">1932</a>
<a href="#typeahead.bundle.js-1933">1933</a>
<a href="#typeahead.bundle.js-1934">1934</a>
<a href="#typeahead.bundle.js-1935">1935</a>
<a href="#typeahead.bundle.js-1936">1936</a>
<a href="#typeahead.bundle.js-1937">1937</a>
<a href="#typeahead.bundle.js-1938">1938</a>
<a href="#typeahead.bundle.js-1939">1939</a>
<a href="#typeahead.bundle.js-1940">1940</a>
<a href="#typeahead.bundle.js-1941">1941</a>
<a href="#typeahead.bundle.js-1942">1942</a>
<a href="#typeahead.bundle.js-1943">1943</a>
<a href="#typeahead.bundle.js-1944">1944</a>
<a href="#typeahead.bundle.js-1945">1945</a>
<a href="#typeahead.bundle.js-1946">1946</a>
<a href="#typeahead.bundle.js-1947">1947</a>
<a href="#typeahead.bundle.js-1948">1948</a>
<a href="#typeahead.bundle.js-1949">1949</a>
<a href="#typeahead.bundle.js-1950">1950</a>
<a href="#typeahead.bundle.js-1951">1951</a>
<a href="#typeahead.bundle.js-1952">1952</a>
<a href="#typeahead.bundle.js-1953">1953</a>
<a href="#typeahead.bundle.js-1954">1954</a>
<a href="#typeahead.bundle.js-1955">1955</a>
<a href="#typeahead.bundle.js-1956">1956</a>
<a href="#typeahead.bundle.js-1957">1957</a>
<a href="#typeahead.bundle.js-1958">1958</a>
<a href="#typeahead.bundle.js-1959">1959</a>
<a href="#typeahead.bundle.js-1960">1960</a>
<a href="#typeahead.bundle.js-1961">1961</a>
<a href="#typeahead.bundle.js-1962">1962</a>
<a href="#typeahead.bundle.js-1963">1963</a>
<a href="#typeahead.bundle.js-1964">1964</a>
<a href="#typeahead.bundle.js-1965">1965</a>
<a href="#typeahead.bundle.js-1966">1966</a>
<a href="#typeahead.bundle.js-1967">1967</a>
<a href="#typeahead.bundle.js-1968">1968</a>
<a href="#typeahead.bundle.js-1969">1969</a>
<a href="#typeahead.bundle.js-1970">1970</a>
<a href="#typeahead.bundle.js-1971">1971</a>
<a href="#typeahead.bundle.js-1972">1972</a>
<a href="#typeahead.bundle.js-1973">1973</a>
<a href="#typeahead.bundle.js-1974">1974</a>
<a href="#typeahead.bundle.js-1975">1975</a>
<a href="#typeahead.bundle.js-1976">1976</a>
<a href="#typeahead.bundle.js-1977">1977</a>
<a href="#typeahead.bundle.js-1978">1978</a>
<a href="#typeahead.bundle.js-1979">1979</a>
<a href="#typeahead.bundle.js-1980">1980</a>
<a href="#typeahead.bundle.js-1981">1981</a>
<a href="#typeahead.bundle.js-1982">1982</a>
<a href="#typeahead.bundle.js-1983">1983</a>
<a href="#typeahead.bundle.js-1984">1984</a>
<a href="#typeahead.bundle.js-1985">1985</a>
<a href="#typeahead.bundle.js-1986">1986</a>
<a href="#typeahead.bundle.js-1987">1987</a>
<a href="#typeahead.bundle.js-1988">1988</a>
<a href="#typeahead.bundle.js-1989">1989</a>
<a href="#typeahead.bundle.js-1990">1990</a>
<a href="#typeahead.bundle.js-1991">1991</a>
<a href="#typeahead.bundle.js-1992">1992</a>
<a href="#typeahead.bundle.js-1993">1993</a>
<a href="#typeahead.bundle.js-1994">1994</a>
<a href="#typeahead.bundle.js-1995">1995</a>
<a href="#typeahead.bundle.js-1996">1996</a>
<a href="#typeahead.bundle.js-1997">1997</a>
<a href="#typeahead.bundle.js-1998">1998</a>
<a href="#typeahead.bundle.js-1999">1999</a>
<a href="#typeahead.bundle.js-2000">2000</a>
<a href="#typeahead.bundle.js-2001">2001</a>
<a href="#typeahead.bundle.js-2002">2002</a>
<a href="#typeahead.bundle.js-2003">2003</a>
<a href="#typeahead.bundle.js-2004">2004</a>
<a href="#typeahead.bundle.js-2005">2005</a>
<a href="#typeahead.bundle.js-2006">2006</a>
<a href="#typeahead.bundle.js-2007">2007</a>
<a href="#typeahead.bundle.js-2008">2008</a>
<a href="#typeahead.bundle.js-2009">2009</a>
<a href="#typeahead.bundle.js-2010">2010</a>
<a href="#typeahead.bundle.js-2011">2011</a>
<a href="#typeahead.bundle.js-2012">2012</a>
<a href="#typeahead.bundle.js-2013">2013</a>
<a href="#typeahead.bundle.js-2014">2014</a>
<a href="#typeahead.bundle.js-2015">2015</a>
<a href="#typeahead.bundle.js-2016">2016</a>
<a href="#typeahead.bundle.js-2017">2017</a>
<a href="#typeahead.bundle.js-2018">2018</a>
<a href="#typeahead.bundle.js-2019">2019</a>
<a href="#typeahead.bundle.js-2020">2020</a>
<a href="#typeahead.bundle.js-2021">2021</a>
<a href="#typeahead.bundle.js-2022">2022</a>
<a href="#typeahead.bundle.js-2023">2023</a>
<a href="#typeahead.bundle.js-2024">2024</a>
<a href="#typeahead.bundle.js-2025">2025</a>
<a href="#typeahead.bundle.js-2026">2026</a>
<a href="#typeahead.bundle.js-2027">2027</a>
<a href="#typeahead.bundle.js-2028">2028</a>
<a href="#typeahead.bundle.js-2029">2029</a>
<a href="#typeahead.bundle.js-2030">2030</a>
<a href="#typeahead.bundle.js-2031">2031</a>
<a href="#typeahead.bundle.js-2032">2032</a>
<a href="#typeahead.bundle.js-2033">2033</a>
<a href="#typeahead.bundle.js-2034">2034</a>
<a href="#typeahead.bundle.js-2035">2035</a>
<a href="#typeahead.bundle.js-2036">2036</a>
<a href="#typeahead.bundle.js-2037">2037</a>
<a href="#typeahead.bundle.js-2038">2038</a>
<a href="#typeahead.bundle.js-2039">2039</a>
<a href="#typeahead.bundle.js-2040">2040</a>
<a href="#typeahead.bundle.js-2041">2041</a>
<a href="#typeahead.bundle.js-2042">2042</a>
<a href="#typeahead.bundle.js-2043">2043</a>
<a href="#typeahead.bundle.js-2044">2044</a>
<a href="#typeahead.bundle.js-2045">2045</a>
<a href="#typeahead.bundle.js-2046">2046</a>
<a href="#typeahead.bundle.js-2047">2047</a>
<a href="#typeahead.bundle.js-2048">2048</a>
<a href="#typeahead.bundle.js-2049">2049</a>
<a href="#typeahead.bundle.js-2050">2050</a>
<a href="#typeahead.bundle.js-2051">2051</a>
<a href="#typeahead.bundle.js-2052">2052</a>
<a href="#typeahead.bundle.js-2053">2053</a>
<a href="#typeahead.bundle.js-2054">2054</a>
<a href="#typeahead.bundle.js-2055">2055</a>
<a href="#typeahead.bundle.js-2056">2056</a>
<a href="#typeahead.bundle.js-2057">2057</a>
<a href="#typeahead.bundle.js-2058">2058</a>
<a href="#typeahead.bundle.js-2059">2059</a>
<a href="#typeahead.bundle.js-2060">2060</a>
<a href="#typeahead.bundle.js-2061">2061</a>
<a href="#typeahead.bundle.js-2062">2062</a>
<a href="#typeahead.bundle.js-2063">2063</a>
<a href="#typeahead.bundle.js-2064">2064</a>
<a href="#typeahead.bundle.js-2065">2065</a>
<a href="#typeahead.bundle.js-2066">2066</a>
<a href="#typeahead.bundle.js-2067">2067</a>
<a href="#typeahead.bundle.js-2068">2068</a>
<a href="#typeahead.bundle.js-2069">2069</a>
<a href="#typeahead.bundle.js-2070">2070</a>
<a href="#typeahead.bundle.js-2071">2071</a>
<a href="#typeahead.bundle.js-2072">2072</a>
<a href="#typeahead.bundle.js-2073">2073</a>
<a href="#typeahead.bundle.js-2074">2074</a>
<a href="#typeahead.bundle.js-2075">2075</a>
<a href="#typeahead.bundle.js-2076">2076</a>
<a href="#typeahead.bundle.js-2077">2077</a>
<a href="#typeahead.bundle.js-2078">2078</a>
<a href="#typeahead.bundle.js-2079">2079</a>
<a href="#typeahead.bundle.js-2080">2080</a>
<a href="#typeahead.bundle.js-2081">2081</a>
<a href="#typeahead.bundle.js-2082">2082</a>
<a href="#typeahead.bundle.js-2083">2083</a>
<a href="#typeahead.bundle.js-2084">2084</a>
<a href="#typeahead.bundle.js-2085">2085</a>
<a href="#typeahead.bundle.js-2086">2086</a>
<a href="#typeahead.bundle.js-2087">2087</a>
<a href="#typeahead.bundle.js-2088">2088</a>
<a href="#typeahead.bundle.js-2089">2089</a>
<a href="#typeahead.bundle.js-2090">2090</a>
<a href="#typeahead.bundle.js-2091">2091</a>
<a href="#typeahead.bundle.js-2092">2092</a>
<a href="#typeahead.bundle.js-2093">2093</a>
<a href="#typeahead.bundle.js-2094">2094</a>
<a href="#typeahead.bundle.js-2095">2095</a>
<a href="#typeahead.bundle.js-2096">2096</a>
<a href="#typeahead.bundle.js-2097">2097</a>
<a href="#typeahead.bundle.js-2098">2098</a>
<a href="#typeahead.bundle.js-2099">2099</a>
<a href="#typeahead.bundle.js-2100">2100</a>
<a href="#typeahead.bundle.js-2101">2101</a>
<a href="#typeahead.bundle.js-2102">2102</a>
<a href="#typeahead.bundle.js-2103">2103</a>
<a href="#typeahead.bundle.js-2104">2104</a>
<a href="#typeahead.bundle.js-2105">2105</a>
<a href="#typeahead.bundle.js-2106">2106</a>
<a href="#typeahead.bundle.js-2107">2107</a>
<a href="#typeahead.bundle.js-2108">2108</a>
<a href="#typeahead.bundle.js-2109">2109</a>
<a href="#typeahead.bundle.js-2110">2110</a>
<a href="#typeahead.bundle.js-2111">2111</a>
<a href="#typeahead.bundle.js-2112">2112</a>
<a href="#typeahead.bundle.js-2113">2113</a>
<a href="#typeahead.bundle.js-2114">2114</a>
<a href="#typeahead.bundle.js-2115">2115</a>
<a href="#typeahead.bundle.js-2116">2116</a>
<a href="#typeahead.bundle.js-2117">2117</a>
<a href="#typeahead.bundle.js-2118">2118</a>
<a href="#typeahead.bundle.js-2119">2119</a>
<a href="#typeahead.bundle.js-2120">2120</a>
<a href="#typeahead.bundle.js-2121">2121</a>
<a href="#typeahead.bundle.js-2122">2122</a>
<a href="#typeahead.bundle.js-2123">2123</a>
<a href="#typeahead.bundle.js-2124">2124</a>
<a href="#typeahead.bundle.js-2125">2125</a>
<a href="#typeahead.bundle.js-2126">2126</a>
<a href="#typeahead.bundle.js-2127">2127</a>
<a href="#typeahead.bundle.js-2128">2128</a>
<a href="#typeahead.bundle.js-2129">2129</a>
<a href="#typeahead.bundle.js-2130">2130</a>
<a href="#typeahead.bundle.js-2131">2131</a>
<a href="#typeahead.bundle.js-2132">2132</a>
<a href="#typeahead.bundle.js-2133">2133</a>
<a href="#typeahead.bundle.js-2134">2134</a>
<a href="#typeahead.bundle.js-2135">2135</a>
<a href="#typeahead.bundle.js-2136">2136</a>
<a href="#typeahead.bundle.js-2137">2137</a>
<a href="#typeahead.bundle.js-2138">2138</a>
<a href="#typeahead.bundle.js-2139">2139</a>
<a href="#typeahead.bundle.js-2140">2140</a>
<a href="#typeahead.bundle.js-2141">2141</a>
<a href="#typeahead.bundle.js-2142">2142</a>
<a href="#typeahead.bundle.js-2143">2143</a>
<a href="#typeahead.bundle.js-2144">2144</a>
<a href="#typeahead.bundle.js-2145">2145</a>
<a href="#typeahead.bundle.js-2146">2146</a>
<a href="#typeahead.bundle.js-2147">2147</a>
<a href="#typeahead.bundle.js-2148">2148</a>
<a href="#typeahead.bundle.js-2149">2149</a>
<a href="#typeahead.bundle.js-2150">2150</a>
<a href="#typeahead.bundle.js-2151">2151</a>
<a href="#typeahead.bundle.js-2152">2152</a>
<a href="#typeahead.bundle.js-2153">2153</a>
<a href="#typeahead.bundle.js-2154">2154</a>
<a href="#typeahead.bundle.js-2155">2155</a>
<a href="#typeahead.bundle.js-2156">2156</a>
<a href="#typeahead.bundle.js-2157">2157</a>
<a href="#typeahead.bundle.js-2158">2158</a>
<a href="#typeahead.bundle.js-2159">2159</a>
<a href="#typeahead.bundle.js-2160">2160</a>
<a href="#typeahead.bundle.js-2161">2161</a>
<a href="#typeahead.bundle.js-2162">2162</a>
<a href="#typeahead.bundle.js-2163">2163</a>
<a href="#typeahead.bundle.js-2164">2164</a>
<a href="#typeahead.bundle.js-2165">2165</a>
<a href="#typeahead.bundle.js-2166">2166</a>
<a href="#typeahead.bundle.js-2167">2167</a>
<a href="#typeahead.bundle.js-2168">2168</a>
<a href="#typeahead.bundle.js-2169">2169</a>
<a href="#typeahead.bundle.js-2170">2170</a>
<a href="#typeahead.bundle.js-2171">2171</a>
<a href="#typeahead.bundle.js-2172">2172</a>
<a href="#typeahead.bundle.js-2173">2173</a>
<a href="#typeahead.bundle.js-2174">2174</a>
<a href="#typeahead.bundle.js-2175">2175</a>
<a href="#typeahead.bundle.js-2176">2176</a>
<a href="#typeahead.bundle.js-2177">2177</a>
<a href="#typeahead.bundle.js-2178">2178</a>
<a href="#typeahead.bundle.js-2179">2179</a>
<a href="#typeahead.bundle.js-2180">2180</a>
<a href="#typeahead.bundle.js-2181">2181</a>
<a href="#typeahead.bundle.js-2182">2182</a>
<a href="#typeahead.bundle.js-2183">2183</a>
<a href="#typeahead.bundle.js-2184">2184</a>
<a href="#typeahead.bundle.js-2185">2185</a>
<a href="#typeahead.bundle.js-2186">2186</a>
<a href="#typeahead.bundle.js-2187">2187</a>
<a href="#typeahead.bundle.js-2188">2188</a>
<a href="#typeahead.bundle.js-2189">2189</a>
<a href="#typeahead.bundle.js-2190">2190</a>
<a href="#typeahead.bundle.js-2191">2191</a>
<a href="#typeahead.bundle.js-2192">2192</a>
<a href="#typeahead.bundle.js-2193">2193</a>
<a href="#typeahead.bundle.js-2194">2194</a>
<a href="#typeahead.bundle.js-2195">2195</a>
<a href="#typeahead.bundle.js-2196">2196</a>
<a href="#typeahead.bundle.js-2197">2197</a>
<a href="#typeahead.bundle.js-2198">2198</a>
<a href="#typeahead.bundle.js-2199">2199</a>
<a href="#typeahead.bundle.js-2200">2200</a>
<a href="#typeahead.bundle.js-2201">2201</a>
<a href="#typeahead.bundle.js-2202">2202</a>
<a href="#typeahead.bundle.js-2203">2203</a>
<a href="#typeahead.bundle.js-2204">2204</a>
<a href="#typeahead.bundle.js-2205">2205</a>
<a href="#typeahead.bundle.js-2206">2206</a>
<a href="#typeahead.bundle.js-2207">2207</a>
<a href="#typeahead.bundle.js-2208">2208</a>
<a href="#typeahead.bundle.js-2209">2209</a>
<a href="#typeahead.bundle.js-2210">2210</a>
<a href="#typeahead.bundle.js-2211">2211</a>
<a href="#typeahead.bundle.js-2212">2212</a>
<a href="#typeahead.bundle.js-2213">2213</a>
<a href="#typeahead.bundle.js-2214">2214</a>
<a href="#typeahead.bundle.js-2215">2215</a>
<a href="#typeahead.bundle.js-2216">2216</a>
<a href="#typeahead.bundle.js-2217">2217</a>
<a href="#typeahead.bundle.js-2218">2218</a>
<a href="#typeahead.bundle.js-2219">2219</a>
<a href="#typeahead.bundle.js-2220">2220</a>
<a href="#typeahead.bundle.js-2221">2221</a>
<a href="#typeahead.bundle.js-2222">2222</a>
<a href="#typeahead.bundle.js-2223">2223</a>
<a href="#typeahead.bundle.js-2224">2224</a>
<a href="#typeahead.bundle.js-2225">2225</a>
<a href="#typeahead.bundle.js-2226">2226</a>
<a href="#typeahead.bundle.js-2227">2227</a>
<a href="#typeahead.bundle.js-2228">2228</a>
<a href="#typeahead.bundle.js-2229">2229</a>
<a href="#typeahead.bundle.js-2230">2230</a>
<a href="#typeahead.bundle.js-2231">2231</a>
<a href="#typeahead.bundle.js-2232">2232</a>
<a href="#typeahead.bundle.js-2233">2233</a>
<a href="#typeahead.bundle.js-2234">2234</a>
<a href="#typeahead.bundle.js-2235">2235</a>
<a href="#typeahead.bundle.js-2236">2236</a>
<a href="#typeahead.bundle.js-2237">2237</a>
<a href="#typeahead.bundle.js-2238">2238</a>
<a href="#typeahead.bundle.js-2239">2239</a>
<a href="#typeahead.bundle.js-2240">2240</a>
<a href="#typeahead.bundle.js-2241">2241</a>
<a href="#typeahead.bundle.js-2242">2242</a>
<a href="#typeahead.bundle.js-2243">2243</a>
<a href="#typeahead.bundle.js-2244">2244</a>
<a href="#typeahead.bundle.js-2245">2245</a>
<a href="#typeahead.bundle.js-2246">2246</a>
<a href="#typeahead.bundle.js-2247">2247</a>
<a href="#typeahead.bundle.js-2248">2248</a>
<a href="#typeahead.bundle.js-2249">2249</a>
<a href="#typeahead.bundle.js-2250">2250</a>
<a href="#typeahead.bundle.js-2251">2251</a>
<a href="#typeahead.bundle.js-2252">2252</a>
<a href="#typeahead.bundle.js-2253">2253</a>
<a href="#typeahead.bundle.js-2254">2254</a>
<a href="#typeahead.bundle.js-2255">2255</a>
<a href="#typeahead.bundle.js-2256">2256</a>
<a href="#typeahead.bundle.js-2257">2257</a>
<a href="#typeahead.bundle.js-2258">2258</a>
<a href="#typeahead.bundle.js-2259">2259</a>
<a href="#typeahead.bundle.js-2260">2260</a>
<a href="#typeahead.bundle.js-2261">2261</a>
<a href="#typeahead.bundle.js-2262">2262</a>
<a href="#typeahead.bundle.js-2263">2263</a>
<a href="#typeahead.bundle.js-2264">2264</a>
<a href="#typeahead.bundle.js-2265">2265</a>
<a href="#typeahead.bundle.js-2266">2266</a>
<a href="#typeahead.bundle.js-2267">2267</a>
<a href="#typeahead.bundle.js-2268">2268</a>
<a href="#typeahead.bundle.js-2269">2269</a>
<a href="#typeahead.bundle.js-2270">2270</a>
<a href="#typeahead.bundle.js-2271">2271</a>
<a href="#typeahead.bundle.js-2272">2272</a>
<a href="#typeahead.bundle.js-2273">2273</a>
<a href="#typeahead.bundle.js-2274">2274</a>
<a href="#typeahead.bundle.js-2275">2275</a>
<a href="#typeahead.bundle.js-2276">2276</a>
<a href="#typeahead.bundle.js-2277">2277</a>
<a href="#typeahead.bundle.js-2278">2278</a>
<a href="#typeahead.bundle.js-2279">2279</a>
<a href="#typeahead.bundle.js-2280">2280</a>
<a href="#typeahead.bundle.js-2281">2281</a>
<a href="#typeahead.bundle.js-2282">2282</a>
<a href="#typeahead.bundle.js-2283">2283</a>
<a href="#typeahead.bundle.js-2284">2284</a>
<a href="#typeahead.bundle.js-2285">2285</a>
<a href="#typeahead.bundle.js-2286">2286</a>
<a href="#typeahead.bundle.js-2287">2287</a>
<a href="#typeahead.bundle.js-2288">2288</a>
<a href="#typeahead.bundle.js-2289">2289</a>
<a href="#typeahead.bundle.js-2290">2290</a>
<a href="#typeahead.bundle.js-2291">2291</a>
<a href="#typeahead.bundle.js-2292">2292</a>
<a href="#typeahead.bundle.js-2293">2293</a>
<a href="#typeahead.bundle.js-2294">2294</a>
<a href="#typeahead.bundle.js-2295">2295</a>
<a href="#typeahead.bundle.js-2296">2296</a>
<a href="#typeahead.bundle.js-2297">2297</a>
<a href="#typeahead.bundle.js-2298">2298</a>
<a href="#typeahead.bundle.js-2299">2299</a>
<a href="#typeahead.bundle.js-2300">2300</a>
<a href="#typeahead.bundle.js-2301">2301</a>
<a href="#typeahead.bundle.js-2302">2302</a>
<a href="#typeahead.bundle.js-2303">2303</a>
<a href="#typeahead.bundle.js-2304">2304</a>
<a href="#typeahead.bundle.js-2305">2305</a>
<a href="#typeahead.bundle.js-2306">2306</a>
<a href="#typeahead.bundle.js-2307">2307</a>
<a href="#typeahead.bundle.js-2308">2308</a>
<a href="#typeahead.bundle.js-2309">2309</a>
<a href="#typeahead.bundle.js-2310">2310</a>
<a href="#typeahead.bundle.js-2311">2311</a>
<a href="#typeahead.bundle.js-2312">2312</a>
<a href="#typeahead.bundle.js-2313">2313</a>
<a href="#typeahead.bundle.js-2314">2314</a>
<a href="#typeahead.bundle.js-2315">2315</a>
<a href="#typeahead.bundle.js-2316">2316</a>
<a href="#typeahead.bundle.js-2317">2317</a>
<a href="#typeahead.bundle.js-2318">2318</a>
<a href="#typeahead.bundle.js-2319">2319</a>
<a href="#typeahead.bundle.js-2320">2320</a>
<a href="#typeahead.bundle.js-2321">2321</a>
<a href="#typeahead.bundle.js-2322">2322</a>
<a href="#typeahead.bundle.js-2323">2323</a>
<a href="#typeahead.bundle.js-2324">2324</a>
<a href="#typeahead.bundle.js-2325">2325</a>
<a href="#typeahead.bundle.js-2326">2326</a>
<a href="#typeahead.bundle.js-2327">2327</a>
<a href="#typeahead.bundle.js-2328">2328</a>
<a href="#typeahead.bundle.js-2329">2329</a>
<a href="#typeahead.bundle.js-2330">2330</a>
<a href="#typeahead.bundle.js-2331">2331</a>
<a href="#typeahead.bundle.js-2332">2332</a>
<a href="#typeahead.bundle.js-2333">2333</a>
<a href="#typeahead.bundle.js-2334">2334</a>
<a href="#typeahead.bundle.js-2335">2335</a>
<a href="#typeahead.bundle.js-2336">2336</a>
<a href="#typeahead.bundle.js-2337">2337</a>
<a href="#typeahead.bundle.js-2338">2338</a>
<a href="#typeahead.bundle.js-2339">2339</a>
<a href="#typeahead.bundle.js-2340">2340</a>
<a href="#typeahead.bundle.js-2341">2341</a>
<a href="#typeahead.bundle.js-2342">2342</a>
<a href="#typeahead.bundle.js-2343">2343</a>
<a href="#typeahead.bundle.js-2344">2344</a>
<a href="#typeahead.bundle.js-2345">2345</a>
<a href="#typeahead.bundle.js-2346">2346</a>
<a href="#typeahead.bundle.js-2347">2347</a>
<a href="#typeahead.bundle.js-2348">2348</a>
<a href="#typeahead.bundle.js-2349">2349</a>
<a href="#typeahead.bundle.js-2350">2350</a>
<a href="#typeahead.bundle.js-2351">2351</a>
<a href="#typeahead.bundle.js-2352">2352</a>
<a href="#typeahead.bundle.js-2353">2353</a>
<a href="#typeahead.bundle.js-2354">2354</a>
<a href="#typeahead.bundle.js-2355">2355</a>
<a href="#typeahead.bundle.js-2356">2356</a>
<a href="#typeahead.bundle.js-2357">2357</a>
<a href="#typeahead.bundle.js-2358">2358</a>
<a href="#typeahead.bundle.js-2359">2359</a>
<a href="#typeahead.bundle.js-2360">2360</a>
<a href="#typeahead.bundle.js-2361">2361</a>
<a href="#typeahead.bundle.js-2362">2362</a>
<a href="#typeahead.bundle.js-2363">2363</a>
<a href="#typeahead.bundle.js-2364">2364</a>
<a href="#typeahead.bundle.js-2365">2365</a>
<a href="#typeahead.bundle.js-2366">2366</a>
<a href="#typeahead.bundle.js-2367">2367</a>
<a href="#typeahead.bundle.js-2368">2368</a>
<a href="#typeahead.bundle.js-2369">2369</a>
<a href="#typeahead.bundle.js-2370">2370</a>
<a href="#typeahead.bundle.js-2371">2371</a>
<a href="#typeahead.bundle.js-2372">2372</a>
<a href="#typeahead.bundle.js-2373">2373</a>
<a href="#typeahead.bundle.js-2374">2374</a>
<a href="#typeahead.bundle.js-2375">2375</a>
<a href="#typeahead.bundle.js-2376">2376</a>
<a href="#typeahead.bundle.js-2377">2377</a>
<a href="#typeahead.bundle.js-2378">2378</a>
<a href="#typeahead.bundle.js-2379">2379</a>
<a href="#typeahead.bundle.js-2380">2380</a>
<a href="#typeahead.bundle.js-2381">2381</a>
<a href="#typeahead.bundle.js-2382">2382</a>
<a href="#typeahead.bundle.js-2383">2383</a>
<a href="#typeahead.bundle.js-2384">2384</a>
<a href="#typeahead.bundle.js-2385">2385</a>
<a href="#typeahead.bundle.js-2386">2386</a>
<a href="#typeahead.bundle.js-2387">2387</a>
<a href="#typeahead.bundle.js-2388">2388</a>
<a href="#typeahead.bundle.js-2389">2389</a>
<a href="#typeahead.bundle.js-2390">2390</a>
<a href="#typeahead.bundle.js-2391">2391</a>
<a href="#typeahead.bundle.js-2392">2392</a>
<a href="#typeahead.bundle.js-2393">2393</a>
<a href="#typeahead.bundle.js-2394">2394</a>
<a href="#typeahead.bundle.js-2395">2395</a>
<a href="#typeahead.bundle.js-2396">2396</a>
<a href="#typeahead.bundle.js-2397">2397</a>
<a href="#typeahead.bundle.js-2398">2398</a>
<a href="#typeahead.bundle.js-2399">2399</a>
<a href="#typeahead.bundle.js-2400">2400</a>
<a href="#typeahead.bundle.js-2401">2401</a>
<a href="#typeahead.bundle.js-2402">2402</a>
<a href="#typeahead.bundle.js-2403">2403</a>
<a href="#typeahead.bundle.js-2404">2404</a>
<a href="#typeahead.bundle.js-2405">2405</a>
<a href="#typeahead.bundle.js-2406">2406</a>
<a href="#typeahead.bundle.js-2407">2407</a>
<a href="#typeahead.bundle.js-2408">2408</a>
<a href="#typeahead.bundle.js-2409">2409</a>
<a href="#typeahead.bundle.js-2410">2410</a>
<a href="#typeahead.bundle.js-2411">2411</a>
<a href="#typeahead.bundle.js-2412">2412</a>
<a href="#typeahead.bundle.js-2413">2413</a>
<a href="#typeahead.bundle.js-2414">2414</a>
<a href="#typeahead.bundle.js-2415">2415</a>
<a href="#typeahead.bundle.js-2416">2416</a>
<a href="#typeahead.bundle.js-2417">2417</a>
<a href="#typeahead.bundle.js-2418">2418</a>
<a href="#typeahead.bundle.js-2419">2419</a>
<a href="#typeahead.bundle.js-2420">2420</a>
<a href="#typeahead.bundle.js-2421">2421</a>
<a href="#typeahead.bundle.js-2422">2422</a>
<a href="#typeahead.bundle.js-2423">2423</a>
<a href="#typeahead.bundle.js-2424">2424</a>
<a href="#typeahead.bundle.js-2425">2425</a>
<a href="#typeahead.bundle.js-2426">2426</a>
<a href="#typeahead.bundle.js-2427">2427</a>
<a href="#typeahead.bundle.js-2428">2428</a>
<a href="#typeahead.bundle.js-2429">2429</a>
<a href="#typeahead.bundle.js-2430">2430</a>
<a href="#typeahead.bundle.js-2431">2431</a>
<a href="#typeahead.bundle.js-2432">2432</a>
<a href="#typeahead.bundle.js-2433">2433</a>
<a href="#typeahead.bundle.js-2434">2434</a>
<a href="#typeahead.bundle.js-2435">2435</a>
<a href="#typeahead.bundle.js-2436">2436</a>
<a href="#typeahead.bundle.js-2437">2437</a>
<a href="#typeahead.bundle.js-2438">2438</a>
<a href="#typeahead.bundle.js-2439">2439</a>
<a href="#typeahead.bundle.js-2440">2440</a>
<a href="#typeahead.bundle.js-2441">2441</a>
<a href="#typeahead.bundle.js-2442">2442</a>
<a href="#typeahead.bundle.js-2443">2443</a>
<a href="#typeahead.bundle.js-2444">2444</a>
<a href="#typeahead.bundle.js-2445">2445</a>
<a href="#typeahead.bundle.js-2446">2446</a>
<a href="#typeahead.bundle.js-2447">2447</a>
<a href="#typeahead.bundle.js-2448">2448</a>
<a href="#typeahead.bundle.js-2449">2449</a>
<a href="#typeahead.bundle.js-2450">2450</a>
<a href="#typeahead.bundle.js-2451">2451</a></pre></div></td><td class="code"><div class="codehilite highlight"><pre><span></span><a name="typeahead.bundle.js-1"></a><span class="cm">/*!</span>
<a name="typeahead.bundle.js-2"></a><span class="cm"> * typeahead.js 0.11.1</span>
<a name="typeahead.bundle.js-3"></a><span class="cm"> * https://github.com/twitter/typeahead.js</span>
<a name="typeahead.bundle.js-4"></a><span class="cm"> * Copyright 2013-2015 Twitter, Inc. and other contributors; Licensed MIT</span>
<a name="typeahead.bundle.js-5"></a><span class="cm"> */</span>
<a name="typeahead.bundle.js-6"></a>
<a name="typeahead.bundle.js-7"></a><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">root</span><span class="p">,</span> <span class="nx">factory</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-8"></a>    <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">define</span> <span class="o">===</span> <span class="s2">&quot;function&quot;</span> <span class="o">&amp;&amp;</span> <span class="nx">define</span><span class="p">.</span><span class="nx">amd</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-9"></a>        <span class="nx">define</span><span class="p">(</span><span class="s2">&quot;bloodhound&quot;</span><span class="p">,</span> <span class="p">[</span> <span class="s2">&quot;jquery&quot;</span> <span class="p">],</span> <span class="kd">function</span><span class="p">(</span><span class="nx">a0</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-10"></a>            <span class="k">return</span> <span class="nx">root</span><span class="p">[</span><span class="s2">&quot;Bloodhound&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="nx">factory</span><span class="p">(</span><span class="nx">a0</span><span class="p">);</span>
<a name="typeahead.bundle.js-11"></a>        <span class="p">});</span>
<a name="typeahead.bundle.js-12"></a>    <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">exports</span> <span class="o">===</span> <span class="s2">&quot;object&quot;</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-13"></a>        <span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="nx">factory</span><span class="p">(</span><span class="nx">require</span><span class="p">(</span><span class="s2">&quot;jquery&quot;</span><span class="p">));</span>
<a name="typeahead.bundle.js-14"></a>    <span class="p">}</span> <span class="k">else</span> <span class="p">{</span>
<a name="typeahead.bundle.js-15"></a>        <span class="nx">root</span><span class="p">[</span><span class="s2">&quot;Bloodhound&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="nx">factory</span><span class="p">(</span><span class="nx">jQuery</span><span class="p">);</span>
<a name="typeahead.bundle.js-16"></a>    <span class="p">}</span>
<a name="typeahead.bundle.js-17"></a><span class="p">})(</span><span class="k">this</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">$</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-18"></a>    <span class="kd">var</span> <span class="nx">_</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-19"></a>        <span class="s2">&quot;use strict&quot;</span><span class="p">;</span>
<a name="typeahead.bundle.js-20"></a>        <span class="k">return</span> <span class="p">{</span>
<a name="typeahead.bundle.js-21"></a>            <span class="nx">isMsie</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-22"></a>                <span class="k">return</span> <span class="sr">/(msie|trident)/i</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">navigator</span><span class="p">.</span><span class="nx">userAgent</span><span class="p">)</span> <span class="o">?</span> <span class="nx">navigator</span><span class="p">.</span><span class="nx">userAgent</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/(msie |rv:)(\d+(.\d+)?)/i</span><span class="p">)[</span><span class="mi">2</span><span class="p">]</span> <span class="o">:</span> <span class="kc">false</span><span class="p">;</span>
<a name="typeahead.bundle.js-23"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-24"></a>            <span class="nx">isBlankString</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">str</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-25"></a>                <span class="k">return</span> <span class="o">!</span><span class="nx">str</span> <span class="o">||</span> <span class="sr">/^\s*$/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">str</span><span class="p">);</span>
<a name="typeahead.bundle.js-26"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-27"></a>            <span class="nx">escapeRegExChars</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">str</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-28"></a>                <span class="k">return</span> <span class="nx">str</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g</span><span class="p">,</span> <span class="s2">&quot;\\$&amp;&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-29"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-30"></a>            <span class="nx">isString</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-31"></a>                <span class="k">return</span> <span class="k">typeof</span> <span class="nx">obj</span> <span class="o">===</span> <span class="s2">&quot;string&quot;</span><span class="p">;</span>
<a name="typeahead.bundle.js-32"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-33"></a>            <span class="nx">isNumber</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-34"></a>                <span class="k">return</span> <span class="k">typeof</span> <span class="nx">obj</span> <span class="o">===</span> <span class="s2">&quot;number&quot;</span><span class="p">;</span>
<a name="typeahead.bundle.js-35"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-36"></a>            <span class="nx">isArray</span><span class="o">:</span> <span class="nx">$</span><span class="p">.</span><span class="nx">isArray</span><span class="p">,</span>
<a name="typeahead.bundle.js-37"></a>            <span class="nx">isFunction</span><span class="o">:</span> <span class="nx">$</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">,</span>
<a name="typeahead.bundle.js-38"></a>            <span class="nx">isObject</span><span class="o">:</span> <span class="nx">$</span><span class="p">.</span><span class="nx">isPlainObject</span><span class="p">,</span>
<a name="typeahead.bundle.js-39"></a>            <span class="nx">isUndefined</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-40"></a>                <span class="k">return</span> <span class="k">typeof</span> <span class="nx">obj</span> <span class="o">===</span> <span class="s2">&quot;undefined&quot;</span><span class="p">;</span>
<a name="typeahead.bundle.js-41"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-42"></a>            <span class="nx">isElement</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-43"></a>                <span class="k">return</span> <span class="o">!!</span><span class="p">(</span><span class="nx">obj</span> <span class="o">&amp;&amp;</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">===</span> <span class="mi">1</span><span class="p">);</span>
<a name="typeahead.bundle.js-44"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-45"></a>            <span class="nx">isJQuery</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-46"></a>                <span class="k">return</span> <span class="nx">obj</span> <span class="k">instanceof</span> <span class="nx">$</span><span class="p">;</span>
<a name="typeahead.bundle.js-47"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-48"></a>            <span class="nx">toStr</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">toStr</span><span class="p">(</span><span class="nx">s</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-49"></a>                <span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isUndefined</span><span class="p">(</span><span class="nx">s</span><span class="p">)</span> <span class="o">||</span> <span class="nx">s</span> <span class="o">===</span> <span class="kc">null</span> <span class="o">?</span> <span class="s2">&quot;&quot;</span> <span class="o">:</span> <span class="nx">s</span> <span class="o">+</span> <span class="s2">&quot;&quot;</span><span class="p">;</span>
<a name="typeahead.bundle.js-50"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-51"></a>            <span class="nx">bind</span><span class="o">:</span> <span class="nx">$</span><span class="p">.</span><span class="nx">proxy</span><span class="p">,</span>
<a name="typeahead.bundle.js-52"></a>            <span class="nx">each</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">collection</span><span class="p">,</span> <span class="nx">cb</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-53"></a>                <span class="nx">$</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">collection</span><span class="p">,</span> <span class="nx">reverseArgs</span><span class="p">);</span>
<a name="typeahead.bundle.js-54"></a>                <span class="kd">function</span> <span class="nx">reverseArgs</span><span class="p">(</span><span class="nx">index</span><span class="p">,</span> <span class="nx">value</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-55"></a>                    <span class="k">return</span> <span class="nx">cb</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">);</span>
<a name="typeahead.bundle.js-56"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-57"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-58"></a>            <span class="nx">map</span><span class="o">:</span> <span class="nx">$</span><span class="p">.</span><span class="nx">map</span><span class="p">,</span>
<a name="typeahead.bundle.js-59"></a>            <span class="nx">filter</span><span class="o">:</span> <span class="nx">$</span><span class="p">.</span><span class="nx">grep</span><span class="p">,</span>
<a name="typeahead.bundle.js-60"></a>            <span class="nx">every</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">test</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-61"></a>                <span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>
<a name="typeahead.bundle.js-62"></a>                <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-63"></a>                    <span class="k">return</span> <span class="nx">result</span><span class="p">;</span>
<a name="typeahead.bundle.js-64"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-65"></a>                <span class="nx">$</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">key</span><span class="p">,</span> <span class="nx">val</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-66"></a>                    <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="nx">result</span> <span class="o">=</span> <span class="nx">test</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span> <span class="nx">val</span><span class="p">,</span> <span class="nx">key</span><span class="p">,</span> <span class="nx">obj</span><span class="p">)))</span> <span class="p">{</span>
<a name="typeahead.bundle.js-67"></a>                        <span class="k">return</span> <span class="kc">false</span><span class="p">;</span>
<a name="typeahead.bundle.js-68"></a>                    <span class="p">}</span>
<a name="typeahead.bundle.js-69"></a>                <span class="p">});</span>
<a name="typeahead.bundle.js-70"></a>                <span class="k">return</span> <span class="o">!!</span><span class="nx">result</span><span class="p">;</span>
<a name="typeahead.bundle.js-71"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-72"></a>            <span class="nx">some</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">test</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-73"></a>                <span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span>
<a name="typeahead.bundle.js-74"></a>                <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-75"></a>                    <span class="k">return</span> <span class="nx">result</span><span class="p">;</span>
<a name="typeahead.bundle.js-76"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-77"></a>                <span class="nx">$</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">key</span><span class="p">,</span> <span class="nx">val</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-78"></a>                    <span class="k">if</span> <span class="p">(</span><span class="nx">result</span> <span class="o">=</span> <span class="nx">test</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span> <span class="nx">val</span><span class="p">,</span> <span class="nx">key</span><span class="p">,</span> <span class="nx">obj</span><span class="p">))</span> <span class="p">{</span>
<a name="typeahead.bundle.js-79"></a>                        <span class="k">return</span> <span class="kc">false</span><span class="p">;</span>
<a name="typeahead.bundle.js-80"></a>                    <span class="p">}</span>
<a name="typeahead.bundle.js-81"></a>                <span class="p">});</span>
<a name="typeahead.bundle.js-82"></a>                <span class="k">return</span> <span class="o">!!</span><span class="nx">result</span><span class="p">;</span>
<a name="typeahead.bundle.js-83"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-84"></a>            <span class="nx">mixin</span><span class="o">:</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">,</span>
<a name="typeahead.bundle.js-85"></a>            <span class="nx">identity</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">x</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-86"></a>                <span class="k">return</span> <span class="nx">x</span><span class="p">;</span>
<a name="typeahead.bundle.js-87"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-88"></a>            <span class="nx">clone</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-89"></a>                <span class="k">return</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="kc">true</span><span class="p">,</span> <span class="p">{},</span> <span class="nx">obj</span><span class="p">);</span>
<a name="typeahead.bundle.js-90"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-91"></a>            <span class="nx">getIdGenerator</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-92"></a>                <span class="kd">var</span> <span class="nx">counter</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
<a name="typeahead.bundle.js-93"></a>                <span class="k">return</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-94"></a>                    <span class="k">return</span> <span class="nx">counter</span><span class="o">++</span><span class="p">;</span>
<a name="typeahead.bundle.js-95"></a>                <span class="p">};</span>
<a name="typeahead.bundle.js-96"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-97"></a>            <span class="nx">templatify</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">templatify</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-98"></a>                <span class="k">return</span> <span class="nx">$</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="o">?</span> <span class="nx">obj</span> <span class="o">:</span> <span class="nx">template</span><span class="p">;</span>
<a name="typeahead.bundle.js-99"></a>                <span class="kd">function</span> <span class="nx">template</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-100"></a>                    <span class="k">return</span> <span class="nb">String</span><span class="p">(</span><span class="nx">obj</span><span class="p">);</span>
<a name="typeahead.bundle.js-101"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-102"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-103"></a>            <span class="nx">defer</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">fn</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-104"></a>                <span class="nx">setTimeout</span><span class="p">(</span><span class="nx">fn</span><span class="p">,</span> <span class="mi">0</span><span class="p">);</span>
<a name="typeahead.bundle.js-105"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-106"></a>            <span class="nx">debounce</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">func</span><span class="p">,</span> <span class="nx">wait</span><span class="p">,</span> <span class="nx">immediate</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-107"></a>                <span class="kd">var</span> <span class="nx">timeout</span><span class="p">,</span> <span class="nx">result</span><span class="p">;</span>
<a name="typeahead.bundle.js-108"></a>                <span class="k">return</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-109"></a>                    <span class="kd">var</span> <span class="nx">context</span> <span class="o">=</span> <span class="k">this</span><span class="p">,</span> <span class="nx">args</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">,</span> <span class="nx">later</span><span class="p">,</span> <span class="nx">callNow</span><span class="p">;</span>
<a name="typeahead.bundle.js-110"></a>                    <span class="nx">later</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-111"></a>                        <span class="nx">timeout</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span>
<a name="typeahead.bundle.js-112"></a>                        <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">immediate</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-113"></a>                            <span class="nx">result</span> <span class="o">=</span> <span class="nx">func</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">args</span><span class="p">);</span>
<a name="typeahead.bundle.js-114"></a>                        <span class="p">}</span>
<a name="typeahead.bundle.js-115"></a>                    <span class="p">};</span>
<a name="typeahead.bundle.js-116"></a>                    <span class="nx">callNow</span> <span class="o">=</span> <span class="nx">immediate</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">timeout</span><span class="p">;</span>
<a name="typeahead.bundle.js-117"></a>                    <span class="nx">clearTimeout</span><span class="p">(</span><span class="nx">timeout</span><span class="p">);</span>
<a name="typeahead.bundle.js-118"></a>                    <span class="nx">timeout</span> <span class="o">=</span> <span class="nx">setTimeout</span><span class="p">(</span><span class="nx">later</span><span class="p">,</span> <span class="nx">wait</span><span class="p">);</span>
<a name="typeahead.bundle.js-119"></a>                    <span class="k">if</span> <span class="p">(</span><span class="nx">callNow</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-120"></a>                        <span class="nx">result</span> <span class="o">=</span> <span class="nx">func</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">args</span><span class="p">);</span>
<a name="typeahead.bundle.js-121"></a>                    <span class="p">}</span>
<a name="typeahead.bundle.js-122"></a>                    <span class="k">return</span> <span class="nx">result</span><span class="p">;</span>
<a name="typeahead.bundle.js-123"></a>                <span class="p">};</span>
<a name="typeahead.bundle.js-124"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-125"></a>            <span class="nx">throttle</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">func</span><span class="p">,</span> <span class="nx">wait</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-126"></a>                <span class="kd">var</span> <span class="nx">context</span><span class="p">,</span> <span class="nx">args</span><span class="p">,</span> <span class="nx">timeout</span><span class="p">,</span> <span class="nx">result</span><span class="p">,</span> <span class="nx">previous</span><span class="p">,</span> <span class="nx">later</span><span class="p">;</span>
<a name="typeahead.bundle.js-127"></a>                <span class="nx">previous</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
<a name="typeahead.bundle.js-128"></a>                <span class="nx">later</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-129"></a>                    <span class="nx">previous</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">();</span>
<a name="typeahead.bundle.js-130"></a>                    <span class="nx">timeout</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span>
<a name="typeahead.bundle.js-131"></a>                    <span class="nx">result</span> <span class="o">=</span> <span class="nx">func</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">args</span><span class="p">);</span>
<a name="typeahead.bundle.js-132"></a>                <span class="p">};</span>
<a name="typeahead.bundle.js-133"></a>                <span class="k">return</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-134"></a>                    <span class="kd">var</span> <span class="nx">now</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">(),</span> <span class="nx">remaining</span> <span class="o">=</span> <span class="nx">wait</span> <span class="o">-</span> <span class="p">(</span><span class="nx">now</span> <span class="o">-</span> <span class="nx">previous</span><span class="p">);</span>
<a name="typeahead.bundle.js-135"></a>                    <span class="nx">context</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span>
<a name="typeahead.bundle.js-136"></a>                    <span class="nx">args</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">;</span>
<a name="typeahead.bundle.js-137"></a>                    <span class="k">if</span> <span class="p">(</span><span class="nx">remaining</span> <span class="o">&lt;=</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-138"></a>                        <span class="nx">clearTimeout</span><span class="p">(</span><span class="nx">timeout</span><span class="p">);</span>
<a name="typeahead.bundle.js-139"></a>                        <span class="nx">timeout</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span>
<a name="typeahead.bundle.js-140"></a>                        <span class="nx">previous</span> <span class="o">=</span> <span class="nx">now</span><span class="p">;</span>
<a name="typeahead.bundle.js-141"></a>                        <span class="nx">result</span> <span class="o">=</span> <span class="nx">func</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">args</span><span class="p">);</span>
<a name="typeahead.bundle.js-142"></a>                    <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">timeout</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-143"></a>                        <span class="nx">timeout</span> <span class="o">=</span> <span class="nx">setTimeout</span><span class="p">(</span><span class="nx">later</span><span class="p">,</span> <span class="nx">remaining</span><span class="p">);</span>
<a name="typeahead.bundle.js-144"></a>                    <span class="p">}</span>
<a name="typeahead.bundle.js-145"></a>                    <span class="k">return</span> <span class="nx">result</span><span class="p">;</span>
<a name="typeahead.bundle.js-146"></a>                <span class="p">};</span>
<a name="typeahead.bundle.js-147"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-148"></a>            <span class="nx">stringify</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-149"></a>                <span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isString</span><span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="o">?</span> <span class="nx">val</span> <span class="o">:</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">val</span><span class="p">);</span>
<a name="typeahead.bundle.js-150"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-151"></a>            <span class="nx">noop</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{}</span>
<a name="typeahead.bundle.js-152"></a>        <span class="p">};</span>
<a name="typeahead.bundle.js-153"></a>    <span class="p">}();</span>
<a name="typeahead.bundle.js-154"></a>    <span class="kd">var</span> <span class="nx">VERSION</span> <span class="o">=</span> <span class="s2">&quot;0.11.1&quot;</span><span class="p">;</span>
<a name="typeahead.bundle.js-155"></a>    <span class="kd">var</span> <span class="nx">tokenizers</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-156"></a>        <span class="s2">&quot;use strict&quot;</span><span class="p">;</span>
<a name="typeahead.bundle.js-157"></a>        <span class="k">return</span> <span class="p">{</span>
<a name="typeahead.bundle.js-158"></a>            <span class="nx">nonword</span><span class="o">:</span> <span class="nx">nonword</span><span class="p">,</span>
<a name="typeahead.bundle.js-159"></a>            <span class="nx">whitespace</span><span class="o">:</span> <span class="nx">whitespace</span><span class="p">,</span>
<a name="typeahead.bundle.js-160"></a>            <span class="nx">obj</span><span class="o">:</span> <span class="p">{</span>
<a name="typeahead.bundle.js-161"></a>                <span class="nx">nonword</span><span class="o">:</span> <span class="nx">getObjTokenizer</span><span class="p">(</span><span class="nx">nonword</span><span class="p">),</span>
<a name="typeahead.bundle.js-162"></a>                <span class="nx">whitespace</span><span class="o">:</span> <span class="nx">getObjTokenizer</span><span class="p">(</span><span class="nx">whitespace</span><span class="p">)</span>
<a name="typeahead.bundle.js-163"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-164"></a>        <span class="p">};</span>
<a name="typeahead.bundle.js-165"></a>        <span class="kd">function</span> <span class="nx">whitespace</span><span class="p">(</span><span class="nx">str</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-166"></a>            <span class="nx">str</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">toStr</span><span class="p">(</span><span class="nx">str</span><span class="p">);</span>
<a name="typeahead.bundle.js-167"></a>            <span class="k">return</span> <span class="nx">str</span> <span class="o">?</span> <span class="nx">str</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="sr">/\s+/</span><span class="p">)</span> <span class="o">:</span> <span class="p">[];</span>
<a name="typeahead.bundle.js-168"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-169"></a>        <span class="kd">function</span> <span class="nx">nonword</span><span class="p">(</span><span class="nx">str</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-170"></a>            <span class="nx">str</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">toStr</span><span class="p">(</span><span class="nx">str</span><span class="p">);</span>
<a name="typeahead.bundle.js-171"></a>            <span class="k">return</span> <span class="nx">str</span> <span class="o">?</span> <span class="nx">str</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="sr">/\W+/</span><span class="p">)</span> <span class="o">:</span> <span class="p">[];</span>
<a name="typeahead.bundle.js-172"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-173"></a>        <span class="kd">function</span> <span class="nx">getObjTokenizer</span><span class="p">(</span><span class="nx">tokenizer</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-174"></a>            <span class="k">return</span> <span class="kd">function</span> <span class="nx">setKey</span><span class="p">(</span><span class="nx">keys</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-175"></a>                <span class="nx">keys</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">keys</span><span class="p">)</span> <span class="o">?</span> <span class="nx">keys</span> <span class="o">:</span> <span class="p">[].</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">0</span><span class="p">);</span>
<a name="typeahead.bundle.js-176"></a>                <span class="k">return</span> <span class="kd">function</span> <span class="nx">tokenize</span><span class="p">(</span><span class="nx">o</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-177"></a>                    <span class="kd">var</span> <span class="nx">tokens</span> <span class="o">=</span> <span class="p">[];</span>
<a name="typeahead.bundle.js-178"></a>                    <span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">keys</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">k</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-179"></a>                        <span class="nx">tokens</span> <span class="o">=</span> <span class="nx">tokens</span><span class="p">.</span><span class="nx">concat</span><span class="p">(</span><span class="nx">tokenizer</span><span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">toStr</span><span class="p">(</span><span class="nx">o</span><span class="p">[</span><span class="nx">k</span><span class="p">])));</span>
<a name="typeahead.bundle.js-180"></a>                    <span class="p">});</span>
<a name="typeahead.bundle.js-181"></a>                    <span class="k">return</span> <span class="nx">tokens</span><span class="p">;</span>
<a name="typeahead.bundle.js-182"></a>                <span class="p">};</span>
<a name="typeahead.bundle.js-183"></a>            <span class="p">};</span>
<a name="typeahead.bundle.js-184"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-185"></a>    <span class="p">}();</span>
<a name="typeahead.bundle.js-186"></a>    <span class="kd">var</span> <span class="nx">LruCache</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-187"></a>        <span class="s2">&quot;use strict&quot;</span><span class="p">;</span>
<a name="typeahead.bundle.js-188"></a>        <span class="kd">function</span> <span class="nx">LruCache</span><span class="p">(</span><span class="nx">maxSize</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-189"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">maxSize</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isNumber</span><span class="p">(</span><span class="nx">maxSize</span><span class="p">)</span> <span class="o">?</span> <span class="nx">maxSize</span> <span class="o">:</span> <span class="mi">100</span><span class="p">;</span>
<a name="typeahead.bundle.js-190"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">reset</span><span class="p">();</span>
<a name="typeahead.bundle.js-191"></a>            <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">maxSize</span> <span class="o">&lt;=</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-192"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">set</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">get</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">noop</span><span class="p">;</span>
<a name="typeahead.bundle.js-193"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-194"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-195"></a>        <span class="nx">_</span><span class="p">.</span><span class="nx">mixin</span><span class="p">(</span><span class="nx">LruCache</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span> <span class="p">{</span>
<a name="typeahead.bundle.js-196"></a>            <span class="nx">set</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">set</span><span class="p">(</span><span class="nx">key</span><span class="p">,</span> <span class="nx">val</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-197"></a>                <span class="kd">var</span> <span class="nx">tailItem</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">list</span><span class="p">.</span><span class="nx">tail</span><span class="p">,</span> <span class="nx">node</span><span class="p">;</span>
<a name="typeahead.bundle.js-198"></a>                <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">size</span> <span class="o">&gt;=</span> <span class="k">this</span><span class="p">.</span><span class="nx">maxSize</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-199"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">list</span><span class="p">.</span><span class="nx">remove</span><span class="p">(</span><span class="nx">tailItem</span><span class="p">);</span>
<a name="typeahead.bundle.js-200"></a>                    <span class="k">delete</span> <span class="k">this</span><span class="p">.</span><span class="nx">hash</span><span class="p">[</span><span class="nx">tailItem</span><span class="p">.</span><span class="nx">key</span><span class="p">];</span>
<a name="typeahead.bundle.js-201"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">size</span><span class="o">--</span><span class="p">;</span>
<a name="typeahead.bundle.js-202"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-203"></a>                <span class="k">if</span> <span class="p">(</span><span class="nx">node</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">hash</span><span class="p">[</span><span class="nx">key</span><span class="p">])</span> <span class="p">{</span>
<a name="typeahead.bundle.js-204"></a>                    <span class="nx">node</span><span class="p">.</span><span class="nx">val</span> <span class="o">=</span> <span class="nx">val</span><span class="p">;</span>
<a name="typeahead.bundle.js-205"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">list</span><span class="p">.</span><span class="nx">moveToFront</span><span class="p">(</span><span class="nx">node</span><span class="p">);</span>
<a name="typeahead.bundle.js-206"></a>                <span class="p">}</span> <span class="k">else</span> <span class="p">{</span>
<a name="typeahead.bundle.js-207"></a>                    <span class="nx">node</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Node</span><span class="p">(</span><span class="nx">key</span><span class="p">,</span> <span class="nx">val</span><span class="p">);</span>
<a name="typeahead.bundle.js-208"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">list</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span><span class="nx">node</span><span class="p">);</span>
<a name="typeahead.bundle.js-209"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">hash</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">node</span><span class="p">;</span>
<a name="typeahead.bundle.js-210"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">size</span><span class="o">++</span><span class="p">;</span>
<a name="typeahead.bundle.js-211"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-212"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-213"></a>            <span class="nx">get</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">get</span><span class="p">(</span><span class="nx">key</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-214"></a>                <span class="kd">var</span> <span class="nx">node</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">hash</span><span class="p">[</span><span class="nx">key</span><span class="p">];</span>
<a name="typeahead.bundle.js-215"></a>                <span class="k">if</span> <span class="p">(</span><span class="nx">node</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-216"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">list</span><span class="p">.</span><span class="nx">moveToFront</span><span class="p">(</span><span class="nx">node</span><span class="p">);</span>
<a name="typeahead.bundle.js-217"></a>                    <span class="k">return</span> <span class="nx">node</span><span class="p">.</span><span class="nx">val</span><span class="p">;</span>
<a name="typeahead.bundle.js-218"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-219"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-220"></a>            <span class="nx">reset</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">reset</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-221"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">size</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
<a name="typeahead.bundle.js-222"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">hash</span> <span class="o">=</span> <span class="p">{};</span>
<a name="typeahead.bundle.js-223"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">list</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">List</span><span class="p">();</span>
<a name="typeahead.bundle.js-224"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-225"></a>        <span class="p">});</span>
<a name="typeahead.bundle.js-226"></a>        <span class="kd">function</span> <span class="nx">List</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-227"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">head</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">tail</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span>
<a name="typeahead.bundle.js-228"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-229"></a>        <span class="nx">_</span><span class="p">.</span><span class="nx">mixin</span><span class="p">(</span><span class="nx">List</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span> <span class="p">{</span>
<a name="typeahead.bundle.js-230"></a>            <span class="nx">add</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">add</span><span class="p">(</span><span class="nx">node</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-231"></a>                <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">head</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-232"></a>                    <span class="nx">node</span><span class="p">.</span><span class="nx">next</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">head</span><span class="p">;</span>
<a name="typeahead.bundle.js-233"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">head</span><span class="p">.</span><span class="nx">prev</span> <span class="o">=</span> <span class="nx">node</span><span class="p">;</span>
<a name="typeahead.bundle.js-234"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-235"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">head</span> <span class="o">=</span> <span class="nx">node</span><span class="p">;</span>
<a name="typeahead.bundle.js-236"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">tail</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">tail</span> <span class="o">||</span> <span class="nx">node</span><span class="p">;</span>
<a name="typeahead.bundle.js-237"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-238"></a>            <span class="nx">remove</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">remove</span><span class="p">(</span><span class="nx">node</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-239"></a>                <span class="nx">node</span><span class="p">.</span><span class="nx">prev</span> <span class="o">?</span> <span class="nx">node</span><span class="p">.</span><span class="nx">prev</span><span class="p">.</span><span class="nx">next</span> <span class="o">=</span> <span class="nx">node</span><span class="p">.</span><span class="nx">next</span> <span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">head</span> <span class="o">=</span> <span class="nx">node</span><span class="p">.</span><span class="nx">next</span><span class="p">;</span>
<a name="typeahead.bundle.js-240"></a>                <span class="nx">node</span><span class="p">.</span><span class="nx">next</span> <span class="o">?</span> <span class="nx">node</span><span class="p">.</span><span class="nx">next</span><span class="p">.</span><span class="nx">prev</span> <span class="o">=</span> <span class="nx">node</span><span class="p">.</span><span class="nx">prev</span> <span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">tail</span> <span class="o">=</span> <span class="nx">node</span><span class="p">.</span><span class="nx">prev</span><span class="p">;</span>
<a name="typeahead.bundle.js-241"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-242"></a>            <span class="nx">moveToFront</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">node</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-243"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">remove</span><span class="p">(</span><span class="nx">node</span><span class="p">);</span>
<a name="typeahead.bundle.js-244"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span><span class="nx">node</span><span class="p">);</span>
<a name="typeahead.bundle.js-245"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-246"></a>        <span class="p">});</span>
<a name="typeahead.bundle.js-247"></a>        <span class="kd">function</span> <span class="nx">Node</span><span class="p">(</span><span class="nx">key</span><span class="p">,</span> <span class="nx">val</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-248"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">key</span> <span class="o">=</span> <span class="nx">key</span><span class="p">;</span>
<a name="typeahead.bundle.js-249"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">val</span> <span class="o">=</span> <span class="nx">val</span><span class="p">;</span>
<a name="typeahead.bundle.js-250"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">prev</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">next</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span>
<a name="typeahead.bundle.js-251"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-252"></a>        <span class="k">return</span> <span class="nx">LruCache</span><span class="p">;</span>
<a name="typeahead.bundle.js-253"></a>    <span class="p">}();</span>
<a name="typeahead.bundle.js-254"></a>    <span class="kd">var</span> <span class="nx">PersistentStorage</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-255"></a>        <span class="s2">&quot;use strict&quot;</span><span class="p">;</span>
<a name="typeahead.bundle.js-256"></a>        <span class="kd">var</span> <span class="nx">LOCAL_STORAGE</span><span class="p">;</span>
<a name="typeahead.bundle.js-257"></a>        <span class="k">try</span> <span class="p">{</span>
<a name="typeahead.bundle.js-258"></a>            <span class="nx">LOCAL_STORAGE</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">;</span>
<a name="typeahead.bundle.js-259"></a>            <span class="nx">LOCAL_STORAGE</span><span class="p">.</span><span class="nx">setItem</span><span class="p">(</span><span class="s2">&quot;~~~&quot;</span><span class="p">,</span> <span class="s2">&quot;!&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-260"></a>            <span class="nx">LOCAL_STORAGE</span><span class="p">.</span><span class="nx">removeItem</span><span class="p">(</span><span class="s2">&quot;~~~&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-261"></a>        <span class="p">}</span> <span class="k">catch</span> <span class="p">(</span><span class="nx">err</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-262"></a>            <span class="nx">LOCAL_STORAGE</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span>
<a name="typeahead.bundle.js-263"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-264"></a>        <span class="kd">function</span> <span class="nx">PersistentStorage</span><span class="p">(</span><span class="nx">namespace</span><span class="p">,</span> <span class="nx">override</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-265"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">prefix</span> <span class="o">=</span> <span class="p">[</span> <span class="s2">&quot;__&quot;</span><span class="p">,</span> <span class="nx">namespace</span><span class="p">,</span> <span class="s2">&quot;__&quot;</span> <span class="p">].</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-266"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">ttlKey</span> <span class="o">=</span> <span class="s2">&quot;__ttl__&quot;</span><span class="p">;</span>
<a name="typeahead.bundle.js-267"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">keyMatcher</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="s2">&quot;^&quot;</span> <span class="o">+</span> <span class="nx">_</span><span class="p">.</span><span class="nx">escapeRegExChars</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">prefix</span><span class="p">));</span>
<a name="typeahead.bundle.js-268"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">ls</span> <span class="o">=</span> <span class="nx">override</span> <span class="o">||</span> <span class="nx">LOCAL_STORAGE</span><span class="p">;</span>
<a name="typeahead.bundle.js-269"></a>            <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">ls</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">_noop</span><span class="p">();</span>
<a name="typeahead.bundle.js-270"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-271"></a>        <span class="nx">_</span><span class="p">.</span><span class="nx">mixin</span><span class="p">(</span><span class="nx">PersistentStorage</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span> <span class="p">{</span>
<a name="typeahead.bundle.js-272"></a>            <span class="nx">_prefix</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">key</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-273"></a>                <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">prefix</span> <span class="o">+</span> <span class="nx">key</span><span class="p">;</span>
<a name="typeahead.bundle.js-274"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-275"></a>            <span class="nx">_ttlKey</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">key</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-276"></a>                <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">_prefix</span><span class="p">(</span><span class="nx">key</span><span class="p">)</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">ttlKey</span><span class="p">;</span>
<a name="typeahead.bundle.js-277"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-278"></a>            <span class="nx">_noop</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-279"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">get</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">set</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">remove</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">clear</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">isExpired</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">noop</span><span class="p">;</span>
<a name="typeahead.bundle.js-280"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-281"></a>            <span class="nx">_safeSet</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">key</span><span class="p">,</span> <span class="nx">val</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-282"></a>                <span class="k">try</span> <span class="p">{</span>
<a name="typeahead.bundle.js-283"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">ls</span><span class="p">.</span><span class="nx">setItem</span><span class="p">(</span><span class="nx">key</span><span class="p">,</span> <span class="nx">val</span><span class="p">);</span>
<a name="typeahead.bundle.js-284"></a>                <span class="p">}</span> <span class="k">catch</span> <span class="p">(</span><span class="nx">err</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-285"></a>                    <span class="k">if</span> <span class="p">(</span><span class="nx">err</span><span class="p">.</span><span class="nx">name</span> <span class="o">===</span> <span class="s2">&quot;QuotaExceededError&quot;</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-286"></a>                        <span class="k">this</span><span class="p">.</span><span class="nx">clear</span><span class="p">();</span>
<a name="typeahead.bundle.js-287"></a>                        <span class="k">this</span><span class="p">.</span><span class="nx">_noop</span><span class="p">();</span>
<a name="typeahead.bundle.js-288"></a>                    <span class="p">}</span>
<a name="typeahead.bundle.js-289"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-290"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-291"></a>            <span class="nx">get</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">key</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-292"></a>                <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">isExpired</span><span class="p">(</span><span class="nx">key</span><span class="p">))</span> <span class="p">{</span>
<a name="typeahead.bundle.js-293"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">remove</span><span class="p">(</span><span class="nx">key</span><span class="p">);</span>
<a name="typeahead.bundle.js-294"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-295"></a>                <span class="k">return</span> <span class="nx">decode</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">ls</span><span class="p">.</span><span class="nx">getItem</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_prefix</span><span class="p">(</span><span class="nx">key</span><span class="p">)));</span>
<a name="typeahead.bundle.js-296"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-297"></a>            <span class="nx">set</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">key</span><span class="p">,</span> <span class="nx">val</span><span class="p">,</span> <span class="nx">ttl</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-298"></a>                <span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isNumber</span><span class="p">(</span><span class="nx">ttl</span><span class="p">))</span> <span class="p">{</span>
<a name="typeahead.bundle.js-299"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">_safeSet</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_ttlKey</span><span class="p">(</span><span class="nx">key</span><span class="p">),</span> <span class="nx">encode</span><span class="p">(</span><span class="nx">now</span><span class="p">()</span> <span class="o">+</span> <span class="nx">ttl</span><span class="p">));</span>
<a name="typeahead.bundle.js-300"></a>                <span class="p">}</span> <span class="k">else</span> <span class="p">{</span>
<a name="typeahead.bundle.js-301"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">ls</span><span class="p">.</span><span class="nx">removeItem</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_ttlKey</span><span class="p">(</span><span class="nx">key</span><span class="p">));</span>
<a name="typeahead.bundle.js-302"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-303"></a>                <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">_safeSet</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_prefix</span><span class="p">(</span><span class="nx">key</span><span class="p">),</span> <span class="nx">encode</span><span class="p">(</span><span class="nx">val</span><span class="p">));</span>
<a name="typeahead.bundle.js-304"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-305"></a>            <span class="nx">remove</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">key</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-306"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">ls</span><span class="p">.</span><span class="nx">removeItem</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_ttlKey</span><span class="p">(</span><span class="nx">key</span><span class="p">));</span>
<a name="typeahead.bundle.js-307"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">ls</span><span class="p">.</span><span class="nx">removeItem</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_prefix</span><span class="p">(</span><span class="nx">key</span><span class="p">));</span>
<a name="typeahead.bundle.js-308"></a>                <span class="k">return</span> <span class="k">this</span><span class="p">;</span>
<a name="typeahead.bundle.js-309"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-310"></a>            <span class="nx">clear</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-311"></a>                <span class="kd">var</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">keys</span> <span class="o">=</span> <span class="nx">gatherMatchingKeys</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">keyMatcher</span><span class="p">);</span>
<a name="typeahead.bundle.js-312"></a>                <span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="nx">keys</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">--</span><span class="p">;</span> <span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-313"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">remove</span><span class="p">(</span><span class="nx">keys</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span>
<a name="typeahead.bundle.js-314"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-315"></a>                <span class="k">return</span> <span class="k">this</span><span class="p">;</span>
<a name="typeahead.bundle.js-316"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-317"></a>            <span class="nx">isExpired</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">key</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-318"></a>                <span class="kd">var</span> <span class="nx">ttl</span> <span class="o">=</span> <span class="nx">decode</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">ls</span><span class="p">.</span><span class="nx">getItem</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_ttlKey</span><span class="p">(</span><span class="nx">key</span><span class="p">)));</span>
<a name="typeahead.bundle.js-319"></a>                <span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isNumber</span><span class="p">(</span><span class="nx">ttl</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">now</span><span class="p">()</span> <span class="o">&gt;</span> <span class="nx">ttl</span> <span class="o">?</span> <span class="kc">true</span> <span class="o">:</span> <span class="kc">false</span><span class="p">;</span>
<a name="typeahead.bundle.js-320"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-321"></a>        <span class="p">});</span>
<a name="typeahead.bundle.js-322"></a>        <span class="k">return</span> <span class="nx">PersistentStorage</span><span class="p">;</span>
<a name="typeahead.bundle.js-323"></a>        <span class="kd">function</span> <span class="nx">now</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-324"></a>            <span class="k">return</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">().</span><span class="nx">getTime</span><span class="p">();</span>
<a name="typeahead.bundle.js-325"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-326"></a>        <span class="kd">function</span> <span class="nx">encode</span><span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-327"></a>            <span class="k">return</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isUndefined</span><span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="o">?</span> <span class="kc">null</span> <span class="o">:</span> <span class="nx">val</span><span class="p">);</span>
<a name="typeahead.bundle.js-328"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-329"></a>        <span class="kd">function</span> <span class="nx">decode</span><span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-330"></a>            <span class="k">return</span> <span class="nx">$</span><span class="p">.</span><span class="nx">parseJSON</span><span class="p">(</span><span class="nx">val</span><span class="p">);</span>
<a name="typeahead.bundle.js-331"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-332"></a>        <span class="kd">function</span> <span class="nx">gatherMatchingKeys</span><span class="p">(</span><span class="nx">keyMatcher</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-333"></a>            <span class="kd">var</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">key</span><span class="p">,</span> <span class="nx">keys</span> <span class="o">=</span> <span class="p">[],</span> <span class="nx">len</span> <span class="o">=</span> <span class="nx">LOCAL_STORAGE</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span>
<a name="typeahead.bundle.js-334"></a>            <span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">len</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-335"></a>                <span class="k">if</span> <span class="p">((</span><span class="nx">key</span> <span class="o">=</span> <span class="nx">LOCAL_STORAGE</span><span class="p">.</span><span class="nx">key</span><span class="p">(</span><span class="nx">i</span><span class="p">)).</span><span class="nx">match</span><span class="p">(</span><span class="nx">keyMatcher</span><span class="p">))</span> <span class="p">{</span>
<a name="typeahead.bundle.js-336"></a>                    <span class="nx">keys</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">key</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">keyMatcher</span><span class="p">,</span> <span class="s2">&quot;&quot;</span><span class="p">));</span>
<a name="typeahead.bundle.js-337"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-338"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-339"></a>            <span class="k">return</span> <span class="nx">keys</span><span class="p">;</span>
<a name="typeahead.bundle.js-340"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-341"></a>    <span class="p">}();</span>
<a name="typeahead.bundle.js-342"></a>    <span class="kd">var</span> <span class="nx">Transport</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-343"></a>        <span class="s2">&quot;use strict&quot;</span><span class="p">;</span>
<a name="typeahead.bundle.js-344"></a>        <span class="kd">var</span> <span class="nx">pendingRequestsCount</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">pendingRequests</span> <span class="o">=</span> <span class="p">{},</span> <span class="nx">maxPendingRequests</span> <span class="o">=</span> <span class="mi">6</span><span class="p">,</span> <span class="nx">sharedCache</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">LruCache</span><span class="p">(</span><span class="mi">10</span><span class="p">);</span>
<a name="typeahead.bundle.js-345"></a>        <span class="kd">function</span> <span class="nx">Transport</span><span class="p">(</span><span class="nx">o</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-346"></a>            <span class="nx">o</span> <span class="o">=</span> <span class="nx">o</span> <span class="o">||</span> <span class="p">{};</span>
<a name="typeahead.bundle.js-347"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">cancelled</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span>
<a name="typeahead.bundle.js-348"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">lastReq</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span>
<a name="typeahead.bundle.js-349"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">_send</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">transport</span><span class="p">;</span>
<a name="typeahead.bundle.js-350"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">_get</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">limiter</span> <span class="o">?</span> <span class="nx">o</span><span class="p">.</span><span class="nx">limiter</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_get</span><span class="p">)</span> <span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">_get</span><span class="p">;</span>
<a name="typeahead.bundle.js-351"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">_cache</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">cache</span> <span class="o">===</span> <span class="kc">false</span> <span class="o">?</span> <span class="k">new</span> <span class="nx">LruCache</span><span class="p">(</span><span class="mi">0</span><span class="p">)</span> <span class="o">:</span> <span class="nx">sharedCache</span><span class="p">;</span>
<a name="typeahead.bundle.js-352"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-353"></a>        <span class="nx">Transport</span><span class="p">.</span><span class="nx">setMaxPendingRequests</span> <span class="o">=</span> <span class="kd">function</span> <span class="nx">setMaxPendingRequests</span><span class="p">(</span><span class="nx">num</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-354"></a>            <span class="nx">maxPendingRequests</span> <span class="o">=</span> <span class="nx">num</span><span class="p">;</span>
<a name="typeahead.bundle.js-355"></a>        <span class="p">};</span>
<a name="typeahead.bundle.js-356"></a>        <span class="nx">Transport</span><span class="p">.</span><span class="nx">resetCache</span> <span class="o">=</span> <span class="kd">function</span> <span class="nx">resetCache</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-357"></a>            <span class="nx">sharedCache</span><span class="p">.</span><span class="nx">reset</span><span class="p">();</span>
<a name="typeahead.bundle.js-358"></a>        <span class="p">};</span>
<a name="typeahead.bundle.js-359"></a>        <span class="nx">_</span><span class="p">.</span><span class="nx">mixin</span><span class="p">(</span><span class="nx">Transport</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span> <span class="p">{</span>
<a name="typeahead.bundle.js-360"></a>            <span class="nx">_fingerprint</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">fingerprint</span><span class="p">(</span><span class="nx">o</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-361"></a>                <span class="nx">o</span> <span class="o">=</span> <span class="nx">o</span> <span class="o">||</span> <span class="p">{};</span>
<a name="typeahead.bundle.js-362"></a>                <span class="k">return</span> <span class="nx">o</span><span class="p">.</span><span class="nx">url</span> <span class="o">+</span> <span class="nx">o</span><span class="p">.</span><span class="nx">type</span> <span class="o">+</span> <span class="nx">$</span><span class="p">.</span><span class="nx">param</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">data</span> <span class="o">||</span> <span class="p">{});</span>
<a name="typeahead.bundle.js-363"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-364"></a>            <span class="nx">_get</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">o</span><span class="p">,</span> <span class="nx">cb</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-365"></a>                <span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span><span class="p">,</span> <span class="nx">fingerprint</span><span class="p">,</span> <span class="nx">jqXhr</span><span class="p">;</span>
<a name="typeahead.bundle.js-366"></a>                <span class="nx">fingerprint</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_fingerprint</span><span class="p">(</span><span class="nx">o</span><span class="p">);</span>
<a name="typeahead.bundle.js-367"></a>                <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">cancelled</span> <span class="o">||</span> <span class="nx">fingerprint</span> <span class="o">!==</span> <span class="k">this</span><span class="p">.</span><span class="nx">lastReq</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-368"></a>                    <span class="k">return</span><span class="p">;</span>
<a name="typeahead.bundle.js-369"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-370"></a>                <span class="k">if</span> <span class="p">(</span><span class="nx">jqXhr</span> <span class="o">=</span> <span class="nx">pendingRequests</span><span class="p">[</span><span class="nx">fingerprint</span><span class="p">])</span> <span class="p">{</span>
<a name="typeahead.bundle.js-371"></a>                    <span class="nx">jqXhr</span><span class="p">.</span><span class="nx">done</span><span class="p">(</span><span class="nx">done</span><span class="p">).</span><span class="nx">fail</span><span class="p">(</span><span class="nx">fail</span><span class="p">);</span>
<a name="typeahead.bundle.js-372"></a>                <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">pendingRequestsCount</span> <span class="o">&lt;</span> <span class="nx">maxPendingRequests</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-373"></a>                    <span class="nx">pendingRequestsCount</span><span class="o">++</span><span class="p">;</span>
<a name="typeahead.bundle.js-374"></a>                    <span class="nx">pendingRequests</span><span class="p">[</span><span class="nx">fingerprint</span><span class="p">]</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_send</span><span class="p">(</span><span class="nx">o</span><span class="p">).</span><span class="nx">done</span><span class="p">(</span><span class="nx">done</span><span class="p">).</span><span class="nx">fail</span><span class="p">(</span><span class="nx">fail</span><span class="p">).</span><span class="nx">always</span><span class="p">(</span><span class="nx">always</span><span class="p">);</span>
<a name="typeahead.bundle.js-375"></a>                <span class="p">}</span> <span class="k">else</span> <span class="p">{</span>
<a name="typeahead.bundle.js-376"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">onDeckRequestArgs</span> <span class="o">=</span> <span class="p">[].</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">0</span><span class="p">);</span>
<a name="typeahead.bundle.js-377"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-378"></a>                <span class="kd">function</span> <span class="nx">done</span><span class="p">(</span><span class="nx">resp</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-379"></a>                    <span class="nx">cb</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span> <span class="nx">resp</span><span class="p">);</span>
<a name="typeahead.bundle.js-380"></a>                    <span class="nx">that</span><span class="p">.</span><span class="nx">_cache</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span><span class="nx">fingerprint</span><span class="p">,</span> <span class="nx">resp</span><span class="p">);</span>
<a name="typeahead.bundle.js-381"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-382"></a>                <span class="kd">function</span> <span class="nx">fail</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-383"></a>                    <span class="nx">cb</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span>
<a name="typeahead.bundle.js-384"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-385"></a>                <span class="kd">function</span> <span class="nx">always</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-386"></a>                    <span class="nx">pendingRequestsCount</span><span class="o">--</span><span class="p">;</span>
<a name="typeahead.bundle.js-387"></a>                    <span class="k">delete</span> <span class="nx">pendingRequests</span><span class="p">[</span><span class="nx">fingerprint</span><span class="p">];</span>
<a name="typeahead.bundle.js-388"></a>                    <span class="k">if</span> <span class="p">(</span><span class="nx">that</span><span class="p">.</span><span class="nx">onDeckRequestArgs</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-389"></a>                        <span class="nx">that</span><span class="p">.</span><span class="nx">_get</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">that</span><span class="p">,</span> <span class="nx">that</span><span class="p">.</span><span class="nx">onDeckRequestArgs</span><span class="p">);</span>
<a name="typeahead.bundle.js-390"></a>                        <span class="nx">that</span><span class="p">.</span><span class="nx">onDeckRequestArgs</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span>
<a name="typeahead.bundle.js-391"></a>                    <span class="p">}</span>
<a name="typeahead.bundle.js-392"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-393"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-394"></a>            <span class="nx">get</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">o</span><span class="p">,</span> <span class="nx">cb</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-395"></a>                <span class="kd">var</span> <span class="nx">resp</span><span class="p">,</span> <span class="nx">fingerprint</span><span class="p">;</span>
<a name="typeahead.bundle.js-396"></a>                <span class="nx">cb</span> <span class="o">=</span> <span class="nx">cb</span> <span class="o">||</span> <span class="nx">$</span><span class="p">.</span><span class="nx">noop</span><span class="p">;</span>
<a name="typeahead.bundle.js-397"></a>                <span class="nx">o</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isString</span><span class="p">(</span><span class="nx">o</span><span class="p">)</span> <span class="o">?</span> <span class="p">{</span>
<a name="typeahead.bundle.js-398"></a>                    <span class="nx">url</span><span class="o">:</span> <span class="nx">o</span>
<a name="typeahead.bundle.js-399"></a>                <span class="p">}</span> <span class="o">:</span> <span class="nx">o</span> <span class="o">||</span> <span class="p">{};</span>
<a name="typeahead.bundle.js-400"></a>                <span class="nx">fingerprint</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_fingerprint</span><span class="p">(</span><span class="nx">o</span><span class="p">);</span>
<a name="typeahead.bundle.js-401"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">cancelled</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span>
<a name="typeahead.bundle.js-402"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">lastReq</span> <span class="o">=</span> <span class="nx">fingerprint</span><span class="p">;</span>
<a name="typeahead.bundle.js-403"></a>                <span class="k">if</span> <span class="p">(</span><span class="nx">resp</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_cache</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="nx">fingerprint</span><span class="p">))</span> <span class="p">{</span>
<a name="typeahead.bundle.js-404"></a>                    <span class="nx">cb</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span> <span class="nx">resp</span><span class="p">);</span>
<a name="typeahead.bundle.js-405"></a>                <span class="p">}</span> <span class="k">else</span> <span class="p">{</span>
<a name="typeahead.bundle.js-406"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">_get</span><span class="p">(</span><span class="nx">o</span><span class="p">,</span> <span class="nx">cb</span><span class="p">);</span>
<a name="typeahead.bundle.js-407"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-408"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-409"></a>            <span class="nx">cancel</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-410"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">cancelled</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>
<a name="typeahead.bundle.js-411"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-412"></a>        <span class="p">});</span>
<a name="typeahead.bundle.js-413"></a>        <span class="k">return</span> <span class="nx">Transport</span><span class="p">;</span>
<a name="typeahead.bundle.js-414"></a>    <span class="p">}();</span>
<a name="typeahead.bundle.js-415"></a>    <span class="kd">var</span> <span class="nx">SearchIndex</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">SearchIndex</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-416"></a>        <span class="s2">&quot;use strict&quot;</span><span class="p">;</span>
<a name="typeahead.bundle.js-417"></a>        <span class="kd">var</span> <span class="nx">CHILDREN</span> <span class="o">=</span> <span class="s2">&quot;c&quot;</span><span class="p">,</span> <span class="nx">IDS</span> <span class="o">=</span> <span class="s2">&quot;i&quot;</span><span class="p">;</span>
<a name="typeahead.bundle.js-418"></a>        <span class="kd">function</span> <span class="nx">SearchIndex</span><span class="p">(</span><span class="nx">o</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-419"></a>            <span class="nx">o</span> <span class="o">=</span> <span class="nx">o</span> <span class="o">||</span> <span class="p">{};</span>
<a name="typeahead.bundle.js-420"></a>            <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">o</span><span class="p">.</span><span class="nx">datumTokenizer</span> <span class="o">||</span> <span class="o">!</span><span class="nx">o</span><span class="p">.</span><span class="nx">queryTokenizer</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-421"></a>                <span class="nx">$</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="s2">&quot;datumTokenizer and queryTokenizer are both required&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-422"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-423"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">identify</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">identify</span> <span class="o">||</span> <span class="nx">_</span><span class="p">.</span><span class="nx">stringify</span><span class="p">;</span>
<a name="typeahead.bundle.js-424"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">datumTokenizer</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">datumTokenizer</span><span class="p">;</span>
<a name="typeahead.bundle.js-425"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">queryTokenizer</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">queryTokenizer</span><span class="p">;</span>
<a name="typeahead.bundle.js-426"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">reset</span><span class="p">();</span>
<a name="typeahead.bundle.js-427"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-428"></a>        <span class="nx">_</span><span class="p">.</span><span class="nx">mixin</span><span class="p">(</span><span class="nx">SearchIndex</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span> <span class="p">{</span>
<a name="typeahead.bundle.js-429"></a>            <span class="nx">bootstrap</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">bootstrap</span><span class="p">(</span><span class="nx">o</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-430"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">datums</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">datums</span><span class="p">;</span>
<a name="typeahead.bundle.js-431"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">trie</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">trie</span><span class="p">;</span>
<a name="typeahead.bundle.js-432"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-433"></a>            <span class="nx">add</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-434"></a>                <span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span>
<a name="typeahead.bundle.js-435"></a>                <span class="nx">data</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="o">?</span> <span class="nx">data</span> <span class="o">:</span> <span class="p">[</span> <span class="nx">data</span> <span class="p">];</span>
<a name="typeahead.bundle.js-436"></a>                <span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">datum</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-437"></a>                    <span class="kd">var</span> <span class="nx">id</span><span class="p">,</span> <span class="nx">tokens</span><span class="p">;</span>
<a name="typeahead.bundle.js-438"></a>                    <span class="nx">that</span><span class="p">.</span><span class="nx">datums</span><span class="p">[</span><span class="nx">id</span> <span class="o">=</span> <span class="nx">that</span><span class="p">.</span><span class="nx">identify</span><span class="p">(</span><span class="nx">datum</span><span class="p">)]</span> <span class="o">=</span> <span class="nx">datum</span><span class="p">;</span>
<a name="typeahead.bundle.js-439"></a>                    <span class="nx">tokens</span> <span class="o">=</span> <span class="nx">normalizeTokens</span><span class="p">(</span><span class="nx">that</span><span class="p">.</span><span class="nx">datumTokenizer</span><span class="p">(</span><span class="nx">datum</span><span class="p">));</span>
<a name="typeahead.bundle.js-440"></a>                    <span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">tokens</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">token</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-441"></a>                        <span class="kd">var</span> <span class="nx">node</span><span class="p">,</span> <span class="nx">chars</span><span class="p">,</span> <span class="nx">ch</span><span class="p">;</span>
<a name="typeahead.bundle.js-442"></a>                        <span class="nx">node</span> <span class="o">=</span> <span class="nx">that</span><span class="p">.</span><span class="nx">trie</span><span class="p">;</span>
<a name="typeahead.bundle.js-443"></a>                        <span class="nx">chars</span> <span class="o">=</span> <span class="nx">token</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-444"></a>                        <span class="k">while</span> <span class="p">(</span><span class="nx">ch</span> <span class="o">=</span> <span class="nx">chars</span><span class="p">.</span><span class="nx">shift</span><span class="p">())</span> <span class="p">{</span>
<a name="typeahead.bundle.js-445"></a>                            <span class="nx">node</span> <span class="o">=</span> <span class="nx">node</span><span class="p">[</span><span class="nx">CHILDREN</span><span class="p">][</span><span class="nx">ch</span><span class="p">]</span> <span class="o">||</span> <span class="p">(</span><span class="nx">node</span><span class="p">[</span><span class="nx">CHILDREN</span><span class="p">][</span><span class="nx">ch</span><span class="p">]</span> <span class="o">=</span> <span class="nx">newNode</span><span class="p">());</span>
<a name="typeahead.bundle.js-446"></a>                            <span class="nx">node</span><span class="p">[</span><span class="nx">IDS</span><span class="p">].</span><span class="nx">push</span><span class="p">(</span><span class="nx">id</span><span class="p">);</span>
<a name="typeahead.bundle.js-447"></a>                        <span class="p">}</span>
<a name="typeahead.bundle.js-448"></a>                    <span class="p">});</span>
<a name="typeahead.bundle.js-449"></a>                <span class="p">});</span>
<a name="typeahead.bundle.js-450"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-451"></a>            <span class="nx">get</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">get</span><span class="p">(</span><span class="nx">ids</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-452"></a>                <span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span>
<a name="typeahead.bundle.js-453"></a>                <span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="nx">ids</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">id</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-454"></a>                    <span class="k">return</span> <span class="nx">that</span><span class="p">.</span><span class="nx">datums</span><span class="p">[</span><span class="nx">id</span><span class="p">];</span>
<a name="typeahead.bundle.js-455"></a>                <span class="p">});</span>
<a name="typeahead.bundle.js-456"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-457"></a>            <span class="nx">search</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">search</span><span class="p">(</span><span class="nx">query</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-458"></a>                <span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span><span class="p">,</span> <span class="nx">tokens</span><span class="p">,</span> <span class="nx">matches</span><span class="p">;</span>
<a name="typeahead.bundle.js-459"></a>                <span class="nx">tokens</span> <span class="o">=</span> <span class="nx">normalizeTokens</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">queryTokenizer</span><span class="p">(</span><span class="nx">query</span><span class="p">));</span>
<a name="typeahead.bundle.js-460"></a>                <span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">tokens</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">token</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-461"></a>                    <span class="kd">var</span> <span class="nx">node</span><span class="p">,</span> <span class="nx">chars</span><span class="p">,</span> <span class="nx">ch</span><span class="p">,</span> <span class="nx">ids</span><span class="p">;</span>
<a name="typeahead.bundle.js-462"></a>                    <span class="k">if</span> <span class="p">(</span><span class="nx">matches</span> <span class="o">&amp;&amp;</span> <span class="nx">matches</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-463"></a>                        <span class="k">return</span> <span class="kc">false</span><span class="p">;</span>
<a name="typeahead.bundle.js-464"></a>                    <span class="p">}</span>
<a name="typeahead.bundle.js-465"></a>                    <span class="nx">node</span> <span class="o">=</span> <span class="nx">that</span><span class="p">.</span><span class="nx">trie</span><span class="p">;</span>
<a name="typeahead.bundle.js-466"></a>                    <span class="nx">chars</span> <span class="o">=</span> <span class="nx">token</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-467"></a>                    <span class="k">while</span> <span class="p">(</span><span class="nx">node</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">ch</span> <span class="o">=</span> <span class="nx">chars</span><span class="p">.</span><span class="nx">shift</span><span class="p">()))</span> <span class="p">{</span>
<a name="typeahead.bundle.js-468"></a>                        <span class="nx">node</span> <span class="o">=</span> <span class="nx">node</span><span class="p">[</span><span class="nx">CHILDREN</span><span class="p">][</span><span class="nx">ch</span><span class="p">];</span>
<a name="typeahead.bundle.js-469"></a>                    <span class="p">}</span>
<a name="typeahead.bundle.js-470"></a>                    <span class="k">if</span> <span class="p">(</span><span class="nx">node</span> <span class="o">&amp;&amp;</span> <span class="nx">chars</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-471"></a>                        <span class="nx">ids</span> <span class="o">=</span> <span class="nx">node</span><span class="p">[</span><span class="nx">IDS</span><span class="p">].</span><span class="nx">slice</span><span class="p">(</span><span class="mi">0</span><span class="p">);</span>
<a name="typeahead.bundle.js-472"></a>                        <span class="nx">matches</span> <span class="o">=</span> <span class="nx">matches</span> <span class="o">?</span> <span class="nx">getIntersection</span><span class="p">(</span><span class="nx">matches</span><span class="p">,</span> <span class="nx">ids</span><span class="p">)</span> <span class="o">:</span> <span class="nx">ids</span><span class="p">;</span>
<a name="typeahead.bundle.js-473"></a>                    <span class="p">}</span> <span class="k">else</span> <span class="p">{</span>
<a name="typeahead.bundle.js-474"></a>                        <span class="nx">matches</span> <span class="o">=</span> <span class="p">[];</span>
<a name="typeahead.bundle.js-475"></a>                        <span class="k">return</span> <span class="kc">false</span><span class="p">;</span>
<a name="typeahead.bundle.js-476"></a>                    <span class="p">}</span>
<a name="typeahead.bundle.js-477"></a>                <span class="p">});</span>
<a name="typeahead.bundle.js-478"></a>                <span class="k">return</span> <span class="nx">matches</span> <span class="o">?</span> <span class="nx">_</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="nx">unique</span><span class="p">(</span><span class="nx">matches</span><span class="p">),</span> <span class="kd">function</span><span class="p">(</span><span class="nx">id</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-479"></a>                    <span class="k">return</span> <span class="nx">that</span><span class="p">.</span><span class="nx">datums</span><span class="p">[</span><span class="nx">id</span><span class="p">];</span>
<a name="typeahead.bundle.js-480"></a>                <span class="p">})</span> <span class="o">:</span> <span class="p">[];</span>
<a name="typeahead.bundle.js-481"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-482"></a>            <span class="nx">all</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">all</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-483"></a>                <span class="kd">var</span> <span class="nx">values</span> <span class="o">=</span> <span class="p">[];</span>
<a name="typeahead.bundle.js-484"></a>                <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">key</span> <span class="k">in</span> <span class="k">this</span><span class="p">.</span><span class="nx">datums</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-485"></a>                    <span class="nx">values</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">datums</span><span class="p">[</span><span class="nx">key</span><span class="p">]);</span>
<a name="typeahead.bundle.js-486"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-487"></a>                <span class="k">return</span> <span class="nx">values</span><span class="p">;</span>
<a name="typeahead.bundle.js-488"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-489"></a>            <span class="nx">reset</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">reset</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-490"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">datums</span> <span class="o">=</span> <span class="p">{};</span>
<a name="typeahead.bundle.js-491"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">trie</span> <span class="o">=</span> <span class="nx">newNode</span><span class="p">();</span>
<a name="typeahead.bundle.js-492"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-493"></a>            <span class="nx">serialize</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">serialize</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-494"></a>                <span class="k">return</span> <span class="p">{</span>
<a name="typeahead.bundle.js-495"></a>                    <span class="nx">datums</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">datums</span><span class="p">,</span>
<a name="typeahead.bundle.js-496"></a>                    <span class="nx">trie</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">trie</span>
<a name="typeahead.bundle.js-497"></a>                <span class="p">};</span>
<a name="typeahead.bundle.js-498"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-499"></a>        <span class="p">});</span>
<a name="typeahead.bundle.js-500"></a>        <span class="k">return</span> <span class="nx">SearchIndex</span><span class="p">;</span>
<a name="typeahead.bundle.js-501"></a>        <span class="kd">function</span> <span class="nx">normalizeTokens</span><span class="p">(</span><span class="nx">tokens</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-502"></a>            <span class="nx">tokens</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="nx">tokens</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">token</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-503"></a>                <span class="k">return</span> <span class="o">!!</span><span class="nx">token</span><span class="p">;</span>
<a name="typeahead.bundle.js-504"></a>            <span class="p">});</span>
<a name="typeahead.bundle.js-505"></a>            <span class="nx">tokens</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="nx">tokens</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">token</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-506"></a>                <span class="k">return</span> <span class="nx">token</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">();</span>
<a name="typeahead.bundle.js-507"></a>            <span class="p">});</span>
<a name="typeahead.bundle.js-508"></a>            <span class="k">return</span> <span class="nx">tokens</span><span class="p">;</span>
<a name="typeahead.bundle.js-509"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-510"></a>        <span class="kd">function</span> <span class="nx">newNode</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-511"></a>            <span class="kd">var</span> <span class="nx">node</span> <span class="o">=</span> <span class="p">{};</span>
<a name="typeahead.bundle.js-512"></a>            <span class="nx">node</span><span class="p">[</span><span class="nx">IDS</span><span class="p">]</span> <span class="o">=</span> <span class="p">[];</span>
<a name="typeahead.bundle.js-513"></a>            <span class="nx">node</span><span class="p">[</span><span class="nx">CHILDREN</span><span class="p">]</span> <span class="o">=</span> <span class="p">{};</span>
<a name="typeahead.bundle.js-514"></a>            <span class="k">return</span> <span class="nx">node</span><span class="p">;</span>
<a name="typeahead.bundle.js-515"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-516"></a>        <span class="kd">function</span> <span class="nx">unique</span><span class="p">(</span><span class="nx">array</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-517"></a>            <span class="kd">var</span> <span class="nx">seen</span> <span class="o">=</span> <span class="p">{},</span> <span class="nx">uniques</span> <span class="o">=</span> <span class="p">[];</span>
<a name="typeahead.bundle.js-518"></a>            <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">len</span> <span class="o">=</span> <span class="nx">array</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">len</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-519"></a>                <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">seen</span><span class="p">[</span><span class="nx">array</span><span class="p">[</span><span class="nx">i</span><span class="p">]])</span> <span class="p">{</span>
<a name="typeahead.bundle.js-520"></a>                    <span class="nx">seen</span><span class="p">[</span><span class="nx">array</span><span class="p">[</span><span class="nx">i</span><span class="p">]]</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>
<a name="typeahead.bundle.js-521"></a>                    <span class="nx">uniques</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">array</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span>
<a name="typeahead.bundle.js-522"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-523"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-524"></a>            <span class="k">return</span> <span class="nx">uniques</span><span class="p">;</span>
<a name="typeahead.bundle.js-525"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-526"></a>        <span class="kd">function</span> <span class="nx">getIntersection</span><span class="p">(</span><span class="nx">arrayA</span><span class="p">,</span> <span class="nx">arrayB</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-527"></a>            <span class="kd">var</span> <span class="nx">ai</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">bi</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">intersection</span> <span class="o">=</span> <span class="p">[];</span>
<a name="typeahead.bundle.js-528"></a>            <span class="nx">arrayA</span> <span class="o">=</span> <span class="nx">arrayA</span><span class="p">.</span><span class="nx">sort</span><span class="p">();</span>
<a name="typeahead.bundle.js-529"></a>            <span class="nx">arrayB</span> <span class="o">=</span> <span class="nx">arrayB</span><span class="p">.</span><span class="nx">sort</span><span class="p">();</span>
<a name="typeahead.bundle.js-530"></a>            <span class="kd">var</span> <span class="nx">lenArrayA</span> <span class="o">=</span> <span class="nx">arrayA</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span> <span class="nx">lenArrayB</span> <span class="o">=</span> <span class="nx">arrayB</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span>
<a name="typeahead.bundle.js-531"></a>            <span class="k">while</span> <span class="p">(</span><span class="nx">ai</span> <span class="o">&lt;</span> <span class="nx">lenArrayA</span> <span class="o">&amp;&amp;</span> <span class="nx">bi</span> <span class="o">&lt;</span> <span class="nx">lenArrayB</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-532"></a>                <span class="k">if</span> <span class="p">(</span><span class="nx">arrayA</span><span class="p">[</span><span class="nx">ai</span><span class="p">]</span> <span class="o">&lt;</span> <span class="nx">arrayB</span><span class="p">[</span><span class="nx">bi</span><span class="p">])</span> <span class="p">{</span>
<a name="typeahead.bundle.js-533"></a>                    <span class="nx">ai</span><span class="o">++</span><span class="p">;</span>
<a name="typeahead.bundle.js-534"></a>                <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">arrayA</span><span class="p">[</span><span class="nx">ai</span><span class="p">]</span> <span class="o">&gt;</span> <span class="nx">arrayB</span><span class="p">[</span><span class="nx">bi</span><span class="p">])</span> <span class="p">{</span>
<a name="typeahead.bundle.js-535"></a>                    <span class="nx">bi</span><span class="o">++</span><span class="p">;</span>
<a name="typeahead.bundle.js-536"></a>                <span class="p">}</span> <span class="k">else</span> <span class="p">{</span>
<a name="typeahead.bundle.js-537"></a>                    <span class="nx">intersection</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">arrayA</span><span class="p">[</span><span class="nx">ai</span><span class="p">]);</span>
<a name="typeahead.bundle.js-538"></a>                    <span class="nx">ai</span><span class="o">++</span><span class="p">;</span>
<a name="typeahead.bundle.js-539"></a>                    <span class="nx">bi</span><span class="o">++</span><span class="p">;</span>
<a name="typeahead.bundle.js-540"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-541"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-542"></a>            <span class="k">return</span> <span class="nx">intersection</span><span class="p">;</span>
<a name="typeahead.bundle.js-543"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-544"></a>    <span class="p">}();</span>
<a name="typeahead.bundle.js-545"></a>    <span class="kd">var</span> <span class="nx">Prefetch</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-546"></a>        <span class="s2">&quot;use strict&quot;</span><span class="p">;</span>
<a name="typeahead.bundle.js-547"></a>        <span class="kd">var</span> <span class="nx">keys</span><span class="p">;</span>
<a name="typeahead.bundle.js-548"></a>        <span class="nx">keys</span> <span class="o">=</span> <span class="p">{</span>
<a name="typeahead.bundle.js-549"></a>            <span class="nx">data</span><span class="o">:</span> <span class="s2">&quot;data&quot;</span><span class="p">,</span>
<a name="typeahead.bundle.js-550"></a>            <span class="nx">protocol</span><span class="o">:</span> <span class="s2">&quot;protocol&quot;</span><span class="p">,</span>
<a name="typeahead.bundle.js-551"></a>            <span class="nx">thumbprint</span><span class="o">:</span> <span class="s2">&quot;thumbprint&quot;</span>
<a name="typeahead.bundle.js-552"></a>        <span class="p">};</span>
<a name="typeahead.bundle.js-553"></a>        <span class="kd">function</span> <span class="nx">Prefetch</span><span class="p">(</span><span class="nx">o</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-554"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">url</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">url</span><span class="p">;</span>
<a name="typeahead.bundle.js-555"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">ttl</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">ttl</span><span class="p">;</span>
<a name="typeahead.bundle.js-556"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">cache</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">cache</span><span class="p">;</span>
<a name="typeahead.bundle.js-557"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">prepare</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">prepare</span><span class="p">;</span>
<a name="typeahead.bundle.js-558"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">transform</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">transform</span><span class="p">;</span>
<a name="typeahead.bundle.js-559"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">transport</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">transport</span><span class="p">;</span>
<a name="typeahead.bundle.js-560"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">thumbprint</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">thumbprint</span><span class="p">;</span>
<a name="typeahead.bundle.js-561"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">storage</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">PersistentStorage</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">cacheKey</span><span class="p">);</span>
<a name="typeahead.bundle.js-562"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-563"></a>        <span class="nx">_</span><span class="p">.</span><span class="nx">mixin</span><span class="p">(</span><span class="nx">Prefetch</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span> <span class="p">{</span>
<a name="typeahead.bundle.js-564"></a>            <span class="nx">_settings</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">settings</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-565"></a>                <span class="k">return</span> <span class="p">{</span>
<a name="typeahead.bundle.js-566"></a>                    <span class="nx">url</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">url</span><span class="p">,</span>
<a name="typeahead.bundle.js-567"></a>                    <span class="nx">type</span><span class="o">:</span> <span class="s2">&quot;GET&quot;</span><span class="p">,</span>
<a name="typeahead.bundle.js-568"></a>                    <span class="nx">dataType</span><span class="o">:</span> <span class="s2">&quot;json&quot;</span>
<a name="typeahead.bundle.js-569"></a>                <span class="p">};</span>
<a name="typeahead.bundle.js-570"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-571"></a>            <span class="nx">store</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">store</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-572"></a>                <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">cache</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-573"></a>                    <span class="k">return</span><span class="p">;</span>
<a name="typeahead.bundle.js-574"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-575"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">storage</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span><span class="nx">keys</span><span class="p">.</span><span class="nx">data</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">ttl</span><span class="p">);</span>
<a name="typeahead.bundle.js-576"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">storage</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span><span class="nx">keys</span><span class="p">.</span><span class="nx">protocol</span><span class="p">,</span> <span class="nx">location</span><span class="p">.</span><span class="nx">protocol</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">ttl</span><span class="p">);</span>
<a name="typeahead.bundle.js-577"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">storage</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span><span class="nx">keys</span><span class="p">.</span><span class="nx">thumbprint</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">thumbprint</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">ttl</span><span class="p">);</span>
<a name="typeahead.bundle.js-578"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-579"></a>            <span class="nx">fromCache</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">fromCache</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-580"></a>                <span class="kd">var</span> <span class="nx">stored</span> <span class="o">=</span> <span class="p">{},</span> <span class="nx">isExpired</span><span class="p">;</span>
<a name="typeahead.bundle.js-581"></a>                <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">cache</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-582"></a>                    <span class="k">return</span> <span class="kc">null</span><span class="p">;</span>
<a name="typeahead.bundle.js-583"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-584"></a>                <span class="nx">stored</span><span class="p">.</span><span class="nx">data</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">storage</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="nx">keys</span><span class="p">.</span><span class="nx">data</span><span class="p">);</span>
<a name="typeahead.bundle.js-585"></a>                <span class="nx">stored</span><span class="p">.</span><span class="nx">protocol</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">storage</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="nx">keys</span><span class="p">.</span><span class="nx">protocol</span><span class="p">);</span>
<a name="typeahead.bundle.js-586"></a>                <span class="nx">stored</span><span class="p">.</span><span class="nx">thumbprint</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">storage</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="nx">keys</span><span class="p">.</span><span class="nx">thumbprint</span><span class="p">);</span>
<a name="typeahead.bundle.js-587"></a>                <span class="nx">isExpired</span> <span class="o">=</span> <span class="nx">stored</span><span class="p">.</span><span class="nx">thumbprint</span> <span class="o">!==</span> <span class="k">this</span><span class="p">.</span><span class="nx">thumbprint</span> <span class="o">||</span> <span class="nx">stored</span><span class="p">.</span><span class="nx">protocol</span> <span class="o">!==</span> <span class="nx">location</span><span class="p">.</span><span class="nx">protocol</span><span class="p">;</span>
<a name="typeahead.bundle.js-588"></a>                <span class="k">return</span> <span class="nx">stored</span><span class="p">.</span><span class="nx">data</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">isExpired</span> <span class="o">?</span> <span class="nx">stored</span><span class="p">.</span><span class="nx">data</span> <span class="o">:</span> <span class="kc">null</span><span class="p">;</span>
<a name="typeahead.bundle.js-589"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-590"></a>            <span class="nx">fromNetwork</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">cb</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-591"></a>                <span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span><span class="p">,</span> <span class="nx">settings</span><span class="p">;</span>
<a name="typeahead.bundle.js-592"></a>                <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">cb</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-593"></a>                    <span class="k">return</span><span class="p">;</span>
<a name="typeahead.bundle.js-594"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-595"></a>                <span class="nx">settings</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">prepare</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_settings</span><span class="p">());</span>
<a name="typeahead.bundle.js-596"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">transport</span><span class="p">(</span><span class="nx">settings</span><span class="p">).</span><span class="nx">fail</span><span class="p">(</span><span class="nx">onError</span><span class="p">).</span><span class="nx">done</span><span class="p">(</span><span class="nx">onResponse</span><span class="p">);</span>
<a name="typeahead.bundle.js-597"></a>                <span class="kd">function</span> <span class="nx">onError</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-598"></a>                    <span class="nx">cb</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span>
<a name="typeahead.bundle.js-599"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-600"></a>                <span class="kd">function</span> <span class="nx">onResponse</span><span class="p">(</span><span class="nx">resp</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-601"></a>                    <span class="nx">cb</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span> <span class="nx">that</span><span class="p">.</span><span class="nx">transform</span><span class="p">(</span><span class="nx">resp</span><span class="p">));</span>
<a name="typeahead.bundle.js-602"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-603"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-604"></a>            <span class="nx">clear</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">clear</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-605"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">storage</span><span class="p">.</span><span class="nx">clear</span><span class="p">();</span>
<a name="typeahead.bundle.js-606"></a>                <span class="k">return</span> <span class="k">this</span><span class="p">;</span>
<a name="typeahead.bundle.js-607"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-608"></a>        <span class="p">});</span>
<a name="typeahead.bundle.js-609"></a>        <span class="k">return</span> <span class="nx">Prefetch</span><span class="p">;</span>
<a name="typeahead.bundle.js-610"></a>    <span class="p">}();</span>
<a name="typeahead.bundle.js-611"></a>    <span class="kd">var</span> <span class="nx">Remote</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-612"></a>        <span class="s2">&quot;use strict&quot;</span><span class="p">;</span>
<a name="typeahead.bundle.js-613"></a>        <span class="kd">function</span> <span class="nx">Remote</span><span class="p">(</span><span class="nx">o</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-614"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">url</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">url</span><span class="p">;</span>
<a name="typeahead.bundle.js-615"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">prepare</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">prepare</span><span class="p">;</span>
<a name="typeahead.bundle.js-616"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">transform</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">transform</span><span class="p">;</span>
<a name="typeahead.bundle.js-617"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">transport</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Transport</span><span class="p">({</span>
<a name="typeahead.bundle.js-618"></a>                <span class="nx">cache</span><span class="o">:</span> <span class="nx">o</span><span class="p">.</span><span class="nx">cache</span><span class="p">,</span>
<a name="typeahead.bundle.js-619"></a>                <span class="nx">limiter</span><span class="o">:</span> <span class="nx">o</span><span class="p">.</span><span class="nx">limiter</span><span class="p">,</span>
<a name="typeahead.bundle.js-620"></a>                <span class="nx">transport</span><span class="o">:</span> <span class="nx">o</span><span class="p">.</span><span class="nx">transport</span>
<a name="typeahead.bundle.js-621"></a>            <span class="p">});</span>
<a name="typeahead.bundle.js-622"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-623"></a>        <span class="nx">_</span><span class="p">.</span><span class="nx">mixin</span><span class="p">(</span><span class="nx">Remote</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span> <span class="p">{</span>
<a name="typeahead.bundle.js-624"></a>            <span class="nx">_settings</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">settings</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-625"></a>                <span class="k">return</span> <span class="p">{</span>
<a name="typeahead.bundle.js-626"></a>                    <span class="nx">url</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">url</span><span class="p">,</span>
<a name="typeahead.bundle.js-627"></a>                    <span class="nx">type</span><span class="o">:</span> <span class="s2">&quot;GET&quot;</span><span class="p">,</span>
<a name="typeahead.bundle.js-628"></a>                    <span class="nx">dataType</span><span class="o">:</span> <span class="s2">&quot;json&quot;</span>
<a name="typeahead.bundle.js-629"></a>                <span class="p">};</span>
<a name="typeahead.bundle.js-630"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-631"></a>            <span class="nx">get</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">get</span><span class="p">(</span><span class="nx">query</span><span class="p">,</span> <span class="nx">cb</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-632"></a>                <span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span><span class="p">,</span> <span class="nx">settings</span><span class="p">;</span>
<a name="typeahead.bundle.js-633"></a>                <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">cb</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-634"></a>                    <span class="k">return</span><span class="p">;</span>
<a name="typeahead.bundle.js-635"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-636"></a>                <span class="nx">query</span> <span class="o">=</span> <span class="nx">query</span> <span class="o">||</span> <span class="s2">&quot;&quot;</span><span class="p">;</span>
<a name="typeahead.bundle.js-637"></a>                <span class="nx">settings</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">prepare</span><span class="p">(</span><span class="nx">query</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">_settings</span><span class="p">());</span>
<a name="typeahead.bundle.js-638"></a>                <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">transport</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="nx">settings</span><span class="p">,</span> <span class="nx">onResponse</span><span class="p">);</span>
<a name="typeahead.bundle.js-639"></a>                <span class="kd">function</span> <span class="nx">onResponse</span><span class="p">(</span><span class="nx">err</span><span class="p">,</span> <span class="nx">resp</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-640"></a>                    <span class="nx">err</span> <span class="o">?</span> <span class="nx">cb</span><span class="p">([])</span> <span class="o">:</span> <span class="nx">cb</span><span class="p">(</span><span class="nx">that</span><span class="p">.</span><span class="nx">transform</span><span class="p">(</span><span class="nx">resp</span><span class="p">));</span>
<a name="typeahead.bundle.js-641"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-642"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-643"></a>            <span class="nx">cancelLastRequest</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">cancelLastRequest</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-644"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">transport</span><span class="p">.</span><span class="nx">cancel</span><span class="p">();</span>
<a name="typeahead.bundle.js-645"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-646"></a>        <span class="p">});</span>
<a name="typeahead.bundle.js-647"></a>        <span class="k">return</span> <span class="nx">Remote</span><span class="p">;</span>
<a name="typeahead.bundle.js-648"></a>    <span class="p">}();</span>
<a name="typeahead.bundle.js-649"></a>    <span class="kd">var</span> <span class="nx">oParser</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-650"></a>        <span class="s2">&quot;use strict&quot;</span><span class="p">;</span>
<a name="typeahead.bundle.js-651"></a>        <span class="k">return</span> <span class="kd">function</span> <span class="nx">parse</span><span class="p">(</span><span class="nx">o</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-652"></a>            <span class="kd">var</span> <span class="nx">defaults</span><span class="p">,</span> <span class="nx">sorter</span><span class="p">;</span>
<a name="typeahead.bundle.js-653"></a>            <span class="nx">defaults</span> <span class="o">=</span> <span class="p">{</span>
<a name="typeahead.bundle.js-654"></a>                <span class="nx">initialize</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span>
<a name="typeahead.bundle.js-655"></a>                <span class="nx">identify</span><span class="o">:</span> <span class="nx">_</span><span class="p">.</span><span class="nx">stringify</span><span class="p">,</span>
<a name="typeahead.bundle.js-656"></a>                <span class="nx">datumTokenizer</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span>
<a name="typeahead.bundle.js-657"></a>                <span class="nx">queryTokenizer</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span>
<a name="typeahead.bundle.js-658"></a>                <span class="nx">sufficient</span><span class="o">:</span> <span class="mi">5</span><span class="p">,</span>
<a name="typeahead.bundle.js-659"></a>                <span class="nx">sorter</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span>
<a name="typeahead.bundle.js-660"></a>                <span class="nx">local</span><span class="o">:</span> <span class="p">[],</span>
<a name="typeahead.bundle.js-661"></a>                <span class="nx">prefetch</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span>
<a name="typeahead.bundle.js-662"></a>                <span class="nx">remote</span><span class="o">:</span> <span class="kc">null</span>
<a name="typeahead.bundle.js-663"></a>            <span class="p">};</span>
<a name="typeahead.bundle.js-664"></a>            <span class="nx">o</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">mixin</span><span class="p">(</span><span class="nx">defaults</span><span class="p">,</span> <span class="nx">o</span> <span class="o">||</span> <span class="p">{});</span>
<a name="typeahead.bundle.js-665"></a>            <span class="o">!</span><span class="nx">o</span><span class="p">.</span><span class="nx">datumTokenizer</span> <span class="o">&amp;&amp;</span> <span class="nx">$</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="s2">&quot;datumTokenizer is required&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-666"></a>            <span class="o">!</span><span class="nx">o</span><span class="p">.</span><span class="nx">queryTokenizer</span> <span class="o">&amp;&amp;</span> <span class="nx">$</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="s2">&quot;queryTokenizer is required&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-667"></a>            <span class="nx">sorter</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">sorter</span><span class="p">;</span>
<a name="typeahead.bundle.js-668"></a>            <span class="nx">o</span><span class="p">.</span><span class="nx">sorter</span> <span class="o">=</span> <span class="nx">sorter</span> <span class="o">?</span> <span class="kd">function</span><span class="p">(</span><span class="nx">x</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-669"></a>                <span class="k">return</span> <span class="nx">x</span><span class="p">.</span><span class="nx">sort</span><span class="p">(</span><span class="nx">sorter</span><span class="p">);</span>
<a name="typeahead.bundle.js-670"></a>            <span class="p">}</span> <span class="o">:</span> <span class="nx">_</span><span class="p">.</span><span class="nx">identity</span><span class="p">;</span>
<a name="typeahead.bundle.js-671"></a>            <span class="nx">o</span><span class="p">.</span><span class="nx">local</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">local</span><span class="p">)</span> <span class="o">?</span> <span class="nx">o</span><span class="p">.</span><span class="nx">local</span><span class="p">()</span> <span class="o">:</span> <span class="nx">o</span><span class="p">.</span><span class="nx">local</span><span class="p">;</span>
<a name="typeahead.bundle.js-672"></a>            <span class="nx">o</span><span class="p">.</span><span class="nx">prefetch</span> <span class="o">=</span> <span class="nx">parsePrefetch</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">prefetch</span><span class="p">);</span>
<a name="typeahead.bundle.js-673"></a>            <span class="nx">o</span><span class="p">.</span><span class="nx">remote</span> <span class="o">=</span> <span class="nx">parseRemote</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">remote</span><span class="p">);</span>
<a name="typeahead.bundle.js-674"></a>            <span class="k">return</span> <span class="nx">o</span><span class="p">;</span>
<a name="typeahead.bundle.js-675"></a>        <span class="p">};</span>
<a name="typeahead.bundle.js-676"></a>        <span class="kd">function</span> <span class="nx">parsePrefetch</span><span class="p">(</span><span class="nx">o</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-677"></a>            <span class="kd">var</span> <span class="nx">defaults</span><span class="p">;</span>
<a name="typeahead.bundle.js-678"></a>            <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">o</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-679"></a>                <span class="k">return</span> <span class="kc">null</span><span class="p">;</span>
<a name="typeahead.bundle.js-680"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-681"></a>            <span class="nx">defaults</span> <span class="o">=</span> <span class="p">{</span>
<a name="typeahead.bundle.js-682"></a>                <span class="nx">url</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span>
<a name="typeahead.bundle.js-683"></a>                <span class="nx">ttl</span><span class="o">:</span> <span class="mi">24</span> <span class="o">*</span> <span class="mi">60</span> <span class="o">*</span> <span class="mi">60</span> <span class="o">*</span> <span class="mi">1</span><span class="nx">e3</span><span class="p">,</span>
<a name="typeahead.bundle.js-684"></a>                <span class="nx">cache</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span>
<a name="typeahead.bundle.js-685"></a>                <span class="nx">cacheKey</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span>
<a name="typeahead.bundle.js-686"></a>                <span class="nx">thumbprint</span><span class="o">:</span> <span class="s2">&quot;&quot;</span><span class="p">,</span>
<a name="typeahead.bundle.js-687"></a>                <span class="nx">prepare</span><span class="o">:</span> <span class="nx">_</span><span class="p">.</span><span class="nx">identity</span><span class="p">,</span>
<a name="typeahead.bundle.js-688"></a>                <span class="nx">transform</span><span class="o">:</span> <span class="nx">_</span><span class="p">.</span><span class="nx">identity</span><span class="p">,</span>
<a name="typeahead.bundle.js-689"></a>                <span class="nx">transport</span><span class="o">:</span> <span class="kc">null</span>
<a name="typeahead.bundle.js-690"></a>            <span class="p">};</span>
<a name="typeahead.bundle.js-691"></a>            <span class="nx">o</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isString</span><span class="p">(</span><span class="nx">o</span><span class="p">)</span> <span class="o">?</span> <span class="p">{</span>
<a name="typeahead.bundle.js-692"></a>                <span class="nx">url</span><span class="o">:</span> <span class="nx">o</span>
<a name="typeahead.bundle.js-693"></a>            <span class="p">}</span> <span class="o">:</span> <span class="nx">o</span><span class="p">;</span>
<a name="typeahead.bundle.js-694"></a>            <span class="nx">o</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">mixin</span><span class="p">(</span><span class="nx">defaults</span><span class="p">,</span> <span class="nx">o</span><span class="p">);</span>
<a name="typeahead.bundle.js-695"></a>            <span class="o">!</span><span class="nx">o</span><span class="p">.</span><span class="nx">url</span> <span class="o">&amp;&amp;</span> <span class="nx">$</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="s2">&quot;prefetch requires url to be set&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-696"></a>            <span class="nx">o</span><span class="p">.</span><span class="nx">transform</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">filter</span> <span class="o">||</span> <span class="nx">o</span><span class="p">.</span><span class="nx">transform</span><span class="p">;</span>
<a name="typeahead.bundle.js-697"></a>            <span class="nx">o</span><span class="p">.</span><span class="nx">cacheKey</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">cacheKey</span> <span class="o">||</span> <span class="nx">o</span><span class="p">.</span><span class="nx">url</span><span class="p">;</span>
<a name="typeahead.bundle.js-698"></a>            <span class="nx">o</span><span class="p">.</span><span class="nx">thumbprint</span> <span class="o">=</span> <span class="nx">VERSION</span> <span class="o">+</span> <span class="nx">o</span><span class="p">.</span><span class="nx">thumbprint</span><span class="p">;</span>
<a name="typeahead.bundle.js-699"></a>            <span class="nx">o</span><span class="p">.</span><span class="nx">transport</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">transport</span> <span class="o">?</span> <span class="nx">callbackToDeferred</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">transport</span><span class="p">)</span> <span class="o">:</span> <span class="nx">$</span><span class="p">.</span><span class="nx">ajax</span><span class="p">;</span>
<a name="typeahead.bundle.js-700"></a>            <span class="k">return</span> <span class="nx">o</span><span class="p">;</span>
<a name="typeahead.bundle.js-701"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-702"></a>        <span class="kd">function</span> <span class="nx">parseRemote</span><span class="p">(</span><span class="nx">o</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-703"></a>            <span class="kd">var</span> <span class="nx">defaults</span><span class="p">;</span>
<a name="typeahead.bundle.js-704"></a>            <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">o</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-705"></a>                <span class="k">return</span><span class="p">;</span>
<a name="typeahead.bundle.js-706"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-707"></a>            <span class="nx">defaults</span> <span class="o">=</span> <span class="p">{</span>
<a name="typeahead.bundle.js-708"></a>                <span class="nx">url</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span>
<a name="typeahead.bundle.js-709"></a>                <span class="nx">cache</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span>
<a name="typeahead.bundle.js-710"></a>                <span class="nx">prepare</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span>
<a name="typeahead.bundle.js-711"></a>                <span class="nx">replace</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span>
<a name="typeahead.bundle.js-712"></a>                <span class="nx">wildcard</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span>
<a name="typeahead.bundle.js-713"></a>                <span class="nx">limiter</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span>
<a name="typeahead.bundle.js-714"></a>                <span class="nx">rateLimitBy</span><span class="o">:</span> <span class="s2">&quot;debounce&quot;</span><span class="p">,</span>
<a name="typeahead.bundle.js-715"></a>                <span class="nx">rateLimitWait</span><span class="o">:</span> <span class="mi">300</span><span class="p">,</span>
<a name="typeahead.bundle.js-716"></a>                <span class="nx">transform</span><span class="o">:</span> <span class="nx">_</span><span class="p">.</span><span class="nx">identity</span><span class="p">,</span>
<a name="typeahead.bundle.js-717"></a>                <span class="nx">transport</span><span class="o">:</span> <span class="kc">null</span>
<a name="typeahead.bundle.js-718"></a>            <span class="p">};</span>
<a name="typeahead.bundle.js-719"></a>            <span class="nx">o</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isString</span><span class="p">(</span><span class="nx">o</span><span class="p">)</span> <span class="o">?</span> <span class="p">{</span>
<a name="typeahead.bundle.js-720"></a>                <span class="nx">url</span><span class="o">:</span> <span class="nx">o</span>
<a name="typeahead.bundle.js-721"></a>            <span class="p">}</span> <span class="o">:</span> <span class="nx">o</span><span class="p">;</span>
<a name="typeahead.bundle.js-722"></a>            <span class="nx">o</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">mixin</span><span class="p">(</span><span class="nx">defaults</span><span class="p">,</span> <span class="nx">o</span><span class="p">);</span>
<a name="typeahead.bundle.js-723"></a>            <span class="o">!</span><span class="nx">o</span><span class="p">.</span><span class="nx">url</span> <span class="o">&amp;&amp;</span> <span class="nx">$</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="s2">&quot;remote requires url to be set&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-724"></a>            <span class="nx">o</span><span class="p">.</span><span class="nx">transform</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">filter</span> <span class="o">||</span> <span class="nx">o</span><span class="p">.</span><span class="nx">transform</span><span class="p">;</span>
<a name="typeahead.bundle.js-725"></a>            <span class="nx">o</span><span class="p">.</span><span class="nx">prepare</span> <span class="o">=</span> <span class="nx">toRemotePrepare</span><span class="p">(</span><span class="nx">o</span><span class="p">);</span>
<a name="typeahead.bundle.js-726"></a>            <span class="nx">o</span><span class="p">.</span><span class="nx">limiter</span> <span class="o">=</span> <span class="nx">toLimiter</span><span class="p">(</span><span class="nx">o</span><span class="p">);</span>
<a name="typeahead.bundle.js-727"></a>            <span class="nx">o</span><span class="p">.</span><span class="nx">transport</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">transport</span> <span class="o">?</span> <span class="nx">callbackToDeferred</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">transport</span><span class="p">)</span> <span class="o">:</span> <span class="nx">$</span><span class="p">.</span><span class="nx">ajax</span><span class="p">;</span>
<a name="typeahead.bundle.js-728"></a>            <span class="k">delete</span> <span class="nx">o</span><span class="p">.</span><span class="nx">replace</span><span class="p">;</span>
<a name="typeahead.bundle.js-729"></a>            <span class="k">delete</span> <span class="nx">o</span><span class="p">.</span><span class="nx">wildcard</span><span class="p">;</span>
<a name="typeahead.bundle.js-730"></a>            <span class="k">delete</span> <span class="nx">o</span><span class="p">.</span><span class="nx">rateLimitBy</span><span class="p">;</span>
<a name="typeahead.bundle.js-731"></a>            <span class="k">delete</span> <span class="nx">o</span><span class="p">.</span><span class="nx">rateLimitWait</span><span class="p">;</span>
<a name="typeahead.bundle.js-732"></a>            <span class="k">return</span> <span class="nx">o</span><span class="p">;</span>
<a name="typeahead.bundle.js-733"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-734"></a>        <span class="kd">function</span> <span class="nx">toRemotePrepare</span><span class="p">(</span><span class="nx">o</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-735"></a>            <span class="kd">var</span> <span class="nx">prepare</span><span class="p">,</span> <span class="nx">replace</span><span class="p">,</span> <span class="nx">wildcard</span><span class="p">;</span>
<a name="typeahead.bundle.js-736"></a>            <span class="nx">prepare</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">prepare</span><span class="p">;</span>
<a name="typeahead.bundle.js-737"></a>            <span class="nx">replace</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">replace</span><span class="p">;</span>
<a name="typeahead.bundle.js-738"></a>            <span class="nx">wildcard</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">wildcard</span><span class="p">;</span>
<a name="typeahead.bundle.js-739"></a>            <span class="k">if</span> <span class="p">(</span><span class="nx">prepare</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-740"></a>                <span class="k">return</span> <span class="nx">prepare</span><span class="p">;</span>
<a name="typeahead.bundle.js-741"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-742"></a>            <span class="k">if</span> <span class="p">(</span><span class="nx">replace</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-743"></a>                <span class="nx">prepare</span> <span class="o">=</span> <span class="nx">prepareByReplace</span><span class="p">;</span>
<a name="typeahead.bundle.js-744"></a>            <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">wildcard</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-745"></a>                <span class="nx">prepare</span> <span class="o">=</span> <span class="nx">prepareByWildcard</span><span class="p">;</span>
<a name="typeahead.bundle.js-746"></a>            <span class="p">}</span> <span class="k">else</span> <span class="p">{</span>
<a name="typeahead.bundle.js-747"></a>                <span class="nx">prepare</span> <span class="o">=</span> <span class="nx">idenityPrepare</span><span class="p">;</span>
<a name="typeahead.bundle.js-748"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-749"></a>            <span class="k">return</span> <span class="nx">prepare</span><span class="p">;</span>
<a name="typeahead.bundle.js-750"></a>            <span class="kd">function</span> <span class="nx">prepareByReplace</span><span class="p">(</span><span class="nx">query</span><span class="p">,</span> <span class="nx">settings</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-751"></a>                <span class="nx">settings</span><span class="p">.</span><span class="nx">url</span> <span class="o">=</span> <span class="nx">replace</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">url</span><span class="p">,</span> <span class="nx">query</span><span class="p">);</span>
<a name="typeahead.bundle.js-752"></a>                <span class="k">return</span> <span class="nx">settings</span><span class="p">;</span>
<a name="typeahead.bundle.js-753"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-754"></a>            <span class="kd">function</span> <span class="nx">prepareByWildcard</span><span class="p">(</span><span class="nx">query</span><span class="p">,</span> <span class="nx">settings</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-755"></a>                <span class="nx">settings</span><span class="p">.</span><span class="nx">url</span> <span class="o">=</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">url</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">wildcard</span><span class="p">,</span> <span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">query</span><span class="p">));</span>
<a name="typeahead.bundle.js-756"></a>                <span class="k">return</span> <span class="nx">settings</span><span class="p">;</span>
<a name="typeahead.bundle.js-757"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-758"></a>            <span class="kd">function</span> <span class="nx">idenityPrepare</span><span class="p">(</span><span class="nx">query</span><span class="p">,</span> <span class="nx">settings</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-759"></a>                <span class="k">return</span> <span class="nx">settings</span><span class="p">;</span>
<a name="typeahead.bundle.js-760"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-761"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-762"></a>        <span class="kd">function</span> <span class="nx">toLimiter</span><span class="p">(</span><span class="nx">o</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-763"></a>            <span class="kd">var</span> <span class="nx">limiter</span><span class="p">,</span> <span class="nx">method</span><span class="p">,</span> <span class="nx">wait</span><span class="p">;</span>
<a name="typeahead.bundle.js-764"></a>            <span class="nx">limiter</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">limiter</span><span class="p">;</span>
<a name="typeahead.bundle.js-765"></a>            <span class="nx">method</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">rateLimitBy</span><span class="p">;</span>
<a name="typeahead.bundle.js-766"></a>            <span class="nx">wait</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">rateLimitWait</span><span class="p">;</span>
<a name="typeahead.bundle.js-767"></a>            <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">limiter</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-768"></a>                <span class="nx">limiter</span> <span class="o">=</span> <span class="sr">/^throttle$/i</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">method</span><span class="p">)</span> <span class="o">?</span> <span class="nx">throttle</span><span class="p">(</span><span class="nx">wait</span><span class="p">)</span> <span class="o">:</span> <span class="nx">debounce</span><span class="p">(</span><span class="nx">wait</span><span class="p">);</span>
<a name="typeahead.bundle.js-769"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-770"></a>            <span class="k">return</span> <span class="nx">limiter</span><span class="p">;</span>
<a name="typeahead.bundle.js-771"></a>            <span class="kd">function</span> <span class="nx">debounce</span><span class="p">(</span><span class="nx">wait</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-772"></a>                <span class="k">return</span> <span class="kd">function</span> <span class="nx">debounce</span><span class="p">(</span><span class="nx">fn</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-773"></a>                    <span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">debounce</span><span class="p">(</span><span class="nx">fn</span><span class="p">,</span> <span class="nx">wait</span><span class="p">);</span>
<a name="typeahead.bundle.js-774"></a>                <span class="p">};</span>
<a name="typeahead.bundle.js-775"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-776"></a>            <span class="kd">function</span> <span class="nx">throttle</span><span class="p">(</span><span class="nx">wait</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-777"></a>                <span class="k">return</span> <span class="kd">function</span> <span class="nx">throttle</span><span class="p">(</span><span class="nx">fn</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-778"></a>                    <span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">throttle</span><span class="p">(</span><span class="nx">fn</span><span class="p">,</span> <span class="nx">wait</span><span class="p">);</span>
<a name="typeahead.bundle.js-779"></a>                <span class="p">};</span>
<a name="typeahead.bundle.js-780"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-781"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-782"></a>        <span class="kd">function</span> <span class="nx">callbackToDeferred</span><span class="p">(</span><span class="nx">fn</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-783"></a>            <span class="k">return</span> <span class="kd">function</span> <span class="nx">wrapper</span><span class="p">(</span><span class="nx">o</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-784"></a>                <span class="kd">var</span> <span class="nx">deferred</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">Deferred</span><span class="p">();</span>
<a name="typeahead.bundle.js-785"></a>                <span class="nx">fn</span><span class="p">(</span><span class="nx">o</span><span class="p">,</span> <span class="nx">onSuccess</span><span class="p">,</span> <span class="nx">onError</span><span class="p">);</span>
<a name="typeahead.bundle.js-786"></a>                <span class="k">return</span> <span class="nx">deferred</span><span class="p">;</span>
<a name="typeahead.bundle.js-787"></a>                <span class="kd">function</span> <span class="nx">onSuccess</span><span class="p">(</span><span class="nx">resp</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-788"></a>                    <span class="nx">_</span><span class="p">.</span><span class="nx">defer</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-789"></a>                        <span class="nx">deferred</span><span class="p">.</span><span class="nx">resolve</span><span class="p">(</span><span class="nx">resp</span><span class="p">);</span>
<a name="typeahead.bundle.js-790"></a>                    <span class="p">});</span>
<a name="typeahead.bundle.js-791"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-792"></a>                <span class="kd">function</span> <span class="nx">onError</span><span class="p">(</span><span class="nx">err</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-793"></a>                    <span class="nx">_</span><span class="p">.</span><span class="nx">defer</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-794"></a>                        <span class="nx">deferred</span><span class="p">.</span><span class="nx">reject</span><span class="p">(</span><span class="nx">err</span><span class="p">);</span>
<a name="typeahead.bundle.js-795"></a>                    <span class="p">});</span>
<a name="typeahead.bundle.js-796"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-797"></a>            <span class="p">};</span>
<a name="typeahead.bundle.js-798"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-799"></a>    <span class="p">}();</span>
<a name="typeahead.bundle.js-800"></a>    <span class="kd">var</span> <span class="nx">Bloodhound</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-801"></a>        <span class="s2">&quot;use strict&quot;</span><span class="p">;</span>
<a name="typeahead.bundle.js-802"></a>        <span class="kd">var</span> <span class="nx">old</span><span class="p">;</span>
<a name="typeahead.bundle.js-803"></a>        <span class="nx">old</span> <span class="o">=</span> <span class="nb">window</span> <span class="o">&amp;&amp;</span> <span class="nb">window</span><span class="p">.</span><span class="nx">Bloodhound</span><span class="p">;</span>
<a name="typeahead.bundle.js-804"></a>        <span class="kd">function</span> <span class="nx">Bloodhound</span><span class="p">(</span><span class="nx">o</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-805"></a>            <span class="nx">o</span> <span class="o">=</span> <span class="nx">oParser</span><span class="p">(</span><span class="nx">o</span><span class="p">);</span>
<a name="typeahead.bundle.js-806"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">sorter</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">sorter</span><span class="p">;</span>
<a name="typeahead.bundle.js-807"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">identify</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">identify</span><span class="p">;</span>
<a name="typeahead.bundle.js-808"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">sufficient</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">sufficient</span><span class="p">;</span>
<a name="typeahead.bundle.js-809"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">local</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">local</span><span class="p">;</span>
<a name="typeahead.bundle.js-810"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">remote</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">remote</span> <span class="o">?</span> <span class="k">new</span> <span class="nx">Remote</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">remote</span><span class="p">)</span> <span class="o">:</span> <span class="kc">null</span><span class="p">;</span>
<a name="typeahead.bundle.js-811"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">prefetch</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">prefetch</span> <span class="o">?</span> <span class="k">new</span> <span class="nx">Prefetch</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">prefetch</span><span class="p">)</span> <span class="o">:</span> <span class="kc">null</span><span class="p">;</span>
<a name="typeahead.bundle.js-812"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">index</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">SearchIndex</span><span class="p">({</span>
<a name="typeahead.bundle.js-813"></a>                <span class="nx">identify</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">identify</span><span class="p">,</span>
<a name="typeahead.bundle.js-814"></a>                <span class="nx">datumTokenizer</span><span class="o">:</span> <span class="nx">o</span><span class="p">.</span><span class="nx">datumTokenizer</span><span class="p">,</span>
<a name="typeahead.bundle.js-815"></a>                <span class="nx">queryTokenizer</span><span class="o">:</span> <span class="nx">o</span><span class="p">.</span><span class="nx">queryTokenizer</span>
<a name="typeahead.bundle.js-816"></a>            <span class="p">});</span>
<a name="typeahead.bundle.js-817"></a>            <span class="nx">o</span><span class="p">.</span><span class="nx">initialize</span> <span class="o">!==</span> <span class="kc">false</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">initialize</span><span class="p">();</span>
<a name="typeahead.bundle.js-818"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-819"></a>        <span class="nx">Bloodhound</span><span class="p">.</span><span class="nx">noConflict</span> <span class="o">=</span> <span class="kd">function</span> <span class="nx">noConflict</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-820"></a>            <span class="nb">window</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">Bloodhound</span> <span class="o">=</span> <span class="nx">old</span><span class="p">);</span>
<a name="typeahead.bundle.js-821"></a>            <span class="k">return</span> <span class="nx">Bloodhound</span><span class="p">;</span>
<a name="typeahead.bundle.js-822"></a>        <span class="p">};</span>
<a name="typeahead.bundle.js-823"></a>        <span class="nx">Bloodhound</span><span class="p">.</span><span class="nx">tokenizers</span> <span class="o">=</span> <span class="nx">tokenizers</span><span class="p">;</span>
<a name="typeahead.bundle.js-824"></a>        <span class="nx">_</span><span class="p">.</span><span class="nx">mixin</span><span class="p">(</span><span class="nx">Bloodhound</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span> <span class="p">{</span>
<a name="typeahead.bundle.js-825"></a>            <span class="nx">__ttAdapter</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">ttAdapter</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-826"></a>                <span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span>
<a name="typeahead.bundle.js-827"></a>                <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">remote</span> <span class="o">?</span> <span class="nx">withAsync</span> <span class="o">:</span> <span class="nx">withoutAsync</span><span class="p">;</span>
<a name="typeahead.bundle.js-828"></a>                <span class="kd">function</span> <span class="nx">withAsync</span><span class="p">(</span><span class="nx">query</span><span class="p">,</span> <span class="nx">sync</span><span class="p">,</span> <span class="nx">async</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-829"></a>                    <span class="k">return</span> <span class="nx">that</span><span class="p">.</span><span class="nx">search</span><span class="p">(</span><span class="nx">query</span><span class="p">,</span> <span class="nx">sync</span><span class="p">,</span> <span class="nx">async</span><span class="p">);</span>
<a name="typeahead.bundle.js-830"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-831"></a>                <span class="kd">function</span> <span class="nx">withoutAsync</span><span class="p">(</span><span class="nx">query</span><span class="p">,</span> <span class="nx">sync</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-832"></a>                    <span class="k">return</span> <span class="nx">that</span><span class="p">.</span><span class="nx">search</span><span class="p">(</span><span class="nx">query</span><span class="p">,</span> <span class="nx">sync</span><span class="p">);</span>
<a name="typeahead.bundle.js-833"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-834"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-835"></a>            <span class="nx">_loadPrefetch</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">loadPrefetch</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-836"></a>                <span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span><span class="p">,</span> <span class="nx">deferred</span><span class="p">,</span> <span class="nx">serialized</span><span class="p">;</span>
<a name="typeahead.bundle.js-837"></a>                <span class="nx">deferred</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">Deferred</span><span class="p">();</span>
<a name="typeahead.bundle.js-838"></a>                <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">prefetch</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-839"></a>                    <span class="nx">deferred</span><span class="p">.</span><span class="nx">resolve</span><span class="p">();</span>
<a name="typeahead.bundle.js-840"></a>                <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">serialized</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">prefetch</span><span class="p">.</span><span class="nx">fromCache</span><span class="p">())</span> <span class="p">{</span>
<a name="typeahead.bundle.js-841"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">index</span><span class="p">.</span><span class="nx">bootstrap</span><span class="p">(</span><span class="nx">serialized</span><span class="p">);</span>
<a name="typeahead.bundle.js-842"></a>                    <span class="nx">deferred</span><span class="p">.</span><span class="nx">resolve</span><span class="p">();</span>
<a name="typeahead.bundle.js-843"></a>                <span class="p">}</span> <span class="k">else</span> <span class="p">{</span>
<a name="typeahead.bundle.js-844"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">prefetch</span><span class="p">.</span><span class="nx">fromNetwork</span><span class="p">(</span><span class="nx">done</span><span class="p">);</span>
<a name="typeahead.bundle.js-845"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-846"></a>                <span class="k">return</span> <span class="nx">deferred</span><span class="p">.</span><span class="nx">promise</span><span class="p">();</span>
<a name="typeahead.bundle.js-847"></a>                <span class="kd">function</span> <span class="nx">done</span><span class="p">(</span><span class="nx">err</span><span class="p">,</span> <span class="nx">data</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-848"></a>                    <span class="k">if</span> <span class="p">(</span><span class="nx">err</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-849"></a>                        <span class="k">return</span> <span class="nx">deferred</span><span class="p">.</span><span class="nx">reject</span><span class="p">();</span>
<a name="typeahead.bundle.js-850"></a>                    <span class="p">}</span>
<a name="typeahead.bundle.js-851"></a>                    <span class="nx">that</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span><span class="nx">data</span><span class="p">);</span>
<a name="typeahead.bundle.js-852"></a>                    <span class="nx">that</span><span class="p">.</span><span class="nx">prefetch</span><span class="p">.</span><span class="nx">store</span><span class="p">(</span><span class="nx">that</span><span class="p">.</span><span class="nx">index</span><span class="p">.</span><span class="nx">serialize</span><span class="p">());</span>
<a name="typeahead.bundle.js-853"></a>                    <span class="nx">deferred</span><span class="p">.</span><span class="nx">resolve</span><span class="p">();</span>
<a name="typeahead.bundle.js-854"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-855"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-856"></a>            <span class="nx">_initialize</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">initialize</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-857"></a>                <span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span><span class="p">,</span> <span class="nx">deferred</span><span class="p">;</span>
<a name="typeahead.bundle.js-858"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">clear</span><span class="p">();</span>
<a name="typeahead.bundle.js-859"></a>                <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">initPromise</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_loadPrefetch</span><span class="p">()).</span><span class="nx">done</span><span class="p">(</span><span class="nx">addLocalToIndex</span><span class="p">);</span>
<a name="typeahead.bundle.js-860"></a>                <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">initPromise</span><span class="p">;</span>
<a name="typeahead.bundle.js-861"></a>                <span class="kd">function</span> <span class="nx">addLocalToIndex</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-862"></a>                    <span class="nx">that</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span><span class="nx">that</span><span class="p">.</span><span class="nx">local</span><span class="p">);</span>
<a name="typeahead.bundle.js-863"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-864"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-865"></a>            <span class="nx">initialize</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">initialize</span><span class="p">(</span><span class="nx">force</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-866"></a>                <span class="k">return</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">initPromise</span> <span class="o">||</span> <span class="nx">force</span> <span class="o">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">_initialize</span><span class="p">()</span> <span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">initPromise</span><span class="p">;</span>
<a name="typeahead.bundle.js-867"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-868"></a>            <span class="nx">add</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">add</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-869"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">index</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span><span class="nx">data</span><span class="p">);</span>
<a name="typeahead.bundle.js-870"></a>                <span class="k">return</span> <span class="k">this</span><span class="p">;</span>
<a name="typeahead.bundle.js-871"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-872"></a>            <span class="nx">get</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">get</span><span class="p">(</span><span class="nx">ids</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-873"></a>                <span class="nx">ids</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">ids</span><span class="p">)</span> <span class="o">?</span> <span class="nx">ids</span> <span class="o">:</span> <span class="p">[].</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">);</span>
<a name="typeahead.bundle.js-874"></a>                <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">index</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="nx">ids</span><span class="p">);</span>
<a name="typeahead.bundle.js-875"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-876"></a>            <span class="nx">search</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">search</span><span class="p">(</span><span class="nx">query</span><span class="p">,</span> <span class="nx">sync</span><span class="p">,</span> <span class="nx">async</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-877"></a>                <span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span><span class="p">,</span> <span class="nx">local</span><span class="p">;</span>
<a name="typeahead.bundle.js-878"></a>                <span class="nx">local</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">sorter</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">index</span><span class="p">.</span><span class="nx">search</span><span class="p">(</span><span class="nx">query</span><span class="p">));</span>
<a name="typeahead.bundle.js-879"></a>                <span class="nx">sync</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">remote</span> <span class="o">?</span> <span class="nx">local</span><span class="p">.</span><span class="nx">slice</span><span class="p">()</span> <span class="o">:</span> <span class="nx">local</span><span class="p">);</span>
<a name="typeahead.bundle.js-880"></a>                <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">remote</span> <span class="o">&amp;&amp;</span> <span class="nx">local</span><span class="p">.</span><span class="nx">length</span> <span class="o">&lt;</span> <span class="k">this</span><span class="p">.</span><span class="nx">sufficient</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-881"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">remote</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="nx">query</span><span class="p">,</span> <span class="nx">processRemote</span><span class="p">);</span>
<a name="typeahead.bundle.js-882"></a>                <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">remote</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-883"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">remote</span><span class="p">.</span><span class="nx">cancelLastRequest</span><span class="p">();</span>
<a name="typeahead.bundle.js-884"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-885"></a>                <span class="k">return</span> <span class="k">this</span><span class="p">;</span>
<a name="typeahead.bundle.js-886"></a>                <span class="kd">function</span> <span class="nx">processRemote</span><span class="p">(</span><span class="nx">remote</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-887"></a>                    <span class="kd">var</span> <span class="nx">nonDuplicates</span> <span class="o">=</span> <span class="p">[];</span>
<a name="typeahead.bundle.js-888"></a>                    <span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">remote</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">r</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-889"></a>                        <span class="o">!</span><span class="nx">_</span><span class="p">.</span><span class="nx">some</span><span class="p">(</span><span class="nx">local</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">l</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-890"></a>                            <span class="k">return</span> <span class="nx">that</span><span class="p">.</span><span class="nx">identify</span><span class="p">(</span><span class="nx">r</span><span class="p">)</span> <span class="o">===</span> <span class="nx">that</span><span class="p">.</span><span class="nx">identify</span><span class="p">(</span><span class="nx">l</span><span class="p">);</span>
<a name="typeahead.bundle.js-891"></a>                        <span class="p">})</span> <span class="o">&amp;&amp;</span> <span class="nx">nonDuplicates</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">r</span><span class="p">);</span>
<a name="typeahead.bundle.js-892"></a>                    <span class="p">});</span>
<a name="typeahead.bundle.js-893"></a>                    <span class="nx">async</span> <span class="o">&amp;&amp;</span> <span class="nx">async</span><span class="p">(</span><span class="nx">nonDuplicates</span><span class="p">);</span>
<a name="typeahead.bundle.js-894"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-895"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-896"></a>            <span class="nx">all</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">all</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-897"></a>                <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">index</span><span class="p">.</span><span class="nx">all</span><span class="p">();</span>
<a name="typeahead.bundle.js-898"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-899"></a>            <span class="nx">clear</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">clear</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-900"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">index</span><span class="p">.</span><span class="nx">reset</span><span class="p">();</span>
<a name="typeahead.bundle.js-901"></a>                <span class="k">return</span> <span class="k">this</span><span class="p">;</span>
<a name="typeahead.bundle.js-902"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-903"></a>            <span class="nx">clearPrefetchCache</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">clearPrefetchCache</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-904"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">prefetch</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">prefetch</span><span class="p">.</span><span class="nx">clear</span><span class="p">();</span>
<a name="typeahead.bundle.js-905"></a>                <span class="k">return</span> <span class="k">this</span><span class="p">;</span>
<a name="typeahead.bundle.js-906"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-907"></a>            <span class="nx">clearRemoteCache</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">clearRemoteCache</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-908"></a>                <span class="nx">Transport</span><span class="p">.</span><span class="nx">resetCache</span><span class="p">();</span>
<a name="typeahead.bundle.js-909"></a>                <span class="k">return</span> <span class="k">this</span><span class="p">;</span>
<a name="typeahead.bundle.js-910"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-911"></a>            <span class="nx">ttAdapter</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">ttAdapter</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-912"></a>                <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">__ttAdapter</span><span class="p">();</span>
<a name="typeahead.bundle.js-913"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-914"></a>        <span class="p">});</span>
<a name="typeahead.bundle.js-915"></a>        <span class="k">return</span> <span class="nx">Bloodhound</span><span class="p">;</span>
<a name="typeahead.bundle.js-916"></a>    <span class="p">}();</span>
<a name="typeahead.bundle.js-917"></a>    <span class="k">return</span> <span class="nx">Bloodhound</span><span class="p">;</span>
<a name="typeahead.bundle.js-918"></a><span class="p">});</span>
<a name="typeahead.bundle.js-919"></a>
<a name="typeahead.bundle.js-920"></a><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">root</span><span class="p">,</span> <span class="nx">factory</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-921"></a>    <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">define</span> <span class="o">===</span> <span class="s2">&quot;function&quot;</span> <span class="o">&amp;&amp;</span> <span class="nx">define</span><span class="p">.</span><span class="nx">amd</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-922"></a>        <span class="nx">define</span><span class="p">(</span><span class="s2">&quot;typeahead.js&quot;</span><span class="p">,</span> <span class="p">[</span> <span class="s2">&quot;jquery&quot;</span> <span class="p">],</span> <span class="kd">function</span><span class="p">(</span><span class="nx">a0</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-923"></a>            <span class="k">return</span> <span class="nx">factory</span><span class="p">(</span><span class="nx">a0</span><span class="p">);</span>
<a name="typeahead.bundle.js-924"></a>        <span class="p">});</span>
<a name="typeahead.bundle.js-925"></a>    <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">exports</span> <span class="o">===</span> <span class="s2">&quot;object&quot;</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-926"></a>        <span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="nx">factory</span><span class="p">(</span><span class="nx">require</span><span class="p">(</span><span class="s2">&quot;jquery&quot;</span><span class="p">));</span>
<a name="typeahead.bundle.js-927"></a>    <span class="p">}</span> <span class="k">else</span> <span class="p">{</span>
<a name="typeahead.bundle.js-928"></a>        <span class="nx">factory</span><span class="p">(</span><span class="nx">jQuery</span><span class="p">);</span>
<a name="typeahead.bundle.js-929"></a>    <span class="p">}</span>
<a name="typeahead.bundle.js-930"></a><span class="p">})(</span><span class="k">this</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">$</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-931"></a>    <span class="kd">var</span> <span class="nx">_</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-932"></a>        <span class="s2">&quot;use strict&quot;</span><span class="p">;</span>
<a name="typeahead.bundle.js-933"></a>        <span class="k">return</span> <span class="p">{</span>
<a name="typeahead.bundle.js-934"></a>            <span class="nx">isMsie</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-935"></a>                <span class="k">return</span> <span class="sr">/(msie|trident)/i</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">navigator</span><span class="p">.</span><span class="nx">userAgent</span><span class="p">)</span> <span class="o">?</span> <span class="nx">navigator</span><span class="p">.</span><span class="nx">userAgent</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/(msie |rv:)(\d+(.\d+)?)/i</span><span class="p">)[</span><span class="mi">2</span><span class="p">]</span> <span class="o">:</span> <span class="kc">false</span><span class="p">;</span>
<a name="typeahead.bundle.js-936"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-937"></a>            <span class="nx">isBlankString</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">str</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-938"></a>                <span class="k">return</span> <span class="o">!</span><span class="nx">str</span> <span class="o">||</span> <span class="sr">/^\s*$/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">str</span><span class="p">);</span>
<a name="typeahead.bundle.js-939"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-940"></a>            <span class="nx">escapeRegExChars</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">str</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-941"></a>                <span class="k">return</span> <span class="nx">str</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g</span><span class="p">,</span> <span class="s2">&quot;\\$&amp;&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-942"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-943"></a>            <span class="nx">isString</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-944"></a>                <span class="k">return</span> <span class="k">typeof</span> <span class="nx">obj</span> <span class="o">===</span> <span class="s2">&quot;string&quot;</span><span class="p">;</span>
<a name="typeahead.bundle.js-945"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-946"></a>            <span class="nx">isNumber</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-947"></a>                <span class="k">return</span> <span class="k">typeof</span> <span class="nx">obj</span> <span class="o">===</span> <span class="s2">&quot;number&quot;</span><span class="p">;</span>
<a name="typeahead.bundle.js-948"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-949"></a>            <span class="nx">isArray</span><span class="o">:</span> <span class="nx">$</span><span class="p">.</span><span class="nx">isArray</span><span class="p">,</span>
<a name="typeahead.bundle.js-950"></a>            <span class="nx">isFunction</span><span class="o">:</span> <span class="nx">$</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">,</span>
<a name="typeahead.bundle.js-951"></a>            <span class="nx">isObject</span><span class="o">:</span> <span class="nx">$</span><span class="p">.</span><span class="nx">isPlainObject</span><span class="p">,</span>
<a name="typeahead.bundle.js-952"></a>            <span class="nx">isUndefined</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-953"></a>                <span class="k">return</span> <span class="k">typeof</span> <span class="nx">obj</span> <span class="o">===</span> <span class="s2">&quot;undefined&quot;</span><span class="p">;</span>
<a name="typeahead.bundle.js-954"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-955"></a>            <span class="nx">isElement</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-956"></a>                <span class="k">return</span> <span class="o">!!</span><span class="p">(</span><span class="nx">obj</span> <span class="o">&amp;&amp;</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">===</span> <span class="mi">1</span><span class="p">);</span>
<a name="typeahead.bundle.js-957"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-958"></a>            <span class="nx">isJQuery</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-959"></a>                <span class="k">return</span> <span class="nx">obj</span> <span class="k">instanceof</span> <span class="nx">$</span><span class="p">;</span>
<a name="typeahead.bundle.js-960"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-961"></a>            <span class="nx">toStr</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">toStr</span><span class="p">(</span><span class="nx">s</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-962"></a>                <span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isUndefined</span><span class="p">(</span><span class="nx">s</span><span class="p">)</span> <span class="o">||</span> <span class="nx">s</span> <span class="o">===</span> <span class="kc">null</span> <span class="o">?</span> <span class="s2">&quot;&quot;</span> <span class="o">:</span> <span class="nx">s</span> <span class="o">+</span> <span class="s2">&quot;&quot;</span><span class="p">;</span>
<a name="typeahead.bundle.js-963"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-964"></a>            <span class="nx">bind</span><span class="o">:</span> <span class="nx">$</span><span class="p">.</span><span class="nx">proxy</span><span class="p">,</span>
<a name="typeahead.bundle.js-965"></a>            <span class="nx">each</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">collection</span><span class="p">,</span> <span class="nx">cb</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-966"></a>                <span class="nx">$</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">collection</span><span class="p">,</span> <span class="nx">reverseArgs</span><span class="p">);</span>
<a name="typeahead.bundle.js-967"></a>                <span class="kd">function</span> <span class="nx">reverseArgs</span><span class="p">(</span><span class="nx">index</span><span class="p">,</span> <span class="nx">value</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-968"></a>                    <span class="k">return</span> <span class="nx">cb</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">);</span>
<a name="typeahead.bundle.js-969"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-970"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-971"></a>            <span class="nx">map</span><span class="o">:</span> <span class="nx">$</span><span class="p">.</span><span class="nx">map</span><span class="p">,</span>
<a name="typeahead.bundle.js-972"></a>            <span class="nx">filter</span><span class="o">:</span> <span class="nx">$</span><span class="p">.</span><span class="nx">grep</span><span class="p">,</span>
<a name="typeahead.bundle.js-973"></a>            <span class="nx">every</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">test</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-974"></a>                <span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>
<a name="typeahead.bundle.js-975"></a>                <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-976"></a>                    <span class="k">return</span> <span class="nx">result</span><span class="p">;</span>
<a name="typeahead.bundle.js-977"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-978"></a>                <span class="nx">$</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">key</span><span class="p">,</span> <span class="nx">val</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-979"></a>                    <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="nx">result</span> <span class="o">=</span> <span class="nx">test</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span> <span class="nx">val</span><span class="p">,</span> <span class="nx">key</span><span class="p">,</span> <span class="nx">obj</span><span class="p">)))</span> <span class="p">{</span>
<a name="typeahead.bundle.js-980"></a>                        <span class="k">return</span> <span class="kc">false</span><span class="p">;</span>
<a name="typeahead.bundle.js-981"></a>                    <span class="p">}</span>
<a name="typeahead.bundle.js-982"></a>                <span class="p">});</span>
<a name="typeahead.bundle.js-983"></a>                <span class="k">return</span> <span class="o">!!</span><span class="nx">result</span><span class="p">;</span>
<a name="typeahead.bundle.js-984"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-985"></a>            <span class="nx">some</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">test</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-986"></a>                <span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span>
<a name="typeahead.bundle.js-987"></a>                <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-988"></a>                    <span class="k">return</span> <span class="nx">result</span><span class="p">;</span>
<a name="typeahead.bundle.js-989"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-990"></a>                <span class="nx">$</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">key</span><span class="p">,</span> <span class="nx">val</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-991"></a>                    <span class="k">if</span> <span class="p">(</span><span class="nx">result</span> <span class="o">=</span> <span class="nx">test</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span> <span class="nx">val</span><span class="p">,</span> <span class="nx">key</span><span class="p">,</span> <span class="nx">obj</span><span class="p">))</span> <span class="p">{</span>
<a name="typeahead.bundle.js-992"></a>                        <span class="k">return</span> <span class="kc">false</span><span class="p">;</span>
<a name="typeahead.bundle.js-993"></a>                    <span class="p">}</span>
<a name="typeahead.bundle.js-994"></a>                <span class="p">});</span>
<a name="typeahead.bundle.js-995"></a>                <span class="k">return</span> <span class="o">!!</span><span class="nx">result</span><span class="p">;</span>
<a name="typeahead.bundle.js-996"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-997"></a>            <span class="nx">mixin</span><span class="o">:</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">,</span>
<a name="typeahead.bundle.js-998"></a>            <span class="nx">identity</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">x</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-999"></a>                <span class="k">return</span> <span class="nx">x</span><span class="p">;</span>
<a name="typeahead.bundle.js-1000"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1001"></a>            <span class="nx">clone</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1002"></a>                <span class="k">return</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="kc">true</span><span class="p">,</span> <span class="p">{},</span> <span class="nx">obj</span><span class="p">);</span>
<a name="typeahead.bundle.js-1003"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1004"></a>            <span class="nx">getIdGenerator</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1005"></a>                <span class="kd">var</span> <span class="nx">counter</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
<a name="typeahead.bundle.js-1006"></a>                <span class="k">return</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1007"></a>                    <span class="k">return</span> <span class="nx">counter</span><span class="o">++</span><span class="p">;</span>
<a name="typeahead.bundle.js-1008"></a>                <span class="p">};</span>
<a name="typeahead.bundle.js-1009"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1010"></a>            <span class="nx">templatify</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">templatify</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1011"></a>                <span class="k">return</span> <span class="nx">$</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="o">?</span> <span class="nx">obj</span> <span class="o">:</span> <span class="nx">template</span><span class="p">;</span>
<a name="typeahead.bundle.js-1012"></a>                <span class="kd">function</span> <span class="nx">template</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1013"></a>                    <span class="k">return</span> <span class="nb">String</span><span class="p">(</span><span class="nx">obj</span><span class="p">);</span>
<a name="typeahead.bundle.js-1014"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-1015"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1016"></a>            <span class="nx">defer</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">fn</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1017"></a>                <span class="nx">setTimeout</span><span class="p">(</span><span class="nx">fn</span><span class="p">,</span> <span class="mi">0</span><span class="p">);</span>
<a name="typeahead.bundle.js-1018"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1019"></a>            <span class="nx">debounce</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">func</span><span class="p">,</span> <span class="nx">wait</span><span class="p">,</span> <span class="nx">immediate</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1020"></a>                <span class="kd">var</span> <span class="nx">timeout</span><span class="p">,</span> <span class="nx">result</span><span class="p">;</span>
<a name="typeahead.bundle.js-1021"></a>                <span class="k">return</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1022"></a>                    <span class="kd">var</span> <span class="nx">context</span> <span class="o">=</span> <span class="k">this</span><span class="p">,</span> <span class="nx">args</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">,</span> <span class="nx">later</span><span class="p">,</span> <span class="nx">callNow</span><span class="p">;</span>
<a name="typeahead.bundle.js-1023"></a>                    <span class="nx">later</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1024"></a>                        <span class="nx">timeout</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span>
<a name="typeahead.bundle.js-1025"></a>                        <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">immediate</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1026"></a>                            <span class="nx">result</span> <span class="o">=</span> <span class="nx">func</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">args</span><span class="p">);</span>
<a name="typeahead.bundle.js-1027"></a>                        <span class="p">}</span>
<a name="typeahead.bundle.js-1028"></a>                    <span class="p">};</span>
<a name="typeahead.bundle.js-1029"></a>                    <span class="nx">callNow</span> <span class="o">=</span> <span class="nx">immediate</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">timeout</span><span class="p">;</span>
<a name="typeahead.bundle.js-1030"></a>                    <span class="nx">clearTimeout</span><span class="p">(</span><span class="nx">timeout</span><span class="p">);</span>
<a name="typeahead.bundle.js-1031"></a>                    <span class="nx">timeout</span> <span class="o">=</span> <span class="nx">setTimeout</span><span class="p">(</span><span class="nx">later</span><span class="p">,</span> <span class="nx">wait</span><span class="p">);</span>
<a name="typeahead.bundle.js-1032"></a>                    <span class="k">if</span> <span class="p">(</span><span class="nx">callNow</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1033"></a>                        <span class="nx">result</span> <span class="o">=</span> <span class="nx">func</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">args</span><span class="p">);</span>
<a name="typeahead.bundle.js-1034"></a>                    <span class="p">}</span>
<a name="typeahead.bundle.js-1035"></a>                    <span class="k">return</span> <span class="nx">result</span><span class="p">;</span>
<a name="typeahead.bundle.js-1036"></a>                <span class="p">};</span>
<a name="typeahead.bundle.js-1037"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1038"></a>            <span class="nx">throttle</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">func</span><span class="p">,</span> <span class="nx">wait</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1039"></a>                <span class="kd">var</span> <span class="nx">context</span><span class="p">,</span> <span class="nx">args</span><span class="p">,</span> <span class="nx">timeout</span><span class="p">,</span> <span class="nx">result</span><span class="p">,</span> <span class="nx">previous</span><span class="p">,</span> <span class="nx">later</span><span class="p">;</span>
<a name="typeahead.bundle.js-1040"></a>                <span class="nx">previous</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
<a name="typeahead.bundle.js-1041"></a>                <span class="nx">later</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1042"></a>                    <span class="nx">previous</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">();</span>
<a name="typeahead.bundle.js-1043"></a>                    <span class="nx">timeout</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span>
<a name="typeahead.bundle.js-1044"></a>                    <span class="nx">result</span> <span class="o">=</span> <span class="nx">func</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">args</span><span class="p">);</span>
<a name="typeahead.bundle.js-1045"></a>                <span class="p">};</span>
<a name="typeahead.bundle.js-1046"></a>                <span class="k">return</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1047"></a>                    <span class="kd">var</span> <span class="nx">now</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">(),</span> <span class="nx">remaining</span> <span class="o">=</span> <span class="nx">wait</span> <span class="o">-</span> <span class="p">(</span><span class="nx">now</span> <span class="o">-</span> <span class="nx">previous</span><span class="p">);</span>
<a name="typeahead.bundle.js-1048"></a>                    <span class="nx">context</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span>
<a name="typeahead.bundle.js-1049"></a>                    <span class="nx">args</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">;</span>
<a name="typeahead.bundle.js-1050"></a>                    <span class="k">if</span> <span class="p">(</span><span class="nx">remaining</span> <span class="o">&lt;=</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1051"></a>                        <span class="nx">clearTimeout</span><span class="p">(</span><span class="nx">timeout</span><span class="p">);</span>
<a name="typeahead.bundle.js-1052"></a>                        <span class="nx">timeout</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span>
<a name="typeahead.bundle.js-1053"></a>                        <span class="nx">previous</span> <span class="o">=</span> <span class="nx">now</span><span class="p">;</span>
<a name="typeahead.bundle.js-1054"></a>                        <span class="nx">result</span> <span class="o">=</span> <span class="nx">func</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">args</span><span class="p">);</span>
<a name="typeahead.bundle.js-1055"></a>                    <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">timeout</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1056"></a>                        <span class="nx">timeout</span> <span class="o">=</span> <span class="nx">setTimeout</span><span class="p">(</span><span class="nx">later</span><span class="p">,</span> <span class="nx">remaining</span><span class="p">);</span>
<a name="typeahead.bundle.js-1057"></a>                    <span class="p">}</span>
<a name="typeahead.bundle.js-1058"></a>                    <span class="k">return</span> <span class="nx">result</span><span class="p">;</span>
<a name="typeahead.bundle.js-1059"></a>                <span class="p">};</span>
<a name="typeahead.bundle.js-1060"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1061"></a>            <span class="nx">stringify</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1062"></a>                <span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isString</span><span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="o">?</span> <span class="nx">val</span> <span class="o">:</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">val</span><span class="p">);</span>
<a name="typeahead.bundle.js-1063"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1064"></a>            <span class="nx">noop</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{}</span>
<a name="typeahead.bundle.js-1065"></a>        <span class="p">};</span>
<a name="typeahead.bundle.js-1066"></a>    <span class="p">}();</span>
<a name="typeahead.bundle.js-1067"></a>    <span class="kd">var</span> <span class="nx">WWW</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1068"></a>        <span class="s2">&quot;use strict&quot;</span><span class="p">;</span>
<a name="typeahead.bundle.js-1069"></a>        <span class="kd">var</span> <span class="nx">defaultClassNames</span> <span class="o">=</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1070"></a>            <span class="nx">wrapper</span><span class="o">:</span> <span class="s2">&quot;twitter-typeahead&quot;</span><span class="p">,</span>
<a name="typeahead.bundle.js-1071"></a>            <span class="nx">input</span><span class="o">:</span> <span class="s2">&quot;tt-input&quot;</span><span class="p">,</span>
<a name="typeahead.bundle.js-1072"></a>            <span class="nx">hint</span><span class="o">:</span> <span class="s2">&quot;tt-hint&quot;</span><span class="p">,</span>
<a name="typeahead.bundle.js-1073"></a>            <span class="nx">menu</span><span class="o">:</span> <span class="s2">&quot;tt-menu&quot;</span><span class="p">,</span>
<a name="typeahead.bundle.js-1074"></a>            <span class="nx">dataset</span><span class="o">:</span> <span class="s2">&quot;tt-dataset&quot;</span><span class="p">,</span>
<a name="typeahead.bundle.js-1075"></a>            <span class="nx">suggestion</span><span class="o">:</span> <span class="s2">&quot;tt-suggestion&quot;</span><span class="p">,</span>
<a name="typeahead.bundle.js-1076"></a>            <span class="nx">selectable</span><span class="o">:</span> <span class="s2">&quot;tt-selectable&quot;</span><span class="p">,</span>
<a name="typeahead.bundle.js-1077"></a>            <span class="nx">empty</span><span class="o">:</span> <span class="s2">&quot;tt-empty&quot;</span><span class="p">,</span>
<a name="typeahead.bundle.js-1078"></a>            <span class="nx">open</span><span class="o">:</span> <span class="s2">&quot;tt-open&quot;</span><span class="p">,</span>
<a name="typeahead.bundle.js-1079"></a>            <span class="nx">cursor</span><span class="o">:</span> <span class="s2">&quot;tt-cursor&quot;</span><span class="p">,</span>
<a name="typeahead.bundle.js-1080"></a>            <span class="nx">highlight</span><span class="o">:</span> <span class="s2">&quot;tt-highlight&quot;</span>
<a name="typeahead.bundle.js-1081"></a>        <span class="p">};</span>
<a name="typeahead.bundle.js-1082"></a>        <span class="k">return</span> <span class="nx">build</span><span class="p">;</span>
<a name="typeahead.bundle.js-1083"></a>        <span class="kd">function</span> <span class="nx">build</span><span class="p">(</span><span class="nx">o</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1084"></a>            <span class="kd">var</span> <span class="nx">www</span><span class="p">,</span> <span class="nx">classes</span><span class="p">;</span>
<a name="typeahead.bundle.js-1085"></a>            <span class="nx">classes</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">mixin</span><span class="p">({},</span> <span class="nx">defaultClassNames</span><span class="p">,</span> <span class="nx">o</span><span class="p">);</span>
<a name="typeahead.bundle.js-1086"></a>            <span class="nx">www</span> <span class="o">=</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1087"></a>                <span class="nx">css</span><span class="o">:</span> <span class="nx">buildCss</span><span class="p">(),</span>
<a name="typeahead.bundle.js-1088"></a>                <span class="nx">classes</span><span class="o">:</span> <span class="nx">classes</span><span class="p">,</span>
<a name="typeahead.bundle.js-1089"></a>                <span class="nx">html</span><span class="o">:</span> <span class="nx">buildHtml</span><span class="p">(</span><span class="nx">classes</span><span class="p">),</span>
<a name="typeahead.bundle.js-1090"></a>                <span class="nx">selectors</span><span class="o">:</span> <span class="nx">buildSelectors</span><span class="p">(</span><span class="nx">classes</span><span class="p">)</span>
<a name="typeahead.bundle.js-1091"></a>            <span class="p">};</span>
<a name="typeahead.bundle.js-1092"></a>            <span class="k">return</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1093"></a>                <span class="nx">css</span><span class="o">:</span> <span class="nx">www</span><span class="p">.</span><span class="nx">css</span><span class="p">,</span>
<a name="typeahead.bundle.js-1094"></a>                <span class="nx">html</span><span class="o">:</span> <span class="nx">www</span><span class="p">.</span><span class="nx">html</span><span class="p">,</span>
<a name="typeahead.bundle.js-1095"></a>                <span class="nx">classes</span><span class="o">:</span> <span class="nx">www</span><span class="p">.</span><span class="nx">classes</span><span class="p">,</span>
<a name="typeahead.bundle.js-1096"></a>                <span class="nx">selectors</span><span class="o">:</span> <span class="nx">www</span><span class="p">.</span><span class="nx">selectors</span><span class="p">,</span>
<a name="typeahead.bundle.js-1097"></a>                <span class="nx">mixin</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">o</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1098"></a>                    <span class="nx">_</span><span class="p">.</span><span class="nx">mixin</span><span class="p">(</span><span class="nx">o</span><span class="p">,</span> <span class="nx">www</span><span class="p">);</span>
<a name="typeahead.bundle.js-1099"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-1100"></a>            <span class="p">};</span>
<a name="typeahead.bundle.js-1101"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-1102"></a>        <span class="kd">function</span> <span class="nx">buildHtml</span><span class="p">(</span><span class="nx">c</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1103"></a>            <span class="k">return</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1104"></a>                <span class="nx">wrapper</span><span class="o">:</span> <span class="s1">&#39;&lt;span class=&quot;&#39;</span> <span class="o">+</span> <span class="nx">c</span><span class="p">.</span><span class="nx">wrapper</span> <span class="o">+</span> <span class="s1">&#39;&quot;&gt;&lt;/span&gt;&#39;</span><span class="p">,</span>
<a name="typeahead.bundle.js-1105"></a>                <span class="nx">menu</span><span class="o">:</span> <span class="s1">&#39;&lt;div class=&quot;&#39;</span> <span class="o">+</span> <span class="nx">c</span><span class="p">.</span><span class="nx">menu</span> <span class="o">+</span> <span class="s1">&#39;&quot;&gt;&lt;/div&gt;&#39;</span>
<a name="typeahead.bundle.js-1106"></a>            <span class="p">};</span>
<a name="typeahead.bundle.js-1107"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-1108"></a>        <span class="kd">function</span> <span class="nx">buildSelectors</span><span class="p">(</span><span class="nx">classes</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1109"></a>            <span class="kd">var</span> <span class="nx">selectors</span> <span class="o">=</span> <span class="p">{};</span>
<a name="typeahead.bundle.js-1110"></a>            <span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">classes</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">v</span><span class="p">,</span> <span class="nx">k</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1111"></a>                <span class="nx">selectors</span><span class="p">[</span><span class="nx">k</span><span class="p">]</span> <span class="o">=</span> <span class="s2">&quot;.&quot;</span> <span class="o">+</span> <span class="nx">v</span><span class="p">;</span>
<a name="typeahead.bundle.js-1112"></a>            <span class="p">});</span>
<a name="typeahead.bundle.js-1113"></a>            <span class="k">return</span> <span class="nx">selectors</span><span class="p">;</span>
<a name="typeahead.bundle.js-1114"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-1115"></a>        <span class="kd">function</span> <span class="nx">buildCss</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1116"></a>            <span class="kd">var</span> <span class="nx">css</span> <span class="o">=</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1117"></a>                <span class="nx">wrapper</span><span class="o">:</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1118"></a>                    <span class="nx">position</span><span class="o">:</span> <span class="s2">&quot;relative&quot;</span><span class="p">,</span>
<a name="typeahead.bundle.js-1119"></a>                    <span class="nx">display</span><span class="o">:</span> <span class="s2">&quot;inline-block&quot;</span>
<a name="typeahead.bundle.js-1120"></a>                <span class="p">},</span>
<a name="typeahead.bundle.js-1121"></a>                <span class="nx">hint</span><span class="o">:</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1122"></a>                    <span class="nx">position</span><span class="o">:</span> <span class="s2">&quot;absolute&quot;</span><span class="p">,</span>
<a name="typeahead.bundle.js-1123"></a>                    <span class="nx">top</span><span class="o">:</span> <span class="s2">&quot;0&quot;</span><span class="p">,</span>
<a name="typeahead.bundle.js-1124"></a>                    <span class="nx">left</span><span class="o">:</span> <span class="s2">&quot;0&quot;</span><span class="p">,</span>
<a name="typeahead.bundle.js-1125"></a>                    <span class="nx">borderColor</span><span class="o">:</span> <span class="s2">&quot;transparent&quot;</span><span class="p">,</span>
<a name="typeahead.bundle.js-1126"></a>                    <span class="nx">boxShadow</span><span class="o">:</span> <span class="s2">&quot;none&quot;</span><span class="p">,</span>
<a name="typeahead.bundle.js-1127"></a>                    <span class="nx">opacity</span><span class="o">:</span> <span class="s2">&quot;1&quot;</span>
<a name="typeahead.bundle.js-1128"></a>                <span class="p">},</span>
<a name="typeahead.bundle.js-1129"></a>                <span class="nx">input</span><span class="o">:</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1130"></a>                    <span class="nx">position</span><span class="o">:</span> <span class="s2">&quot;relative&quot;</span><span class="p">,</span>
<a name="typeahead.bundle.js-1131"></a>                    <span class="nx">verticalAlign</span><span class="o">:</span> <span class="s2">&quot;top&quot;</span><span class="p">,</span>
<a name="typeahead.bundle.js-1132"></a>                    <span class="nx">backgroundColor</span><span class="o">:</span> <span class="s2">&quot;transparent&quot;</span>
<a name="typeahead.bundle.js-1133"></a>                <span class="p">},</span>
<a name="typeahead.bundle.js-1134"></a>                <span class="nx">inputWithNoHint</span><span class="o">:</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1135"></a>                    <span class="nx">position</span><span class="o">:</span> <span class="s2">&quot;relative&quot;</span><span class="p">,</span>
<a name="typeahead.bundle.js-1136"></a>                    <span class="nx">verticalAlign</span><span class="o">:</span> <span class="s2">&quot;top&quot;</span>
<a name="typeahead.bundle.js-1137"></a>                <span class="p">},</span>
<a name="typeahead.bundle.js-1138"></a>                <span class="nx">menu</span><span class="o">:</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1139"></a>                    <span class="nx">position</span><span class="o">:</span> <span class="s2">&quot;absolute&quot;</span><span class="p">,</span>
<a name="typeahead.bundle.js-1140"></a>                    <span class="nx">top</span><span class="o">:</span> <span class="s2">&quot;100%&quot;</span><span class="p">,</span>
<a name="typeahead.bundle.js-1141"></a>                    <span class="nx">left</span><span class="o">:</span> <span class="s2">&quot;0&quot;</span><span class="p">,</span>
<a name="typeahead.bundle.js-1142"></a>                    <span class="nx">zIndex</span><span class="o">:</span> <span class="s2">&quot;100&quot;</span><span class="p">,</span>
<a name="typeahead.bundle.js-1143"></a>                    <span class="nx">display</span><span class="o">:</span> <span class="s2">&quot;none&quot;</span>
<a name="typeahead.bundle.js-1144"></a>                <span class="p">},</span>
<a name="typeahead.bundle.js-1145"></a>                <span class="nx">ltr</span><span class="o">:</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1146"></a>                    <span class="nx">left</span><span class="o">:</span> <span class="s2">&quot;0&quot;</span><span class="p">,</span>
<a name="typeahead.bundle.js-1147"></a>                    <span class="nx">right</span><span class="o">:</span> <span class="s2">&quot;auto&quot;</span>
<a name="typeahead.bundle.js-1148"></a>                <span class="p">},</span>
<a name="typeahead.bundle.js-1149"></a>                <span class="nx">rtl</span><span class="o">:</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1150"></a>                    <span class="nx">left</span><span class="o">:</span> <span class="s2">&quot;auto&quot;</span><span class="p">,</span>
<a name="typeahead.bundle.js-1151"></a>                    <span class="nx">right</span><span class="o">:</span> <span class="s2">&quot; 0&quot;</span>
<a name="typeahead.bundle.js-1152"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-1153"></a>            <span class="p">};</span>
<a name="typeahead.bundle.js-1154"></a>            <span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isMsie</span><span class="p">())</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1155"></a>                <span class="nx">_</span><span class="p">.</span><span class="nx">mixin</span><span class="p">(</span><span class="nx">css</span><span class="p">.</span><span class="nx">input</span><span class="p">,</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1156"></a>                    <span class="nx">backgroundImage</span><span class="o">:</span> <span class="s2">&quot;url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)&quot;</span>
<a name="typeahead.bundle.js-1157"></a>                <span class="p">});</span>
<a name="typeahead.bundle.js-1158"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-1159"></a>            <span class="k">return</span> <span class="nx">css</span><span class="p">;</span>
<a name="typeahead.bundle.js-1160"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-1161"></a>    <span class="p">}();</span>
<a name="typeahead.bundle.js-1162"></a>    <span class="kd">var</span> <span class="nx">EventBus</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1163"></a>        <span class="s2">&quot;use strict&quot;</span><span class="p">;</span>
<a name="typeahead.bundle.js-1164"></a>        <span class="kd">var</span> <span class="nx">namespace</span><span class="p">,</span> <span class="nx">deprecationMap</span><span class="p">;</span>
<a name="typeahead.bundle.js-1165"></a>        <span class="nx">namespace</span> <span class="o">=</span> <span class="s2">&quot;typeahead:&quot;</span><span class="p">;</span>
<a name="typeahead.bundle.js-1166"></a>        <span class="nx">deprecationMap</span> <span class="o">=</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1167"></a>            <span class="nx">render</span><span class="o">:</span> <span class="s2">&quot;rendered&quot;</span><span class="p">,</span>
<a name="typeahead.bundle.js-1168"></a>            <span class="nx">cursorchange</span><span class="o">:</span> <span class="s2">&quot;cursorchanged&quot;</span><span class="p">,</span>
<a name="typeahead.bundle.js-1169"></a>            <span class="nx">select</span><span class="o">:</span> <span class="s2">&quot;selected&quot;</span><span class="p">,</span>
<a name="typeahead.bundle.js-1170"></a>            <span class="nx">autocomplete</span><span class="o">:</span> <span class="s2">&quot;autocompleted&quot;</span>
<a name="typeahead.bundle.js-1171"></a>        <span class="p">};</span>
<a name="typeahead.bundle.js-1172"></a>        <span class="kd">function</span> <span class="nx">EventBus</span><span class="p">(</span><span class="nx">o</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1173"></a>            <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">o</span> <span class="o">||</span> <span class="o">!</span><span class="nx">o</span><span class="p">.</span><span class="nx">el</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1174"></a>                <span class="nx">$</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="s2">&quot;EventBus initialized without el&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-1175"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-1176"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">$el</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">el</span><span class="p">);</span>
<a name="typeahead.bundle.js-1177"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-1178"></a>        <span class="nx">_</span><span class="p">.</span><span class="nx">mixin</span><span class="p">(</span><span class="nx">EventBus</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1179"></a>            <span class="nx">_trigger</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">type</span><span class="p">,</span> <span class="nx">args</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1180"></a>                <span class="kd">var</span> <span class="nx">$e</span><span class="p">;</span>
<a name="typeahead.bundle.js-1181"></a>                <span class="nx">$e</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">Event</span><span class="p">(</span><span class="nx">namespace</span> <span class="o">+</span> <span class="nx">type</span><span class="p">);</span>
<a name="typeahead.bundle.js-1182"></a>                <span class="p">(</span><span class="nx">args</span> <span class="o">=</span> <span class="nx">args</span> <span class="o">||</span> <span class="p">[]).</span><span class="nx">unshift</span><span class="p">(</span><span class="nx">$e</span><span class="p">);</span>
<a name="typeahead.bundle.js-1183"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">$el</span><span class="p">.</span><span class="nx">trigger</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">$el</span><span class="p">,</span> <span class="nx">args</span><span class="p">);</span>
<a name="typeahead.bundle.js-1184"></a>                <span class="k">return</span> <span class="nx">$e</span><span class="p">;</span>
<a name="typeahead.bundle.js-1185"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1186"></a>            <span class="nx">before</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">type</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1187"></a>                <span class="kd">var</span> <span class="nx">args</span><span class="p">,</span> <span class="nx">$e</span><span class="p">;</span>
<a name="typeahead.bundle.js-1188"></a>                <span class="nx">args</span> <span class="o">=</span> <span class="p">[].</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span>
<a name="typeahead.bundle.js-1189"></a>                <span class="nx">$e</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_trigger</span><span class="p">(</span><span class="s2">&quot;before&quot;</span> <span class="o">+</span> <span class="nx">type</span><span class="p">,</span> <span class="nx">args</span><span class="p">);</span>
<a name="typeahead.bundle.js-1190"></a>                <span class="k">return</span> <span class="nx">$e</span><span class="p">.</span><span class="nx">isDefaultPrevented</span><span class="p">();</span>
<a name="typeahead.bundle.js-1191"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1192"></a>            <span class="nx">trigger</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">type</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1193"></a>                <span class="kd">var</span> <span class="nx">deprecatedType</span><span class="p">;</span>
<a name="typeahead.bundle.js-1194"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">_trigger</span><span class="p">(</span><span class="nx">type</span><span class="p">,</span> <span class="p">[].</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">1</span><span class="p">));</span>
<a name="typeahead.bundle.js-1195"></a>                <span class="k">if</span> <span class="p">(</span><span class="nx">deprecatedType</span> <span class="o">=</span> <span class="nx">deprecationMap</span><span class="p">[</span><span class="nx">type</span><span class="p">])</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1196"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">_trigger</span><span class="p">(</span><span class="nx">deprecatedType</span><span class="p">,</span> <span class="p">[].</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">1</span><span class="p">));</span>
<a name="typeahead.bundle.js-1197"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-1198"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-1199"></a>        <span class="p">});</span>
<a name="typeahead.bundle.js-1200"></a>        <span class="k">return</span> <span class="nx">EventBus</span><span class="p">;</span>
<a name="typeahead.bundle.js-1201"></a>    <span class="p">}();</span>
<a name="typeahead.bundle.js-1202"></a>    <span class="kd">var</span> <span class="nx">EventEmitter</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1203"></a>        <span class="s2">&quot;use strict&quot;</span><span class="p">;</span>
<a name="typeahead.bundle.js-1204"></a>        <span class="kd">var</span> <span class="nx">splitter</span> <span class="o">=</span> <span class="sr">/\s+/</span><span class="p">,</span> <span class="nx">nextTick</span> <span class="o">=</span> <span class="nx">getNextTick</span><span class="p">();</span>
<a name="typeahead.bundle.js-1205"></a>        <span class="k">return</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1206"></a>            <span class="nx">onSync</span><span class="o">:</span> <span class="nx">onSync</span><span class="p">,</span>
<a name="typeahead.bundle.js-1207"></a>            <span class="nx">onAsync</span><span class="o">:</span> <span class="nx">onAsync</span><span class="p">,</span>
<a name="typeahead.bundle.js-1208"></a>            <span class="nx">off</span><span class="o">:</span> <span class="nx">off</span><span class="p">,</span>
<a name="typeahead.bundle.js-1209"></a>            <span class="nx">trigger</span><span class="o">:</span> <span class="nx">trigger</span>
<a name="typeahead.bundle.js-1210"></a>        <span class="p">};</span>
<a name="typeahead.bundle.js-1211"></a>        <span class="kd">function</span> <span class="nx">on</span><span class="p">(</span><span class="nx">method</span><span class="p">,</span> <span class="nx">types</span><span class="p">,</span> <span class="nx">cb</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1212"></a>            <span class="kd">var</span> <span class="nx">type</span><span class="p">;</span>
<a name="typeahead.bundle.js-1213"></a>            <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">cb</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1214"></a>                <span class="k">return</span> <span class="k">this</span><span class="p">;</span>
<a name="typeahead.bundle.js-1215"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-1216"></a>            <span class="nx">types</span> <span class="o">=</span> <span class="nx">types</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="nx">splitter</span><span class="p">);</span>
<a name="typeahead.bundle.js-1217"></a>            <span class="nx">cb</span> <span class="o">=</span> <span class="nx">context</span> <span class="o">?</span> <span class="nx">bindContext</span><span class="p">(</span><span class="nx">cb</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="o">:</span> <span class="nx">cb</span><span class="p">;</span>
<a name="typeahead.bundle.js-1218"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">_callbacks</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_callbacks</span> <span class="o">||</span> <span class="p">{};</span>
<a name="typeahead.bundle.js-1219"></a>            <span class="k">while</span> <span class="p">(</span><span class="nx">type</span> <span class="o">=</span> <span class="nx">types</span><span class="p">.</span><span class="nx">shift</span><span class="p">())</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1220"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">_callbacks</span><span class="p">[</span><span class="nx">type</span><span class="p">]</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_callbacks</span><span class="p">[</span><span class="nx">type</span><span class="p">]</span> <span class="o">||</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1221"></a>                    <span class="nx">sync</span><span class="o">:</span> <span class="p">[],</span>
<a name="typeahead.bundle.js-1222"></a>                    <span class="nx">async</span><span class="o">:</span> <span class="p">[]</span>
<a name="typeahead.bundle.js-1223"></a>                <span class="p">};</span>
<a name="typeahead.bundle.js-1224"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">_callbacks</span><span class="p">[</span><span class="nx">type</span><span class="p">][</span><span class="nx">method</span><span class="p">].</span><span class="nx">push</span><span class="p">(</span><span class="nx">cb</span><span class="p">);</span>
<a name="typeahead.bundle.js-1225"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-1226"></a>            <span class="k">return</span> <span class="k">this</span><span class="p">;</span>
<a name="typeahead.bundle.js-1227"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-1228"></a>        <span class="kd">function</span> <span class="nx">onAsync</span><span class="p">(</span><span class="nx">types</span><span class="p">,</span> <span class="nx">cb</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1229"></a>            <span class="k">return</span> <span class="nx">on</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s2">&quot;async&quot;</span><span class="p">,</span> <span class="nx">types</span><span class="p">,</span> <span class="nx">cb</span><span class="p">,</span> <span class="nx">context</span><span class="p">);</span>
<a name="typeahead.bundle.js-1230"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-1231"></a>        <span class="kd">function</span> <span class="nx">onSync</span><span class="p">(</span><span class="nx">types</span><span class="p">,</span> <span class="nx">cb</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1232"></a>            <span class="k">return</span> <span class="nx">on</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s2">&quot;sync&quot;</span><span class="p">,</span> <span class="nx">types</span><span class="p">,</span> <span class="nx">cb</span><span class="p">,</span> <span class="nx">context</span><span class="p">);</span>
<a name="typeahead.bundle.js-1233"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-1234"></a>        <span class="kd">function</span> <span class="nx">off</span><span class="p">(</span><span class="nx">types</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1235"></a>            <span class="kd">var</span> <span class="nx">type</span><span class="p">;</span>
<a name="typeahead.bundle.js-1236"></a>            <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">_callbacks</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1237"></a>                <span class="k">return</span> <span class="k">this</span><span class="p">;</span>
<a name="typeahead.bundle.js-1238"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-1239"></a>            <span class="nx">types</span> <span class="o">=</span> <span class="nx">types</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="nx">splitter</span><span class="p">);</span>
<a name="typeahead.bundle.js-1240"></a>            <span class="k">while</span> <span class="p">(</span><span class="nx">type</span> <span class="o">=</span> <span class="nx">types</span><span class="p">.</span><span class="nx">shift</span><span class="p">())</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1241"></a>                <span class="k">delete</span> <span class="k">this</span><span class="p">.</span><span class="nx">_callbacks</span><span class="p">[</span><span class="nx">type</span><span class="p">];</span>
<a name="typeahead.bundle.js-1242"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-1243"></a>            <span class="k">return</span> <span class="k">this</span><span class="p">;</span>
<a name="typeahead.bundle.js-1244"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-1245"></a>        <span class="kd">function</span> <span class="nx">trigger</span><span class="p">(</span><span class="nx">types</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1246"></a>            <span class="kd">var</span> <span class="nx">type</span><span class="p">,</span> <span class="nx">callbacks</span><span class="p">,</span> <span class="nx">args</span><span class="p">,</span> <span class="nx">syncFlush</span><span class="p">,</span> <span class="nx">asyncFlush</span><span class="p">;</span>
<a name="typeahead.bundle.js-1247"></a>            <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">_callbacks</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1248"></a>                <span class="k">return</span> <span class="k">this</span><span class="p">;</span>
<a name="typeahead.bundle.js-1249"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-1250"></a>            <span class="nx">types</span> <span class="o">=</span> <span class="nx">types</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="nx">splitter</span><span class="p">);</span>
<a name="typeahead.bundle.js-1251"></a>            <span class="nx">args</span> <span class="o">=</span> <span class="p">[].</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span>
<a name="typeahead.bundle.js-1252"></a>            <span class="k">while</span> <span class="p">((</span><span class="nx">type</span> <span class="o">=</span> <span class="nx">types</span><span class="p">.</span><span class="nx">shift</span><span class="p">())</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">callbacks</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_callbacks</span><span class="p">[</span><span class="nx">type</span><span class="p">]))</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1253"></a>                <span class="nx">syncFlush</span> <span class="o">=</span> <span class="nx">getFlush</span><span class="p">(</span><span class="nx">callbacks</span><span class="p">.</span><span class="nx">sync</span><span class="p">,</span> <span class="k">this</span><span class="p">,</span> <span class="p">[</span> <span class="nx">type</span> <span class="p">].</span><span class="nx">concat</span><span class="p">(</span><span class="nx">args</span><span class="p">));</span>
<a name="typeahead.bundle.js-1254"></a>                <span class="nx">asyncFlush</span> <span class="o">=</span> <span class="nx">getFlush</span><span class="p">(</span><span class="nx">callbacks</span><span class="p">.</span><span class="nx">async</span><span class="p">,</span> <span class="k">this</span><span class="p">,</span> <span class="p">[</span> <span class="nx">type</span> <span class="p">].</span><span class="nx">concat</span><span class="p">(</span><span class="nx">args</span><span class="p">));</span>
<a name="typeahead.bundle.js-1255"></a>                <span class="nx">syncFlush</span><span class="p">()</span> <span class="o">&amp;&amp;</span> <span class="nx">nextTick</span><span class="p">(</span><span class="nx">asyncFlush</span><span class="p">);</span>
<a name="typeahead.bundle.js-1256"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-1257"></a>            <span class="k">return</span> <span class="k">this</span><span class="p">;</span>
<a name="typeahead.bundle.js-1258"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-1259"></a>        <span class="kd">function</span> <span class="nx">getFlush</span><span class="p">(</span><span class="nx">callbacks</span><span class="p">,</span> <span class="nx">context</span><span class="p">,</span> <span class="nx">args</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1260"></a>            <span class="k">return</span> <span class="nx">flush</span><span class="p">;</span>
<a name="typeahead.bundle.js-1261"></a>            <span class="kd">function</span> <span class="nx">flush</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1262"></a>                <span class="kd">var</span> <span class="nx">cancelled</span><span class="p">;</span>
<a name="typeahead.bundle.js-1263"></a>                <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">len</span> <span class="o">=</span> <span class="nx">callbacks</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="o">!</span><span class="nx">cancelled</span> <span class="o">&amp;&amp;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">len</span><span class="p">;</span> <span class="nx">i</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1264"></a>                    <span class="nx">cancelled</span> <span class="o">=</span> <span class="nx">callbacks</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">apply</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">args</span><span class="p">)</span> <span class="o">===</span> <span class="kc">false</span><span class="p">;</span>
<a name="typeahead.bundle.js-1265"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-1266"></a>                <span class="k">return</span> <span class="o">!</span><span class="nx">cancelled</span><span class="p">;</span>
<a name="typeahead.bundle.js-1267"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-1268"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-1269"></a>        <span class="kd">function</span> <span class="nx">getNextTick</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1270"></a>            <span class="kd">var</span> <span class="nx">nextTickFn</span><span class="p">;</span>
<a name="typeahead.bundle.js-1271"></a>            <span class="k">if</span> <span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">setImmediate</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1272"></a>                <span class="nx">nextTickFn</span> <span class="o">=</span> <span class="kd">function</span> <span class="nx">nextTickSetImmediate</span><span class="p">(</span><span class="nx">fn</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1273"></a>                    <span class="nx">setImmediate</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1274"></a>                        <span class="nx">fn</span><span class="p">();</span>
<a name="typeahead.bundle.js-1275"></a>                    <span class="p">});</span>
<a name="typeahead.bundle.js-1276"></a>                <span class="p">};</span>
<a name="typeahead.bundle.js-1277"></a>            <span class="p">}</span> <span class="k">else</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1278"></a>                <span class="nx">nextTickFn</span> <span class="o">=</span> <span class="kd">function</span> <span class="nx">nextTickSetTimeout</span><span class="p">(</span><span class="nx">fn</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1279"></a>                    <span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1280"></a>                        <span class="nx">fn</span><span class="p">();</span>
<a name="typeahead.bundle.js-1281"></a>                    <span class="p">},</span> <span class="mi">0</span><span class="p">);</span>
<a name="typeahead.bundle.js-1282"></a>                <span class="p">};</span>
<a name="typeahead.bundle.js-1283"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-1284"></a>            <span class="k">return</span> <span class="nx">nextTickFn</span><span class="p">;</span>
<a name="typeahead.bundle.js-1285"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-1286"></a>        <span class="kd">function</span> <span class="nx">bindContext</span><span class="p">(</span><span class="nx">fn</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1287"></a>            <span class="k">return</span> <span class="nx">fn</span><span class="p">.</span><span class="nx">bind</span> <span class="o">?</span> <span class="nx">fn</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">context</span><span class="p">)</span> <span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1288"></a>                <span class="nx">fn</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="p">[].</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">0</span><span class="p">));</span>
<a name="typeahead.bundle.js-1289"></a>            <span class="p">};</span>
<a name="typeahead.bundle.js-1290"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-1291"></a>    <span class="p">}();</span>
<a name="typeahead.bundle.js-1292"></a>    <span class="kd">var</span> <span class="nx">highlight</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">doc</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1293"></a>        <span class="s2">&quot;use strict&quot;</span><span class="p">;</span>
<a name="typeahead.bundle.js-1294"></a>        <span class="kd">var</span> <span class="nx">defaults</span> <span class="o">=</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1295"></a>            <span class="nx">node</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span>
<a name="typeahead.bundle.js-1296"></a>            <span class="nx">pattern</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span>
<a name="typeahead.bundle.js-1297"></a>            <span class="nx">tagName</span><span class="o">:</span> <span class="s2">&quot;strong&quot;</span><span class="p">,</span>
<a name="typeahead.bundle.js-1298"></a>            <span class="nx">className</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span>
<a name="typeahead.bundle.js-1299"></a>            <span class="nx">wordsOnly</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span>
<a name="typeahead.bundle.js-1300"></a>            <span class="nx">caseSensitive</span><span class="o">:</span> <span class="kc">false</span>
<a name="typeahead.bundle.js-1301"></a>        <span class="p">};</span>
<a name="typeahead.bundle.js-1302"></a>        <span class="k">return</span> <span class="kd">function</span> <span class="nx">hightlight</span><span class="p">(</span><span class="nx">o</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1303"></a>            <span class="kd">var</span> <span class="nx">regex</span><span class="p">;</span>
<a name="typeahead.bundle.js-1304"></a>            <span class="nx">o</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">mixin</span><span class="p">({},</span> <span class="nx">defaults</span><span class="p">,</span> <span class="nx">o</span><span class="p">);</span>
<a name="typeahead.bundle.js-1305"></a>            <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">o</span><span class="p">.</span><span class="nx">node</span> <span class="o">||</span> <span class="o">!</span><span class="nx">o</span><span class="p">.</span><span class="nx">pattern</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1306"></a>                <span class="k">return</span><span class="p">;</span>
<a name="typeahead.bundle.js-1307"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-1308"></a>            <span class="nx">o</span><span class="p">.</span><span class="nx">pattern</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">pattern</span><span class="p">)</span> <span class="o">?</span> <span class="nx">o</span><span class="p">.</span><span class="nx">pattern</span> <span class="o">:</span> <span class="p">[</span> <span class="nx">o</span><span class="p">.</span><span class="nx">pattern</span> <span class="p">];</span>
<a name="typeahead.bundle.js-1309"></a>            <span class="nx">regex</span> <span class="o">=</span> <span class="nx">getRegex</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">pattern</span><span class="p">,</span> <span class="nx">o</span><span class="p">.</span><span class="nx">caseSensitive</span><span class="p">,</span> <span class="nx">o</span><span class="p">.</span><span class="nx">wordsOnly</span><span class="p">);</span>
<a name="typeahead.bundle.js-1310"></a>            <span class="nx">traverse</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">node</span><span class="p">,</span> <span class="nx">hightlightTextNode</span><span class="p">);</span>
<a name="typeahead.bundle.js-1311"></a>            <span class="kd">function</span> <span class="nx">hightlightTextNode</span><span class="p">(</span><span class="nx">textNode</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1312"></a>                <span class="kd">var</span> <span class="nx">match</span><span class="p">,</span> <span class="nx">patternNode</span><span class="p">,</span> <span class="nx">wrapperNode</span><span class="p">;</span>
<a name="typeahead.bundle.js-1313"></a>                <span class="k">if</span> <span class="p">(</span><span class="nx">match</span> <span class="o">=</span> <span class="nx">regex</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">textNode</span><span class="p">.</span><span class="nx">data</span><span class="p">))</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1314"></a>                    <span class="nx">wrapperNode</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">tagName</span><span class="p">);</span>
<a name="typeahead.bundle.js-1315"></a>                    <span class="nx">o</span><span class="p">.</span><span class="nx">className</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">wrapperNode</span><span class="p">.</span><span class="nx">className</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">className</span><span class="p">);</span>
<a name="typeahead.bundle.js-1316"></a>                    <span class="nx">patternNode</span> <span class="o">=</span> <span class="nx">textNode</span><span class="p">.</span><span class="nx">splitText</span><span class="p">(</span><span class="nx">match</span><span class="p">.</span><span class="nx">index</span><span class="p">);</span>
<a name="typeahead.bundle.js-1317"></a>                    <span class="nx">patternNode</span><span class="p">.</span><span class="nx">splitText</span><span class="p">(</span><span class="nx">match</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">length</span><span class="p">);</span>
<a name="typeahead.bundle.js-1318"></a>                    <span class="nx">wrapperNode</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">patternNode</span><span class="p">.</span><span class="nx">cloneNode</span><span class="p">(</span><span class="kc">true</span><span class="p">));</span>
<a name="typeahead.bundle.js-1319"></a>                    <span class="nx">textNode</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">replaceChild</span><span class="p">(</span><span class="nx">wrapperNode</span><span class="p">,</span> <span class="nx">patternNode</span><span class="p">);</span>
<a name="typeahead.bundle.js-1320"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-1321"></a>                <span class="k">return</span> <span class="o">!!</span><span class="nx">match</span><span class="p">;</span>
<a name="typeahead.bundle.js-1322"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-1323"></a>            <span class="kd">function</span> <span class="nx">traverse</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="nx">hightlightTextNode</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1324"></a>                <span class="kd">var</span> <span class="nx">childNode</span><span class="p">,</span> <span class="nx">TEXT_NODE_TYPE</span> <span class="o">=</span> <span class="mi">3</span><span class="p">;</span>
<a name="typeahead.bundle.js-1325"></a>                <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">el</span><span class="p">.</span><span class="nx">childNodes</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1326"></a>                    <span class="nx">childNode</span> <span class="o">=</span> <span class="nx">el</span><span class="p">.</span><span class="nx">childNodes</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span>
<a name="typeahead.bundle.js-1327"></a>                    <span class="k">if</span> <span class="p">(</span><span class="nx">childNode</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">===</span> <span class="nx">TEXT_NODE_TYPE</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1328"></a>                        <span class="nx">i</span> <span class="o">+=</span> <span class="nx">hightlightTextNode</span><span class="p">(</span><span class="nx">childNode</span><span class="p">)</span> <span class="o">?</span> <span class="mi">1</span> <span class="o">:</span> <span class="mi">0</span><span class="p">;</span>
<a name="typeahead.bundle.js-1329"></a>                    <span class="p">}</span> <span class="k">else</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1330"></a>                        <span class="nx">traverse</span><span class="p">(</span><span class="nx">childNode</span><span class="p">,</span> <span class="nx">hightlightTextNode</span><span class="p">);</span>
<a name="typeahead.bundle.js-1331"></a>                    <span class="p">}</span>
<a name="typeahead.bundle.js-1332"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-1333"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-1334"></a>        <span class="p">};</span>
<a name="typeahead.bundle.js-1335"></a>        <span class="kd">function</span> <span class="nx">getRegex</span><span class="p">(</span><span class="nx">patterns</span><span class="p">,</span> <span class="nx">caseSensitive</span><span class="p">,</span> <span class="nx">wordsOnly</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1336"></a>            <span class="kd">var</span> <span class="nx">escapedPatterns</span> <span class="o">=</span> <span class="p">[],</span> <span class="nx">regexStr</span><span class="p">;</span>
<a name="typeahead.bundle.js-1337"></a>            <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">len</span> <span class="o">=</span> <span class="nx">patterns</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">len</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1338"></a>                <span class="nx">escapedPatterns</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">escapeRegExChars</span><span class="p">(</span><span class="nx">patterns</span><span class="p">[</span><span class="nx">i</span><span class="p">]));</span>
<a name="typeahead.bundle.js-1339"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-1340"></a>            <span class="nx">regexStr</span> <span class="o">=</span> <span class="nx">wordsOnly</span> <span class="o">?</span> <span class="s2">&quot;\\b(&quot;</span> <span class="o">+</span> <span class="nx">escapedPatterns</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;|&quot;</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;)\\b&quot;</span> <span class="o">:</span> <span class="s2">&quot;(&quot;</span> <span class="o">+</span> <span class="nx">escapedPatterns</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;|&quot;</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;)&quot;</span><span class="p">;</span>
<a name="typeahead.bundle.js-1341"></a>            <span class="k">return</span> <span class="nx">caseSensitive</span> <span class="o">?</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="nx">regexStr</span><span class="p">)</span> <span class="o">:</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="nx">regexStr</span><span class="p">,</span> <span class="s2">&quot;i&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-1342"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-1343"></a>    <span class="p">}(</span><span class="nb">window</span><span class="p">.</span><span class="nb">document</span><span class="p">);</span>
<a name="typeahead.bundle.js-1344"></a>    <span class="kd">var</span> <span class="nx">Input</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1345"></a>        <span class="s2">&quot;use strict&quot;</span><span class="p">;</span>
<a name="typeahead.bundle.js-1346"></a>        <span class="kd">var</span> <span class="nx">specialKeyCodeMap</span><span class="p">;</span>
<a name="typeahead.bundle.js-1347"></a>        <span class="nx">specialKeyCodeMap</span> <span class="o">=</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1348"></a>            <span class="mi">9</span><span class="o">:</span> <span class="s2">&quot;tab&quot;</span><span class="p">,</span>
<a name="typeahead.bundle.js-1349"></a>            <span class="mi">27</span><span class="o">:</span> <span class="s2">&quot;esc&quot;</span><span class="p">,</span>
<a name="typeahead.bundle.js-1350"></a>            <span class="mi">37</span><span class="o">:</span> <span class="s2">&quot;left&quot;</span><span class="p">,</span>
<a name="typeahead.bundle.js-1351"></a>            <span class="mi">39</span><span class="o">:</span> <span class="s2">&quot;right&quot;</span><span class="p">,</span>
<a name="typeahead.bundle.js-1352"></a>            <span class="mi">13</span><span class="o">:</span> <span class="s2">&quot;enter&quot;</span><span class="p">,</span>
<a name="typeahead.bundle.js-1353"></a>            <span class="mi">38</span><span class="o">:</span> <span class="s2">&quot;up&quot;</span><span class="p">,</span>
<a name="typeahead.bundle.js-1354"></a>            <span class="mi">40</span><span class="o">:</span> <span class="s2">&quot;down&quot;</span>
<a name="typeahead.bundle.js-1355"></a>        <span class="p">};</span>
<a name="typeahead.bundle.js-1356"></a>        <span class="kd">function</span> <span class="nx">Input</span><span class="p">(</span><span class="nx">o</span><span class="p">,</span> <span class="nx">www</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1357"></a>            <span class="nx">o</span> <span class="o">=</span> <span class="nx">o</span> <span class="o">||</span> <span class="p">{};</span>
<a name="typeahead.bundle.js-1358"></a>            <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">o</span><span class="p">.</span><span class="nx">input</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1359"></a>                <span class="nx">$</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="s2">&quot;input is missing&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-1360"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-1361"></a>            <span class="nx">www</span><span class="p">.</span><span class="nx">mixin</span><span class="p">(</span><span class="k">this</span><span class="p">);</span>
<a name="typeahead.bundle.js-1362"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">$hint</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">hint</span><span class="p">);</span>
<a name="typeahead.bundle.js-1363"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">$input</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">input</span><span class="p">);</span>
<a name="typeahead.bundle.js-1364"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">query</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">$input</span><span class="p">.</span><span class="nx">val</span><span class="p">();</span>
<a name="typeahead.bundle.js-1365"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">queryWhenFocused</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">hasFocus</span><span class="p">()</span> <span class="o">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">query</span> <span class="o">:</span> <span class="kc">null</span><span class="p">;</span>
<a name="typeahead.bundle.js-1366"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">$overflowHelper</span> <span class="o">=</span> <span class="nx">buildOverflowHelper</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">$input</span><span class="p">);</span>
<a name="typeahead.bundle.js-1367"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">_checkLanguageDirection</span><span class="p">();</span>
<a name="typeahead.bundle.js-1368"></a>            <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">$hint</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1369"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">setHint</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">getHint</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">clearHint</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">clearHintIfInvalid</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">noop</span><span class="p">;</span>
<a name="typeahead.bundle.js-1370"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-1371"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-1372"></a>        <span class="nx">Input</span><span class="p">.</span><span class="nx">normalizeQuery</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">str</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1373"></a>            <span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">toStr</span><span class="p">(</span><span class="nx">str</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^\s*/g</span><span class="p">,</span> <span class="s2">&quot;&quot;</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\s{2,}/g</span><span class="p">,</span> <span class="s2">&quot; &quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-1374"></a>        <span class="p">};</span>
<a name="typeahead.bundle.js-1375"></a>        <span class="nx">_</span><span class="p">.</span><span class="nx">mixin</span><span class="p">(</span><span class="nx">Input</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span> <span class="nx">EventEmitter</span><span class="p">,</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1376"></a>            <span class="nx">_onBlur</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">onBlur</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1377"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">resetInputValue</span><span class="p">();</span>
<a name="typeahead.bundle.js-1378"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;blurred&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-1379"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1380"></a>            <span class="nx">_onFocus</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">onFocus</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1381"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">queryWhenFocused</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">query</span><span class="p">;</span>
<a name="typeahead.bundle.js-1382"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;focused&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-1383"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1384"></a>            <span class="nx">_onKeydown</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">onKeydown</span><span class="p">(</span><span class="nx">$e</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1385"></a>                <span class="kd">var</span> <span class="nx">keyName</span> <span class="o">=</span> <span class="nx">specialKeyCodeMap</span><span class="p">[</span><span class="nx">$e</span><span class="p">.</span><span class="nx">which</span> <span class="o">||</span> <span class="nx">$e</span><span class="p">.</span><span class="nx">keyCode</span><span class="p">];</span>
<a name="typeahead.bundle.js-1386"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">_managePreventDefault</span><span class="p">(</span><span class="nx">keyName</span><span class="p">,</span> <span class="nx">$e</span><span class="p">);</span>
<a name="typeahead.bundle.js-1387"></a>                <span class="k">if</span> <span class="p">(</span><span class="nx">keyName</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">_shouldTrigger</span><span class="p">(</span><span class="nx">keyName</span><span class="p">,</span> <span class="nx">$e</span><span class="p">))</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1388"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="nx">keyName</span> <span class="o">+</span> <span class="s2">&quot;Keyed&quot;</span><span class="p">,</span> <span class="nx">$e</span><span class="p">);</span>
<a name="typeahead.bundle.js-1389"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-1390"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1391"></a>            <span class="nx">_onInput</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">onInput</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1392"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">_setQuery</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">getInputValue</span><span class="p">());</span>
<a name="typeahead.bundle.js-1393"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">clearHintIfInvalid</span><span class="p">();</span>
<a name="typeahead.bundle.js-1394"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">_checkLanguageDirection</span><span class="p">();</span>
<a name="typeahead.bundle.js-1395"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1396"></a>            <span class="nx">_managePreventDefault</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">managePreventDefault</span><span class="p">(</span><span class="nx">keyName</span><span class="p">,</span> <span class="nx">$e</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1397"></a>                <span class="kd">var</span> <span class="nx">preventDefault</span><span class="p">;</span>
<a name="typeahead.bundle.js-1398"></a>                <span class="k">switch</span> <span class="p">(</span><span class="nx">keyName</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1399"></a>                  <span class="k">case</span> <span class="s2">&quot;up&quot;</span><span class="o">:</span>
<a name="typeahead.bundle.js-1400"></a>                  <span class="k">case</span> <span class="s2">&quot;down&quot;</span><span class="o">:</span>
<a name="typeahead.bundle.js-1401"></a>                    <span class="nx">preventDefault</span> <span class="o">=</span> <span class="o">!</span><span class="nx">withModifier</span><span class="p">(</span><span class="nx">$e</span><span class="p">);</span>
<a name="typeahead.bundle.js-1402"></a>                    <span class="k">break</span><span class="p">;</span>
<a name="typeahead.bundle.js-1403"></a>
<a name="typeahead.bundle.js-1404"></a>                  <span class="k">default</span><span class="o">:</span>
<a name="typeahead.bundle.js-1405"></a>                    <span class="nx">preventDefault</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span>
<a name="typeahead.bundle.js-1406"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-1407"></a>                <span class="nx">preventDefault</span> <span class="o">&amp;&amp;</span> <span class="nx">$e</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span>
<a name="typeahead.bundle.js-1408"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1409"></a>            <span class="nx">_shouldTrigger</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">shouldTrigger</span><span class="p">(</span><span class="nx">keyName</span><span class="p">,</span> <span class="nx">$e</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1410"></a>                <span class="kd">var</span> <span class="nx">trigger</span><span class="p">;</span>
<a name="typeahead.bundle.js-1411"></a>                <span class="k">switch</span> <span class="p">(</span><span class="nx">keyName</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1412"></a>                  <span class="k">case</span> <span class="s2">&quot;tab&quot;</span><span class="o">:</span>
<a name="typeahead.bundle.js-1413"></a>                    <span class="nx">trigger</span> <span class="o">=</span> <span class="o">!</span><span class="nx">withModifier</span><span class="p">(</span><span class="nx">$e</span><span class="p">);</span>
<a name="typeahead.bundle.js-1414"></a>                    <span class="k">break</span><span class="p">;</span>
<a name="typeahead.bundle.js-1415"></a>
<a name="typeahead.bundle.js-1416"></a>                  <span class="k">default</span><span class="o">:</span>
<a name="typeahead.bundle.js-1417"></a>                    <span class="nx">trigger</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>
<a name="typeahead.bundle.js-1418"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-1419"></a>                <span class="k">return</span> <span class="nx">trigger</span><span class="p">;</span>
<a name="typeahead.bundle.js-1420"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1421"></a>            <span class="nx">_checkLanguageDirection</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">checkLanguageDirection</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1422"></a>                <span class="kd">var</span> <span class="nx">dir</span> <span class="o">=</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">$input</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s2">&quot;direction&quot;</span><span class="p">)</span> <span class="o">||</span> <span class="s2">&quot;ltr&quot;</span><span class="p">).</span><span class="nx">toLowerCase</span><span class="p">();</span>
<a name="typeahead.bundle.js-1423"></a>                <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">dir</span> <span class="o">!==</span> <span class="nx">dir</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1424"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">dir</span> <span class="o">=</span> <span class="nx">dir</span><span class="p">;</span>
<a name="typeahead.bundle.js-1425"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">$hint</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s2">&quot;dir&quot;</span><span class="p">,</span> <span class="nx">dir</span><span class="p">);</span>
<a name="typeahead.bundle.js-1426"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;langDirChanged&quot;</span><span class="p">,</span> <span class="nx">dir</span><span class="p">);</span>
<a name="typeahead.bundle.js-1427"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-1428"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1429"></a>            <span class="nx">_setQuery</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">setQuery</span><span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">silent</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1430"></a>                <span class="kd">var</span> <span class="nx">areEquivalent</span><span class="p">,</span> <span class="nx">hasDifferentWhitespace</span><span class="p">;</span>
<a name="typeahead.bundle.js-1431"></a>                <span class="nx">areEquivalent</span> <span class="o">=</span> <span class="nx">areQueriesEquivalent</span><span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">query</span><span class="p">);</span>
<a name="typeahead.bundle.js-1432"></a>                <span class="nx">hasDifferentWhitespace</span> <span class="o">=</span> <span class="nx">areEquivalent</span> <span class="o">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">query</span><span class="p">.</span><span class="nx">length</span> <span class="o">!==</span> <span class="nx">val</span><span class="p">.</span><span class="nx">length</span> <span class="o">:</span> <span class="kc">false</span><span class="p">;</span>
<a name="typeahead.bundle.js-1433"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">query</span> <span class="o">=</span> <span class="nx">val</span><span class="p">;</span>
<a name="typeahead.bundle.js-1434"></a>                <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">silent</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">areEquivalent</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1435"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;queryChanged&quot;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">query</span><span class="p">);</span>
<a name="typeahead.bundle.js-1436"></a>                <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">silent</span> <span class="o">&amp;&amp;</span> <span class="nx">hasDifferentWhitespace</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1437"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;whitespaceChanged&quot;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">query</span><span class="p">);</span>
<a name="typeahead.bundle.js-1438"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-1439"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1440"></a>            <span class="nx">bind</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1441"></a>                <span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span><span class="p">,</span> <span class="nx">onBlur</span><span class="p">,</span> <span class="nx">onFocus</span><span class="p">,</span> <span class="nx">onKeydown</span><span class="p">,</span> <span class="nx">onInput</span><span class="p">;</span>
<a name="typeahead.bundle.js-1442"></a>                <span class="nx">onBlur</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_onBlur</span><span class="p">,</span> <span class="k">this</span><span class="p">);</span>
<a name="typeahead.bundle.js-1443"></a>                <span class="nx">onFocus</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_onFocus</span><span class="p">,</span> <span class="k">this</span><span class="p">);</span>
<a name="typeahead.bundle.js-1444"></a>                <span class="nx">onKeydown</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_onKeydown</span><span class="p">,</span> <span class="k">this</span><span class="p">);</span>
<a name="typeahead.bundle.js-1445"></a>                <span class="nx">onInput</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_onInput</span><span class="p">,</span> <span class="k">this</span><span class="p">);</span>
<a name="typeahead.bundle.js-1446"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">$input</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s2">&quot;blur.tt&quot;</span><span class="p">,</span> <span class="nx">onBlur</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="s2">&quot;focus.tt&quot;</span><span class="p">,</span> <span class="nx">onFocus</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="s2">&quot;keydown.tt&quot;</span><span class="p">,</span> <span class="nx">onKeydown</span><span class="p">);</span>
<a name="typeahead.bundle.js-1447"></a>                <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">_</span><span class="p">.</span><span class="nx">isMsie</span><span class="p">()</span> <span class="o">||</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isMsie</span><span class="p">()</span> <span class="o">&gt;</span> <span class="mi">9</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1448"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">$input</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s2">&quot;input.tt&quot;</span><span class="p">,</span> <span class="nx">onInput</span><span class="p">);</span>
<a name="typeahead.bundle.js-1449"></a>                <span class="p">}</span> <span class="k">else</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1450"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">$input</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s2">&quot;keydown.tt keypress.tt cut.tt paste.tt&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">$e</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1451"></a>                        <span class="k">if</span> <span class="p">(</span><span class="nx">specialKeyCodeMap</span><span class="p">[</span><span class="nx">$e</span><span class="p">.</span><span class="nx">which</span> <span class="o">||</span> <span class="nx">$e</span><span class="p">.</span><span class="nx">keyCode</span><span class="p">])</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1452"></a>                            <span class="k">return</span><span class="p">;</span>
<a name="typeahead.bundle.js-1453"></a>                        <span class="p">}</span>
<a name="typeahead.bundle.js-1454"></a>                        <span class="nx">_</span><span class="p">.</span><span class="nx">defer</span><span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">that</span><span class="p">.</span><span class="nx">_onInput</span><span class="p">,</span> <span class="nx">that</span><span class="p">,</span> <span class="nx">$e</span><span class="p">));</span>
<a name="typeahead.bundle.js-1455"></a>                    <span class="p">});</span>
<a name="typeahead.bundle.js-1456"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-1457"></a>                <span class="k">return</span> <span class="k">this</span><span class="p">;</span>
<a name="typeahead.bundle.js-1458"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1459"></a>            <span class="nx">focus</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">focus</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1460"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">$input</span><span class="p">.</span><span class="nx">focus</span><span class="p">();</span>
<a name="typeahead.bundle.js-1461"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1462"></a>            <span class="nx">blur</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">blur</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1463"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">$input</span><span class="p">.</span><span class="nx">blur</span><span class="p">();</span>
<a name="typeahead.bundle.js-1464"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1465"></a>            <span class="nx">getLangDir</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">getLangDir</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1466"></a>                <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">dir</span><span class="p">;</span>
<a name="typeahead.bundle.js-1467"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1468"></a>            <span class="nx">getQuery</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">getQuery</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1469"></a>                <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">query</span> <span class="o">||</span> <span class="s2">&quot;&quot;</span><span class="p">;</span>
<a name="typeahead.bundle.js-1470"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1471"></a>            <span class="nx">setQuery</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">setQuery</span><span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">silent</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1472"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">setInputValue</span><span class="p">(</span><span class="nx">val</span><span class="p">);</span>
<a name="typeahead.bundle.js-1473"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">_setQuery</span><span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">silent</span><span class="p">);</span>
<a name="typeahead.bundle.js-1474"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1475"></a>            <span class="nx">hasQueryChangedSinceLastFocus</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">hasQueryChangedSinceLastFocus</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1476"></a>                <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">query</span> <span class="o">!==</span> <span class="k">this</span><span class="p">.</span><span class="nx">queryWhenFocused</span><span class="p">;</span>
<a name="typeahead.bundle.js-1477"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1478"></a>            <span class="nx">getInputValue</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">getInputValue</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1479"></a>                <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">$input</span><span class="p">.</span><span class="nx">val</span><span class="p">();</span>
<a name="typeahead.bundle.js-1480"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1481"></a>            <span class="nx">setInputValue</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">setInputValue</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1482"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">$input</span><span class="p">.</span><span class="nx">val</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span>
<a name="typeahead.bundle.js-1483"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">clearHintIfInvalid</span><span class="p">();</span>
<a name="typeahead.bundle.js-1484"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">_checkLanguageDirection</span><span class="p">();</span>
<a name="typeahead.bundle.js-1485"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1486"></a>            <span class="nx">resetInputValue</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">resetInputValue</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1487"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">setInputValue</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">query</span><span class="p">);</span>
<a name="typeahead.bundle.js-1488"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1489"></a>            <span class="nx">getHint</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">getHint</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1490"></a>                <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">$hint</span><span class="p">.</span><span class="nx">val</span><span class="p">();</span>
<a name="typeahead.bundle.js-1491"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1492"></a>            <span class="nx">setHint</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">setHint</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1493"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">$hint</span><span class="p">.</span><span class="nx">val</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span>
<a name="typeahead.bundle.js-1494"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1495"></a>            <span class="nx">clearHint</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">clearHint</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1496"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">setHint</span><span class="p">(</span><span class="s2">&quot;&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-1497"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1498"></a>            <span class="nx">clearHintIfInvalid</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">clearHintIfInvalid</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1499"></a>                <span class="kd">var</span> <span class="nx">val</span><span class="p">,</span> <span class="nx">hint</span><span class="p">,</span> <span class="nx">valIsPrefixOfHint</span><span class="p">,</span> <span class="nx">isValid</span><span class="p">;</span>
<a name="typeahead.bundle.js-1500"></a>                <span class="nx">val</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">getInputValue</span><span class="p">();</span>
<a name="typeahead.bundle.js-1501"></a>                <span class="nx">hint</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">getHint</span><span class="p">();</span>
<a name="typeahead.bundle.js-1502"></a>                <span class="nx">valIsPrefixOfHint</span> <span class="o">=</span> <span class="nx">val</span> <span class="o">!==</span> <span class="nx">hint</span> <span class="o">&amp;&amp;</span> <span class="nx">hint</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="o">===</span> <span class="mi">0</span><span class="p">;</span>
<a name="typeahead.bundle.js-1503"></a>                <span class="nx">isValid</span> <span class="o">=</span> <span class="nx">val</span> <span class="o">!==</span> <span class="s2">&quot;&quot;</span> <span class="o">&amp;&amp;</span> <span class="nx">valIsPrefixOfHint</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">hasOverflow</span><span class="p">();</span>
<a name="typeahead.bundle.js-1504"></a>                <span class="o">!</span><span class="nx">isValid</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">clearHint</span><span class="p">();</span>
<a name="typeahead.bundle.js-1505"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1506"></a>            <span class="nx">hasFocus</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">hasFocus</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1507"></a>                <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">$input</span><span class="p">.</span><span class="nx">is</span><span class="p">(</span><span class="s2">&quot;:focus&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-1508"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1509"></a>            <span class="nx">hasOverflow</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">hasOverflow</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1510"></a>                <span class="kd">var</span> <span class="nx">constraint</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">$input</span><span class="p">.</span><span class="nx">width</span><span class="p">()</span> <span class="o">-</span> <span class="mi">2</span><span class="p">;</span>
<a name="typeahead.bundle.js-1511"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">$overflowHelper</span><span class="p">.</span><span class="nx">text</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">getInputValue</span><span class="p">());</span>
<a name="typeahead.bundle.js-1512"></a>                <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">$overflowHelper</span><span class="p">.</span><span class="nx">width</span><span class="p">()</span> <span class="o">&gt;=</span> <span class="nx">constraint</span><span class="p">;</span>
<a name="typeahead.bundle.js-1513"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1514"></a>            <span class="nx">isCursorAtEnd</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1515"></a>                <span class="kd">var</span> <span class="nx">valueLength</span><span class="p">,</span> <span class="nx">selectionStart</span><span class="p">,</span> <span class="nx">range</span><span class="p">;</span>
<a name="typeahead.bundle.js-1516"></a>                <span class="nx">valueLength</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">$input</span><span class="p">.</span><span class="nx">val</span><span class="p">().</span><span class="nx">length</span><span class="p">;</span>
<a name="typeahead.bundle.js-1517"></a>                <span class="nx">selectionStart</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">$input</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">selectionStart</span><span class="p">;</span>
<a name="typeahead.bundle.js-1518"></a>                <span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isNumber</span><span class="p">(</span><span class="nx">selectionStart</span><span class="p">))</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1519"></a>                    <span class="k">return</span> <span class="nx">selectionStart</span> <span class="o">===</span> <span class="nx">valueLength</span><span class="p">;</span>
<a name="typeahead.bundle.js-1520"></a>                <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">selection</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1521"></a>                    <span class="nx">range</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">selection</span><span class="p">.</span><span class="nx">createRange</span><span class="p">();</span>
<a name="typeahead.bundle.js-1522"></a>                    <span class="nx">range</span><span class="p">.</span><span class="nx">moveStart</span><span class="p">(</span><span class="s2">&quot;character&quot;</span><span class="p">,</span> <span class="o">-</span><span class="nx">valueLength</span><span class="p">);</span>
<a name="typeahead.bundle.js-1523"></a>                    <span class="k">return</span> <span class="nx">valueLength</span> <span class="o">===</span> <span class="nx">range</span><span class="p">.</span><span class="nx">text</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span>
<a name="typeahead.bundle.js-1524"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-1525"></a>                <span class="k">return</span> <span class="kc">true</span><span class="p">;</span>
<a name="typeahead.bundle.js-1526"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1527"></a>            <span class="nx">destroy</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">destroy</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1528"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">$hint</span><span class="p">.</span><span class="nx">off</span><span class="p">(</span><span class="s2">&quot;.tt&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-1529"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">$input</span><span class="p">.</span><span class="nx">off</span><span class="p">(</span><span class="s2">&quot;.tt&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-1530"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">$overflowHelper</span><span class="p">.</span><span class="nx">remove</span><span class="p">();</span>
<a name="typeahead.bundle.js-1531"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">$hint</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">$input</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">$overflowHelper</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;&lt;div&gt;&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-1532"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-1533"></a>        <span class="p">});</span>
<a name="typeahead.bundle.js-1534"></a>        <span class="k">return</span> <span class="nx">Input</span><span class="p">;</span>
<a name="typeahead.bundle.js-1535"></a>        <span class="kd">function</span> <span class="nx">buildOverflowHelper</span><span class="p">(</span><span class="nx">$input</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1536"></a>            <span class="k">return</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;&lt;pre aria-hidden=&quot;true&quot;&gt;&lt;/pre&gt;&#39;</span><span class="p">).</span><span class="nx">css</span><span class="p">({</span>
<a name="typeahead.bundle.js-1537"></a>                <span class="nx">position</span><span class="o">:</span> <span class="s2">&quot;absolute&quot;</span><span class="p">,</span>
<a name="typeahead.bundle.js-1538"></a>                <span class="nx">visibility</span><span class="o">:</span> <span class="s2">&quot;hidden&quot;</span><span class="p">,</span>
<a name="typeahead.bundle.js-1539"></a>                <span class="nx">whiteSpace</span><span class="o">:</span> <span class="s2">&quot;pre&quot;</span><span class="p">,</span>
<a name="typeahead.bundle.js-1540"></a>                <span class="nx">fontFamily</span><span class="o">:</span> <span class="nx">$input</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s2">&quot;font-family&quot;</span><span class="p">),</span>
<a name="typeahead.bundle.js-1541"></a>                <span class="nx">fontSize</span><span class="o">:</span> <span class="nx">$input</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s2">&quot;font-size&quot;</span><span class="p">),</span>
<a name="typeahead.bundle.js-1542"></a>                <span class="nx">fontStyle</span><span class="o">:</span> <span class="nx">$input</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s2">&quot;font-style&quot;</span><span class="p">),</span>
<a name="typeahead.bundle.js-1543"></a>                <span class="nx">fontVariant</span><span class="o">:</span> <span class="nx">$input</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s2">&quot;font-variant&quot;</span><span class="p">),</span>
<a name="typeahead.bundle.js-1544"></a>                <span class="nx">fontWeight</span><span class="o">:</span> <span class="nx">$input</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s2">&quot;font-weight&quot;</span><span class="p">),</span>
<a name="typeahead.bundle.js-1545"></a>                <span class="nx">wordSpacing</span><span class="o">:</span> <span class="nx">$input</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s2">&quot;word-spacing&quot;</span><span class="p">),</span>
<a name="typeahead.bundle.js-1546"></a>                <span class="nx">letterSpacing</span><span class="o">:</span> <span class="nx">$input</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s2">&quot;letter-spacing&quot;</span><span class="p">),</span>
<a name="typeahead.bundle.js-1547"></a>                <span class="nx">textIndent</span><span class="o">:</span> <span class="nx">$input</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s2">&quot;text-indent&quot;</span><span class="p">),</span>
<a name="typeahead.bundle.js-1548"></a>                <span class="nx">textRendering</span><span class="o">:</span> <span class="nx">$input</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s2">&quot;text-rendering&quot;</span><span class="p">),</span>
<a name="typeahead.bundle.js-1549"></a>                <span class="nx">textTransform</span><span class="o">:</span> <span class="nx">$input</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s2">&quot;text-transform&quot;</span><span class="p">)</span>
<a name="typeahead.bundle.js-1550"></a>            <span class="p">}).</span><span class="nx">insertAfter</span><span class="p">(</span><span class="nx">$input</span><span class="p">);</span>
<a name="typeahead.bundle.js-1551"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-1552"></a>        <span class="kd">function</span> <span class="nx">areQueriesEquivalent</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1553"></a>            <span class="k">return</span> <span class="nx">Input</span><span class="p">.</span><span class="nx">normalizeQuery</span><span class="p">(</span><span class="nx">a</span><span class="p">)</span> <span class="o">===</span> <span class="nx">Input</span><span class="p">.</span><span class="nx">normalizeQuery</span><span class="p">(</span><span class="nx">b</span><span class="p">);</span>
<a name="typeahead.bundle.js-1554"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-1555"></a>        <span class="kd">function</span> <span class="nx">withModifier</span><span class="p">(</span><span class="nx">$e</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1556"></a>            <span class="k">return</span> <span class="nx">$e</span><span class="p">.</span><span class="nx">altKey</span> <span class="o">||</span> <span class="nx">$e</span><span class="p">.</span><span class="nx">ctrlKey</span> <span class="o">||</span> <span class="nx">$e</span><span class="p">.</span><span class="nx">metaKey</span> <span class="o">||</span> <span class="nx">$e</span><span class="p">.</span><span class="nx">shiftKey</span><span class="p">;</span>
<a name="typeahead.bundle.js-1557"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-1558"></a>    <span class="p">}();</span>
<a name="typeahead.bundle.js-1559"></a>    <span class="kd">var</span> <span class="nx">Dataset</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1560"></a>        <span class="s2">&quot;use strict&quot;</span><span class="p">;</span>
<a name="typeahead.bundle.js-1561"></a>        <span class="kd">var</span> <span class="nx">keys</span><span class="p">,</span> <span class="nx">nameGenerator</span><span class="p">;</span>
<a name="typeahead.bundle.js-1562"></a>        <span class="nx">keys</span> <span class="o">=</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1563"></a>            <span class="nx">val</span><span class="o">:</span> <span class="s2">&quot;tt-selectable-display&quot;</span><span class="p">,</span>
<a name="typeahead.bundle.js-1564"></a>            <span class="nx">obj</span><span class="o">:</span> <span class="s2">&quot;tt-selectable-object&quot;</span>
<a name="typeahead.bundle.js-1565"></a>        <span class="p">};</span>
<a name="typeahead.bundle.js-1566"></a>        <span class="nx">nameGenerator</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">getIdGenerator</span><span class="p">();</span>
<a name="typeahead.bundle.js-1567"></a>        <span class="kd">function</span> <span class="nx">Dataset</span><span class="p">(</span><span class="nx">o</span><span class="p">,</span> <span class="nx">www</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1568"></a>            <span class="nx">o</span> <span class="o">=</span> <span class="nx">o</span> <span class="o">||</span> <span class="p">{};</span>
<a name="typeahead.bundle.js-1569"></a>            <span class="nx">o</span><span class="p">.</span><span class="nx">templates</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">templates</span> <span class="o">||</span> <span class="p">{};</span>
<a name="typeahead.bundle.js-1570"></a>            <span class="nx">o</span><span class="p">.</span><span class="nx">templates</span><span class="p">.</span><span class="nx">notFound</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">templates</span><span class="p">.</span><span class="nx">notFound</span> <span class="o">||</span> <span class="nx">o</span><span class="p">.</span><span class="nx">templates</span><span class="p">.</span><span class="nx">empty</span><span class="p">;</span>
<a name="typeahead.bundle.js-1571"></a>            <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">o</span><span class="p">.</span><span class="nx">source</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1572"></a>                <span class="nx">$</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="s2">&quot;missing source&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-1573"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-1574"></a>            <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">o</span><span class="p">.</span><span class="nx">node</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1575"></a>                <span class="nx">$</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="s2">&quot;missing node&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-1576"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-1577"></a>            <span class="k">if</span> <span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">name</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">isValidName</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">name</span><span class="p">))</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1578"></a>                <span class="nx">$</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="s2">&quot;invalid dataset name: &quot;</span> <span class="o">+</span> <span class="nx">o</span><span class="p">.</span><span class="nx">name</span><span class="p">);</span>
<a name="typeahead.bundle.js-1579"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-1580"></a>            <span class="nx">www</span><span class="p">.</span><span class="nx">mixin</span><span class="p">(</span><span class="k">this</span><span class="p">);</span>
<a name="typeahead.bundle.js-1581"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">highlight</span> <span class="o">=</span> <span class="o">!!</span><span class="nx">o</span><span class="p">.</span><span class="nx">highlight</span><span class="p">;</span>
<a name="typeahead.bundle.js-1582"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">name</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">name</span> <span class="o">||</span> <span class="nx">nameGenerator</span><span class="p">();</span>
<a name="typeahead.bundle.js-1583"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">limit</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">limit</span> <span class="o">||</span> <span class="mi">5</span><span class="p">;</span>
<a name="typeahead.bundle.js-1584"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">displayFn</span> <span class="o">=</span> <span class="nx">getDisplayFn</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">display</span> <span class="o">||</span> <span class="nx">o</span><span class="p">.</span><span class="nx">displayKey</span><span class="p">);</span>
<a name="typeahead.bundle.js-1585"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">templates</span> <span class="o">=</span> <span class="nx">getTemplates</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">templates</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">displayFn</span><span class="p">);</span>
<a name="typeahead.bundle.js-1586"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">source</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">source</span><span class="p">.</span><span class="nx">__ttAdapter</span> <span class="o">?</span> <span class="nx">o</span><span class="p">.</span><span class="nx">source</span><span class="p">.</span><span class="nx">__ttAdapter</span><span class="p">()</span> <span class="o">:</span> <span class="nx">o</span><span class="p">.</span><span class="nx">source</span><span class="p">;</span>
<a name="typeahead.bundle.js-1587"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">async</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isUndefined</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">async</span><span class="p">)</span> <span class="o">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">source</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">2</span> <span class="o">:</span> <span class="o">!!</span><span class="nx">o</span><span class="p">.</span><span class="nx">async</span><span class="p">;</span>
<a name="typeahead.bundle.js-1588"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">_resetLastSuggestion</span><span class="p">();</span>
<a name="typeahead.bundle.js-1589"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">$el</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">node</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">classes</span><span class="p">.</span><span class="nx">dataset</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">classes</span><span class="p">.</span><span class="nx">dataset</span> <span class="o">+</span> <span class="s2">&quot;-&quot;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="p">);</span>
<a name="typeahead.bundle.js-1590"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-1591"></a>        <span class="nx">Dataset</span><span class="p">.</span><span class="nx">extractData</span> <span class="o">=</span> <span class="kd">function</span> <span class="nx">extractData</span><span class="p">(</span><span class="nx">el</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1592"></a>            <span class="kd">var</span> <span class="nx">$el</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">el</span><span class="p">);</span>
<a name="typeahead.bundle.js-1593"></a>            <span class="k">if</span> <span class="p">(</span><span class="nx">$el</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="nx">keys</span><span class="p">.</span><span class="nx">obj</span><span class="p">))</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1594"></a>                <span class="k">return</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1595"></a>                    <span class="nx">val</span><span class="o">:</span> <span class="nx">$el</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="nx">keys</span><span class="p">.</span><span class="nx">val</span><span class="p">)</span> <span class="o">||</span> <span class="s2">&quot;&quot;</span><span class="p">,</span>
<a name="typeahead.bundle.js-1596"></a>                    <span class="nx">obj</span><span class="o">:</span> <span class="nx">$el</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="nx">keys</span><span class="p">.</span><span class="nx">obj</span><span class="p">)</span> <span class="o">||</span> <span class="kc">null</span>
<a name="typeahead.bundle.js-1597"></a>                <span class="p">};</span>
<a name="typeahead.bundle.js-1598"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-1599"></a>            <span class="k">return</span> <span class="kc">null</span><span class="p">;</span>
<a name="typeahead.bundle.js-1600"></a>        <span class="p">};</span>
<a name="typeahead.bundle.js-1601"></a>        <span class="nx">_</span><span class="p">.</span><span class="nx">mixin</span><span class="p">(</span><span class="nx">Dataset</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span> <span class="nx">EventEmitter</span><span class="p">,</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1602"></a>            <span class="nx">_overwrite</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">overwrite</span><span class="p">(</span><span class="nx">query</span><span class="p">,</span> <span class="nx">suggestions</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1603"></a>                <span class="nx">suggestions</span> <span class="o">=</span> <span class="nx">suggestions</span> <span class="o">||</span> <span class="p">[];</span>
<a name="typeahead.bundle.js-1604"></a>                <span class="k">if</span> <span class="p">(</span><span class="nx">suggestions</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1605"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">_renderSuggestions</span><span class="p">(</span><span class="nx">query</span><span class="p">,</span> <span class="nx">suggestions</span><span class="p">);</span>
<a name="typeahead.bundle.js-1606"></a>                <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">async</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">templates</span><span class="p">.</span><span class="nx">pending</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1607"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">_renderPending</span><span class="p">(</span><span class="nx">query</span><span class="p">);</span>
<a name="typeahead.bundle.js-1608"></a>                <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">async</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">templates</span><span class="p">.</span><span class="nx">notFound</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1609"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">_renderNotFound</span><span class="p">(</span><span class="nx">query</span><span class="p">);</span>
<a name="typeahead.bundle.js-1610"></a>                <span class="p">}</span> <span class="k">else</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1611"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">_empty</span><span class="p">();</span>
<a name="typeahead.bundle.js-1612"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-1613"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;rendered&quot;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="p">,</span> <span class="nx">suggestions</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span>
<a name="typeahead.bundle.js-1614"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1615"></a>            <span class="nx">_append</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">append</span><span class="p">(</span><span class="nx">query</span><span class="p">,</span> <span class="nx">suggestions</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1616"></a>                <span class="nx">suggestions</span> <span class="o">=</span> <span class="nx">suggestions</span> <span class="o">||</span> <span class="p">[];</span>
<a name="typeahead.bundle.js-1617"></a>                <span class="k">if</span> <span class="p">(</span><span class="nx">suggestions</span><span class="p">.</span><span class="nx">length</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">$lastSuggestion</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1618"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">_appendSuggestions</span><span class="p">(</span><span class="nx">query</span><span class="p">,</span> <span class="nx">suggestions</span><span class="p">);</span>
<a name="typeahead.bundle.js-1619"></a>                <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">suggestions</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1620"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">_renderSuggestions</span><span class="p">(</span><span class="nx">query</span><span class="p">,</span> <span class="nx">suggestions</span><span class="p">);</span>
<a name="typeahead.bundle.js-1621"></a>                <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">$lastSuggestion</span><span class="p">.</span><span class="nx">length</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">templates</span><span class="p">.</span><span class="nx">notFound</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1622"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">_renderNotFound</span><span class="p">(</span><span class="nx">query</span><span class="p">);</span>
<a name="typeahead.bundle.js-1623"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-1624"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;rendered&quot;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="p">,</span> <span class="nx">suggestions</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span>
<a name="typeahead.bundle.js-1625"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1626"></a>            <span class="nx">_renderSuggestions</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">renderSuggestions</span><span class="p">(</span><span class="nx">query</span><span class="p">,</span> <span class="nx">suggestions</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1627"></a>                <span class="kd">var</span> <span class="nx">$fragment</span><span class="p">;</span>
<a name="typeahead.bundle.js-1628"></a>                <span class="nx">$fragment</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_getSuggestionsFragment</span><span class="p">(</span><span class="nx">query</span><span class="p">,</span> <span class="nx">suggestions</span><span class="p">);</span>
<a name="typeahead.bundle.js-1629"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">$lastSuggestion</span> <span class="o">=</span> <span class="nx">$fragment</span><span class="p">.</span><span class="nx">children</span><span class="p">().</span><span class="nx">last</span><span class="p">();</span>
<a name="typeahead.bundle.js-1630"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">$el</span><span class="p">.</span><span class="nx">html</span><span class="p">(</span><span class="nx">$fragment</span><span class="p">).</span><span class="nx">prepend</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_getHeader</span><span class="p">(</span><span class="nx">query</span><span class="p">,</span> <span class="nx">suggestions</span><span class="p">)).</span><span class="nx">append</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_getFooter</span><span class="p">(</span><span class="nx">query</span><span class="p">,</span> <span class="nx">suggestions</span><span class="p">));</span>
<a name="typeahead.bundle.js-1631"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1632"></a>            <span class="nx">_appendSuggestions</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">appendSuggestions</span><span class="p">(</span><span class="nx">query</span><span class="p">,</span> <span class="nx">suggestions</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1633"></a>                <span class="kd">var</span> <span class="nx">$fragment</span><span class="p">,</span> <span class="nx">$lastSuggestion</span><span class="p">;</span>
<a name="typeahead.bundle.js-1634"></a>                <span class="nx">$fragment</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_getSuggestionsFragment</span><span class="p">(</span><span class="nx">query</span><span class="p">,</span> <span class="nx">suggestions</span><span class="p">);</span>
<a name="typeahead.bundle.js-1635"></a>                <span class="nx">$lastSuggestion</span> <span class="o">=</span> <span class="nx">$fragment</span><span class="p">.</span><span class="nx">children</span><span class="p">().</span><span class="nx">last</span><span class="p">();</span>
<a name="typeahead.bundle.js-1636"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">$lastSuggestion</span><span class="p">.</span><span class="nx">after</span><span class="p">(</span><span class="nx">$fragment</span><span class="p">);</span>
<a name="typeahead.bundle.js-1637"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">$lastSuggestion</span> <span class="o">=</span> <span class="nx">$lastSuggestion</span><span class="p">;</span>
<a name="typeahead.bundle.js-1638"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1639"></a>            <span class="nx">_renderPending</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">renderPending</span><span class="p">(</span><span class="nx">query</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1640"></a>                <span class="kd">var</span> <span class="nx">template</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">templates</span><span class="p">.</span><span class="nx">pending</span><span class="p">;</span>
<a name="typeahead.bundle.js-1641"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">_resetLastSuggestion</span><span class="p">();</span>
<a name="typeahead.bundle.js-1642"></a>                <span class="nx">template</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">$el</span><span class="p">.</span><span class="nx">html</span><span class="p">(</span><span class="nx">template</span><span class="p">({</span>
<a name="typeahead.bundle.js-1643"></a>                    <span class="nx">query</span><span class="o">:</span> <span class="nx">query</span><span class="p">,</span>
<a name="typeahead.bundle.js-1644"></a>                    <span class="nx">dataset</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">name</span>
<a name="typeahead.bundle.js-1645"></a>                <span class="p">}));</span>
<a name="typeahead.bundle.js-1646"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1647"></a>            <span class="nx">_renderNotFound</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">renderNotFound</span><span class="p">(</span><span class="nx">query</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1648"></a>                <span class="kd">var</span> <span class="nx">template</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">templates</span><span class="p">.</span><span class="nx">notFound</span><span class="p">;</span>
<a name="typeahead.bundle.js-1649"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">_resetLastSuggestion</span><span class="p">();</span>
<a name="typeahead.bundle.js-1650"></a>                <span class="nx">template</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">$el</span><span class="p">.</span><span class="nx">html</span><span class="p">(</span><span class="nx">template</span><span class="p">({</span>
<a name="typeahead.bundle.js-1651"></a>                    <span class="nx">query</span><span class="o">:</span> <span class="nx">query</span><span class="p">,</span>
<a name="typeahead.bundle.js-1652"></a>                    <span class="nx">dataset</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">name</span>
<a name="typeahead.bundle.js-1653"></a>                <span class="p">}));</span>
<a name="typeahead.bundle.js-1654"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1655"></a>            <span class="nx">_empty</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">empty</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1656"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">$el</span><span class="p">.</span><span class="nx">empty</span><span class="p">();</span>
<a name="typeahead.bundle.js-1657"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">_resetLastSuggestion</span><span class="p">();</span>
<a name="typeahead.bundle.js-1658"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1659"></a>            <span class="nx">_getSuggestionsFragment</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">getSuggestionsFragment</span><span class="p">(</span><span class="nx">query</span><span class="p">,</span> <span class="nx">suggestions</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1660"></a>                <span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span><span class="p">,</span> <span class="nx">fragment</span><span class="p">;</span>
<a name="typeahead.bundle.js-1661"></a>                <span class="nx">fragment</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createDocumentFragment</span><span class="p">();</span>
<a name="typeahead.bundle.js-1662"></a>                <span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">suggestions</span><span class="p">,</span> <span class="kd">function</span> <span class="nx">getSuggestionNode</span><span class="p">(</span><span class="nx">suggestion</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1663"></a>                    <span class="kd">var</span> <span class="nx">$el</span><span class="p">,</span> <span class="nx">context</span><span class="p">;</span>
<a name="typeahead.bundle.js-1664"></a>                    <span class="nx">context</span> <span class="o">=</span> <span class="nx">that</span><span class="p">.</span><span class="nx">_injectQuery</span><span class="p">(</span><span class="nx">query</span><span class="p">,</span> <span class="nx">suggestion</span><span class="p">);</span>
<a name="typeahead.bundle.js-1665"></a>                    <span class="nx">$el</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">that</span><span class="p">.</span><span class="nx">templates</span><span class="p">.</span><span class="nx">suggestion</span><span class="p">(</span><span class="nx">context</span><span class="p">)).</span><span class="nx">data</span><span class="p">(</span><span class="nx">keys</span><span class="p">.</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">suggestion</span><span class="p">).</span><span class="nx">data</span><span class="p">(</span><span class="nx">keys</span><span class="p">.</span><span class="nx">val</span><span class="p">,</span> <span class="nx">that</span><span class="p">.</span><span class="nx">displayFn</span><span class="p">(</span><span class="nx">suggestion</span><span class="p">)).</span><span class="nx">addClass</span><span class="p">(</span><span class="nx">that</span><span class="p">.</span><span class="nx">classes</span><span class="p">.</span><span class="nx">suggestion</span> <span class="o">+</span> <span class="s2">&quot; &quot;</span> <span class="o">+</span> <span class="nx">that</span><span class="p">.</span><span class="nx">classes</span><span class="p">.</span><span class="nx">selectable</span><span class="p">);</span>
<a name="typeahead.bundle.js-1666"></a>                    <span class="nx">fragment</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">$el</span><span class="p">[</span><span class="mi">0</span><span class="p">]);</span>
<a name="typeahead.bundle.js-1667"></a>                <span class="p">});</span>
<a name="typeahead.bundle.js-1668"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">highlight</span> <span class="o">&amp;&amp;</span> <span class="nx">highlight</span><span class="p">({</span>
<a name="typeahead.bundle.js-1669"></a>                    <span class="nx">className</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">classes</span><span class="p">.</span><span class="nx">highlight</span><span class="p">,</span>
<a name="typeahead.bundle.js-1670"></a>                    <span class="nx">node</span><span class="o">:</span> <span class="nx">fragment</span><span class="p">,</span>
<a name="typeahead.bundle.js-1671"></a>                    <span class="nx">pattern</span><span class="o">:</span> <span class="nx">query</span>
<a name="typeahead.bundle.js-1672"></a>                <span class="p">});</span>
<a name="typeahead.bundle.js-1673"></a>                <span class="k">return</span> <span class="nx">$</span><span class="p">(</span><span class="nx">fragment</span><span class="p">);</span>
<a name="typeahead.bundle.js-1674"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1675"></a>            <span class="nx">_getFooter</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">getFooter</span><span class="p">(</span><span class="nx">query</span><span class="p">,</span> <span class="nx">suggestions</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1676"></a>                <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">templates</span><span class="p">.</span><span class="nx">footer</span> <span class="o">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">templates</span><span class="p">.</span><span class="nx">footer</span><span class="p">({</span>
<a name="typeahead.bundle.js-1677"></a>                    <span class="nx">query</span><span class="o">:</span> <span class="nx">query</span><span class="p">,</span>
<a name="typeahead.bundle.js-1678"></a>                    <span class="nx">suggestions</span><span class="o">:</span> <span class="nx">suggestions</span><span class="p">,</span>
<a name="typeahead.bundle.js-1679"></a>                    <span class="nx">dataset</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">name</span>
<a name="typeahead.bundle.js-1680"></a>                <span class="p">})</span> <span class="o">:</span> <span class="kc">null</span><span class="p">;</span>
<a name="typeahead.bundle.js-1681"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1682"></a>            <span class="nx">_getHeader</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">getHeader</span><span class="p">(</span><span class="nx">query</span><span class="p">,</span> <span class="nx">suggestions</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1683"></a>                <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">templates</span><span class="p">.</span><span class="nx">header</span> <span class="o">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">templates</span><span class="p">.</span><span class="nx">header</span><span class="p">({</span>
<a name="typeahead.bundle.js-1684"></a>                    <span class="nx">query</span><span class="o">:</span> <span class="nx">query</span><span class="p">,</span>
<a name="typeahead.bundle.js-1685"></a>                    <span class="nx">suggestions</span><span class="o">:</span> <span class="nx">suggestions</span><span class="p">,</span>
<a name="typeahead.bundle.js-1686"></a>                    <span class="nx">dataset</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">name</span>
<a name="typeahead.bundle.js-1687"></a>                <span class="p">})</span> <span class="o">:</span> <span class="kc">null</span><span class="p">;</span>
<a name="typeahead.bundle.js-1688"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1689"></a>            <span class="nx">_resetLastSuggestion</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">resetLastSuggestion</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1690"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">$lastSuggestion</span> <span class="o">=</span> <span class="nx">$</span><span class="p">();</span>
<a name="typeahead.bundle.js-1691"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1692"></a>            <span class="nx">_injectQuery</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">injectQuery</span><span class="p">(</span><span class="nx">query</span><span class="p">,</span> <span class="nx">obj</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1693"></a>                <span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isObject</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="o">?</span> <span class="nx">_</span><span class="p">.</span><span class="nx">mixin</span><span class="p">({</span>
<a name="typeahead.bundle.js-1694"></a>                    <span class="nx">_query</span><span class="o">:</span> <span class="nx">query</span>
<a name="typeahead.bundle.js-1695"></a>                <span class="p">},</span> <span class="nx">obj</span><span class="p">)</span> <span class="o">:</span> <span class="nx">obj</span><span class="p">;</span>
<a name="typeahead.bundle.js-1696"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1697"></a>            <span class="nx">update</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">update</span><span class="p">(</span><span class="nx">query</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1698"></a>                <span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span><span class="p">,</span> <span class="nx">canceled</span> <span class="o">=</span> <span class="kc">false</span><span class="p">,</span> <span class="nx">syncCalled</span> <span class="o">=</span> <span class="kc">false</span><span class="p">,</span> <span class="nx">rendered</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
<a name="typeahead.bundle.js-1699"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">cancel</span><span class="p">();</span>
<a name="typeahead.bundle.js-1700"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">cancel</span> <span class="o">=</span> <span class="kd">function</span> <span class="nx">cancel</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1701"></a>                    <span class="nx">canceled</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>
<a name="typeahead.bundle.js-1702"></a>                    <span class="nx">that</span><span class="p">.</span><span class="nx">cancel</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">noop</span><span class="p">;</span>
<a name="typeahead.bundle.js-1703"></a>                    <span class="nx">that</span><span class="p">.</span><span class="nx">async</span> <span class="o">&amp;&amp;</span> <span class="nx">that</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;asyncCanceled&quot;</span><span class="p">,</span> <span class="nx">query</span><span class="p">);</span>
<a name="typeahead.bundle.js-1704"></a>                <span class="p">};</span>
<a name="typeahead.bundle.js-1705"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">source</span><span class="p">(</span><span class="nx">query</span><span class="p">,</span> <span class="nx">sync</span><span class="p">,</span> <span class="nx">async</span><span class="p">);</span>
<a name="typeahead.bundle.js-1706"></a>                <span class="o">!</span><span class="nx">syncCalled</span> <span class="o">&amp;&amp;</span> <span class="nx">sync</span><span class="p">([]);</span>
<a name="typeahead.bundle.js-1707"></a>                <span class="kd">function</span> <span class="nx">sync</span><span class="p">(</span><span class="nx">suggestions</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1708"></a>                    <span class="k">if</span> <span class="p">(</span><span class="nx">syncCalled</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1709"></a>                        <span class="k">return</span><span class="p">;</span>
<a name="typeahead.bundle.js-1710"></a>                    <span class="p">}</span>
<a name="typeahead.bundle.js-1711"></a>                    <span class="nx">syncCalled</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>
<a name="typeahead.bundle.js-1712"></a>                    <span class="nx">suggestions</span> <span class="o">=</span> <span class="p">(</span><span class="nx">suggestions</span> <span class="o">||</span> <span class="p">[]).</span><span class="nx">slice</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">that</span><span class="p">.</span><span class="nx">limit</span><span class="p">);</span>
<a name="typeahead.bundle.js-1713"></a>                    <span class="nx">rendered</span> <span class="o">=</span> <span class="nx">suggestions</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span>
<a name="typeahead.bundle.js-1714"></a>                    <span class="nx">that</span><span class="p">.</span><span class="nx">_overwrite</span><span class="p">(</span><span class="nx">query</span><span class="p">,</span> <span class="nx">suggestions</span><span class="p">);</span>
<a name="typeahead.bundle.js-1715"></a>                    <span class="k">if</span> <span class="p">(</span><span class="nx">rendered</span> <span class="o">&lt;</span> <span class="nx">that</span><span class="p">.</span><span class="nx">limit</span> <span class="o">&amp;&amp;</span> <span class="nx">that</span><span class="p">.</span><span class="nx">async</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1716"></a>                        <span class="nx">that</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;asyncRequested&quot;</span><span class="p">,</span> <span class="nx">query</span><span class="p">);</span>
<a name="typeahead.bundle.js-1717"></a>                    <span class="p">}</span>
<a name="typeahead.bundle.js-1718"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-1719"></a>                <span class="kd">function</span> <span class="nx">async</span><span class="p">(</span><span class="nx">suggestions</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1720"></a>                    <span class="nx">suggestions</span> <span class="o">=</span> <span class="nx">suggestions</span> <span class="o">||</span> <span class="p">[];</span>
<a name="typeahead.bundle.js-1721"></a>                    <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">canceled</span> <span class="o">&amp;&amp;</span> <span class="nx">rendered</span> <span class="o">&lt;</span> <span class="nx">that</span><span class="p">.</span><span class="nx">limit</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1722"></a>                        <span class="nx">that</span><span class="p">.</span><span class="nx">cancel</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">noop</span><span class="p">;</span>
<a name="typeahead.bundle.js-1723"></a>                        <span class="nx">rendered</span> <span class="o">+=</span> <span class="nx">suggestions</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span>
<a name="typeahead.bundle.js-1724"></a>                        <span class="nx">that</span><span class="p">.</span><span class="nx">_append</span><span class="p">(</span><span class="nx">query</span><span class="p">,</span> <span class="nx">suggestions</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">that</span><span class="p">.</span><span class="nx">limit</span> <span class="o">-</span> <span class="nx">rendered</span><span class="p">));</span>
<a name="typeahead.bundle.js-1725"></a>                        <span class="nx">that</span><span class="p">.</span><span class="nx">async</span> <span class="o">&amp;&amp;</span> <span class="nx">that</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;asyncReceived&quot;</span><span class="p">,</span> <span class="nx">query</span><span class="p">);</span>
<a name="typeahead.bundle.js-1726"></a>                    <span class="p">}</span>
<a name="typeahead.bundle.js-1727"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-1728"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1729"></a>            <span class="nx">cancel</span><span class="o">:</span> <span class="nx">$</span><span class="p">.</span><span class="nx">noop</span><span class="p">,</span>
<a name="typeahead.bundle.js-1730"></a>            <span class="nx">clear</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">clear</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1731"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">_empty</span><span class="p">();</span>
<a name="typeahead.bundle.js-1732"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">cancel</span><span class="p">();</span>
<a name="typeahead.bundle.js-1733"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;cleared&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-1734"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1735"></a>            <span class="nx">isEmpty</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">isEmpty</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1736"></a>                <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">$el</span><span class="p">.</span><span class="nx">is</span><span class="p">(</span><span class="s2">&quot;:empty&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-1737"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1738"></a>            <span class="nx">destroy</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">destroy</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1739"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">$el</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;&lt;div&gt;&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-1740"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-1741"></a>        <span class="p">});</span>
<a name="typeahead.bundle.js-1742"></a>        <span class="k">return</span> <span class="nx">Dataset</span><span class="p">;</span>
<a name="typeahead.bundle.js-1743"></a>        <span class="kd">function</span> <span class="nx">getDisplayFn</span><span class="p">(</span><span class="nx">display</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1744"></a>            <span class="nx">display</span> <span class="o">=</span> <span class="nx">display</span> <span class="o">||</span> <span class="nx">_</span><span class="p">.</span><span class="nx">stringify</span><span class="p">;</span>
<a name="typeahead.bundle.js-1745"></a>            <span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">display</span><span class="p">)</span> <span class="o">?</span> <span class="nx">display</span> <span class="o">:</span> <span class="nx">displayFn</span><span class="p">;</span>
<a name="typeahead.bundle.js-1746"></a>            <span class="kd">function</span> <span class="nx">displayFn</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1747"></a>                <span class="k">return</span> <span class="nx">obj</span><span class="p">[</span><span class="nx">display</span><span class="p">];</span>
<a name="typeahead.bundle.js-1748"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-1749"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-1750"></a>        <span class="kd">function</span> <span class="nx">getTemplates</span><span class="p">(</span><span class="nx">templates</span><span class="p">,</span> <span class="nx">displayFn</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1751"></a>            <span class="k">return</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1752"></a>                <span class="nx">notFound</span><span class="o">:</span> <span class="nx">templates</span><span class="p">.</span><span class="nx">notFound</span> <span class="o">&amp;&amp;</span> <span class="nx">_</span><span class="p">.</span><span class="nx">templatify</span><span class="p">(</span><span class="nx">templates</span><span class="p">.</span><span class="nx">notFound</span><span class="p">),</span>
<a name="typeahead.bundle.js-1753"></a>                <span class="nx">pending</span><span class="o">:</span> <span class="nx">templates</span><span class="p">.</span><span class="nx">pending</span> <span class="o">&amp;&amp;</span> <span class="nx">_</span><span class="p">.</span><span class="nx">templatify</span><span class="p">(</span><span class="nx">templates</span><span class="p">.</span><span class="nx">pending</span><span class="p">),</span>
<a name="typeahead.bundle.js-1754"></a>                <span class="nx">header</span><span class="o">:</span> <span class="nx">templates</span><span class="p">.</span><span class="nx">header</span> <span class="o">&amp;&amp;</span> <span class="nx">_</span><span class="p">.</span><span class="nx">templatify</span><span class="p">(</span><span class="nx">templates</span><span class="p">.</span><span class="nx">header</span><span class="p">),</span>
<a name="typeahead.bundle.js-1755"></a>                <span class="nx">footer</span><span class="o">:</span> <span class="nx">templates</span><span class="p">.</span><span class="nx">footer</span> <span class="o">&amp;&amp;</span> <span class="nx">_</span><span class="p">.</span><span class="nx">templatify</span><span class="p">(</span><span class="nx">templates</span><span class="p">.</span><span class="nx">footer</span><span class="p">),</span>
<a name="typeahead.bundle.js-1756"></a>                <span class="nx">suggestion</span><span class="o">:</span> <span class="nx">templates</span><span class="p">.</span><span class="nx">suggestion</span> <span class="o">||</span> <span class="nx">suggestionTemplate</span>
<a name="typeahead.bundle.js-1757"></a>            <span class="p">};</span>
<a name="typeahead.bundle.js-1758"></a>            <span class="kd">function</span> <span class="nx">suggestionTemplate</span><span class="p">(</span><span class="nx">context</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1759"></a>                <span class="k">return</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;&lt;div&gt;&quot;</span><span class="p">).</span><span class="nx">text</span><span class="p">(</span><span class="nx">displayFn</span><span class="p">(</span><span class="nx">context</span><span class="p">));</span>
<a name="typeahead.bundle.js-1760"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-1761"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-1762"></a>        <span class="kd">function</span> <span class="nx">isValidName</span><span class="p">(</span><span class="nx">str</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1763"></a>            <span class="k">return</span> <span class="sr">/^[_a-zA-Z0-9-]+$/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">str</span><span class="p">);</span>
<a name="typeahead.bundle.js-1764"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-1765"></a>    <span class="p">}();</span>
<a name="typeahead.bundle.js-1766"></a>    <span class="kd">var</span> <span class="nx">Menu</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1767"></a>        <span class="s2">&quot;use strict&quot;</span><span class="p">;</span>
<a name="typeahead.bundle.js-1768"></a>        <span class="kd">function</span> <span class="nx">Menu</span><span class="p">(</span><span class="nx">o</span><span class="p">,</span> <span class="nx">www</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1769"></a>            <span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span>
<a name="typeahead.bundle.js-1770"></a>            <span class="nx">o</span> <span class="o">=</span> <span class="nx">o</span> <span class="o">||</span> <span class="p">{};</span>
<a name="typeahead.bundle.js-1771"></a>            <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">o</span><span class="p">.</span><span class="nx">node</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1772"></a>                <span class="nx">$</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="s2">&quot;node is required&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-1773"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-1774"></a>            <span class="nx">www</span><span class="p">.</span><span class="nx">mixin</span><span class="p">(</span><span class="k">this</span><span class="p">);</span>
<a name="typeahead.bundle.js-1775"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">$node</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">node</span><span class="p">);</span>
<a name="typeahead.bundle.js-1776"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">query</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span>
<a name="typeahead.bundle.js-1777"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">datasets</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">datasets</span><span class="p">,</span> <span class="nx">initializeDataset</span><span class="p">);</span>
<a name="typeahead.bundle.js-1778"></a>            <span class="kd">function</span> <span class="nx">initializeDataset</span><span class="p">(</span><span class="nx">oDataset</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1779"></a>                <span class="kd">var</span> <span class="nx">node</span> <span class="o">=</span> <span class="nx">that</span><span class="p">.</span><span class="nx">$node</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="nx">oDataset</span><span class="p">.</span><span class="nx">node</span><span class="p">).</span><span class="nx">first</span><span class="p">();</span>
<a name="typeahead.bundle.js-1780"></a>                <span class="nx">oDataset</span><span class="p">.</span><span class="nx">node</span> <span class="o">=</span> <span class="nx">node</span><span class="p">.</span><span class="nx">length</span> <span class="o">?</span> <span class="nx">node</span> <span class="o">:</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;&lt;div&gt;&quot;</span><span class="p">).</span><span class="nx">appendTo</span><span class="p">(</span><span class="nx">that</span><span class="p">.</span><span class="nx">$node</span><span class="p">);</span>
<a name="typeahead.bundle.js-1781"></a>                <span class="k">return</span> <span class="k">new</span> <span class="nx">Dataset</span><span class="p">(</span><span class="nx">oDataset</span><span class="p">,</span> <span class="nx">www</span><span class="p">);</span>
<a name="typeahead.bundle.js-1782"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-1783"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-1784"></a>        <span class="nx">_</span><span class="p">.</span><span class="nx">mixin</span><span class="p">(</span><span class="nx">Menu</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span> <span class="nx">EventEmitter</span><span class="p">,</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1785"></a>            <span class="nx">_onSelectableClick</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">onSelectableClick</span><span class="p">(</span><span class="nx">$e</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1786"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;selectableClicked&quot;</span><span class="p">,</span> <span class="nx">$</span><span class="p">(</span><span class="nx">$e</span><span class="p">.</span><span class="nx">currentTarget</span><span class="p">));</span>
<a name="typeahead.bundle.js-1787"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1788"></a>            <span class="nx">_onRendered</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">onRendered</span><span class="p">(</span><span class="nx">type</span><span class="p">,</span> <span class="nx">dataset</span><span class="p">,</span> <span class="nx">suggestions</span><span class="p">,</span> <span class="nx">async</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1789"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">$node</span><span class="p">.</span><span class="nx">toggleClass</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">classes</span><span class="p">.</span><span class="nx">empty</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">_allDatasetsEmpty</span><span class="p">());</span>
<a name="typeahead.bundle.js-1790"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;datasetRendered&quot;</span><span class="p">,</span> <span class="nx">dataset</span><span class="p">,</span> <span class="nx">suggestions</span><span class="p">,</span> <span class="nx">async</span><span class="p">);</span>
<a name="typeahead.bundle.js-1791"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1792"></a>            <span class="nx">_onCleared</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">onCleared</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1793"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">$node</span><span class="p">.</span><span class="nx">toggleClass</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">classes</span><span class="p">.</span><span class="nx">empty</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">_allDatasetsEmpty</span><span class="p">());</span>
<a name="typeahead.bundle.js-1794"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;datasetCleared&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-1795"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1796"></a>            <span class="nx">_propagate</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">propagate</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1797"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span>
<a name="typeahead.bundle.js-1798"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1799"></a>            <span class="nx">_allDatasetsEmpty</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">allDatasetsEmpty</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1800"></a>                <span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">every</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">datasets</span><span class="p">,</span> <span class="nx">isDatasetEmpty</span><span class="p">);</span>
<a name="typeahead.bundle.js-1801"></a>                <span class="kd">function</span> <span class="nx">isDatasetEmpty</span><span class="p">(</span><span class="nx">dataset</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1802"></a>                    <span class="k">return</span> <span class="nx">dataset</span><span class="p">.</span><span class="nx">isEmpty</span><span class="p">();</span>
<a name="typeahead.bundle.js-1803"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-1804"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1805"></a>            <span class="nx">_getSelectables</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">getSelectables</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1806"></a>                <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">$node</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">selectors</span><span class="p">.</span><span class="nx">selectable</span><span class="p">);</span>
<a name="typeahead.bundle.js-1807"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1808"></a>            <span class="nx">_removeCursor</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">_removeCursor</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1809"></a>                <span class="kd">var</span> <span class="nx">$selectable</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">getActiveSelectable</span><span class="p">();</span>
<a name="typeahead.bundle.js-1810"></a>                <span class="nx">$selectable</span> <span class="o">&amp;&amp;</span> <span class="nx">$selectable</span><span class="p">.</span><span class="nx">removeClass</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">classes</span><span class="p">.</span><span class="nx">cursor</span><span class="p">);</span>
<a name="typeahead.bundle.js-1811"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1812"></a>            <span class="nx">_ensureVisible</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">ensureVisible</span><span class="p">(</span><span class="nx">$el</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1813"></a>                <span class="kd">var</span> <span class="nx">elTop</span><span class="p">,</span> <span class="nx">elBottom</span><span class="p">,</span> <span class="nx">nodeScrollTop</span><span class="p">,</span> <span class="nx">nodeHeight</span><span class="p">;</span>
<a name="typeahead.bundle.js-1814"></a>                <span class="nx">elTop</span> <span class="o">=</span> <span class="nx">$el</span><span class="p">.</span><span class="nx">position</span><span class="p">().</span><span class="nx">top</span><span class="p">;</span>
<a name="typeahead.bundle.js-1815"></a>                <span class="nx">elBottom</span> <span class="o">=</span> <span class="nx">elTop</span> <span class="o">+</span> <span class="nx">$el</span><span class="p">.</span><span class="nx">outerHeight</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span>
<a name="typeahead.bundle.js-1816"></a>                <span class="nx">nodeScrollTop</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">$node</span><span class="p">.</span><span class="nx">scrollTop</span><span class="p">();</span>
<a name="typeahead.bundle.js-1817"></a>                <span class="nx">nodeHeight</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">$node</span><span class="p">.</span><span class="nx">height</span><span class="p">()</span> <span class="o">+</span> <span class="nb">parseInt</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">$node</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s2">&quot;paddingTop&quot;</span><span class="p">),</span> <span class="mi">10</span><span class="p">)</span> <span class="o">+</span> <span class="nb">parseInt</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">$node</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s2">&quot;paddingBottom&quot;</span><span class="p">),</span> <span class="mi">10</span><span class="p">);</span>
<a name="typeahead.bundle.js-1818"></a>                <span class="k">if</span> <span class="p">(</span><span class="nx">elTop</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1819"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">$node</span><span class="p">.</span><span class="nx">scrollTop</span><span class="p">(</span><span class="nx">nodeScrollTop</span> <span class="o">+</span> <span class="nx">elTop</span><span class="p">);</span>
<a name="typeahead.bundle.js-1820"></a>                <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">nodeHeight</span> <span class="o">&lt;</span> <span class="nx">elBottom</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1821"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">$node</span><span class="p">.</span><span class="nx">scrollTop</span><span class="p">(</span><span class="nx">nodeScrollTop</span> <span class="o">+</span> <span class="p">(</span><span class="nx">elBottom</span> <span class="o">-</span> <span class="nx">nodeHeight</span><span class="p">));</span>
<a name="typeahead.bundle.js-1822"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-1823"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1824"></a>            <span class="nx">bind</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1825"></a>                <span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span><span class="p">,</span> <span class="nx">onSelectableClick</span><span class="p">;</span>
<a name="typeahead.bundle.js-1826"></a>                <span class="nx">onSelectableClick</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_onSelectableClick</span><span class="p">,</span> <span class="k">this</span><span class="p">);</span>
<a name="typeahead.bundle.js-1827"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">$node</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s2">&quot;click.tt&quot;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">selectors</span><span class="p">.</span><span class="nx">selectable</span><span class="p">,</span> <span class="nx">onSelectableClick</span><span class="p">);</span>
<a name="typeahead.bundle.js-1828"></a>                <span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">datasets</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">dataset</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1829"></a>                    <span class="nx">dataset</span><span class="p">.</span><span class="nx">onSync</span><span class="p">(</span><span class="s2">&quot;asyncRequested&quot;</span><span class="p">,</span> <span class="nx">that</span><span class="p">.</span><span class="nx">_propagate</span><span class="p">,</span> <span class="nx">that</span><span class="p">).</span><span class="nx">onSync</span><span class="p">(</span><span class="s2">&quot;asyncCanceled&quot;</span><span class="p">,</span> <span class="nx">that</span><span class="p">.</span><span class="nx">_propagate</span><span class="p">,</span> <span class="nx">that</span><span class="p">).</span><span class="nx">onSync</span><span class="p">(</span><span class="s2">&quot;asyncReceived&quot;</span><span class="p">,</span> <span class="nx">that</span><span class="p">.</span><span class="nx">_propagate</span><span class="p">,</span> <span class="nx">that</span><span class="p">).</span><span class="nx">onSync</span><span class="p">(</span><span class="s2">&quot;rendered&quot;</span><span class="p">,</span> <span class="nx">that</span><span class="p">.</span><span class="nx">_onRendered</span><span class="p">,</span> <span class="nx">that</span><span class="p">).</span><span class="nx">onSync</span><span class="p">(</span><span class="s2">&quot;cleared&quot;</span><span class="p">,</span> <span class="nx">that</span><span class="p">.</span><span class="nx">_onCleared</span><span class="p">,</span> <span class="nx">that</span><span class="p">);</span>
<a name="typeahead.bundle.js-1830"></a>                <span class="p">});</span>
<a name="typeahead.bundle.js-1831"></a>                <span class="k">return</span> <span class="k">this</span><span class="p">;</span>
<a name="typeahead.bundle.js-1832"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1833"></a>            <span class="nx">isOpen</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">isOpen</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1834"></a>                <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">$node</span><span class="p">.</span><span class="nx">hasClass</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">classes</span><span class="p">.</span><span class="nx">open</span><span class="p">);</span>
<a name="typeahead.bundle.js-1835"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1836"></a>            <span class="nx">open</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">open</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1837"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">$node</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">classes</span><span class="p">.</span><span class="nx">open</span><span class="p">);</span>
<a name="typeahead.bundle.js-1838"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1839"></a>            <span class="nx">close</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">close</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1840"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">$node</span><span class="p">.</span><span class="nx">removeClass</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">classes</span><span class="p">.</span><span class="nx">open</span><span class="p">);</span>
<a name="typeahead.bundle.js-1841"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">_removeCursor</span><span class="p">();</span>
<a name="typeahead.bundle.js-1842"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1843"></a>            <span class="nx">setLanguageDirection</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">setLanguageDirection</span><span class="p">(</span><span class="nx">dir</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1844"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">$node</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s2">&quot;dir&quot;</span><span class="p">,</span> <span class="nx">dir</span><span class="p">);</span>
<a name="typeahead.bundle.js-1845"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1846"></a>            <span class="nx">selectableRelativeToCursor</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">selectableRelativeToCursor</span><span class="p">(</span><span class="nx">delta</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1847"></a>                <span class="kd">var</span> <span class="nx">$selectables</span><span class="p">,</span> <span class="nx">$oldCursor</span><span class="p">,</span> <span class="nx">oldIndex</span><span class="p">,</span> <span class="nx">newIndex</span><span class="p">;</span>
<a name="typeahead.bundle.js-1848"></a>                <span class="nx">$oldCursor</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">getActiveSelectable</span><span class="p">();</span>
<a name="typeahead.bundle.js-1849"></a>                <span class="nx">$selectables</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_getSelectables</span><span class="p">();</span>
<a name="typeahead.bundle.js-1850"></a>                <span class="nx">oldIndex</span> <span class="o">=</span> <span class="nx">$oldCursor</span> <span class="o">?</span> <span class="nx">$selectables</span><span class="p">.</span><span class="nx">index</span><span class="p">(</span><span class="nx">$oldCursor</span><span class="p">)</span> <span class="o">:</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span>
<a name="typeahead.bundle.js-1851"></a>                <span class="nx">newIndex</span> <span class="o">=</span> <span class="nx">oldIndex</span> <span class="o">+</span> <span class="nx">delta</span><span class="p">;</span>
<a name="typeahead.bundle.js-1852"></a>                <span class="nx">newIndex</span> <span class="o">=</span> <span class="p">(</span><span class="nx">newIndex</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)</span> <span class="o">%</span> <span class="p">(</span><span class="nx">$selectables</span><span class="p">.</span><span class="nx">length</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span>
<a name="typeahead.bundle.js-1853"></a>                <span class="nx">newIndex</span> <span class="o">=</span> <span class="nx">newIndex</span> <span class="o">&lt;</span> <span class="o">-</span><span class="mi">1</span> <span class="o">?</span> <span class="nx">$selectables</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span> <span class="o">:</span> <span class="nx">newIndex</span><span class="p">;</span>
<a name="typeahead.bundle.js-1854"></a>                <span class="k">return</span> <span class="nx">newIndex</span> <span class="o">===</span> <span class="o">-</span><span class="mi">1</span> <span class="o">?</span> <span class="kc">null</span> <span class="o">:</span> <span class="nx">$selectables</span><span class="p">.</span><span class="nx">eq</span><span class="p">(</span><span class="nx">newIndex</span><span class="p">);</span>
<a name="typeahead.bundle.js-1855"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1856"></a>            <span class="nx">setCursor</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">setCursor</span><span class="p">(</span><span class="nx">$selectable</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1857"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">_removeCursor</span><span class="p">();</span>
<a name="typeahead.bundle.js-1858"></a>                <span class="k">if</span> <span class="p">(</span><span class="nx">$selectable</span> <span class="o">=</span> <span class="nx">$selectable</span> <span class="o">&amp;&amp;</span> <span class="nx">$selectable</span><span class="p">.</span><span class="nx">first</span><span class="p">())</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1859"></a>                    <span class="nx">$selectable</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">classes</span><span class="p">.</span><span class="nx">cursor</span><span class="p">);</span>
<a name="typeahead.bundle.js-1860"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">_ensureVisible</span><span class="p">(</span><span class="nx">$selectable</span><span class="p">);</span>
<a name="typeahead.bundle.js-1861"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-1862"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1863"></a>            <span class="nx">getSelectableData</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">getSelectableData</span><span class="p">(</span><span class="nx">$el</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1864"></a>                <span class="k">return</span> <span class="nx">$el</span> <span class="o">&amp;&amp;</span> <span class="nx">$el</span><span class="p">.</span><span class="nx">length</span> <span class="o">?</span> <span class="nx">Dataset</span><span class="p">.</span><span class="nx">extractData</span><span class="p">(</span><span class="nx">$el</span><span class="p">)</span> <span class="o">:</span> <span class="kc">null</span><span class="p">;</span>
<a name="typeahead.bundle.js-1865"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1866"></a>            <span class="nx">getActiveSelectable</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">getActiveSelectable</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1867"></a>                <span class="kd">var</span> <span class="nx">$selectable</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_getSelectables</span><span class="p">().</span><span class="nx">filter</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">selectors</span><span class="p">.</span><span class="nx">cursor</span><span class="p">).</span><span class="nx">first</span><span class="p">();</span>
<a name="typeahead.bundle.js-1868"></a>                <span class="k">return</span> <span class="nx">$selectable</span><span class="p">.</span><span class="nx">length</span> <span class="o">?</span> <span class="nx">$selectable</span> <span class="o">:</span> <span class="kc">null</span><span class="p">;</span>
<a name="typeahead.bundle.js-1869"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1870"></a>            <span class="nx">getTopSelectable</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">getTopSelectable</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1871"></a>                <span class="kd">var</span> <span class="nx">$selectable</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_getSelectables</span><span class="p">().</span><span class="nx">first</span><span class="p">();</span>
<a name="typeahead.bundle.js-1872"></a>                <span class="k">return</span> <span class="nx">$selectable</span><span class="p">.</span><span class="nx">length</span> <span class="o">?</span> <span class="nx">$selectable</span> <span class="o">:</span> <span class="kc">null</span><span class="p">;</span>
<a name="typeahead.bundle.js-1873"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1874"></a>            <span class="nx">update</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">update</span><span class="p">(</span><span class="nx">query</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1875"></a>                <span class="kd">var</span> <span class="nx">isValidUpdate</span> <span class="o">=</span> <span class="nx">query</span> <span class="o">!==</span> <span class="k">this</span><span class="p">.</span><span class="nx">query</span><span class="p">;</span>
<a name="typeahead.bundle.js-1876"></a>                <span class="k">if</span> <span class="p">(</span><span class="nx">isValidUpdate</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1877"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">query</span> <span class="o">=</span> <span class="nx">query</span><span class="p">;</span>
<a name="typeahead.bundle.js-1878"></a>                    <span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">datasets</span><span class="p">,</span> <span class="nx">updateDataset</span><span class="p">);</span>
<a name="typeahead.bundle.js-1879"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-1880"></a>                <span class="k">return</span> <span class="nx">isValidUpdate</span><span class="p">;</span>
<a name="typeahead.bundle.js-1881"></a>                <span class="kd">function</span> <span class="nx">updateDataset</span><span class="p">(</span><span class="nx">dataset</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1882"></a>                    <span class="nx">dataset</span><span class="p">.</span><span class="nx">update</span><span class="p">(</span><span class="nx">query</span><span class="p">);</span>
<a name="typeahead.bundle.js-1883"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-1884"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1885"></a>            <span class="nx">empty</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">empty</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1886"></a>                <span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">datasets</span><span class="p">,</span> <span class="nx">clearDataset</span><span class="p">);</span>
<a name="typeahead.bundle.js-1887"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">query</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span>
<a name="typeahead.bundle.js-1888"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">$node</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">classes</span><span class="p">.</span><span class="nx">empty</span><span class="p">);</span>
<a name="typeahead.bundle.js-1889"></a>                <span class="kd">function</span> <span class="nx">clearDataset</span><span class="p">(</span><span class="nx">dataset</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1890"></a>                    <span class="nx">dataset</span><span class="p">.</span><span class="nx">clear</span><span class="p">();</span>
<a name="typeahead.bundle.js-1891"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-1892"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1893"></a>            <span class="nx">destroy</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">destroy</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1894"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">$node</span><span class="p">.</span><span class="nx">off</span><span class="p">(</span><span class="s2">&quot;.tt&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-1895"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">$node</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;&lt;div&gt;&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-1896"></a>                <span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">datasets</span><span class="p">,</span> <span class="nx">destroyDataset</span><span class="p">);</span>
<a name="typeahead.bundle.js-1897"></a>                <span class="kd">function</span> <span class="nx">destroyDataset</span><span class="p">(</span><span class="nx">dataset</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1898"></a>                    <span class="nx">dataset</span><span class="p">.</span><span class="nx">destroy</span><span class="p">();</span>
<a name="typeahead.bundle.js-1899"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-1900"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-1901"></a>        <span class="p">});</span>
<a name="typeahead.bundle.js-1902"></a>        <span class="k">return</span> <span class="nx">Menu</span><span class="p">;</span>
<a name="typeahead.bundle.js-1903"></a>    <span class="p">}();</span>
<a name="typeahead.bundle.js-1904"></a>    <span class="kd">var</span> <span class="nx">DefaultMenu</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1905"></a>        <span class="s2">&quot;use strict&quot;</span><span class="p">;</span>
<a name="typeahead.bundle.js-1906"></a>        <span class="kd">var</span> <span class="nx">s</span> <span class="o">=</span> <span class="nx">Menu</span><span class="p">.</span><span class="nx">prototype</span><span class="p">;</span>
<a name="typeahead.bundle.js-1907"></a>        <span class="kd">function</span> <span class="nx">DefaultMenu</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1908"></a>            <span class="nx">Menu</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="p">[].</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">0</span><span class="p">));</span>
<a name="typeahead.bundle.js-1909"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-1910"></a>        <span class="nx">_</span><span class="p">.</span><span class="nx">mixin</span><span class="p">(</span><span class="nx">DefaultMenu</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span> <span class="nx">Menu</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1911"></a>            <span class="nx">open</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">open</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1912"></a>                <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">_allDatasetsEmpty</span><span class="p">()</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">_show</span><span class="p">();</span>
<a name="typeahead.bundle.js-1913"></a>                <span class="k">return</span> <span class="nx">s</span><span class="p">.</span><span class="nx">open</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="p">[].</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">0</span><span class="p">));</span>
<a name="typeahead.bundle.js-1914"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1915"></a>            <span class="nx">close</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">close</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1916"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">_hide</span><span class="p">();</span>
<a name="typeahead.bundle.js-1917"></a>                <span class="k">return</span> <span class="nx">s</span><span class="p">.</span><span class="nx">close</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="p">[].</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">0</span><span class="p">));</span>
<a name="typeahead.bundle.js-1918"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1919"></a>            <span class="nx">_onRendered</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">onRendered</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1920"></a>                <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_allDatasetsEmpty</span><span class="p">())</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1921"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">_hide</span><span class="p">();</span>
<a name="typeahead.bundle.js-1922"></a>                <span class="p">}</span> <span class="k">else</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1923"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">isOpen</span><span class="p">()</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">_show</span><span class="p">();</span>
<a name="typeahead.bundle.js-1924"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-1925"></a>                <span class="k">return</span> <span class="nx">s</span><span class="p">.</span><span class="nx">_onRendered</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="p">[].</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">0</span><span class="p">));</span>
<a name="typeahead.bundle.js-1926"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1927"></a>            <span class="nx">_onCleared</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">onCleared</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1928"></a>                <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_allDatasetsEmpty</span><span class="p">())</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1929"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">_hide</span><span class="p">();</span>
<a name="typeahead.bundle.js-1930"></a>                <span class="p">}</span> <span class="k">else</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1931"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">isOpen</span><span class="p">()</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">_show</span><span class="p">();</span>
<a name="typeahead.bundle.js-1932"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-1933"></a>                <span class="k">return</span> <span class="nx">s</span><span class="p">.</span><span class="nx">_onCleared</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="p">[].</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">0</span><span class="p">));</span>
<a name="typeahead.bundle.js-1934"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1935"></a>            <span class="nx">setLanguageDirection</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">setLanguageDirection</span><span class="p">(</span><span class="nx">dir</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1936"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">$node</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="nx">dir</span> <span class="o">===</span> <span class="s2">&quot;ltr&quot;</span> <span class="o">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">css</span><span class="p">.</span><span class="nx">ltr</span> <span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">css</span><span class="p">.</span><span class="nx">rtl</span><span class="p">);</span>
<a name="typeahead.bundle.js-1937"></a>                <span class="k">return</span> <span class="nx">s</span><span class="p">.</span><span class="nx">setLanguageDirection</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="p">[].</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">0</span><span class="p">));</span>
<a name="typeahead.bundle.js-1938"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1939"></a>            <span class="nx">_hide</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">hide</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1940"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">$node</span><span class="p">.</span><span class="nx">hide</span><span class="p">();</span>
<a name="typeahead.bundle.js-1941"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-1942"></a>            <span class="nx">_show</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">show</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1943"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">$node</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s2">&quot;display&quot;</span><span class="p">,</span> <span class="s2">&quot;block&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-1944"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-1945"></a>        <span class="p">});</span>
<a name="typeahead.bundle.js-1946"></a>        <span class="k">return</span> <span class="nx">DefaultMenu</span><span class="p">;</span>
<a name="typeahead.bundle.js-1947"></a>    <span class="p">}();</span>
<a name="typeahead.bundle.js-1948"></a>    <span class="kd">var</span> <span class="nx">Typeahead</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1949"></a>        <span class="s2">&quot;use strict&quot;</span><span class="p">;</span>
<a name="typeahead.bundle.js-1950"></a>        <span class="kd">function</span> <span class="nx">Typeahead</span><span class="p">(</span><span class="nx">o</span><span class="p">,</span> <span class="nx">www</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1951"></a>            <span class="kd">var</span> <span class="nx">onFocused</span><span class="p">,</span> <span class="nx">onBlurred</span><span class="p">,</span> <span class="nx">onEnterKeyed</span><span class="p">,</span> <span class="nx">onTabKeyed</span><span class="p">,</span> <span class="nx">onEscKeyed</span><span class="p">,</span> <span class="nx">onUpKeyed</span><span class="p">,</span> <span class="nx">onDownKeyed</span><span class="p">,</span> <span class="nx">onLeftKeyed</span><span class="p">,</span> <span class="nx">onRightKeyed</span><span class="p">,</span> <span class="nx">onQueryChanged</span><span class="p">,</span> <span class="nx">onWhitespaceChanged</span><span class="p">;</span>
<a name="typeahead.bundle.js-1952"></a>            <span class="nx">o</span> <span class="o">=</span> <span class="nx">o</span> <span class="o">||</span> <span class="p">{};</span>
<a name="typeahead.bundle.js-1953"></a>            <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">o</span><span class="p">.</span><span class="nx">input</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1954"></a>                <span class="nx">$</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="s2">&quot;missing input&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-1955"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-1956"></a>            <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">o</span><span class="p">.</span><span class="nx">menu</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1957"></a>                <span class="nx">$</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="s2">&quot;missing menu&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-1958"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-1959"></a>            <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">o</span><span class="p">.</span><span class="nx">eventBus</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1960"></a>                <span class="nx">$</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="s2">&quot;missing event bus&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-1961"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-1962"></a>            <span class="nx">www</span><span class="p">.</span><span class="nx">mixin</span><span class="p">(</span><span class="k">this</span><span class="p">);</span>
<a name="typeahead.bundle.js-1963"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">eventBus</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">eventBus</span><span class="p">;</span>
<a name="typeahead.bundle.js-1964"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">minLength</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isNumber</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">minLength</span><span class="p">)</span> <span class="o">?</span> <span class="nx">o</span><span class="p">.</span><span class="nx">minLength</span> <span class="o">:</span> <span class="mi">1</span><span class="p">;</span>
<a name="typeahead.bundle.js-1965"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">input</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">input</span><span class="p">;</span>
<a name="typeahead.bundle.js-1966"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">menu</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">menu</span><span class="p">;</span>
<a name="typeahead.bundle.js-1967"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">enabled</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>
<a name="typeahead.bundle.js-1968"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">active</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span>
<a name="typeahead.bundle.js-1969"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">input</span><span class="p">.</span><span class="nx">hasFocus</span><span class="p">()</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">activate</span><span class="p">();</span>
<a name="typeahead.bundle.js-1970"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">dir</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">input</span><span class="p">.</span><span class="nx">getLangDir</span><span class="p">();</span>
<a name="typeahead.bundle.js-1971"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">_hacks</span><span class="p">();</span>
<a name="typeahead.bundle.js-1972"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">menu</span><span class="p">.</span><span class="nx">bind</span><span class="p">().</span><span class="nx">onSync</span><span class="p">(</span><span class="s2">&quot;selectableClicked&quot;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">_onSelectableClicked</span><span class="p">,</span> <span class="k">this</span><span class="p">).</span><span class="nx">onSync</span><span class="p">(</span><span class="s2">&quot;asyncRequested&quot;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">_onAsyncRequested</span><span class="p">,</span> <span class="k">this</span><span class="p">).</span><span class="nx">onSync</span><span class="p">(</span><span class="s2">&quot;asyncCanceled&quot;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">_onAsyncCanceled</span><span class="p">,</span> <span class="k">this</span><span class="p">).</span><span class="nx">onSync</span><span class="p">(</span><span class="s2">&quot;asyncReceived&quot;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">_onAsyncReceived</span><span class="p">,</span> <span class="k">this</span><span class="p">).</span><span class="nx">onSync</span><span class="p">(</span><span class="s2">&quot;datasetRendered&quot;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">_onDatasetRendered</span><span class="p">,</span> <span class="k">this</span><span class="p">).</span><span class="nx">onSync</span><span class="p">(</span><span class="s2">&quot;datasetCleared&quot;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">_onDatasetCleared</span><span class="p">,</span> <span class="k">this</span><span class="p">);</span>
<a name="typeahead.bundle.js-1973"></a>            <span class="nx">onFocused</span> <span class="o">=</span> <span class="nx">c</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s2">&quot;activate&quot;</span><span class="p">,</span> <span class="s2">&quot;open&quot;</span><span class="p">,</span> <span class="s2">&quot;_onFocused&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-1974"></a>            <span class="nx">onBlurred</span> <span class="o">=</span> <span class="nx">c</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s2">&quot;deactivate&quot;</span><span class="p">,</span> <span class="s2">&quot;_onBlurred&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-1975"></a>            <span class="nx">onEnterKeyed</span> <span class="o">=</span> <span class="nx">c</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s2">&quot;isActive&quot;</span><span class="p">,</span> <span class="s2">&quot;isOpen&quot;</span><span class="p">,</span> <span class="s2">&quot;_onEnterKeyed&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-1976"></a>            <span class="nx">onTabKeyed</span> <span class="o">=</span> <span class="nx">c</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s2">&quot;isActive&quot;</span><span class="p">,</span> <span class="s2">&quot;isOpen&quot;</span><span class="p">,</span> <span class="s2">&quot;_onTabKeyed&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-1977"></a>            <span class="nx">onEscKeyed</span> <span class="o">=</span> <span class="nx">c</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s2">&quot;isActive&quot;</span><span class="p">,</span> <span class="s2">&quot;_onEscKeyed&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-1978"></a>            <span class="nx">onUpKeyed</span> <span class="o">=</span> <span class="nx">c</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s2">&quot;isActive&quot;</span><span class="p">,</span> <span class="s2">&quot;open&quot;</span><span class="p">,</span> <span class="s2">&quot;_onUpKeyed&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-1979"></a>            <span class="nx">onDownKeyed</span> <span class="o">=</span> <span class="nx">c</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s2">&quot;isActive&quot;</span><span class="p">,</span> <span class="s2">&quot;open&quot;</span><span class="p">,</span> <span class="s2">&quot;_onDownKeyed&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-1980"></a>            <span class="nx">onLeftKeyed</span> <span class="o">=</span> <span class="nx">c</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s2">&quot;isActive&quot;</span><span class="p">,</span> <span class="s2">&quot;isOpen&quot;</span><span class="p">,</span> <span class="s2">&quot;_onLeftKeyed&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-1981"></a>            <span class="nx">onRightKeyed</span> <span class="o">=</span> <span class="nx">c</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s2">&quot;isActive&quot;</span><span class="p">,</span> <span class="s2">&quot;isOpen&quot;</span><span class="p">,</span> <span class="s2">&quot;_onRightKeyed&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-1982"></a>            <span class="nx">onQueryChanged</span> <span class="o">=</span> <span class="nx">c</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s2">&quot;_openIfActive&quot;</span><span class="p">,</span> <span class="s2">&quot;_onQueryChanged&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-1983"></a>            <span class="nx">onWhitespaceChanged</span> <span class="o">=</span> <span class="nx">c</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s2">&quot;_openIfActive&quot;</span><span class="p">,</span> <span class="s2">&quot;_onWhitespaceChanged&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-1984"></a>            <span class="k">this</span><span class="p">.</span><span class="nx">input</span><span class="p">.</span><span class="nx">bind</span><span class="p">().</span><span class="nx">onSync</span><span class="p">(</span><span class="s2">&quot;focused&quot;</span><span class="p">,</span> <span class="nx">onFocused</span><span class="p">,</span> <span class="k">this</span><span class="p">).</span><span class="nx">onSync</span><span class="p">(</span><span class="s2">&quot;blurred&quot;</span><span class="p">,</span> <span class="nx">onBlurred</span><span class="p">,</span> <span class="k">this</span><span class="p">).</span><span class="nx">onSync</span><span class="p">(</span><span class="s2">&quot;enterKeyed&quot;</span><span class="p">,</span> <span class="nx">onEnterKeyed</span><span class="p">,</span> <span class="k">this</span><span class="p">).</span><span class="nx">onSync</span><span class="p">(</span><span class="s2">&quot;tabKeyed&quot;</span><span class="p">,</span> <span class="nx">onTabKeyed</span><span class="p">,</span> <span class="k">this</span><span class="p">).</span><span class="nx">onSync</span><span class="p">(</span><span class="s2">&quot;escKeyed&quot;</span><span class="p">,</span> <span class="nx">onEscKeyed</span><span class="p">,</span> <span class="k">this</span><span class="p">).</span><span class="nx">onSync</span><span class="p">(</span><span class="s2">&quot;upKeyed&quot;</span><span class="p">,</span> <span class="nx">onUpKeyed</span><span class="p">,</span> <span class="k">this</span><span class="p">).</span><span class="nx">onSync</span><span class="p">(</span><span class="s2">&quot;downKeyed&quot;</span><span class="p">,</span> <span class="nx">onDownKeyed</span><span class="p">,</span> <span class="k">this</span><span class="p">).</span><span class="nx">onSync</span><span class="p">(</span><span class="s2">&quot;leftKeyed&quot;</span><span class="p">,</span> <span class="nx">onLeftKeyed</span><span class="p">,</span> <span class="k">this</span><span class="p">).</span><span class="nx">onSync</span><span class="p">(</span><span class="s2">&quot;rightKeyed&quot;</span><span class="p">,</span> <span class="nx">onRightKeyed</span><span class="p">,</span> <span class="k">this</span><span class="p">).</span><span class="nx">onSync</span><span class="p">(</span><span class="s2">&quot;queryChanged&quot;</span><span class="p">,</span> <span class="nx">onQueryChanged</span><span class="p">,</span> <span class="k">this</span><span class="p">).</span><span class="nx">onSync</span><span class="p">(</span><span class="s2">&quot;whitespaceChanged&quot;</span><span class="p">,</span> <span class="nx">onWhitespaceChanged</span><span class="p">,</span> <span class="k">this</span><span class="p">).</span><span class="nx">onSync</span><span class="p">(</span><span class="s2">&quot;langDirChanged&quot;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">_onLangDirChanged</span><span class="p">,</span> <span class="k">this</span><span class="p">);</span>
<a name="typeahead.bundle.js-1985"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-1986"></a>        <span class="nx">_</span><span class="p">.</span><span class="nx">mixin</span><span class="p">(</span><span class="nx">Typeahead</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1987"></a>            <span class="nx">_hacks</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">hacks</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1988"></a>                <span class="kd">var</span> <span class="nx">$input</span><span class="p">,</span> <span class="nx">$menu</span><span class="p">;</span>
<a name="typeahead.bundle.js-1989"></a>                <span class="nx">$input</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">input</span><span class="p">.</span><span class="nx">$input</span> <span class="o">||</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;&lt;div&gt;&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-1990"></a>                <span class="nx">$menu</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">menu</span><span class="p">.</span><span class="nx">$node</span> <span class="o">||</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;&lt;div&gt;&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-1991"></a>                <span class="nx">$input</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s2">&quot;blur.tt&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">$e</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1992"></a>                    <span class="kd">var</span> <span class="nx">active</span><span class="p">,</span> <span class="nx">isActive</span><span class="p">,</span> <span class="nx">hasActive</span><span class="p">;</span>
<a name="typeahead.bundle.js-1993"></a>                    <span class="nx">active</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">activeElement</span><span class="p">;</span>
<a name="typeahead.bundle.js-1994"></a>                    <span class="nx">isActive</span> <span class="o">=</span> <span class="nx">$menu</span><span class="p">.</span><span class="nx">is</span><span class="p">(</span><span class="nx">active</span><span class="p">);</span>
<a name="typeahead.bundle.js-1995"></a>                    <span class="nx">hasActive</span> <span class="o">=</span> <span class="nx">$menu</span><span class="p">.</span><span class="nx">has</span><span class="p">(</span><span class="nx">active</span><span class="p">).</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">;</span>
<a name="typeahead.bundle.js-1996"></a>                    <span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isMsie</span><span class="p">()</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">isActive</span> <span class="o">||</span> <span class="nx">hasActive</span><span class="p">))</span> <span class="p">{</span>
<a name="typeahead.bundle.js-1997"></a>                        <span class="nx">$e</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span>
<a name="typeahead.bundle.js-1998"></a>                        <span class="nx">$e</span><span class="p">.</span><span class="nx">stopImmediatePropagation</span><span class="p">();</span>
<a name="typeahead.bundle.js-1999"></a>                        <span class="nx">_</span><span class="p">.</span><span class="nx">defer</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2000"></a>                            <span class="nx">$input</span><span class="p">.</span><span class="nx">focus</span><span class="p">();</span>
<a name="typeahead.bundle.js-2001"></a>                        <span class="p">});</span>
<a name="typeahead.bundle.js-2002"></a>                    <span class="p">}</span>
<a name="typeahead.bundle.js-2003"></a>                <span class="p">});</span>
<a name="typeahead.bundle.js-2004"></a>                <span class="nx">$menu</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s2">&quot;mousedown.tt&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">$e</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2005"></a>                    <span class="nx">$e</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span>
<a name="typeahead.bundle.js-2006"></a>                <span class="p">});</span>
<a name="typeahead.bundle.js-2007"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-2008"></a>            <span class="nx">_onSelectableClicked</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">onSelectableClicked</span><span class="p">(</span><span class="nx">type</span><span class="p">,</span> <span class="nx">$el</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2009"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">select</span><span class="p">(</span><span class="nx">$el</span><span class="p">);</span>
<a name="typeahead.bundle.js-2010"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-2011"></a>            <span class="nx">_onDatasetCleared</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">onDatasetCleared</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2012"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">_updateHint</span><span class="p">();</span>
<a name="typeahead.bundle.js-2013"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-2014"></a>            <span class="nx">_onDatasetRendered</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">onDatasetRendered</span><span class="p">(</span><span class="nx">type</span><span class="p">,</span> <span class="nx">dataset</span><span class="p">,</span> <span class="nx">suggestions</span><span class="p">,</span> <span class="nx">async</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2015"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">_updateHint</span><span class="p">();</span>
<a name="typeahead.bundle.js-2016"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">eventBus</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;render&quot;</span><span class="p">,</span> <span class="nx">suggestions</span><span class="p">,</span> <span class="nx">async</span><span class="p">,</span> <span class="nx">dataset</span><span class="p">);</span>
<a name="typeahead.bundle.js-2017"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-2018"></a>            <span class="nx">_onAsyncRequested</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">onAsyncRequested</span><span class="p">(</span><span class="nx">type</span><span class="p">,</span> <span class="nx">dataset</span><span class="p">,</span> <span class="nx">query</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2019"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">eventBus</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;asyncrequest&quot;</span><span class="p">,</span> <span class="nx">query</span><span class="p">,</span> <span class="nx">dataset</span><span class="p">);</span>
<a name="typeahead.bundle.js-2020"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-2021"></a>            <span class="nx">_onAsyncCanceled</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">onAsyncCanceled</span><span class="p">(</span><span class="nx">type</span><span class="p">,</span> <span class="nx">dataset</span><span class="p">,</span> <span class="nx">query</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2022"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">eventBus</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;asynccancel&quot;</span><span class="p">,</span> <span class="nx">query</span><span class="p">,</span> <span class="nx">dataset</span><span class="p">);</span>
<a name="typeahead.bundle.js-2023"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-2024"></a>            <span class="nx">_onAsyncReceived</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">onAsyncReceived</span><span class="p">(</span><span class="nx">type</span><span class="p">,</span> <span class="nx">dataset</span><span class="p">,</span> <span class="nx">query</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2025"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">eventBus</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;asyncreceive&quot;</span><span class="p">,</span> <span class="nx">query</span><span class="p">,</span> <span class="nx">dataset</span><span class="p">);</span>
<a name="typeahead.bundle.js-2026"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-2027"></a>            <span class="nx">_onFocused</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">onFocused</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2028"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">_minLengthMet</span><span class="p">()</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">menu</span><span class="p">.</span><span class="nx">update</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">input</span><span class="p">.</span><span class="nx">getQuery</span><span class="p">());</span>
<a name="typeahead.bundle.js-2029"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-2030"></a>            <span class="nx">_onBlurred</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">onBlurred</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2031"></a>                <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">input</span><span class="p">.</span><span class="nx">hasQueryChangedSinceLastFocus</span><span class="p">())</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2032"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">eventBus</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;change&quot;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">input</span><span class="p">.</span><span class="nx">getQuery</span><span class="p">());</span>
<a name="typeahead.bundle.js-2033"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-2034"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-2035"></a>            <span class="nx">_onEnterKeyed</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">onEnterKeyed</span><span class="p">(</span><span class="nx">type</span><span class="p">,</span> <span class="nx">$e</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2036"></a>                <span class="kd">var</span> <span class="nx">$selectable</span><span class="p">;</span>
<a name="typeahead.bundle.js-2037"></a>                <span class="k">if</span> <span class="p">(</span><span class="nx">$selectable</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">menu</span><span class="p">.</span><span class="nx">getActiveSelectable</span><span class="p">())</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2038"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">select</span><span class="p">(</span><span class="nx">$selectable</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">$e</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span>
<a name="typeahead.bundle.js-2039"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-2040"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-2041"></a>            <span class="nx">_onTabKeyed</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">onTabKeyed</span><span class="p">(</span><span class="nx">type</span><span class="p">,</span> <span class="nx">$e</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2042"></a>                <span class="kd">var</span> <span class="nx">$selectable</span><span class="p">;</span>
<a name="typeahead.bundle.js-2043"></a>                <span class="k">if</span> <span class="p">(</span><span class="nx">$selectable</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">menu</span><span class="p">.</span><span class="nx">getActiveSelectable</span><span class="p">())</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2044"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">select</span><span class="p">(</span><span class="nx">$selectable</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">$e</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span>
<a name="typeahead.bundle.js-2045"></a>                <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">$selectable</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">menu</span><span class="p">.</span><span class="nx">getTopSelectable</span><span class="p">())</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2046"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">autocomplete</span><span class="p">(</span><span class="nx">$selectable</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">$e</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span>
<a name="typeahead.bundle.js-2047"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-2048"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-2049"></a>            <span class="nx">_onEscKeyed</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">onEscKeyed</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2050"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">close</span><span class="p">();</span>
<a name="typeahead.bundle.js-2051"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-2052"></a>            <span class="nx">_onUpKeyed</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">onUpKeyed</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2053"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">moveCursor</span><span class="p">(</span><span class="o">-</span><span class="mi">1</span><span class="p">);</span>
<a name="typeahead.bundle.js-2054"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-2055"></a>            <span class="nx">_onDownKeyed</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">onDownKeyed</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2056"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">moveCursor</span><span class="p">(</span><span class="o">+</span><span class="mi">1</span><span class="p">);</span>
<a name="typeahead.bundle.js-2057"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-2058"></a>            <span class="nx">_onLeftKeyed</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">onLeftKeyed</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2059"></a>                <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">dir</span> <span class="o">===</span> <span class="s2">&quot;rtl&quot;</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">input</span><span class="p">.</span><span class="nx">isCursorAtEnd</span><span class="p">())</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2060"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">autocomplete</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">menu</span><span class="p">.</span><span class="nx">getTopSelectable</span><span class="p">());</span>
<a name="typeahead.bundle.js-2061"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-2062"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-2063"></a>            <span class="nx">_onRightKeyed</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">onRightKeyed</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2064"></a>                <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">dir</span> <span class="o">===</span> <span class="s2">&quot;ltr&quot;</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">input</span><span class="p">.</span><span class="nx">isCursorAtEnd</span><span class="p">())</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2065"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">autocomplete</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">menu</span><span class="p">.</span><span class="nx">getTopSelectable</span><span class="p">());</span>
<a name="typeahead.bundle.js-2066"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-2067"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-2068"></a>            <span class="nx">_onQueryChanged</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">onQueryChanged</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">query</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2069"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">_minLengthMet</span><span class="p">(</span><span class="nx">query</span><span class="p">)</span> <span class="o">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">menu</span><span class="p">.</span><span class="nx">update</span><span class="p">(</span><span class="nx">query</span><span class="p">)</span> <span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">menu</span><span class="p">.</span><span class="nx">empty</span><span class="p">();</span>
<a name="typeahead.bundle.js-2070"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-2071"></a>            <span class="nx">_onWhitespaceChanged</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">onWhitespaceChanged</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2072"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">_updateHint</span><span class="p">();</span>
<a name="typeahead.bundle.js-2073"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-2074"></a>            <span class="nx">_onLangDirChanged</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">onLangDirChanged</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">dir</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2075"></a>                <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">dir</span> <span class="o">!==</span> <span class="nx">dir</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2076"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">dir</span> <span class="o">=</span> <span class="nx">dir</span><span class="p">;</span>
<a name="typeahead.bundle.js-2077"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">menu</span><span class="p">.</span><span class="nx">setLanguageDirection</span><span class="p">(</span><span class="nx">dir</span><span class="p">);</span>
<a name="typeahead.bundle.js-2078"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-2079"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-2080"></a>            <span class="nx">_openIfActive</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">openIfActive</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2081"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">isActive</span><span class="p">()</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">open</span><span class="p">();</span>
<a name="typeahead.bundle.js-2082"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-2083"></a>            <span class="nx">_minLengthMet</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">minLengthMet</span><span class="p">(</span><span class="nx">query</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2084"></a>                <span class="nx">query</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isString</span><span class="p">(</span><span class="nx">query</span><span class="p">)</span> <span class="o">?</span> <span class="nx">query</span> <span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">input</span><span class="p">.</span><span class="nx">getQuery</span><span class="p">()</span> <span class="o">||</span> <span class="s2">&quot;&quot;</span><span class="p">;</span>
<a name="typeahead.bundle.js-2085"></a>                <span class="k">return</span> <span class="nx">query</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;=</span> <span class="k">this</span><span class="p">.</span><span class="nx">minLength</span><span class="p">;</span>
<a name="typeahead.bundle.js-2086"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-2087"></a>            <span class="nx">_updateHint</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">updateHint</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2088"></a>                <span class="kd">var</span> <span class="nx">$selectable</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">val</span><span class="p">,</span> <span class="nx">query</span><span class="p">,</span> <span class="nx">escapedQuery</span><span class="p">,</span> <span class="nx">frontMatchRegEx</span><span class="p">,</span> <span class="nx">match</span><span class="p">;</span>
<a name="typeahead.bundle.js-2089"></a>                <span class="nx">$selectable</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">menu</span><span class="p">.</span><span class="nx">getTopSelectable</span><span class="p">();</span>
<a name="typeahead.bundle.js-2090"></a>                <span class="nx">data</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">menu</span><span class="p">.</span><span class="nx">getSelectableData</span><span class="p">(</span><span class="nx">$selectable</span><span class="p">);</span>
<a name="typeahead.bundle.js-2091"></a>                <span class="nx">val</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">input</span><span class="p">.</span><span class="nx">getInputValue</span><span class="p">();</span>
<a name="typeahead.bundle.js-2092"></a>                <span class="k">if</span> <span class="p">(</span><span class="nx">data</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">_</span><span class="p">.</span><span class="nx">isBlankString</span><span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">input</span><span class="p">.</span><span class="nx">hasOverflow</span><span class="p">())</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2093"></a>                    <span class="nx">query</span> <span class="o">=</span> <span class="nx">Input</span><span class="p">.</span><span class="nx">normalizeQuery</span><span class="p">(</span><span class="nx">val</span><span class="p">);</span>
<a name="typeahead.bundle.js-2094"></a>                    <span class="nx">escapedQuery</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">escapeRegExChars</span><span class="p">(</span><span class="nx">query</span><span class="p">);</span>
<a name="typeahead.bundle.js-2095"></a>                    <span class="nx">frontMatchRegEx</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="s2">&quot;^(?:&quot;</span> <span class="o">+</span> <span class="nx">escapedQuery</span> <span class="o">+</span> <span class="s2">&quot;)(.+$)&quot;</span><span class="p">,</span> <span class="s2">&quot;i&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-2096"></a>                    <span class="nx">match</span> <span class="o">=</span> <span class="nx">frontMatchRegEx</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">val</span><span class="p">);</span>
<a name="typeahead.bundle.js-2097"></a>                    <span class="nx">match</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">input</span><span class="p">.</span><span class="nx">setHint</span><span class="p">(</span><span class="nx">val</span> <span class="o">+</span> <span class="nx">match</span><span class="p">[</span><span class="mi">1</span><span class="p">]);</span>
<a name="typeahead.bundle.js-2098"></a>                <span class="p">}</span> <span class="k">else</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2099"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">input</span><span class="p">.</span><span class="nx">clearHint</span><span class="p">();</span>
<a name="typeahead.bundle.js-2100"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-2101"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-2102"></a>            <span class="nx">isEnabled</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">isEnabled</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2103"></a>                <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">enabled</span><span class="p">;</span>
<a name="typeahead.bundle.js-2104"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-2105"></a>            <span class="nx">enable</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">enable</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2106"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">enabled</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>
<a name="typeahead.bundle.js-2107"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-2108"></a>            <span class="nx">disable</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">disable</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2109"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">enabled</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span>
<a name="typeahead.bundle.js-2110"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-2111"></a>            <span class="nx">isActive</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">isActive</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2112"></a>                <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">active</span><span class="p">;</span>
<a name="typeahead.bundle.js-2113"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-2114"></a>            <span class="nx">activate</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">activate</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2115"></a>                <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">isActive</span><span class="p">())</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2116"></a>                    <span class="k">return</span> <span class="kc">true</span><span class="p">;</span>
<a name="typeahead.bundle.js-2117"></a>                <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">isEnabled</span><span class="p">()</span> <span class="o">||</span> <span class="k">this</span><span class="p">.</span><span class="nx">eventBus</span><span class="p">.</span><span class="nx">before</span><span class="p">(</span><span class="s2">&quot;active&quot;</span><span class="p">))</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2118"></a>                    <span class="k">return</span> <span class="kc">false</span><span class="p">;</span>
<a name="typeahead.bundle.js-2119"></a>                <span class="p">}</span> <span class="k">else</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2120"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">active</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>
<a name="typeahead.bundle.js-2121"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">eventBus</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;active&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-2122"></a>                    <span class="k">return</span> <span class="kc">true</span><span class="p">;</span>
<a name="typeahead.bundle.js-2123"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-2124"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-2125"></a>            <span class="nx">deactivate</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">deactivate</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2126"></a>                <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">isActive</span><span class="p">())</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2127"></a>                    <span class="k">return</span> <span class="kc">true</span><span class="p">;</span>
<a name="typeahead.bundle.js-2128"></a>                <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">eventBus</span><span class="p">.</span><span class="nx">before</span><span class="p">(</span><span class="s2">&quot;idle&quot;</span><span class="p">))</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2129"></a>                    <span class="k">return</span> <span class="kc">false</span><span class="p">;</span>
<a name="typeahead.bundle.js-2130"></a>                <span class="p">}</span> <span class="k">else</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2131"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">active</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span>
<a name="typeahead.bundle.js-2132"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">close</span><span class="p">();</span>
<a name="typeahead.bundle.js-2133"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">eventBus</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;idle&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-2134"></a>                    <span class="k">return</span> <span class="kc">true</span><span class="p">;</span>
<a name="typeahead.bundle.js-2135"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-2136"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-2137"></a>            <span class="nx">isOpen</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">isOpen</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2138"></a>                <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">menu</span><span class="p">.</span><span class="nx">isOpen</span><span class="p">();</span>
<a name="typeahead.bundle.js-2139"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-2140"></a>            <span class="nx">open</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">open</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2141"></a>                <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">isOpen</span><span class="p">()</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">eventBus</span><span class="p">.</span><span class="nx">before</span><span class="p">(</span><span class="s2">&quot;open&quot;</span><span class="p">))</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2142"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">menu</span><span class="p">.</span><span class="nx">open</span><span class="p">();</span>
<a name="typeahead.bundle.js-2143"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">_updateHint</span><span class="p">();</span>
<a name="typeahead.bundle.js-2144"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">eventBus</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;open&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-2145"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-2146"></a>                <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">isOpen</span><span class="p">();</span>
<a name="typeahead.bundle.js-2147"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-2148"></a>            <span class="nx">close</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">close</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2149"></a>                <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">isOpen</span><span class="p">()</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">eventBus</span><span class="p">.</span><span class="nx">before</span><span class="p">(</span><span class="s2">&quot;close&quot;</span><span class="p">))</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2150"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">menu</span><span class="p">.</span><span class="nx">close</span><span class="p">();</span>
<a name="typeahead.bundle.js-2151"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">input</span><span class="p">.</span><span class="nx">clearHint</span><span class="p">();</span>
<a name="typeahead.bundle.js-2152"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">input</span><span class="p">.</span><span class="nx">resetInputValue</span><span class="p">();</span>
<a name="typeahead.bundle.js-2153"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">eventBus</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;close&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-2154"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-2155"></a>                <span class="k">return</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">isOpen</span><span class="p">();</span>
<a name="typeahead.bundle.js-2156"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-2157"></a>            <span class="nx">setVal</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">setVal</span><span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2158"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">input</span><span class="p">.</span><span class="nx">setQuery</span><span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">toStr</span><span class="p">(</span><span class="nx">val</span><span class="p">));</span>
<a name="typeahead.bundle.js-2159"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-2160"></a>            <span class="nx">getVal</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">getVal</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2161"></a>                <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">input</span><span class="p">.</span><span class="nx">getQuery</span><span class="p">();</span>
<a name="typeahead.bundle.js-2162"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-2163"></a>            <span class="nx">select</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">select</span><span class="p">(</span><span class="nx">$selectable</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2164"></a>                <span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">menu</span><span class="p">.</span><span class="nx">getSelectableData</span><span class="p">(</span><span class="nx">$selectable</span><span class="p">);</span>
<a name="typeahead.bundle.js-2165"></a>                <span class="k">if</span> <span class="p">(</span><span class="nx">data</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">eventBus</span><span class="p">.</span><span class="nx">before</span><span class="p">(</span><span class="s2">&quot;select&quot;</span><span class="p">,</span> <span class="nx">data</span><span class="p">.</span><span class="nx">obj</span><span class="p">))</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2166"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">input</span><span class="p">.</span><span class="nx">setQuery</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">val</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span>
<a name="typeahead.bundle.js-2167"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">eventBus</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;select&quot;</span><span class="p">,</span> <span class="nx">data</span><span class="p">.</span><span class="nx">obj</span><span class="p">);</span>
<a name="typeahead.bundle.js-2168"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">close</span><span class="p">();</span>
<a name="typeahead.bundle.js-2169"></a>                    <span class="k">return</span> <span class="kc">true</span><span class="p">;</span>
<a name="typeahead.bundle.js-2170"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-2171"></a>                <span class="k">return</span> <span class="kc">false</span><span class="p">;</span>
<a name="typeahead.bundle.js-2172"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-2173"></a>            <span class="nx">autocomplete</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">autocomplete</span><span class="p">(</span><span class="nx">$selectable</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2174"></a>                <span class="kd">var</span> <span class="nx">query</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">isValid</span><span class="p">;</span>
<a name="typeahead.bundle.js-2175"></a>                <span class="nx">query</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">input</span><span class="p">.</span><span class="nx">getQuery</span><span class="p">();</span>
<a name="typeahead.bundle.js-2176"></a>                <span class="nx">data</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">menu</span><span class="p">.</span><span class="nx">getSelectableData</span><span class="p">(</span><span class="nx">$selectable</span><span class="p">);</span>
<a name="typeahead.bundle.js-2177"></a>                <span class="nx">isValid</span> <span class="o">=</span> <span class="nx">data</span> <span class="o">&amp;&amp;</span> <span class="nx">query</span> <span class="o">!==</span> <span class="nx">data</span><span class="p">.</span><span class="nx">val</span><span class="p">;</span>
<a name="typeahead.bundle.js-2178"></a>                <span class="k">if</span> <span class="p">(</span><span class="nx">isValid</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">eventBus</span><span class="p">.</span><span class="nx">before</span><span class="p">(</span><span class="s2">&quot;autocomplete&quot;</span><span class="p">,</span> <span class="nx">data</span><span class="p">.</span><span class="nx">obj</span><span class="p">))</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2179"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">input</span><span class="p">.</span><span class="nx">setQuery</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">val</span><span class="p">);</span>
<a name="typeahead.bundle.js-2180"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">eventBus</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;autocomplete&quot;</span><span class="p">,</span> <span class="nx">data</span><span class="p">.</span><span class="nx">obj</span><span class="p">);</span>
<a name="typeahead.bundle.js-2181"></a>                    <span class="k">return</span> <span class="kc">true</span><span class="p">;</span>
<a name="typeahead.bundle.js-2182"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-2183"></a>                <span class="k">return</span> <span class="kc">false</span><span class="p">;</span>
<a name="typeahead.bundle.js-2184"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-2185"></a>            <span class="nx">moveCursor</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">moveCursor</span><span class="p">(</span><span class="nx">delta</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2186"></a>                <span class="kd">var</span> <span class="nx">query</span><span class="p">,</span> <span class="nx">$candidate</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">payload</span><span class="p">,</span> <span class="nx">cancelMove</span><span class="p">;</span>
<a name="typeahead.bundle.js-2187"></a>                <span class="nx">query</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">input</span><span class="p">.</span><span class="nx">getQuery</span><span class="p">();</span>
<a name="typeahead.bundle.js-2188"></a>                <span class="nx">$candidate</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">menu</span><span class="p">.</span><span class="nx">selectableRelativeToCursor</span><span class="p">(</span><span class="nx">delta</span><span class="p">);</span>
<a name="typeahead.bundle.js-2189"></a>                <span class="nx">data</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">menu</span><span class="p">.</span><span class="nx">getSelectableData</span><span class="p">(</span><span class="nx">$candidate</span><span class="p">);</span>
<a name="typeahead.bundle.js-2190"></a>                <span class="nx">payload</span> <span class="o">=</span> <span class="nx">data</span> <span class="o">?</span> <span class="nx">data</span><span class="p">.</span><span class="nx">obj</span> <span class="o">:</span> <span class="kc">null</span><span class="p">;</span>
<a name="typeahead.bundle.js-2191"></a>                <span class="nx">cancelMove</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_minLengthMet</span><span class="p">()</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">menu</span><span class="p">.</span><span class="nx">update</span><span class="p">(</span><span class="nx">query</span><span class="p">);</span>
<a name="typeahead.bundle.js-2192"></a>                <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">cancelMove</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">eventBus</span><span class="p">.</span><span class="nx">before</span><span class="p">(</span><span class="s2">&quot;cursorchange&quot;</span><span class="p">,</span> <span class="nx">payload</span><span class="p">))</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2193"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">menu</span><span class="p">.</span><span class="nx">setCursor</span><span class="p">(</span><span class="nx">$candidate</span><span class="p">);</span>
<a name="typeahead.bundle.js-2194"></a>                    <span class="k">if</span> <span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2195"></a>                        <span class="k">this</span><span class="p">.</span><span class="nx">input</span><span class="p">.</span><span class="nx">setInputValue</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">val</span><span class="p">);</span>
<a name="typeahead.bundle.js-2196"></a>                    <span class="p">}</span> <span class="k">else</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2197"></a>                        <span class="k">this</span><span class="p">.</span><span class="nx">input</span><span class="p">.</span><span class="nx">resetInputValue</span><span class="p">();</span>
<a name="typeahead.bundle.js-2198"></a>                        <span class="k">this</span><span class="p">.</span><span class="nx">_updateHint</span><span class="p">();</span>
<a name="typeahead.bundle.js-2199"></a>                    <span class="p">}</span>
<a name="typeahead.bundle.js-2200"></a>                    <span class="k">this</span><span class="p">.</span><span class="nx">eventBus</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;cursorchange&quot;</span><span class="p">,</span> <span class="nx">payload</span><span class="p">);</span>
<a name="typeahead.bundle.js-2201"></a>                    <span class="k">return</span> <span class="kc">true</span><span class="p">;</span>
<a name="typeahead.bundle.js-2202"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-2203"></a>                <span class="k">return</span> <span class="kc">false</span><span class="p">;</span>
<a name="typeahead.bundle.js-2204"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-2205"></a>            <span class="nx">destroy</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">destroy</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2206"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">input</span><span class="p">.</span><span class="nx">destroy</span><span class="p">();</span>
<a name="typeahead.bundle.js-2207"></a>                <span class="k">this</span><span class="p">.</span><span class="nx">menu</span><span class="p">.</span><span class="nx">destroy</span><span class="p">();</span>
<a name="typeahead.bundle.js-2208"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-2209"></a>        <span class="p">});</span>
<a name="typeahead.bundle.js-2210"></a>        <span class="k">return</span> <span class="nx">Typeahead</span><span class="p">;</span>
<a name="typeahead.bundle.js-2211"></a>        <span class="kd">function</span> <span class="nx">c</span><span class="p">(</span><span class="nx">ctx</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2212"></a>            <span class="kd">var</span> <span class="nx">methods</span> <span class="o">=</span> <span class="p">[].</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span>
<a name="typeahead.bundle.js-2213"></a>            <span class="k">return</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2214"></a>                <span class="kd">var</span> <span class="nx">args</span> <span class="o">=</span> <span class="p">[].</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">);</span>
<a name="typeahead.bundle.js-2215"></a>                <span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">methods</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">method</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2216"></a>                    <span class="k">return</span> <span class="nx">ctx</span><span class="p">[</span><span class="nx">method</span><span class="p">].</span><span class="nx">apply</span><span class="p">(</span><span class="nx">ctx</span><span class="p">,</span> <span class="nx">args</span><span class="p">);</span>
<a name="typeahead.bundle.js-2217"></a>                <span class="p">});</span>
<a name="typeahead.bundle.js-2218"></a>            <span class="p">};</span>
<a name="typeahead.bundle.js-2219"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-2220"></a>    <span class="p">}();</span>
<a name="typeahead.bundle.js-2221"></a>    <span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2222"></a>        <span class="s2">&quot;use strict&quot;</span><span class="p">;</span>
<a name="typeahead.bundle.js-2223"></a>        <span class="kd">var</span> <span class="nx">old</span><span class="p">,</span> <span class="nx">keys</span><span class="p">,</span> <span class="nx">methods</span><span class="p">;</span>
<a name="typeahead.bundle.js-2224"></a>        <span class="nx">old</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">typeahead</span><span class="p">;</span>
<a name="typeahead.bundle.js-2225"></a>        <span class="nx">keys</span> <span class="o">=</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2226"></a>            <span class="nx">www</span><span class="o">:</span> <span class="s2">&quot;tt-www&quot;</span><span class="p">,</span>
<a name="typeahead.bundle.js-2227"></a>            <span class="nx">attrs</span><span class="o">:</span> <span class="s2">&quot;tt-attrs&quot;</span><span class="p">,</span>
<a name="typeahead.bundle.js-2228"></a>            <span class="nx">typeahead</span><span class="o">:</span> <span class="s2">&quot;tt-typeahead&quot;</span>
<a name="typeahead.bundle.js-2229"></a>        <span class="p">};</span>
<a name="typeahead.bundle.js-2230"></a>        <span class="nx">methods</span> <span class="o">=</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2231"></a>            <span class="nx">initialize</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">initialize</span><span class="p">(</span><span class="nx">o</span><span class="p">,</span> <span class="nx">datasets</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2232"></a>                <span class="kd">var</span> <span class="nx">www</span><span class="p">;</span>
<a name="typeahead.bundle.js-2233"></a>                <span class="nx">datasets</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">datasets</span><span class="p">)</span> <span class="o">?</span> <span class="nx">datasets</span> <span class="o">:</span> <span class="p">[].</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span>
<a name="typeahead.bundle.js-2234"></a>                <span class="nx">o</span> <span class="o">=</span> <span class="nx">o</span> <span class="o">||</span> <span class="p">{};</span>
<a name="typeahead.bundle.js-2235"></a>                <span class="nx">www</span> <span class="o">=</span> <span class="nx">WWW</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">classNames</span><span class="p">);</span>
<a name="typeahead.bundle.js-2236"></a>                <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">attach</span><span class="p">);</span>
<a name="typeahead.bundle.js-2237"></a>                <span class="kd">function</span> <span class="nx">attach</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2238"></a>                    <span class="kd">var</span> <span class="nx">$input</span><span class="p">,</span> <span class="nx">$wrapper</span><span class="p">,</span> <span class="nx">$hint</span><span class="p">,</span> <span class="nx">$menu</span><span class="p">,</span> <span class="nx">defaultHint</span><span class="p">,</span> <span class="nx">defaultMenu</span><span class="p">,</span> <span class="nx">eventBus</span><span class="p">,</span> <span class="nx">input</span><span class="p">,</span> <span class="nx">menu</span><span class="p">,</span> <span class="nx">typeahead</span><span class="p">,</span> <span class="nx">MenuConstructor</span><span class="p">;</span>
<a name="typeahead.bundle.js-2239"></a>                    <span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">datasets</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2240"></a>                        <span class="nx">d</span><span class="p">.</span><span class="nx">highlight</span> <span class="o">=</span> <span class="o">!!</span><span class="nx">o</span><span class="p">.</span><span class="nx">highlight</span><span class="p">;</span>
<a name="typeahead.bundle.js-2241"></a>                    <span class="p">});</span>
<a name="typeahead.bundle.js-2242"></a>                    <span class="nx">$input</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">);</span>
<a name="typeahead.bundle.js-2243"></a>                    <span class="nx">$wrapper</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">www</span><span class="p">.</span><span class="nx">html</span><span class="p">.</span><span class="nx">wrapper</span><span class="p">);</span>
<a name="typeahead.bundle.js-2244"></a>                    <span class="nx">$hint</span> <span class="o">=</span> <span class="nx">$elOrNull</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">hint</span><span class="p">);</span>
<a name="typeahead.bundle.js-2245"></a>                    <span class="nx">$menu</span> <span class="o">=</span> <span class="nx">$elOrNull</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">menu</span><span class="p">);</span>
<a name="typeahead.bundle.js-2246"></a>                    <span class="nx">defaultHint</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">hint</span> <span class="o">!==</span> <span class="kc">false</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">$hint</span><span class="p">;</span>
<a name="typeahead.bundle.js-2247"></a>                    <span class="nx">defaultMenu</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">menu</span> <span class="o">!==</span> <span class="kc">false</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">$menu</span><span class="p">;</span>
<a name="typeahead.bundle.js-2248"></a>                    <span class="nx">defaultHint</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">$hint</span> <span class="o">=</span> <span class="nx">buildHintFromInput</span><span class="p">(</span><span class="nx">$input</span><span class="p">,</span> <span class="nx">www</span><span class="p">));</span>
<a name="typeahead.bundle.js-2249"></a>                    <span class="nx">defaultMenu</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">$menu</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">www</span><span class="p">.</span><span class="nx">html</span><span class="p">.</span><span class="nx">menu</span><span class="p">).</span><span class="nx">css</span><span class="p">(</span><span class="nx">www</span><span class="p">.</span><span class="nx">css</span><span class="p">.</span><span class="nx">menu</span><span class="p">));</span>
<a name="typeahead.bundle.js-2250"></a>                    <span class="nx">$hint</span> <span class="o">&amp;&amp;</span> <span class="nx">$hint</span><span class="p">.</span><span class="nx">val</span><span class="p">(</span><span class="s2">&quot;&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-2251"></a>                    <span class="nx">$input</span> <span class="o">=</span> <span class="nx">prepInput</span><span class="p">(</span><span class="nx">$input</span><span class="p">,</span> <span class="nx">www</span><span class="p">);</span>
<a name="typeahead.bundle.js-2252"></a>                    <span class="k">if</span> <span class="p">(</span><span class="nx">defaultHint</span> <span class="o">||</span> <span class="nx">defaultMenu</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2253"></a>                        <span class="nx">$wrapper</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="nx">www</span><span class="p">.</span><span class="nx">css</span><span class="p">.</span><span class="nx">wrapper</span><span class="p">);</span>
<a name="typeahead.bundle.js-2254"></a>                        <span class="nx">$input</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="nx">defaultHint</span> <span class="o">?</span> <span class="nx">www</span><span class="p">.</span><span class="nx">css</span><span class="p">.</span><span class="nx">input</span> <span class="o">:</span> <span class="nx">www</span><span class="p">.</span><span class="nx">css</span><span class="p">.</span><span class="nx">inputWithNoHint</span><span class="p">);</span>
<a name="typeahead.bundle.js-2255"></a>                        <span class="nx">$input</span><span class="p">.</span><span class="nx">wrap</span><span class="p">(</span><span class="nx">$wrapper</span><span class="p">).</span><span class="nx">parent</span><span class="p">().</span><span class="nx">prepend</span><span class="p">(</span><span class="nx">defaultHint</span> <span class="o">?</span> <span class="nx">$hint</span> <span class="o">:</span> <span class="kc">null</span><span class="p">).</span><span class="nx">append</span><span class="p">(</span><span class="nx">defaultMenu</span> <span class="o">?</span> <span class="nx">$menu</span> <span class="o">:</span> <span class="kc">null</span><span class="p">);</span>
<a name="typeahead.bundle.js-2256"></a>                    <span class="p">}</span>
<a name="typeahead.bundle.js-2257"></a>                    <span class="nx">MenuConstructor</span> <span class="o">=</span> <span class="nx">defaultMenu</span> <span class="o">?</span> <span class="nx">DefaultMenu</span> <span class="o">:</span> <span class="nx">Menu</span><span class="p">;</span>
<a name="typeahead.bundle.js-2258"></a>                    <span class="nx">eventBus</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">EventBus</span><span class="p">({</span>
<a name="typeahead.bundle.js-2259"></a>                        <span class="nx">el</span><span class="o">:</span> <span class="nx">$input</span>
<a name="typeahead.bundle.js-2260"></a>                    <span class="p">});</span>
<a name="typeahead.bundle.js-2261"></a>                    <span class="nx">input</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Input</span><span class="p">({</span>
<a name="typeahead.bundle.js-2262"></a>                        <span class="nx">hint</span><span class="o">:</span> <span class="nx">$hint</span><span class="p">,</span>
<a name="typeahead.bundle.js-2263"></a>                        <span class="nx">input</span><span class="o">:</span> <span class="nx">$input</span>
<a name="typeahead.bundle.js-2264"></a>                    <span class="p">},</span> <span class="nx">www</span><span class="p">);</span>
<a name="typeahead.bundle.js-2265"></a>                    <span class="nx">menu</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">MenuConstructor</span><span class="p">({</span>
<a name="typeahead.bundle.js-2266"></a>                        <span class="nx">node</span><span class="o">:</span> <span class="nx">$menu</span><span class="p">,</span>
<a name="typeahead.bundle.js-2267"></a>                        <span class="nx">datasets</span><span class="o">:</span> <span class="nx">datasets</span>
<a name="typeahead.bundle.js-2268"></a>                    <span class="p">},</span> <span class="nx">www</span><span class="p">);</span>
<a name="typeahead.bundle.js-2269"></a>                    <span class="nx">typeahead</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Typeahead</span><span class="p">({</span>
<a name="typeahead.bundle.js-2270"></a>                        <span class="nx">input</span><span class="o">:</span> <span class="nx">input</span><span class="p">,</span>
<a name="typeahead.bundle.js-2271"></a>                        <span class="nx">menu</span><span class="o">:</span> <span class="nx">menu</span><span class="p">,</span>
<a name="typeahead.bundle.js-2272"></a>                        <span class="nx">eventBus</span><span class="o">:</span> <span class="nx">eventBus</span><span class="p">,</span>
<a name="typeahead.bundle.js-2273"></a>                        <span class="nx">minLength</span><span class="o">:</span> <span class="nx">o</span><span class="p">.</span><span class="nx">minLength</span>
<a name="typeahead.bundle.js-2274"></a>                    <span class="p">},</span> <span class="nx">www</span><span class="p">);</span>
<a name="typeahead.bundle.js-2275"></a>                    <span class="nx">$input</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="nx">keys</span><span class="p">.</span><span class="nx">www</span><span class="p">,</span> <span class="nx">www</span><span class="p">);</span>
<a name="typeahead.bundle.js-2276"></a>                    <span class="nx">$input</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="nx">keys</span><span class="p">.</span><span class="nx">typeahead</span><span class="p">,</span> <span class="nx">typeahead</span><span class="p">);</span>
<a name="typeahead.bundle.js-2277"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-2278"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-2279"></a>            <span class="nx">isEnabled</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">isEnabled</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2280"></a>                <span class="kd">var</span> <span class="nx">enabled</span><span class="p">;</span>
<a name="typeahead.bundle.js-2281"></a>                <span class="nx">ttEach</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">first</span><span class="p">(),</span> <span class="kd">function</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2282"></a>                    <span class="nx">enabled</span> <span class="o">=</span> <span class="nx">t</span><span class="p">.</span><span class="nx">isEnabled</span><span class="p">();</span>
<a name="typeahead.bundle.js-2283"></a>                <span class="p">});</span>
<a name="typeahead.bundle.js-2284"></a>                <span class="k">return</span> <span class="nx">enabled</span><span class="p">;</span>
<a name="typeahead.bundle.js-2285"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-2286"></a>            <span class="nx">enable</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">enable</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2287"></a>                <span class="nx">ttEach</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2288"></a>                    <span class="nx">t</span><span class="p">.</span><span class="nx">enable</span><span class="p">();</span>
<a name="typeahead.bundle.js-2289"></a>                <span class="p">});</span>
<a name="typeahead.bundle.js-2290"></a>                <span class="k">return</span> <span class="k">this</span><span class="p">;</span>
<a name="typeahead.bundle.js-2291"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-2292"></a>            <span class="nx">disable</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">disable</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2293"></a>                <span class="nx">ttEach</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2294"></a>                    <span class="nx">t</span><span class="p">.</span><span class="nx">disable</span><span class="p">();</span>
<a name="typeahead.bundle.js-2295"></a>                <span class="p">});</span>
<a name="typeahead.bundle.js-2296"></a>                <span class="k">return</span> <span class="k">this</span><span class="p">;</span>
<a name="typeahead.bundle.js-2297"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-2298"></a>            <span class="nx">isActive</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">isActive</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2299"></a>                <span class="kd">var</span> <span class="nx">active</span><span class="p">;</span>
<a name="typeahead.bundle.js-2300"></a>                <span class="nx">ttEach</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">first</span><span class="p">(),</span> <span class="kd">function</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2301"></a>                    <span class="nx">active</span> <span class="o">=</span> <span class="nx">t</span><span class="p">.</span><span class="nx">isActive</span><span class="p">();</span>
<a name="typeahead.bundle.js-2302"></a>                <span class="p">});</span>
<a name="typeahead.bundle.js-2303"></a>                <span class="k">return</span> <span class="nx">active</span><span class="p">;</span>
<a name="typeahead.bundle.js-2304"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-2305"></a>            <span class="nx">activate</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">activate</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2306"></a>                <span class="nx">ttEach</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2307"></a>                    <span class="nx">t</span><span class="p">.</span><span class="nx">activate</span><span class="p">();</span>
<a name="typeahead.bundle.js-2308"></a>                <span class="p">});</span>
<a name="typeahead.bundle.js-2309"></a>                <span class="k">return</span> <span class="k">this</span><span class="p">;</span>
<a name="typeahead.bundle.js-2310"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-2311"></a>            <span class="nx">deactivate</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">deactivate</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2312"></a>                <span class="nx">ttEach</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2313"></a>                    <span class="nx">t</span><span class="p">.</span><span class="nx">deactivate</span><span class="p">();</span>
<a name="typeahead.bundle.js-2314"></a>                <span class="p">});</span>
<a name="typeahead.bundle.js-2315"></a>                <span class="k">return</span> <span class="k">this</span><span class="p">;</span>
<a name="typeahead.bundle.js-2316"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-2317"></a>            <span class="nx">isOpen</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">isOpen</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2318"></a>                <span class="kd">var</span> <span class="nx">open</span><span class="p">;</span>
<a name="typeahead.bundle.js-2319"></a>                <span class="nx">ttEach</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">first</span><span class="p">(),</span> <span class="kd">function</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2320"></a>                    <span class="nx">open</span> <span class="o">=</span> <span class="nx">t</span><span class="p">.</span><span class="nx">isOpen</span><span class="p">();</span>
<a name="typeahead.bundle.js-2321"></a>                <span class="p">});</span>
<a name="typeahead.bundle.js-2322"></a>                <span class="k">return</span> <span class="nx">open</span><span class="p">;</span>
<a name="typeahead.bundle.js-2323"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-2324"></a>            <span class="nx">open</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">open</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2325"></a>                <span class="nx">ttEach</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2326"></a>                    <span class="nx">t</span><span class="p">.</span><span class="nx">open</span><span class="p">();</span>
<a name="typeahead.bundle.js-2327"></a>                <span class="p">});</span>
<a name="typeahead.bundle.js-2328"></a>                <span class="k">return</span> <span class="k">this</span><span class="p">;</span>
<a name="typeahead.bundle.js-2329"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-2330"></a>            <span class="nx">close</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">close</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2331"></a>                <span class="nx">ttEach</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2332"></a>                    <span class="nx">t</span><span class="p">.</span><span class="nx">close</span><span class="p">();</span>
<a name="typeahead.bundle.js-2333"></a>                <span class="p">});</span>
<a name="typeahead.bundle.js-2334"></a>                <span class="k">return</span> <span class="k">this</span><span class="p">;</span>
<a name="typeahead.bundle.js-2335"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-2336"></a>            <span class="nx">select</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">select</span><span class="p">(</span><span class="nx">el</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2337"></a>                <span class="kd">var</span> <span class="nx">success</span> <span class="o">=</span> <span class="kc">false</span><span class="p">,</span> <span class="nx">$el</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">el</span><span class="p">);</span>
<a name="typeahead.bundle.js-2338"></a>                <span class="nx">ttEach</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">first</span><span class="p">(),</span> <span class="kd">function</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2339"></a>                    <span class="nx">success</span> <span class="o">=</span> <span class="nx">t</span><span class="p">.</span><span class="nx">select</span><span class="p">(</span><span class="nx">$el</span><span class="p">);</span>
<a name="typeahead.bundle.js-2340"></a>                <span class="p">});</span>
<a name="typeahead.bundle.js-2341"></a>                <span class="k">return</span> <span class="nx">success</span><span class="p">;</span>
<a name="typeahead.bundle.js-2342"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-2343"></a>            <span class="nx">autocomplete</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">autocomplete</span><span class="p">(</span><span class="nx">el</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2344"></a>                <span class="kd">var</span> <span class="nx">success</span> <span class="o">=</span> <span class="kc">false</span><span class="p">,</span> <span class="nx">$el</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">el</span><span class="p">);</span>
<a name="typeahead.bundle.js-2345"></a>                <span class="nx">ttEach</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">first</span><span class="p">(),</span> <span class="kd">function</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2346"></a>                    <span class="nx">success</span> <span class="o">=</span> <span class="nx">t</span><span class="p">.</span><span class="nx">autocomplete</span><span class="p">(</span><span class="nx">$el</span><span class="p">);</span>
<a name="typeahead.bundle.js-2347"></a>                <span class="p">});</span>
<a name="typeahead.bundle.js-2348"></a>                <span class="k">return</span> <span class="nx">success</span><span class="p">;</span>
<a name="typeahead.bundle.js-2349"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-2350"></a>            <span class="nx">moveCursor</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">moveCursoe</span><span class="p">(</span><span class="nx">delta</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2351"></a>                <span class="kd">var</span> <span class="nx">success</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span>
<a name="typeahead.bundle.js-2352"></a>                <span class="nx">ttEach</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">first</span><span class="p">(),</span> <span class="kd">function</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2353"></a>                    <span class="nx">success</span> <span class="o">=</span> <span class="nx">t</span><span class="p">.</span><span class="nx">moveCursor</span><span class="p">(</span><span class="nx">delta</span><span class="p">);</span>
<a name="typeahead.bundle.js-2354"></a>                <span class="p">});</span>
<a name="typeahead.bundle.js-2355"></a>                <span class="k">return</span> <span class="nx">success</span><span class="p">;</span>
<a name="typeahead.bundle.js-2356"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-2357"></a>            <span class="nx">val</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">val</span><span class="p">(</span><span class="nx">newVal</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2358"></a>                <span class="kd">var</span> <span class="nx">query</span><span class="p">;</span>
<a name="typeahead.bundle.js-2359"></a>                <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2360"></a>                    <span class="nx">ttEach</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">first</span><span class="p">(),</span> <span class="kd">function</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2361"></a>                        <span class="nx">query</span> <span class="o">=</span> <span class="nx">t</span><span class="p">.</span><span class="nx">getVal</span><span class="p">();</span>
<a name="typeahead.bundle.js-2362"></a>                    <span class="p">});</span>
<a name="typeahead.bundle.js-2363"></a>                    <span class="k">return</span> <span class="nx">query</span><span class="p">;</span>
<a name="typeahead.bundle.js-2364"></a>                <span class="p">}</span> <span class="k">else</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2365"></a>                    <span class="nx">ttEach</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2366"></a>                        <span class="nx">t</span><span class="p">.</span><span class="nx">setVal</span><span class="p">(</span><span class="nx">newVal</span><span class="p">);</span>
<a name="typeahead.bundle.js-2367"></a>                    <span class="p">});</span>
<a name="typeahead.bundle.js-2368"></a>                    <span class="k">return</span> <span class="k">this</span><span class="p">;</span>
<a name="typeahead.bundle.js-2369"></a>                <span class="p">}</span>
<a name="typeahead.bundle.js-2370"></a>            <span class="p">},</span>
<a name="typeahead.bundle.js-2371"></a>            <span class="nx">destroy</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">destroy</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2372"></a>                <span class="nx">ttEach</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">typeahead</span><span class="p">,</span> <span class="nx">$input</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2373"></a>                    <span class="nx">revert</span><span class="p">(</span><span class="nx">$input</span><span class="p">);</span>
<a name="typeahead.bundle.js-2374"></a>                    <span class="nx">typeahead</span><span class="p">.</span><span class="nx">destroy</span><span class="p">();</span>
<a name="typeahead.bundle.js-2375"></a>                <span class="p">});</span>
<a name="typeahead.bundle.js-2376"></a>                <span class="k">return</span> <span class="k">this</span><span class="p">;</span>
<a name="typeahead.bundle.js-2377"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-2378"></a>        <span class="p">};</span>
<a name="typeahead.bundle.js-2379"></a>        <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">typeahead</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">method</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2380"></a>            <span class="k">if</span> <span class="p">(</span><span class="nx">methods</span><span class="p">[</span><span class="nx">method</span><span class="p">])</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2381"></a>                <span class="k">return</span> <span class="nx">methods</span><span class="p">[</span><span class="nx">method</span><span class="p">].</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="p">[].</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">1</span><span class="p">));</span>
<a name="typeahead.bundle.js-2382"></a>            <span class="p">}</span> <span class="k">else</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2383"></a>                <span class="k">return</span> <span class="nx">methods</span><span class="p">.</span><span class="nx">initialize</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span>
<a name="typeahead.bundle.js-2384"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-2385"></a>        <span class="p">};</span>
<a name="typeahead.bundle.js-2386"></a>        <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">typeahead</span><span class="p">.</span><span class="nx">noConflict</span> <span class="o">=</span> <span class="kd">function</span> <span class="nx">noConflict</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2387"></a>            <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">typeahead</span> <span class="o">=</span> <span class="nx">old</span><span class="p">;</span>
<a name="typeahead.bundle.js-2388"></a>            <span class="k">return</span> <span class="k">this</span><span class="p">;</span>
<a name="typeahead.bundle.js-2389"></a>        <span class="p">};</span>
<a name="typeahead.bundle.js-2390"></a>        <span class="kd">function</span> <span class="nx">ttEach</span><span class="p">(</span><span class="nx">$els</span><span class="p">,</span> <span class="nx">fn</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2391"></a>            <span class="nx">$els</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2392"></a>                <span class="kd">var</span> <span class="nx">$input</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">),</span> <span class="nx">typeahead</span><span class="p">;</span>
<a name="typeahead.bundle.js-2393"></a>                <span class="p">(</span><span class="nx">typeahead</span> <span class="o">=</span> <span class="nx">$input</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="nx">keys</span><span class="p">.</span><span class="nx">typeahead</span><span class="p">))</span> <span class="o">&amp;&amp;</span> <span class="nx">fn</span><span class="p">(</span><span class="nx">typeahead</span><span class="p">,</span> <span class="nx">$input</span><span class="p">);</span>
<a name="typeahead.bundle.js-2394"></a>            <span class="p">});</span>
<a name="typeahead.bundle.js-2395"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-2396"></a>        <span class="kd">function</span> <span class="nx">buildHintFromInput</span><span class="p">(</span><span class="nx">$input</span><span class="p">,</span> <span class="nx">www</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2397"></a>            <span class="k">return</span> <span class="nx">$input</span><span class="p">.</span><span class="nx">clone</span><span class="p">().</span><span class="nx">addClass</span><span class="p">(</span><span class="nx">www</span><span class="p">.</span><span class="nx">classes</span><span class="p">.</span><span class="nx">hint</span><span class="p">).</span><span class="nx">removeData</span><span class="p">().</span><span class="nx">css</span><span class="p">(</span><span class="nx">www</span><span class="p">.</span><span class="nx">css</span><span class="p">.</span><span class="nx">hint</span><span class="p">).</span><span class="nx">css</span><span class="p">(</span><span class="nx">getBackgroundStyles</span><span class="p">(</span><span class="nx">$input</span><span class="p">)).</span><span class="nx">prop</span><span class="p">(</span><span class="s2">&quot;readonly&quot;</span><span class="p">,</span> <span class="kc">true</span><span class="p">).</span><span class="nx">removeAttr</span><span class="p">(</span><span class="s2">&quot;id name placeholder required&quot;</span><span class="p">).</span><span class="nx">attr</span><span class="p">({</span>
<a name="typeahead.bundle.js-2398"></a>                <span class="nx">autocomplete</span><span class="o">:</span> <span class="s2">&quot;off&quot;</span><span class="p">,</span>
<a name="typeahead.bundle.js-2399"></a>                <span class="nx">spellcheck</span><span class="o">:</span> <span class="s2">&quot;false&quot;</span><span class="p">,</span>
<a name="typeahead.bundle.js-2400"></a>                <span class="nx">tabindex</span><span class="o">:</span> <span class="o">-</span><span class="mi">1</span>
<a name="typeahead.bundle.js-2401"></a>            <span class="p">});</span>
<a name="typeahead.bundle.js-2402"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-2403"></a>        <span class="kd">function</span> <span class="nx">prepInput</span><span class="p">(</span><span class="nx">$input</span><span class="p">,</span> <span class="nx">www</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2404"></a>            <span class="nx">$input</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="nx">keys</span><span class="p">.</span><span class="nx">attrs</span><span class="p">,</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2405"></a>                <span class="nx">dir</span><span class="o">:</span> <span class="nx">$input</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s2">&quot;dir&quot;</span><span class="p">),</span>
<a name="typeahead.bundle.js-2406"></a>                <span class="nx">autocomplete</span><span class="o">:</span> <span class="nx">$input</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s2">&quot;autocomplete&quot;</span><span class="p">),</span>
<a name="typeahead.bundle.js-2407"></a>                <span class="nx">spellcheck</span><span class="o">:</span> <span class="nx">$input</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s2">&quot;spellcheck&quot;</span><span class="p">),</span>
<a name="typeahead.bundle.js-2408"></a>                <span class="nx">style</span><span class="o">:</span> <span class="nx">$input</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s2">&quot;style&quot;</span><span class="p">)</span>
<a name="typeahead.bundle.js-2409"></a>            <span class="p">});</span>
<a name="typeahead.bundle.js-2410"></a>            <span class="nx">$input</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="nx">www</span><span class="p">.</span><span class="nx">classes</span><span class="p">.</span><span class="nx">input</span><span class="p">).</span><span class="nx">attr</span><span class="p">({</span>
<a name="typeahead.bundle.js-2411"></a>                <span class="nx">autocomplete</span><span class="o">:</span> <span class="s2">&quot;off&quot;</span><span class="p">,</span>
<a name="typeahead.bundle.js-2412"></a>                <span class="nx">spellcheck</span><span class="o">:</span> <span class="kc">false</span>
<a name="typeahead.bundle.js-2413"></a>            <span class="p">});</span>
<a name="typeahead.bundle.js-2414"></a>            <span class="k">try</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2415"></a>                <span class="o">!</span><span class="nx">$input</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s2">&quot;dir&quot;</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">$input</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s2">&quot;dir&quot;</span><span class="p">,</span> <span class="s2">&quot;auto&quot;</span><span class="p">);</span>
<a name="typeahead.bundle.js-2416"></a>            <span class="p">}</span> <span class="k">catch</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{}</span>
<a name="typeahead.bundle.js-2417"></a>            <span class="k">return</span> <span class="nx">$input</span><span class="p">;</span>
<a name="typeahead.bundle.js-2418"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-2419"></a>        <span class="kd">function</span> <span class="nx">getBackgroundStyles</span><span class="p">(</span><span class="nx">$el</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2420"></a>            <span class="k">return</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2421"></a>                <span class="nx">backgroundAttachment</span><span class="o">:</span> <span class="nx">$el</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s2">&quot;background-attachment&quot;</span><span class="p">),</span>
<a name="typeahead.bundle.js-2422"></a>                <span class="nx">backgroundClip</span><span class="o">:</span> <span class="nx">$el</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s2">&quot;background-clip&quot;</span><span class="p">),</span>
<a name="typeahead.bundle.js-2423"></a>                <span class="nx">backgroundColor</span><span class="o">:</span> <span class="nx">$el</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s2">&quot;background-color&quot;</span><span class="p">),</span>
<a name="typeahead.bundle.js-2424"></a>                <span class="nx">backgroundImage</span><span class="o">:</span> <span class="nx">$el</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s2">&quot;background-image&quot;</span><span class="p">),</span>
<a name="typeahead.bundle.js-2425"></a>                <span class="nx">backgroundOrigin</span><span class="o">:</span> <span class="nx">$el</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s2">&quot;background-origin&quot;</span><span class="p">),</span>
<a name="typeahead.bundle.js-2426"></a>                <span class="nx">backgroundPosition</span><span class="o">:</span> <span class="nx">$el</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s2">&quot;background-position&quot;</span><span class="p">),</span>
<a name="typeahead.bundle.js-2427"></a>                <span class="nx">backgroundRepeat</span><span class="o">:</span> <span class="nx">$el</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s2">&quot;background-repeat&quot;</span><span class="p">),</span>
<a name="typeahead.bundle.js-2428"></a>                <span class="nx">backgroundSize</span><span class="o">:</span> <span class="nx">$el</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s2">&quot;background-size&quot;</span><span class="p">)</span>
<a name="typeahead.bundle.js-2429"></a>            <span class="p">};</span>
<a name="typeahead.bundle.js-2430"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-2431"></a>        <span class="kd">function</span> <span class="nx">revert</span><span class="p">(</span><span class="nx">$input</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2432"></a>            <span class="kd">var</span> <span class="nx">www</span><span class="p">,</span> <span class="nx">$wrapper</span><span class="p">;</span>
<a name="typeahead.bundle.js-2433"></a>            <span class="nx">www</span> <span class="o">=</span> <span class="nx">$input</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="nx">keys</span><span class="p">.</span><span class="nx">www</span><span class="p">);</span>
<a name="typeahead.bundle.js-2434"></a>            <span class="nx">$wrapper</span> <span class="o">=</span> <span class="nx">$input</span><span class="p">.</span><span class="nx">parent</span><span class="p">().</span><span class="nx">filter</span><span class="p">(</span><span class="nx">www</span><span class="p">.</span><span class="nx">selectors</span><span class="p">.</span><span class="nx">wrapper</span><span class="p">);</span>
<a name="typeahead.bundle.js-2435"></a>            <span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">$input</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="nx">keys</span><span class="p">.</span><span class="nx">attrs</span><span class="p">),</span> <span class="kd">function</span><span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">key</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2436"></a>                <span class="nx">_</span><span class="p">.</span><span class="nx">isUndefined</span><span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="o">?</span> <span class="nx">$input</span><span class="p">.</span><span class="nx">removeAttr</span><span class="p">(</span><span class="nx">key</span><span class="p">)</span> <span class="o">:</span> <span class="nx">$input</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="nx">key</span><span class="p">,</span> <span class="nx">val</span><span class="p">);</span>
<a name="typeahead.bundle.js-2437"></a>            <span class="p">});</span>
<a name="typeahead.bundle.js-2438"></a>            <span class="nx">$input</span><span class="p">.</span><span class="nx">removeData</span><span class="p">(</span><span class="nx">keys</span><span class="p">.</span><span class="nx">typeahead</span><span class="p">).</span><span class="nx">removeData</span><span class="p">(</span><span class="nx">keys</span><span class="p">.</span><span class="nx">www</span><span class="p">).</span><span class="nx">removeData</span><span class="p">(</span><span class="nx">keys</span><span class="p">.</span><span class="nx">attr</span><span class="p">).</span><span class="nx">removeClass</span><span class="p">(</span><span class="nx">www</span><span class="p">.</span><span class="nx">classes</span><span class="p">.</span><span class="nx">input</span><span class="p">);</span>
<a name="typeahead.bundle.js-2439"></a>            <span class="k">if</span> <span class="p">(</span><span class="nx">$wrapper</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2440"></a>                <span class="nx">$input</span><span class="p">.</span><span class="nx">detach</span><span class="p">().</span><span class="nx">insertAfter</span><span class="p">(</span><span class="nx">$wrapper</span><span class="p">);</span>
<a name="typeahead.bundle.js-2441"></a>                <span class="nx">$wrapper</span><span class="p">.</span><span class="nx">remove</span><span class="p">();</span>
<a name="typeahead.bundle.js-2442"></a>            <span class="p">}</span>
<a name="typeahead.bundle.js-2443"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-2444"></a>        <span class="kd">function</span> <span class="nx">$elOrNull</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span>
<a name="typeahead.bundle.js-2445"></a>            <span class="kd">var</span> <span class="nx">isValid</span><span class="p">,</span> <span class="nx">$el</span><span class="p">;</span>
<a name="typeahead.bundle.js-2446"></a>            <span class="nx">isValid</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isJQuery</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="o">||</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isElement</span><span class="p">(</span><span class="nx">obj</span><span class="p">);</span>
<a name="typeahead.bundle.js-2447"></a>            <span class="nx">$el</span> <span class="o">=</span> <span class="nx">isValid</span> <span class="o">?</span> <span class="nx">$</span><span class="p">(</span><span class="nx">obj</span><span class="p">).</span><span class="nx">first</span><span class="p">()</span> <span class="o">:</span> <span class="p">[];</span>
<a name="typeahead.bundle.js-2448"></a>            <span class="k">return</span> <span class="nx">$el</span><span class="p">.</span><span class="nx">length</span> <span class="o">?</span> <span class="nx">$el</span> <span class="o">:</span> <span class="kc">null</span><span class="p">;</span>
<a name="typeahead.bundle.js-2449"></a>        <span class="p">}</span>
<a name="typeahead.bundle.js-2450"></a>    <span class="p">})();</span>
<a name="typeahead.bundle.js-2451"></a><span class="p">});</span>
</pre></div>
</td></tr></table>
    </div>
  


        </div>
        
      </div>
    </div>
  </div>
  
  <div data-module="source/set-changeset" data-hash="cc095f37210ff04106b3333cf7185a86f6c8f08d"></div>



  
    
    <script id="branch-dialog-template" type="text/html">
      

<div class="tabbed-filter-widget branch-dialog">
  <div class="tabbed-filter">
    <input placeholder="Filter branches" class="filter-box" autosave="branch-dropdown-21737049" type="text">
    [[^ignoreTags]]
      <div class="aui-tabs horizontal-tabs aui-tabs-disabled filter-tabs">
        <ul class="tabs-menu">
          <li class="menu-item active-tab"><a href="#branches">Branches</a></li>
          <li class="menu-item"><a href="#tags">Tags</a></li>
        </ul>
      </div>
    [[/ignoreTags]]
  </div>
  
    <div class="tab-pane active-pane" id="branches" data-filter-placeholder="Filter branches">
      <ol class="filter-list">
        <li class="empty-msg">No matching branches</li>
        [[#branches]]
          
            [[#hasMultipleHeads]]
              [[#heads]]
                <li class="comprev filter-item">
                  <a class="pjax-trigger filter-item-link" href="/amirski_/labdemo/src/[[changeset]]/labdemo/static/js/typeahead.bundle.js?at=[[safeName]]"
                     title="[[name]]">
                    [[name]] ([[shortChangeset]])
                  </a>
                </li>
              [[/heads]]
            [[/hasMultipleHeads]]
            [[^hasMultipleHeads]]
              <li class="comprev filter-item">
                <a class="pjax-trigger filter-item-link" href="/amirski_/labdemo/src/[[changeset]]/labdemo/static/js/typeahead.bundle.js?at=[[safeName]]" title="[[name]]">
                  [[name]]
                </a>
              </li>
            [[/hasMultipleHeads]]
          
        [[/branches]]
      </ol>
    </div>
    <div class="tab-pane" id="tags" data-filter-placeholder="Filter tags">
      <ol class="filter-list">
        <li class="empty-msg">No matching tags</li>
        [[#tags]]
          <li class="comprev filter-item">
            <a class="pjax-trigger filter-item-link" href="/amirski_/labdemo/src/[[changeset]]/labdemo/static/js/typeahead.bundle.js?at=[[safeName]]" title="[[name]]">
              [[name]]
            </a>
          </li>
        [[/tags]]
      </ol>
    </div>
  
</div>

    </script>
  
  

  </div>

        
        
        
      </div>
    </div>
  </div>

      </div>
    </div>
  
    </ak-page>
  

  
    
      <footer id="footer" role="contentinfo" data-module="components/footer">
        <section class="footer-body">
          
  <ul>
  <li>
    <a class="support-ga" target="_blank"
       data-support-gaq-page="Blog"
       href="http://blog.bitbucket.org">Blog</a>
  </li>
  <li>
    <a class="support-ga" target="_blank"
       data-support-gaq-page="Home"
       href="/support">Support</a>
  </li>
  <li>
    <a class="support-ga"
       data-support-gaq-page="PlansPricing"
       href="/plans">Plans &amp; pricing</a>
  </li>
  <li>
    <a class="support-ga" target="_blank"
       data-support-gaq-page="DocumentationHome"
       href="//confluence.atlassian.com/display/BITBUCKET">Documentation</a>
  </li>
  <li>
    <a class="support-ga" target="_blank"
       data-support-gaq-page="DocumentationAPI"
       href="https://developer.atlassian.com/bitbucket/api/2/reference/">API</a>
  </li>
  <li>
    <a class="support-ga" target="_blank"
       data-support-gaq-page="SiteStatus"
       href="https://status.bitbucket.org/">Site status</a>
  </li>
  <li>
    <a class="support-ga" id="meta-info"
       data-support-gaq-page="MetaInfo"
       href="#">Version info</a>
  </li>
  <li>
    <a class="support-ga" target="_blank"
       data-support-gaq-page="EndUserAgreement"
       href="//www.atlassian.com/legal/customer-agreement?utm_source=bitbucket&amp;utm_medium=link&amp;utm_campaign=footer">Terms of service</a>
  </li>
  <li>
    <a class="support-ga" target="_blank"
       data-support-gaq-page="PrivacyPolicy"
       href="//www.atlassian.com/legal/privacy-policy">Privacy policy</a>
  </li>
</ul>
<div id="meta-info-content" style="display: none;">
  <ul>
    
      <li>English</li>
    
    <li>
      <a class="support-ga" target="_blank"
         data-support-gaq-page="GitDocumentation"
         href="http://git-scm.com/">Git 2.7.4.1.g5468f9e</a>
    </li>
    <li>
      <a class="support-ga" target="_blank"
         data-support-gaq-page="HgDocumentation"
         href="https://www.mercurial-scm.org">Mercurial 3.9.2</a>
    </li>
    <li>
      <a class="support-ga" target="_blank"
         data-support-gaq-page="DjangoDocumentation"
         href="https://www.djangoproject.com/">Django 1.7.11</a>
    </li>
    <li>
      <a class="support-ga" target="_blank"
         data-support-gaq-page="PythonDocumentation"
         href="http://www.python.org/">Python 2.7.3</a>
    </li>
    <li>
      <a class="support-ga" target="_blank"
         data-support-gaq-page="DeployedVersion"
         data-media-hex="3260c91ef192"
         href="#">3260c91ef192 / 3260c91ef192 @ app-1count</a>
    </li>
    <li>
      <a class="support-ga" target="_blank"
         data-support-gaq-page="StorageRegion"
         href="#">Region production</a>
    </li>
  </ul>
</div>
<ul class="atlassian-links">
  <li>
    <a id="atlassian-jira-link" target="_blank"
       title="Track everything – bugs, tasks, deadlines, code – and pull reports to stay informed."
       href="https://www.atlassian.com/software/jira/bitbucket-integration?utm_source=bitbucket&amp;utm_medium=link&amp;utm_campaign=bitbucket_footer">JIRA Software</a>
  </li>
  <li>
    <a id="atlassian-confluence-link" target="_blank"
       title="Content Creation, Collaboration & Knowledge Sharing for Teams."
       href="http://www.atlassian.com/software/confluence/overview/team-collaboration-software?utm_source=bitbucket&amp;utm_medium=link&amp;utm_campaign=bitbucket_footer">Confluence</a>
  </li>
  <li>
    <a id="atlassian-bamboo-link" target="_blank"
       title="Continuous integration and deployment, release management."
       href="http://www.atlassian.com/software/bamboo?utm_source=bitbucket&amp;utm_medium=link&amp;utm_campaign=bitbucket_footer">Bamboo</a>
  </li>
  <li>
    <a id="atlassian-sourcetree-link" target="_blank"
       title="A free Git and Mercurial desktop client for Mac or Windows."
       href="http://www.sourcetreeapp.com/?utm_source=bitbucket&amp;utm_medium=link&amp;utm_campaign=bitbucket_footer">SourceTree</a>
  </li>
  <li>
    <a id="atlassian-hipchat-link" target="_blank"
       title="Group chat and IM built for teams."
       href="http://www.hipchat.com/?utm_source=bitbucket&amp;utm_medium=link&amp;utm_campaign=bitbucket_footer">HipChat</a>
  </li>
</ul>
<div id="footer-logo">
  <a target="_blank"
     title="Bitbucket is developed by Atlassian in Austin, San Francisco, and Sydney."
     href="http://www.atlassian.com?utm_source=bitbucket&amp;utm_medium=logo&amp;utm_campaign=bitbucket_footer">Atlassian</a>
</div>

        </section>
      </footer>
    
  
</div>


  

<div data-module="components/mentions/index">
  
    <script id="mention-result" type="text/html">
      
<span class="mention-result">
  <span class="aui-avatar aui-avatar-small mention-result--avatar">
    <span class="aui-avatar-inner">
      <img src="[[avatar_url]]">
    </span>
  </span>
  [[#display_name]]
    <span class="display-name mention-result--display-name">[[&display_name]]</span> <small class="username mention-result--username">[[&username]]</small>
  [[/display_name]]
  [[^display_name]]
    <span class="username mention-result--username">[[&username]]</span>
  [[/display_name]]
  [[#is_teammate]][[^is_team]]
    <span class="aui-lozenge aui-lozenge-complete aui-lozenge-subtle mention-result--lozenge">teammate</span>
  [[/is_team]][[/is_teammate]]
</span>
    </script>
  
  
    <script id="mention-call-to-action" type="text/html">
      
[[^query]]
<li class="bb-typeahead-item">Begin typing to search for a user</li>
[[/query]]
[[#query]]
<li class="bb-typeahead-item">Continue typing to search for a user</li>
[[/query]]

    </script>
  
  
    <script id="mention-no-results" type="text/html">
      
[[^searching]]
<li class="bb-typeahead-item">Found no matching users for <em>[[query]]</em>.</li>
[[/searching]]
[[#searching]]
<li class="bb-typeahead-item bb-typeahead-searching">Searching for <em>[[query]]</em>.</li>
[[/searching]]

    </script>
  
</div>
<div data-module="components/typeahead/emoji/index">
  
    <script id="emoji-result" type="text/html">
      
<div class="aui-avatar aui-avatar-small">
  <div class="aui-avatar-inner">
    <img src="[[src]]">
  </div>
</div>
<span class="name">[[&name]]</span>

    </script>
  
</div>

<div data-module="components/repo-typeahead/index">
  
    <script id="repo-typeahead-result" type="text/html">
      <span class="aui-avatar aui-avatar-project aui-avatar-xsmall">
  <span class="aui-avatar-inner">
    <img src="[[avatar]]">
  </span>
</span>
<span class="owner">[[&owner]]</span>/<span class="slug">[[&slug]]</span>

    </script>
  
</div>

    <script id="share-form-template" type="text/html">
      

<div class="error aui-message hidden">
  <span class="aui-icon icon-error"></span>
  <div class="message"></div>
</div>
<form class="aui">
  <table class="widget bb-list aui">
    <thead>
    <tr class="assistive">
      <th class="user">User</th>
      <th class="role">Role</th>
      <th class="actions">Actions</th>
    </tr>
    </thead>
    <tbody>
      <tr class="form">
        <td colspan="2">
          <input type="text" class="text bb-user-typeahead user-or-email"
                 placeholder="Username or email address"
                 autocomplete="off"
                 data-bb-typeahead-focus="false"
                 [[#disabled]]disabled[[/disabled]]>
        </td>
        <td class="actions">
          <button type="submit" class="aui-button aui-button-light" disabled>Add</button>
        </td>
      </tr>
    </tbody>
  </table>
</form>

    </script>
  

    <script id="share-detail-template" type="text/html">
      

[[#username]]
<td class="user
    [[#hasCustomGroups]]custom-groups[[/hasCustomGroups]]"
    [[#error]]data-error="[[error]]"[[/error]]>
  <div title="[[displayName]]">
    <a href="/[[username]]/" class="user">
      <span class="aui-avatar aui-avatar-xsmall">
        <span class="aui-avatar-inner">
          <img src="[[avatar]]">
        </span>
      </span>
      <span>[[displayName]]</span>
    </a>
  </div>
</td>
[[/username]]
[[^username]]
<td class="email
    [[#hasCustomGroups]]custom-groups[[/hasCustomGroups]]"
    [[#error]]data-error="[[error]]"[[/error]]>
  <div title="[[email]]">
    <span class="aui-icon aui-icon-small aui-iconfont-email"></span>
    [[email]]
  </div>
</td>
[[/username]]
<td class="role
    [[#hasCustomGroups]]custom-groups[[/hasCustomGroups]]">
  <div>
    [[#group]]
      [[#hasCustomGroups]]
        <select class="group [[#noGroupChoices]]hidden[[/noGroupChoices]]">
          [[#groups]]
            <option value="[[slug]]"
                [[#isSelected]]selected[[/isSelected]]>
              [[name]]
            </option>
          [[/groups]]
        </select>
      [[/hasCustomGroups]]
      [[^hasCustomGroups]]
      <label>
        <input type="checkbox" class="admin"
            [[#isAdmin]]checked[[/isAdmin]]>
        Administrator
      </label>
      [[/hasCustomGroups]]
    [[/group]]
    [[^group]]
      <ul>
        <li class="permission aui-lozenge aui-lozenge-complete
            [[^read]]aui-lozenge-subtle[[/read]]"
            data-permission="read">
          read
        </li>
        <li class="permission aui-lozenge aui-lozenge-complete
            [[^write]]aui-lozenge-subtle[[/write]]"
            data-permission="write">
          write
        </li>
        <li class="permission aui-lozenge aui-lozenge-complete
            [[^admin]]aui-lozenge-subtle[[/admin]]"
            data-permission="admin">
          admin
        </li>
      </ul>
    [[/group]]
  </div>
</td>
<td class="actions
    [[#hasCustomGroups]]custom-groups[[/hasCustomGroups]]">
  <div>
    <a href="#" class="delete">
      <span class="aui-icon aui-icon-small aui-iconfont-remove">Delete</span>
    </a>
  </div>
</td>

    </script>
  

    <script id="share-team-template" type="text/html">
      

<div class="clearfix">
  <span class="team-avatar-container">
    <span class="aui-avatar aui-avatar-medium">
      <span class="aui-avatar-inner">
        <img src="[[avatar]]">
      </span>
    </span>
  </span>
  <span class="team-name-container">
    [[display_name]]
  </span>
</div>
<p class="helptext">
  
    Existing users are granted access to this team immediately.
    New users will be sent an invitation.
  
</p>
<div class="share-form"></div>

    </script>
  

    <script id="scope-list-template" type="text/html">
      <ul class="scope-list">
  [[#scopes]]
    <li class="scope-list--item">
      <span class="scope-list--icon aui-icon aui-icon-small [[icon]]"></span>
      <span class="scope-list--description">[[description]]</span>
    </li>
  [[/scopes]]
</ul>

    </script>
  


  


    <script id="source-changeset" type="text/html">
      

<a href="/amirski_/labdemo/src/[[raw_node]]/[[path]]?at=master"
    class="[[#selected]]highlight[[/selected]]"
    data-hash="[[node]]">
  [[#author.username]]
    <span class="aui-avatar aui-avatar-xsmall">
      <span class="aui-avatar-inner">
        <img src="[[author.avatar]]">
      </span>
    </span>
    <span class="author" title="[[raw_author]]">[[author.display_name]]</span>
  [[/author.username]]
  [[^author.username]]
    <span class="aui-avatar aui-avatar-xsmall">
      <span class="aui-avatar-inner">
        <img src="https://d301sr5gafysq2.cloudfront.net/3260c91ef192/img/default_avatar/user_blue.svg">
      </span>
    </span>
    <span class="author unmapped" title="[[raw_author]]">[[author]]</span>
  [[/author.username]]
  <time datetime="[[utctimestamp]]" data-title="true">[[utctimestamp]]</time>
  <span class="message">[[message]]</span>
</a>

    </script>
  

    <script id="embed-template" type="text/html">
      

<form class="aui inline-dialog-embed-dialog">
  <label for="embed-code-[[dialogId]]">Embed this source in another page:</label>
  <input type="text" readonly="true" value="&lt;script src=&quot;[[url]]&quot;&gt;&lt;/script&gt;" id="embed-code-[[dialogId]]" class="embed-code">
</form>

    </script>
  



  
  
  <aui-inline-dialog
    id="help-menu-dialog"
    data-aui-alignment="bottom right"

    
    data-aui-alignment-static="true"
    data-module="header/help-menu"
    responds-to="toggle"
    aria-hidden="true">

  <div id="help-menu-section">
    <h1 class="help-menu-heading">Help</h1>

    <form id="help-menu-search-form" class="aui" target="_blank" method="get"
        action="https://support.atlassian.com/customer/search">
      <span id="help-menu-search-icon" class="aui-icon aui-icon-large aui-iconfont-search"></span>
      <input id="help-menu-search-form-input" name="q" class="text" type="text" placeholder="Ask a question">
    </form>

    <ul id="help-menu-links">
      <li>
        <a class="support-ga" data-support-gaq-page="DocumentationHome"
            href="https://confluence.atlassian.com/x/bgozDQ" target="_blank">
          Online help
        </a>
      </li>
      <li>
        <a class="support-ga" data-support-gaq-page="GitTutorials"
            href="https://www.atlassian.com/git?utm_source=bitbucket&amp;utm_medium=link&amp;utm_campaign=help_dropdown&amp;utm_content=learn_git"
            target="_blank">
          Learn Git
        </a>
      </li>
      <li>
        <a id="keyboard-shortcuts-link"
           href="#">Keyboard shortcuts</a>
      </li>
      <li>
        <a href="/whats-new/" id="features-link">
          Latest features
        </a>
      </li>
      <li>
        <a class="support-ga" data-support-gaq-page="DocumentationTutorials"
            href="https://confluence.atlassian.com/x/Q4sFLQ" target="_blank">
          Bitbucket tutorials
        </a>
      </li>
      <li>
        <a class="support-ga" data-support-gaq-page="SiteStatus"
            href="https://status.bitbucket.org/" target="_blank">
          Site status
        </a>
      </li>
      <li>
        <a class="support-ga" data-support-gaq-page="Home" href="/support">
          Support
        </a>
      </li>
    </ul>
  </div>
</aui-inline-dialog>
  








  
  


<script src="https://d301sr5gafysq2.cloudfront.net/3260c91ef192/jsi18n/en/djangojs.js"></script>
<script src="https://d301sr5gafysq2.cloudfront.net/3260c91ef192/dist/webpack/vendor.js"></script>
<script src="https://d301sr5gafysq2.cloudfront.net/3260c91ef192/dist/webpack/app.js"></script>


<script async src="https://www.google-analytics.com/analytics.js"></script>

<script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","queueTime":0,"licenseKey":"a2cef8c3d3","agent":"","transactionName":"Z11RZxdWW0cEVkYLDV4XdUYLVEFdClsdAAtEWkZQDlJBGgRFQhFMQl1DXFcZQ10AQkFYBFlUVlEXWEJHAA==","applicationID":"1841284","errorBeacon":"bam.nr-data.net","applicationTime":431}</script>
</body>
</html>