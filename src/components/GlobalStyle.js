import { createGlobalStyle } from "styled-components";
import reset from "reset-css";

export default createGlobalStyle`
  ${reset}

html {
    --color-background-prim: #2f2f2f;
    --color-background-sec: #5f5f5f;
    --color-accent-prim: #ff9505;
    --color-accent-sec: #e2711d;
    --color-text: #f2f2f2;
    }

:root {
    position: relative;
    min-height: 100vh;
    width:100vw;
    margin:auto;
    font-size: 62.5%;
    color: var(--color-text);
    font-family: 'roboto medium';}
html, *{box-sizing: border-box;}
*,*:before,*:after {box-sizing: inherit;}
::-webkit-scrollbar {
    display: none;
}
body{
    background-color: var(--color-background-prim);
    color: var(--color-text);
    font-family: 'Roboto';
    text-align: left;
    margin-bottom:50px;
}
/*------airtable_item-------*/
.airtable_item {
  width:85%;
  margin: 0 auto 32px;
  padding-bottom:8px;
  border-bottom:solid 1px var(--color-background-sec);
  /*---Grid-layout---*/
  display: grid;
  grid-gap:2%;
  grid-template-columns:59% 39%;
  
}
.airtable_item_prestaties {
  width:85%;
  margin: 0 auto 32px;
  padding-bottom:8px;
  border-bottom:solid 1px var(--color-background-sec); 
}

.airtable_item .card_data {
  display: block;
  width: 100%;
}

.airtable_item .card_img {
  grid-column:2/3;
  object-fit: cover;  
}
.airtable_item .card_bio {
  grid-column:1/3;  
}

.airtable_item .card_img img {
  display: block;
  width:100%;
  object-fit: cover;
}

.airtable_item .card_data h1, .airtable_item_prestaties .card_data h2, h2{
  font-size: 20px;
  text-transform: uppercase;
  color: var(--color-accent-prim);
  margin-bottom:11px;
}
.airtable_item_prestaties .card_data h2{
  font-size: 14px;
  }

.airtable_item .card_data p,.airtable_item .card_bio p {
  margin-bottom:6px;
  font-size: 14px;
  line-height: 18px;
  font-family: sans-serif;
  color: var(--color-text);
}

.airtable_item_prestaties .card_data p{
  padding-top: 8px;
}

/*-------main_style-------*/

a{
  text-transform: capitalize;
  text-decoration: none;
  display: inline-block;
  font-family: "roboto light";
  font-size: 2.5vh;}

img{
  border-radius:100px;
 }

button{
  display: block;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  border-radius:100px;
  height:40px;
  width:40px;
  font-size: 30px;
  margin: 24px auto;
  border:var(--color-accent-prim) solid 1px;
  background-color: var(--color-background-sec);
  color: var(--color-accent-prim);
  -webkit-box-shadow: var(--color-accent-prim);
  box-shadow: var(--color-accent-prim);}

/*-------Nav_style-------*/
nav ul{
  display:flex;
  flex-direction:row;
  width: 100%;
  justify-content: space-between;
}
nav a{ 
  font-size: 24px;
  font-weight:500;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-accent-prim);
  background-color:var(--color-background-prim);
  width:85%;
  padding: 6px;
  margin-top:20px;    
  border-bottom: solid 1px var(--color-background-sec);}
nav a:focus{
  border-bottom: solid 1px var(--color-accent-sec);
}
nav a:focus{color: var(--color-accent-sec);}
nav ul {
  flex-direction:column;
  text-align:center;
}


/*-------Form_style-------*/
 
form{
  width:85%;
  margin: 32px auto;
}
form label{
  display:block;
  margin:12px 18px;
  font-size:14px;
}
form input, form select{
  border-radius:50px;
  height:30px;
  width: 100%;
  padding-left:14px;
}




/*------------------------*/
.nav_img{
  border-radius:0px;
  height:20px;
  margin-right:10px;
}


.logo {
  display: block;
  width: 50%;
  margin: 25px auto 0px;
  border-radius: 0;
}
.grid_prestatie{
  display:grid !important;
  grid-template-columns:45% 50% 5%;
  width:100%;
  
}

.text_right{
  text-align:right;
}

.vriendCode{
  width:85%;
  margin:auto;
  text-align:center;
}
.vriendCode p{
  font-size:14px;
}

.maadje_toevoegen{
  width:85%;
  margin:auto;
}

.maadje_toevoegen_grid{
  display:grid;
  grid-template-columns:85% 10%;
  grid-gap:5%;
}

.maadje_toevoegen_grid input{
  width: 100%;
  border-radius: 50px;
  text-align: center;
  height:30px;
  margin-top:5px;
}

.maadje_toevoegen_grid button{
  margin:0;
}




`;
