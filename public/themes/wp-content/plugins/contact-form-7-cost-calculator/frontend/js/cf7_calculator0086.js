/** math-expression-evaluator version 1.2.17
 Dated:2017-04-28 */
!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,b.mexp=a()}}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){var d=a("./postfix_evaluator.js");d.prototype.formulaEval=function(){"use strict";for(var a,b,c,d=[],e=this.value,f=0;f<e.length;f++)1===e[f].type||3===e[f].type?d.push({value:3===e[f].type?e[f].show:e[f].value,type:1}):13===e[f].type?d.push({value:e[f].show,type:1}):0===e[f].type?d[d.length-1]={value:e[f].show+("-"!=e[f].show?"(":"")+d[d.length-1].value+("-"!=e[f].show?")":""),type:0}:7===e[f].type?d[d.length-1]={value:(1!=d[d.length-1].type?"(":"")+d[d.length-1].value+(1!=d[d.length-1].type?")":"")+e[f].show,type:7}:10===e[f].type?(a=d.pop(),b=d.pop(),"P"===e[f].show||"C"===e[f].show?d.push({value:"<sup>"+b.value+"</sup>"+e[f].show+"<sub>"+a.value+"</sub>",type:10}):d.push({value:(1!=b.type?"(":"")+b.value+(1!=b.type?")":"")+"<sup>"+a.value+"</sup>",type:1})):2===e[f].type||9===e[f].type?(a=d.pop(),b=d.pop(),d.push({value:(1!=b.type?"(":"")+b.value+(1!=b.type?")":"")+e[f].show+(1!=a.type?"(":"")+a.value+(1!=a.type?")":""),type:e[f].type})):12===e[f].type&&(a=d.pop(),b=d.pop(),c=d.pop(),d.push({value:e[f].show+"("+c.value+","+b.value+","+a.value+")",type:12}));return d[0].value},b.exports=d},{"./postfix_evaluator.js":5}],2:[function(a,b,c){function d(a,b){for(var c=0;c<a.length;c++)a[c]+=b;return a}function e(a,b,c,d){for(var e=0;e<d;e++)if(a[c+e]!==b[e])return!1;return!0}var f=a("./math_function.js"),g=["sin","cos","tan","pi","(",")","P","C","asin","acos","atan","7","8","9","int","cosh","acosh","ln","^","root","4","5","6","/","!","tanh","atanh","Mod","1","2","3","*","sinh","asinh","e","log","0",".","+","-",",","Sigma","n","Pi","pow"],h=["sin","cos","tan","&pi;","(",")","P","C","asin","acos","atan","7","8","9","Int","cosh","acosh"," ln","^","root","4","5","6","&divide;","!","tanh","atanh"," Mod ","1","2","3","&times;","sinh","asinh","e"," log","0",".","+","-",",","&Sigma;","n","&Pi;","pow"],j=[f.math.sin,f.math.cos,f.math.tan,"PI","(",")",f.math.P,f.math.C,f.math.asin,f.math.acos,f.math.atan,"7","8","9",Math.floor,f.math.cosh,f.math.acosh,Math.log,Math.pow,Math.sqrt,"4","5","6",f.math.div,f.math.fact,f.math.tanh,f.math.atanh,f.math.mod,"1","2","3",f.math.mul,f.math.sinh,f.math.asinh,"E",f.math.log,"0",".",f.math.add,f.math.sub,",",f.math.sigma,"n",f.math.Pi,Math.pow],k={0:11,1:0,2:3,3:0,4:0,5:0,6:0,7:11,8:11,9:1,10:10,11:0,12:11,13:0},l=[0,0,0,3,4,5,10,10,0,0,0,1,1,1,0,0,0,0,10,0,1,1,1,2,7,0,0,2,1,1,1,2,0,0,3,0,1,6,9,9,11,12,13,12,8],m={0:!0,1:!0,3:!0,4:!0,6:!0,8:!0,9:!0,12:!0,13:!0},n={0:!0,1:!0,2:!0,3:!0,4:!0,5:!0,6:!0,7:!0,8:!0,9:!0,10:!0,11:!0,12:!0,13:!0},o={0:!0,3:!0,4:!0,8:!0,12:!0,13:!0},p={},q={0:!0,1:!0,3:!0,4:!0,6:!0,8:!0,12:!0,13:!0},r={1:!0},s=[[],["1","2","3","7","8","9","4","5","6","+","-","*","/","(",")","^","!","P","C","e","0",".",",","n"],["pi","ln","Pi"],["sin","cos","tan","Del","int","Mod","log","pow"],["asin","acos","atan","cosh","root","tanh","sinh"],["acosh","atanh","asinh","Sigma"]];f.addToken=function(a){for(i=0;i<a.length;i++){x=a[i].token.length;var b=-1;if(x<s.length)for(y=0;y<s[x].length;y++)if(a[i].token===s[x][y]){b=g.indexOf(s[x][y]);break}b===-1?(g.push(a[i].token),l.push(a[i].type),s.length<=a[i].token.length&&(s[a[i].token.length]=[]),s[a[i].token.length].push(a[i].token),j.push(a[i].value),h.push(a[i].show)):(g[b]=a[i].token,l[b]=a[i].type,j[b]=a[i].value,h[b]=a[i].show)}},f.lex=function(a,b){"use strict";var c,i,t,u,v=[{type:4,value:"(",show:"(",pre:0}],w=[],x=a,y=0,z=m,A=0,B=p,C="";"undefined"!=typeof b&&f.addToken(b);var D={};for(i=0;i<x.length;i++)if(" "!=x[i]){c="";a:for(t=x.length-i>s.length-2?s.length-1:x.length-i;t>0;t--)for(u=0;u<s[t].length;u++)if(e(x,s[t][u],i,t)){c=s[t][u];break a}if(i+=c.length-1,""===c)throw new f.exception("Can't understand after "+x.slice(i));var E=g.indexOf(c),F=c,G=l[E],H=j[E],I=k[G],J=h[E],K=v[v.length-1];for(L=w.length;L--;)if(0===w[L]&&[0,2,3,5,9,11,12,13].indexOf(G)!==-1){if(z[G]!==!0)throw new f.exception(c+" is not allowed after "+C);v.push({value:")",type:5,pre:0,show:")"}),z=n,B=q,d(w,-1).pop()}if(z[G]!==!0)throw new f.exception(c+" is not allowed after "+C);if(B[G]===!0&&(G=2,H=f.math.mul,J="&times;",I=3,i-=c.length),D={value:H,type:G,pre:I,show:J},0===G)z=m,B=p,d(w,2).push(2),v.push(D),v.push({value:"(",type:4,pre:0,show:"("});else if(1===G)1===K.type?(K.value+=H,d(w,1)):v.push(D),z=n,B=o;else if(2===G)z=m,B=p,d(w,2),v.push(D);else if(3===G)v.push(D),z=n,B=q;else if(4===G)y+=w.length,w=[],A++,z=m,B=p,v.push(D);else if(5===G){if(!A)throw new f.exception("Closing parenthesis are more than opening one, wait What!!!");for(;y--;)v.push({value:")",type:5,pre:0,show:")"});y=0,A--,z=n,B=q,v.push(D)}else if(6===G){if(K.hasDec)throw new f.exception("Two decimals are not allowed in one number");1!==K.type&&(K={value:0,type:1,pre:0},v.push(K),d(w,-1)),z=r,d(w,1),B=p,K.value+=H,K.hasDec=!0}else 7===G&&(z=n,B=q,d(w,1),v.push(D));8===G?(z=m,B=p,d(w,4).push(4),v.push(D),v.push({value:"(",type:4,pre:0,show:"("})):9===G?(9===K.type?K.value===f.math.add?(K.value=H,K.show=J,d(w,1)):K.value===f.math.sub&&"-"===J&&(K.value=f.math.add,K.show="+",d(w,1)):5!==K.type&&7!==K.type&&1!==K.type&&3!==K.type&&13!==K.type?"-"===F&&(z=m,B=p,d(w,2).push(2),v.push({value:f.math.changeSign,type:0,pre:21,show:"-"}),v.push({value:"(",type:4,pre:0,show:"("})):(v.push(D),d(w,2)),z=m,B=p):10===G?(z=m,B=p,d(w,2),v.push(D)):11===G?(z=m,B=p,v.push(D)):12===G?(z=m,B=p,d(w,6).push(6),v.push(D),v.push({value:"(",type:4,pre:0})):13===G&&(z=n,B=q,v.push(D)),d(w,-1),C=c}for(var L=w.length;L--;)0===w[L]&&(v.push({value:")",show:")",type:5,pre:3}),d(w,-1).pop());if(z[5]!==!0)throw new f.exception("complete the expression");for(;A--;)v.push({value:")",show:")",type:5,pre:3});return v.push({type:5,value:")",show:")",pre:0}),new f(v)},b.exports=f},{"./math_function.js":3}],3:[function(a,b,c){var d=function(a){this.value=a};d.math={isDegree:!0,acos:function(a){return d.math.isDegree?180/Math.PI*Math.acos(a):Math.acos(a)},add:function(a,b){return a+b},asin:function(a){return d.math.isDegree?180/Math.PI*Math.asin(a):Math.asin(a)},atan:function(a){return d.math.isDegree?180/Math.PI*Math.atan(a):Math.atan(a)},acosh:function(a){return Math.log(a+Math.sqrt(a*a-1))},asinh:function(a){return Math.log(a+Math.sqrt(a*a+1))},atanh:function(a){return Math.log((1+a)/(1-a))},C:function(a,b){var c=1,e=a-b,f=b;f<e&&(f=e,e=b);for(var g=f+1;g<=a;g++)c*=g;return c/d.math.fact(e)},changeSign:function(a){return-a},cos:function(a){return d.math.isDegree&&(a=d.math.toRadian(a)),Math.cos(a)},cosh:function(a){return(Math.pow(Math.E,a)+Math.pow(Math.E,-1*a))/2},div:function(a,b){return a/b},fact:function(a){if(a%1!==0)return"NAN";for(var b=1,c=2;c<=a;c++)b*=c;return b},inverse:function(a){return 1/a},log:function(a){return Math.log(a)/Math.log(10)},mod:function(a,b){return a%b},mul:function(a,b){return a*b},P:function(a,b){for(var c=1,d=Math.floor(a)-Math.floor(b)+1;d<=Math.floor(a);d++)c*=d;return c},Pi:function(a,b,c){for(var d=1,e=a;e<=b;e++)d*=Number(c.postfixEval({n:e}));return d},pow10x:function(a){for(var b=1;a--;)b*=10;return b},sigma:function(a,b,c){for(var d=0,e=a;e<=b;e++)d+=Number(c.postfixEval({n:e}));return d},sin:function(a){return d.math.isDegree&&(a=d.math.toRadian(a)),Math.sin(a)},sinh:function(a){return(Math.pow(Math.E,a)-Math.pow(Math.E,-1*a))/2},sub:function(a,b){return a-b},tan:function(a){return d.math.isDegree&&(a=d.math.toRadian(a)),Math.tan(a)},tanh:function(a){return d.sinha(a)/d.cosha(a)},toRadian:function(a){return a*Math.PI/180}},d.exception=function(a){this.message=a},b.exports=d},{}],4:[function(a,b,c){var d=a("./lexer.js");d.prototype.toPostfix=function(){"use strict";for(var a,b,c,e,f,g=[],h=[{value:"(",type:4,pre:0}],i=this.value,j=1;j<i.length;j++)if(1===i[j].type||3===i[j].type||13===i[j].type)1===i[j].type&&(i[j].value=Number(i[j].value)),g.push(i[j]);else if(4===i[j].type)h.push(i[j]);else if(5===i[j].type)for(;4!==(b=h.pop()).type;)g.push(b);else if(11===i[j].type){for(;4!==(b=h.pop()).type;)g.push(b);h.push(b)}else{a=i[j],e=a.pre,f=h[h.length-1],c=f.pre;var k="Math.pow"==f.value&&"Math.pow"==a.value;if(e>c)h.push(a);else{for(;c>=e&&!k||k&&e<c;)b=h.pop(),f=h[h.length-1],g.push(b),c=f.pre,k="Math.pow"==a.value&&"Math.pow"==f.value;h.push(a)}}return new d(g)},b.exports=d},{"./lexer.js":2}],5:[function(a,b,c){var d=a("./postfix.js");d.prototype.postfixEval=function(a){"use strict";a=a||{},a.PI=Math.PI,a.E=Math.E;for(var b,c,e,f=[],g=this.value,h="undefined"!=typeof a.n,i=0;i<g.length;i++)1===g[i].type?f.push({value:g[i].value,type:1}):3===g[i].type?f.push({value:a[g[i].value],type:1}):0===g[i].type?"undefined"==typeof f[f.length-1].type?f[f.length-1].value.push(g[i]):f[f.length-1].value=g[i].value(f[f.length-1].value):7===g[i].type?"undefined"==typeof f[f.length-1].type?f[f.length-1].value.push(g[i]):f[f.length-1].value=g[i].value(f[f.length-1].value):8===g[i].type?(b=f.pop(),c=f.pop(),f.push({type:1,value:g[i].value(c.value,b.value)})):10===g[i].type?(b=f.pop(),c=f.pop(),"undefined"==typeof c.type?(c.value=c.concat(b),c.value.push(g[i]),f.push(c)):"undefined"==typeof b.type?(b.unshift(c),b.push(g[i]),f.push(b)):f.push({type:1,value:g[i].value(c.value,b.value)})):2===g[i].type||9===g[i].type?(b=f.pop(),c=f.pop(),"undefined"==typeof c.type?(console.log(c),c=c.concat(b),c.push(g[i]),f.push(c)):"undefined"==typeof b.type?(b.unshift(c),b.push(g[i]),f.push(b)):f.push({type:1,value:g[i].value(c.value,b.value)})):12===g[i].type?(b=f.pop(),"undefined"!=typeof b.type&&(b=[b]),c=f.pop(),e=f.pop(),f.push({type:1,value:g[i].value(e.value,c.value,new d(b))})):13===g[i].type&&(h?f.push({value:a[g[i].value],type:3}):f.push([g[i]]));if(f.length>1)throw new d.exception("Uncaught Syntax error");return f[0].value>1e15?"Infinity":parseFloat(f[0].value.toFixed(15))},d.eval=function(a,b,c){return"undefined"==typeof b?this.lex(a).toPostfix().postfixEval():"undefined"==typeof c?"undefined"!=typeof b.length?this.lex(a,b).toPostfix().postfixEval():this.lex(a).toPostfix().postfixEval(b):this.lex(a,b).toPostfix().postfixEval(c)},b.exports=d},{"./postfix.js":4}]},{},[1])(1)});
jQuery(document).ready(function($) {
    if ( $( ".wpcf7-form" ).length ) {
        cf7_formulas();
        $("body").on("change",".wpcf7 input,.wpcf7 select,.wpcf7 textarea",function(e){
            cf7_formulas();
            if (typeof cf7_logic != 'undefined')  { 
                $("input").trigger("cf7_logic");
            }
        })
        $(".cf7-hide").closest('p').css('display', 'none');
        function cf7_formulas(){
           var total = 0;
           var max = 100;
           var reg =[]; 
           var match;
           $("form.wpcf7-form input").each(function () { 
                if( $(this).attr("type") == "checkbox" || $(this).attr("type") == "radio"  ) {
                    var name = $(this).attr("name").replace("[]", "");
                    reg.push(name);
                }else{
                    reg.push($(this).attr("name"));
                }
                
           })
           $("form.wpcf7-form select").each(function () { 
                reg.push($(this).attr("name"));
           })
           reg = remove_duplicates_ctf7(reg);
         var field_regexp = new RegExp( '('+reg.join("|")+')');
           $( ".ctf7-total" ).each(function( index ) {
                var eq = $(this).data('formulas');
               
               console.log(eq);   
                    
               while ( match = field_regexp.exec( eq ) ){
                    //console.log("match" + match);
                    var type = $("input[name="+match[0]+"]").attr("type");
                    if( type === undefined ) {
                        var type = $("input[name='"+match[0]+"[]']").attr("type");
                    }
                    if( type =="checkbox" ){
                        var vl = 0;
                        $("input[name='"+match[0]+"[]']:checked").each(function () {
                                 vl += new Number($(this).val());
                        });
                        
                        $("input[name='"+match[0]+"']:checked").each(function () {
                                 vl += new Number($(this).val());
                        });
                        
                    }else if( type == "radio"){
                        var vl = $("input[name='"+match[0]+"']:checked").val();

                    }else if( type == "date"){ 
                        var myDate = $("input[name="+match[0]+"]").val();
                        myDate =myDate.split("-");
                        var newDate=myDate[1]+"/"+myDate[0]+"/"+myDate[2];
                        var vl = new Date(myDate[0], myDate[1], myDate[2]).getTime() / ( 24 * 60 * 60 * 1000);
                    }
                    else if( type === undefined ){
                        var vl = $("select[name="+match[0]+"]").val();
                        var n = vl.search(/\|/i);
                        if(n>0){
                            var vls = vl.split("|");
                            vl = vls[0];
                        }else{
                            //var text_lb = $("select[name="+match[0]+"]").find(":selected").text();
                            //$("select[name="+match[0]+"]").find(":selected").val(vl+ "|" + text_lb);
                        }   
                    }else{
                        if( $("input[name="+match[0]+"]").hasClass( "ctf7-total" ) ) {
                            var vl = $("input[name="+match[0]+"]").attr("data-number");
                        }else{
                            var vl = $("input[name="+match[0]+"]").val();
                        }
                        
                    }
                    if(!$.isNumeric(vl)){
                        vl = 0;
                    }
                    //console.log(vl);
                    var reg_inner = new RegExp(match[0] + "(?!\\d)","gm"); 
                    eq = eq.replace( reg_inner, vl ); 
                   
                }
               console.log(eq);
               //if
                    eq = eq.replace(/\s/g, '');
                    var rg = new RegExp("if\\(.*?\\)", "gm");
                    var data_eq = eq.match(rg);
                    
                    eq = eq.replace( rg, function (x) {
                            return cf7_data_if(x);
                    } ); 
                    //console.log(eq);
                //

                try{
                    var r = mexp.eval( eq ); // Evaluate the final equation
                    total = r;
                }
                catch(e)
                {
                    alert( "Error:" + eq );
                }
                $(this).attr("data-number",total);
                total = cf7_format(total);
                $(this).val(total);

                $(this).parent().find('.cf7-calculated-name').html(total);
           });

            
        }
    }
    function cf7_data_if(x){
        x = x.replace(/[if()]/g, '');
        data = x.split(",");
        console.log(data);
        if(eval(data[0])){
            console.log("ok");
            return mexp.eval(data[1]);
        }else{
            console.log("not");
            return mexp.eval(data[2]);
        }
        //return x;
    }
    function cf7_data_number(field_regexp,eq) {
        
         
    }
    function cf7_format (number) {
        var enable = $("#cf7-calculator-enable").val();
        if( enable == "yes" ){
              var decimals = $("#cf7-calculator-decimals").val();
              var decPoint = $("#cf7-calculator-separator").val();
              var thousandsSep = $("#cf7-calculator-thousand").val();

              number = (number + '').replace(/[^0-9+\-Ee.]/g, '')
              var n = !isFinite(+number) ? 0 : +number
              var prec = !isFinite(+decimals) ? 0 : Math.abs(decimals)
              var sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep
              var dec = (typeof decPoint === 'undefined') ? '.' : decPoint
              var s = ''

              var toFixedFix = function (n, prec) {
                var k = Math.pow(10, prec)
                return '' + (Math.round(n * k) / k)
                  .toFixed(prec)
              }

              // @todo: for IE parseFloat(0.55).toFixed(0) = 0;
              s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
              if (s[0].length > 3) {
                
                s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep)
              }
              if ((s[1] || '').length < prec) {
                s[1] = s[1] || ''
                s[1] += new Array(prec - s[1].length + 1).join('0')
                
              }
              /**
               Remove .00

                var check_zero = "";
                  for( var i =0; i < decimals ; i++){
                        check_zero +="0";
                  }
                  if( s[1] == check_zero) {
                    delete s[1];
                    return cf7_currency_custom(s.join(""));
                  }else{
                    return cf7_currency_custom(s.join(dec));
                  }
              **/
            return cf7_currency_custom(s.join(dec));                  
        }else{
            return cf7_currency_custom(number);
        }
    }
    function cf7_currency_custom(str){
        var currency = $("#cf7-calculator-currency").val();
        if(currency == ""){
            return str;
        }else{
            var type = $("#cf7-calculator-currency_position").val();
            if( type == "left_space"){
                return  currency + " " + str;
            }else if( type == "right"){
                return   str + currency;    
            }else if( type == "right_space") {
                return str + " " + currency ;
            }else{
                return  currency +  str;
            }
        }
    }
    function remove_duplicates_ctf7(arr) {
        var obj = {};
        var ret_arr = [];
        for (var i = 0; i < arr.length; i++) {
            obj[arr[i]] = true;
        }
        for (var key in obj) {
            if("_wpcf7" == key || "_wpcf7_version" == key  || "_wpcf7_locale" == key  || "_wpcf7_unit_tag" == key || "_wpnonce" == key || "undefined" == key  || "_wpcf7_container_post" == key || "_wpcf7_nonce" == key  ){

            }else {
                if(key !=""){
                    ret_arr.push(key +"(?!\\d)");
                }
                
            }
        }
        return ret_arr;
    }
});