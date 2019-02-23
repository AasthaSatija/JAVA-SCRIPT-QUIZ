function submitAnswers()
{
	var total=5;
	var score=0;
	var q1=document.forms["quizform"]["opt1"].value;
	var q2=document.forms["quizform"]["opt2"].value;
	var q3=document.forms["quizform"]["opt3"].value;
	var q4=document.forms["quizform"]["opt4"].value;
	var q5=document.forms["quizform"]["opt5"].value;
	 if(q1==null||q1=='')
	 {
	 	alert('you missed question 1');
	 	return false;
	 }
	 if(q2==null||q2=='')
	 {
	 	alert('you missed question 2');
	 	return false;
	 }
	 if(q3==null||q3=='')
	 {
	 	alert('you missed question 3');
	 	return false;
	 }
	 if(q4==null||q4=='')
	 {
	 	alert('you missed question 4');
	 	return false;
	 }
	 if(q5==null||q5=='')
	 {
	 	alert('you missed question 5');
	 	return false;
	 }
	 var answers=["b","a","d","b","d"];
	 for(i=1;i<=total;i++)
	 {
	 	if(eval('q'+i)==answers[i-1])
	 	{
	 		score++;
	 	}
	 }

	alert('you scored '+score+' out of '+total);

}