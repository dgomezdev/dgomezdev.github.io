var message = '';
var student;


for (var i = 0; i < students.length; i += 1) {
  student = students[i];
  message += '<h2>Student: ' + student.name + '</h2>';
  message += '<p>Track: ' + student.track + '</p>';
  message += '<p>Points: ' + student.points + '</p>';
  message += '<p>Achievements: ' + student.achievements + '</p>';
}

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

print(message);




