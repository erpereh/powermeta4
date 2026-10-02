/*
 @(#)FileVersion: 811.000.025
 @(#)FileDescription: 
 @(#)CompanyName: Meta4 Spain, S.A.
 @(#)LegalCopyright: (c)2014
 @(#)ProductName: PeopleNet KSystem
 @(#)ProductVersion: 8.1SP1
 @(#)InternalName: loading.js
 @(#)Date: 01/01/2014
 */

/*global $, $$, Element*/

var meta4 = meta4 || {};

meta4.widget = meta4.widget || {};

meta4.widget.loading = new Class({

	//store number of executions
	_numberExecution : 0,
	//store layer to lock screen
	_layerLock : null,
	_labelText: null,
	
	_layerPopUp : null,
	_labelPopUp: null,

	initialize : function(element) {

		//create layer to lock screen
		this._layerLock = new Element('div', {
			'class' : 'divLoading',
			styles : {
				position : 'absolute',
				top : '0px',
				bottom : '0px',
				left : '0px',
				right : '0px',
				zIndex : '9999999',
				display : 'none',
				textAlign : 'center',
				opacity: '0.55',
				//rgba no funciona en ie8
				//backgroundColor : 'rgba(186,197,204,0.59)'
				backgroundColor : '#000', // '#F3F3F6',
				background : 'url(/icons/spinner.gif) no-repeat center 10px #F3F3F6'


			}
		});
		
		this._labelText = new Element('label',{
		    text:'',
			styles:{
				position:'relative',
				top:'50px'
			}
		});
		
		this._layerLock.grab(this._labelText);
		
		//create layer to lock screen
		this._layerPopUp = new Element('div', {
			'class' : 'divPopUp-Loading',
			styles : {
				position : 'absolute',
				top : '5%',				
				left : '0px',
				right : '0px',
				zIndex : '99999999',
				display : 'none',
				textAlign:'center'							
			}
		});
		
		this._labelPopUp = new Element('label');
		
		this._layerPopUp.grab(this._labelPopUp);

		if (element != null || element != undefined) {			
			element.grab(this._layerLock);			
		} else {
			//grab layer inside body
			$(document.body).grab(this._layerLock);		
			$(document.body).grab(this._layerPopUp);
		}

	},

	/**
	 *Function to show layer lock
	 */
	show : function() {
		this._numberExecution = this._numberExecution + 1;
		if (this._numberExecution == 1) {
			this._layerLock.show();
		}
	},
	setTextLoading: function(txt){
	    if(txt != undefined || txt != null){
	       this._labelText.set('html',txt);   
	    }else{
	        this._labelText.set('html','');
	    }		
	},
	
	showPopUp: function(txt){
		if(txt != undefined){
			this._labelPopUp.set('html',txt);
			this._layerPopUp.setStyle('display','block');
			
			var layerPopUp = this._layerPopUp;
             
            setTimeout(function(){
                layerPopUp.setStyle('display','none');  
            }, 4000);
            
            /*No funciona en ie9:	
			setTimeout(function(element){
				element.setStyle('display','none');	
			}, 4000, this._layerPopUp)*/
		}				
	},

	/**
	 *Function to hide layer lock
	 */
	hide : function() {
		this._numberExecution = this._numberExecution - 1;
		if (this._numberExecution == 0) {
			this._layerLock.hide();
		}
	},

	/**
	 *Function to force hide layer lock
	 */
	forceHide : function() {
		this._layerLock.hide();
	}
});


//@ sourceURL=meta4.widget.loading.js
