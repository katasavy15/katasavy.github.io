
var shown=false;

function showHideEmail(){
  if(shown){
    document.getElementById('email').innerHTML="Show my email";
    shown=false;
  }
  else{
    var myEmail="<a href='mailto:katasavy"+"@"+"mail.uc.edu'>katasavy"+
    "@"+"mail.uc.edu";
    document.getElementById('email').innerHTML=myEmail;
    shown=true;
  }
}
//digital clock
function displayTime(){
      document.getElementById('digital-clock').innerHTML="Current time: "+ new Date();
    }
setInterval(displayTime,500);

function jokeAPIHit(){
  $.get("https://v2.jokeapi.dev/joke/Programming?type=single",
      function(result){
        if(result==null || result.joke==null || result.joke==""){
          alert("Did not receive output from joke API");
        }       
        else{
          $("#response").html("<b>A programming joke of the day: </b>"+encodeInput(result.joke));
        }
      }
    );
}
setInterval(jokeAPIHit,10000);

async function guessAge(){
      var head=new Headers();
      head.append('Access-Control-Allow-Origin', 'https://katasavy15.github.io');
      head.append('Access-Control-Allow-Credentials', 'true');
      $.ajax({
      url: 'https://xkcd.com/info.0.json',
      type: 'post',
      headers: head,
      dataType: 'json',
      success: function (data) {
          console.info(data);
      }
  });
        
    }

function encodeInput(input){
      const encodedData=document.createElement('div');
      encodedData.innerText=input;
      return encodedData.innerHTML;
}

