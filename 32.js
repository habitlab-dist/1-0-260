window.habitlab_content_script = true;

(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"./src/components/habitlab-sidebar-suggestions-removed.deps.js":function(o,e,s){const{import_dom_modules:t}=s("./src/libs_frontend/dom_utils.ls");s("./src/bower_components/polymer/polymer.deps.js"),s("./src/bower_components/habitlab-paper-button/habitlab-paper-button.deps.js"),s("./src/components/habitlab-logo-v2.deps.js"),t(s("./src/components/habitlab-sidebar-suggestions-removed.html"),"components/habitlab-sidebar-suggestions-removed.html"),s("./src/components/habitlab-sidebar-suggestions-removed.js")},"./src/components/habitlab-sidebar-suggestions-removed.html":function(o,e){o.exports="<link rel=import href=../bower_components/polymer/polymer.html> <link rel=import href=../bower_components/habitlab-paper-button/habitlab-paper-button.html> <link rel=import href=habitlab-logo-v2.html> <habitlab-dom-module id=habitlab-sidebar-suggestions-removed> <template> <style>#outerdiv{background-color:#1f1f1f;width:100%;height:100%;text-align:center;display:table}#button_container{display:table-cell;vertical-align:middle}#show_sidebar_button{background-color:#415D67;color:#fff;-webkit-font-smoothing:antialiased;font-size:14px;box-shadow:2px 2px 2px #888;margin-top:10px}</style> <div id=outerdiv> <div id=button_container> <habitlab-logo-v2 id=logo></habitlab-logo-v2> <br><br> <habitlab-paper-button on-click=show_sidebar_button_clicked id=show_sidebar_button>Show Sidebar</habitlab-paper-button> </div> </div> </template> <script src=habitlab-sidebar-suggestions-removed.js><\/script> </habitlab-dom-module>"},"./src/components/habitlab-sidebar-suggestions-removed.js":function(o,e){Polymer({is:"habitlab-sidebar-suggestions-removed",properties:{isdemo:{type:Boolean,observer:"isdemo_changed"},domain:{type:String,value:"chrome-extension:"==window.location.protocol?"www.iqiyi.com":window.location.host},sitename_printable:{type:String,value:"Iqiyi"}},show_sidebar_button_clicked:function(o){this.fire("show_sidebar_clicked",{}),console.log("show sidebar button was clicked")},isdemo_changed:function(o){console.log("isdemo_changed called"),console.log(o),o&&(this.style.height="410px",this.style.width="680px")}})}}]);