$(function(){
  $('#average').click(function(){
    var firstGrade = $('#firstGrade').val();
    var secondGrade = $('#secondGrade').val();
    var thirdGrade = $('#thirdGrade').val();
    var fourthGrade = $('#fourthGrade').val();
    var fifthGrade = $('#fifthGrade').val();
    var sum = parseInt(firstGrade)+parseInt(secondGrade)+parseInt(thirdGrade)+parseInt(fourthGrade)+parseInt(fifthGrade);
    var average = sum/5;
    if(average >= 0 && average < 10){
      alert('Votre moyenne est de '+average+'. Appréciation : En dessous de la moyenne.');
    }else if (average >= 10 && average < 13){
      alert('Votre moyenne est de '+average+'. Appréciation : Moyen.');
    }else if (average >= 13 && average < 16){
      alert('Votre moyenne est de '+average+'. Appréciation : Bien.');
    }else if (average >= 16 && average < 20){
      alert('Votre moyenne est de '+average+'. Appréciation : Très bien.');
    }else if (average == 20){
      alert('Votre moyenne est de '+average+'. Appréciation : Vous avez triché !');
    }
    console.log(average);
  });
});
