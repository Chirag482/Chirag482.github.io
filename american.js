 /*Change of add to cart image*/
 function changetovalue(z) {
    var butt = document.getElementById("addtocart"+z);
    butt.remove();
    var para = document.getElementById("cartspan("+z+")");
    para.style.display = "inline";
  }
  /*change of add to cart image ends here*/


  /*like button*/
  var likebuttons = document.getElementsByClassName("like")
  console.log(likebuttons)
  for (var i=0;i < likebuttons.length ; i++){
    var button = likebuttons[i]
    button.addEventListener('click',function(event) {
      var buttoncliked = event.target
      if (buttoncliked.src.match("filled-like")){
        buttoncliked.src = "https://img.icons8.com/flat_round/64/000000/hearts.png";
        buttoncliked.title = "Liked";
      }
      else{
        buttoncliked.src = "https://img.icons8.com/material-outlined/24/000000/filled-like.png";
        buttoncliked.title = "Like";
      }
    })
  }
  /*Like button ends here*/

  let arr=["60","80","49","65","69","82","75","59"];
  let order=[];
  let count=[];
  let selectdish=[];
  let dish=["Cheese Burger","Hot Chicken","Chilli Chips","Sloppy Joe","Beef","Fried Fish","Booyah spiced","Kansas"];
  var k,n,j=0;
  var modal=document.getElementById("myModal");
  var btn=document.getElementById("proceed");
  var clr = document.getElementsByClassName("close")[0];
  var btn1=document.getElementById("printbook");
  let cnt=[];//=document.getElementsByClassName("count");
  function addtocart(i){
    for(k=0;k<selectdish.length;k++){
      if(selectdish[k]==dish[i]){
        return false;
      }
    }
    order[j]=arr[i];
    selectdish[j]=dish[i];
    cnt[j]=document.getElementsByClassName("count")[i];
    j++;
    popup("");
  }
  btn.onclick =function(){
    var totalcash = 0;
    for(k=0;k<j;k++){
      var total=order[k]*(cnt[k].value);
      totalcash += total;
    }

    if(totalcash!=0){
      
      document.getElementsByClassName("modal-header")[0].innerHTML="<h2>Yummy!!</h2>";
      document.getElementsByClassName("modal-header")[0].appendChild(clr);
      document.getElementById("modal-body").innerHTML="Your Order:";
      for(k=0;k<j;k++){
        if(cnt[k].value==0){
          continue;
        }
        //document.getElementById("modal-body").innerHTML+=j;
        var total=order[k]*(cnt[k].value);
        document.getElementById("modal-body").innerHTML+="</br>"+selectdish[k]+":&nbsp"+total;//*document.getElementById("count").value;
      }
      document.getElementById("modal-body").innerHTML+="</br>"+"Total"+":&nbsp"+totalcash;
      modal.style.display = "block";
    }
  
    else{
      document.getElementsByClassName("modal-header")[0].innerHTML="<h2>Oops!!!</h2>";
      document.getElementsByClassName("modal-header")[0].appendChild(clr);
      document.getElementById("modal-body").innerHTML="No item selected";
      modal.style.display = "block";
    }
  }
  // When the user clicks on <span> (x), close the modal
  clr.onclick = function() {
    document.getElementById("myModal").style.display = "none";
    //document.getElementById("modal-body").innerHTML="none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
  //  document.getElementById("modal-body").innerHTML="none";
      document.getElementById("myModal").style.display = "none";
    }
  }
  btn1.onclick=function(){
    window.print();
  }




