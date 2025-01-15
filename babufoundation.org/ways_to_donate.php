<?php include('header1.php');?>
			
				<div class="c-main-content">
<style>


.yui3-u-1-2 {max-width:100% !important;}

.c-featured__page-title {
    font-size: 1.25rem;
    line-height: 1.3125rem;
}

.featured-h1 {color: #FFF; font-size: 3rem; line-height: 3.2rem;}

@media only screen and (max-width: 999px) {
.c-featured__title {font-size: 2rem !important; line-height: 2.2rem !important;}
}

@media only screen and (max-width: 727px) {
.featured-h1 {font-size: 2rem; font-weight: 700;line-height: 2rem;color: #333;}
}

.rule-right {border-right: #333 solid 1px; padding-right: 30px;}

blockquote {
    color: #00a3c7;
    text-align: center;
    line-height: 2em;
    padding: 1em 3em;
    font-size: 1.3em;
}

blockquote span {
    font-size: .7em;
    display: block;
    line-height: 1.75em;
    margin-top: 1em;
}

.fund-info { padding: 10px 15px 5px 15px; min-height:150px; background:#efefef; }
.fund-info h5 { color: #0054a6; }
.fund-info h5 a { text-decoration: none; color: #0054a6; }
.copy-box { min-height:160px; }

.stat {
    font-size: 1.5em;
    font-weight: 700;
}

.green {
    color: #5a913a;
}

.right {
    float: right;
}

.center {
    text-align: center;
}

.image-holder img {
    width:100%;
}

p.small {
    font-size: small;
}

a.text-link {
    text-transform: uppercase;
}

.btm-border-strong {
    border-bottom: 2px solid #ccc;
}

@media only screen and (max-width:768px) {
.rule-right {border-right: none; padding-right: 0;}

     .yui3-u-1-2 {
         flex: 1 0 100%;
     }

}

.rule-right { border-right: #333 solid 1px; padding-right: 30px; }

@media only screen and (max-width:768px) {
.rule-right {border-right: none; padding-right: 0;}

     .yui3-u-1-2 {
         flex: 1 0 100%;
     }

}

.img-right-btm { margin: 0 0 20px 20px; width: 400px; }
@media screen and (max-width: 652px) { .img-right-btm { width: 100%; } }

</style>




<style>
/* STYLING FOR LEGACY COMPONENT */
.fund-info {
    padding: 0 15px;
    min-height: 136px;
}

.summary-fund-image {
    width:100%;
    margin-bottom:10px;
}

.fund-info h5 a {
    color: #0054a6;
    text-decoration: none;
}

.donate-widget {
    background: #efefef;
}

.donate-widget .fund-info p {
    margin: 0px 10px -10px;
}

#divDonationArea {
    padding: 0 25px 20px;
    margin: 0 auto;
}

#divSummary {
    display: none;
}

.donate-widget ul {
    list-style-type: none;
    display: inline-flex;
    width: 100%;
    margin: 0 auto;
}

.donate-widget ul li {
   width: 50%;
}

.donate-widget ul li:first-of-type {
    display: none;
}

.donate-widget .cta-button input {
    background: none;
    border: none;
}

.divDonateAction ul li {
    display: flex;
    width: 50%;
}

#divDonationAmount {
    margin-right: 10px;
/*    width: 95%; */
}

#divDonationAmount input {
    width: 100%;
}

.donate-widget .cta-button-holder {
    width: 100%;
}

.donate-widget .cta-button {
    border-radius: 1px;
    text-align: center;
    padding: 10px 35px;
    width: 100%;
}

.donate-widget .cta-button input {
    font-family: "Linotype Tetria", Helvetica, Arial, sans-serif;
    text-transform: uppercase;
}

@media (max-width:368px) {

    .donate-widget ul {
        display:flex;
        flex-wrap:wrap;
        width:100%;
    }

    .donate-widget ul li {
        width:100%;
        margin-bottom:10px;
    }

    #divDonationAmount input {
        width: 94%;
    }

    #divDonationAmount {
        width:100%;
    }

}

/* CURRENCY SYMBOL INSIDE OF INPUT FOR BOTTOM DONATE WIDGETS */

#divDonationAmount {
    background: #fff;
    border: 1px solid #ccc;
    padding-left: 10px;
    position: relative;
    height: 100%;
    padding-top: 7px;
}

#divDonationAmount input {
    border: 0;
    width: 100%;
    left: 0px;
    top: 0px;
    background: none;
    position: absolute;
    left: 0px;
    top: 0px;
    padding-left: 25px;
}

#divDonateActions > ul {
    display: flex;
}

#divDonateActions > ul > li {
    height: 100%;
}
/* END STYLING FOR LEGACY COMPONENT */

/* STYLING FOR RESPONSIVE COMPONENT */
.c-fund-summary {
    background: #efefef;
}

.c-fund-summary__funds {
    display: flex;
    padding: 0 1.25rem 1.25rem;
}

.c-fund-summary .o-donate__frequency, .c-fund-summary .o-donate__select--monthly, .c-fund-summary .o-donate__input-holder, .c-fund-summary .o-donate__submit {
    flex: 1;
    margin: .25rem;
    max-width: 50%;
}

.c-fund-summary .o-donate__input {
    width: 100%;
    padding-left: 25px;
}

.o-donate__currency {
    position: absolute;
    left: 10px;
    top: 8px;
}

.o-donate__input-holder {
    position: relative;
}

.o-donate__frequency--hide {
    display: none;
}
</style>

<div class="yui3-g">
	<div class="yui3-u-1-2">
<div class="block-content">
	<section class="c-fund-summary">
		
		<a href="donate.php" title="  "><img class="summary-fund-image" src="babuimages/var1.jpg" title=" " alt=" " /></a>
<div class="fund-info">
<h5 class="center"><a href="donate.php" title=" ">Cash giving</a></h5>
<p>We believe a better world is possible. A better now for her. A better future for everyone. You can help us get there.</p>
</p>
</div>
		
	</section>
</div>
	</div>
	
	<div class="yui3-u-1-2">
<div class="block-content">
	<section class="c-fund-summary">
		
		<a href="fundraising.php" title=" "><img class="summary-fund-image" src="babuimages/var3.jpg" title=" " alt=" " /></a>
<div class="fund-info">
<h5 class="center"><a href="fundraising.php" title="Online Fundraising">Online Fundraising</a></h5>
<p>Facebook Fundraising is a powerful tool to raise money on social media for charitable organizations.</p>
</div>
		
	</section>
</div>
	</div>
</div>
<?php include('footer1.php');?>