function signIn() {
  const username = document.getElementById("usernameInput").value;
  const password = document.getElementById("passwordInput").value;
}

function done() {
  const label1InputVar = document.getElementById("label1Input").value;
  const text1InputVar = document.getElementById("text1Input").value;
  const label2InputVar = document.getElementById("label2Input").value;
  const text2InputVar = document.getElementById("text2Input").value;
  const label3InputVar = document.getElementById("label3Input").value;
  const text3InputVar = document.getElementById("text3Input").value;
  const label4InputVar = document.getElementById("label4Input").value;
  const text4InputVar = document.getElementById("text4Input").value;
  const label5InputVar = document.getElementById("label5Input").value;
  const text5InputVar = document.getElementById("text5Input").value;

  document.getElementById("label1") = label1InputVar;
  document.getElementById("text1") = text1InputVar;
  document.getElementById("label2") = label2InputVar;
  document.getElementById("text2") = text2InputVar;
  document.getElementById("label3") = label3InputVar;
  document.getElementById("text3") = text3InputVar;
  document.getElementById("label4") = label4InputVar;
  document.getElementById("text4") = text4InputVar;
  document.getElementById("label5") = label5InputVar;
  document.getElementById("text5") = text5InputVar;
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
