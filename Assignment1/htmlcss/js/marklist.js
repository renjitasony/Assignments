function getPercentage(fm,tm){
return ((fm/tm)* 100);
}
function getGrade(fm,tm){
    var percentage = getPercentage(fm,tm);
    if(percentage >= 95){
        var grade = "S";
    }else if(percentage >= 90){
        var grade = "A+";
    }else if(percentage>=85){
        var grade = "A";
    }else if(percentage >= 80){
        var grade = "B+";
    }else if(percentage >= 75){
        var grade = "B";
    }else if(percentage >= 70){
        var grade = "C+"
    }else if(percentage >=65){
        var grade = "C";
    }else if(percentage >= 60){
        var grade = "D+";
    }else if(percentage >= 55){
        var grade = "D";
    }else if(percentage >= 50){
        var grade = "E";
    }else{
        var grade = "F";
    }
    return grade;
}
function getStatus(grades){
    var find =0;
    for(var i=0;i<6;i++){
        if(grades[i] =="F"){
            find =1;
            break;
        }
    }
    if(find == 0){
        return "Passed";
    }else{
        return "Failed";
    }
}
function validateForm(){
    var studentData = new Object();
    var sname = document.getElementById("sname").value;
    if(sname=""){
        alert("Name cannot be empty");
        return false;
    }

}
function getMarkList(){   

    var sname = document.getElementById("sname").value;    
    var sem = document.getElementById("semstudent").value.toString();      
    var ecode = document.getElementById("ecode").value;
    
    if((sname=="") ||(sname==undefined) ){
        alert("Name cannot be empty");
        return false;
    }
    if(ecode == ""){
        alert("Please enter your exam code.");
        return false;
    }
    var subj = Array();
    var fetchedmarks = Array();
    var maxmarks = Array();   
    var grades = Array();   
    for(var i=0;i<6;i++){  
            
        var sb = document.getElementById("sb"+i).value;
        var fm = parseInt(document.getElementById("fm"+i).value);
        var tm = parseInt(document.getElementById("tm"+i).value);
        
        if(fm>tm){
            alert("Obtained marks cannot be greater than total marks");
            return false;
        }
        subj[i] = sb;
        fetchedmarks[i] = fm;
        maxmarks[i] = tm;
        grades[i] =getGrade(fm,tm);        
    }
    var status = getStatus(grades);

    document.getElementById("applicationfront").style.display = "none";
    document.getElementById("marksheet").style.display = "block";
    document.getElementById("dsname").innerHTML = sname;
    document.getElementById("dsem").innerHTML = sem;
    document.getElementById("decode").innerHTML = ecode;
    
    for(var j=0; j<6; j++){        
        document.getElementById("sn"+j).innerHTML=subj[j];
        document.getElementById("mk"+j).innerHTML=fetchedmarks[j];
        document.getElementById("ttm"+j).innerHTML = maxmarks[j];
        document.getElementById("gr"+j).innerHTML = grades[j];        
    }
    document.getElementById("stat").innerHTML = status;
}