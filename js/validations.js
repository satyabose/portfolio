/*
	Functions Used:	8
			Element - form.element.name
			
			ex : If the the form name is "ThisForm"
			     element.name is "username"
			     
			     So the Element contains as (Thisform.username)
			     in the function.
				  
		
		Function 1: GenValidation(Element,Message1,Message2,spl)
		
			Message1: If you want to check the validation for the null 
			          or the element value is empty, what messge to be popped up.
			          
			Message2: If you want to check the validation for the element
			          length is less than 4, what messge to be popped up.
			          
			spl: Whether your element vlaue is to be checked for spl. characters			          
			          
			Usage  Details:
			
			Case 1: GenValidation(Element,'Message1','Message2','spl')		
			
			Case 2: GenValidation(Element,'','','spl')
			
			Case 3: GenValidation(Element,'','Message2','spl')
			
			Case 4: GenValidation(Element,'','Message2','')
			
			Case 5: GenValidation(Element,'Message1','','spl')

			Case 6: GenValidation(Element,'Message1','','')
			    
		Function 2: SplCharacters(Element)
					
		Function 3: EmailValidation(Element)
		
		Function 4: SplNumbers(Element)
		
		Function 5: NumValidation(Element,'Message','spl','num')
		
		Function 6: SelectValidation(Element,'Message')
		  	    This is to valid the select option values, 
		  	    always use your first option value is equals to zero
		example:		  	    
		  	    <select>
		  	    	<option value="0">select</option>
		  	    	<option value="1">......</option>
		  	    </select>
				
		Function 7: PassValidation(Element1,Element2)
					Retype Password and Password matching
					
		Function 8: Datevalidation(dd,mm,yyyy,'msg')
					dd, mm, yyyy are elements of the date either it can be 
					combo box or text box.
					Note:
					Please pass the name of the field thru msg.
					like "Start Date", "Date of Birth"
					Furthermore, This function takes care of focus setting.

		Function 9: ValidDates(dd1,mm1,yyyy1,dd2,mm2,yyyy2,msg)
					dd1,mm1,yyyy1 are elements of the date either it can be 
					combo box.
					dd2,mm2,yyyy2 are elements of the date either it can be 
					combo box or text box.

		Function 10: SelectAll(form name)
		             
		             ex:-
		             <input type="checkbox" name="selectall" value="Select All" onclick="SelectAll(this.form);">
			     NOTE: The check box name should be "selectall"
			     
		Function 11: getSelectedIndex(radgroup)
					This can used while validating radio button groups. If none of the buttons is selected then the function	
					returns -1 else the id.
					
					E.g: frm is the name of a form and radSearchType is the radiobutton group name.
					
					if( getSelectedIndex(frm.radSearchType) == -1 )
					{
						alert("Please select search type." );
						frm.radSearchType[0].focus();
						return;
					}
		Function 12: TextareaValidation(elem,msg,len)
					This function can be used to validate the length of Text area's in forms.
					For example...if the value of text area should not exceed 500 characters.
					
					Arguments :
					elem : The element(TextArea)
					msg : Message to be alerted
					      For example "Description"
					len : Noof characters not to be exceeded
					
					E.g: frm is the name of a form and desc is a text area name.
					
					Usage in form: 
					if(TextareaValidation(frm.desc,'Description',500) == 0)
					return;
					
					if(elem.value.length > len) {
					   alert(msg+" should not exceed "+len+" characters");
					   elem.focus();
					   return 0;
					}			
		
	CODE META DATA ENDS_______________________________________________
*/

	/**
	FUNTION SELECTALL CHECK BOXES
	**/
	function SelectAll(frm) {
	 //alert(frm.selectall.checked);
	   if(frm.selectall.checked == true) {
	   
		 for(i=0;i<frm.elements.length;i++) {
		   if((frm.elements[i].type == "checkbox") && (frm.elements[i].name != "selectall")) {
			 frm.elements[i].checked = true;
		   } // if statement
		 } // for loop
	   }
	   else if(frm.selectall.checked == false) {
		
		  for(i=0;i<frm.elements.length;i++) {
			 if((frm.elements[i].type == "checkbox") && (frm.elements[i].name != "selectall")) {
			   frm.elements[i].checked = false;
			 } // if statement
		  } // for loop
	   } // if - else - if condition
	} // closing the function SelectAll()
	
	/**
	 FUNCTION VALIDDATES
	**/
	function ValidDates(dd1, mm1, yyyy1, dd2, mm2, yyyy2, msg) {
	
	 xFlag = 0;
	 
	 /*The Following Code has been commented by muarli kumar
	 if((DateValidation(dd1,mm1,yyyy1) == 0) && (DateValidation(dd2,mm2,yyyy2) == 0))*/
	 
	 // Start of Code Added by murali
	 if((DateValidation(dd1,mm1,yyyy1,'null') == 0) || (DateValidation(dd2,mm2,yyyy2,'null') == 0))
		xFlag = 1;
	 if(xFlag==1)
	 {
	   return 0
	 }
	 
	 // End of Code Added by murali
	 
		if(xFlag == 0) {
			var ddd1 = new Number(dd1.value) ;
			var mmm1 = new Number(mm1.value) - 1;
			var yyy1 = new Number(yyyy1.value);
			
			var ddd2 = new Number(dd2.value) ;
			var mmm2 = new Number(mm2.value) - 1;
			var yyy2 = new Number(yyyy2.value);
		
			var dObj1 = new Date(yyy1,mmm1,ddd1,0,0,0,0);
			var dObj2 = new Date(yyy2,mmm2,ddd2,0,0,0,0);
		
			if(dObj1 > dObj2) {
				alert(msg);
				dd1.focus();
				return 0;
			}
		}
		else 
			return 1;
	
	} // closing the function ValidDates()
	
		function dval(yyy,mmm,ddd) {
		 
		  var dObj = new Date(yyy,mmm,ddd,0,0,0,0);
		
		  var dd = dObj.getDate();
		  var mm = dObj.getMonth();
		  var yy = dObj.getFullYear();
		
		  if((dd == ddd) && (yy == yyy) && (mm == mmm)) {
			return true;
		  }  
		  else {
			return false;
		  }
			
		} // closing the function dval()
	
	/**
	 FUNCTION DATEVALIDATION(dd,mm,yy,msg) 
	 **/
	function DateValidation(dd, mm, yy, msg) {
	
	   
	 if(NumValidation(dd,'Date','','num') == 0)
	 return 0;
	 
	 if(NumValidation(mm,'Month','','num') == 0)
	 return 0;
	 
	 if(NumValidation(yy,'Year','','num') == 0)
	 return 0;
	 
	
	 
	 d = parseInt(dd.value);
	 m = parseInt(mm.value);
	 y = parseInt(yy.value);
	 
	 if(m > 12 || m == 0) {
		alert("Invalid month selected for " + msg);
		mm.focus();
		return 0;
	 }
	 else {
	 
	 var vDays = [ 0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
	 var flag = 0;
	 if(m == 2) {
		if(isLeapYear(y)) {
		  if( d > 29 || d < 1 ) {
		   flag = 0;
		  }
		  else {
		   flag = 1;
		  }
		}
		else if( d > vDays[m] || d < 1 ) {
		 flag = 0;
		}
		else {
			 flag = 1;
		}
	 }
	 else {
		if( d > vDays[m] || d < 1 ) {
		 flag = 0;
		}
		else {
		 flag = 1;
		}  
	 }
	 }
	 if(flag == 0) {
	
		alert("Invalid day selected for " + msg);
	
		dd.focus();
		return 0;
	 }
	 else {
		return 1;
	 }
	 
	 
	} // closing the function DateValidation() 
	
	function isLeapYear(y)
	{
		 if( y % 4 == 0) 
		 {
			if( y % 100 == 0 ) 
			{
				 if( y % 400 == 0) 
				 {
					  return true;
				 }
				 else
				 {
					  return false;
				 }
			}
			else 
			{
				return true;
			}
		 }
		 else 
		 {
			return false;
		 }
	} // closing the function isLeapYear()
	 
	/**
	 FUNCTION PASSVALIDATION(element1,element2) 
	 **/
	
	function PassValidation(Element1,Element2) {
	
		if(Element1.value != Element2.value) {
			alert("Confirm password doesn't match");

			Element2.focus();
			return 0;
		}
		else
			return 1;
		
	} // closing the function PassValidation()
	
	
	function EditPassValidation(Element1,Element2) {
	
		if(Element1.value != Element2.value) {
			alert("Old password does not match");

			Element2.focus();
			return 0;
		}
		else
			return 1;
		
	} // 
	
	
	/**
	 FUNCTION SELECTVALIDATION(element,message) 
	 **/
	
	function SelectValidation(Element,Message) {
	
		if(Element.value == "") {
			alert("Please select "+Message+"");
			Element.focus();
			return 0;
		}
	
	}
	
	/**
	 FUNCTION EMAILVALIDATION(element) 
	 **/
	 //email validation>>
function email(Element,MessageLen0,MessageLen4,spl) {
		
		if(MessageLen0.length != 0)
		{
			if(Element.value.length == 0)
			{
				alert("Please enter an "+ MessageLen0);
				Element.focus();
				return 0;
			}
			else if(isBlank(Element.value))
			{
				alert("Please enter an "+ MessageLen0);
				Element.focus();
				return 0;
			}
		}
	
		if(MessageLen4.length != 0)
		{
			if(Element.value.length < 4)
			{
				alert( MessageLen4 + " should be more than 4 characters");
				Element.focus();
				return 0;
			} // closing the if - else condtion for if(MessageLen4.length != 0)
		}
	
		if(spl == "spl")
		{
			if(SplCharacters(Element) == 0)
			return 0;
		}
		else if(spl == "spTrainsoft")
		{
			if(SplCharactersSpTrainsoft(Element) == 0)
			return 0;
		}

		else if(spl == "text")
		{
			if(textOnly(Element) == 0)
			return 0;
		}

	} // email validation end>>
	
	 
	function EmailValidation(Element)
	{
		
		var stremail=Element.value;
		//alert(stremail);
      var emailchar=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
	 // alert(emailchar.test(stremail));
      if(emailchar.test(stremail))
      {
		  return true;
       }
	      else 
    {
    alert("Please enter the valid email address");
    Element.focus();
     return false;
    }
		
		
		
		
		/*Flag  = 1;
		count = 0;
	
		var alp = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_@.-";
		
		if(Element.value.length > 0)
		{
			for (var i=0; i<Element.value.length; i++)
			{
				temp = Element.value.substring(i, i+1);
	
				if (alp.indexOf(temp) == -1)
				{
					Flag = 0;
				}
			} // closing the for loop
		}
		else
		{
			Flag = 0;
		}
	
		for(var i=0; i <= Element.value.length; i++)
		{
			if(Element.value.charAt(0)=='@')
			{
				Flag = 0;
				break;
			}

			if(Element.value.charAt(Element.value.length-1)=='@')
			{
				Flag = 0;
				break;
			}

			if(Element.value.charAt(i)=='@') 
			{
				count = count + 1;

				if(count>1)
				{
					Flag = 0;
					break;
				}
			  
				if((Element.value.charAt(i-1)=='.') || (Element.value.charAt(i+1)=='.'))
				{
					Flag = 0;
					break;
				}
			}
			if(Element.value.indexOf('@')==-1)
			{
				Flag = 0;		    	
				break;
			}
			if(Element.value.charAt(0)=='.')
			{
				Flag = 0;
				break;
			}
			if(Element.value.indexOf('.')==-1)
			{
				Flag = 0;		    	
				break;
			}
		  } //closing the for loop
		
		if(Element.value.charAt(Element.value.length-1) == '.')
			Flag = 0;
			
		if(Flag != 1)
		{
			alert("Invalid email address");
			Element.focus();
			return 0;
		}	
		else
			return 1;*/
	}
	
	/**
	 FUNCTION NUMVALIDATION(element,message,spl,onlynum) 
	 **/
	function NumValidation(Element, MessageLen0, spl, OnlyNum)
	{
		if(MessageLen0.length != 0)
		{
			if(isBlank(Element.value) || Element.value.length == 0)
			{
				alert("Please enter the "+ MessageLen0);
				Element.focus();
				return 0;
			}
		}
		
		if(OnlyNum == "num")
		{
			if(isNaN(Element.value))
			{
				alert("Please enter only numerics");
				Element.focus();
				return 0;
			}
			if(parseInt(Element.value) < 0)
			{
				alert("Negative values are not allowed for this field.");
				Element.focus();
				return 0;
			}
		}
				
		if(spl == "spl" && OnlyNum != "num")
		{
			if(SplNumbers(Element) == 0)
			return 0;
		}	
	
	
	} // closing the function NumValidation()
	
	
	/**
	 FUNCTION GENVALIDATION(element.message1,message2,spl) 
	 **/
	
	function GenValidation(Element,MessageLen0,MessageLen4,spl) {
		
		if(MessageLen0.length != 0)
		{
			if(Element.value.length == 0)
			{
				alert("Please enter the "+ MessageLen0);
				Element.focus();
				return 0;
			}
			else if(isBlank(Element.value))
			{
				alert("Please enter the "+ MessageLen0);
				Element.focus();
				return 0;
			}
		}
	
		if(MessageLen4.length != 0)
		{
			if(Element.value.length < 4)
			{
				alert( MessageLen4 + " should be more than 4 characters");
				Element.focus();
				return 0;
			} // closing the if - else condtion for if(MessageLen4.length != 0)
		}
	
		if(spl == "spl")
		{
			if(SplCharacters(Element) == 0)
			return 0;
		}
		else if(spl == "spTrainsoft")
		{
			if(SplCharactersSpTrainsoft(Element) == 0)
			return 0;
		}
		
		else if(spl == "text")
		{
			if(textOnly(Element) == 0)
			return 0;
		}

	} // closing the function GenValidation()
	
	//select Function
	function selected(Element,MessageLen0,MessageLen4,spl) {
		
		if(MessageLen0.length != 0)
		{
			if(Element.value.length == 0)
			{
				alert("Please select the "+ MessageLen0);
				Element.focus();
				return 0;
			}
			else if(isBlank(Element.value))
			{
				alert("Please select the "+ MessageLen0);
				Element.focus();
				return 0;
			}
		}
	
		if(MessageLen4.length != 0)
		{
			if(Element.value.length < 4)
			{
				alert( MessageLen4 + " should be more than 4 characters");
				Element.focus();
				return 0;
			} // closing the if - else condtion for if(MessageLen4.length != 0)
		}
	
		if(spl == "spl")
		{
			if(SplCharacters(Element) == 0)
			return 0;
		}
		else if(spl == "spTrainsoft")
		{
			if(SplCharactersSpTrainsoft(Element) == 0)
			return 0;
		}

		else if(spl == "text")
		{
			if(textOnly(Element) == 0)
			return 0;
		}

	} // closing the function selected
	

	
	/**
	 FUNCTION SPLCHARACTERS(element) 
	 **/
	
	function SplCharacters(Val) {
	
		var alp = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_";
	
		for (var i=0;i<Val.value.length;i++)
		{
			temp=Val.value.substring(i,i+1);
			if (alp.indexOf(temp)==-1)
			{
				alert("No special characters \nValid entries are [a-z][A-Z][0-9][ _ ]");
				Val.focus();
				return 0;
			}
		} // closing the for loop
	
	} // closing the function SplCharacters()
	
	/**
	 FUNCTION SPLCHARACTERS(element) 
	 **/
	
	function SplCharactersSpTrainsoft(Val)
	{
		var alp = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ";
	
		for (var i=0;i<Val.value.length;i++){
			temp=Val.value.substring(i,i+1);
			if (alp.indexOf(temp)==-1){
				alert("No special characters \nValid entries are [a-z][A-Z][0-9][ spTrainsoft ]");
				Val.focus();
				return 0;
			}
		} // closing the for loop
	} // closing the function SplCharactersSpTrainsoft()
	
	/**
	 FUNCTION textOnly(element) 
	 **/
	///Added By : BHARATH.
	function textOnly(Val)
	{
		var alp = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";
	
		for (var i=0;i<Val.value.length;i++){
			temp=Val.value.substring(i,i+1);
			if (alp.indexOf(temp)==-1){
				alert("No special characters \nValid entries are [a-z][A-Z][ spTrainsoft ]");
				Val.focus();
				return 0;
			}
		} // closing the for loop
	} // closing the function textOnly()
	
	/**
	 FUNCTION SPLNUMBERS(element) 
	 **/
	
	function SplNumbers(Val)
	{
		var alp = "0123456789+- ";
	
		for (var i=0;i<Val.value.length;i++){
			temp=Val.value.substring(i,i+1);
			if (alp.indexOf(temp)==-1){
				alert("No special characters \nValid entries are [0-9][ + - ]");
				Val.focus();
				return 0;
			}
		} // closing the for loop
	
	} // closing the function SplNumbers()
	
	function SplNumberspin(Val)
	{
		var alp = "0123456789 ";
	
		for (var i=0;i<Val.value.length;i++){
			temp=Val.value.substring(i,i+1);
			if (alp.indexOf(temp)==-1){
				alert("No special characters \nValid entries are [0-9]");
				Val.focus();
				return 0;
			}
		} // closing the for loop
	
	} 
	function SplNumbersamount(Val)
	{
		var alp = "0123456789./ ";
	
		for (var i=0;i<Val.value.length;i++){
			temp=Val.value.substring(i,i+1);
			if (alp.indexOf(temp)==-1){
				alert("No special characters \nValid entries are [0-9][.]");
				Val.focus();
				return 0;
			}
		} // closing the for loop
	
	} 
	/**
	 FUNCTION FOR CHECKING THE FIELD CONTAINS BLANK VALUES ISBLANK(Element.value)
	 **/
	//To check if trim(value) is blank
function isBlank(txt, minlen)
{
	/*
		This fucntion can be used to check if a given text contains only spTrainsofts or 0 in length.

		INPUT: Text [txt]
					Minimum Length [minlen] optional
					Indicates that the text should be atleast 'minlen' in length

		OUTPUT: returns true if blank else false
	*/

	if( txt.length == getCountOf('\n', txt) )
	{
		/*
			This condition avoids the entry of just newlines in text areas.
		*/
		return true;
	}


	if( txt.length == getCountOf(' ', txt) || txt.length == 0 )
	{
		return true;
	}
	else if( minlen > 0 )
	{
		if( txt.length < minlen )
		{
			return true;
		}
		else
		{
			return false;
		}
	}
	else
	{
		return false;
	}
}
	
	//This can be used for any character validation.
	//For example in a valid date the count of - or / should not be more than 2
	//Likewise in a valid numer there should be only one .
	function getCountOf(vChr, txt)
	{
		var i = 0;
		var iCount = 0;
	
		for( i=0; i < txt.length; i++ )
		{
			if( txt.charAt(i) == vChr )
			{
				iCount++;
			}
		}
		return iCount;
	}
	
	
	function getSelectedIndex(radgroup)
	{
		alert(radgroup);
		/* Returns back the id of selected radio button in a radio button group  */
		var j = -1;
	
		for( i=0; i < radgroup.length; i++ )
		{
			if( radgroup[i].checked )
			{
				j = i;
				//alert(j);
			}
		}
		return j;
	}
	
	/**
	 FUNCTION TEXTAREAVALIDATION(element,message,len) 
	 **/
	
	function TextareaValidation(elem,msg,len) {
	
		   if(elem.value.length > 0)
		   {
			if(isBlank(elem.value)) 
			{
				alert("Please enter the value");
				elem.focus();
				return 0;
			}else if(elem.value.length > len) 
			{
				alert(msg+" should not exceed "+len+" characters");
				elem.focus();
				return 0;
			}	
		   }
		
	} // closing the function TextareaValidation()
	
	
	function checkInCharSet(txt, charset)
	{
		/*
			This function checks if the characters in a given text are part of a given character set.
	
			INPUT:	Text ti be verified [txt]
						String of character that forms the reference [charset]
	
			OUTPUT: Returns true if all of the characters in txt are part of charset, else false.
	
			USAGE:
						for example:
	
							checkInCharSet( "murali", "aeiouliAEIOU" ) this fucntion returns false as "murali" contains 'm' and 'r'
							whcih are not part of "aeiouliAEIOU".
	
							checkInCharSet( "abC", "abcdefABCDEF" ) this statement returns true as all "abC" contains characters
							that are present in "abcdefABCDEF"
		*/
	
		var b = true;
	
		for(i = 0; i < txt.length; i++ )
		{
			if( charset.indexOf(txt.charAt(i)) == -1 )
			{
				b = false;
			}
		}
	
		return b;
	}


	function isValidDate(dd, mm, yy)
	{
		/*
			This fucntion can be used for date validations.
	
			INPUT:	Day in numeric format [d]
						Month in numeric format [m]
						4 digit year [y]
	
			OUTPUT: Returns true if the date is valid else false.
	
			USAGE:
						isValidDate( 1, 4, 2001 )	- Returns true
	
						isValidDate( 1, 13, 2002 )	- Returns false coz month is > 12
						
						isValidDate( 30, 2, 2001)	- Returns false coz Feb will never have 30th
		*/
	
		var d = parseInt(dd);
		var m = parseInt(mm);
		var y = parseInt(yy);
		
		if( isNaN(d) || isNaN(m) || isNaN(y) )
			return false;
			
		if( d <= 0 || m <= 0 || y <=0 )
			return false;
		
		if( d > 31 || m > 12 )

			return false;
	
		if( y < 1000 || y > 9999 )
			return false;
	
		var vDays = [ 0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
	
		if( m == 2 )
		{
			if( isLeapYear(y) )
			{
				if( d > 29 || d < 1 )
				{
					return false;
				}
				else
				{
					return true;
				}
			}
			else if( d > vDays[m] || d < 1 )
			{
				return false;
			}
			else
			{
				return true;
			}
		}
		else if( d > vDays[m] || d < 1 )
		{
			return false;
		}
		else
		{
			return true;
		}
	}
	
<!-- Begin
// var Message="www.Jewster.com"; 
var Message=" "; 
var plTrainsoft=1;
function scrollIn() 
{
	window.status=Message.substring(0, plTrainsoft);  
	if (plTrainsoft >= Message.length) 
	{
		plTrainsoft=1;
		window.setTimeout("scrollOut()",500); 
	} 
	else 
	{
		plTrainsoft++;
		window.setTimeout("scrollIn()",200); 
	} 
}
function scrollOut() 
{
	window.status=Message.substring(plTrainsoft, Message.length);
	if (plTrainsoft >= Message.length) 
	{
		plTrainsoft=1;
		window.setTimeout("scrollIn()", 300);
	} 
	else 
	{
		plTrainsoft++;
		window.setTimeout("scrollOut()", 200); 
	}
}
// End -->
// scrollIn() ;	
		/**
	FUNCTION ROUNDNUMBER(element)
	**/
	function RoundNumber(Val)
	{
		var alp = "0123456789";
	
		for (var i=0;i<Val.value.length;i++){
			temp=Val.value.substring(i,i+1);
			if (alp.indexOf(temp)==-1){
				alert("Please Enter Valid Salary");
				Val.focus();
				return 0;
			}
		} // closing the for loop
	
	} // closing the function RoundNumber()

//ltrim,rtrim and trim fucntions  written by Murali Kumar Sugguna dated 09-jun-2005

function ltrim(argvalue){
  while (1) {
    if (argvalue.substring(0, 1) != " ")
      break;
    argvalue = argvalue.substring(1, argvalue.length);
  }
  return argvalue;
}

function rtrim(argvalue) {

  while (1) {
    if (argvalue.substring(argvalue.length - 1, argvalue.length) != " ")
      break;
    argvalue = argvalue.substring(0, argvalue.length - 1);
  }

  return argvalue;
}
function trim(argvalue) {
  var tmpstr = ltrim(argvalue);

  return rtrim(tmpstr);

}
//this function changedays ,

function changedays(month,year,days)
{
	var nummon   = parseInt(month.value);
	var yr       = parseInt(year.value);	
	var chk 	 = parseInt(days.value);
	var noofdays;
	
	if(nummon == 1 || nummon == 3 || nummon == 5 || nummon == 7 || nummon == 8 || nummon == 10 || nummon == 12)
	{
	noofdays = 31;
	}
	else
	{
		if(nummon == 2)
		{
			if(isLeapYear(yr) == true)
			noofdays = 29;
			else
			noofdays  = 28;
		}
		else
		{
		noofdays = 30;
		}
	}

	days.options.length = noofdays;
	for(i=0;i<noofdays;i++)
	{
	days.options[i].text  = i+1;
	days.options[i].value = i+1;
	}
	
	if(chk > noofdays)
	{
	alert("Please select day\n This month has " + noofdays + " days only ");
	days.focus();
	}
	
	return true;	
}
 function validateimage(txt,name)
  {
	  
	filename=txt.value;
	var retval=true;
    var extension;
    var Img1 = new Image();
	if (filename != '')
    {  
      extension = filename.substring(filename.length - 3, filename.length);
      if ((extension.toUpperCase() != 'JPG') && (extension.toUpperCase() != 'GIF'))
      {
        retval = false;
        alert("Invalid "+name +"\n Valid files are only .gif or .jpg ");
		txt.focus();
      }
    }
    return retval;
  }

