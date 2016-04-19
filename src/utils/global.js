import moment from 'moment';

String.prototype.format = function(){
   var content = this;
   for (var i=0; i < arguments.length; i++)
   {
        var replacement = '{' + i + '}';
        content = content.replace(replacement, arguments[i]);
   }
   return content;
};

window.guid = function(){
    function _p8(s) {
        var p = (Math.random().toString(16)+"000000000").substr(2,8);
        return s ? "-" + p.substr(0,4) + "-" + p.substr(4,4) : p ;
    }
    return _p8() + _p8(true) + _p8(true) + _p8();
}

Number.prototype.randomize = function(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

 window.momentToggleFormats = function(dateString, fromFormat, targetFormat){
      return moment(dateString, fromFormat).format(targetFormat);
 }