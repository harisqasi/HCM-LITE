/* ---------- dummy data ---------- */
const NAMES=["HarisQasim","Sana Malik","Bilal Ahmed","Fatima Noor","Usman Tariq","Zainab Raza","Hassan Iqbal","Maryam Sheikh","Ali Raza","Hira Baig","Omar Farooq","Nimra Aslam","Daniyal Shah","Iqra Siddiqui","Talha Mehmood","Areeba Javed","Saad Qureshi","Mahnoor Ali","Faizan Butt","Rabia Chaudhry","Junaid Anwar","Laiba Hussain","Kamran Yousuf"];
const DEPTS=[["Engineering","#0f9d8a"],["Design","#5b4fcf"],["HR","#d9821c"],["Sales","#2f80ed"],["Finance","#d64545"]];
const DES=["Developer","Team Lead","Analyst","Manager","Designer","Executive"];
let sd=11;const rnd=()=>(sd=sd*16807%2147483647)/2147483647;
const EMP=NAMES.map((n,i)=>{const r=rnd();return{id:i+1,code:"E"+String(i+1).padStart(3,"0"),name:n,dept:DEPTS[i%5][0],col:DEPTS[i%5][1],desig:DES[(i*3)%6],basic:60000+Math.floor(rnd()*15)*10000,
 st:r<.6?"present":r<.76?"late":r<.9?"leave":"absent",in:"09:"+String(Math.floor(rnd()*14)+(r<.6?0:16)).padStart(2,"0"),lates:Math.floor(rnd()*7)}});
const cnt=s=>EMP.filter(e=>e.st===s).length,PRES=cnt("present")+cnt("late");
const TREND=[19,21,20,22,18,23,21,22,20,23,22,21,24,PRES];
const tax=a=>a<=6e5?0:a<=1.2e6?.05*(a-6e5):a<=2.4e6?3e4+.15*(a-1.2e6):a<=3.6e6?2.1e5+.25*(a-2.4e6):5.1e5+.35*(a-3.6e6);
EMP.forEach(e=>{e.gross=1.5*e.basic;e.ded=Math.round(e.gross/22*(Math.floor(rnd()*3)+(e.lates>4?.5:0)));e.tax=Math.round(tax(e.gross*12)/12);e.net=Math.round(e.gross-e.ded-e.tax)});
const LEAVES=[[3,"casual","27 Oct to 28 Oct",2,"Sister’s wedding","pending"],[8,"sick","24 Oct",1,"Fever","pending"],[12,"annual","3 Nov to 7 Nov",5,"Family trip","pending"],[5,"casual","20 Oct",1,"Personal work","approved"],[17,"sick","21 Oct to 22 Oct",2,"Flu","approved"],[9,"annual","10 Oct to 14 Oct",3,"Travel","rejected"]];
const ANN=[["Eid holiday notice","Office stays closed on the public holiday. Plan handovers by Thursday.","HR · today"],["Payroll for October opens","HR will prepare the draft on the 28th. Check your bank details.","Admin · yesterday"],["Hackathon day","Teams meet at Zaitoon Ashraf IT Park on 24 October.","Admin · 2 days ago"]];
const FEED=["Hira approved Sana’s casual leave","Payroll draft for October created","Bilal checked in at 09:04","Admin added the Sales department","Zainab requested an attendance correction","Fatima downloaded her payslip"];
const ME=EMP[0];
