function signIn() {
  const username = document.getElementById("usernameInput").value;
  const password = document.getElementById("passwordInput").value;
}

function done() {
  console.log("Hey")
  document.getElementById("label1") = document.getElementById("label1Input").value;
  document.getElementById("text1") = document.getElementById("text1Input").value;
  document.getElementById("label2") = document.getElementById("label2Input").value;
  document.getElementById("text2") = document.getElementById("text2Input").value;
  document.getElementById("label3") = document.getElementById("label3Input").value;
  document.getElementById("text3") = document.getElementById("text3Input").value;
  document.getElementById("label4") = document.getElementById("label4Input").value;
  document.getElementById("text4") = document.getElementById("text4Input").value;
  document.getElementById("label5") = document.getElementById("label5Input").value;
  document.getElementById("text5") = document.getElementById("text5Input").value;
}

document.getElementById("label1Input").style.display = "none";
document.getElementById("text1Input").style.display = "none";
document.getElementById("label2Input").style.display = "none";
document.getElementById("text2Input").style.display = "none";
document.getElementById("label3Input").style.display = "none";
document.getElementById("text3Input").style.display = "none";
document.getElementById("label4Input").style.display = "none";
document.getElementById("text4Input").style.display = "none";
document.getElementById("label5Input").style.display = "none";
document.getElementById("text5Input").style.display = "none";

document.getElementById("ApplyBtn").style.display = "none";
document.getElementById("DoneBtn").style.display = "none";

function hideText() {
  document.getElementById("label1Input").style.display = "block";
  document.getElementById("text1Input").style.display = "block";
  document.getElementById("label2Input").style.display = "block";
  document.getElementById("text2Input").style.display = "block";
  document.getElementById("label3Input").style.display = "block";
  document.getElementById("text3Input").style.display = "block";
  document.getElementById("label4Input").style.display = "block";
  document.getElementById("text4Input").style.display = "block";
  document.getElementById("label5Input").style.display = "block";
  document.getElementById("text5Input").style.display = "block";

  document.getElementById("label1").style.display = "none";
  document.getElementById("text1").style.display = "none";
  document.getElementById("label2").style.display = "none";
  document.getElementById("text2").style.display = "none";
  document.getElementById("label3").style.display = "none";
  document.getElementById("text3").style.display = "none";
  document.getElementById("label4").style.display = "none";
  document.getElementById("text4").style.display = "none";
  document.getElementById("label5").style.display = "none";
  document.getElementById("text5").style.display = "none";

  document.getElementById("EditBtn").style.display = "none";
  document.getElementById("ApplyBtn").style.display = "block";
  document.getElementById("DoneBtn").style.display = "block";
}

function hideInput() {
  document.getElementById("label1Input").style.display = "none";
  document.getElementById("text1Input").style.display = "none";
  document.getElementById("label2Input").style.display = "none";
  document.getElementById("text2Input").style.display = "none";
  document.getElementById("label3Input").style.display = "none";
  document.getElementById("text3Input").style.display = "none";
  document.getElementById("label4Input").style.display = "none";
  document.getElementById("text4Input").style.display = "none";
  document.getElementById("label5Input").style.display = "none";
  document.getElementById("text5Input").style.display = "none";

  document.getElementById("label1").style.display = "block";
  document.getElementById("text1").style.display = "block";
  document.getElementById("label2").style.display = "block";
  document.getElementById("text2").style.display = "block";
  document.getElementById("label3").style.display = "block";
  document.getElementById("text3").style.display = "block";
  document.getElementById("label4").style.display = "block";
  document.getElementById("text4").style.display = "block";
  document.getElementById("label5").style.display = "block";
  document.getElementById("text5").style.display = "block";

  document.getElementById("EditBtn").style.display = "block";
  document.getElementById("ApplyBtn").style.display = "none";
  document.getElementById("DoneBtn").style.display = "none";
}
