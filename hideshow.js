<!DOCTYPE html>
  <head>
  <title>jquery</title>
</head>
<body>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js">
  </script>
<script>
    $(document).ready(function(){
  $("#hide").click(function(){
    $("p").hide();
  });
    $("#show").click(function(){
      $("p").show();
  });
  });
    </script>
<p> If you click on the hide button, i will disapper</p>
<button id="hide">hide</button>
<button id="show">show</button>
  </body>
  
</html>
