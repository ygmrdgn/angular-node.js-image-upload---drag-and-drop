

var filess=[];
var files=[];

        html="";
        function readfiles(files) {
          window.files=files;
         
            // for (var i = 0; i < files.length; i++) {
            //     filess.push("<li style='list-style-type: none;'>"+files[i].name+"</li>");
            //     html+="<li style='list-style-type: none;'><h5 style=\'font-family: sinkinSans;\'>"+ files[i].name + deneme +"</h5></li>";
        
            //     document.getElementById('fileDragName').innerHTML =html;
            // }
     
 
         }
        var holder = document.getElementById("holder");
        holder.ondragover = function () { this.className = 'hover'; return false; };
        holder.ondragend = function () { this.className = ''; return false; };
        holder.ondrop = function (e) {
            this.className = '';
            e.preventDefault();
            var buton = document.getElementById('sahteButton');
            buton.click();
            readfiles(e.dataTransfer.files);
        }

///////////////////////////////////////////////////////////////////

        function handleFileSelect(evt) {
          window.files = evt.target.files;
            // var output = [];
            // for (var i = 0,f ; f = files[i]; i++) {
            //     output.push('<li style=\'list-style-type: none;margin-left: 4px\'><a \'>'+ escape(f.name)+ deneme+'</a></li>');
            // }
            // document.getElementById('fileDragName').innerHTML =  output.join('') ;
        }
        document.getElementById('files').addEventListener('change', handleFileSelect, false);
    
    ///////////////////////////////////
        function getFile(){    
         
          return window.files;
        }



