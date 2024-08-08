const headbutton=document.getElementById("headbutton");
const tailbutton=document.getElementById("tailbutton");
const head=document.getElementById("head");
const tail=document.getElementById("tail");
const frontpage=document.getElementById("frontpage");
const toss=document.getElementById("toss");
const tossresult=document.getElementById("tossresult");
const secondpage=document.getElementById("secondpage");
const thirdpage=document.getElementById("thirdpage");
const fourthpage=document.getElementById("fourthpage");
const pcchoice=document.getElementById("pcchoice");
const batchoice=document.getElementById("bat");
const bowlchoice=document.getElementById("bowl");
const one=document.getElementById("one");
const two=document.getElementById("two");
const three=document.getElementById("three");
const four=document.getElementById("four");
const five=document.getElementById("five");
const six=document.getElementById("six");
const seven=document.getElementById("seven");
const eight=document.getElementById("eight");
const nine=document.getElementById("nine");
const ten=document.getElementById("ten");
const stroke=document.getElementById("stroke");
const spin=document.getElementById("spin");
const playerscore=document.getElementById("playerscore");
const pcscore=document.getElementById("pcscore");
const fifthpage=document.getElementById("fifthpage");
const playerfinal=document.getElementById("playerfinal");
const pcfinal=document.getElementById("pcfinal");
const replay=document.getElementById("replay");
var val1,val2,pc,playerchoice,pcvalue,playervalue,playerbat="no",playerbowl="no";
var playerscoreval=0,pcscoreval=0;
headbutton.onclick=headbuttonfuc;
function headbuttonfuc()
{
   val1="head";
   randomfuc1();
}
tailbutton.onclick=tailbuttonfuc;
function tailbuttonfuc()
{
   val1="tail";
   randomfuc1();
}
function randomfuc1()
{
    let a=Math.random()*10;
    if(2.5>a || (a>5 && a<7.5))
    {
       val2="head";
       head.style.display="inline-block";
       toss.style.display="none";
       tail.style.display="none";
    }
    else{
       val2="tail";
       tail.style.display="inline-block";
       toss.style.display="none"; 
       head.style.display="none";
    }
    if(val1==val2){
        tossresult.textContent="you won toss";
        setTimeout(secondpagefuc,1500);
    }
    else{
        tossresult.textContent="you loss toss";
        setTimeout(thirdpagefuc,1500);
    }
}
function secondpagefuc()
{
    frontpage.style.display="none";
    secondpage.style.display="block";
}
function thirdpagefuc()
{
    frontpage.style.display="none";
    thirdpage.style.display="block";
    let a=Math.random()*10;
    if(5>a){
        pc="BAT";
        pcchoice.textContent=pc;
        setTimeout(fourthpagebowl,1500);
    }
    else{
        pc="BOWL";
        pcchoice.textContent=pc;
        setTimeout(fourthpagebat,1500);
    }
}
batchoice.onclick=batchoicefuc;
bowlchoice.onclick=bowlchoicefuc;
function batchoicefuc()
{
    playerchoice="bat";
    setTimeout(fourthpagebat,1500);
}
function bowlchoicefuc()
{
    playerchoice="bowl";
    setTimeout(fourthpagebowl,1500);
}
function fourthpagebat()
{
    secondpage.style.display="none";
    thirdpage.style.display="none";
    fourthpage.style.display="block";
    document.getElementById("batimg").style.display="block";
    document.getElementById("pcbowlimg").style.display="block";
    document.getElementById("bowlimg").style.display="none";
    document.getElementById("pcbatimg").style.display="none";
    spin.style.display="none";
    stroke.style.display="block";
    document.getElementById("pcspin").style.display="block";
    document.getElementById("pcstroke").style.display="none";
}
function fourthpagebowl()
{
    secondpage.style.display="none";
    thirdpage.style.display="none";
    fourthpage.style.display="block";
    document.getElementById("pcbatimg").style.display="block";
    document.getElementById("bowlimg").style.display="block";
    document.getElementById("pcbowlimg").style.display="none";
    document.getElementById("batimg").style.display="none";
    spin.style.display="block";
    stroke.style.display="none";
    document.getElementById("pcspin").style.display="none";
    document.getElementById("pcstroke").style.display="block";
}
one.onclick=onefuc;
function onefuc()
{
    img(a="oneimg",b="twoimg",c="threeimg",d="fourimg",e="fiveimg",
        f="siximg",g="sevenimg",h="eightimg",i="nineimg",j="tenimg",
        k="strokeimg",l="spinimg");
        randomnumber();
        playervalue=1;
        score();
}
two.onclick=twofuc;
function twofuc()
{
    img(a="twoimg",b="oneimg",c="threeimg",d="fourimg",e="fiveimg",
        f="siximg",g="sevenimg",h="eightimg",i="nineimg",j="tenimg",
        k="strokeimg",l="spinimg");
        randomnumber();
        playervalue=2;
        score();
}
three.onclick=threefuc;
function threefuc()
{
    img(a="threeimg",b="twoimg",c="oneimg",d="fourimg",e="fiveimg",
        f="siximg",g="sevenimg",h="eightimg",i="nineimg",j="tenimg",
        k="strokeimg",l="spinimg");
        randomnumber();
        playervalue=3;
        score();
}
four.onclick=fourfuc;
function fourfuc()
{
    img(a="fourimg",b="twoimg",c="threeimg",d="oneimg",e="fiveimg",
        f="siximg",g="sevenimg",h="eightimg",i="nineimg",j="tenimg",
        k="strokeimg",l="spinimg");
        randomnumber();
        playervalue=4;
        score();
}
five.onclick=fivefuc;
function fivefuc()
{
    img(a="fiveimg",b="twoimg",c="threeimg",d="fourimg",e="oneimg",
        f="siximg",g="sevenimg",h="eightimg",i="nineimg",j="tenimg",
        k="strokeimg",l="spinimg");
        randomnumber();
        playervalue=5;
        score();
}
six.onclick=sixfuc;
function sixfuc()
{
    img(a="siximg",b="twoimg",c="threeimg",d="fourimg",e="fiveimg",
        f="oneimg",g="sevenimg",h="eightimg",i="nineimg",j="tenimg",
        k="strokeimg",l="spinimg");
        randomnumber();
        playervalue=6;
        score();
}
seven.onclick=sevenfuc;
function sevenfuc()
{
    img(a="sevenimg",b="twoimg",c="threeimg",d="fourimg",e="fiveimg",
        f="siximg",g="oneimg",h="eightimg",i="nineimg",j="tenimg",
        k="strokeimg",l="spinimg");
        randomnumber();
        playervalue=7;
        score();
}
eight.onclick=eightfuc;
function eightfuc()
{
    img(a="eightimg",b="twoimg",c="threeimg",d="fourimg",e="fiveimg",
        f="siximg",g="sevenimg",h="oneimg",i="nineimg",j="tenimg",
        k="strokeimg",l="spinimg");
        randomnumber();
        playervalue=8;
        score();
}
nine.onclick=ninefuc;
function ninefuc()
{
    img(a="nineimg",b="twoimg",c="threeimg",d="fourimg",e="fiveimg",
        f="siximg",g="sevenimg",h="eightimg",i="oneimg",j="tenimg",
        k="strokeimg",l="spinimg");
        randomnumber();
        playervalue=9;
        score();
}
ten.onclick=tenfuc;
function tenfuc()
{
    img(a="tenimg",b="twoimg",c="threeimg",d="fourimg",e="fiveimg",
        f="siximg",g="sevenimg",h="eightimg",i="nineimg",j="oneimg",
        k="strokeimg",l="spinimg");
        randomnumber();
        playervalue=10;
        score();
}
stroke.onclick=strokefuc;
function strokefuc()
{
    img(a="strokeimg",b="twoimg",c="threeimg",d="fourimg",e="fiveimg",
        f="siximg",g="sevenimg",h="eightimg",i="nineimg",j="tenimg",
        k="oneimg",l="spinimg");
        randomnumber();
        playervalue="stroke";
        score();
}
spin.onclick=spinfuc;
function spinfuc()
{
    img(a="spinimg",b="twoimg",c="threeimg",d="fourimg",e="fiveimg",
        f="siximg",g="sevenimg",h="eightimg",i="nineimg",j="tenimg",
        k="strokeimg",l="oneimg");
        randomnumber();
        playervalue="spin";
        score();
}
function img(a,b,c,d,e,f,g,h,i,j,k,l)
{
    document.getElementById(a).style.display="block";
    document.getElementById(b).style.display="none";
    document.getElementById(c).style.display="none";
    document.getElementById(d).style.display="none";
    document.getElementById(e).style.display="none";
    document.getElementById(f).style.display="none";
    document.getElementById(g).style.display="none";
    document.getElementById(h).style.display="none";
    document.getElementById(i).style.display="none";
    document.getElementById(j).style.display="none";
    document.getElementById(k).style.display="none";
    document.getElementById(l).style.display="none";
}
function randomnumber()
{
    a=Math.random()*100;
    if(10>=a)
    {
        if(pc=="BAT" || playerchoice=="bowl"){
        img(a="pcstrokeimg",b="pctwoimg",c="pcthreeimg",d="pcfourimg",e="pcfiveimg",
            f="pcsiximg",g="pcsevenimg",h="pceightimg",i="pcnineimg",j="pctenimg",
            k="pconeimg",l="pcspinimg");
            pcvalue="stroke";}
        else 
        {
            img(a="pcspinimg",b="pctwoimg",c="pcthreeimg",d="pcfourimg",e="pcfiveimg",
            f="pcsiximg",g="pcsevenimg",h="pceightimg",i="pcnineimg",j="pctenimg",
            k="pconeimg",l="pcstrokeimg");
            pcvalue="spin";
        }
    }
    else if(18>=a && a>10)
    {
        img(a="pconeimg",b="pctwoimg",c="pcthreeimg",d="pcfourimg",e="pcfiveimg",
            f="pcsiximg",g="pcsevenimg",h="pceightimg",i="pcnineimg",j="pctenimg",
            k="pcstrokeimg",l="pcspinimg");
            pcvalue=1;
    }
    else if(26>=a && a>18)
    {
        img(a="pctwoimg",b="pconeimg",c="pcthreeimg",d="pcfourimg",e="pcfiveimg",
            f="pcsiximg",g="pcsevenimg",h="pceightimg",i="pcnineimg",j="pctenimg",
            k="pcstrokeimg",l="pcspinimg");
            pcvalue=2;
    }
    else if(34>=a && a>26)
    {
        img(a="pcthreeimg",b="pconeimg",c="pctwoimg",d="pcfourimg",e="pcfiveimg",
            f="pcsiximg",g="pcsevenimg",h="pceightimg",i="pcnineimg",j="pctenimg",
            k="pcstrokeimg",l="pcspinimg");
            pcvalue=3;
    }
    else if(42>=a && a>34)
    {
        img(a="pcfourimg",b="pconeimg",c="pcthreeimg",d="pctwoimg",e="pcfiveimg",
            f="pcsiximg",g="pcsevenimg",h="pceightimg",i="pcnineimg",j="pctenimg",
            k="pcstrokeimg",l="pcspinimg");
            pcvalue=4;
    }
    else if(50>=a && a>42)
    {
        img(a="pcfiveimg",b="pconeimg",c="pcthreeimg",d="pcfourimg",e="pctwoimg",
            f="pcsiximg",g="pcsevenimg",h="pceightimg",i="pcnineimg",j="pctenimg",
            k="pcstrokeimg",l="pcspinimg");
            pcvalue=5;
    }
    else if(60>=a && a>50)
    {
        img(a="pcsiximg",b="pconeimg",c="pcthreeimg",d="pcfourimg",e="pcfiveimg",
            f="pctwoimg",g="pcsevenimg",h="pceightimg",i="pcnineimg",j="pctenimg",
            k="pcstrokeimg",l="pcspinimg");
            pcvalue=6;
    }
    else if(70>=a && a>60)
    {
        img(a="pcsevenimg",b="pctwoimg",c="pcthreeimg",d="pcfourimg",e="pcfiveimg",
            f="pcsiximg",g="pconeimg",h="pceightimg",i="pcnineimg",j="pctenimg",
            k="pcstrokeimg",l="pcspinimg");
            pcvalue=7;
    }
    else if(80>=a && a>70)
    {
        img(a="pceightimg",b="pctwoimg",c="pcthreeimg",d="pcfourimg",e="pcfiveimg",
            f="pcsiximg",g="pcsevenimg",h="pconeimg",i="pcnineimg",j="pctenimg",
            k="pcstrokeimg",l="pcspinimg");
            pcvalue=8;
    }
    else if(90>=a && a>80)
    {
        img(a="pcnineimg",b="pctwoimg",c="pcthreeimg",d="pcfourimg",e="pcfiveimg",
            f="pcsiximg",g="pcsevenimg",h="pceightimg",i="pconeimg",j="pctenimg",
            k="pcstrokeimg",l="pcspinimg");
            pcvalue=9;
    }
    else if(100>=a && a>90)
    {
        img(a="pctenimg",b="pctwoimg",c="pcthreeimg",d="pcfourimg",e="pcfiveimg",
            f="pcsiximg",g="pcsevenimg",h="pceightimg",i="pcnineimg",j="pconeimg",
            k="pcstrokeimg",l="pcspinimg");
            pcvalue=10;
    }
}
function score()
{
    if(playervalue==pcvalue || (playervalue=="stroke" && pcvalue=="spin") || (playervalue=="spin" && pcvalue=="stroke"))
    {
        if(playerchoice=="bat" || pc=="BOWL")
        {
            document.getElementById("out1").style.display="block";
            setTimeout(remove,1500,"out1");
            playerbat="yes";
            playerchoice="bowl";
            pc="BAT";
            fourthpagebowl();
        }
        else{
            document.getElementById("out2").style.display="block";
            setTimeout(remove,1500,"out2");
            playerbowl="yes";
            playerchoice="bat";
            pc="BOWL";
            fourthpagebat();
        }
        played();
    }
    else
    {
        if(playervalue=="stroke")
        {
            playervalue=pcvalue;
        }
        if(pcvalue=="stroke")
        {
            pcvalue=playervalue;
        }
        if(playervalue=="spin" || pcvalue=="spin")
        {
            playervalue=0;
            pcvalue=0;
        }
        if(playerchoice=="bat" || pc=="BOWL")
        {
            playerscoreval+=playervalue;
            playerscore.textContent=playerscoreval;
        }
        if(playerchoice=="bowl" || pc=="BAT"){
            pcscoreval+=pcvalue;
            pcscore.textContent=pcscoreval;
        }
        played();
    }
}
function remove(a)
{
    document.getElementById(a).style.display="none";
}
function played()
{
    if(playerbat=="yes" && playerbowl=="yes")
    {
        setTimeout(fifthpagefuc,500);
    }
    else if((playerchoice=="bowl") && (playerbat=="yes") && (pcscoreval > playerscoreval)){
        setTimeout(fifthpagefuc,500);
    }
    else if((playerchoice=="bat") && (playerbowl=="yes") && (playerscoreval > pcscoreval)){
        setTimeout(fifthpagefuc,500);
    }
}
function fifthpagefuc()
{
    fourthpage.style.display="none";
    fifthpage.style.display="block";
    playerfinal.textContent=playerscoreval;
    pcfinal.textContent=pcscoreval;
    if(playerscoreval > pcscoreval)
    {
        document.getElementById("final").textContent="You won the match";
    }
    else if(playerscoreval == pcscoreval)
    {
        document.getElementById("final").textContent="match die";
    }
    else{
        document.getElementById("final").textContent="You loss the match";
    }
} 
replay.onclick=replayfuc;
function replayfuc()
{
    fifthpage.style.display="none";
    frontpage.style.display="block";
    playerbat="no";
    playerbowl="no";
    playerscoreval=0;
    pcscoreval=0;
    playerscore.textContent=0;
    pcscore.textContent=0;
    tossresult.textContent="";
    toss.style.display="inline-block";
    head.style.display="none";
    tail.style.display="none";
    playerchoice="";
    pc="";
}