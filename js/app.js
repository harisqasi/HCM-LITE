
    /* ---------- mock dataset & state prerequisites ---------- */
    const TREND = [19, 21, 20, 22, 25, 23, 21, 22, 24, 23, 25, 22, 24, 23];

    const DEPTS = [
      ["Engineering", "#5b4fcf"],
      ["Sales", "#0f9d8a"],
      ["Marketing", "#d9821c"],
      ["HR", "#e03e52"],
      ["Design", "#8b5cf6"]
    ];

    const EMP = [
      { id: 1, name: "Ada Admin", dept: "HR", desig: "VP of People & Culture", code: "EMP-001", col: "#5b4fcf", st: "present", in: "08:50 AM", lates: 0, basic: 180000, gross: 270000, ded: 12000, tax: 28000, net: 230000 },
      { id: 2, name: "Haris Qasim", dept: "Engineering", desig: "Lead Full-Stack Engineer", code: "EMP-002", col: "#0f9d8a", st: "present", in: "09:02 AM", lates: 1, basic: 145000, gross: 217500, ded: 8500, tax: 21000, net: 188000 },
      { id: 3, name: "Bilal Ahmed", dept: "Engineering", desig: "Senior Backend Developer", code: "EMP-003", col: "#d9821c", st: "present", in: "09:04 AM", lates: 2, basic: 120000, gross: 180000, ded: 7000, tax: 16000, net: 157000 },
      { id: 4, name: "Zainab Fatima", dept: "Marketing", desig: "Growth Lead", code: "EMP-004", col: "#e03e52", st: "leave", in: "-", lates: 0, basic: 110000, gross: 165000, ded: 6500, tax: 14000, net: 144500 },
      { id: 5, name: "Usman Tariq", dept: "Sales", desig: "Enterprise Account Exec", code: "EMP-005", col: "#8b5cf6", st: "late", in: "09:35 AM", lates: 6, basic: 105000, gross: 157500, ded: 9000, tax: 13500, net: 135000 },
      { id: 6, name: "Fatima Noor", dept: "Design", desig: "Lead Product Designer", code: "EMP-006", col: "#ec4899", st: "present", in: "08:58 AM", lates: 0, basic: 125000, gross: 187500, ded: 7500, tax: 17000, net: 163000 },
      { id: 7, name: "Omer Farooq", dept: "Engineering", desig: "DevOps Engineer", code: "EMP-007", col: "#3b82f6", st: "late", in: "09:22 AM", lates: 4, basic: 130000, gross: 195000, ded: 8000, tax: 18000, net: 169000 },
      { id: 8, name: "Hira HR", dept: "HR", desig: "HR Operations Partner", code: "EMP-008", col: "#10b981", st: "present", in: "08:45 AM", lates: 0, basic: 95000, gross: 142500, ded: 5500, tax: 11000, net: 126000 },
      { id: 9, name: "Saad Sheikh", dept: "Sales", desig: "Regional Sales Manager", code: "EMP-009", col: "#f59e0b", st: "present", in: "08:55 AM", lates: 3, basic: 115000, gross: 172500, ded: 7000, tax: 15000, net: 150500 },
      { id: 10, name: "Mariam Siddiqui", dept: "Marketing", desig: "Content Strategist", code: "EMP-010", col: "#06b6d4", st: "leave", in: "-", lates: 1, basic: 90000, gross: 135000, ded: 5000, tax: 10000, net: 120000 },
      { id: 11, name: "Kashif Riaz", dept: "Engineering", desig: "Frontend Specialist", code: "EMP-011", col: "#6366f1", st: "present", in: "09:01 AM", lates: 2, basic: 100000, gross: 150000, ded: 6000, tax: 12000, net: 132000 },
      { id: 12, name: "Areeba Shah", dept: "Design", desig: "UI/UX Researcher", code: "EMP-012", col: "#14b8a6", st: "present", in: "08:52 AM", lates: 0, basic: 98000, gross: 147000, ded: 5800, tax: 11500, net: 129700 }
    ];

    const ME = EMP[1]; // Logged in as Hamza Ali in employee mode

    const PRES = EMP.filter(e => e.st === "present" || e.st === "late").length;
    const cnt = s => EMP.filter(e => e.st === s).length;
    const rnd = () => Math.random();

    const LEAVES = [
      [3, "Annual", "27 Oct - 29 Oct", 3, "Sister's wedding and family travel", "pending"],
      [9, "Sick", "25 Oct", 1, "Flu and medical appointment", "pending"],
      [4, "Casual", "28 Oct - 29 Oct", 2, "Urgent home relocation tasks", "pending"],
      [1, "Casual", "15 Oct", 1, "Personal errand", "approved"],
      [6, "Annual", "01 Oct - 05 Oct", 5, "Vacation trip", "approved"]
    ];

    const ANN = [
      ["Annual Company Offsite", "All teams will gather in Bhurban for our 3-day strategic planning and team retreat.", "Oct 28 - 30"],
      ["Updated Health Insurance Policy", "New outpatient and OPD limits are active. Download your e-health cards from portal.", "Important"],
      ["New Biometric & Flexible Hours", "Morning grace time is 15 minutes (till 09:15 AM). Flexible punch-in between 8:30 - 9:30 AM.", "Policy"]
    ];

    const FEED = [
      "Hira approved casual leave for Zainab",
      "System generated October 2026 payroll draft",
      "Bilal checked in via Web Kiosk at 09:04 AM",
      "Admin added Engineering - Mobile Dev unit",
      "Zainab requested attendance correction",
      "Fatima downloaded September payslip PDF"
    ];

    /* ---------- helpers ---------- */
    const $=s=>document.querySelector(s),S={role:"admin",view:"dash",q:"",dept:"All",chat:[["a","Hi! Ask me about attendance, leave or payroll. I answer from your company data."]],fin:false,done:{}};
    const ini=n=>n.split(" ").map(x=>x[0]).join(""),money=n=>Math.round(n).toLocaleString(),esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
    const av=(e,s=36)=>`<div class="av" style="background:${e.col};width:${s}px;height:${s}px">${ini(e.name)}</div>`;
    const pill=s=>`<span class="pill ${s}">${s}</span>`;
    const kpi=(ic,bg,n,l,t)=>`<div class="c kpi"><div class="ic" style="background:${bg}">${ic}</div><div><div class="n" data-n="${n}">${n}</div><div class="mu">${l}</div>${t?`<div class="up">${t}</div>`:""}</div></div>`;
    const ring=(p,col,l)=>`<div style="text-align:center"><div class="ring"><svg viewBox="0 0 36 36" width="84" height="84"><circle cx="18" cy="18" r="15.9" fill="none" stroke="var(--ln)" stroke-width="3.4"/><circle cx="18" cy="18" r="15.9" fill="none" stroke="${col}" stroke-width="3.4" stroke-linecap="round" stroke-dasharray="${p} 100" pathLength="100"/></svg><span>${Math.round(p)}%</span></div><p class="mu">${l}</p></div>`;
    function line(){const w=600,h=170,mx=26,pts=TREND.map((v,i)=>[i*(w/13),h-v/mx*h+8]),d=pts.map((p,i)=>(i?"L":"M")+p[0].toFixed(0)+" "+p[1].toFixed(0)).join(" ");
     return`<svg class="line" viewBox="0 0 ${w} ${h+16}" width="100%"><defs><linearGradient id="gr" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5b4fcf" stop-opacity=".35"/><stop offset="1" stop-color="#5b4fcf" stop-opacity="0"/></linearGradient></defs><path class="a" d="${d} L${w} ${h+16} L0 ${h+16}Z" fill="url(#gr)"/><path class="l" d="${d}" fill="none" stroke="#5b4fcf" stroke-width="3" stroke-linecap="round"/>${pts.map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="3.5" fill="var(--sf)" stroke="#5b4fcf" stroke-width="2"/>`).join("")}</svg>`}
    function donut(){let o=0;const t=EMP.length;return`<div class="row" style="gap:18px;flex-wrap:wrap"><svg class="dn" viewBox="0 0 36 36" width="150" height="150" style="transform:rotate(-90deg)">${DEPTS.map(([n,c])=>{const p=EMP.filter(e=>e.dept===n).length/t*100,s=`<circle cx="18" cy="18" r="15.9" fill="none" stroke="${c}" stroke-width="4.6" pathLength="100" stroke-dasharray="${p-1} ${101-p}" stroke-dashoffset="${-o}"/>`;o+=p;return s}).join("")}</svg><div>${DEPTS.map(([n,c])=>`<p class="row"><i style="width:10px;height:10px;border-radius:3px;background:${c}"></i>${n} <b>${EMP.filter(e=>e.dept===n).length}</b></p>`).join("")}</div></div>`}
    /* ---------- views ---------- */
    const V={
    dash(){const emp=S.role==="employee",hr=new Date().getHours(),g=hr<12?"Good morning":hr<18?"Good afternoon":"Good evening";
     if(emp)return`<div class="pg"><div class="hero"><div style="flex:1"><h1>${g}, ${ME.name.split(" ")[0]}</h1><p>${ME.desig}, ${ME.dept}. You checked in at ${ME.in}.</p></div><button class="btn w" onclick="toast('Checked out. See you tomorrow!')">Check out</button></div>
     <div class="g k5">${kpi("⏱","var(--tlb)","38.5","Hours this week","+2.1 h vs last week")}${kpi("⏰","var(--amb)",ME.lates,"Late count")}${kpi("🌴","var(--vib)","6","Casual days left")}${kpi("💳","var(--tlb)",money(ME.net),"Last payslip","Paid on 1 Oct")}</div>
     <div class="g g2"><div class="c"><h2>My leave balance</h2><div class="row" style="justify-content:space-around">${ring(43,"#5b4fcf","Annual 8 of 14")}${ring(75,"#0f9d8a","Sick 6 of 8")}${ring(60,"#d9821c","Casual 6 of 10")}</div></div>
     <div class="c"><h2>Announcements</h2>${ANN.map(a=>`<div class="tl"><p><b>${a[0]}</b><br><span class="mu">${a[1]}</span></p></div>`).join("")}</div></div></div>`;
     const late=EMP.filter(e=>e.lates).sort((a,b)=>b.lates-a.lates).slice(0,5),mx=late[0].lates;
     return`<div class="pg"><div class="hero"><div style="flex:1"><h1>${g}, ${S.role==="admin"?"Admin":"HR team"}</h1><p>${PRES} of ${EMP.length} employees are in today. ${cnt("leave")} on leave, ${LEAVES.filter(l=>l[5]==="pending").length} approvals waiting.</p></div><button class="btn w" onclick="go('leave')">Review requests</button></div>
     <div class="g k5">${kpi("👥","var(--tlb)",EMP.length,"Headcount","+3 this month")}${kpi("✅","var(--tlb)",PRES,"Present today")}${kpi("🌴","var(--vib)",cnt("leave"),"On leave")}${kpi("⏰","var(--amb)",cnt("late"),"Late today")}${kpi("📝","var(--rdb)",3,"Pending approvals")}</div>
     <div class="g g2"><div class="c"><h2>Check-ins, last 14 days</h2>${line()}</div><div class="c"><h2>Headcount by department</h2>${donut()}</div></div>
     <div class="g g3"><div class="c"><h2>Top late-comers</h2><div class="hb">${late.map((e,i)=>`<div><b>${e.lates}</b><i style="height:${e.lates/mx*100}%;background:${e.col};animation-delay:${i*.1}s"></i>${e.name.split(" ")[0]}</div>`).join("")}</div></div>
     <div class="c"><h2>On leave today</h2>${EMP.filter(e=>e.st==="leave").map(e=>`<p class="row" style="margin-bottom:8px">${av(e,30)}<span>${e.name}<br><span class="mu">${e.dept}</span></span></p>`).join("")}</div>
     <div class="c" style="background:linear-gradient(145deg,var(--vib),var(--sf))"><h2>AI summary <span class="pill ai">AI-generated</span></h2><p id="sum" class="mu" style="min-height:130px;line-height:1.7"></p><button class="btn v" onclick="typeSum()">Summarize again</button></div></div>
     <div class="g g2"><div class="c"><h2>Recent activity</h2><div class="tl">${FEED.map(f=>`<p>${f}</p>`).join("")}</div></div><div class="c"><h2>Announcements</h2>${ANN.map(a=>`<div class="tl"><p><b>${a[0]}</b><br><span class="mu">${a[2]}</span></p></div>`).join("")}</div></div></div>`},
    emps(){const L=EMP.filter(e=>(S.dept==="All"||e.dept===S.dept)&&e.name.toLowerCase().includes(S.q.toLowerCase()));
     return`<div class="pg"><div class="bar"><h1>Employees</h1><span class="pill">${L.length} shown</span></div><input class="inp" id="q" placeholder="Search by name" value="${esc(S.q)}" oninput="S.q=this.value;list()" style="margin-bottom:12px"><div class="ch">${["All",...DEPTS.map(d=>d[0])].map(d=>`<button class="chip ${S.dept===d?"on":""}" onclick="S.dept='${d}';render()">${d}</button>`).join("")}</div><div class="g g3" id="grid">${cards(L)}</div></div>`},
    att(){const rate=d=>EMP.filter(e=>e.dept===d).length;
     return`<div class="pg"><div class="bar"><h1>Attendance</h1><span class="pill">Today</span></div><div class="c"><h2>Daily board</h2><div class="tw"><table><tr><th>Employee</th><th>Department</th><th>Check-in</th><th>Status</th></tr>${EMP.slice(0,12).map(e=>`<tr><td><div class="row">${av(e,28)}${e.name}</div></td><td>${e.dept}</td><td>${e.st==="leave"||e.st==="absent"?"-":e.in}</td><td>${pill(e.st)}</td></tr>`).join("")}</table></div></div>
     <div class="c" style="margin-top:14px"><h2>Attendance heatmap, last 14 days</h2><div class="heat">${DEPTS.map(([n,c])=>`<span>${n}</span>`+Array.from({length:14},(_,i)=>`<b title="${n}" style="background:${c};opacity:${.25+rnd()*.75};animation-delay:${i*.03}s"></b>`).join("")).join("")}</div></div></div>`},
    leave(){const emp=S.role==="employee";
     return`<div class="pg"><div class="bar"><h1>Leave</h1><span class="pill pending">${LEAVES.filter((l,i)=>l[5]==="pending"&&!S.done[i]).length} pending</span></div>
     ${emp?`<div class="c" style="background:linear-gradient(145deg,var(--vib),var(--sf));margin-bottom:14px"><h2>Smart leave <span class="pill ai">AI</span></h2><div class="row"><input class="inp" id="sl" value="Need next Monday and Tuesday off for my sister’s wedding"><button class="btn v" onclick="toast('Form filled: casual leave, 2 working days. Confirm to send.')">Fill form</button></div></div>`:""}
     <div class="g g3">${LEAVES.map((l,i)=>{const e=EMP[l[0]],st=S.done[i]||l[5];return`<div class="c"><div class="row">${av(e,40)}<div style="flex:1"><b>${e.name}</b><br><span class="mu">${e.dept}</span></div>${pill(st)}</div><p style="margin:12px 0 4px"><b>${l[1]}</b> leave, ${l[3]} day${l[3]>1?"s":""}</p><p class="mu">${l[2]}<br>${l[4]}</p>${!emp&&st==="pending"?`<div class="row" style="margin-top:12px"><button class="btn" onclick="dec(${i},'approved')">Approve</button><button class="btn r" onclick="dec(${i},'rejected')">Reject</button></div>`:""}</div>`}).join("")}</div></div>`},
    pay(){const tot=k=>EMP.reduce((s,e)=>s+e[k],0),L=S.role==="employee"?[ME]:EMP.slice(0,14);
     return`<div class="pg"><div class="bar"><h1>${S.role==="employee"?"My payslips":"Payroll, October 2026"}</h1><span class="pill ${S.fin?"":"draft"}">${S.fin?"finalized":"draft"}</span><span class="sp"></span>${S.role==="hr"?`<button class="btn" onclick="toast('Draft refreshed')">Refresh draft</button>`:""}${S.role==="admin"&&!S.fin?`<button class="btn v" onclick="S.fin=true;toast('Payroll finalized and locked');render()">Finalize and lock</button>`:""}</div>
     ${S.role==="employee"?"":`<div class="g k5">${kpi("💰","var(--tlb)",money(tot("gross")/1000)+"k","Gross cost")}${kpi("🧾","var(--amb)",money(tot("tax")/1000)+"k","Tax")}${kpi("✂️","var(--rdb)",money(tot("ded")/1000)+"k","Deductions")}${kpi("🏦","var(--vib)",money(tot("net")/1000)+"k","Net pay")}</div>`}
     <div class="c"><div class="tw"><table><tr><th>Employee</th><th>Gross</th><th>Deductions</th><th>Tax</th><th>Net</th><th></th></tr>${L.map(e=>`<tr><td><div class="row">${av(e,28)}${e.name}</div></td><td>${money(e.gross)}</td><td>${money(e.ded)}</td><td>${money(e.tax)}</td><td><b>${money(e.net)}</b></td><td><button class="btn o" onclick="slip(${e.id-1})">Payslip</button></td></tr>`).join("")}</table></div></div></div>`},
    ai(){return`<div class="pg"><div class="bar"><h1>AI assistant</h1><span class="pill ai">AI-generated answers</span></div><div class="c"><div class="msgs" id="msgs">${S.chat.map(m=>`<div class="m ${m[0]==="u"?"u":""}">${m[1]}</div>`).join("")}</div><div class="ch" style="margin:12px 0">${["Who is on leave today?","Who came late most often?","What is the grace time?","What is Hamza’s salary?"].map(q=>`<button class="chip" onclick="ask('${q}')">${q}</button>`).join("")}</div><div class="row"><input class="inp" id="ci" placeholder="Ask about your data" onkeydown="if(event.key==='Enter')ask()"><button class="btn v" onclick="ask()">Send</button></div></div></div>`},
    ann(){return`<div class="pg"><div class="bar"><h1>Announcements</h1></div><div class="g g3">${ANN.map((a,i)=>`<div class="c"><span class="pill ${["","leave","late"][i]}">${a[2]}</span><h2 style="margin-top:10px">${a[0]}</h2><p class="mu">${a[1]}</p></div>`).join("")}</div></div>`},
    audit(){return`<div class="pg"><div class="bar"><h1>Audit log</h1><span class="pill">read only</span></div><div class="c"><div class="tw"><table><tr><th>When</th><th>Actor</th><th>Action</th><th>Entity</th></tr>${FEED.map((f,i)=>`<tr><td>${9+i}:${10+i*7} today</td><td>${["Hira","System","Bilal","Admin","Zainab","Fatima"][i]}</td><td>${["approve","create","check-in","create","request","download"][i]}</td><td>${["leave","payroll","attendance","department","correction","payslip"][i]}</td></tr>`).join("")}</table></div></div></div>`}};
    const cards=L=>L.length?L.map((e,i)=>`<div class="c" style="animation:rise .5s ${i*.03}s both"><div class="row">${av(e,46)}<div style="flex:1"><b>${e.name}</b><br><span class="mu">${e.desig}, ${e.dept}</span></div>${pill(e.st)}</div><div class="row b mu" style="margin-top:12px"><span>${e.code}</span><span>${S.role==="employee"?"":"Basic "+money(e.basic)}</span></div></div>`).join(""):`<p class="mu">No employees match this search.</p>`;
    const MENU={admin:[["dash","🏠","Dashboard"],["emps","👥","Employees"],["att","🕘","Attendance"],["leave","🌴","Leave"],["pay","💳","Payroll"],["ai","✨","AI assistant"],["ann","📣","Announcements"],["audit","🛡️","Audit log"]],
     hr:[["dash","🏠","Dashboard"],["emps","👥","Employees"],["att","🕘","Attendance"],["leave","🌴","Leave"],["pay","💳","Payroll"],["ai","✨","AI assistant"],["ann","📣","Announcements"]],
     employee:[["dash","🏠","My dashboard"],["att","🕘","Attendance"],["leave","🌴","Leave"],["pay","💳","Payslips"],["ai","✨","Ask assistant"],["ann","📣","Announcements"]]};
    /* ---------- actions ---------- */
    function toast(m){const t=document.createElement("div");t.className="toast";t.textContent=m;document.body.append(t);setTimeout(()=>t.remove(),2600)}
    function go(v){S.view=v;render()}
    function list(){$("#grid").innerHTML=cards(EMP.filter(e=>(S.dept==="All"||e.dept===S.dept)&&e.name.toLowerCase().includes(S.q.toLowerCase())))}
    function dec(i,s){S.done[i]=s;toast("Leave "+s);render()}
    function slip(i){const e=EMP[i],o=document.createElement("div");o.className="ov";o.onclick=ev=>{if(ev.target===o)o.remove()};
     o.innerHTML=`<div class="md"><div class="row b"><div class="row">${av(e,44)}<div><b>${e.name}</b><br><span class="mu">Payslip, October 2026</span></div></div><button class="btn o" onclick="this.closest('.ov').remove()">Close</button></div><table style="margin:14px 0"><tr><td>Basic</td><td>${money(e.basic)}</td></tr><tr><td>House rent (40%)</td><td>${money(e.basic*.4)}</td></tr><tr><td>Medical (10%)</td><td>${money(e.basic*.1)}</td></tr><tr><td>Deductions</td><td>-${money(e.ded)}</td></tr><tr><td>Tax</td><td>-${money(e.tax)}</td></tr><tr><td><b>Net pay</b></td><td><b>${money(e.net)}</b></td></tr></table><button class="btn" onclick="toast('Payslip PDF downloaded')">Download PDF</button></div>`;document.body.append(o)}
    function typeSum(){const el=$("#sum");if(!el)return;const t=`• ${PRES} of ${EMP.length} employees are in today, ${Math.round(PRES/EMP.length*100)}% attendance.\n• ${cnt("late")} people were late; ${EMP.slice().sort((a,b)=>b.lates-a.lates)[0].name} leads the month.\n• 3 leave requests are waiting for approval.\n• Engineering has the largest team with ${EMP.filter(e=>e.dept==="Engineering").length} people.`;el.textContent="";let i=0;clearInterval(window.tw);window.tw=setInterval(()=>{if(!$("#sum")||i>t.length){clearInterval(window.tw);return}el.textContent=t.slice(0,i++);el.style.whiteSpace="pre-line"},14)}
    function ans(q){q=q.toLowerCase();if(q.includes("salary"))return S.role==="employee"?"I can only share your own salary. Other employees’ data is private.":"Hamza Ali earns a basic of "+money(EMP[1].basic)+", gross "+money(EMP[1].gross)+".";
     if(q.includes("leave"))return cnt("leave")+" on leave today: "+EMP.filter(e=>e.st==="leave").map(e=>e.name).join(", ")+".";if(q.includes("late"))return EMP.slice().sort((a,b)=>b.lates-a.lates)[0].name+" came late most often this month ("+EMP.slice().sort((a,b)=>b.lates-a.lates)[0].lates+" times).";
     if(q.includes("grace")||q.includes("policy"))return"Office starts at 09:00 with a 15 minute grace time. Under 5 hours counts as a half day.";return"I do not know that yet. Try leave, late-comers or policy."}
    function ask(q){const i=$("#ci");q=q||(i&&i.value.trim());if(!q)return;S.chat.push(["u",esc(q)]);render();const box=$("#msgs");box.insertAdjacentHTML("beforeend",'<div class="m ty"><span></span><span></span><span></span></div>');box.scrollTop=1e9;
     setTimeout(()=>{S.chat.push(["a",ans(q)]);render();$("#msgs").scrollTop=1e9},900)}
    function render(){const m=MENU[S.role];if(!m.some(x=>x[0]===S.view))S.view="dash";const u=S.role==="employee"?ME:{name:S.role==="admin"?"Ada Admin":"Hira HR",col:"#5b4fcf"};
     $("#root").innerHTML=`<div class="app"><nav class="side"><div class="logo"><i>H</i>HCM Lite</div>${m.map(x=>`<button class="nv ${S.view===x[0]?"on":""}" onclick="go('${x[0]}')"><span>${x[1]}</span>${x[2]}</button>`).join("")}<div class="me">${av(u,34)}<div>${u.name}<br><span style="opacity:.6">${S.role}</span></div></div></nav>
     <main class="main"><div class="bar"><div class="seg">${["admin","hr","employee"].map(r=>`<button class="${S.role===r?"on":""}" onclick="S.role='${r}';render()">${r[0].toUpperCase()+r.slice(1)}</button>`).join("")}</div><span class="sp"></span><button class="ib" onclick="toast('3 new notifications')">🔔<i class="dot"></i></button><button class="ib" onclick="theme()">🌓</button></div>${V[S.view]()}</main></div>`;
     document.querySelectorAll("[data-n]").forEach(el=>{const t=el.dataset.n,n=parseFloat(t.replace(/,/g,""));if(isNaN(n))return;const sfx=t.replace(/[\d.,]/g,""),dec=t.includes(".")?1:0,t0=performance.now();(function f(t1){const p=Math.min(1,(t1-t0)/900);el.textContent=(n*p).toLocaleString(undefined,{maximumFractionDigits:dec,minimumFractionDigits:dec})+sfx;if(p<1)requestAnimationFrame(f)})(t0)});
     if(S.view==="dash"&&S.role!=="employee")typeSum()}
    function theme(){const r=document.documentElement,d=getComputedStyle(r).getPropertyValue("--bg").trim()==="#0e1426";r.dataset.theme=d?"light":"dark"}
    render();
